import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
function createData(Enroll, Name, Gender, Age, MobileNo) {
    return {
     Enroll,
      Name,
      Age,
      MobileNo,
     
    };
  }
  const rows = [
    createData(12345, 'Rohit', 'Male', 22, 9876543210),
    createData(23456, 'Priya', 'Female', 21, 9123456789),
    createData(34567, 'Raj', 'Male', 23, 9234567890),
    createData(45678, 'Anjali', 'Female', 24, 9345678901),
    createData(56789, 'Amit', 'Male', 22, 9456789012),
    createData(67890, 'Sneha', 'Female', 21, 9567890123),
    createData(78901, 'Karan', 'Male', 23, 9678901234),
    createData(89012, 'Neha', 'Female', 24, 9789012345),
    createData(90123, 'Abhishek', 'Male', 25, 9890123456),
    createData(10234, 'Ritu', 'Female', 22, 9901234567),
    createData(20345, 'Vikas', 'Male', 21, 9412345678),
    createData(31456, 'Sakshi', 'Female', 23, 9523456789),
    createData(42567, 'Sandeep', 'Male', 24, 9634567890),
    createData(53678, 'Meera', 'Female', 25, 9745678901),
    createData(64789, 'Arjun', 'Male', 22, 9856789012),
    
  ];
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)',
    },
    {
      id: 'Name',
      numeric:false,
      disablePadding: false,
      label: 'Name',
    },
    {
      id: 'Gender',
      numeric:false,
      disablePadding: false,
      label: 'Gender',
    },
    {
      id: 'Age',
      numeric: true,
      disablePadding: false,
      label: 'Age',
    },
    {
      id: 'MobileNo',
      numeric: true,
      disablePadding: false,
      label: 'MobileNo',
    },
  ];