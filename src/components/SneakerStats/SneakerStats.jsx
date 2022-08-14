import ProgressBar from 'react-bootstrap/ProgressBar';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
import "./SneakerStats.css";


export default function SneakerStats() {
    return (
        <div className="sneaker-stats">
            <table>
                <tbody>
                    <tr>
                        <td className="sneaker-stats_tabke-input_column">
                            {/* <div className="sneaker-stats_table-block"/> */}
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control className="sneaker-stats-input" type="number" placeholder="Enter a perfomance" size="sm"  />
                            </InputGroup>
                        </td>
                        <td>
                            Perfomance
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={20}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="sneaker-stats_tabke-input_column">
                            {/* <div className="sneaker-stats_table-block"/> */}
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control className="sneaker-stats-input" type="number" placeholder="Enter a fortune" size="sm" />
                            </InputGroup>
                        </td>
                        <td>
                            Fortune
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={40}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="sneaker-stats_tabke-input_column">
                            {/* <div className="sneaker-stats_table-block"/> */}
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control className="sneaker-stats-input" type="number" placeholder="Enter a joy" size="sm" />
                            </InputGroup>
                        </td>
                        <td>
                            Joy
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={60}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="sneaker-stats_tabke-input_column">
                            {/* <div className="sneaker-stats_table-block"/> */}
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control className="sneaker-stats-input" type="number" placeholder="Enter a durability" size="sm" />
                            </InputGroup>
                        </td>
                        <td>
                            Durability
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={80}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}