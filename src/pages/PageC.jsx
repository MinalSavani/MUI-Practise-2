import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TableSortLabel, TablePagination, Paper } from '@mui/material';

// Function to create data rows
const createData = (id, name, code, gender, age, phone) => {
  return { id, name, code, gender, age, phone };
};

const C = () => {
  // Provided data
  const rows = [
    createData(1, 'Minal', 423, 'Female', 18, 9898809782),
    createData(2, 'Amit', 101, 'Male', 20, 9988776655),
    createData(3, 'Sneha', 202, 'Female', 19, 9123456789),
    createData(4, 'Rohit', 303, 'Male', 21, 9876543210),
    createData(5, 'Priya', 404, 'Female', 18, 9654321987),
    createData(6, 'Vikram', 505, 'Male', 22, 9845123670),
    createData(7, 'Kiran', 606, 'Female', 20, 9012345678),
    createData(8, 'Sahil', 707, 'Male', 19, 9321654780),
    createData(9, 'Nidhi', 808, 'Female', 21, 9654871230),
    createData(10, 'Rahul', 909, 'Male', 22, 9832106547),
    createData(11, 'Meena', 111, 'Female', 20, 9988123456),
    createData(12, 'Arjun', 222, 'Male', 19, 9786543210),
    createData(13, 'Pooja', 333, 'Female', 18, 9123456789),
    createData(14, 'Kunal', 444, 'Male', 21, 9876543211),
    createData(15, 'Riya', 555, 'Female', 20, 9965432198)
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(rows);
  const [order, setOrder] = useState('asc');  // Sorting order
  const [orderBy, setOrderBy] = useState('name');  // Sorting column
  const [page, setPage] = useState(0);  // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5);  // Rows per page

  // Handle search input change
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = rows.filter((row) =>
      row.name.toLowerCase().includes(searchValue) ||
      row.gender.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
    setPage(0); // Reset page when search changes
  };

  // Sorting logic
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortData = (array) => {
    const sortedArray = array.sort((a, b) => {
      if (orderBy === 'name') {
        return (order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
      } else if (orderBy === 'age') {
        return order === 'asc' ? a.age - b.age : b.age - a.age;
      } else {
        return (order === 'asc' ? a.gender.localeCompare(b.gender) : b.gender.localeCompare(a.gender));
      }
    });
    return sortedArray;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page change
  };

  // Get current rows after pagination and sorting
  const sortedData = sortData(filteredData);
  const currentData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Search Input */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        sx={{ margin: '20px 0' }}
      />

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleRequestSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'age'}
                  direction={orderBy === 'age' ? order : 'asc'}
                  onClick={() => handleRequestSort('age')}
                >
                  Age
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'gender'}
                  direction={orderBy === 'gender' ? order : 'asc'}
                  onClick={() => handleRequestSort('gender')}
                >
                  Gender
                </TableSortLabel>
              </TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default C;
