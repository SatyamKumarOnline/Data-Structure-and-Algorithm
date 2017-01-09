/**
 * Created by kumars on 09/01/17.
 */

/**
 * Created by kumars on 09/01/17.
 */


var Node = function(value) {
    this.data = value;
    this.next = null;
};

var SList = function() {
    this.head = null;
    this.size = 0;
};


// insert an node from back to the LL
SList.prototype.insertAfter = function(value) {
    // create a new node
    var node = new Node(value);
    var head = this.head;
    if( head === null) { // list is empty
        this.head = node;
    } else {
        var currNode = head;
        while(currNode.next !== null) {
            currNode = currNode.next;
        }
        // You have reached the last  node of the list, which is referred by currNode.
        currNode.next = node;
    }
    this.size++;
};


// Traversing a LL and print the corresponding values


SList.prototype.traverse = function(){
    var head = this.head;
    if (head == null) {
        console.log('the list is empty');
    } else {
        var currNode = head;
        while (currNode.next != null) { // Traverse the list till you reach the end of the list.
            console.log(currNode.data + '/n');
            currNode = currNode.next;
        }
        console.log(currNode.data); // last node
    }
};


// Traversing a LL, when the number of total nodes in LL is known
SList.prototype.traverseUsingSizeCounter = function(){
    var count = 0,
        currNode = this.head,
        size = this.size;

    while (count !== size) {
        console.log(currNode.data + '\n');
        currNode = currNode.next;
        count++;
    }
};

var sl = new SList();
sl.insertAfter(3);
sl.insertAfter(5);
sl.insertAfter(8);
sl.insertAfter(10);

//sl.traverse();
sl.traverseUsingSizeCounter();


