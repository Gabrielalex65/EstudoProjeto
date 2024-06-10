public with sharing class ApprovalCategories {
    public List<ProcessInstance> getAccountApproval() {
        return [SELECT Id, TargetObjectId, Status, CreatedDate, LastActorId, LastModifiedDate,TargetObject.name 
        FROM ProcessInstance WHERE Status = 'Pending' AND TargetObject.type = 'Account'];
    }
    public List<ProcessInstance> getOpportunityApproval() {
        return [SELECT Id, TargetObjectId, Status, CreatedDate, LastActorId, LastModifiedDate,TargetObject.name  
        FROM ProcessInstance WHERE Status = 'Pending' AND TargetObject.type = 'Opportunity'];
    }
    public List<ProcessInstance> getCaseApproval() {
        return [SELECT Id, TargetObjectId, Status, CreatedDate, LastActorId, LastModifiedDate,TargetObject.name  
        FROM ProcessInstance WHERE Status = 'Pending' AND TargetObject.type = 'Case'];
    }

}