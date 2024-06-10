public without sharing class ContactController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(Integer recordsNum, List<Id> idsDisplayed)
    {
            return [SELECT Name,Email FROM Contact WHERE Id  NOT IN: idsDisplayed LIMIT: recordsNum];
    }

}