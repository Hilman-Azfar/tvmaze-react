import { Button, Grid, FormControl, MenuItem, Select, InputLabel, makeStyles } from '@material-ui/core'
import React from 'react'
import MovieCard from '../MovieCard'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

export default function Results(props) {
  let results = props.movies.map((item, index)=>{
                  return <MovieCard key={index} data={item}/>
                })
  
  const classes = useStyles();

  return (
    <Grid container
          item
          justify="flex-start"
          spacing={2}
          xs={10}>
      <Grid item xs={12} align="center">
        <Button variant="contained" 
                color="primary"
                onClick={props.onSearchAgain}>
          Search Again
        </Button>
      </Grid>
      <Grid item xs={12} align="right">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            onChange={props.onFilter}
          >
            <MenuItem value={""} disabled>Sort by</MenuItem>
            <MenuItem value={"relevance"}>Relevance</MenuItem>
            <MenuItem value={"score-asc"}>Score <i className="material-icons">keyboard_arrow_up</i></MenuItem>
            <MenuItem value={"score-des"}>Score <i className="material-icons">keyboard_arrow_down</i></MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {results}
    </Grid>
  )
}
