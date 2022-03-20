import React from 'react';
import Checkbox from '../../../../components/Checkbox';
import Dropdown from '../../../../components/Dropdown';
import { jenjangList, kelasList, programList, pelajaranList } from '../../constant';
import { Container, CheckboxWrapper, DropdownWrapper } from './styles';

const Filter = () => {
  return (
    <Container>
      <CheckboxWrapper>
        <Checkbox checklist={jenjangList} title={'Jenjang'} />
        <Checkbox checklist={kelasList} title={'Kelas'} />
        <Checkbox checklist={programList} title={'Program'} />
        <Checkbox checklist={pelajaranList} title={'Mata Pelajaran'} />
      </CheckboxWrapper>
      <DropdownWrapper>
        <Dropdown title={'Jenjang'} list={jenjangList} />
        <Dropdown title={'Kelas'} list={kelasList} />
        <Dropdown title={'Program'} list={programList} />
        <Dropdown title={'Mata Pelajaran'} list={pelajaranList} />
      </DropdownWrapper>
    </Container>
  );
};

export default Filter;