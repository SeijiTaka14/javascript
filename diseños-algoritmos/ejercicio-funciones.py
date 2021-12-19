compra = float(input('Cuál es el valor de su compra?'))
x = 0.9
y = 0.8
z = 0.7
v = 0.6

if compra < 100:
    totaldecompra = compra * x
    print(totaldecompra)
    
    if compra >= 100 and compra < 200:
        totaldecompra = compra * y
        print(totaldecompra)

        if compra >= 200 and  compra < 300:
            totaldecompra = compra * z
            print(totaldecompra)
else:
    totaldecompra = compra * v
    print(totaldecompra)