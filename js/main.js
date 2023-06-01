let name = document.querySelector('.name');
let phone = document.querySelector('.phone');
let address = document.querySelector('.address');

const contactList = document.querySelector('.contactList');

const db = window.localStorage;

function addContact(){
    let contact = {
        id: Math.random(1,100),
        name: name.value,
        phone: phone.value,
        address: address.value,
    }
    saveContact(db, contact);
    // clearField();

    loadContact(db, contactList);

}

loadContact(db, contactList);


