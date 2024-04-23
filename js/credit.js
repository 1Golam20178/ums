document.getElementById('btn-credit').addEventListener('click', function(){
   
    const creditField=document.getElementById('credit');
    const creditString=creditField.value;
     const credit=parseFloat(creditString);
    
  const credit1=document.getElementById('your-credit');
  const credit2String=credit1.innerText;
  const credit2=parseFloat(credit2String);
const currentCredit=credit2+credit;
if(currentCredit>14)
{
    alert('Limit Exit');
}
else
{
    credit1.innerText=currentCredit;

    creditField.value =''; 
}
    

    })