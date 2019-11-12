
function calcularResultado()
{
    
    var result= document.getElementById("result");
    var respuesta=0;

    var number= document.getElementById("second-number").value;

    var numberoConvertido= parseInt(number,10);

    respuesta= numberoConvertido + 695;
    
    result.innerHTML= respuesta;   
    
}
