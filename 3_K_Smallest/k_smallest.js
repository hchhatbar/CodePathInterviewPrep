module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    kthsmallest: function(A, B) {
        this.example = A;
        this.buildHeap(this.example);
        //console.log(this.example);
        for (var i = 0; i < B - 1; i++) {
            this.deleteMin();
        }
        //console.log("k smallest: ", this.example[0]);
        return this.example[0];
    },

    buildHeap: function(input) {
        arrayLength = input.length;
        for (var i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
            this.heapify(input, i);
        }
    },

    heapify: function(input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var minIndex = i;

        if (input[left] && input[left] < input[minIndex]) {
            minIndex = left;
        }

        if (input[right] && input[right] < input[minIndex]) {
            minIndex = right;
        }

        if (minIndex != i) {
            this.swap(input, i, minIndex);
            this.heapify(input, minIndex);
        }
    },

    swap: function(input, index_A, index_B) {
        var temp = input[index_A];

        input[index_A] = input[index_B];
        input[index_B] = temp;
    },

    deleteMin: function() {
        if (!this.example) {
            return;
        }
        var min = this.example.shift();
        if (this.example.length > 1) {
            this.buildHeap(this.example);
        }
        //console.log(min);
        return min;
    }
    //kthsmallest([],4);
};
