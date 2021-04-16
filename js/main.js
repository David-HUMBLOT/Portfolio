// JQUERY BOX2 IMAGE2 ACTIVE2 OR NOT ACTIVE2
//quand onclique on enleve active sur les autres image et on anoute la classe active à l'image cliqué 
//qui devient active
$(".image2").click(function(){
    $(".image2").removeClass("active2");
    $(this).addClass("active2");
})