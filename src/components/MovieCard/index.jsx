import { Grid } from '@material-ui/core'
import React from 'react'

export default function MovieCard(props) {
  const { show : {name, image : {medium: src }}} = props.data
  return (
    <Grid item xs={2} align="center">
      <img src={src} 
            alt={name}
            style={{width: "100%"}}/>
      <h3>{name}</h3>
    </Grid>
  )
}
