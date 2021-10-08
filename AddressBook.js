console.log("WELCOME TO ADDRESSBOOK");
class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._firstName = name;
        else throw 'ENTER PROPER FIRST NAME';
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._lastName = name;
        else throw 'LAST NAME IS NOT PROPER';
    }
    get address()
    { 
        return this.address; 
    }
    set address(address){
        let addressRegex = RegExp('^[A-Z][a-z]{4,}');
        if(addressRegex.test(address))
            this._address=address;
        else
            throw 'Address incorrect';
    }
    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp('^[A-Z|a-z]{4,}$');
        if (cityRegex.test(city))
            this._city = city;
        else
            throw 'CITY IS NOT CORRECT';
    }

    get state()
    {
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp('^[A-Z][a-z]{4,}');
        if(stateRegex.test(state))
            this._state=state;
        else
            throw 'STATE IS NOT CORRECT';
    }
    get zip()
    {
        return this._zip=zip;
    }
    set zip(zip)
    {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip=zip;
        else 
            throw 'ZIP IS NOT CORRECT';
    }
    get phoneNumber()
    { 
        return this._phoneNumber; 
    }
    set phoneNumber(phoneNumber){
        let phoneRegex = RegExp('^[0-9]{1,2}\\s[0-9]{10}$');
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else 
            throw 'PHONE NUMBER NOT CORRECT';
    }
    get email()
    { 
        return this._email; 
    }
    set email(email){
        let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
        if(emailRegex.test(email))
            this._email=email;
        else 
            throw 'EMAIL NOT CORRECT';

}
}
let addressArray = new Array();
try {
addressArray.push(new Contact('Naman','Chandra','Basavanagudi','Bangalore','Karnataka','560004','91 9538169967','naman@gmail.com'));
console.log(addressArray);
}
catch (e)
{
    console.error(e);
}
try 
{
    addressArray.push(new Contact('Aashvi','Nagendra','Kathriguppe','Bangalore','Karnataka','560024','91 9880212050','aashvi@gmail.com'));
    console.log(addressArray);
    }
catch (e)
{
    console.error(e);
}
//addContact
function addContactToAddressBook(AddressBook, contactToAdd) {
    if(addressArray.some((contact) => { return contact.firstName == contactToAdd.firstName })) {
        console.log("Contact already present");
    }
    else {
        addressArray.push(contactToAdd);
        console.log("CONTACT ADDED");
    }
    return AddressBook;
}
//edit contact
try{
let nameToEdit = "Aashvi";
    let contactToEdit = new Contact('Sanjit','Kangovi','Gopalnagar','Mussorie','Dehradun',700021,'91 7894971230','sanjit@gmail.com');
    let editedAddressBook = new Array();
    addressArray.forEach(contact => {
        if(contact.firstName == nameToEdit) {
            editedAddressBook.push(contactToEdit);
        } else {
            editedAddressBook.push(contact);
        }
    });

    console.log("EDITED ADDRRESSBOOK: ", editedAddressBook)
} catch (e) {
    console.log(e);
}

//delete contact
try{
let nameToDelete = "Sanjit";
    let deletedAddressBook = addressArray.filter(function (contact) {
        return contact.firstName != nameToDelete;
    });
    console.log("AFTER DELETING CONTACT", deletedAddressBook)
} catch (e) {
    console.log(e);
}

//count number of contacts 
function getCountOfContacts(count) {
    count += 1;
    return count;
}
console.log("NUMBER OF CONTACTS: " + addressArray.reduce(getCountOfContacts, 0));

//no duplicate contact
try{
let contactToAdd = new Contact('Aashvi','Nagendra','Kathriguppe','Bangalore','Karnataka','560024','91 9880212050','aashvi@gmail.com');
    addressArray = addContactToAddressBook(addressArray, contactToAdd)

    totalContacts = addressArray.reduce((total_Contacts, contact) => {
        return total_Contacts+= 1;
    }, 0);
    console.log("TOTAL CONTACTS", totalContacts)

} catch (e) {
    console.log(e);
}

//search contact by city and state
try{
let cityToSearch = 'Bangalore';
    let stateToSearch = 'Karnataka';
    addressArray.filter(contact => contact.city == cityToSearch)
                .filter(contact => contact.state == stateToSearch)
                .forEach(contact => console.log(contact));

} catch (e) {
    console.log(e);
}