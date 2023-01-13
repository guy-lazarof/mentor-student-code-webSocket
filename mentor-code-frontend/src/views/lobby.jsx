import { useNavigate } from 'react-router-dom';

import { CodePreview } from '../cmp/code-preview';

export function Lobby({ codes }) {
  const navigate = useNavigate()

  function openCodeBlock(codeId) {
    navigate(`/code-block/${codeId}`)
  }

  return (
    <section className='lobby'>
      {codes.map((code) => {
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