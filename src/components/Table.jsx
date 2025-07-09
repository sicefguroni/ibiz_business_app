
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'Istok Web, sans-serif'
    },
});

function TableComp({rows}) {
    return(<>
    <div className="shadow hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-bottom duration-500 my-2">
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}  >
                <Table sx={{ minWidth: 500}} aria-label="simple table" className="font-istok">
                <TableHead >
                    <TableRow className='bg-secondary-orange' >
                    <TableCell sx={{fontWeight: 'bold'}}>Competitor</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}} align="left">Description</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}} align="center">Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {row.competitor}
                        </TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="center"><a href="https://react.dev/" target="_blank" ><button className="size-auto bg-primary-orange rounded-md py-1 px-2"><span className="text-primary-white">View</span></button></a></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    </div>
    </>);
}


export default TableComp;