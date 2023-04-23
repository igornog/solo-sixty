import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import profileImg from '../../../public/images/Userpic.svg';
import arrow from '../../../public/images/Arrow.svg';
import { ButtonBase } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';

const StyledButton = styled(ButtonBase)`
  display: flex;
  gap: 10px;
`;

const StyledMenu = styled(Menu)`
  margin: 5px;

  div {
    border-radius: 1px;
  }
`;

export default function ProfilePopUp() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    window.location.href = '/';
  };

  return (
    <>
      <StyledButton
        disableRipple
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Image src={profileImg} alt={'profile-pic'} />
        <Image src={arrow} alt={'arrow'} />
      </StyledButton>
      <StyledMenu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem disableRipple>Settings</MenuItem>
        <MenuItem disableRipple onClick={logout}>
          Logout
        </MenuItem>
      </StyledMenu>
    </>
  );
}
