// 21.  Merge Two Sorted Lists

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2){
    //TODO: write your code here
    let dummy = new ListNode(-1);
    let temp = dummy;

    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            temp.next = list1;
            list1 = list1.next;
        }else{
            temp.next - list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    if(list1 == null){
        temp.next = list2;
    }
    if(list2 == null){
        temp.next = list1;
    }
    return dummy.next;
}

const a3 = new ListNode(4);
const a2 = new ListNode(2, a3);
const a1 = new ListNode(1, a2);


const b3 = new ListNode(4);
const b2 = new ListNode(3, b3);
const b1 = new ListNode(1, b2);

const merged = mergeTwoLists(a1, b1);

function printList(head){
    const result = [];
    while(head){
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

printList(merged);