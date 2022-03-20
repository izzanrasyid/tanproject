import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../../../components/Checkbox';
import { jenjangList, kelasList, programList, pelajaranList } from '../../constant';

const Container = styled.div`
  flex: 3;
  padding: 0 5% 5% 5%;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Filter = () => {
  return (
    <Container>
      <CheckboxWrapper>
        <Checkbox checklist={jenjangList} title={'Jenjang'} />
        <Checkbox checklist={kelasList} title={'Kelas'} />
        <Checkbox checklist={programList} title={'Program'} />
        <Checkbox checklist={pelajaranList} title={'Mata Pelajaran'} />
      </CheckboxWrapper>
    </Container>
  );
};

export default Filter;