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
    
    /* ----- secondInformation ----- */
    $(".columnText").mouseover(function(){ // 
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).css('transform','scale(1.1)').css('transition','all ease 0.2s').css('backgroundColor','white').css('box-shadow','0 0 10px 10px rgba(0, 0, 0, 0.4');
    });
    $(".columnText").mouseout(function(){ // 
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).css('transform','scale(1)').css('transition','all ease 0.2s').css('backgroundColor','transparent').css('box-shadow','initial');
    });

    /* ----- fieldOfBusiness ----- */
    // 사업 분야 메뉴 
    $("#leftColumn").mouseover(function(){ // 왼쪽 컬럼에 마우스를 올리면
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).children(".edge").css('backgroundColor','#bf955a');
    });
    $("#leftColumn").mouseout(function(){ // 왼쪽 컬럼에 마우스가 벗어나면
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).children(".edge").css('backgroundColor','#ddd');
    });

    $("#centerColumn").mouseover(function(){ // 가운데 컬럼에 마우스를 올리면
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).children(".edge").css('backgroundColor','#bf955a');
    });
    $("#centerColumn").mouseout(function(){ // 가운데 컬럼에 마우스가 벗어나면
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).children(".edge").css('backgroundColor','#ddd');
    });

    $("#rightColumn").mouseover(function(){ // 오른쪽 컬럼에 마우스를 올리면
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).children(".edge").css('backgroundColor','#bf955a');
    });
    $("#rightColumn").mouseout(function(){ // 오른쪽 컬럼에 마우스가 벗어나면
        // 이미지 바깥부분의 색을 변경해 주세요.
        $(this).children(".edge").css('backgroundColor','#ddd');
    });

});
