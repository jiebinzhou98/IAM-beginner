#206 reverse Linklist

##思路：
先创建一个而外的pointer去指向head， 就是一个当前的pointer，   ListNode current = head;
然后在去创建一个新的且是空的pointer去储存新的list.   ListNode temp = null;   

下一步就是做一个循环去检查这个list的全部元素

只要不空的就让head -> current = head.next，   这一步就是让开始的头变成下个元素， 使用current是因为，在最初的时候已经define了current = head；
然后把这个head.next 储存进temp里。  head.next = temp；   
temp = head；   这里就是把temp得元素当作一个新的head去继续这个循环；
head = current；  然后把head指向current去回到初始的第一步循环;


##总结
设置两个pointer， 一个空 一个只想头， 去check全部list的元素。
如果是空的，那就直接返回空值， 不然就指向下一位，然后把下一位的数赋予给temp， 在去把temp赋予给头
然后头又回归成current， 这样去做一个循环，直至数为null；