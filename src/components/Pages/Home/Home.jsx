import React from 'react'
import { Container } from 'react-bootstrap'
import About from './About'

export default function Home() {
  return (
    <Container className="border">
      <h1>Home Page</h1>
      <About/>
    </Container>
  )
}
