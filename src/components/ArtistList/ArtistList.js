import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {useActions, useArtistsAPI} from '../../features/artist';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const ArtistList = () => {
  const classes = useStyles();

  const {getArtists} = useActions();
  
  useEffect(() => {
    getArtists();
  }, []);

  const {artists} = useArtistsAPI();
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Lastname</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artists.map((artist, index) => (
              <TableRow key={artist.name}>
                <TableCell align="right">{artist.name}</TableCell>
                <TableCell align="right">{artist.lastname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default ArtistList;