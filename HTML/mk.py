import os
print(os.getcwd())
for i in range(1,10):
    if i == 1:
        os.mkdir(f"0{i}-Elements-and-comments")
    elif i == 2:
        os.mkdir(f"0{i}-Heading-and-Attributes")
    elif i == 3:
        os.mkdir(f"0{i}-Link-Image-List")
    elif i == 4:
        os.mkdir(f"0{i}-Table-Div")
    elif i == 5:
        os.mkdir(f"0{i}-Audio-Video")
    elif i == 6:
        os.mkdir(f"0{i}-Form-Part-One")
    elif i == 7:
        os.mkdir(f"0{i}-Form-Part-two")
    elif i == 9:
        os.mkdir(f"0{i}-Form-Part-three")
    elif i == 10:
        os.mkdir(f"0{i}-iFrame-ARIA")