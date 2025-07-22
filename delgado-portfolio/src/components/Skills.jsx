import { Container, Row, Col } from 'react-bootstrap'
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiMysql } from 'react-icons/di'
import { SiBootstrap, SiCanva, SiVite } from 'react-icons/si'
import { PiMicrosoftWordLogoFill, PiMicrosoftExcelLogoFill, PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { 
      icon: <DiHtml5 size={40} color="#E34F26" />, 
      name: 'HTML5',
      description: 'Semantic HTML5 markup for accessible, SEO-friendly web pages'
    },
    { 
      icon: <DiCss3 size={40} color="#1572B6" />, 
      name: 'CSS',
      description: 'Modern CSS including Flexbox, Grid, and responsive design principles'
    },
    { 
      icon: <DiJavascript size={40} color="#F7DF1E" />, 
      name: 'JavaScript',
      description: 'ES6+ features, DOM manipulation, and modern JavaScript patterns'
    },
    { 
      icon: <DiReact size={40} color="#61DAFB" />, 
      name: 'React.js',
      description: 'Building component-based UIs with hooks and state management'
    },
    { 
      icon: <SiVite size={40} color="#646CFF" />, 
      name: 'Vite',
      description: 'Fast frontend tooling for modern web development'
    },
    { 
      icon: <SiBootstrap size={40} color="#7952B3" />, 
      name: 'Bootstrap',
      description: 'Responsive framework for rapid UI development'
    },
    { 
      icon: <DiMysql size={40} color="#4479A1" />, 
      name: 'MySQL',
      description: 'Database design and SQL querying'
    },
    { 
      icon: <SiCanva size={40} color="#00C4CC" />, 
      name: 'Canva',
      description: 'Creating visually appealing graphics and designs'
    },
    { 
      icon: <PiMicrosoftWordLogoFill size={40} color="#2B579A" />, 
      name: 'Word',
      description: 'Professional document creation and formatting'
    },
    { 
      icon: <PiMicrosoftExcelLogoFill size={40} color="#217346" />, 
      name: 'Excel',
      description: 'Data analysis, formulas, and visualization'
    },
    { 
      icon: <PiMicrosoftPowerpointLogoFill size={40} color="#D24726" />, 
      name: 'PowerPoint',
      description: 'Creating engaging presentations and slides'
    },
    { 
      icon: <FaGithub size={40} color="#181717" />, 
      name: 'GitHub',
      description: 'Version control and collaborative development'
    }
  ]

  const handleSkillClick = (index) => {
    setSelectedSkill(selectedSkill === index ? null : index);
  }

  return (
    <section className="section-white py-5" id="skills">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Skills</h2>
          <p className="fs-6 text-muted mx-auto" style={{maxWidth: '600px'}}>
            Here are the technologies and tools I work with. I'm always learning and expanding my skill set.
          </p>
        </div>
        
        <Row className="g-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="text-center skill-column">
              <div 
                className={`skill-icon-custom d-flex align-items-center justify-content-center mx-auto mb-3 ${selectedSkill === index ? 'active' : ''}`}
                onClick={() => handleSkillClick(index)}
                style={{ cursor: 'pointer' }}
              >
                {skill.icon}
              </div>
              <h6 className="fw-semibold mb-2">{skill.name}</h6>
              <div className={`skill-description-container ${selectedSkill === index ? 'visible' : ''}`}>
                <p className="skill-description-text">
                  {skill.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};