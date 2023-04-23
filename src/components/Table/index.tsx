import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SessionRowMenu from '../Menu/SessionRowMenu';
import {
  CheckRounded,
  Dashboard,
  DashboardOutlined,
  ErrorOutline,
} from '@mui/icons-material';

function createData(
  session: {
    time: string;
    date: string;
    location: string;
  },
  member: string,
  code: number,
  initialPrice: number,
  promo: boolean,
  finalPrice: number,
  status: string,
) {
  return { session, member, code, initialPrice, promo, finalPrice, status };
}

const rows = [
  createData(
    {
      time: '9:00 AM - 10:00 AM',
      date: 'Mar 1, 2023',
      location: 'Solo60 (Cornhill House)',
    },
    'Mark Brown',
    3720,
    10,
    true,
    8,
    'Finished',
  ),
  createData(
    {
      time: '9:00 AM - 10:00 AM',
      date: 'Mar 1, 2023',
      location: 'Solo60 (Cornhill House)',
    },
    'Mark Brown',
    3720,
    10,
    true,
    8,
    'Finished',
  ),
  createData(
    {
      time: '9:00 AM - 10:00 AM',
      date: 'Mar 1, 2023',
      location: 'Solo60 (Cornhill House)',
    },
    'Mark Brown',
    3720,
    10,
    true,
    8,
    'Finished',
  ),
  createData(
    {
      time: '9:00 AM - 10:00 AM',
      date: 'Mar 1, 2023',
      location: 'Solo60 (Cornhill House)',
    },
    'Mark Brown',
    3720,
    10,
    true,
    8,
    'Finished',
  ),
  createData(
    {
      time: '9:00 AM - 10:00 AM',
      date: 'Mar 1, 2023',
      location: 'Solo60 (Cornhill House)',
    },
    'Mark Brown',
    3720,
    10,
    true,
    8,
    'Finished',
  ),
  createData(
    {
      time: '9:00 AM - 10:00 AM',
      date: 'Mar 1, 2023',
      location: 'Solo60 (Cornhill House)',
    },
    'Mark Brown',
    3720,
    10,
    true,
    8,
    'Finished',
  ),
  createData(
    {
      time: '9:00 AM - 10:00 AM',
      date: 'Mar 1, 2023',
      location: 'Solo60 (Cornhill House)',
    },
    'Mark Brown',
    3720,
    10,
    true,
    8,
    'Finished',
  ),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 'none' }}
      className="border-b-[#ECEDF1] border-b border-solid rounded-md overflow-x-hidden"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-grey2 [&>th]:py-2 [&>th]:text-grey6 [&>th]:border-none [&>th]:text-xs">
            <TableCell>Session</TableCell>
            <TableCell align="left">Member</TableCell>
            <TableCell align="left">Code</TableCell>
            <TableCell align="left">Intial Price</TableCell>
            <TableCell align="left">Promo</TableCell>
            <TableCell align="left">Final Price</TableCell>
            <TableCell align="right">
              <DashboardOutlined className="w-3" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="[&>tr>th]:border-b-[#ECEDF1] [&>tr>td]:border-b-[#ECEDF1] [&>tr>*]:text-xs">
          {rows.map((row) => (
            <>
              <TableRow
                key={row.session.date}
                className={`relative [&:hover>.more]:w-[40px] [&:hover>.more]:visible`}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <ul>
                    <li>{row.session.time}</li>
                    <li>{row.session.date}</li>
                    <li>{row.session.location}</li>
                  </ul>
                </TableCell>
                <TableCell align="left">{row.member}</TableCell>
                <TableCell align="left">{row.code}</TableCell>
                <TableCell align="left">{row.initialPrice} Credits</TableCell>
                <TableCell align="left">
                  {row.promo ? <CheckRounded /> : <ErrorOutline />}
                </TableCell>
                <TableCell align="left">{row.finalPrice} Credits</TableCell>
                <TableCell align="left">Finished</TableCell>
                <TableCell
                  className="more invisible block cursor-pointer border-l-[#ECEDF1] border-l border-b-0 border-solid 
                  absolute bg-white h-full items-center flex justify-center right-0 
                  shadow-[-4px_0px_32px_rgba(0,0,0,0.1)]"
                >
                  <SessionRowMenu />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
