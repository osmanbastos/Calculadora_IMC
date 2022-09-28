
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