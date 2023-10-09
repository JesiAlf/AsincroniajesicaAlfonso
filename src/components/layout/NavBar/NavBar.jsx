//import "./NavBar.css"
import CartWidget from "../../common/CartWidget/CartWidget";
export const NavBar = () => {
  return (
    <div>
      <nav className="NavBar">
        <img
          src="https://res.cloudinary.com/dphzc4d5r/image/upload/v1695681451/logotransp_pprvix.png"
          alt="logo"
        />
        <ul>
          <li>Artesanias</li>
          <li>Contactos</li>
          <li>Inicio</li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
};
