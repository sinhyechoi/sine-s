
new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#fff', '#fff', '#000', '#fff',],
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['Home','Profile & Skills','Project','Episode'], 
    easing: 'easeInOutCubic',
    anchors: ['1st', 'second', '3rd', '4th'],
    menu: '.gnb_list',
    normalScrollElements: '#s1',
});

new WOW().init();


//햄버거 버튼 클릭
$('.btn_total').click(function(){
    $('.total_menu_z').addClass('active');
});


//메뉴 팝업 닫기 버튼
$('.btn_totalClose').click(function(){
    $('.total_menu_z').removeClass('active')
});


var myScroll = new IScroll('.total_menu',{
    mouseWheel:true,
    //scrollbars:ture
});

$('.totalMitem').click(function(){
    if($(this).hasClass('active')){//현재 active가 적용된 상태일 때,
       $(this).removeClass('active');
} else {
    $('.totalMitem').removeClass('active');
    $(this).addClass('active');
}
});	
