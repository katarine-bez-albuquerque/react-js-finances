import { Icontainer } from "./Icontainer";

const Container = ({ classname, children }:Icontainer) => {
    return(
        <section className={ classname }>
            { children }
        </section>
    );
}

export default Container;