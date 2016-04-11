# def inc(x):
#     return x + 1

# f = inc
# print f(10)


# def h(x):
#    return lambda y: x + y
# print h(1)
# print h(2)
# print h(1)(3)
# print h(2)(5)

# b = h(1)  # Funtion within a function that is predefined
# print b
# print b(2)


# def f(x):
#     def g(y):
#         return x + y
#     return g

# a = f(1)  # Means a(y) = f(1)(y) = g(1)(y) = 1 + y
# b = h(1)  # Means b(y) = h(1)(y) = 1 + y

# print a
# print a(2)
# print b
# print b(2)


def repeat(stringer):
    return lambda count: stringer * count

r1 = repeat('hello')
r2 = repeat('goodbye')

print "Repeat Testing"
print "r1(2) should be 'hellohello' ->", r1(2)
print "r2(2) should be 'goodyegoodbye' ->", r2(2)
print "repeat('cool')(3) should be 'coolcoolcool' ->", repeat('cool')(3)


# But what is the difference to what is below?
# Aren't closures just wrapped functions for functions with more than one parameter
# def repeater(x, string):
#     return string * x


# def rer1(x):
#     return repeater(x, 'hello')
# print rer1(2)
