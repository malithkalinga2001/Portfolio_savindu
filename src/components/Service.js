import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import WebImg1 from "../assets/img/web-img1.png";
import WebImg2 from "../assets/img/web-img2.png";
import WebImg3 from "../assets/img/web-img3.png";
import WebImg4 from "../assets/img/web-img4.png";
import WebImg5 from "../assets/img/web-img5.png";
import WebImg6 from "../assets/img/web-img6.png";
import AppImg1 from "../assets/img/project-img1.png";
import AppImg2 from "../assets/img/project-img2.png";
import AppImg3 from "../assets/img/project-img3.png";
import AppImg4 from "../assets/img/project-img1.png";
import AppImg5 from "../assets/img/project-img2.png";
import AppImg6 from "../assets/img/project-img3.png";
import GraImg1 from "../assets/img/graphic-img1.png";
import GraImg2 from "../assets/img/graphic-img2.png";
import GraImg3 from "../assets/img/graphic-img3.png";
import GraImg4 from "../assets/img/graphic-img4.png";
import GraImg5 from "../assets/img/graphic-img5.jpg";
import GraImg6 from "../assets/img/graphic-img6.jpg";
import DigitalImg1 from "../assets/img/digital-img1.png";
import DigitalImg2 from "../assets/img/digital-img2.jpg";
import DigitalImg3 from "../assets/img/digital-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Service = () => {

  const Service = [
    {
      title: "Home Fitnest",
      description: "Design & Development",
      imgUrl: WebImg1,
    },
    {
      title: "luxecosmo Ecommerce",
      description: "Design & Development",
      imgUrl: WebImg2,
    },
    {
      title: "DDKTours",
      description: "Design & Development",
      imgUrl: WebImg3,
    },
    {
      title: "South Surflanka Tours",
      description: "Design & Development",
      imgUrl: WebImg4,
    },
    {
      title: "JobNet247 Job Seeker",
      description: "Design & Development",
      imgUrl: WebImg5,
    },
    {
      title: "LK Domain Registry",
      description: "Design & Development",
      imgUrl: WebImg6,
    },
  ];

  const Graphic = [
    {
      title: "Motivational & Informational Graphics",
      description: "Design & Creativity",
      imgUrl: GraImg1,
    },
    {
      title: "Motivational & Informational Graphics",
      description: "Design & Creativity",
      imgUrl: GraImg2,
    },
    {
      title: "Motivational & Informational Graphics",
      description: "Design & Creativity",
      imgUrl: GraImg3,
    },
    {
      title: "Logo Designs",
      description: "Design & Creativity",
      imgUrl: GraImg4,
    },
    {
      title: "Marketing & Branding Designs",
      description: "Design & Creativity",
      imgUrl: GraImg5,
    },
    {
      title: "Seasonal & Festive Designs",
      description: "Design & Creativity",
      imgUrl: GraImg6,
    },
  ];

  const Digital = [
    {
      title: "Misionary Digital Marketing",
      description: "Digital Branding & Outreach",
      imgUrl: DigitalImg1,
    },
    {
      title: "Digital Marketing Strategy",
      description: "Digital Branding & Outreach",
      imgUrl: DigitalImg2,
    },
    {
      title: "Digital Marketing Skills",
      description: "Digital Branding & Outreach",
      imgUrl: DigitalImg3,
    },
  ];

  return (
    <section className="project" id="service">
      <Container>
        <Row>
          <Col size={30}>
          
          <TrackVisibility> 
  {({ isVisible }) => (
    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
      <h2>Services</h2>
      <p>Our company provides expert services in website development, application development, graphic design, and digital marketing. We create responsive websites, innovative applications, visually appealing designs, and comprehensive digital marketing solutions to meet your business needs and enhance your brand.</p>
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
      <Nav variant="pills" className="nav-pills mb-5 justify-content-between w-100" id="pills-tab">
  <Nav.Item className="w-25">
    <Nav.Link eventKey="first" className="border border-secondary rounded-pill rounded-end">WebSite Development</Nav.Link>
  </Nav.Item>
  <Nav.Item className="w-25">
    <Nav.Link eventKey="second" className="border border-secondary rounded-0">Application Development</Nav.Link>
  </Nav.Item>
  <Nav.Item className="w-25">
    <Nav.Link eventKey="third" className="border border-secondary rounded-0">Graphic Designing</Nav.Link>
  </Nav.Item>
  <Nav.Item className="w-25">
    <Nav.Link eventKey="fourth" className="border border-secondary rounded-pill rounded-start">Digital Marketing</Nav.Link>
  </Nav.Item>
</Nav>



        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
          <Tab.Pane eventKey="first">
            <Row>
              {Service.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
            <p>We specialize in creating dynamic, responsive, and user-friendly websites tailored to meet your business needs. From sleek corporate websites to interactive e-commerce platforms, our services ensure a seamless online presence. Whether it's a custom design or a content management system, we deliver scalable and visually appealing solutions to help your brand thrive in the digital world.</p>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>Our company specializes in crafting high-quality, user-friendly applications tailored to meet your specific business needs. From mobile apps to desktop software, we develop solutions that streamline processes, enhance user experiences, and boost productivity. Whether it's a feature-rich Android or iOS app, or a cross-platform solution, we ensure seamless performance and robust functionality.<br/>
            We focus on innovation, security, and scalability to deliver applications that grow with your business. Our team leverages the latest technologies and development frameworks to create custom applications designed to elevate your brand and meet the evolving demands of your industry.
            </p>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <Row>
              {Graphic.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
            <p>We offer a wide range of graphic design services to bring your ideas to life. From stunning promotional materials and eye-catching social media graphics to festive designs and motivational visuals, we create compelling designs that captivate your audience and enhance your brand's identity</p>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
          <Row>
              {Digital.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
            <p>We provide comprehensive digital marketing solutions to boost your online presence and drive business growth. From social media management and search engine optimization (SEO) to targeted advertising and content creation, our strategies are tailored to engage your audience and achieve your marketing goals</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )}
</TrackVisibility>






          </Col>
        </Row>
      </Container>
      {/* Horizontal Line */}
      <div className="mt-4">
        <hr className="border-white" style={{ borderWidth: "100px" }} />
      </div>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
