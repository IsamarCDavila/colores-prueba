$(".color-franja").css("background","red");
$(".circulos").click(function(){
    var t=$(this).attr("id");
    console.log(t);
    $(".color-franja").css("background",t);
});

$(".new-color").click(function(){
  $("input[name=color]").css("display","block");
});


/*falta on ready para que vuelva a cargar el documento y encuentro el objeto creado*/

$(document).ready(function(){
	$("input[name=color]").change(function(){
    var y=$('input[name=color]').val();
		/*alert($('input[name=color]').val());*/
    $(".color").attr("id",y);
		$('#colorseleccionado').val($(this).val());
    var nuevo="<div class='circulos' id="+y+" style='background-color:"+y+";'></div>";
    $(".circulos-colores").append(nuevo);
	});
});
