import styled from "styled-components";

export const StyledBookNowBtn = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--white);
  text-transform: uppercase;
  background-color: var(--hot-pink);
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;

  &:hover {
    scale: 1.15;
  }

  @media (min-width: 1200px) {
    margin-right: auto;
  }
`;
