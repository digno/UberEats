import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../assets';

import logo from './logo.svg';
import basket from './basket.svg';
import Asap from '../UI/Asap';
import Location from '../UI/Location';

const Header = styled.header`
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16);
  padding: 16px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a``;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 14px 15.5px;
  border-radius: 2px;
  border: none;
  font-weight: 500;
  border: 1px solid inherit;
  font-size: 11px;
`;

const SignIn = Button.extend`
  border: 1px solid #e0e0e0;
  background-color: #fff;
  color: #1d1d1d;
  margin-right: 12px;
`;

const Register = Button.extend`
  color: #ffffff;
  background: #262626;
`;

const Basket = styled.button`
  display: none;
  border: none;
  background-color: inherit;

  ${minWidth.md`
    display: block;
    margin-left: 27px;
  `};
`;

const Search = styled.div`
  display: none;
  ${minWidth.md`
    display: flex;
    align-items: center;
  `};
`;

const To = styled.span`
  color: #626262;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <Content>
          <Logo href="#">
            <img src={logo} alt="logo" />
          </Logo>
          <Search>
            <Asap />
            <To>to</To>
            <Location />
          </Search>
          <Buttons>
            <SignIn>Sign In</SignIn>
            <Register>Register</Register>
            <Basket>
              <img src={basket} alt="basket" />
            </Basket>
          </Buttons>
        </Content>
      </div>
    </Header>
  );
};
