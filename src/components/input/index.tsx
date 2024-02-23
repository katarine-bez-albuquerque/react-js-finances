import { Iinput } from "./Iinput";

const Input = ({ type, name, value, placeholder, onchange }:Iinput) => {
    return(
        <input
            type={ type }
            name={ name }
            value={ value }
            placeholder={ placeholder }
            onChange={ onchange }
            autoComplete="off"
        />
    );
}

export default Input;