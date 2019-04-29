describe('Address Book', function(){
    var addressBook, thisContact;

    beforeEach(function(){ // defineerib muutujad enne igat testi
        addressBook = new(AddressBook);
        thisContact = new(Contact);
    });

    it('should be able to add a contact', function(){
        // testitakse, kas kontaktiraamatusse saab lisada ja hiljem kätte saada kontakti

            addressBook.addContact(thisContact);

            expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function(){
       // testitakse, kas raamatust saab kontakti kustutada

            addressBook.addContact(thisContact);
            addressBook.deleteContact(0);

            expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

describe('Async Address Book', function(){

    var addressBook = new(AddressBook);

    beforeEach(function (done) {
       addressBook.getInitialContacts(function(){
           //lisab callbacki funkstiooni, mis annab märku, millal async funktsioon on lõpetanud ja testimist saab alustada
           done();
       })
   });

   it('should grab initial contacts',function(done){ // async funktsiooni test
       addressBook.getInitialContacts();
       expect(addressBook.initialComplete).toBe(true);
       done();
   });
});