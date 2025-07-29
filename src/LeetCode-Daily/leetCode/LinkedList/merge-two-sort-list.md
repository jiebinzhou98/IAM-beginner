## 21 merge-two-sorted-list 

## 思路
先创建一个新的dummy ListNode[-1]。 这里可以是0也可以是-1， 因为这里的dummy是当作开头的，就是head; ListNode dummy = new ListNode[0];
然后在创建一个tail 或者current 去指向这个dummy;  ListNode tail = dummy;

然后用一个while loop去查看这两个list的是否是空值， 如果不是空值， 就执行后面的if else;
while(list1 != null && list2 != null)

如果不是空值，就去比较两个list里的数值，哪个比较小， 如果是list1的就让tail的下一位pointer 等于list1， 然后list1的pointer往后移动一位;
不然就指向list2的。
if(list1.val < list2.val) { tail.next = list1;  list1 = list1.next }   //   { tail.next = list2;  list2 = list2.next }
排序完一个数之后就让tail指向下一位，这样才能衔接每一个数;

如果在最初的while loop里就已经判定出了null, 这里就会break,然后直接执行后面的if statement

if(list1 == null) { tail.next = list2}  这里就是直接让tail的下一位衔接上不为空的数组

最终在去返回dummy.next， 因为dummy的设定是null, 然后只是用tail去衔接list1 跟list2；