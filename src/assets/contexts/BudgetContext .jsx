import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BudgetContext = createContext();

const endpoint = "https://fakestoreapi.com/products";

function BudgetProvider({ children }) {
   //var di stato 

    const [products, setProducts] = useState([]); 
    // var budget mode mi ritorna un booleano 
    const [budgetMode, setBudgetMode] = useState(false);

    
    const toggleBudgetMode = () => {
        setBudgetMode(prev => !prev);
    };

    
    function fetchProducts() {
        axios.get(endpoint)
            .then((res) => {
                setProducts(res.data);
            })
            .catch(err => console.error("Errore nella richiesta:", err));
    }

    useEffect(fetchProducts, []);

    return (
        <BudgetContext.Provider
            value={{
                products,      
                budgetMode,    
                toggleBudgetMode  
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
}

// Hook per consumare il contesto
function useBudget() {
    return useContext(BudgetContext);
}

export { BudgetProvider, useBudget };