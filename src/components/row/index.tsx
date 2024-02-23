import { Irow } from "./Irow";

const Row = ({ classname, children }:Irow) => {
    return(
        <section className={ classname }>
            { children }
        </section>
    );
}

export default Row;