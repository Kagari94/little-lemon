import { useState, useEffect } from 'react'
import './style.css';

function OrderForm({ availableTimes, updateTimes, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
        updateTimes(today);
    }, []);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        updateTimes(newDate);
        setTime('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        const formData = {
            date,
            time,
            guests,
            occasion
        };

        const submissionSuccessful = await submitForm(formData);

        if (submissionSuccessful) {
            setFormSubmitted(true);
            setTime('');
            setGuests(1);
            setOccasion('');
        } else {
            setFormError('This time slot is no longer available. Please select another time.');
        }
    };
    return (
        <div className="reservation-container">
            <h1>This is Reservation page!</h1>
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                <label>
                    Choose date
                    <input
                        aria-label='Date input'
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                    />
                </label>

                <label>
                    Choose time
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        disabled={availableTimes.length === 0}
                    >
                        <option value="">Select a time</option>
                        {availableTimes.map(timeOption => (
                            <option key={timeOption} value={timeOption}>{timeOption}</option>
                        ))}
                    </select>
                    {availableTimes.length === 0 && date && (
                        <p className="error-message">No available times for this date.</p>
                    )}
                </label>

                <label>
                    Number of guests
                    <input
                        aria-label='Number of guests input'
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                    />
                </label>

                <label>
                    Occasion
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </label>

                <input aria-label="Make reservation" type="submit" value="Make Your reservation" disabled={!time || availableTimes.length === 0}/>
            </form>
        </div>
    );
}

export default OrderForm;