#!/usr/bin/env python3

def strStr(haystack: str, needle: str) -> int:
    try:
        a=haystack.index(needle)
        print(a)
        return a
    except (Exception):
        return -1

print(strStr("leetcode", "lma"))
