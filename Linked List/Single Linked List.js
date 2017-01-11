/**
 * Created by kumars on 09/01/17.
 */

var Node = function(value, next) {
    this.data = value;
    this.next = next || null;
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


// push_front(value) - adds an item to the front of the list

SList.prototype.pushFront = function(key) {
    // to do : add code for empty list and when only one node is there .
    //create a new node
    var node = new Node(key);
    node.next = this.head; // new node, which is inserted from front references to the node which is at front now.
    this.head = node; // head poitns to new node
    this.size++;
};

// insert(index, value) - insert value at index, so current item at that index is pointed to by new item at index

SList.prototype.insert = function(index,value) {
  var count = 1,
      currNode = this.head;

    // index is 1 i.e first item.

    if (index === 1) {
        this.head = new Node(value, this.head);
        this.size++;
        return;
    }

      while (count != index -1) { // get the previous node before which u want to insert
        currNode = currNode.next;
        count++;
    }
    //  Now, we are at  the previous node before which we want to insert, index of this node is index -1 .

    currNode.next = new Node(value, currNode.next);
    this.size++;

};

// another way of implementing push_front(value) - adds an item to the front of the list

SList.prototype.pushFront1 = function(key) {
    // to do : add code for empty list and when only one node is there .
    /*****
     * The head now points to new node. The param (this.head) in the new Node, refers to the head which
     * was referincing to the intial first node.
     * @type {Node}
     */
    this.head = new Node(key, this.head);
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
    //  To do : include a case when the list is empty .
    var count = 0,
        currNode = this.head,
        size = this.size;

    while (count !== size) {
        console.log(currNode.data + '\n');
        currNode = currNode.next;
        count++;
    }
};

/**
 * Removes node at given index. We get the previous node before the node which is to be deleted,
 * and from that previous node, we changes the next to make a refernce to the deleted node next node.
 */

SList.prototype.removeNodeAtIndex = function(index) {
    var count = 1,
        currNode = this.head,
        head = this.head,
        size = this.size;

    if (index <= 0 || index > size) {
        console.log('Please check the value of index that you have entered');
    }

    if (index === 1 ) {  // first node to be removed
        this.head = head.next;
    }

    while (count !== index - 1) {
        currNode = currNode.next;
        count++;
    }
    // currNode, now refers to just the previous node prior to the node which is to be deleted.

    currNode.next = currNode.next.next;
    this.size--;
};

var sl = new SList();



