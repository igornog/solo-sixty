import { Search } from '@mui/icons-material';
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import { FieldType } from '../../constants';
import DateInput from '../Input/DateInput';

interface filterProps {
  label: string;
  type: FieldType;
  options?: string[];
}

interface Props {
  filters: filterProps[];
}

const FilterNavigationBar: React.FunctionComponent<Props> = (props) => {
  const [searchBox, setSearchBox] = useState(false);

  return (
    <>
      <div className="flex items-center px-4">
        <Search
          className="text-grey6 w-[16px] cursor-pointer"
          onClick={() => {
            setSearchBox(!searchBox);
          }}
        />
        {props.filters.map((filter: filterProps) => {
          return (
            <>
              {filter.type !== FieldType.Date ? (
                <FormControl
                  sx={{
                    margin: 1,
                    width: 120,
                    '&:focus-visible': { outline: 'none' },
                    '&>*:focus-visible': { outline: 'none' },
                    '&>*:hover>fieldset': { border: 'none' },
                  }}
                >
                  <InputLabel
                    id={`select-${filter.label}`}
                    className={`text-sm top-[-7px]`}
                    sx={{
                      '&.Mui-focused': { color: '#60A498', top: '0px' },
                      '&.MuiInputLabel-shrink': { top: '3px' },
                    }}
                  >
                    {filter.label}
                  </InputLabel>
                  <Select
                    sx={{
                      boxShadow: 'none',
                      fontSize: '14px',
                      '&>div': {
                        paddingBottom: '10px',
                        paddingTop: '10px',
                        outline: 'none',
                      },
                    }}
                    labelId={`select-${filter.label}-labe`}
                    id={`select-${filter.label}`}
                    label={filter.label}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {filter.options?.map((option: string, i: number) => {
                      return (
                        <MenuItem key={i} value={i}>
                          {option}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              ) : (
                <DateInput />
              )}
            </>
          );
        })}
      </div>
      <div
        className={`transition-[max-height] ease-[ease-in-out] overflow-hidden ${
          searchBox ? 'max-h-20 duration-[300ms]' : 'max-h-0 duration-[500ms]'
        }`}
      >
        <span className="border-b-[solid] border-b w-auto block mx-4 text-grey6 opacity-[0.3]"></span>
        <div className="px-4 py-2">
          <Input
            fullWidth
            placeholder={'Enter Keyword'}
            disableUnderline
            disableInjectingGlobalStyles
            type={'search'}
            className={'py-0 [&:placeholder]:text-grey6 text-sm'}
          />
        </div>
      </div>
    </>
  );
};

export default FilterNavigationBar;
