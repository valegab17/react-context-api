import { Link, NavLink } from "react-router-dom"
import logo from "../assets/Logo.png"
import { useBudget } from "../assets/contexts/BudgetContext ";
function NavBar() {
  const { budgetMode, toggleBudgetMode} = useBudget();

  return (
    <>
      <header>
        <img src={logo} alt="" />
        <nav>
          <Link to="/">HOMEPAGE</Link>
          <NavLink to="/Products">I NOSTRI PRODOTTI</NavLink>
          <NavLink to="/AboutUs">CHI SIAMO</NavLink>
          <button onClick={toggleBudgetMode}>
            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
          </button>
        </nav>
      </header>
    </>
  )
}

export default NavBar
