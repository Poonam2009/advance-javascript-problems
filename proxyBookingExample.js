class Booking {
  constructor() {
    this._time = null;
  }
  //   set time(value) {
  //     let bookingHours = new Date(value).getHours();
  //     if (bookingHours < 9 || bookingHours > 16) {
  //       throw new Error("Bookings can only be made between 9AM and 4PM");
  //     }
  //     this._time = new Date(value);
  //   }

  //   get time() {
  //     return this._time;
  //   }
}

class Scheduler {
  constructor() {
    this._time = null;
  }
}

let validator = {
  set: function (obj, prop, value) {
    if (prop === "_time") {
      let bookingHours = new Date(value).getHours();
      if (bookingHours < 9 || bookingHours > 16) {
        throw new Error("Bookings can only be made between 9AM and 4PM");
      }
    }
    // The default behavior to store the value
    obj[prop] = new Date(value);

    // Indicate success
    return true;
  },
};

// let booking = new Booking();

let booking = new Proxy(new Booking(), validator);

let bookingAttempts = [
  new Date("2023-05-24T10:00:00"),
  new Date("2023-05-24T08:00:00"),
  new Date("2023-05-24T17:00:00"),
];

for (let attempt of bookingAttempts) {
  try {
    booking._time = attempt;
    console.log(`Booking made successfully at ${booking._time}`);
  } catch (error) {
    console.log(`Booking attempt failed for ${attempt}: ${error.message}`);
  }
}

let appointment = new Proxy(new Scheduler(), validator);

appointment._time = new Date("2023-05-24T10:00:00");
console.log(`Appointment made successfully at ${appointment._time}`);
appointment._time = new Date("2023-05-24T08:00:00");
console.log(`Appointment made successfully at ${appointment._time}`);
