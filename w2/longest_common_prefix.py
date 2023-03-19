#!/usr/bin/env python3

def longestCommonPrefix2(strs):
    if len(strs) == 1:
        return strs[0]

    strings = []

    i = 0
    j = 1

    while j != len(strs):
        strings.append(find_substring1(strs[i], strs[j]))
        i = i + 1
        j = j + 1
    return longestCommonPrefix2(strings)

def find_substring1(a, b):
    # find the longest strings
    max_len = min(len(a), len(b))
    res = ""

    i = 0
    j = 0

    a = list(a)
    b = list(b)

    while j != max_len:
        if a[i] == b[j]:
            res = res + a[i]
        else:
            break
        i = i + 1
        j = j + 1

    return res

print(longestCommonPrefix2(["flower", "flow", "flight"]))
