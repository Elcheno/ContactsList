let btnShowAdd = document.querySelector('.btn-show-add')
let btnAddContact = document.querySelector('.btn-add-contact')
let subForm = document.querySelector('.sub-form')

let name = document.querySelector('.name');
let phone = document.querySelector('.phone');
let address = document.querySelector('.address');

const contactList = document.querySelector('.contactList');

const db = window.localStorage;
let lastKey = 1;

function addContact(){
    if(name.value==='' || phone.value==='' && address.value===''){
        popupInfo('Name and phone or address are required.', 'error')
        return
    }
    let contact = {
        id: lastKey,
        name: name.value,
        phone: phone.value,
        address: address.value,
    }
    saveContact(db, contact);
    loadContact(db, contactList, contact);
    lastKey++;
    popupInfo('Contact saved', 'success')
}

loadContacts(db, contactList);


