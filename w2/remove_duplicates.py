#!/usr/bin/env python3

def remove_duplicates(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    for (i, x) in enumerate(nums):
        for (j , y) in enumerate(nums):
            if i == j or (x or y) == None:
                continue
            if x == y:
                nums.remove(y)

        # if i == None:
        #     nums.remove(i)
        #     for i in nums:
    return len(nums)


test =[0,0,1,1,1,2,2,3,3,4] 
expected = [1, 2, 3, 4, 5, None, None]

k = remove_duplicates(test)
print("unique values", k)
print(test)




