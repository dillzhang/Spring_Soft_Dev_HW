import time


def metaFunc(f):
    def meta(*args):
        starting = time.time()
        temp = f(*args)
        runtime = time.time() - starting()
        print ("Function: " + f.func_name +
               "\nArguments: " + str([arg for arg in args]) +
               "\nRuntime: " + str(runtime) +
               "\nValue: " + str(temp))
        return temp
    return meta
