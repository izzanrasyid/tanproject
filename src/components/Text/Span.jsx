import styled from 'styled-components';

const Text = styled.span`
  font-size: ${({ size }) => size};
  font-family: ${({ family = 'regular' }) => family};
  color: ${({ color }) => color};
  text-align: ${({ align = 'left' }) => align};
  font-weight: ${({ weight }) => weight || '400'};
`;

export default Text;