#!/usr/bin/env python3

def sunOfNumberAndReverse(num):
    """
    :type num: int
    :rtype: bool
    """

    for i in range(0, num):
        reverse = int(str(i)[::-1])
        if reverse + i == num:
            return True
    return False

print(sunOfNumberAndReverse(443))

print(sunOfNumberAndReverse(63))

print(sunOfNumberAndReverse(181))

