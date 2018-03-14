import React from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const UserDetails = (props) =>{
  return(
      <div >
        <p className="Dashboard-h1">Solo queda agregar unos datos y terminamos!</p>
        <p>
          Por favor agrega tu dirección de ETH y un NIP para las transacciones
        </p>
        <form>
            <div className="Login-options-form-container">
                <TextField
                    id="direccion"
                    label="Dirección de ETH"
                    // placeholder="Dirección de ETH"
                    margin="normal"
                    onChange={(evt) => props.handleDataChange("address",evt.target.value)}
                    helperText="Dirección de ETH"
                    fullWidth
                    required={true}
                />
            </div>
            <div>
                <TextField
                    id="nip"
                    label="NIP de transacciones"
                    onChange={(evt) => props.handleDataChange("nip",evt.target.value)}
                    // placeholder="NIP de transacciones"
                    margin="normal"
                    helperText="Ingresa un NIP de mínimo 4 digitos para proteger tus transacciones"
                    fullWidth
                    required={true}
                    type="number"
                />
            </div>
            <div>
                <Button
                    variant="raised"
                    style={props.buttonStyle}
                    disabled={props.validData}
                    onClick={props.onSubmit}
                >
                    Enviar
                </Button>
            </div>
        </form>
      </div>
  )
};

export default UserDetails;