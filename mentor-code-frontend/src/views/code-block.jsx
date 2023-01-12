import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { codeService } from '../services/code.service';
import { Lobby } from './lobby';

export function CodeBlock() {
  const [codeState, setCodeState] = useState('')
  const { codeId } = useParams()

  useEffect(() => {
    loadCode()
  }, [])

  function loadCode() {
    codeService.get(codeId)
      .then((code) => setCodeState(code))
      .catch(err => console.log(err))
  }
  if (!codeState) return <h2>Loading code...</h2>
  const { _id, title, description, example, challenge, code, } = codeState

  return (
    < article className='code-block' >
      <div>
        <p>{_id}</p>
        <p className='code-block-title'>{title}</p><br />
        <p>{description}</p><br />
        <p>{example}</p><br />
        <p>{challenge}</p><br />
        <p>//Write your code below </p>
        <p>{code}</p>
      </div>
    </article >
  )
}