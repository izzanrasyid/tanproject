import React from "react";
import { Text } from "../../../components/Text";
import {
  TabContainer,
  TabButtonLeft,
  TabButtonRight
} from "../styles";

const Tab = ({ isStudentLogin, setIsStudentLogin }) => {

  const tabChange = (type) => {
    if (type === 'teacher') {
      return setIsStudentLogin(false);
    };
    return setIsStudentLogin(true);
  };

  return (
    <TabContainer>
      <TabButtonLeft active={isStudentLogin} onClick={() => tabChange('student')}>
        { 
          isStudentLogin ? 
          <Text size={'18px'} weight={'700'} color={'#4CAF50'}>Login sebagai Siswa</Text>
          :
          <Text size={'18px'} weight={'700'} color={'rgba(134, 134, 134, 0.5)'}>Login sebagai Siswa</Text>
        }
      </TabButtonLeft>
      <TabButtonRight active={!isStudentLogin} onClick={() => tabChange('teacher')}>
        { 
          !isStudentLogin ? 
          <Text size={'18px'} weight={'700'} color={'#4CAF50'}>Login sebagai Pengajar</Text>
          :
          <Text size={'18px'} weight={'700'} color={'rgba(134, 134, 134, 0.5)'}>Login sebagai Pengajar</Text>
        }
      </TabButtonRight>
    </TabContainer>
  );
};

export default Tab;