#!/usr/bin/env python3

def getRow(rowIndex: int) -> list[int]:
    res = [1, 1]
    if rowIndex == 0:
        return [1] 
    if rowIndex == 1:
        return res
    
    # rowIndex = rowIndex - 1
    #else
    for i in range(2, rowIndex+1):
        res = nextRow(res)
    return res

def getSeq(rowIndex: int) -> list[list[int]]:
    res = [[1], [1, 1]]

    if rowIndex == 1:
        return [[1]]
    if rowIndex == 2:
        return res

    for i in range(2, rowIndex):
        res.append(nextRow(res[i-1]))

    return res

def nextRow(current: list[int]) -> list[int]:

    next = [1] * (len(current) + 1)
    i = 0
    j = 1
    k = 1

    while j != len(current):
        
        next[k] = current[i] + current[j]

        k = k + 1
        i = i + 1
        j = j + 1

    return next

# nextRow([1])
print(f"{getSeq(3)=}")
