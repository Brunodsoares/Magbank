import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../assets/MAGbank.png';
import applestore from '../assets/applestore.png';
import playstore from '../assets/playstore.png';
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss'; 

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center text-lg-left py-5">
        <Col xs={12} lg={6} className="text-lg-start mb-4" >
          <Image src={logo} />
        </Col>

        <Col xs={12} lg={4} className="py-xs-5 mb-4">
          <Image src={applestore} className="" />
          <Image src={playstore}  className="ml-lg-5 m-2" />
        </Col>

        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            color="#7c7c7c"
            size="2x"
            className="m-2"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            color="#7c7c7c"
            size="2x"
            className="m-2"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color="#7c7c7c"
            size="2x"
            className="m-2"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;