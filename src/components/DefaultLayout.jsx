import { Outlet } from "react-router-dom"

import Navbar from "./NavBar"
function DefaultLayout() {


    return (
        <>
    <Navbar/>
    <Outlet/>
    <main></main>
    <footer>IL MIO FOOTER</footer>
        </>
    )
}

export default DefaultLayout