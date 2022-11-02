
import { Container, Column, Row } from './Styles/Grid';
import GlobalStyle from './Styles/Global';
import { Routes, Route, NavLink } from "react-router-dom";
import Home  from './Home';
import Authors  from './components/Authors';
import Books  from './components/Books';

import Nav from './Styles/Nav';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Column>
        <Row>
          <Nav>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/authors">Authors</NavLink>
              <NavLink to="/books">Books</NavLink>
            </ul>
          </Nav>
        </Row>
      </Column>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Container>
  );
}

export default App;
