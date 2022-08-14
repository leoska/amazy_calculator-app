import { Form } from 'react-bootstrap';

export default function SneakerEnergy() {
    return (
        <Form.Group>
            <Form.Label>
                ENERGY:
            </Form.Label>
            <Form.Control type="number" placeholder="Enter energy" />
            <Form.Text className="text-muted">
                Enter energy of sneakers
            </Form.Text>
        </Form.Group>
    );
}