import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import List from './List';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  padding: 5% 0;
`;

const Checkbox = ({title, checklist}) => {
  return (
    <Container>
      <Text size={'28px'} weight={'400'} color={'#333849'}>{title}</Text>
      <FormWrapper>
        <form>
          {
            checklist.map((item, id) => <List title={item.title} key={id} quantity={item.quantity} />)
          }
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Checkbox;