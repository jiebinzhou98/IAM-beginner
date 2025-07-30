// 203  Remove Linked List Element 

class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

function removeElements(head, val){
    //TODO: write code here...
    let dummy = new ListNode(0);
    let temp = dummy;

    while(head != null){
        if(head.val != val){
            temp.next = head;
            temp = temp.next;
        }else{
            temp.next = head.next;
        }
        head = head.next;
    }
    temp.next = null;

    return dummy.next;
}

const node7 = new ListNode(6);
const node6 = new ListNode(5, node7);
const node5 = new ListNode(4, node6);
const node4 = new ListNode(3, node5);
const node3 = new ListNode(6, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2); 

const result = removeElements(node1, 6);

function printList(head){
    let current = head;
    const arr = [];
    while (current !== null){
        arr.push(current.val);
        current = current.next;
    }
    console.log(arr.join(" -> "));
}

printList(result);