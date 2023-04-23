import styled, { css } from 'styled-components';
import { black, green, grey2, white } from '../../utils/colors';
import Typography from '../Typography/Typography';
import { Box } from '@mui/material';
import logoBlack from '../../../public/images/logo-black.svg';
import { MenuOptions } from '../../utils/redux/types/status.type';
import Dashboard from '../../pages/dashboard';
import { Home } from 'iconsax-react';
import router from 'next/router';

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 2vh;
  width: inherit;
`;

const StyledListItem = styled.li<{ isActive: boolean }>`
  display: flex;
  gap: 10px;
  padding: 1rem 2rem;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  white-space: nowrap;

  ${({ isActive }) =>
    isActive &&
    css`
      background: linear-gradient(
        90deg,
        rgba(96, 164, 152, 0.2) 0%,
        rgba(96, 164, 152, 0) 34.9%
      );
      color: ${green};

      p {
        font-weight: 600;
      }
    `}

  &:hover {
    transition: 0.3s;
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgba(96, 164, 152, 0.2) 0%,
      rgba(96, 164, 152, 0) 34.9%
    );
    color: ${green};
  }
`;

const StyledLogo = styled.img`
  padding: 2rem;
`;

export const Navigation: NavigationProps[] = [
  {
    link: '/dashboard',
    icon: <Home />,
    name: MenuOptions.Dashboard,
  },
  {
    link: '/booking&gyms',
    icon: <Home />,
    name: MenuOptions.BookingsAndGyms,
  },
  {
    link: '/credits',
    icon: <Home />,
    name: MenuOptions.Credits,
  },
  {
    link: '/users&subscriptions',
    icon: <Home />,
    name: MenuOptions.UsersAndSubscriptions,
  },
  {
    link: '/operation',
    icon: <Home />,
    name: MenuOptions.Operation,
  },
  {
    link: '/marketing',
    icon: <Home />,
    name: MenuOptions.Marketing,
  },
  {
    link: '/partners',
    icon: <Home />,
    name: MenuOptions.Partners,
  },
  {
    link: '/reports&insights',
    icon: <Home />,
    name: MenuOptions.ReportsAndInsights,
  },
];
export interface NavigationProps {
  link: string;
  icon?: React.ReactNode;
  name: MenuOptions;
}

const NavBar: React.FunctionComponent = () => {
  const handleNavigate = (link: string, name: MenuOptions) => {
    router.push(link);
  };

  return (
    <Box height={'100%'} width={'auto'}>
      <StyledLogo src={logoBlack} alt={'logo'} />
      <StyledList>
        {Navigation.map((item: NavigationProps, index: number) => {
          return (
            <StyledListItem
              isActive={false}
              onClick={() => handleNavigate(item.link, item.name)}
              key={index}
            >
              {item.icon}
              <Typography variant={'body1'}>{item.name}</Typography>
            </StyledListItem>
          );
        })}
      </StyledList>
    </Box>
  );
};

export default NavBar;
