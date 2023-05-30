import logo from '../../assets/logo.svg';
import './style.css';

export const Header = () => {
    return (
        <header className='header'>
            <img className='logo' src={logo} alt="Logo principal do sistema" />
        </header>
    )
}