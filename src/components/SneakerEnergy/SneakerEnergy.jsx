import { Form } from 'react-bootstrap';

export default function SneakerEnergy() {
    const type = 'energy';
    
    return (
        <Form.Group>
            <Form.Label>
                ENERGY:
            </Form.Label>
            <Form.Check 
                type="checkbox"
                id={`default-${type}`}
            />
        </Form.Group>
    );
}