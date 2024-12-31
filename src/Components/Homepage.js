import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Homepage(){
    return(
        <>
            <Header />
            <Hero />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
        </>
    );

};

export default Homepage;