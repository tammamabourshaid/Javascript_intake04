function calculate(zahl1, oper, zahl2){
    if (oper === "+")	{return zahl1 + zahl2;}
    if (oper === "-")	{return zahl1 - zahl2;}
    if (oper === "*")	{return zahl1 * zahl2;}
    if (oper === "/")	{return zahl1 / zahl2;}
    else				{return "Das ist kein Operator mit dem ich arbeiten mag.";}
  }
  
  module.exports = {calculate};