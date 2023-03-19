#!/usr/bin/env python3

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val 
        self.next = next

    def print(self):
        e = self
        while True:
            print(e.val)
            e = e.next
            if e == None:
                break
            

class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        print(l1.print())
        print(l2.print())

s = Solution().mergeTwoLists(ListNode(1, ListNode(2, ListNode(3, None))), ListNode(4, ListNode(5, ListNode(5, None))))

