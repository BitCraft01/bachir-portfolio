import styled from "styled-components";

const Section = styled.section`
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export default function About() {
  return (
    <Section>
      <Text>
        My name is Bachir Dicko, and I am currently a junior at Kean University
        pursuing a degree in Computer Science. I have a strong interest in
        software development and enjoy working on projects that combine
        creativity with problem-solving. Professionally, my goal is to become
        a software engineer with a focus on creating user-friendly applications
        and technologies that make a positive impact.
      </Text>

      <Image src="/poster.jpg" alt="Conference presentation" />
    </Section>
  );
}