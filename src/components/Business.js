import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import ProfileImg from "../assets/img/ProfileImg.jpg";
import Certificate from "../assets/img/Certificate.png";
import Certificate2 from "../assets/img/cetificate2.png"; //here is cetificate2 image
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const Business = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                <Container>
                  <Row className="align-items-center">
                    <Col size={12} md={6}>
                      <TrackVisibility>
                        {({ isVisible }) =>
                          <img className="rounded-circle" width="200" height="227" src={ProfileImg} alt="Profile"/>
                        }
                      </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                      <TrackVisibility>
                        {({ isVisible }) =>
                          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                          <h2>Business</h2><br/>
                          <p>Epicx Lanka Holdings (Private) Limited was incorporated on February 3, 2023, under the Sri Lanka Companies Act No. 7 of 2007, with registration number PV 00270761.<br/>

                              This milestone enhances the company's credibility and strengthens partnerships with local and international brands.<br/>

                              Epicx Lanka thanks its supporters for their trust and looks forward to continued growth and success.</p>
                          <TrackVisibility>
                              <img 
                                src={Certificate} 
                                alt="Certificate" 
                                style={{ cursor: 'pointer' }} 
                                onClick={handleImageClick} 
                              />
                          </TrackVisibility>
                        </div>}
                      </TrackVisibility>
                    </Col>
                  </Row>
                </Container>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Certificate Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={Certificate2} alt="Certificate2" style={{ width: "100%" }} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </section>
  )
}
