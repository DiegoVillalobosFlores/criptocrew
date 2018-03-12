import React from 'react'

import Tooltip from 'react-tooltip';

function getSharesSellButton(days) {
    if(days <= 0){
        return(
            <p className="Dashboard-button" >Vender</p>
        )
    }else{
        return(
            <div style={{display: "grid"}}>
                <p className="Dashboard-button disabled" data-tip={"Faltan " + days +" días para poder vender tus acciones"}>Vender</p>
                <Tooltip/>
            </div>
        )
    }
}

const DashboardMain = (props) => {
    return (
        <div className="Dashboard-element-layout">
            <div className="Dashboard-element-layout-item-container">
                <p className="Dashboard-h1">Acciones Restantes</p>
                <p className="Dashboard-number-large">69</p>
                <p className="Dashboard-button">Comprar</p>
            </div>
            <div className="Dashboard-element-layout-item-container">
                <p className="Dashboard-h1">Tus Acciones</p>
                <p className="Dashboard-number-large" >03</p>
                {getSharesSellButton(props.daysLeftToSellShares)}
            </div>
            <div className="Dashboard-element-layout-item-container">
                <p className="Dashboard-h1">Balance en ETH</p>
                <p className="Dashboard-number-large" >350</p>
                <p className="Dashboard-button">Retirar</p>
            </div>
        </div>
    )
};

export default DashboardMain