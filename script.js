$(".final-Result").hide();

var shyness;
var outgoing;
$(".submittwo").click(function(){
var shyness = $(".shy").val();
var outgoing = $(".out").val();
$(".results").show();
if (shyness <=2 && outgoing==="stay in") {
  mermaidname="Rikki";
  $(".character").append("<h2>" + "Your shyness level is " + shyness + " and you prefer to " + outgoing + "." + "You are " + mermaidname + "!"+"</h2>");
  $(".mermaid").attr("src", "rikki.jpg");
}
else if (shyness <=2 && outgoing==="go out") {
  mermaidname="Rikki";
  $(".character").append("<h2>" + "Your shyness level is " + shyness + " and you prefer to " + outgoing + "." + "You are " + mermaidname + "!"+"</h2>");
  $(".mermaid").attr("src", "rikki.jpg");
  }
else if (shyness ==3 && outgoing==="go out") {
  mermaidname="Bella";
  $(".character").append("<h2>" +"Your shyness level is  " + shyness + " and you like to  " + outgoing + ", you are " + mermaidname + "!"+"</h2>");
  $(".mermaid").attr("src", "bella.jpg");
}

else if (shyness==4 && outgoing==="go out") {
  mermaidname="Bella";
  $(".character").append("<h2>" +"Your shyness level is " + shyness + " and you like to " + outgoing + ", you are " + mermaidname + "!"+"</h2>");
  $(".mermaid").attr("src", "bella.jpg");
}
else if (shyness ==3 && outgoing==="stay in"){
  mermaidname="Emma";
  $(".character").append("<h2>" +"Your shyness level is " + shyness + " and you like to " + outgoing + ", you are " + mermaidname + "!"+"</h2>");
  $(".mermaid").attr("src", "emma.jpg");
}
else if (shyness==4 && outgoing==="stay in"){
  mermaidname="Emma";
  $(".character").append("<h2>" +"Your shyness level is " + shyness + " and you like to " + outgoing + ", you are " + mermaidname + "!"+"</h2>");
  $(".mermaid").attr("src", "emma.jpg");
}
else if (shyness ==5 && outgoing==="go out"){
  mermaidname="Cleo";
  $(".character").append("<h2>" +"Your shyness level is " + shyness + " and you like to  " + outgoing + ", you are " + mermaidname + "!"+"</h2>");
  $(".mermaid").attr("src", "cleo.jpg");
  }
  
else if (shyness ==5 && outgoing==="stay in"){
  mermaidname="Cleo";
  $(".character").append("<h2>" +"Your shyness level is  " + shyness + " and you like to " + outgoing + ", you are " + mermaidname + "!"+"</h2>");
  $(".mermaid").attr("src", "cleo.jpg");
}
});

$(".restart").click(function(){

$(".results").hide();
$('#counter').text(Number($('#counter').text())+1);

});