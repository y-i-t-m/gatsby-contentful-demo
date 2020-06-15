import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "gatsby"
function Blog({title, date, src, link}) {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {date}
        </Card.Text>
        <Link to={`/${link}`}>詳しくみる</Link>
      </Card.Body>
    </Card>
  )
}

export default Blog
