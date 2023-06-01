const saveContact = (db, contact) => {
    db.setItem(contact.id, JSON.stringify(contact));
    window.location.href = '/';
}

const loadContact = (db, parentNode) => {
    let keys = Object.keys(db);
    console.log(keys);
    for(key of keys){
        let contact = JSON.parse(db.getItem(key));
        createContact(parentNode, contact, db);
    }
}

function clearField(){
    name.value = '';
    phone.value = '';
    address.value = '';
}

const createContact = (parentNode, contact, db) => {
    let divContact = document.createElement('div');
    let nameContact = document.createElement('h3');
    let phoneContact = document.createElement('p');
    let addressContact = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    nameContact.innerHTML = contact.name;
    phoneContact.innerHTML = contact.phone;
    addressContact.innerHTML = contact.address;
    iconoBorrar.innerHTML = 'delete';

    iconoBorrar.onclick = () => {
        db.removeItem(contact.id);
        // clearField();
        window.location.href = '/';
    }

    divContact.classList.add('tarea');
    iconoBorrar.classList.add('material-symbols-outlined', 'icono');

    divContact.appendChild(nameContact);
    divContact.appendChild(phoneContact);
    divContact.appendChild(addressContact);
    divContact.appendChild(iconoBorrar);

    parentNode.appendChild(divContact);


}