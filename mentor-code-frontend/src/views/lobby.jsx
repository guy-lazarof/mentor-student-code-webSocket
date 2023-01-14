import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

import { CodePreview } from '../cmp/code-preview';

const socket = io.connect("http://localhost:3001")

export function Lobby({ codes }) {
  const navigate = useNavigate()

  function openCodeBlock(codeId) {
    navigate(`/code-block/${codeId}`)
    // socket.emit('choose_code', codeId)
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