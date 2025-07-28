//206 reverse linked list

class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

function reverseList(head){
    //TODO: write code here...
    let current = head;
    let temp = null;

    while(head != null){
        current = head.next; // Store the next node
        head.next = temp; //store the next node in temp list
        temp = head; //set temp to the current head
        head = current;  //set the head to current node to continue the loop
    }
    return temp;
}

const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);


const reversed = reverseList(node1);

function printList(head){
    let current = head;
    const result = [];
    while (current!=null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

printList(reversed);