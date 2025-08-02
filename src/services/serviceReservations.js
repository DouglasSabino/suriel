const { modelReservations } = require('../models/modelReservations');

const serviceReservations = {
  postReservation: async (body) => {
    const { full_name,phone,emergency_phone,itinerary,booked_day,tour_date,payment_method,tour_price,reservation_price,cancellation_fee,commision} = body;

    await modelReservations.postReserve(full_name,phone,emergency_phone,itinerary,booked_day,tour_date,payment_method,tour_price,reservation_price,cancellation_fee,commision);
    
    } 
}

module.exports = { serviceReservations };