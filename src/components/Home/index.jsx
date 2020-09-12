import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Header from '../Header'
import Search from '../Search'
import Results from '../Results'

function Container(props) {
  return(
    <Grid container
          justify="center"
          spacing={2}>
      { props.children }
    </Grid>
  )
}

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      hasSearched: false,
      query: '',
      movies: [],
      filter: '',
      filteredMovies: '',
    }
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
  }
  
  handleSearchInput = (e) => {
    this.setState({
      query: e.target.value,
    })
  }

  async onSubmitQuery() {
    const url = `http://api.tvmaze.com/search/shows?q=${this.state.query}`
    
    const res = await fetch(url);
    const resObj = await res.json()
    this.setState({
      hasSearched: true,
      movies: resObj,
      filteredMovies: resObj,
      query: '',
    })
  }

  onSearchAgain = () => {
    this.setState({
      hasSearched: false,
    })
  }

  onFilter = (e) => {
    switch(e.target.value) {
      case 'score-asc':
        this.setState(prevState=>({
          filter: e.target.value,
          filteredMovies: prevState.filteredMovies.sort((a,b)=>a.score - b.score)
        }))
        return
      case 'score-des':
        this.setState(prevState=>({
          filter: e.target.value,
          filteredMovies: prevState.filteredMovies.sort((a,b)=>b.score - a.score)
        }))
        return
      default: 
        this.setState(prevState=>({
          filter: e.target.value,
          filteredMovies: prevState.movies
        }))
    }
  }

  render() {
    return (
      <Container>
        <Header/>
        {
          this.state.hasSearched 
          ? 
          (<Results movies={this.state.filteredMovies}
                    onSearchAgain={this.onSearchAgain}
                    value={this.state.filter}
                    onFilter={this.onFilter}/>)
          :
          (<Search query={this.state.query}
            onSearchInput={this.handleSearchInput}
            onSubmitQuery={this.onSubmitQuery}/>)
        }
      </Container>
    )
  }
}
