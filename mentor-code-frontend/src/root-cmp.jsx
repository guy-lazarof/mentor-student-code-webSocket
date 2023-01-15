import './scss/style.scss';

import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

import { AppFooter } from './cmp/app-footer';
import { AppHeader } from './cmp/app-header';
import { codeService } from './services/code.service';
import { About } from './views/about';
import { CodeBlock } from './views/code-block';
import { Lobby } from './views/lobby';

const socket = io.connect((process.env.NODE_ENV === 'production') ? "" : "http://localhost:3001")

export default function RootCmp() {
  const [codesState, setCodesState] = useState([])

  socket.on('connect', () => {
    socket.emit('getData');
  });

  socket.on('data', (data) => {
    setCodesState(data);
  });

  return (
    <div className="App">
      < Router >
        <section className="main-layout app">
          <AppHeader />
          <Routes>
            <Route path="/" element={<Lobby codes={codesState} />} />

            <Route path="/about" element={<About />} />
            <Route path="/code-block/:codeId" element={<CodeBlock codes={codesState} />} />
          </Routes>
          <AppFooter />
        </section>
      </Router >
    </div>
  );
}
