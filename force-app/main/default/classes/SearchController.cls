public with sharing class SearchController {

    @AuraEnabled(cacheable=true)
    public static List<List<SObject>> searchRecords(String searchTerm) {
        // Perform SOSL search
        String searchQuery = 'FIND \'' + String.escapeSingleQuotes(searchTerm) + '*\' ' +
                             'IN ALL FIELDS RETURNING ' +
                             'Account(Name), Contact(Name), Lead(Name), Opportunity(Name)';
        return Search.query(searchQuery);
    }
}