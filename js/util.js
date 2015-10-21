//gnb
var arrow = '<span class="arrowspan"></span>'
$(arrow).insertBefore('.menu-lvl2');

$('.menu-lvl1 .arrowspan').click(function(){
  if( $(this).next('.menu-lvl2').hasClass('deployed') ){
    $(this).removeClass('up-arrow');
    $(this).next('.menu-lvl2').slideUp('fast').removeClass('deployed');
  }else{
     $(this).addClass('up-arrow');
     $(this).next('.menu-lvl2').slideDown('fast').addClass('deployed');
  }
  
});

// tab 메뉴
jQuery(function($){  
  // Captura o clique no link do menu das abas
  $('.tabs-menu>ul>li>a').click(function(){
    /** Variáveis **/
    // Configura o link clicado
    var a = $(this);
    // A classe da aba ativa
    var active_tab_class = 'active-tab-menu';
    // Captura o atributo data-tab e gera uma classe
    var the_tab = '.' + a.attr('data-tab');
    // Remove a classe de aba ativa de todas as abas
    $('.tabs-menu>ul>li>a').removeClass(active_tab_class);
    // Adiciona a classe de aba ativa apenas no link clicado
    a.addClass(active_tab_class);
    // Adiciona um CSS para ocultar todas as abas
    $('.tabs-content .tabs').css({
      'display' : 'none'
    });
    // Mostra apenas a aba que queremos
    $(the_tab).show();
    // Não deixa o navegador atualizar a página
    return false;
  });
});

//faq형 게시판 폴딩
var boardSpread = function(id, speed){
	var $obj = $(id),
	$speed = 400;
	$speed = speed;
	$obj.find("li").on("click","> .head > .subj > a, > .head > .arrow",function(){
		if($(this).parents("li").hasClass("open")){
			$(this).parents("li").removeClass("open").find(".content").slideUp($speed,function(){
				
			});
		}else{
			$obj.find("li.open").find(".content").slideUp($speed,function(){$(this).parents("li").removeClass("open")});
			$(this).parents("li").addClass("open").find(".content").slideDown($speed,function(){
				
			});
		}
		return false;
	});
}
