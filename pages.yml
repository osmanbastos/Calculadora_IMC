<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculo IMC</title>
    <style>
      header {
        font: 10pt normal Arial;
      }
      body {
        font: 18pt normal Arial;
        text-align: center;
        color: azure;
        background: rgb(20, 19, 19);
      }
      div#res {
        font: Arial 20pt normal;
        margin: 10px;
      }
      h1::before {
        transform: scaleX(0);
        transform-origin: bottom right;
      }
      h1:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;            
      }
      h1::before {
        content: " ";
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        inset: 0 0 0 0;
        background: #FF0043;
        z-index: -1;
        transition: transform .3s ease;
      }
      h1 {            
        position: relative;
        font-size: 4rem;
        color: #ffffff;
      }
      html {
        block-size: 99%;
        inline-size: 99%;
      }
      body {
        border-style: double;
        border-radius: 100px;
        border-color: #FF0043;
        background-color: #000000;
        min-block-size: 100%;
        min-inline-size: 50%;
        margin: 30;
        box-sizing: border-box;
        display: center;
        place-content: center;
        font-family: system-ui, sans-serif;
      }
</syle>
</head>

<header>
    Created by Osman
</header>

<body>
    <h1>Calculadora de Índice de Massa Corporal</h1>

    <p id = "pes"> Peso: 

    <input type="number" name="peso" id="peso" placeholder="Insira o peso" >
    </p>

    <p id = "alt"> Altura:

    <input type="number" name="altura" id="altura" placeholder="Insira a altura">

    <button onclick="calcular()" class="bubbly-button">Calcular</button>
    </p>
    
    <p id = "resul"> Resultado: </p>
    <div id="res"></div>

    <script>
    
        function calcular(){
            var peso = document.getElementById('peso')
            var altura = document.querySelector('input#altura')
            var res = document.querySelector('div#res')
            var peso1 = Number(peso.value)
            var altura1 = Number(altura.value)
            var imc = Number.parseInt(peso1/(altura1*altura1))

            if (imc < 25){
                res.innerHTML = `O seu IMC é igual <b>${imc}</b>, você está no seu peso normal`
            } else if (25 <= imc & imc <30){
                res.innerHTML = `O seu IMC é igual <b>${imc}</b>, você está com sobrepeso`
            } else if (imc >= 30 & imc < 40){
                res.innerHTML = `O seu IMC é igual <b>${imc}</b>, você está com obesidade`
            } else {
                res.innerHTML = `O seu IMC é igual <b>${imc}</b>, você está com obesidade grave!`
            }
        }
    </script>
    
</body>
</html>
