import { Container, Row, Col } from 'react-bootstrap';
import SneakerTable from '../SneakerTable/SneakerTable';
import SneakerType from '../SneakerType/SneakerType';
import SneakerRarity from '../SneakerRarity/SneakerRarity';
import SneakerLevel from '../SneakerLevel/SneakerLevel';
import './Calculator.css';

export default function Calculator() {
    return (
        <Container fluid className="mt-5 calculator-body" style={{color: '#fff'}}>
            <Row className="mx-0">
                <Col xs={0} sm={8} md={8} lg={8} xl={8} xxl={8} className="d-none d-sm-block" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                    <SneakerTable/>
                </Col>
                <Col xs={12} sm={0} md={0} lg={0} xl={0} xxl={0} className="d-block d-sm-none">
                    <SneakerType/>
                    <SneakerRarity/>
                    <SneakerLevel/>
                </Col>
            </Row>
        </Container>
    );
}