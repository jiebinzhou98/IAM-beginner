#203 Remove Linked List Element 

#思路
定义一个新的dummy ListNode 当作head; 定义一个temp 或者tail去当一个指针;  tail是指向的dummy, 就是指向head;  然后最后返回dummy.next, 因为初始dummy是setup的null

然后用while loop去判定要测试的ListNode是否为空值, 如果是那就直接break出循环到下一步。
如果不是, 就要用if statement 去判定,ListNode的head(elment) 是不是需要移除的, 如果不是, 那就tail / temp的下一位数就等于head的下一位数,  temp.next = head;  这一步就是让temp的下一位数去接上要测试的list的 head;

然后temp = temp.next,  这一步是为了让temp当前的指针移动到下一位;

然后出了这个if循环之后, head = head.next, 这一步是为了让原本要测试的List的指针移动要下一位。

如果head 判定是等于需要移除的element, 那就让temp的下一位等于 head的下一位,直接跳过当前。 temp.next = head.next
然后出else 循环, head = head.next;

if else里, else也可以是空的或者不要, 就只需要判定需要被移除的元素是不是等于当前的, 是就直接skip, 不是就进行这个if的循环

最后在去返回dummy.next;  这里是因为最开始的设定dummy是null(head),  然后temp是作为一个判定的指针去把不需要移除的放置到dummy里;

#总结
使用建议的方案, 设置一个空值的List, 然后在设置一个尾针去跟着移动和判定,然后储存不需要移除的元素进空值的List;
先用while循环去判定全部List的数, 然后用if去判定当前的数是不是需要移除的。  最后在返回原本的空值List的下一位;