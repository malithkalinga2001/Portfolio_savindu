import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import meter1 from "../assets/img/media1.png";
import meter2 from "../assets/img/media2.png";
import meter3 from "../assets/img/media3.png";
import colorSharp from "../assets/img/color-sharp.png";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Media = () => {
  const responsive = {
    superLargeDesktop: {
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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <div className="skill-bx wow zoomIn bg-transparent">
            <h2>Media Reports</h2>
            <p>Our media reports showcase the recognition and features of our company and its owners across renowned platforms. From prestigious newspapers like Diwayina and Dinamina to prominent mentions on radio channels such as VFM, these reports highlight our achievements, credibility, and milestones in the industry. Dive into our media journey and discover how we continue to make an impact in the business world.</p>
            <div style={{ backgroundColor: "#151515", borderRadius: "30px", padding: "15px" }}>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              <div className="item" onClick={() => handleImageClick(meter1)}>
                <img src={meter1} alt="Diwayina Newspaper" className="img-fluid" style={{ borderRadius: '20px' }} />
                <h5>Diwayina Newspaper</h5>
              </div>
              <div className="item" onClick={() => handleImageClick(meter2)}>
                <img src={meter2} alt="Dinamina Newspaper" className="img-fluid" style={{ borderRadius: '20px' }} />
                <h5>Dinamina Newspaper</h5>
              </div>
              <div className="item" onClick={() => handleImageClick(meter3)}>
                <img src={meter3} alt="VFM Radio Channel" className="img-fluid" style={{ borderRadius: '20px' }} />
                <h5>VFM Radio Channel</h5>
              </div>
            </Carousel>

            </div>
          </div>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />

      {/* Horizontal Line */}
      <div className="mt-4">
        <hr className="border-white" style={{ borderWidth: "100px" }} />
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: "100%" }} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
