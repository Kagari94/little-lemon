import React, { useState, useReducer, useEffect } from 'react';
import OrderForm from '../orderform/OrderForm';
import ConfirmationPage from '../../pages/confirmation/ConfirmationPage'
import { store, fetchAPI, submitApi } from '../API/api'; 


const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case 'SET_TIMES':
        return action.payload;
      default:
        return state;
    }
  };
  
  const initializeTimes = () => {
    return [];
  };
  
  function Main() {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
      store();
    }, []);

    const [availableTimes, dispatchAvailableTimes] = useReducer(
      availableTimesReducer,
      [],
      initializeTimes
    );

    const updateTimes = async (date) => {
      if (!date) return;
      
      try {
        const times = await fetchAPI(date);
        dispatchAvailableTimes({ type: 'SET_TIMES', payload: times });
      } catch (error) {
        console.error("Error fetching available times:", error);
        dispatchAvailableTimes({ 
          type: 'SET_TIMES', 
          payload: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] 
        });
      }
    };

    const submitForm = async (formData) => {
      try {
        const result = await submitApi(formData);
        if (result) {
          setBookingData(formData);
          setShowConfirmation(true);
        }
        return result;
      } catch (error) {
        console.error("Error submitting form:", error);
        return false;
      }
    };

    const returnToBooking = () => {
      setShowConfirmation(false);
      setBookingData(null);
    };
  
    return (
      <main>
        <section className="booking-section">
          <div className="container">
            {!showConfirmation ? (
              <>
                <OrderForm 
                  availableTimes={availableTimes} 
                  updateTimes={updateTimes}
                  submitForm={submitForm}
                />
              </>
            ) : (
              <ConfirmationPage 
                bookingData={bookingData} 
                returnToBooking={returnToBooking} 
              />
            )}
          </div>
        </section>
      </main>
    );
  }

export default Main;