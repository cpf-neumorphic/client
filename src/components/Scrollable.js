import styled from "styled-components";

export default styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  align-items: center;

  /* Mobile horizontal scroll */
  @media (max-width: 768px) {
    grid-auto-columns: minmax(300px, 1fr);
    grid-auto-flow: column;
    overflow-x: auto;
  }
`;
