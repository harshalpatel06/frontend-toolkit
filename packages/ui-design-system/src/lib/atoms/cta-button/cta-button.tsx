import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CtaButtonProps {}

const StyledCtaButton = styled.button`
  color: yellow;
`;

export function CtaButton(props: CtaButtonProps) {
  return (
    <StyledCtaButton>
      <h1>Welcome to CtaButton!</h1>
    </StyledCtaButton>
  );
}

export default CtaButton;
