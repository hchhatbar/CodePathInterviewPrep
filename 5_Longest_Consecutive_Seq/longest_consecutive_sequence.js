module.exports = {
	//param A : array of integers
	//return an integer
	longestConsecutive: function(A) {
		var res = 0;
		var map = {};

		for (var i = 0; i < A.length; i++) {
			if (!map.hasOwnProperty(A[i])) {
				var left = map.hasOwnProperty(A[i] - 1) ? map[A[i] - 1] : 0;
				var right = map.hasOwnProperty(A[i] + 1) ? map[A[i] + 1] : 0;
				var sum = left + right + 1;

				map[A[i]] = sum;

				res = Math.max(res, sum);
				map[A[i] - left] = sum;
				map[A[i] + right] = sum;
			} else {
				// duplicates
				continue;
			}
		}
		return res;
	}
};
