def get_digits(a):
    return ''.join(filter(str.isdigit, a))


result = get_digits("m14i1t")
print(result)
