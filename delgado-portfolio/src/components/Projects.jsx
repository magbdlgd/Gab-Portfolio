import { Container, Row, Col, Card } from 'react-bootstrap'
import System1 from '../assets/Ordering.png'
import System2 from '../assets/SDO.png'
import UI1 from '../assets/UI1.png'
import UI2 from '../assets/UI2.png'
import UI3 from '../assets/UI3.png'
import UI4 from '../assets/UI4.png'
import UI5 from '../assets/UI5.png'
import UI6 from '../assets/UI6.png'
import G1 from '../assets/G1.png'
import G2 from '../assets/G2.png'
import G3 from '../assets/G3.png'
import projImg2 from '../assets/gab.jpg'
import projImg3 from '../assets/gab.jpg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const Projects = () => {
  const projectCategories = [
    {
      title: 'Systems',
      projects: [
        {
          title: 'Ordering System',
          description: 'A Cashless Ordering System for School',
          imgUrl: System1,
          details: 'A cashless school ordering system that allows users to place orders online or at the counter. It features an admin interface for managing sales and inventory, reducing the need for manual tracking and streamlining transactions.',
          projectLink: 'https://drive.google.com/file/d/1Mg1-7dMD66WBFH22le0tkCe0gLyetzii/view?usp=sharing',
          sourceCodeLink: 'https://github.com/EmanDomo/Cashless-Ordering-and-POS-System-with-Inventory-and-Sales-Management-for-SJISC-School.git'
        },
        {
          title: 'Ticketing System', 
          description: 'A Ticketing System for DepEd Cabuyao',
          imgUrl: System2,
          details: 'An online ticketing system for DepEd Cabuyao that enables school staff to submit concerns remotely, eliminating the need for in-person visits. The system also allows administrators to monitor and manage DCP distributions across schools.',
          projectLink: 'https://ticketing.sdocabuyao.com/',
          sourceCodeLink: 'https://github.com/EmanDomo/SDO-DepEd-Cabuyao-Ticketing-System.git'
        }
      ]
    },
    {
      title: 'UI Designs',
      projects: [
        {
          title: 'STI Food Ordering System',
          description: 'Interface for ordering food online or at the counter, built for speed and simplicity.',
          imgUrl: UI1,
          details: 'The UI is designed to enhance the food ordering experience with a clean and visually appealing layout. Customers can easily browse menus, customize their meals, and place orders.',
          projectLink: 'https://www.figma.com/design/TJzLTfCct3tgm1BQvKUe8b/Untitled?node-id=0-1&p=f&t=LF7uYPpK7YtRcQPR-0'
        },
        {
          title: 'Clothing E-commerce System', 
          description: 'A modern interface for browsing, ordering, and managing professional clothing for businesses.',
          imgUrl: UI2,
          details: 'A sleek and user-friendly interface designed for easy browsing, ordering, and managing business clothing. The UI offers a clean layout with categorized product displays, search and filter options, and an admin panel for efficient inventory and sales management.',
          projectLink: 'https://www.figma.com/design/VaIQR3tsI5lDI4RcFvHGn4/WIREFRAME-TESDA?node-id=0-1&p=f&t=166oOIRrJIVYMbDW-0'
        },
        {
          title: 'Mobile Food Ordering App',
          description: 'A mobile-first interface for quick and convenient food ordering, designed for users on the go.',
          imgUrl: UI3,
          details: 'This UI is for smartphones and designed to make food ordering fast, simple, and engaging. Users can easily browse menus, customize meals, and place orders with just a few taps.',
          projectLink: 'https://www.figma.com/design/irPQtXTipE8mfnHbdVxdwF/Untitled?node-id=0-1&p=f&t=3k5rnpCcRLM5kUxS-0'
        },
                {
          title: 'Point of Sale (POS) System', 
          description: 'A clean and efficient user interface for handling sales, payments, and inventory at the counter.',
          imgUrl: UI4,
          details: 'The POS System UI is designed for speed, simplicity, and accuracy during transactions. It features a user-friendly layout with quick-access buttons for product selection, real-time cart updates, and multiple payment options.',
          projectLink: 'https://www.figma.com/design/i0EFMciRxmKKDCeFYF4qKO/FINALS--cashier-?node-id=4-40&p=f&t=2j3SPBQYbIWPSYCg-0'
        },
        {
          title: 'Information System',
          description: 'A streamlined and organized interface for managing, accessing, and updating important data efficiently.',
          imgUrl: UI5,
          details: 'It features a structured layout with easy navigation between modules.',
          projectLink: 'https://www.figma.com/design/Q5rS0ecPHq2prMiooyxQkx/Untitled?node-id=7-132&t=lS4g2TGkFNO0EBSc-0'
        },
        {
          title: 'RSafeTech App UI',
          description: 'A safety app interface with real-time SOS, location tracking, and emergency alert features.',
          imgUrl: UI6,
          details: 'The RSafeTech App UI is designed to prioritize user safety with a simple yet powerful interface. It features a prominent SOS button for instant emergency alerts, live location tracking, and quick-access contacts.',
          projectLink: 'https://www.canva.com/design/DAFs-N07RiY/-jw1u9YnNig7pGlhDu-dPw/edit?utm_content=DAFs-N07RiY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
        },
      ]
    },
    {
      title: 'Graphics Design',
      projects: [
        {
          title: 'Company Brochure',
          description: 'A creative and elegant violet-themed Brochure',
          imgUrl: G1,
          details: 'The layout is clean and modern, making use of white space, stylish typography, and smooth visual flow to guide the viewer through each section.',
          projectLink: 'https://www.canva.com/design/DAFtHMXVrWM/QrHACH7Ku_ANfyQohpyL_A/edit?utm_content=DAFtHMXVrWM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
        },
        {
          title: 'Siomai King Tarpulin', 
          description: 'Red-themed tarpaulin design that highlights Siomai King’s products, brand, and irresistible street food appeal.',
          imgUrl: G2,
          details: 'This tarpaulin design features a vibrant red color scheme that evokes appetite, excitement, and brand recognition.',
          projectLink: 'https://www.canva.com/design/DAFlOokDZG8/CZ424ul81-U7SZ3pATEorw/edit?utm_content=DAFlOokDZG8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
        },
        {
          title: 'Trifold Company Brochure',
          description: 'A stylish and modern black-themed trifold brochure designed to introduce services',
          imgUrl: G3,
          details: 'This trifold brochure features a bold black theme that conveys professionalism, creativity, and confidence—perfect for making a strong first impression. The design uses clean white text, sleek typography, and accent colors.',
          projectLink: 'https://www.canva.com/design/DAFeUA0t30E/YaxJKO_vQSAdmMlvJFWSaw/edit?utm_content=DAFeUA0t30E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
        },
      ]
    }
  ]

  const showProjectDetails = (project) => {
    const isSystemProject = projectCategories[0].projects.includes(project);
    
    MySwal.fire({
      title: project.title,
      html: (
        <div className="text-start">
          <p className="mb-3">{project.description}</p>
          <p className="mb-4">{project.details}</p>
          <div className="d-flex justify-content-center">
            <img 
              src={project.imgUrl} 
              alt={project.title} 
              className="img-fluid rounded mb-4"
              style={{ maxHeight: '200px' }}
            />
          </div>
        </div>
      ),
      showConfirmButton: true,
      confirmButtonText: 'Visit Project',
      confirmButtonColor: 'var(--primary-color)',
      showCloseButton: true,
      showDenyButton: isSystemProject, // Only show for system projects
      denyButtonText: 'View Source Code',
      denyButtonColor: '#6c757d',
      customClass: {
        popup: 'project-swal-popup',
        confirmButton: 'btn-primary-custom',
        denyButton: 'btn-secondary-custom',
        closeButton: 'swal-close-button-custom'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(project.projectLink, '_blank');
      } else if (result.isDenied) {
        window.open(project.sourceCodeLink, '_blank');
      }
    })
  }



  return (
    <section className="section-light py-5" id="projects">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Projects</h2>
          <p className="fs-6 text-muted mx-auto" style={{maxWidth: '600px'}}>
            Explore my work across different categories. Each project demonstrates specific skills and solutions.
          </p>
        </div>
        
        {projectCategories.map((category, index) => (
          <div key={index} className="mb-5">
            <h3 className="h2 fw-bold mb-4 text-center project-category-title">{category.title}</h3>
            <Row className="g-4">
              {category.projects.map((project, projectIndex) => (
                <Col key={projectIndex} md={4} className="mb-4">
                  <Card className="project-card-custom h-100">
                    <Card.Img variant="top" src={project.imgUrl} className="project-img-custom" />
                    <Card.Body className="p-4">
                      <Card.Title className="h5 fw-bold mb-3">{project.title}</Card.Title>
                      <Card.Text className="text-muted mb-4">{project.description}</Card.Text>
                      <button 
                        className="btn-project-custom"
                        onClick={() => showProjectDetails(project)}
                      >
                        View Details
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  )
}