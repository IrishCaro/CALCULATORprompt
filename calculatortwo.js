function addi(add1,add2)
{
    if (add1==false)
        {
            alert("Num1 cannot be empty");
        }
    else if (add2==false)
        {
            alert("Num2 cannot be empty");
        }
    else
        {
            return Number(add1)+Number(add2);
        }
}

function subb(sub1,sub2)
{
    if (sub1==false)
        {
            alert("Num1 cannot be empty");
        }
    else if (sub2==false)
        {
            alert("Num2 cannot be empty");
        }
    else
        {
            return Number(sub1)-Number(sub2);
        }  
}
function sub()
{
    let number1=document.getElementById('sub1').value;
    let number2=document.getElementById('sub2').value;
    let result=subb(number1,number2);
    document.getElementById('sum1').value=result;
}
function mul(p1,p2)
{
    return Number(p1)* Number(p2)
}
function multi()
{
    let number1=document.getElementById('multi1').value;
    let number2=document.getElementById('multi2').value;
    let result=mul(number1,number2);
    document.getElementById('sum2').value=result;
}
function divi(p1,p2)
{
    return Number(p1)/ Number(p2)
}
function div()
{
    let number1=document.getElementById('div1').value;
    let number2=document.getElementById('div2').value;
    let result=divi(number1,number2);
    document.getElementById('sum3').value=result;
}
