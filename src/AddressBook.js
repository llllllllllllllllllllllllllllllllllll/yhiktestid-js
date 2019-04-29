function AddressBook(){ //aadressiraamatu konstruktor
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact){ // aadressiraamatusse kontakti lisamine
    this.contacts.push(contact);
}
AddressBook.prototype.getContact = function(index){ // kontakti saamine aadressiraamatust indeksi järgi
    return this.contacts[index];
}
