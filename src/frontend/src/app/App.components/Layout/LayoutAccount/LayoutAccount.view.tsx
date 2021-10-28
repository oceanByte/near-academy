import { MainFooter } from 'app/App.components/MainFooter/MainFooter.controller';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../Header/Header.controller';
import { MainContainer, Wrapp } from './LayoutAccount.style';

export const LayoutAccountView = ({ children }: any) => {
  const history = useHistory()
  return (
    <Wrapp>
      <Header accountPage authPage />
      <MainContainer>
        {children}
      </MainContainer>
      <MainFooter />
    </Wrapp>
  );
};
