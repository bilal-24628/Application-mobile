document.addEventListener("deviceready", loadContacts, false);

function loadContacts () {
    let options = new ContactFindOptions();
    options.multiple = true;
    options.hasPhoneNumber = true;

    let fields = ['*'];

navigator.contacts. find(fields, showContacts, onContactError, options);
}

function showContacts(contacts) {
    let htmlCode = '';

    for (const contact of contacts) {
        htmlCode +=
            <li>
                <a href="#">
                    <img src="img/homme.png" >
                    <h2>${contact.name.formatted}</h2>
                    <p>${contact.phoneNumber[0].value}</p>
                </a>
            </li>
        ;
    }
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = htmlCode;
    $(contactList).listview('refresh');
}
function onContactError(error) {
    alert("Error when loadind contact : " + error);
    
}