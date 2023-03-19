#!/usr/bin/env python 

def isValid(s):
    """
    :type s: str
    :rtype: bool
    """

    i = 0
    j = 1 
    s = [*s]


    while j != len(s):
        print(s[i], s[j])

        match s[i]:
            case "{":
                   if s[j] != "}":
                        return False
            case "[":
                   if s[j] != "]":
                        return False
            case "(":
                   if s[j] != ")":
                        return False
        i = i + 1
        j = j + 1
    return True


def isValidTry2(s):
    """
    :type s: str
    :rtype: bool
    """

    leading = []
    s = [*s]
    for c in s:
            


print(isValid("(])"))
