function add()
{

  var x=document.getElementById("productname").value;
  var y=document.getElementById("description").value;
  var z=document.getElementById("model").value;
  var s=document.getElementById("year").value;
   
  localStorage.setItem("productname",x);
  localStorage.setItem("description",y);
  localStorage.setItem("model",z);
  localStorage.setItem("year",s);
 
 /*document.getElementById("productname").innerHTML=x;
 document.getElementById("description").innerHTML=y;
 document.getElementById("model").innerHTML=z;
 document.getElementById("year").innerHTML=s; */
console.log("first"+ x,y,z,s);


 window.document.location.href='./assignmentdetails.html';
//  get();
 
}
function get() {
  var res = (localStorage.getItem("productname"));
  var res_1 = (localStorage.getItem("description"));
  var res_2 = (localStorage.getItem("model"));
  var res_3 = (localStorage.getItem("year"));
  console.log("second"+ res,res_1,res_2,res_3);
 
  document.getElementById("productname_21").innerHTML=res;
  document.getElementById("description_21").innerHTML=res_1;
  document.getElementById("model_21").innerHTML=res_2;
  document.getElementById("year_21").innerHTML=res_3;
}