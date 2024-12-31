import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState('0');
    const [occasion, setOccasion] = useState("Select Occasion");

    const [errors, setErrors] = useState({});

    const resetForm = () => {
        setDate("");
        setTime("");
        setGuests("0");
        setOccasion("Select Occasion");
        setErrors({});
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if(customFormValidation()){
            const formData = {
                date,
                time,
                guests,
                occasion,
            };

            submitForm(formData);
            resetForm();
        }
    }

    const handleChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch( {type: 'TIME_UPDATE', payload: newDate });
    }

    function customFormValidation() {
        const newErrors = {};

        if(!date){
            newErrors.date = "Date is required";
        }

        if(!time){
            newErrors.time = 'Time is required';
        }

        if(guests < 1 || guests > 10){
            newErrors.guests = "Guests should be between 1 and 10";
        }

        if(occasion === "Select Occasion"){
            newErrors.occasion = "Occasion is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // If the newErrors has no properties means that the form is valid.
    }

    return(
        <>
            <form
                onSubmit={handleSumbit}
            >
                <fieldset>
                    <label htmlFor="res-date">Date</label>
                    <input type="date" 
                        min={new Date().toISOString().split('T')[0]}
                        required
                        id="res-date"
                        value={ date }
                        onChange={ handleChange }
                        onBlur={customFormValidation}
                        style={errors.date ? {border: "2px solid red"} : {}}
                    />
                    {errors.date && <span className='error'>{errors.date}</span>}
                </fieldset>
                
                <fieldset>
                    <label htmlFor="res-time">Time</label>
                    <select id="res-time"
                            value={ time }
                            onChange={ (e) => setTime(e.target.value) }
                            onBlur={customFormValidation}
                            style={errors.time ? {border: "2px solid red"} : {}}
                            required
                    >
                        {
                            availableTimes.availableTimes.map( (time, index) => <option key={index}>{time}</option> )
                        }
                    </select>
                    {errors.time && <span className='error'>{errors.time}</span>}
                </fieldset>
                
                <fieldset id="guest-field">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" 
                        value={ guests } 
                        placeholder={ guests } 
                        min="1" 
                        max="10" 
                        id="guests"
                        onChange={ (e) => setGuests(e.target.value) }
                        onBlur={customFormValidation}
                        style={errors.guests ? {border: "2px solid red"} : {}}
                        required
                    />
                    {errors.guests && <span className='error'>{errors.guests}</span>}
                </fieldset>

                <fieldset id="occasion-field">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion"
                            value={ occasion }
                            onChange={ (e) => setOccasion(e.target.value) }
                            style={errors.occasion ? {border: "2px solid red"} : {}}
                            onBlur={customFormValidation}
                            required
                    >
                        <option>Select Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {errors.occasion && <span className='error'>{errors.occasion}</span>}
                </fieldset>

                <button type="submit"
                        aria-label='Click to make a reservation'
                        disabled={errors.date || errors.time || errors.guests || errors.occasion}
                >
                    Make A Reservation
                </button> 
            </form>
        </>
    );
}

export default BookingForm;