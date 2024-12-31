import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";

const BookingPage = (props) => {
    return (
        <>
            <Header />
            <h1 style={{textAlign: 'center'}}>Book Now</h1>
            <BookingForm availableTimes={ props.availableTimes } 
                         dispatch={ props.dispatch } 
                         submitForm={ props.submitForm } 
            />
            <Footer />
        </>
    );
};

export default BookingPage;