import "./SneakerTable.css";
import SneakerType from '../SneakerType/SneakerType';
import SneakerRarity from '../SneakerRarity/SneakerRarity';
import SneakerLevel from '../SneakerLevel/SneakerLevel';
import SneakerEnergy from "../SneakerEnergy/SneakerEnergy";
import SneakerGems from "../SneakerGems/SneakerGems";
import SneakerStats from "../SneakerStats/SneakerStats";
import SneakerCosts from "../SneakerCosts/SneakerCosts";

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
                    {/* <SneakerGems/> */}
                    <SneakerStats/>
                </div>
                <div className="sneaker-table_content-row_two">
                    <img src="sneaker.png"/>
                </div>
                <div className="sneaker-table_content-row_three">
                    <SneakerCosts/>
                </div>
            </div>
        </div>
    );
}