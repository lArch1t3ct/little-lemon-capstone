import restaurantfood from '../assets/restauranfood.jpg'
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <article id="hero-section">
            <div>
                <header>
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                </header>
                <article>
                    <p>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button><Link to="/booking">Reserve A Table</Link></button>
                </article>
            </div>
            <img src={restaurantfood} alt="" width={280} height={320}/>
        </article>
    );

};

export default Hero;