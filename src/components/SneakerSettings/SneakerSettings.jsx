import { Container, Row, Col } from 'react-bootstrap';
import SneakerType from '../SneakerType/SneakerType';
import "./SneakerSettings.css";

export default function SneakerSettings() {
    return (
        <div className="sneaker-settings">
            <SneakerType/>
            <SneakerType/>
        </div>
    )
}