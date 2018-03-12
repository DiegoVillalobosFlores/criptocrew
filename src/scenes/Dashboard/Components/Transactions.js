import React from 'react'

import Divider from 'material-ui/Divider';

import TrendingFlat from 'material-ui-icons/TrendingFlat';
import TrendingDownIcon from 'material-ui-icons/TrendingDown';
import TrendingUpIcon from 'material-ui-icons/TrendingUp';

import '../../../styles/Dashboard.css'

const colors = {
    Compra: "#F1C40C",
    Venta: "#5de2cc",
    Retiro: "#dd4b2e"
};

let icon = {
    Compra: <TrendingUpIcon style={{fill: colors["Compra"]}}/>,
    Venta: <TrendingFlat style={{fill: colors["Venta"]}}/>,
    Retiro: <TrendingDownIcon style={{fill: colors["Retiro"]}}/>
};

const Transactions = (props) =>{
    return(
        <div className="Dashboard-transaction-container">
            <p className="Dashboard-h1">Historial de Transacciones</p>
            <Divider/>
            <table className="Dashboard-transaction-table">
                <thead>
                <tr className="Dashboard-transaction-table-th">
                    <th className="Dashboard-transaction-table-th-item">
                        {/*<AccountBalanceWalletIcon/>*/}
                    </th>
                    <th className="Dashboard-transaction-table-th-item">
                        Fecha
                    </th>
                    <th className="Dashboard-transaction-table-th-item">
                        Tipo
                    </th>
                    <th className="Dashboard-transaction-table-th-item">
                        Descripción
                    </th>
                    <th className="Dashboard-transaction-table-th-item">
                        De
                    </th>
                    <th className="Dashboard-transaction-table-th-item">
                        Para
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="Dashboard-transaction-table-td-row">
                    <td className="Dashboard-transaction-table-td-item">
                        {icon["Compra"]}
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Hoy
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Compra
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Comprados 3 acciones
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        0xLEL
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        0xME
                    </td>
                </tr>
                <tr className="Dashboard-transaction-table-td-row">
                    <td className="Dashboard-transaction-table-td-item">
                        {icon["Retiro"]}
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Ayer
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Retiro
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Retirados 420 ETH
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        0xCC
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        0xME
                    </td>
                </tr>
                <tr className="Dashboard-transaction-table-td-row">
                    <td className="Dashboard-transaction-table-td-item">
                        {icon["Venta"]}
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Mañana
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Venta
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        Vendidas 69 acciones
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        0xME
                    </td>
                    <td className="Dashboard-transaction-table-td-item">
                        0xLEL
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
};

export default Transactions