import logo from "../../assets/images/logo.png"
import './logo.scss'

export default function Logo() {
    return (
        <a href="/" className="d-block">
            <img className="logo d-block" src={logo} alt="logo" />
        </a>
    )
}
