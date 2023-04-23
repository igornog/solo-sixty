import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export interface TabProps {
  title: string;
  counter: string;
}

interface TabsProps {
  tabs: TabProps[];
  children?: React.ReactNode;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NavigationTabs: React.FunctionComponent<TabsProps> = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        className="border-transparent"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="[&>div>span]:bg-primary [&>div>div]:items-baseline"
        >
          {props.tabs.map((tab: TabProps, i: number) => {
            return (
              <Tab
                key={i}
                label={
                  <div className="flex">
                    <p className="capitalize">{tab.title}</p>
                    <span className="text-grey7 ml-[5px]">{tab.counter}</span>
                  </div>
                }
                {...a11yProps(i)}
                disableRipple
              ></Tab>
            );
          })}
          {props.children}
        </Tabs>
      </Box>
    </Box>
  );
};

export default NavigationTabs;
