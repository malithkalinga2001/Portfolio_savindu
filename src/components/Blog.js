import { useState, useEffect } from "react";
import { Col, Row, Alert, Container } from "react-bootstrap";
import meter2 from "../assets/img/blogtopic.jpg";
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"
import blogImg from "../assets/img/blogImg.png";
import Certificate from "../assets/img/Certificate.png";
import Canva from "../assets/img/canva.jpg"; 
import CanvaPrice from "../assets/img/pricecanva.png";

export const Blog = ({ status, message, onValidated }) => {
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
    <section className="skill" id="blog">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center bg-white rounded" 
          style={{ width: '100%', height: '160px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={meter2} 
            alt="Image description" 
            className="img-fluid rounded" 
            style={{ maxWidth: '400px', maxHeight: '200px', objectFit: 'cover', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} 
          />
          
        </div> 
        <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                <Container>
                  <Row className="align-items-center">

                    <Col size={12} md={6} className="overflow-auto" 
                        style={{ 
                          maxHeight: '100vh', 
                          height: 'auto', 
                          padding: '15px',
                          borderRadius: '10px', 
                          scrollbarWidth: 'none', // For Firefox
                          msOverflowStyle: 'none' // For Internet Explorer
                        }}>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            
                            <h3>Canva Pricing Guide 2025</h3><br />
                            <TrackVisibility>
                              <img
                                src={Canva}
                                alt="Canva"
                                onClick={handleImageClick}
                                style={{ borderRadius: '20px', cursor: 'pointer', maxWidth: '400px', maxHeight: '200px', top: '50%', left: '50%' }}
                              />
                              </TrackVisibility>
                            <p>
                              Canva is perfect for those who need beautiful, engaging visuals but know nothing about design. This popular, user-friendly design platform, with templates and creative resources, lets anyone create stunning content easily. This article comprehensively analyzes the different Canva plans, including free, premium, and Teams. Comparing their features and costs aims to help you understand their benefits and value, guiding you to choose the plan that best suits your needs. </p>
                            <TrackVisibility>
                              <img
                                src={CanvaPrice}
                                alt="Canva"
                                onClick={handleImageClick}
                                style={{ borderRadius: '20px', cursor: 'pointer', maxWidth: '400px', maxHeight: '200px', top: '50%', left: '50%' }}
                              />
                            </TrackVisibility>
                            <br/><br/>
                            <hr/>
                            <h3>We're Incorporated</h3><br />
                            <p>
                              Epicx Lanka Holdings (Private) Limited was incorporated on February 3, 2023, under the Sri Lanka Companies Act No. 7 of 2007, with registration number PV 00270761.<br />
                              This milestone enhances the company's credibility and strengthens partnerships with local and international brands.<br />
                              Epicx Lanka thanks its supporters for their trust and looks forward to continued growth and success.
                            </p>
                            <TrackVisibility>
                              <img
                                src={Certificate}
                                alt="Certificate"
                                style={{ borderRadius: '20px', cursor: 'pointer', maxWidth: '400px', maxHeight: '700px', top: '50%', left: '50%' }}
                                onClick={handleImageClick}
                              />
                            </TrackVisibility>
                            <br/><br/>
                            <hr/>
                          </div>
                        )}
                      </TrackVisibility>
                    </Col>

                    <Col size={12} md={6}>
                      <TrackVisibility>
                        {({ isVisible }) =>
                          <img className="" style={{ borderRadius: '50px' }} width="200" height="227" src={blogImg} alt="Profile" />
                        }
                      </TrackVisibility>
                    </Col>
                  </Row>
                </Container>
                    </div>
                </div>
            </div>
      </div>
    </section>
  )
}
