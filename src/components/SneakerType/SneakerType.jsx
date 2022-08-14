import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./SneakerType.css";

const SNEAKERS_TYPE = [
    'RANGER',
    'HIKER',
    'COACHER',
    'SPRINTER',
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
                    SNEAKERS_TYPE.map((item, index) => {
                        return (
                            <Carousel.Item 
                                className="sneaker-type-item"
                                key={`sneaker-type-item-${index}`}
                            >
                                {item}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
    );
}