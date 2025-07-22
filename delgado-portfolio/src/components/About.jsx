import { Container, Row, Col } from 'react-bootstrap'
import profileImg from '../assets/gab2.jpg'
import resumePDF from '../assets/Delgado_Resume.pdf'

export const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'Delgado_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="section-light py-5" id="about">
      <Container>
        <h2 className="text-center display-5 fw-bold mb-4">About Me</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-5 mb-md-0 text-center">
            <img src={profileImg} alt="Profile" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            
            <p className="fs-6 mb-3 text-muted lh-lg">
              I am a graduate of Pamantasan ng Cabuyao with a Bachelor of Science in Information Technology. Throughout my academic journey and personal projects, I developed a strong interest in front-end development, where I enjoy building responsive and user-friendly interfaces. While my main focus is on the front-end, I also have experience handling back-end functionalities, allowing me to contribute to full-stack development when needed.
            </p>
            <p className="fs-6 mb-4 text-muted lh-lg">
              In several collaborative projects, I’ve taken the lead in designing the user interface, ensuring that it is both visually appealing and fully responsive across devices. I also have a solid foundation in using Microsoft Office tools such as Word, Excel, and PowerPoint, which I utilize for documentation, reports, and presentations.
            </p>
            <p className="fs-6 mb-4 text-muted lh-lg">
              I am always eager to learn new tools, improve my existing skills, and take on challenges that help me grow both personally and professionally. I put a lot of effort and dedication into everything I do, and I’m passionate about contributing to meaningful and well-crafted digital solutions.
            </p>
            
            <Row className="g-3 mb-5">
              {[
                {label: 'Name', value: 'Maria Gabrielle R. Delgado'},
                {label: 'Email', value: 'mariagabdelgado@gmail.com'},
                {label: 'Location', value: 'Cabuyao City, Laguna, Philippines'},
                {label: 'Education', value: 'B.S. Information Technology'}
              ].map((item, index) => (
                <Col sm={6} key={index}>
                  <div className="border-start border-3 ps-3" style={{borderColor: 'var(--primary-color) !important'}}>
                    <h6 className="fw-bold text-primary-custom mb-1">{item.label}:</h6>
                    <p className="mb-0 small text-muted">{item.value}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <div className='text-center'>
              <button className="btn-primary-custom" onClick={handleDownload}>
                Download Resume
              </button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}