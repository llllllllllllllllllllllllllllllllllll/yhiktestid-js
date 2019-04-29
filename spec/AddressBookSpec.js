describe('Address Book', function(){
    it('should be able to add a contact', function(){
        var addressBook = new AddressBook();
            thisContact = new Contact();

            addressBook.addContract(thisContact);

            expect(addressBook.getContact(0)).toBe(thisContact);
    })
})