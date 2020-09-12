import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Button, TextField } from '@material-ui/core'

export default function Search(props) {
  return (
    <Grid container
          justify="center"
          item 
          spacing={1}
          xs={5}>
        <Grid item xs={12}>
          <TextField placeholder="Enter a Movie Title" 
                variant="outlined"
                fullWidth={true} 
                size="small"
                value={props.query}
                onChange={props.onSearchInput}/>
        </Grid>
        <Grid item>
          <Button variant="contained" 
                  color="primary"
                  onClick={props.onSubmitQuery}>
            Search
          </Button>
        </Grid>
    </Grid>
  )
}
