
var numX= prompt("Введите x?");
numX= Number(numX);
Number.isNaN(numX)
if (Number.isNaN(numX)===true) alert("ошибочное значение)");
var numY= prompt("Введите y?");
numY= Number(numY);
Number.isNaN(numY)
if (Number.isNaN(numY)===true) alert("ошибочное значение)");
var opZ= prompt("для сложения введите- 1. для вычитания введите 2. для умножения введите 3. для деления введите 4");
var result;
Number.isNaN(result);
switch (opZ){
    case "1":
        result=numX+numY;
        break;
    case "2":
        result=numX-numY;
        break;
    case "3":
        result=numX*numY;
        break;
    case "4":
        result=numX/numY;
        break;
    default:
        alert("такой операции нет)");
        break;
}
if (Number.isNaN(result)===true) alert("проверте свои числа и попробуйте снова");
if (Number.isNaN(result)!==true) alert(result);



