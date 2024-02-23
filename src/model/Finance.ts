export class Finance {
    /**
     * Variáveis
     * Variables
     */
    private balance:number = 0.0;
    private revenue:number = 0.0;
    private expense:number = 0.0;
    /**
     * Constructor
     */    
    constructor() {}
   /**
     * Set Revenue
     * Definir Receita
     * @param value 
     */
    setRevenue(value: string): void {
        this.revenue = Number(value);       
    } 
    /**
     * Get Revenue
     * Obter Receita
     * @returns 
     */
    getRevenue(): number {        
        return this.revenue;
    }
    /**
     * Set Expense
     * Definir Despesas
     * @param value 
     */
    setExpense(value: string): void {
        this.expense = Number(value);     
    }
    /**
     * Get Expense
     * Obter Despesas
     * @returns 
     */
    getExpense(): number {        
        return this.expense;
    }
    /**
     * Get Total
     * Obter Total
     * @returns 
     */
    getTotal(): number {         
        this.balance = this.getRevenue() - this.getExpense();       
        return this.balance;
    }
}