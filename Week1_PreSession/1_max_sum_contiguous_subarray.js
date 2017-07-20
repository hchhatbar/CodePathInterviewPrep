module.exports = {
    //param A : array of integers
    //return an integer
    maxSubArray: function(A) {
        var currMax = 0;
        var maxSoFar = -9007199254740991;
        if (A.length === 1) {
            return A[0];
        }

        for (var i = 0; i < A.length; i++) {
            currMax = currMax + A[i];
            if (maxSoFar < currMax) {
                maxSoFar = currMax;
            }
            if (currMax < 0) {
                currMax = 0;
            }
        }
        return maxSoFar;
    }
};

/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
For example:
Given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
For this problem, return the maximum sum.
*/
