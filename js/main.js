let name = document.querySelector('.name');
let phone = document.querySelector('.phone');
let address = document.querySelector('.address');

const contactList = document.querySelector('.contactList');

const db = window.localStorage;
let lastKey = 1;

function addContact(){
    let contact = {
        id: lastKey,
        name: name.value,
        phone: phone.value,
        address: address.value,
    }
    saveContact(db, contact);
    loadContact(db, contactList, contact);
    lastKey++;
}

loadContacts(db, contactList);


