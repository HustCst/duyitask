var calculation = "";
$(".btn").mouseup(function() {
  $(this).blur();
});
$("#decimal").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation=="") ? "0"  : calculation;
    if (checkPreceding()){
      calculation += ".";
      $("#output").html(calculation);
    };
  }

});
$("#left-bracket").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation += "(";
    $("#output").html(calculation);
  }

});
$("#right-bracket").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation += ")";
    $("#output").html(calculation);
  }

});
$("#zero").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    if (calculation[0] === "0" && calculation[1] !== ".") {
      alert("Can't add anymore zeroes in front");
    } else {
      calculation += "0";
    }
    $("#output").html(calculation);
  }

});
$("#one").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "1";
    $("#output").html(calculation);
  }

});
$("#two").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "2";
    $("#output").html(calculation);
  }

});
$("#three").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "3";
    $("#output").html(calculation);
  }

});
$("#four").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "4";
    $("#output").html(calculation);
  }

});
$("#five").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "5";
    $("#output").html(calculation);
  }

});
$("#six").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "6";
    $("#output").html(calculation);
  }

});
$("#seven").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "7";
    $("#output").html(calculation);
  }

});
$("#eight").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "8";
    $("#output").html(calculation);
  }

});
$("#nine").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    calculation=(calculation!="0") ? calculation  : "";
    calculation += "9";
    $("#output").html(calculation);
  }
});
$("#AC").click(function() {
    calculation = '';
    $('#output').html(calculation);
});
$("#CE").click(function() {
  if(calculation.length != 1) {
    calculation = calculation.substring(0, calculation.length - 1);
    $("#output").html(calculation);
  }
});
$("#plus").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    if (checkPreceding("+")){
      calculation += "+";
      $("#output").html(calculation);
    }
  }

});
$("#times").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    if (checkPreceding("*")){
      calculation += "*";
      $("#output").html(calculation);
    }
  }

});
$("#divide").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
    if (checkPreceding("/")){
      calculation += "/";
      $("#output").html(calculation);
    }
  }

});
$("#subtract").click(function() {
  // checkLength();
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }else{
if (calculation[calculation.length-1] === "-"){
    alert("Stop trying to break my calculator!");
  }
  else{
    calculation += "-";
    $("#output").html(calculation);
    }
  }

});
$("#equals").click(function compute() {
  // checkLength();
  if (calculation.length > 42){
    alert('str is too length.');
    return;
  }else{
    // if (calculation[0] === "0" && calculation[1] !== ".") {
    //   calculation = calculation.substring(1);
    // }
    try  {
      var final = eval(calculation);
    }
    catch(exception) {
      var final = 'Math error';
    }
      if(parseInt(final) == final || final == 'Math error') {
        $("#output").html(final);
      }else {
        $("#output").html(final.toFixed(5));
      }
      calculation = "";

  }

});
function checkLength(){
  if (calculation.length > 41){
    alert('str is too length.');
    return;
  }
}
function checkPreceding(operator){
  if (calculation === "" && operator === "+" || calculation === "" && operator === "*"  || calculation === "" && operator === "/" || calculation === "" && operator === "+"){
    alert("Stop trying to break my calculator!");
    return false
  }
  if (calculation[calculation.length-1] === "/" || calculation[calculation.length-1] === "*" || calculation[calculation.length-1] === "-" || calculation[calculation.length-1] === "+" || calculation[calculation.length-1] === "."){
      alert("Stop trying to break my calculator!");
    return false

      }
  else {
    return true
  }
}