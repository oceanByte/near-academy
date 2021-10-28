import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../Header/Header.controller';
import { CloseBtn, FormContainer, ImgContainer, Wrapp } from './LayoutAuth.style';


export const LayoutAuthView = ({ children }: any) => {
  const history = useHistory()
  return (
    <Wrapp>
      <ImgContainer />
      <FormContainer>
        <CloseBtn onClick={() => history.push(`/near101/splash-1`) } />
        <Header authPage />
        {children}
      </FormContainer>
    </Wrapp>
  );
};

