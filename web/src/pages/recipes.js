import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query RecipePageQuery {
    recipes: allSanityRecipe(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ArchivePage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const recipeNodes = data && data.recipes && mapEdgesToNodes(data.recipes)

  return (
    <Layout>
      <SEO title='Recipes' />
      <Container>
        <h1 className={responsiveTitle1}>Recipes</h1>
        {recipeNodes && recipeNodes.length > 0 && <BlogPostPreviewGrid nodes={recipeNodes} />}
      </Container>
    </Layout>
  )
}

export default ArchivePage
