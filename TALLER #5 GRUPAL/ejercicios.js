class Calculadora {
    //invertir numero
    invertirNumero(){
        let result = document.getElementById("result")
        let digito=0,invertido=""
        let num = parseInt(result.value)
        while (num > 0){
            digito = num % 10
            num = Math.floor(num / 10)
            invertido = invertido + digito.toString();
         }
        result.value=invertido
     }
    //numero primo 
    primo(){
       let result = document.getElementById("result")
       let i =1,conta=0
       let num = parseInt(result.value)
       console.log(isNaN(num))
       console.log(num,result)
       //validaciones 
       if (isNaN(num) == false){
           if (num >= 0 ){
               while(i <= num && conta <= 2 ){
                if (num % i == 0 ){
                   conta = conta + 1  
                }
                i++
               }
               if (conta == 2 ){
                result.value=`El numero ${num.toString()} es primo`;
                 //console.log("el numero es primo")
               }else{
                result.value=`El numero ${num.toString()} no es considerado primo`;
               }
           }else{
            result.value=`Los números negativos no son considerados primos `;
        }
        }else{
            result.value=`Los datos ingresados son icorrectos`
        }

    }
    
    //base 10 a 16 
    base10a16(){
        let result= document.getElementById("result")
        let numeros=[],pos=0,base16="",aux=0
        let num = parseInt(result.value)
        console.log(num)
        result.value=  `El número ${num.toString()}`
        if (isNaN(num) == false){
            if (num >= 0){
                while (num >= 16){
                    numeros[pos] = num % 16
                    num = Math.floor(num / 16)
                    pos= pos + 1 
                }
                numeros[pos]=num
                for (aux= numeros.length - 1; aux >= 0; aux-- ){
                    switch(numeros[aux]){
                        case 10:
                            base16 = base16 + "A"
                            break
                        case 11:
                            base16 = base16 + "B"
                            break
                        case 12:
                            base16 = base16 + "C"
                            break
                        case 13:
                            base16 = base16 + "D"
                            break
                        case 14:
                            base16 = base16 + "E"
                            break
                        case 15:
                            base16 = base16 + "F"
                            break
                    default:
                        base16 = base16 + numeros[aux]
                    }
                }
                console.log(base16)
                result.value+=` convertido a base 16 es :${base16.toString()}`
            }else{
                result.value=`error al convertir los numeros`
            }
            
        }else{
            result.value=`los datos ingresados son incorrectos`
        }
    }
    
    //ejercicio palabra palindorma//
    palindroma(){
        let result= document.getElementById("result")
        let log=0,inicial=0,bandera=true
        let cadena =result.value
        //console.log(cadena)
        log= cadena.length -1 
        console.log(cadena[inicial])
        console.log(cadena[log])
        //validaciones//
        console.log(isNaN(cadena))
        if(isNaN(cadena) == true ){
            while(inicial < log ){
                if (cadena[inicial] != cadena[log]){
                    bandera=false
                }
                log--
                inicial++
            }
            if (bandera == true){
                result.value= `La palabra ${cadena.toString()} es Palindroma`
            }else{
                result.value=`La palabra ${cadena.toString()} no es Palindroma`
            }
        }else{
            result.value=`Error: ingreso un numero`
        }
    }
    //mayor de un arreglo//
    mayor_arreglo(){
        let result= document.getElementById("result")
        let numeros = result.value
        let arreglo = numeros.split(";")
        let mayor = 0,pos=0 
        console.log(arreglo)
        console.log(isNaN(parseInt(arreglo)))
        if ((isNaN(parseInt(arreglo)) == false)){
                for (let i=0; i < arreglo.length;i++){
                    if (parseInt(arreglo[i]) > mayor){
                        mayor = parseInt(arreglo[i])
                        pos = i
                    }
                }
                //console.log(mayor)
                result.value=`El mayor del arreglo es ${mayor.toString()} y esta en la posicion [${pos.toString()}]`
        }else{
            result.value=`ERROR: se ha ingresado una letra`
        }
    }
} 
let cal = new Calculadora()
cal.invertirNumero()