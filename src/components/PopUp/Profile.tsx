import * as React from 'react';
import profileImg from '../../../public/images/Userpic.svg';
import arrow from '../../../public/images/Arrow.svg';
import Image from 'next/image';

export default function Profile() {
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
      <button onClick={handleClick}>
        <Image src={profileImg} alt={'profile-pic'} />
        {/* <Image src={arrow} alt={'arrow'} /> */}
      </button>
      {/* <ul>
        <li>Settings</li>
        <li onClick={logout}>Logout</li>
      </ul> */}
    </>
  );
}
