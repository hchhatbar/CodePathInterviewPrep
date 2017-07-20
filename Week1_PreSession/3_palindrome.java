public class Solution {
    public int isPalindrome(String A) {
    if (A.isEmpty()) {
        	return 1;
        }
        int head = 0, tail = A.length() - 1;
        char cHead, cTail;
        while(head <= tail) {
        	cHead = A.charAt(head);
        	cTail = A.charAt(tail);
        	if (!Character.isLetterOrDigit(cHead)) {
        		head++;
        	} else if(!Character.isLetterOrDigit(cTail)) {
        		tail--;
        	} else {
        		if (Character.toLowerCase(cHead) != Character.toLowerCase(cTail)) {
        			return 0;
        		}
        		head++;
        		tail--;
        	}
        }
        
        return 1;
    }
}
