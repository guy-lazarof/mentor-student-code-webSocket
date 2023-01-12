import './scss/style.scss';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { AppFooter } from './cmp/app-footer';
import { AppHeader } from './cmp/app-header';
import { About } from './views/about';
import { CodeBlock } from './views/code-block';
import { Lobby } from './views/lobby';

export default function RootCmp() {
  return (
    <div className="App">
      < Router >
        <section className="main-layout app">
          <AppHeader />

          <Routes>
            <Route path="/" element={<Lobby />} />

            <Route path="/about" element={<About />} />
            <Route path="/code-block/:codeId" element={<CodeBlock />} />
          </Routes>

          <AppFooter />
        </section>
      </Router >
    </div>
  );
}
