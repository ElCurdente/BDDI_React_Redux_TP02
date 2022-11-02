
import { Container, Column, Row } from './Styles/Grid';
import GlobalStyle from './Styles/Global';
import { Routes, Route, NavLink } from "react-router-dom";
import Home  from './Home';
import Authors  from './Authors';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Column>
        <Row>
          <nav>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/authors">Authors</NavLink>
            </ul>
          </nav>
        </Row>
      </Column>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </Container>
  );
}

export default App;
