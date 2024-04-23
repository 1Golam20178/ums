document.getElementById('btn-submit').addEventListener('click', function(){
const idField=document.getElementById('user-id');
const id=idField.value;

const passwoedField=document.getElementById('user-password');
const password=passwoedField.value;

if(id=='2021200000098'&& password=='rabby')
{
    window.location.href='info.html';
}
else
{
    alert('ID or Password is wrong.Please Try again;')
}
})