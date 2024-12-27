import * as React from 'react';
import "./Page.css";
import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DataGrid } from '@mui/x-data-grid';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function createData(Studentid, FirstName, LastName, Email, GraduationYear) {
  return { id: Studentid, FirstName, LastName, Email, GraduationYear }; // Added `id` field for DataGrid compatibility
}
function createDatas(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const row = [
  createDatas(1, 'Cupcake', 305, 3.7, 67, 4.3),
  createDatas(2, 'Donut', 452, 25.0, 51, 4.9),
  createDatas(3, 'Eclair', 262, 16.0, 24, 6.0),
  createDatas(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createDatas(5, 'Gingerbread', 356, 16.0, 49, 3.9),
  createDatas(6, 'Honeycomb', 408, 3.2, 87, 6.5),
  createDatas(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createDatas(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
  createDatas(9, 'KitKat', 518, 26.0, 65, 7.0),
  createDatas(10, 'Lollipop', 392, 0.2, 98, 0.0),
  createDatas(11, 'Marshmallow', 318, 0, 81, 2.0),
  createDatas(12, 'Nougat', 360, 19.0, 9, 37.0),
  createDatas(13, 'Oreo', 437, 18.0, 63, 4.0),
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
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];



// Adjusted rows to align with the column definitions
const rows = [
  createData('w22-0035', "Liz", "Albert", "liz@college.com", 2022),
  createData('w21-0281', "Laura", "Wilson", "laura@college.com", 2021),
  createData('w22-0222', "Kevin", "Hunter", "kevin@college.com", 2022),
  createData('w22-0091', "Katherine", "Berg", "katherine@college.com", 2022),
];

export default function BasicTable() {

  // Fixed column definitions to match `rows` field names
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'FirstName', headerName: 'First Name', width: 130 }, 
    { field: 'LastName', headerName: 'Last Name', width: 130 },   
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'GraduationYear', headerName: 'Graduation Year', type: 'number', width: 150 },
  ];

  // Defined paginationModel for DataGrid initialState
  const paginationModel = { pageSize: 5, page: 0 };

  return (
    <div className="Table">
      <TableContainer component={Paper}>
        <Table sx={{ minwidth: 300, tableLayout: 'fixed', borderCollapse: 'separate', borderSpacing: '0 0' }}>
          <TableHead>
            <TableRow>
              <TableCell>Student-id</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Graduation Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id} 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id} {/* Adjusted field */}
                </TableCell>
                <TableCell align="right">{row.FirstName}</TableCell>
                <TableCell align="right">{row.LastName}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.GraduationYear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <div style={{ width: '100%', marginTop: '20px' }}>
        <Divider variant="middle" />
      </div>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }} // Fixed paginationModel usage
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}

        />
         </Paper>


         <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />

          </TableCell>
                  {headCells.map((headCell) => (
                    <TableCell
                      key={headCell.id}
                      align={headCell.numeric ? 'right' : 'left'}
                      padding={headCell.disablePadding ? 'none' : 'normal'}
                      sortDirection={orderBy === headCell.id ? order : false}</TableCell>
                              {headCells.map((headCell) => (
                                <TableCell
                                  key={headCell.id}
                                  align={headCell.numeric ? 'right' : 'left'}
                                  padding={headCell.disablePadding ? 'none' : 'normal'}
                                  sortDirection={orderBy === headCell.id ? order : false}

                                      >

              <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
     
    </div>
  );
}
