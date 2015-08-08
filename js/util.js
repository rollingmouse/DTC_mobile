// modal
$( '#show-modal' ).on( 'click', function( ev ) {
  $( '#modal' ).fadeIn();
  $( '#modal-background' ).fadeTo( 500, .5 );
  ev.preventDefault();
});

// Function to hide modal
$( '#close-modal' ).on( 'click', function( ev ) {
  $( '#modal, #modal-background' ).fadeOut();
  ev.preventDefault();
});

// 지도자세히보기1
$( '#show-car1' ).on( 'click', function( ev ) {
  $( '#pop-car1' ).fadeIn();
  $( '#car-background' ).fadeTo( 500, .5 );
  ev.preventDefault();
});
$( '#close-car1' ).on( 'click', function( ev ) {
  $( '#pop-car1, #car-background' ).fadeOut();
  ev.preventDefault();
});

// 지도자세히보기2
$( '#show-car2' ).on( 'click', function( ev ) {
  $( '#pop-car2' ).fadeIn();
  $( '#modal-background' ).fadeTo( 500, .5 );
  ev.preventDefault();
});
$( '#close-car2' ).on( 'click', function( ev ) {
  $( '#pop-car2, #modal-background' ).fadeOut();
  ev.preventDefault();
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

/*
 * elementToggle(오브젝트, 여닫기, 모션여부, 스피드)
 * elementToggle(오브젝트, 여닫기)
 */
var elementToggle = function(target, option, motion, speed){
	var $obj = target,
	$motion = false,
	$speed = 300;
	$motion = motion;
	$speed = speed;
	if(!$motion){
		if(option == 0){
			$obj.hide();
		}else if(option == 1){
			$obj.show();	
		}
	}else{
		if(option == 0){
			$obj.slideUp(speed);
		}else if(option == 1){
			$obj.slideDown(speed)	;
		}
	}
};

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

// share
function shareTwitter(title,paramURL){
	var localValURL = location.href;
	if(paramURL != null){
		localValURL = paramURL;
	}
	var str = encodeURI(title) + " - " + localValURL;
	window.open("http://twitter.com/home?status=" + str);
}
function shareFacebook(title,paramURL){
	var localValURL = location.href;
	if(paramURL != null){
		localValURL = paramURL;
	}

	console.log(localValURL);
	var str = 'http://www.facebook.com/sharer.php?u='+localValURL+'&t='+encodeURI(title);
	window.open(str);
}
function copyURL(paramURL){
	var localValURL = location.href;
	if(paramURL != null){
		localValURL = paramURL;
	}

    var IE=(document.all)?true:false;
    if (IE) {
         window.clipboardData.setData("Text", localValURL);
         alert("클립보드에 복사되었습니다.");
    } else {
         temp = prompt("Ctrl+C를 눌러 클립보드로 복사하세요", localValURL);
    }
}


