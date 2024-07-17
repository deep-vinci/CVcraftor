import "./index.css";
import cvcLogo from "./assets/cvc-logo.svg"
const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <img src={cvcLogo} alt="cv craftor logo" />
            <h2>CvCraftor</h2>
        </div>
        <div className="print">
            <button>print</button>
        </div>
    </header>
  );
};

export default Header;