import "./SneakerCosts.css";

export default function SneakerCosts() {
    return (
        <div className="sneaker-costs">
            <table>
                <tr>
                    <td className="sneaker-costs_table-title">
                        DAILY INCOME
                    </td>
                    <td className="sneaker-costs_table-value">
                        0
                    </td>
                </tr>
                <tr>
                    <td className="sneaker-costs_table-title">
                        AZY PER DAY / LIMIT PER LVL
                    </td>
                    <td className="sneaker-costs_table-value">
                        0
                    </td>
                </tr>
                <tr>
                    <td className="sneaker-costs_table-title">
                        DURABLE PER DAY
                    </td>
                    <td className="sneaker-costs_table-value">
                        0
                    </td>
                </tr>
                <tr>
                    <td className="sneaker-costs_table-title">
                        REPAIR COST
                    </td>
                    <td className="sneaker-costs_table-value">
                        0
                    </td>
                </tr>
            </table>
        </div>
    );
}