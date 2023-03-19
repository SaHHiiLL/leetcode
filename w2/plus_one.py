#!/usr/bin/env python3

def plus_one(digits: list[int]) -> list[int]:
    current = len(digits) - 1
        
    rev_digits = digits.reverse()

    while (True):
        if (current == -1):
            break
        
        nth = digits[current]

        if nth == 9:
            nth = 0
        else:
            nth = nth + 1

        print(nth)
        
        current = current - 1
    return digits
    

print(plus_one([1, 2, 3]))
