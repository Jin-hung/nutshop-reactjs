import Market from "./Market";
import NutShop from "./nutShop";
import AboutUs from "./aboutUs";
import "./styles/style.css";

function App() {
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Nutshop
        </a>
        <div className="link">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="login">
          <button className="signup">Sign up</button>
          <button>Login</button>
        </div>
      </nav>

      <header>
        <div className="left">
          <h1>
            <span>Pure Nature</span> Every Moment
          </h1>
          <p>
            We believe great nuts come from a deep respect for the land.
            Carefully sourced and tenderly handled, delivering nature’s finest
            straight to you.
          </p>
          <a href="#">
            <i className="bx bxs-cart-alt"></i>
            <span>Shop Now</span>
          </a>
        </div>
        <img src={"images/Nuts.avif"} alt="Nuts" />
      </header>

      <h2 className="seperator">Our Products</h2>
      <Market />

      <h2 className="seperator">Shop Place</h2>
      <NutShop />

      <h2 className="seperator">About Us</h2>
      <AboutUs />

      <footer>
        <h3>Pure Nature, Every Moment</h3>

        <div className="right">
          <div className="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Collabrators</a>
            <a href="#">About</a>
          </div>

          <div className="email">
            <i className="bx bxs-envelope"></i>
            <p>example@example.com</p>
          </div>

          <div className="media">
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-twitter"></i>
          </div>

          <div className="copyright">
            <p>© 2025 Nutshop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
