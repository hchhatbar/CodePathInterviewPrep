module.exports = {
	//param A : integer
	//return a array of array of integers
	prettyPrint: function(A) {
		var size = A * 2 - 1;
		var ans = [];
		for (var t = 0; t < size; t++) {
			ans.push([]);
		}

		for (var i = 0; i < A; i++) {
			for (var j = 0; j < A; j++) {
				if (j <= i) {
					ans[i][j] = A - j;
				} else {
					ans[i][j] = A - i;
				}
			}
		}

		for (var k = 0; k < A; k++) {
			for (var l = size - 1; l >= A; l--) {
				ans[k][l] = ans[k][size - 1 - l];
			}
		}

		for (var x = size - 1; x >= A; x--) {
			for (var y = 0; y < size; y++) {
				ans[x][y] = ans[size - 1 - x][y];
			}
		}

		return ans;
	}
};
