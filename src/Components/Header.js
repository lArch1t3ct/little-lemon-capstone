import logo from '../assets/Logo.svg';
import Nav from './Nav';

function Header(){
    return(
        <header id="main-header">
            <img src={logo} alt="Little Lemon's logo which is consisted of a lemon and next to it the string 'Little Lemon'"/>
            <Nav />
        </header>
    );
}

export default Header;