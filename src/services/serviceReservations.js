const { modelReservations } = require('../models/modelReservations');

const serviceReservations = {
  postReservations: async (body) => {
    const { full_name,phone,emergency_phone,itinerary,booked_day,tour_date,payment_method,tour_price,reservation_price,cancellation_fee,commision_value, commisioned} = body;

    await modelReservations.postReservations(full_name,phone,emergency_phone,itinerary,booked_day,tour_date,payment_method,tour_price,reservation_price,cancellation_fee,commision_value, commisioned);
    
    } 
}

module.exports = { serviceReservations };