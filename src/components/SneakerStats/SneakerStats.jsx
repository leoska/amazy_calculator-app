import ProgressBar from 'react-bootstrap/ProgressBar';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectStats, selectPoints, selectMaxPoints, selectQuality, setBaseStat, setValueStat } from '../../store/calculator/calculatorSlice';
import { SNEAKER_BASE_POINTS } from '../../calculator';
import "./SneakerStats.css";


export default function SneakerStats() {
    const stats = useSelector(selectStats);
    const maxPoints = useSelector(selectMaxPoints);
    const points = useSelector(selectPoints);
    const quality = useSelector(selectQuality);

    const progress = {
        performance: points ? stats.performance.value / points * 100 : 0,
        fortune: points ?  stats.fortune.value / points * 100 : 0,
        joy: points ? stats.joy.value / points * 100 : 0,
        durability: points ? stats.durability.value / points * 100 : 0,
    }

    console.log(progress);

    // Что бы обновить store необходимо вызвать метод dispatch().
    const dispatch = useDispatch();

    return (
        <div className="sneaker-stats">
            <table>
                <thead>
                    <tr>
                        <td>
                        </td>
                        <td>
                            base [{SNEAKER_BASE_POINTS[quality].min}-{SNEAKER_BASE_POINTS[quality].max}]
                        </td>
                        <td>
                            coef
                        </td>
                        <td>
                            points ({points}/{maxPoints})
                        </td>
                        <td>
                            total
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* PERFOMANCE HERE */}
                        <td>
                            Perfomance
                        </td>
                        <td className="sneaker-stats_tabke-input_column">
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control 
                                    className="sneaker-stats-input" 
                                    type="number" 
                                    placeholder="Enter a base perfomance" 
                                    size="sm" 
                                    value={stats.performance.base}
                                    onChange={(e) => dispatch(setBaseStat({ name: 'performance', value: Number(e.target.value) }))}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {stats.performance.coef}
                        </td>
                        <td className="sneaker-stats_tabke-input_column">
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control 
                                    className="sneaker-stats-input" 
                                    type="number" 
                                    placeholder="Enter a perfomance" 
                                    size="sm" 
                                    value={stats.performance.value}
                                    onChange={(e) => dispatch(setValueStat({ name: 'performance', value: Number(e.target.value) }))}
                                />
                            </InputGroup>
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={progress.performance}/>
                        </td>
                        <td>
                            {stats.performance.base + stats.performance.coef + stats.performance.value}
                        </td>
                    </tr>
                    <tr>
                        {/* FORTUNE HERE */}
                        <td>
                            Fortune
                        </td>
                        <td className="sneaker-stats_tabke-input_column">
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control
                                    className="sneaker-stats-input" 
                                    type="number"
                                    placeholder="Enter a base fortune" 
                                    size="sm"
                                    value={stats.fortune.base}
                                    onChange={(e) => dispatch(setBaseStat({ name: 'fortune', value: Number(e.target.value) }))}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {stats.fortune.coef}
                        </td>
                        <td className="sneaker-stats_tabke-input_column">
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control
                                    className="sneaker-stats-input" 
                                    type="number"
                                    placeholder="Enter a fortune" 
                                    size="sm"
                                    value={stats.fortune.value}
                                    onChange={(e) => dispatch(setValueStat({ name: 'fortune', value: Number(e.target.value) }))}
                                />
                            </InputGroup>
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={progress.fortune}/>
                        </td>
                        <td>
                            {stats.fortune.base + stats.fortune.coef + stats.fortune.value}
                        </td>
                    </tr>
                    <tr>
                        {/* JOY HERE */}
                        <td>
                            Joy
                        </td>
                        <td className="sneaker-stats_tabke-input_column">
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control 
                                    className="sneaker-stats-input" 
                                    type="number" 
                                    placeholder="Enter a base joy" 
                                    size="sm" 
                                    value={stats.joy.base}
                                    onChange={(e) => dispatch(setBaseStat({ name: 'joy', value: Number(e.target.value) }))}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {stats.joy.coef}
                        </td>
                        <td className="sneaker-stats_tabke-input_column">
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control 
                                    className="sneaker-stats-input" 
                                    type="number" 
                                    placeholder="Enter a joy" 
                                    size="sm" 
                                    value={stats.joy.value}
                                    onChange={(e) => dispatch(setValueStat({ name: 'joy', value: Number(e.target.value) }))}
                                />
                            </InputGroup>
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={progress.joy}/>
                        </td>
                        <td>
                            {stats.joy.base + stats.joy.coef + stats.joy.value}
                        </td>
                    </tr>
                    <tr>
                        {/* DURABILITY HERE */}
                        <td>
                            Durability
                        </td>
                        <td className="sneaker-stats_tabke-input_column">
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control 
                                    className="sneaker-stats-input" 
                                    type="number" 
                                    placeholder="Enter a base durability" 
                                    size="sm" 
                                    value={stats.durability.base}
                                    onChange={(e) => dispatch(setBaseStat({ name: 'durability', value: Number(e.target.value) }))}
                                />
                            </InputGroup>
                        </td>
                        <td>
                            {stats.durability.coef}
                        </td>
                        <td className="sneaker-stats_tabke-input_column">
                            <InputGroup className="sneaker-stats-input">
                                <Form.Control 
                                    className="sneaker-stats-input" 
                                    type="number" 
                                    placeholder="Enter a durability" 
                                    size="sm" 
                                    value={stats.durability.value}
                                    onChange={(e) => dispatch(setValueStat({ name: 'durability', value: Number(e.target.value) }))}
                                />
                            </InputGroup>
                        </td>
                        <td className="sneaker-stats_table-progress_column">
                            <ProgressBar now={progress.durability}/>
                        </td>
                        <td>
                            {stats.durability.base + stats.durability.coef + stats.durability.value}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}