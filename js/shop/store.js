$(document).ready(function(){

    $("#header").load("../common/header.html");
    $("#footer").load("../common/footer.html");

    $(window).on("scroll",function(){
        //console.log($(this).scrollTop());
        if($(this).scrollTop()>=200){ // 화면 상단의 스크롤값이 200이상이라면
            $("#toTop").stop().animate({'right':'10px','opacity':'0.7'},800); // toTop 버튼을 right 10px의 위치로 0.8초 동안 나오게 해주세요.
        }else if($(this).scrollTop()<200){ //  화면 상단의 스크롤값이 200미만이라면
            $("#toTop").stop().animate({'right':'-50px','opacity':'0'},800); // toTop 버튼을 화면 밖으로 나가게 해주세요.
        }
    });

    // TOP 버튼 클릭시 페이지 맨 위로 이동
    $("#toTop").click(function(){
        $("html, body").animate({scrollTop:0},800);
        return false;
    });

    /* ----- storePage ----- */
    $(".columnElement").mouseover(function(){
        $(this).css('transition','all ease 0.2s').css('backgroundColor','white').css('box-shadow','0 0 10px 10px rgba(0, 0, 0, 0.4').children().children(".columnImg").css('display','none').next(".hoverImg").css('display','block');
    });
    $(".columnElement").mouseout(function(){ // 
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).css('transition','all ease 0.2s').css('backgroundColor','transparent').css('box-shadow','initial').children().children(".columnImg").css('display','block').next(".hoverImg").css('display','none');
    });

    // scroll을 위에서 600만큼 내렸을 경우
    $(window).on("scroll",function(){
        if($(this).scrollTop()>=600)
            // 상품 목록들을 1.3초 동안 위로 올라오면서 보여주세요.
            $("#storeColumn").animate({'opacity':'1','margin-top':'0px'},1300);
    });

    // 상품 갯수를 알아보기 위한 문구
    // console.log($(".columnElement").length);
    //console.log($(".columnText h3").eq(3).text());
    $("#result span").append($(".columnElement").length+"개의 결과 표시");

    // // 상품명 배열
    // var orderBy = new Array();
    // for(var i=0; i<$(".columnElement").length; i++){
    //     orderBy[i] = $(".columnText h3").eq(i).text();
    //     console.log(orderBy[i]);
    // }

    // var $list = $(".columnElement");
    // $("#orderBy").change(function(){
    //     var state = $("#orderBy option:selected").val();
    //     if(state == "menuOrder"){
            
    //     }else if(state == "menuOrderDesc"){
    //         var OrderedDiv = $list.sort(function(a,b){                
    //             return $(a).find("h3").text() < $(b).find(".h3").text() ? -1 : $(a).find("h3").text() < $(b).find(".h3").text() ? 1 : 0;
    //         });
    //         $("columnElement").html(OrderedDiv);
    //     }else if(state == "price"){

    //     }else if(state == "priceDesc"){

    //     }
    // });
    
});
