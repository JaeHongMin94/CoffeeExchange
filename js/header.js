$(document).ready(function(){

    $(".fa-bars").on("click",function(){ // 메뉴 버튼 클릭 시 0.7초에 걸쳐서 보이기
        $("#mobileMenu").fadeIn(700);
    });
    
    $("#cancelBorder").on("click",function(){ // 메뉴 끄기 버튼 클릭 시 0.7초에 걸쳐서 끄기
        $("#mobileMenu").fadeOut(700);
    });   

    $("#mobileGnb li").click(function(){ // 메뉴(Depth2가 있는 메뉴) 클릭 시
        $(this).children('ul').stop().slideToggle(700); // 서브메뉴 호출 및 닫기
    });
    
    $("#basketImg").mouseover(function(){
        $("#basketEmpty").stop().fadeIn();
    });
    $("#basketImg, #basketEmpty").mouseout(function(){
        $("#basketEmpty").stop().fadeOut();
    });
    // 모바일 버전에서는 높이가 다르기 때문에 해상도값을 뽑아내야한다.
    $(window).resize(function() {
        //창크기 변화 감지
        var width = $(window).width();
        if(width>=920){
            $("#basketImg").mouseover(function(){
                $("#basketEmpty").stop().fadeIn();
            });
        }else{
            $("#basketImg").mouseover(function(){
                $("#basketEmpty").css("display","none");
            });
        }   
    });     
     
    
});

