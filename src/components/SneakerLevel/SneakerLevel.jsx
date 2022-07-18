import { Form } from 'react-bootstrap';

export default function SneakerLevel() {
    const type = 'level';
    
    return (
        <Form.Group>
            <Form.Label>
                LEVEL:
            </Form.Label>
            <Form.Check 
                type={type}
                id={`default-${type}`}
            />
        </Form.Group>
    );
}