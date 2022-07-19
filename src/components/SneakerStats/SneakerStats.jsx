import ProgressBar from 'react-bootstrap/ProgressBar';
import "./SneakerStats.css";

export default function SneakerStats() {
    return (
        <div className="sneaker-stats">
            <table>
                <tr>
                    <td>
                        <div className="sneaker-stats_table-block"/>
                    </td>
                    <td>
                        Perfomance
                    </td>
                    <td className="sneaker-stats_table-progress_column">
                        <ProgressBar now={20}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="sneaker-stats_table-block"/>
                    </td>
                    <td>
                        Fortune
                    </td>
                    <td className="sneaker-stats_table-progress_column">
                        <ProgressBar now={40}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="sneaker-stats_table-block"/>
                    </td>
                    <td>
                        Joy
                    </td>
                    <td className="sneaker-stats_table-progress_column">
                        <ProgressBar now={60}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="sneaker-stats_table-block"/>
                    </td>
                    <td>
                        Durability
                    </td>
                    <td className="sneaker-stats_table-progress_column">
                        <ProgressBar now={80}/>
                    </td>
                </tr>
            </table>
        </div>
    );
}