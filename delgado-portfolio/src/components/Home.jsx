import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/gab.jpg'
import { ArrowRightCircle } from 'react-bootstrap-icons'

export const Home = () => {
  const handleConnectClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <Container>
        <Row className="align-items-center min-vh-100 pt-5">
          <Col lg={7} className="text-center text-lg-start mb-5 mb-lg-0">
            {/* <span className="tagline-custom d-inline-block mb-4">
              Welcome to my Portfolio
            </span> */}
            <h1 className="display-3 fw-bold mb-4">
              Hi! I'm <span className="text-primary-custom">Gab</span>
            </h1>
            <p className="fs-5 mb-4 text-muted">
              Hi, I'm a IT graduate with skills in coding, graphic design, and more. I'm a fast learner, always eager to grow and take on new challenges in tech and design. Welcome to my portfolio, where you can explore my projects and see what I can do!
            </p>
            <button 
              className="btn-primary-custom d-inline-flex align-items-center gap-2"
              onClick={handleConnectClick}
            >
              Let's Connect <ArrowRightCircle size={20} />
            </button>
          </Col>
          <Col lg={5} className="text-center">
            <img src={headerImg} alt="Profile" className="img-fluid rounded-circle floating-animation" style={{maxWidth: '350px'}} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}