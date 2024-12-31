import mario_adrian_1 from '../assets/Mario and Adrian A.jpg';
import mario_adrian_2 from '../assets/Mario and Adrian b.jpg';

function About(){
    return(
        <article id="about-section">
            <div>
                <header>
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                </header>
                <article>
                    <p>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                </article>
            </div>
            <img id="mario-adrian-photo-1" src={mario_adrian_1} alt='' width={280} height={230} />
            <img id="mario-adrian-photo-2" src={mario_adrian_2} alt='' width={280} height={230} />
        </article>
    );
};

export default About;