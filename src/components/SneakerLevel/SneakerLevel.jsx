import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectLevel, setLevel } from '../../store/calculator/calculatorSlice';


export default function SneakerLevel() {
    // Слушаем изменение level
    const level = useSelector(selectLevel);

    // Что бы обновить store необходимо вызвать метод dispatch().
    const dispatch = useDispatch();

    return (
        <Form.Group>
            <Form.Label>
                LEVEL:
            </Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Enter level" 
                value={level}
                onChange={(e) => dispatch(setLevel({level: e.target.value}))}
            />
            <Form.Text className="text-muted">
                Enter level of sneakers
            </Form.Text>
        </Form.Group>
    );
}