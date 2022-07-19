import "./SneakerTable.css";
import SneakerContent from "../SneakerContent/SneakerContent";
import SneakerType from '../SneakerType/SneakerType';
import SneakerRarity from '../SneakerRarity/SneakerRarity';
import SneakerLevel from '../SneakerLevel/SneakerLevel';
import SneakerEnergy from "../SneakerEnergy/SneakerEnergy";

export default function SneakerTable() {
    return (
        <div className="sneaker-table">
            <div className="sneaker-table_settings">
                <SneakerType/>
                <SneakerRarity/>
                <SneakerLevel/>
                <SneakerEnergy/>
            </div>
            <div className="sneaker-table_content">
                <div className="sneaker-table_content-row_one">
                </div>
                <div className="sneaker-table_content-row_two">
                    <SneakerContent/>
                </div>
                <div className="sneaker-table_content-row_three">
                </div>
            </div>
        </div>
    );
}