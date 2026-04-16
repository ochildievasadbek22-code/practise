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

