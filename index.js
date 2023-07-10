let multiArray = [[], [], [], [], []];
let numeroUsuario = prompt("Ingrese el numero de columnas")
    for (let i = 0; i < multiArray.length; i++) {
      for (let j = 0; j < numeroUsuario; j++) {
        let numeroAleatorio = Math.round(Math.random() * 10)
        multiArray[i].push(numeroAleatorio);
      }
      
    }
console.log(multiArray);      
  
  
