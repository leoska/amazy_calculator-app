import { Form } from 'react-bootstrap';

export default function SneakerLevel() {
    return (
        <Form.Group>
            <Form.Label>
                LEVEL:
            </Form.Label>
            <Form.Control type="number" placeholder="Enter level" />
            <Form.Text className="text-muted">
                Enter level of sneakers
            </Form.Text>
        </Form.Group>
    );
}