//Business Logic


function timeMachine(number) {
  if (parseInt(number) === 1) {
    return "I";
  } else if (parseInt(number) === 2){
    return "II";
  } else if (parseInt(number) === 3) {
    return "III";
  } else if (parseInt(number) === 4) {
    return "IV";
  } else if (parseInt(number) === 5) {
    return "V";
  } else if (parseInt(number) === 6) {
    return "VI";
  } else if (parseInt(number) === 7) {
    return "VII";
  } else if (parseInt(number) === 8) {
    return "VIII";
  } else if (parseInt(number) === 9) {
    return "IX";
  } else if (parseInt(number) === 10) {
    return "X";
  } else if (parseInt(number) === 50) {
    return "L";
  } else if (parseInt(number) === 100) {
    return "C";
  } else if (parseInt(number) === 500) {
    return "D";
  } else if (parseInt(number) === 1000) {
    return "M";
  }




}






//UI logic

$(document).ready(function() {
  $("form#output").submit(function (event) {
    event.preventDefault();
    const rommie = $("#num-input").val();
    const result = " " + timeMachine(rommie);
    $("#display").html(result);
  })
})