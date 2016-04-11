def qsort(l):
    if (len(l) <= 1):
        return l
    pivot = l[-1]
    lower = qsort([x for x in l[:-1] if x < pivot])
    upper = qsort([x for x in l[:-1] if x >= pivot])
    return lower + [pivot] + upper
print "qsort([1, 5, 2, 4, 3]):", qsort([1, 5, 2, 4, 3])


def union(a, b):
    return qsort(a + [x for x in b if x not in a])
print "union([1, 2, 3], [2, 3, 4]):", union([1, 2, 3], [2, 3, 4])


def intersection(a, b):
    return qsort([x for x in a if x in b])
print "intersection([1, 2, 3], [2, 3, 4]):", intersection([1, 2, 3], [2, 3, 4])


def set_diff(a, b):
    return qsort([x for x in a if x not in b])
print "set_diff([1, 2, 3], [2, 3, 4]):", set_diff([1, 2, 3], [2, 3, 4])
print "set_diff([2, 3, 4], [1, 2, 3]):", set_diff([2, 3, 4], [1, 2, 3])


def symm_diff(a, b):
    return set_diff(a, b) + set_diff(b, a)
print "symm_diff([1, 2, 3], [2, 3, 4]):", symm_diff([1, 2, 3], [2, 3, 4])


def cart_prod(a, b):
    return [(x, y) for x in a for y in b]
print "cart_prod([1, 2], ['red', 'white']):", cart_prod([1, 2], ['red', 'white'])
