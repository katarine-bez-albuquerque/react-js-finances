import { FormEvent, useState } from "react";
import Column from "../../components/column";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Input from "../../components/input";
import Main from "../../components/main";
import Row from "../../components/row";
import { Finance } from "../../model/Finance";
import "./style.css";
/** 
 * Class Finance 
*/
const finance: Finance = new Finance();
/** 
 * Component Home
*/
const Home = () => {
    /**
     * Variáveis
     * Variables
     */
    const [balance, setBalance] = useState('');
    const [revenue, setRevenue] = useState('');
    const [expense, setExpense] = useState('');
    const [revenues, setRevenues] = useState('');
    const [expenses, setExpenses] = useState('');
    const [message, setMessage] = useState('');
    /**
     * Faz o cálculo dos valores de total de ganhos e total de gastos.
     * Calculates total earnings and total expenses.
     * @param event 
     * @returns 
     */
    const calculate = (event: FormEvent): void => {
        event.preventDefault();
        if (revenues === '' || expenses === '') {
            setMessage('Fill in the fields!');
            return;
        }
        /**
         * Set values
         * Definir valores
        */    
        finance.setRevenue(revenues);
        finance.setExpense(expenses);
        /**
         * Get values
         * Obter valores
         */
        setRevenue(finance.getRevenue().toFixed(2));
        setExpense(finance.getExpense().toFixed(2));
        setBalance(finance.getTotal().toFixed(2));   
    }
    /**
     * Limpa valores
     * Clear values
     */
    const clear = (): void => {
        setRevenues('');
        setExpenses('');
        setRevenue('');
        setExpense('');
        setBalance('');
        setMessage('');
    }
    /**
     * Renderiza componente
     * Render component
     */
    return (
        <>
            <Header classname="nav" />
            <Main>
                <Container classname="container">
                    <Row classname="row base-gray">
                        <article className="titles plateral">
                            <h1>My Finances</h1>
                            <h4>Organize your money!</h4>
                        </article>
                        <article className="saldo">
                            <h4>Total Balance</h4>
                            <h3 className={ Number(balance) <= 0 ? 'deactivate' : 'active' }>{balance ? balance : '0.00'}</h3>
                        </article>
                    </Row>
                    <Row classname="row base-white">
                        <article className="info">
                            <p>Inform Ganos and Expenses:</p>
                            <form className="form" onSubmit={calculate} method="POST">
                                <section className="form-sec">
                                    <Input
                                        type="text"
                                        name="revenues"
                                        value={revenues}
                                        placeholder="Ganos"
                                        onchange={(e) => setRevenues(e.target.value)}
                                    />
                                    <h2>&</h2>
                                    <Input
                                        type="text"
                                        name="expenses"
                                        value={expenses}
                                        placeholder="Expenses"
                                        onchange={(e) => setExpenses(e.target.value)}
                                    />
                                </section>
                                <h5>{revenues === '' || expenses === '' ? message : ''}</h5>
                                <section className="form-btn">
                                    <Input
                                        type="submit"
                                        value="Calculate"
                                    />
                                    <button type="button" onClick={() => clear()}>Clear</button>                                    
                                </section>
                            </form>
                        </article>
                        <article className="values">
                            <section className="val gain">
                                <h4>Revenues</h4>
                                <h4>{revenue ? revenue : '0.00'}</h4>
                            </section>
                            <section className="val spent">
                                <h4>Expenses</h4>
                                <h4>{expense ? expense : '0.00'}</h4>
                            </section>
                        </article>
                    </Row>                    
                    <Column classname="column base-white">
                        <section className="box">
                            <h4 className={ Number(balance) <= 0 ? 'deactivate' : 'active' }>{ Number(balance) <= 0 ? 'Attention! Check your accounts!' : 'Your bills are up to date!' }</h4>
                        </section>
                    </Column>
                    <Row classname="row p base-white" />
                </Container>
            </Main>
            <Footer classname="footer" />
        </>
    );
}

export default Home;