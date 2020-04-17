import React from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions'
import CategoryCard from './CategoryCard'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

class CategoryList extends React.Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  renderContainer (categories) {
    return <Container maxWidth="lg">
      <Grid container spacing={4} >
        {categories.map(category => {
          return <CategoryCard category={category} key={category.id}/>
        })}
      </Grid>
    </Container>
  }

  renderList () {
    const categories = this.props.categories
    if (categories && categories.length > 0) {
      return this.renderContainer(categories)
    } else {
      return <div><Typography variant="h4" align="center">
        <CircularProgress /> Loading ...
      </Typography></div>
    }
  }

  render () {
    return this.renderList()
  }
}

const mapStateToProps = (state) => {
  return { categories: Object.values(state.categories) }
}

export default connect(mapStateToProps, { fetchCategories })(CategoryList)
