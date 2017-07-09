// Definition for singly-linked list.
//          function Node(data){
//              this.data = data
//              this.next = null
//          }

module.exports = {
    //param A : head node of linked list
    //return the head node in the linked list

    subtract: function(A) {
        //console.log(A.data);
        this.head = A;
        this.front = null;
        this.back = null;
        this.reversed = null;

        this.splitLinkedList(this.head);
        this.reverseList(this.back);
        this.update1stHalf(this.reversed);
        this.reverseList(this.reversed);
        this.concatFrontAndBack(this.reversed);
        return this.head;
    },

    splitLinkedList: function(node) {
        var slowPtr = node;
        var fastPtr = node.next;

        while (fastPtr) {
            fastPtr = fastPtr.next;
            if (fastPtr) {
                slowPtr = slowPtr.next;
                fastPtr = fastPtr.next;
            }
        }
        this.back = slowPtr.next;
        slowPtr.next = null;
    },

    reverseList: function(node) {
        var current = null;
        var prev = null;
        var next = null;
        var current = node;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.reversed = prev;
    },

    update1stHalf: function(back) {
        var front = this.head;
        while (back) {
            front.data = back.data - front.data;
            front = front.next;
            back = back.next;
        }
    },

    concatFrontAndBack: function(back) {
        var front = this.head;

        while (front.next) {
            front = front.next;
        }

        front.next = back;
    }
};
