import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Button } from 'react-bootstrap'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
    query($slug: String){
      contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdDate
      body {
        json
      }
    }
  }
`

function BlogDetail(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return ( <img
        width="100%"
        src={node.data.target.fields.file['en-US'].url}
        alt={node.data.target.fields.title['en-US']} /> )
      }
    }
  }
  return (
    <Layout>
      <Container style={{maxWidth:640}} className="pt-4">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.createdDate}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </Container>
      <Container className="text-center">
        <Button href="/" variant="outline-info">戻る</Button>
      </Container>
    </Layout>
  )
}

export default BlogDetail
