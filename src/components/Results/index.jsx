import { Button, Grid } from '@material-ui/core'
import React from 'react'
import MovieCard from '../MovieCard'

export default function Results(props) {
  let results = props.movies.map((item, index)=>{
                  return <MovieCard key={index} data={item}/>
                })
  return (
    <Grid container
          item
          justify="space-between"
          spacing={2}
          xs={10}>
      <Grid item xs={12} align="center">
        <Button variant="contained" 
                color="primary"
                onClick={props.onSearchAgain}>
          Search Again
        </Button>
      </Grid>
      {results}
    </Grid>
  )
}
