import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

export default function Header() {
  return (
      <Grid item xs={12}>
        <Typography variant="h1" 
                    component="h1" 
                    align="center" 
                    gutterBottom>
          TVMaze React
        </Typography>
      </Grid>
  )
}
