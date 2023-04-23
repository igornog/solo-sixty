import { Button } from '@mui/material';
import CustomButton from '../../components/Button';
import Feed from '../../components/Feed';
import FilterNavigationBar from '../../components/FilterNavBar';
import BasicTable from '../../components/Table';
import NavigationTabs from '../../components/Tabs';
import { FieldType } from '../../constants';

const tabs = [
  {
    title: 'All Locations',
    counter: '177',
  },
  {
    title: 'Solo60',
    counter: '107',
  },
  {
    title: 'Partner',
    counter: '42',
  },
  {
    title: 'Powered By',
    counter: '28',
  },
];

const Sessions = () => {
  return (
    <main className="flex h-full justify-between gap-[15px] bg-lightGrey">
      <div className="flex flex-col gap-4 m-4 min-w-[70%]">
        <nav className="bg-grey2 rounded w-full border-b-[#ECEDF1] border-b border-solid;">
          <NavigationTabs tabs={tabs}>
            <div className="w-full flex justify-end pr-4">
              <CustomButton
                colorVariant={'primary'}
                size={'small'}
                label={'Add A Session'}
                className={'rounded-[4px]'}
              />
            </div>
          </NavigationTabs>
        </nav>
        <nav className="bg-white rounded w-full border-b-[#ECEDF1] border-b border-solid;">
          <FilterNavigationBar
            filters={[
              {
                label: 'Location',
                type: FieldType.Text,
                options: [
                  'Standard Place, Shoreditch',
                  'Brewery Square, Tower Bridge',
                  'Spring Mews, Vauxhall',
                ],
              },
              {
                label: 'Date',
                type: FieldType.Date,
              },
              {
                label: 'Filter Type 3',
                type: FieldType.Text,
                options: [
                  'Standard Place, Shoreditch',
                  'Brewery Square, Tower Bridge',
                  'Spring Mews, Vauxhall',
                ],
              },
              {
                label: 'Filter Type 4',
                type: FieldType.Text,
                options: [
                  'Standard Place, Shoreditch',
                  'Brewery Square, Tower Bridge',
                  'Spring Mews, Vauxhall',
                ],
              },
            ]}
          />
        </nav>

        <BasicTable />
      </div>
      <Feed classNames="bg-grey2 w-full h-full place-items-center flex justify-center">
        <p className="text-grey3">Live Feed</p>
      </Feed>
    </main>
  );
};

export default Sessions;
