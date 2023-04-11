import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>

            <h3>Ecommerce-SuperMarket</h3>

            <div>
                <button>Alimentos</button>
                <button>Limpieza</button>
                <button>bazar</button>
            </div>
            <CartWidget/>
        </nav>
    )


}
export default NavBar