import React from "react"
import Title from "../../Globals/Title/Title"
import { Row, Col, Form, Button } from "react-bootstrap"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <Row>
        <Col xs={10} sm={8} md={6} className="mx-auto">
          <Form
            action="https://formspree.io/sarthak.chow@gmail.com"
            method="POST"
          >
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Kashu Khan"
                id="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="email@email.com"
                id="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows="5"
                placeholder="Your description goes here"
                id="description"
              />
            </Form.Group>
            <Button
              block
              variant="light"
              type="submit"
              className="btn-yellow mt-5 text-capitalize"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  )
}

export default Contact
