import time

"""
# Example
def make_bold(fn):
    return lambda: "<b>" + fn() + "</b>"


def make_italic(fn):
    return lambda: "<i>" + fn() + "</i>"


@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()
print helloHTML  # '<b><i>hello world</i></b>'
"""


# Homework 09
def metaFunc(f):
    def meta(*args):
        temp = f(*args)
        # Changed to printing rather than returning because of recursive calls
        print ("Function: " + f.func_name +
               "\nArguments: " + str(*args) +
               "\nValue: " + str(temp))
        return temp
    return meta


def timeFunc(f):
    starting = time.time()

    def timer(*args):
        temp = f(*args)
        print "Time: " + str(time.time() - starting)
        return temp
    return timer


@timeFunc
@metaFunc
def fib(n):
    if n <= 2:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)
 
print fib(5)
