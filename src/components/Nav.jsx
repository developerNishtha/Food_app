import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1456A0;
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.a`
  color: #fff;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-right: 3rem;
  &:hover {
    text-decoration: underline;
  }
`;

function Nav({items}) {
  return (
    <Navbar> 
      {items.map((item,index)=>{
        return(<NavItem key={index} href={item?.link}>{item.title}</NavItem>)
      })}     
    </Navbar>
  );
}

export default Nav;