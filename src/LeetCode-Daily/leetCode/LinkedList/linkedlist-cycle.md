#141 LinkedList cycle
让两个pointer去合体；

#思路:
创建两个，一个快，一个慢。都是指向的head  ListNode fast = head;  ListNode slow = head;
慢的pointer每次只走一步 ->  slow = slow.next;  这里一定是要使用slow.next的， 因为slow是在前面define出来的新的node
快的pointer每次走两步 -> fast = fast.next.next  跟slow pointer一个道理。不过就是要多走一步

把这两个pointer都放进循环里， 如果fast不是空值，就一直循环
设一个if statement， 如果slow == fast， 就是当slow pointer 跟fast pointer 指向同一个元素，返回true；

##这里去做这个循环的时候，condition 一定是要设置fast， 如果fast == null 那就直接跳出循环；
如果fast.next 等于null的话 也直接跳出循环，   这里是因为本身fast pointer 得设定就是fast 走两步， 如果只走了一步就是null， 那就直接跳出循环返还false；

##总结
设置两pointer， 一快一慢， 当两个pointer 相交就返回true；
如果快point得下一个 -> fast.next是等于空值 那就直接返回false；