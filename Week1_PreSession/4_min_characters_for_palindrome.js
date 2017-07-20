module.exports = {
    //param A : string
    //return an integer
    solve: function(A) {
        var pat = A + "$" + A.split("").reverse().join("");
        var lps = this.computeLPS(pat);
        return A.length - lps[lps.length - 1];
    },

    computeLPS: function(pat) {
        var lps = [];
        lps[0] = 0;
        var index = 0;

        for (var i = 1; i < pat.length; ) {
            if (pat[i] === pat[index]) {
                lps[i] = index + 1;
                i++;
                index++;
            } else {
                if (index !== 0) {
                    index = lps[index - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }
};

/*
You are given a string. The only operation allowed is to insert characters in the beginning of the string. How many minimum characters are needed to be inserted to make the string a palindrome string

Example:
Input: ABC
Output: 2
Input: AACECAAAA
Output: 2
*/
