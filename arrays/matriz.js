matriz = []
for (let i = 0; i < 3; i++){
    x = Math.floor(Math.random()*10)
    y = Math.floor(Math.random()*10)
    z = Math.floor(Math.random()*10)
    // console.log("Pontos: ", x, y, z);
    matriz.push([x,y,z])
}

// console.log(matriz);

for (let i = 0; i < 3; i++){
    console.log("|",matriz[i][0],matriz[i][1],matriz[i][2],"|");
}
