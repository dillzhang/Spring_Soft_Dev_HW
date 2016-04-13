from functools import wraps
import time


def metaFunc(f):
    @wraps(f)
    def meta(*args):
        starting = time.time()
        temp = f(*args)
        runtime = time.time() - starting
        print ("\nFunction: " + f.func_name +
               "\nArguments: " + str([arg for arg in args]) +
               "\nRuntime: " + str(runtime) +
               "\nValue: " + str(temp))
        return temp
    return meta

