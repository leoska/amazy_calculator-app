import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./SneakerRarity.css";

const SNEAKERS_RARITY = [
    'COMMON',
    'UNCOMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
];

export default function SneakerRarity() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid>
            QUALITY:
            <Carousel 
                indicators={false} 
                slide={false}
                interval={null}
                activeIndex={index} 
                onSelect={handleSelect}
            >
                {
                    SNEAKERS_RARITY.map((item, index) => {
                        return (
                            <Carousel.Item 
                                key={`sneaker-rarity-${index}`}
                                className="sneaker-rarity-item"
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