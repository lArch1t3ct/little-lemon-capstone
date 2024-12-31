import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

import { useReducer } from "react";
import ConfirmBooking from "./ConfirmBooking";

function Main(){
    // *** Start of the provided api.js file ***
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    
    const submitAPI = function(formData) {
        return true;
    };

    // *** End of the provided api.js file ***

    /*
        It should be new Date(date), but it seems that there is
        a problem when passing an argument. Potentially invalid date
        as the date.getDate() returns NaN.

        For the sake of simplicity, and avoiding any extensive debugging,
    */
    function updateTimes(state, action){
        switch(action.type){
            case "TIME_UPDATE":
                return { availableTimes: fetchAPI(new Date(action.payload))}
            default:
                return state;
        }
    }

    function initializeTimes(){
        return { availableTimes: fetchAPI(new Date()) }
    }

    const [state, dispatch] = useReducer(updateTimes, initializeTimes())
    const navigate = useNavigate();
    
    function submitForm(data){
        if(submitAPI(data)){
            navigate("/confirmation");
        }
    }

    return(
        <main>
            <Routes>
                <Route path="/" element={ <Homepage /> } />
                <Route path="/booking" element={ <BookingPage availableTimes={ state } dispatch={ dispatch } submitForm={ submitForm }/> } />
                <Route path="/confirmation" element={ <ConfirmBooking /> } />
            </Routes>
        </main>
    );
};

export default Main;