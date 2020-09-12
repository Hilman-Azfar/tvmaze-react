import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function MovieCard(props) {

  const {show : {name, image}} = props.data

  return (
    <Grid item xs={3} align="center">
      <img src={image ? image.medium : "no-url"} 
           alt={name}
           style={{maxWidth: "150px"}}/>
      <Typography variant="h6" noWrap>{name}</Typography>
    </Grid>
  )
}
