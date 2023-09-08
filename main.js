function imc() {
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let status=""
    let resultado = peso / (altura * altura)

    
    if(resultado<=18.5){
        status = "Você está abaixo do peso"

        
    }else if(resultado<=25.9){
       
        status = "Você está com o peso normal"  
    }else if(resultado<=29.9){
        status = "Você está acima do peso"  
        
    }else{ 
        status = "Você está com obesidade"  
        
    }
    document.getElementById("result").innerHTML=' Olá,' + nome+"!" +'<br>'+'Seu IMC é de '+ resultado.toFixed(1) +'<br>' +status+"."
   
}

