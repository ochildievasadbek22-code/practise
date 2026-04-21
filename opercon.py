'''
(1) OPERATORS
(2) CONDITION
(3) LOGICAL OPERATORS
'''

print("============= OPERATORS =================")
# + - > >= < <= == * /   // % += **
# print("a > b", a > b)
# print("a * b", a * b)
# print("a / b", a / b)

a = 19
b = 5

print(a / b)
result = a // b
left = a % b
print(f"the result {result} and left {left}")

a += 100
print("a", a)

print('b ** 2', b ** 2)
print('b ** 3', b ** 3)

print("="*20)

c = dict(name="Martin", age=35)
d = dict(name="Martin", age=35)
e = c
print(" c == d", c == d)  # only value
print(id(c), id(d), id(e))


print("c is d:", c is d)
print("c is e:", c is e)
