const saveContact = (db, contact) => {
    db.setItem(contact.id, JSON.stringify(contact));
    clearField();
    disabledForm()
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

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#22C219',
            cancelButtonColor: '#FF6347FF',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                divContact.classList.remove('contact')
                divContact.classList.add('contact-removed')
                setInterval(() => {
                    db.removeItem(contact.id);
                    divContact.remove();
                    lineH.remove();
                }, 300)
                popupInfo('Contact removed', 'warning')
            }
        })

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

function showForm() {
    if(subForm.classList.contains('sub-form-visible')){
        disabledForm()
    }else{
        btnShowAdd.innerHTML = 'remove'
        btnShowAdd.parentElement.style.backgroundColor = 'tomato'
        btnAddContact.classList.remove('btn-add-contact-oculto');
        btnAddContact.classList.remove('btn-show');
        btnAddContact.classList.add('btn-add-contact-visible');
        subForm.classList.remove('sub-form-oculto');
        subForm.classList.remove('sub-form-start');
        subForm.classList.add('sub-form-visible');
    }
}

function disabledForm() {
    btnShowAdd.innerHTML = 'add'
    btnShowAdd.parentElement.style.backgroundColor = 'dodgerblue'
    btnAddContact.classList.remove('btn-add-contact-visible');
    btnAddContact.classList.add('btn-add-contact-oculto');
    subForm.classList.remove('sub-form-visible');
    subForm.classList.add('sub-form-oculto');
}

function popupInfo(msg, type){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: type,
        title: msg,
    })
}