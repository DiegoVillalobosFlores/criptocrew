import React from 'react';

const Wallet = (props) => {
    return (
        <div className="Dashboard-wallet-container">
            <p className="Dashboard-h1">Retirar Fondos</p>
            <p>Para retirar fondos completa el siguiente formulario:</p>
            <p>{"Balance: " + props.balance + " " + props.currency}</p>
            <form className="Dashboard-wallet-form-container">
                <p>Monto</p>
                <input type="number"/>
                <p>Dirección</p>
                <input type="text"/>
                <p>Validación</p>
                <input type="number"/>
            </form>
            <p className="Dashboard-button end">Retirar</p>
        </div>
    )
};

export default Wallet;