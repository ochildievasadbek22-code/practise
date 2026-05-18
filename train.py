







# M-TASK (PYTHON)

# Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
# MASALAN: palindrom_check("dad") return True;  palindrom_check("son") return False;


# Masalaning yechimi:





















# ======================================================================================================================


# M-TASK (PYTHON)

# Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
# MASALAN: palindrom_check("dad") return True;  palindrom_check("son") return False;


# Masalaning yechimi:

def palindrom_check(a):
    return a == a[::-1]


print(palindrom_check("dad"))
print(palindrom_check("son"))


# ======================================================================================================================


# I-TASK (Python)

# Savol: Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
# MASALAN: get_digits("m14i1t") return qiladi "141"
# Masalaning yechimi:

# def get_digits(a):
#     return ''.join(filter(str.isdigit, a))


# result = get_digits("m14i1t")
# print(result)


# ======================================================================================================================


# G-TASK (Python)

# Savol: Shunday function tuzingki unga integerlardan iborat array pass bolsin
# va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
# MASALAN: get_highest_index([5, 21, 12, 21, 8]) return qiladi 1 sonini.

# Masalaning yechimi:

# def get_highest_index(array):
#     return array.index(max(array))

# result = get_highest_index([5, 21, 12, 21, 8])
# print(result)
