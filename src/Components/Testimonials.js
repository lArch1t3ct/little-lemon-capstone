import client_1 from '../assets/client-1.jpg';
import client_2 from '../assets/client-2.jpg';
import emp_1 from '../assets/employee-1.jpg';
import emp_2 from '../assets/employee-2.jpg';

function Testimonials(){
    return(
        <article id="testimonials">
            <h2>Testimonials</h2>
            <article id="client-cards">
                <article>
                    <p>Rating</p>
                    <div class="client-info">
                        <img src={client_1} alt='' width={100} height={100} />
                        <p>Name</p>
                    </div>
                    <p>Review</p>
                </article>

                <article>
                    <p>Rating</p>
                    <div class="client-info">
                        <img src={client_2} alt='' width={100} height={100} />
                        <p>Name</p>
                    </div>
                    <p>Review</p>
                </article>

                <article>
                    <p>Rating</p>
                    <div class="client-info">
                        <img src={emp_1} alt='' width={100} height={100} />
                        <p>Name</p>
                    </div>
                    <p>Review</p>
                </article>

                <article>
                    <p>Rating</p>
                    <div class="client-info">
                        <img src={emp_2} alt='' width={100} height={100} />
                        <p>Name</p>
                    </div>
                    <p>Review</p>
                </article>
            </article>
        </article>
    );
};

export default Testimonials;