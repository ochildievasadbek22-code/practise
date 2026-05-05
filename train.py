
# I-TASK (Python)

# Savol: Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
# MASALAN: get_digits("m14i1t") return qiladi "141"
# Masalaning yechimi:

def get_digits(a):
    return ''.join(filter(str.isdigit, a))


result = get_digits("m14i1t")
print(result)
