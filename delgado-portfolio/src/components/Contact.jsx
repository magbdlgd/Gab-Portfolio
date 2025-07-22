import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'

export const Contact = () => {

    const socialLinks = [
    { 
      icon: FaFacebook, 
      label: 'Facebook',
      url: 'https://www.facebook.com/itsmariagabrielle/',
      color: '#1877F2' // Facebook blue
    },
    { 
      icon: FaLinkedin, 
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/maria-gabrielle-delgado-365b17284/', // Replace with your LinkedIn
      color: '#0A66C2' // LinkedIn blue
    },
    { 
      icon: FaGithub, 
      label: 'GitHub',
      url: 'https://github.com/magbdlgd', // Replace with your GitHub
      color: '#181717' // GitHub black
    },
  ]

  return (
    <section className="section-white py-5" id="contact">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
            <p className="fs-6 text-muted mb-5">
              Feel free to reach out!
            </p>
            
            <Row className="g-4 mb-5">
              <Col md={6}>
                <div className="border rounded-3 p-4 h-100">
                  <h5 className="fw-bold text-primary-custom mb-2">Email</h5>
                  <p className="mb-0 text-muted">mariagabdelgado@gmail.com</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="border rounded-3 p-4 h-100">
                  <h5 className="fw-bold text-primary-custom mb-2">Phone</h5>
                  <p className="mb-0 text-muted">0918 426 1294</p>
                </div>
              </Col>
            </Row>
            
            <div className="d-flex justify-content-center gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="social-icon-custom" 
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: social.color }}
                >
                  <social.icon size={30} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
