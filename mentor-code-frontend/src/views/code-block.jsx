import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { codeService } from '../services/code.service';
import { Lobby } from './lobby';

export function CodeBlock({ codes }) {
  const [codeToDisplayState, setCodeToDisplayState] = useState(null)
  const { codeId } = useParams()
  const [textState, setTextState] = useState('initial');

  useEffect(() => {
    findCode(codeId)
  }, [])

  useEffect(() => {
    if (codeToDisplayState) {
      displayCode()
    }
  }, [codeToDisplayState])


  function findCode(codeId) {
    if (codes.length) {
      let currCode = null
      currCode = codes.filter(code => code._id === codeId)

      if (currCode.length) {
        setCodeToDisplayState(currCode[0]);
      }
    }
  }

  function displayCode() {
    const { _id, title, description, example, challenge, code } = (codeToDisplayState)
    let text = `${title}
    
Description: ${description}

Example: ${example}

Your challenge:${challenge}

Add your code here:


${code}
`
    setTextState(text)
  }

  return (

    < article className='code-block' >
      <textarea className='code-block-text-area'
        value={textState}
        onChange={(e) => setTextState(e.target.value)}
        spellCheck="false"
      />
    </article >
  )
}
