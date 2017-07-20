module.exports = {
	//param A : array of integers
	//return an integer
	maximumGap: function(A) {
		if (A.length <= 1) {
			return 0;
		}
		var n = A.length;
		var RMax = [];
		var LMin = [];

		LMin[0] = A[0];
		for (var i = 1; i < n; i++) {
			LMin[i] = Math.min(A[i], LMin[i - 1]);
		}

		//console.log(LMin);

		RMax[n - 1] = A[n - 1];
		for (var j = n - 2; j >= 0; --j) {
			RMax[j] = Math.max(A[j], RMax[j + 1]);
		}
		//console.log(RMax);

		var k = 0;
		var l = 0;
		var maxDiff = -1;

		while (k < n && l < n) {
			if (LMin[k] <= RMax[l]) {
				maxDiff = Math.max(maxDiff, l - k);
				l = l + 1;
			} else {
				k = k + 1;
			}
		}

		return maxDiff;
	}
};

/*
Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].
If there is no solution possible, return -1.

Example :
A : [3 5 4 2]
Output : 2 
for the pair (3, 4)
*/
