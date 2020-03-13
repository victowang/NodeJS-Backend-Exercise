import requests
import random
import string

# Generates 1.1 Mo of data in a POST request
N =  100000
mydata = ''
for i in range(N):
  mydata = mydata + ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10)) + '\n'

print(mydata)
r = requests.post("http://localhost:3000", data=mydata)
print(r.status_code, r.reason)
