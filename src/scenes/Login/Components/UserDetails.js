import React from 'react'
import TextField from 'material-ui/TextField';

const textFieldStyle = {
    color: "black !important",
    backgroundColor: "null !important"
};

const inputUnderline = {
    backgroundColor: "var(--color-accent)",
};

const inputLabelFocused = {
    color: "var(--color-accent)",
};

const styles = theme => ({

    inputUnderline: {
        '&:after': {
            backgroundColor: "var(--color-accent)",
        },
    },
});

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
                    helperText="Dirección de ETH"
                    InputLabelProps={{
                        classes: {
                            focused: inputLabelFocused
                        }
                    }}
                    InputProps={{
                        classes: {
                            input: inputUnderline
                        },
                    }}
                />
            </div>
            <div>
                <TextField
                    id="nip"
                    label="NIP de transacciones"
                    // placeholder="NIP de transacciones"
                    margin="normal"
                    helperText="Ingresa un NIP de 4 digitos para proteger tus transacciones"
                    style={textFieldStyle}
                />
            </div>
            <div>
                <input value="Enviar" type="button"/>
            </div>
        </form>
      </div>
  )
};

export default UserDetails;