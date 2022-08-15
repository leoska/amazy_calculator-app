import ProgressBar from 'react-bootstrap/ProgressBar';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectStats } from '../../store/calculator/calculatorSlice';
import "./SneakerStats.css";


export default function SneakerStats() {
    const stats = useSelector(selectStats);

    // Что бы обновить store необходимо вызвать метод dispatch().
    const dispatch = useDispatch();

    return (
        <div className="sneaker-stats">
            <table>
                <tbody>
                    <tr>
                        <td className="sneaker-stats_tabke-input_column">
                            {/* <div className="sneaker-stats_table-block"/> */}
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control 
                                    className="sneaker-stats-input" 
                                    type="number" 
                                    placeholder="Enter a base perfomance" 
                                    size="sm" 
                                    value={stats.performance.base}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            Perfomance
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={20}/>
                        </td>
                        <td>
                            {stats.performance.base}
                        </td>
                    </tr>
                    <tr>
                        <td className="sneaker-stats_tabke-input_column">
                            {/* <div className="sneaker-stats_table-block"/> */}
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control className="sneaker-stats-input" type="number" placeholder="Enter a base fortune" size="sm" />
                            </InputGroup>
                        </td>
                        <td>
                            Fortune
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={40}/>
                        </td>
                        <td>
                            {stats.fortune.base}
                        </td>
                    </tr>
                    <tr>
                        <td className="sneaker-stats_tabke-input_column">
                            {/* <div className="sneaker-stats_table-block"/> */}
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control className="sneaker-stats-input" type="number" placeholder="Enter a base joy" size="sm" />
                            </InputGroup>
                        </td>
                        <td>
                            Joy
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={60}/>
                        </td>
                        <td>
                            {stats.joy.base}
                        </td>
                    </tr>
                    <tr>
                        <td className="sneaker-stats_tabke-input_column">
                            {/* <div className="sneaker-stats_table-block"/> */}
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control className="sneaker-stats-input" type="number" placeholder="Enter a base durability" size="sm" />
                            </InputGroup>
                        </td>
                        <td>
                            Durability
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={80}/>
                        </td>
                        <td>
                            {stats.joy.base}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}