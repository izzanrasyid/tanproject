import styled from 'styled-components';

export const Container = styled.div`
  flex: 3;
  padding: 0 5% 5% 5%;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;