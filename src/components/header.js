import './header.css'
import logo from '../assets/logo.svg';
import profile from '../assets/profile.jpg'

export default function Header() {
    return (
        <header>
            <img src={logo} alt='logo'></img>
            <div>
                <img className='profile' src={profile} alt='foto de perfil'></img>
                <span>Bem vindo, Daniel.</span>
            </div>
        </header>
    );
}