const saveContact = (db, contact) => {
    db.setItem(contact.id, JSON.stringify(contact));
    clearField();
}

const loadContacts = (db, parentNode) => {
    let keys = Object.keys(db).sort(function(a, b){return a - b});
    keys = keys.map(parseToInt);

    if(keys.length > 0){
        lastKey = keys[keys.length -1];
        lastKey++;
        console.log(lastKey);
    }else{
        lastKey = 1;
    }

    for(key of keys){
        let contact = JSON.parse(db.getItem(key));
        createContact(parentNode, contact, db);
    }

}

const loadContact = (db, parentNode, contact) => {
    createContact(parentNode, contact, db);
}

const createContact = (parentNode, contact, db) => {
    let divContact = document.createElement('div');
    let nameContact = document.createElement('h3');
    let phoneContact = document.createElement('p');
    let addressContact = document.createElement('p');
    let removeIcon = document.createElement('span');
    let lineH = document.createElement('hr');

    nameContact.innerHTML = contact.name;
    phoneContact.innerHTML = contact.phone;
    addressContact.innerHTML = contact.address;
    removeIcon.innerHTML = 'delete';

    removeIcon.onclick = () => {
        db.removeItem(contact.id);
        divContact.remove();
        lineH.remove();
    }

    divContact.classList.add('contact');
    removeIcon.classList.add('material-symbols-outlined', 'icon');

    divContact.appendChild(nameContact);
    divContact.appendChild(phoneContact);
    divContact.appendChild(addressContact);
    divContact.appendChild(removeIcon);

    parentNode.appendChild(divContact);
    parentNode.appendChild(lineH);

}

const clearField = () => {
    name.value = '';
    phone.value = '';
    address.value = '';
}

function parseToInt(str){
    return parseInt(str);
}