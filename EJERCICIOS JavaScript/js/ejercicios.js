class Ejercicios1{
    venta(){
      //console.log("venta..")
      let costo = document.getElementById("costo").value
      costo = parseFloat(costo)
      let des = document.getElementById("descuento").value
      des = parseFloat(des)
      let resp = document.getElementById("resp")
      let iva = document.getElementById("iva").checked
      let valorIva = 0,sub=0,tot=0,valordes=0
      const iva12 = 0.12
      valordes = costo*(des/100)
      sub = costo-valordes
      if (iva==true){
        valorIva=sub*iva12
      }
      tot=sub+valorIva
      
      resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${tot.toString()}` 
      console.log(resp.textContent)
      console.log(costo,valordes,valorIva,sub,tot)
    }
    //segundo ejercicio//
    mayor(){
      let num1= document.getElementById('num1').value
      num1= parseFloat(num1)
      let num2= document.getElementById('num2').value
      num2= parseFloat(num2)  
      let resp= document.getElementById('resp')  
      console.log(num1)
      console.log(num2)
      if (num1 > num2){
        resp.textContent= `el numero ${num1.toString()} es mayor que el numero ${num2.toString()} `
        }else if (num2 > num1) {
          resp.textContent= `el numero ${num2.toString()} es mayor que el numero ${num1.toString()}`
        }else if (num1 === num2){
          resp.textContent= `los numero ingresados son iguales`
      }else{
        resp.textContent= `los valores ingresados no corresponde a un numero `
      }
    }
    //tercer ejercicio//
    dia_semana(){
      let dia= document.getElementById('dia').value
      dia = parseFloat(dia)
      let resp = document.getElementById('resp')
      switch (dia){
        case 1:
          resp.textContent=`el numero corresponde al dia LUNES`
          break
        case 2:
          resp.textContent=`el numero corresponde al dia MARTES`
          break
        case 3:
          resp.textContent=`el numero corresponde al dia MIERCOLES`
          break
        case 4:
          resp.textContent=`el numero corresponde al dia JUEVES`
          break
        case 5:
          resp.textContent=`el numero corresponde al dia VIERNES`
          break
        case 6:
          resp.textContent=`el numero corresponde al dia SABADO`
          break
        case 7:
          resp.textContent=`el numero corresponde al dia DOMINGO`
          break
      default:
        resp.textContent=`el valor no corresponde a ningun dia de la semana`
      }
    }
    //EJERCICIO 3//
    año_bisiesto(){
      let año= document.getElementById('año').value
      let resp = document.getElementById('resp')
      año = parseFloat(año)
      if(año === año){
        if (año % 4 == 0 && (año % 100 != 0)|| año % 400 ==0 ){
          resp.textContent=`el año es bisiesto`
        }else{
          resp.textContent=`el año no es bisiesto`
        }
      }else{
        resp.textContent=`valor incorrecto`
      }
    }
    //EJERCICIO 4//
    presentar_numeros(){
      let inicio = document.getElementById('inicio').value
      inicio= parseFloat(inicio)
      let fin = document.getElementById('fin').value
      fin = parseFloat(fin)
      let resp = document.getElementById('resp')
      if (inicio <= fin){
        resp.textContent=`los valores son:\n`;
        while(inicio<= fin){
          resp.textContent+=`${inicio.toString()}\n`;
          inicio++
        }
      }else if(inicio >= fin ){
        resp.textContent=`los valores son:\n`;
        while(inicio >= fin){
          resp.textContent+=`${inicio.toString()}\n`;
          inicio--
        }
      }else{
          resp.textContent=`valor incorrecto` 
      }
    }
    //ejercicios 6//
    sumar_pares(){
      let num = document.getElementById('num').value
      num = parseFloat(num)
      let resp = document.getElementById('resp')
      let acum = 0 
      resp.textContent=`los numeros pares del 1 al ${num.toString()} son:\n`
      if(num === num ){
        for(let i = 1; i <= num; i++){
          if (i % 2 == 0 ){
            resp.textContent+=`${i.toString()} - `            
            acum = acum + i 
          }
        }
        resp.textContent+=`\n`
        resp.textContent+=`la suma de los pares es: ${acum.toString()}`
      }else{
        resp.textContent=`valor incorrecto`

      }
    }
    //ejercicio 7 //
    sumar_y_contar(){
      let inicio = document.getElementById('inicio').value
      inicio= parseFloat(inicio)
      let final = document.getElementById('final').value
      final = parseFloat(final)
      let resp = document.getElementById('resp')
      let acum = 0
      if(inicio <= final){
        resp.textContent=`los valores son:\n`
          while (inicio <= final){
            resp.textContent+=`${inicio.toString()}\n`
            acum = acum + inicio
            inicio++
          }
          resp.textContent+=`la suma de todos los numeros es:${acum.toString()}`
     }else if (inicio >= final){
          resp.textContent=`los valores son:\n`
          while (inicio >= final){
            resp.textContent+=`${inicio.toString()}\n`
            acum = acum + inicio
            inicio--
          }
          resp.textContent+=`la suma de todos los numeros es:${acum.toString()}`
      }else{
          resp.textContent=`error valor no aceptado`
      }
  }
  //ejercicio 8//
    divisores(){
      let nume = document.getElementById('num').value
      nume= parseFloat(nume)
      let resp = document.getElementById('resp')
      let i = 1 
      resp.textContent=`los divisores del numero ${nume.toString()} son:\n`
      if(nume === nume){
      while (i <  nume){
        if(nume % i == 0 ){
          resp.textContent+=`${i.toString()}\n`
        }
        i++
      }
      }else{
        resp.textContent=`el valor ingresado no es valido`
      }
    }

    //ejercicio 9//
    perfecto(){
      let n = document.getElementById('num').value
      n = parseFloat(n)
      let resp = document.getElementById('resp')
      let i = 1, acum= 0
      if(n === n){
        while (i < n){
          if (n % i == 0 ){
            acum = acum + i 
          }
          i++
        }
        if (acum == n){
          resp.textContent=`el numero ${n.toString()} es PERFECTO`
        }else{
          resp.textContent=`el numero ${n.toString()} no es perfecto`
        }
      }else{
        resp.textContent=`valor incorrecto`

      }
      }
    
}

let ejer = new Ejercicios1()
//ejer.venta()
