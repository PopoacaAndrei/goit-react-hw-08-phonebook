import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  margin-bottom: 6px;
  border-radius: 10px;
  font-weight: 700;
  color: black;
  width: 100px;

  &.active {
    color: #fff;
    background: linear-gradient(271deg, #639fec, #45a4e4, #6fa1e2, #7f92e7);
  }
`;
