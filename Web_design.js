// This file contains the code for the motel customer object and the code to display the customer's information on the webpage
// Included in the repository: QAP-4-Web-Design-MJ
// Date: 11/23/2023 - 11/27/2023
// Written by: Mitchel Joy

// Set up the motel customer object
const motelCustomer = {
    firstName: "John",
    lastName: "Doe",
    title: "Mr",
    gender: "Male",
    birthday: "2000-10-06",
    roomPref: ["111", "103", "119"],
    payMethod: "Credit",
    address: { // sub object for specific address access
        streetAddress: "123 Easy Street",
        city: "Townville",
        province: "NL",
        postalCode: "A1A 1A1"
    },
    phoneNum: "(123)654-7890",
    checkInOutDates: 
    {   checkIn: new Date(2023, 10, 17),
        checkOut: new Date(2023, 10, 21),
    },
    checkInFormat: function(){ // function to format the check in date by slicing the date to only include the year, month, and day
        const checkInFormatted = this.checkInOutDates.checkIn.toISOString().slice(0,10)
        return checkInFormatted
    },
    checkOutFormat: function(){ // function to format the check out date by slicing the date to only include the year, month, and day
        const checkOutFormatted = this.checkInOutDates.checkOut.toISOString().slice(0,10)
        return checkOutFormatted
    },
    stayDuration: function(){ // function to calculate the duration of the stay using the check in and check out dates

        const Duration = this.checkInOutDates.checkOut - this.checkInOutDates.checkIn

        const durationInDays = Math.ceil(Duration/ (1000 * 60 * 60 * 24)) // converts milliseconds (/1000)to seconds (/60) to minutes (/60) to hours(/60) to days (/24)

        return durationInDays
    },
    // get age using a func
    custAge: function (){ // function to calculate the age of the customer using current year and birth year
        const birthYear = parseInt(this.birthday.slice(0,4))
        const today = new Date();
        const todayYear = today.getFullYear()
        const age = todayYear - birthYear
        return age
    }
};

// variable to format the room preference array into a string
let roomPrefDisp = motelCustomer.roomPref.join(", ");

// Display of the motel customer's information

let CustInfo = `<p>${motelCustomer.firstName} ${motelCustomer.lastName} will be staying with us on ${motelCustomer.checkInFormat()}. \
${motelCustomer.title}. ${motelCustomer.lastName}'s stay will last ${motelCustomer.stayDuration()} days and will be checking out on \
${motelCustomer.checkOutFormat()}. The customer has expressed their preference over the rooms ${roomPrefDisp} and will \
be paying for their stay using ${motelCustomer.payMethod}. ${motelCustomer.title}. ${motelCustomer.lastName} is ${motelCustomer.custAge()} \
years old. They live in ${motelCustomer.address.province} their address is ${motelCustomer.address.streetAddress}, \
${motelCustomer.address.city}. Their phone number is ${motelCustomer.phoneNum} and their postal code is ${motelCustomer.address.postalCode}. \
Please give ${motelCustomer.title}. ${motelCustomer.lastName} the best possible stay by catering the their every possible request.</p>
`;

console.log(CustInfo)

// Display the motel customer's information on the webpage
document. body. innerHTML = CustInfo;