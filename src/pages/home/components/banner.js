import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import poster from "../../../assets/img/home.jpeg";
import bannerVideo from "../../../assets/video/home.mp4";
import { Flyer } from './flyer';
export const Banner = () => {
    return (
        <div className="banner">
            <video className='video' autoPlay muted loop playsInline poster={poster} >
                <source src={`${bannerVideo}#t=94.5`} type="video/mp4" />
            </video>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <h1>Welcome to Heavenland</h1>
                        <p>Solanaverse for dreamers.</p>
                        <div>
                            <Button className='btn btn-primary'>WHITE PAPER</Button>
                            <Button className='btn btn-secondary'>TOKENOMICS</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Flyer />
        </div>
    )
}