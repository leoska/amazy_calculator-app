import { Container, Row, Col, Form } from 'react-bootstrap';
import SneakerType from '../SneakerType/SneakerType';
import SneakerRarity from '../SneakerRarity/SneakerRarity';
import SneakerLevel from '../SneakerLevel/SneakerLevel';
import "./SneakerSettings.css";

export default function SneakerSettings() {
    return (
        <div className="sneaker-settings">
            <SneakerType/>
            <SneakerRarity/>
            <SneakerLevel/>
        </div>
    )
}