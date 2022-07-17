import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./SneakerType.css";

const SNEAKERS_TYPE = [
    'COMMON',
    'UNCOMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
];

export default function SneakerType() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid>
            SNEAKERS:
            <Carousel 
                indicators={false} 
                slide={false}
                interval={null}
                activeIndex={index} 
                onSelect={handleSelect}
            >
                {
                    SNEAKERS_TYPE.map((item) => {
                        return (
                            <Carousel.Item className="sneaker-type-item">
                                {item}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
    );
}