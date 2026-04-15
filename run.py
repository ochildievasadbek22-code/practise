#Dunder __builtins__, __init__
message = "Python: Everything is object!"
print(message)

result = type(message)
print("result:", result)

'''
In Pyhthon there are builtin tools:
(1) TYPES > init, float, str, list, dict
(2) FUNCTION > print(), len(), input(), type()
(3) CONSTANTS > True False None
'''
print(dir(__builtins__))

count = 4002
count_type = type(count)
print(f"the count: {count} and type: {type}")

result1 = count.bit_count()
result2 = count.numerator
print (result1, result2)
