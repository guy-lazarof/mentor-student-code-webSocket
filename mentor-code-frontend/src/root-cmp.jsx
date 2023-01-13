import './scss/style.scss';

import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import { AppFooter } from './cmp/app-footer';
import { AppHeader } from './cmp/app-header';
import { codeService } from './services/code.service';
import { About } from './views/about';
import { CodeBlock } from './views/code-block';
import { Lobby } from './views/lobby';

export default function RootCmp() {
  const [codesState, setCodesState] = useState([])
  useEffect(() => {
    loadCodes()
  }, [])

  function loadCodes() {
    codeService.query()
      .then((codes) => { setCodesState(codes) })
      .catch(err => { throw err })
  }

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
