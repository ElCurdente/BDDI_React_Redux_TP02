import styled from "styled-components";

const Nav = styled.nav`
    ul {
        margin: 0 !important;
        list-style:none;
        li{
            display : inline-block;
            margin: 0 0.5rem; padding : 0 0.4rem;
            text-align : center;
            span { font-size : 0.9rem ;}
        }   
    }
    a {
        font-size: 2rem;
        text-transform: uppercase;
        display:block;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0D0C1D;
        text-decoration: none;
        transition: color 0.3s linear;
        gap: 1rem;
    
        &:hover {
          color: #343078;
        }
      }
    @media(max-width: 450px) {
        flex-flow: column wrap; /*4*/
    }
`;

export default Nav;