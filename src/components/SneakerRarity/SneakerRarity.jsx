import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector, useDispatch } from 'react-redux';
import { setQuality, selectQuality } from '../../store/calculator/calculatorSlice';
import "./SneakerRarity.css";

const SNEAKERS_RARITY = [
    'COMMON',
    'UNCOMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
];

export default function SneakerRarity() {
    // Слушаем изменение quality
    const quality = useSelector(selectQuality);

     // Что бы обновить store необходимо вызвать метод dispatch().
    const dispatch = useDispatch();

    const activeIndex = SNEAKERS_RARITY.indexOf(quality.toUpperCase());
    const _onSelectIndex = (selectedIndex) => { 
        return dispatch(setQuality({
            quality: SNEAKERS_RARITY[selectedIndex].toLowerCase(),
        }));
    }

    return (
        <Container fluid>
            QUALITY:
            <Carousel 
                indicators={false} 
                slide={false}
                interval={null}
                activeIndex={activeIndex} 
                onSelect={_onSelectIndex}
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