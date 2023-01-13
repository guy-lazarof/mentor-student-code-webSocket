import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { CodePreview } from '../cmp/code-preview';
import { codeService } from '../services/code.service';

export function Lobby() {

  const [codesState, setCodesState] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    loadCodes()
  }, [])

  function loadCodes() {
    codeService.query()
      .then((codes) => setCodesState(codes))
      .catch(err => { throw err })
  }

  function openCodeBlock(codeId) {
    navigate(`/code-block/${codeId}`)
  }

  return (
    <section className='lobby'>
      {codesState.map((code) => {
        return (
          <section className='code-preview' key={code._id}>
            <CodePreview currCode={code} />
            <button onClick={() => openCodeBlock(code._id)} className='btn code-preview-btn'>Let's Code</button>
          </section>
        )
      })}
    </section>
  )
}