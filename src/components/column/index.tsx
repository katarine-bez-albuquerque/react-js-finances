import { Icolumn } from "./Icolumn";

const Column = ({ classname, children }:Icolumn) => {
    return(
        <section className={ classname }>
            { children }
        </section>
    );
}

export default Column;