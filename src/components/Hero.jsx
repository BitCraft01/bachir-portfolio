import styled from "styled-components";

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 2rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title>Who am I</Title>
    </HeroSection>
  );
}