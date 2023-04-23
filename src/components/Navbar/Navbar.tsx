import { useRouter } from 'next/router';
import Image from 'next/image';
import { MenuItems } from '../../constants';
import logoBlack from '../../../public/images/logo-black.svg';
import DashboardIcon from '../../../public/images/DashboardIcon.svg';
import LocationsSessionsIcon from '../../../public/images/LocationsSessionsIcon.svg';
import MarketingIcon from '../../../public/images/MarketingIcon.svg';
import OperationIcon from '../../../public/images/OperationIcon.svg';
import PartnersIcon from '../../../public/images/PartnersIcon.svg';
import ReportsInsightsIcon from '../../../public/images/ReportsInsightsIcon.svg';
import UsersIcon from '../../../public/images/UsersIcon.svg';
import CreditsIcon from '../../../public/images/CreditsIcon.svg';

export const Navigation: NavigationProps[] = [
  {
    link: '/',
    icon: DashboardIcon,
    name: MenuItems.Dashboard,
  },
  {
    link: '/locations&sessions',
    icon: LocationsSessionsIcon,
    name: MenuItems.LocationsAndSessions,
    subItems: [
      {
        link: '/locations&sessions/locations',
        name: MenuItems.Locations,
      },
      {
        link: '/locations&sessions/sessions',
        name: MenuItems.Sessions,
      },
    ],
  },
  {
    link: '/users',
    icon: UsersIcon,
    name: MenuItems.Users,
  },
  {
    link: '/credits',
    icon: CreditsIcon,
    name: MenuItems.Credits,
  },
  {
    link: '/marketing',
    icon: MarketingIcon,
    name: MenuItems.Marketing,
  },
  {
    link: '/reports&insights',
    icon: ReportsInsightsIcon,
    name: MenuItems.ReportsAndInsights,
  },
  {
    link: '/operation',
    icon: OperationIcon,
    name: MenuItems.Operation,
  },
  {
    link: '/partners',
    icon: PartnersIcon,
    name: MenuItems.Partners,
  },
];
export interface NavigationProps {
  link: string;
  icon?: any;
  name: any;
  subItems?: NavigationProps[];
}

const NavBar: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className="h-full w-auto min-w-[15vw] font-inter">
      <Image className="p-8" src={logoBlack} alt={'logo'} />
      <ul className="list-none flex flex-col w-[inherit] p-0">
        {Navigation.map((item: NavigationProps, index: number) => {
          return (
            <>
              <li
                className={`flex gap-2.5 items-baseline text-center 
              relative z-[1] whitespace-nowrap px-8 py-4 cursor-pointer
              hover:bg-gradient-to-r from-[#60A498_-250%] to-white
              ${
                router.route === item.link &&
                `bg-gradient-to-r from-[#60A498_-150%] to-white`
              }
              
              `}
                onClick={() => router.push(item.link)}
                key={index}
              >
                <Image
                  src={item.icon}
                  width={12}
                  height={14}
                  alt={item.name}
                  className={`
              ${
                router.route === item.link &&
                'invert-[61%] sepia-[8%] saturate-[1609%] hue-rotate-[120deg] brightness-[96%] contrast-[88%]'
              }`}
                />
                <p
                  className={` font-normal text-sm ${
                    router.route === item.link && 'text-primary font-semibold'
                  }`}
                >
                  {item.name}
                </p>
              </li>

              {item.subItems && (
                <>
                  {item.subItems.map(
                    (subItem: NavigationProps, index: number) => {
                      return (
                        <li
                          className={`flex gap-2.5 items-center text-center 
                          relative z-[1] whitespace-nowrap px-8 py-4 pl-[calc(2.625rem+24px)] cursor-pointer
                          hover:bg-gradient-to-r from-[#60A498_-250%] to-white
                          ${
                            router.route === subItem.link &&
                            `bg-gradient-to-r from-[#60A498_-150%] to-white`
                          }
                          ${item.subItems?.map((subItem: any) => {
                            if (
                              subItem.link.includes(item.link) &&
                              router.route === item.link
                            ) {
                              return `bg-gradient-to-r from-[#60A498_-150%] to-white`;
                            }
                          })}
                          `}
                          onClick={() => router.push(subItem.link)}
                          key={index}
                        >
                          <p
                            className={` font-normal text-sm ${
                              router.route === subItem.link &&
                              'text-primary font-semibold'
                            }`}
                          >
                            {subItem.name}
                          </p>
                        </li>
                      );
                    },
                  )}
                </>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
