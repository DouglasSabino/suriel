const { db } = require('./connection');

const modelReservations = {
  postReserve: async (full_name,phone,emergency_phone,itinerary,booked_day,tour_date,payment_method,tour_price,reservation_price,cancellation_fee,commision) => {
    const SQL_POST_RESERVATION = "INSERT INTO reservations(full_name,phone,emergency_phone,itinerary,booked_day,tour_date,payment_method,tour_price,reservation_price,cancellation_fee,commision) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
    await db.execute(SQL_POST_RESERVATION, [full_name,phone,emergency_phone,itinerary,booked_day,tour_date,payment_method,tour_price,reservation_price,cancellation_fee,commision]);
  },
 
}

module.exports = { modelReservations };