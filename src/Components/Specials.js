import greek_salad from '../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.svg';
import lemon_dessert from '../assets/lemon dessert.jpg';

import { Link } from 'react-router-dom';


function Specials(){
    return(
        <article id="specials-section">
            <header>
                <h2>Specials</h2>
                <button>Online Menu</button>
            </header>
            <article id="card-container">
                <article id="greek-salad">
                    <img src={greek_salad} alt="" height={180}/>
                    <header>
                        <h4>Greek Salad</h4>
                        <span class="price">$7.99</span>
                    </header>
                    <p>This easy Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.</p>
                    <Link to="/">Order a delivery 🛵</Link>
                </article>

                <article>
                    <img src={bruchetta} alt="" height={180}/>
                    <header>
                        <h4>Bruchetta</h4>
                        <span class="price">$12.99</span>
                    </header>
                    <p>Bruschetta is a classic Italian appetizer that is easy to make at home. Toasted bread is topped with a mixture of juicy tomatoes, garlic, Parmesan cheese, fresh basil, and balsamic.</p>
                    <Link to="/">Order a delivery 🛵</Link>
                </article>

                <article>
                    <img src={lemon_dessert} alt="" height={202}/>
                    <header>
                        <h4>Lemon Dessert</h4>
                        <span class="price">$9.99</span>
                    </header>
                    <p>This easy Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.</p>
                    <Link to="/">Order a delivery 🛵</Link>
                </article>
            </article>
        </article>
    );
};

export default Specials;