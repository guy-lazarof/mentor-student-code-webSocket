import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { codeService } from '../services/code.service';
import { Lobby } from './lobby';

export function CodeBlock({ codes }) {
  //create web socket connection
  const socket = new WebSocket('ws://localhost:3000')

  //connection opened
  socket.addEventListener('open', function (event) {
    console.log('connected to ws Server');
  })

  // listen for messages
  socket.addEventListener('message', function (event) {
    console.log('messagefrom server', event.data);
  })

  const sendMessage = () => {
    socket.send('Hello from client1')
  }

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
    let text = `${_id}
              ${title}
    
                ${description}
                ${example}
                ${challenge}
                ${code}
                `
    setTextState(text)
  }

  return (

    < article className='code-block' >
      <textarea className='code-block-text-area'
        value={textState}
        onChange={(e) => setTextState(e.target.value)}
      />
    </article >
  )
}

