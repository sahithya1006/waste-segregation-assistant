import requests

url = "http://127.0.0.1:5000/predict"

file = open("test.jpg", "rb")

response = requests.post(url, files={"file": file})

print(response.json())