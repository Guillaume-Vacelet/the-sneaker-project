import random

def random_code(len):
  code = ""
  for i in range(0, len):
    code += str(random.randint(0,9))
  return code