$(document).ready(function(){

	$('.tooltipped').tooltip({delay: 0});
	$('.parallax').parallax();
	montarCordel();
	montarCapa();
	cBanner();
})
$(window).resize(function(){})

function montarCordel(){
	
}
function montarCapa(){
	$(".palco-suporte #titulo").keyup(function(){
		var a = document.forms["montarcapa"]["titulo"].value;
		$(".palco #titulo-capa").text(a);
	})
	$(".palco-suporte #autor").keyup(function(){
		var b = document.forms["montarcapa"]["autor"].value;
		$(".palco #autor-capa").text("Autor: " + b);
	})
	$(".palco-suporte .with-gap").click(function(){
		var a = $(this).attr("data-cor");
		switch(a){
			case "cor1": 
				$(".palco .capa").removeClass("white blue yellow green");
				$(".palco .capa").addClass("red");
			break;
			case "cor2":
				$(".palco .capa").removeClass("white red blue green");
				$(".palco .capa").addClass("yellow");
			break;
			case "cor3":
				$(".palco .capa").removeClass("red blue yellow green");
				$(".palco .capa").addClass("white");
			break;
			case "cor4":
				$(".palco .capa").removeClass("white red yellow green");
				$(".palco .capa").addClass("blue");
			break;
			case "cor5":
				$(".palco .capa").removeClass("white red blue yellow");
				$(".palco .capa").addClass("green");
			break;
			default:
				$(".palco .capa").removeClass("red blue yellow green");
				$(".palco .capa").addClass("white");
		}
	})
}
function cBanner(){
	$('#cBanner').cycle({
		timeout: 0,
		prev: '#dois .prev',
		next: '#dois .next'
	});
}

$(function() { 
    $("#btnSave").click(function() { 
        html2canvas($(".palco"), {
		  onrendered: function(canvas) {
			document.body.appendChild(canvas);
		  }
		});
    });
}); 