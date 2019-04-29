function AddressBook(){ //aadressiraamatu konstruktor
    this.contacts = [];
}

AddressBook.prototype.getInitialContacts = function(cb){ // simuleerib algsete kontaktide importimist api teel.
    var self = this;

    setTimeout(function(){
        self.initialComplete = true;
        if(cb){
            return cb();
        }
    },3);
}

AddressBook.prototype.addContact = function(contact){ // aadressiraamatusse kontakti lisamine
    this.contacts.push(contact);
};
AddressBook.prototype.getContact = function(index){ // kontakti saamine aadressiraamatust indeksi järgi
    return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index){ // kontakti kustutamine
    this.contacts.splice(index, 1);
};
