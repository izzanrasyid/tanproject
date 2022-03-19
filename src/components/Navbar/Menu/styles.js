import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (!isOpen ? 'none' : null)}
  }
`;

export const HamburgerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 20px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  padding-right: 20px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  color: #000;
  transition: all 0.3s ease-in;
`;