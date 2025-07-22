import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className="footer-custom py-4">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="text-center text-sm-start">
            <span className="logo-footer">Gabrielle</span>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <p className="mb-0 small opacity-75">Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
