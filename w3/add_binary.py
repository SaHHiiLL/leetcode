#!/usr/bin/env python3

def addBinary(a: str, b: str) -> str: 
    return str(bin(int(a, 2) + int(b, 2)))[2:]

print(addBinary("11", "10"))
