const motelCustomer = {
    firstName: "John",
    lastName: "Doe",
    title: "Mr",
    gender: "Male",
    birthday: "2000-10-06",
    roomPref: ["111", "103", "119"],
    payMethod: "Credit",
    address: {
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
    checkInFormat: function(){
        const checkInFormatted = this.checkInOutDates.checkIn.toISOString().slice(0,10)
        return checkInFormatted
    },
    checkOutFormat: function(){
        const checkOutFormatted = this.checkInOutDates.checkOut.toISOString().slice(0,10)
        return checkOutFormatted
    },
    stayDuration: function(){

        const Duration = this.checkInOutDates.checkOut - this.checkInOutDates.checkIn

        const durationInDays = Math.ceil(Duration/ (1000 * 60 * 60 * 24)) // converts milliseconds (/1000)to seconds (/60) to minutes (/60) to hours(/60) to days (/24)

        return durationInDays
    },
    // get age using a func
    custAge: function (){
        const birthYear = parseInt(this.birthday.slice(0,4))
        const today = new Date();
        const todayYear = today.getFullYear()
        const age = todayYear - birthYear
        return age
    }
};


let roomPrefDisp = motelCustomer.roomPref.join(", ");

let CustInfo = `<p>${motelCustomer.firstName} ${motelCustomer.lastName} will be staying with us on ${motelCustomer.checkInFormat()}. \
${motelCustomer.title}. ${motelCustomer.lastName}'s stay will last ${motelCustomer.stayDuration()} days and will be checking out on \
${motelCustomer.checkOutFormat()}. The customer has expressed their preference over the rooms ${roomPrefDisp} and will \
be paying for their stay using ${motelCustomer.payMethod}. ${motelCustomer.title}. ${motelCustomer.lastName} is ${motelCustomer.custAge()} \
years old. They live in ${motelCustomer.address.province} their address is ${motelCustomer.address.streetAddress}, \
${motelCustomer.address.city}. Their phone number is ${motelCustomer.phoneNum} and their postal code is ${motelCustomer.address.postalCode}. \
Please give ${motelCustomer.title}. ${motelCustomer.lastName} the best possible stay by catering the their every possible request.</p>
`;

console.log(CustInfo)


document. body. innerHTML = CustInfo;