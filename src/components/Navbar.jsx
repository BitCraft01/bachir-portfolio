import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
`;

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Links = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export default function Navbar() {
  return (
    <Nav>
      <Name>Bachir Dicko</Name>
      <Links>
        <li>About</li>
        <li>Resume</li>
        <li>Cover Letter</li>
        <li>Infographic</li>
        <li>Correspondence</li>
        <li>Tutorial Video</li>
        <li>Home</li>
      </Links>
    </Nav>
  );
}