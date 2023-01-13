import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { codeService } from '../services/code.service';
import { Lobby } from './lobby';

export function CodeBlock({ codes }) {
  const [codeToDisplayState, setCodeToDisplayState] = useState(null)
  const { codeId } = useParams()

  useEffect(() => {
    findCode(codeId)
  }, [])

  function findCode(codeId) {
    if (codes.length) {
      const currCode = codes.filter(code => code._id === codeId)

      setCodeToDisplayState(() => currCode)
    }
  }

  if (!codeToDisplayState) {
    return <h2> Loading code</h2>
  } else {
    const { _id, title, description, example, challenge, code } = codeToDisplayState[0]
    return (
      < article className='code-block' >
        <div>
          <p>{_id}</p><br />
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
}