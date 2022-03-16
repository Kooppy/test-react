import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../../logo.svg';

class Header extends React.Component {
    render() {
        return (
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Header;