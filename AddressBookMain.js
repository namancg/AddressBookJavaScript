console.log("WELCOME TO ADDRESSBOOK");
class Address {
    constructor(...params) {
        this.city = params[0];
        this.state = params[1];
        this.zip = params[2];
    }
}
class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = new Address(params[2],params[3],params[4]);
        this.phoneNumber = params[5];
        this.email = params[6];
    }
    toString() {
        return "FIRST NAME= "+this.firstName+", LAST NAME= "+this.lastName
                +", CITY = "+this.address.city+", STATE= "+this.address.state
                +", ZIP= "+this.address.zip+", PHONE NUMBER= "+this.phoneNumber
                +", EMAIL= "+this.email;
    }
}

let contact = new Contact('NAMAN','CHANDRA','BANGALORE','KARNATAKA','560004','9538169967','naman@gmail.com');
console.log("CONTACT DETAILS");
console.log(contact);