import { Container, Row, Col } from 'react-bootstrap';
import SneakerSettings from '../SneakerSettings/SneakerSettings';
import SneakerContent from '../SneakerContent/SneakerContent';
import './Calculator.css';

export default function Calculator() {
    return (
        <Container fluid className="mt-5 calculator-body" style={{color: '#fff'}}>
            <Row className="mx-0">
                <Col xs={0} sm={6} md={4} lg={4} xl={2} xxl={2} className="d-none d-sm-block">
                    <SneakerSettings/>
                </Col>
                <Col xs={0} sm={6} md={4} lg={4} xl={2} xxl={2} className="d-none d-sm-block">
                    <SneakerContent/>
                </Col>
                <Col xs={12} sm={0} md={0} lg={0} xl={0} xxl={0} className="d-block d-sm-none">
                    <SneakerSettings/>
                    <SneakerContent/>
                </Col>
            </Row>
        </Container>
    );
}