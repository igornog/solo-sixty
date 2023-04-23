import { Search } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React from 'react';
import Input from '../Input';
import AccountMenu from '../Menu/AccountMenu';
import { Navigation, NavigationProps } from '../Navbar/Navbar';

const Header: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className="flex px-0 py-8 items-start justify-between">
      <div className="flex items-center gap-[50px]">
        <h4 className="font-heading">
          {Navigation.find(
            (item: NavigationProps) => item.link === router.route,
          )?.name ??
            Navigation.map((item: NavigationProps) => {
              return item.subItems?.find(
                (item: NavigationProps) => item.link === router.route,
              )?.name;
            })}
        </h4>
        <Input
          placeholder={'Search'}
          type={'search'}
          startAdornment={<Search className="text-grey6" />}
        />
      </div>
      <div className="flex items-center gap-[15px] pr-8">
        <AccountMenu />
      </div>
    </div>
  );
};

export default Header;
