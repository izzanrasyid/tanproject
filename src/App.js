import { Text } from './components/Text';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Appl = styled.div`
  height: 100vh;
  background-color: #56D67A;
`;

const App = () => {
  return (
    <Appl>
      <Navbar />
      <Text size={'55px'}>WELCOME TO TAN STUDIES</Text>
    </Appl>
  );
};

export default App;
