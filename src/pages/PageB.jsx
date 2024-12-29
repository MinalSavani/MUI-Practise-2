import { Divider } from "@mui/material";
import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import  { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Virtuoso } from "react-virtuoso";

const createData = (id,Day, Sport, StartTime,EndTime) => ({
  id,
  Day,
  Sport,
  StartTime,
  EndTime
  
});
const Row = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  name: `Name ${index + 1}`,
  age: 20 + (index % 10),
  country: `Country ${index % 5}`,
}));

const rows=[
  createData(1,'Monday', 'Cricket', 4.30, 6.00),
  createData(2,'Tuesday', 'Football', 5.00, 6.30),
  createData(3,'Wednesday', 'Tennis', 3.45, 5.15),
  createData(4,'Thursday', 'Basketball', 4.00, 5.30),
  createData(5,'Friday', 'Badminton', 3.30, 5.00),
  createData(6,'Saturday', 'Swimming', 4.15, 6.15),
];
const columns=[
    {field:'id',headerName:"ID",width:70,sortable: true},
    {field:'Day',headerName:"Day",width:90},
    {field:'Sport',headerName:"Sport",width:130},
    {field:'StartTime',headerName:"StartTime",width:130},
    {field:"EndTime",headerName:"EndTime",width:130},

 
];
 const paginationModel={page:0,pageSize:5};
 


 

const PageB=()=>{
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return(
    <div>
      {/* Table1 */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, border: '2px solid black' }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  Day
                </TableCell>
                <TableCell align="right">
                 Sport
                  </TableCell>
                <TableCell align="right">
                    Start Time
                </TableCell>
                <TableCell align="right">
                    End Time
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row)=>(
                <TableRow 
                key={row.name}
                sx={{'&:last-child th,&:last-child th':{border:0}}}
              >
              
              <TableCell component="th" scope="row">
                {row.Day}
              </TableCell>
           
              <TableCell align="right">{row.Sport}</TableCell>
              <TableCell align="right">{row.StartTime}</TableCell>
              <TableCell align="right">{row.EndTime}</TableCell>
              
              </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
         
         

         <Divider
        sx={{
          borderWidth: '3px', 
          borderColor: '#B0BEC5', 
          margin: '20px 0', 
        }}
        variant="middle"
      />
        
      {/* Table2 */}

        <Paper sx={{height:400,width:'100%'}}>
          <DataGrid 
          
          rows={rows}
          columns={columns}
          initialState={{pagination:{paginationModel}}}
          pageSizeOptions={[5,10]}
          checkboxSelection
          sx={{border:'2px solid black'}}/>
        </Paper>

        <Divider
        sx={{
          borderWidth: '3px', 
          borderColor: '#B0BEC5', 
          margin: '20px 0', 
        }}></Divider>
        
      <DataGrid rows={rows} columns={columns} checkboxSelection />


      <Divider
        sx={{
          borderWidth: '3px', 
          borderColor: '#B0BEC5', 
          margin: '20px 0', 
        }}></Divider>
        {/* Table 3 */}

      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, border: '2px solid black' }}>
            <TableHead>
              <TableRow>
                <TableCell  sx={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>
                  Day
                </TableCell>
                <TableCell   sx={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }} align="right">
                 Sport
                  </TableCell>
                <TableCell align="right"  sx={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>
                    Start Time
                </TableCell>
                <TableCell align="right"  sx={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>
                    End Time
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
  {rows.map((row) => (
    <TableRow
      key={row.name}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        '&:hover': { backgroundColor: '#f5f5f5' }
      }}
    >
     
    



              <TableCell component="th" scope="row">
                {row.Day}
              </TableCell>
           
              <TableCell align="right">{row.Sport}</TableCell>
              <TableCell align="right">{row.StartTime}</TableCell>
              <TableCell align="right">{row.EndTime}</TableCell>
              
              </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        
      <Divider
        sx={{
          borderWidth: '3px', 
          borderColor: '#B0BEC5', 
          margin: '20px 0', 
        }}></Divider>
         
{/* Table4 */}
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, border: "2px solid black" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
                Day
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }} align="right">
                Sport
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }} align="right">
                Start Time
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }} align="right">
                End Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.Day}
                </TableCell>
                <TableCell align="right">{row.Sport}</TableCell>
                <TableCell align="right">{row.StartTime}</TableCell>
                <TableCell align="right">{row.EndTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        
        <TableContainer component={Paper} sx={{ height: 400 }}>
      <Table>
        <Virtuoso
          data={Row}
          style={{ height: "340px",width:"500px"}} // Adjust height to leave space for header
          itemContent={(index, Row) => (
            <TableRow key={Row.id}>
              <TableCell>{Row.id}</TableCell>
              <TableCell>{Row.name}</TableCell>
              <TableCell>{Row.age}</TableCell>
              <TableCell>{Row.country}</TableCell>
            </TableRow>
          )}
          components={{
            Table: (props) => <TableBody {...props} />,
          }}
        />
      </Table>
    </TableContainer>

    </div>
  );
}
 export default PageB;
