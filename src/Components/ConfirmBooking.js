import Footer from "./Footer";
import Header from "./Header";

function ConfirmBooking(){
    return(
        <>
            <Header />
            <h1 id="confirmation-header">Booking has been <span>confirmed</span></h1>
            <Footer />
        </>
    );
}

export default ConfirmBooking;