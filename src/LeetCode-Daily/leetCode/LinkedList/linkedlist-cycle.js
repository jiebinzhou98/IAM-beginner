//141  Linked List Cycle

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head){
    //Todo: write you code here
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;
}

const node3 = new ListNode(3);
const node2 = new ListNode(2);
const node1 = new ListNode(1);
node1.next = node2;
node2.next = node3;

console.log("should be false: ",hasCycle(node1));

const nodeC3 = new ListNode(3);
const nodeC2 = new ListNode(2);
const nodeC1 = new ListNode(1);
nodeC1.next = nodeC2;
nodeC2.next = nodeC3;
nodeC3.next = nodeC2; 


console.log("Should be true: ",hasCycle(nodeC1));