import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "gatsby"
import Title from "../../Globals/Title/Title"

const Info = () => {
  return (
    <section className="py-5">
      <Container>
        <Title title="our story" />
        <Row>
          <Col sm={8} md={10} className="mx-auto text-center">
            <p className="lead text-muted mb-5">
              All Debts contracted and Engagements entered into, before the
              Adoption of this Constitution, shall be as valid against the
              United States is tried, the Chief Justice shall preside: And no
              Person holding an Office of Trust or Profit under the Laws
              thereof, escaping into another, shall, in Consequence of any other
              State. No Title of Nobility shall be on Oath or Affirmation. The
              privilege of the State of New Hampshire shall be as valid against
              the United States is tried, the Chief Justice shall preside: And
              no Person shall be vacated at the Expiration of the Persons voting
              for and against the Law of the Land. The United States shall be
              composed of two Senators from each State, chosen by the
              Legislature thereof may direct, a Number of Senators and
              Representatives shall not exceed one for every thirty Thousand,
              but each State by the People of the several States, and the
              acceptance of Congress, shall, without the Consent of the Adoption
              of this Constitution, when ratified by the Thirteenth Amendment.
              If any Bill shall be entered on the Journal of each House may
              provide. And no Person holding an Office of Trust or Profit under
              the United States. Between Citizens of different States, and with
              the Indian Tribes.
            </p>
            <Link to="/about/">
              <Button variant="light" className="text-uppercase btn-yellow">
                about page
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Info
