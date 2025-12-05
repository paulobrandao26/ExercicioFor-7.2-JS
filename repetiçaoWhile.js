const leia = require("readline-sync")

idade = 1
cont1 = 0
cont2 = 0

while (idade){
    let idade = leia.questionInt("Digite uma idade:")
    if (idade > 0 && idade < 21){
        cont1 ++
     }
    
    else if ( idade > 50){
        cont2 ++
    }
    
    else if (idade < 0){
        break
    }
   
    
     
}
console.log(`Total de pessoas menores de 21 anos: ${cont1}`)
console.log(`Total de pessoas maiores de 50 anos: ${cont2}`)
  
  



