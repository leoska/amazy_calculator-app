import { Container, Row, Col } from 'react-bootstrap';
import SneakerSettings from '../SneakerSettings/SneakerSettings';
import SneakerContent from '../SneakerContent/SneakerContent';
import SneakerTable from '../SneakerTable/SneakerTable';
import './Calculator.css';

export default function Calculator() {
    return (
        <Container fluid className="mt-5 calculator-body" style={{color: '#fff'}}>
            <Row className="mx-0">
                <Col xs={0} sm={12} md={12} lg={12} xl={12} xxl={12} className="d-none d-sm-block" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                    <SneakerTable/>
                </Col>
                <Col xs={12} sm={0} md={0} lg={0} xl={0} xxl={0} className="d-block d-sm-none">
                    <SneakerSettings/>
                    <SneakerContent/>
                </Col>
            </Row>
        </Container>
    );
}