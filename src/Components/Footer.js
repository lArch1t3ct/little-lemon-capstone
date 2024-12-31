import restaurant from '../assets/restaurant.jpg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <img src={restaurant}
                 alt="The balcony of the restaurant. On the left, there are square brown tables between two brown leather-like seats. On the right, there are purple couches with green-blue pillows with large white-brown tables between them. In the middle of the right side, a tree bench."
            />
            
            <nav id="footer-nav">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li><Link to='/booking'>Booking</Link></li>
                    <li><Link to='/order'>Order Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>

            <div>
                <h4>Contact</h4>
                <ul>
                    <li><address>Address</address></li>
                    <li><a href="tel:+4733378901">+47 333 78 901</a></li>
                    <li><a href="mailto:webmaster@example.com">webmaster</a></li>
                </ul>
            </div>

            <div>
                <h4>Social Media Contact</h4>
                <ul>
                    <li><address>Address</address></li>
                    <li><a href="tel:+4733378901">+47 333 78 901</a></li>
                    <li><a href="mailto:webmaster@example.com">webmaster</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;