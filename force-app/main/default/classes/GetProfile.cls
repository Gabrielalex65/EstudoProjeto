public class GetProfile {
    @AuraEnabled
    public static String checkUserHub() {
        
        return System.UserInfo.getUserRoleId();
    }
}