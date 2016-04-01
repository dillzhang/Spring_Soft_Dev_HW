# print [x for x in range(8)]  # List from 0 to 7
# print [x*x for x in range(8)] # List of squares of 0 to 7
# print [(x, x*x, x*x*x) for x in range(8)]  # List of tuples

p = "myNoobPass1234"
# print [x for x in p]  # Chars in a string
# print [x for x in "1234"]

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
# print [x for x in p if x in UC_LETTERS]
# print [1 for x in p if x in UC_LETTERS]
# print [1 if x in UC_LETTERS else 0 for x in p]


upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lower = 'abcdefghijklmnopqrstuvwxyz'
nums = '0123456789'
syms = '.?!&#,;:-_*'


def threshold(pword):
    test = ['a' if char in lower else
            'A' if char in upper else
            '0' if char in nums else
            '.' for char in pword]
    return 'a' in test and 'A' in test and '0' in test

print "threshold('abc') should be False:", threshold('abc')
print "threshold('Abc') should be False:", threshold('Abc')
print "threshold('0BC') should be False:", threshold('abc')
print "threshold('Ab0') should be True:", threshold('Ab0')


def passwordCheck(pword):
    test = ['a' if char in lower else
            'A' if char in upper else
            '0' if char in nums else
            '.' if char in syms else
            '?' for char in pword]
    lowers = test.count('a')
    uppers = test.count('b')
    numbers = test.count('0')
    symbols = test.count('.')
    length = len(test)
    return (length * 4 +
            (length - lowers) * 2 +
            (length - uppers) * 2 +
            numbers * 4 +
            symbols * 6)

print "0 - 50: weak, 50 - 100: decent, 100+: strong"
print "passwordCheck('myNoobPass1234') should be strong:", passwordCheck(p)
print "passwordCheck('weak') should be weak:", passwordCheck('weak')
print "passwordCheck('Battle16') should be decent:", passwordCheck('Battle16')
