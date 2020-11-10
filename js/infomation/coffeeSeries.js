$(document).ready(function(){

    $("#header").load("../common/header.html");
    $("#footer").load("../common/footer.html");

    $(window).on("scroll",function(){
        //console.log($(this).scrollTop());
        if($(this).scrollTop()>=200){ // 화면 상단의 스크롤값이 200이상이라면
            $(".navActive").stop().animate({'opacity':'1','right':'20px'},800);
            $("#toTop").stop().animate({'right':'10px','opacity':'0.7'},800); // toTop 버튼을 right 10px의 위치로 0.8초 동안 나오게 해주세요.
        }else if($(this).scrollTop()<200){ //  화면 상단의 스크롤값이 200미만이라면
            $(".navActive").stop().animate({'opacity':'0','right':'-100px'},800);
            $("#toTop").stop().animate({'right':'-50px','opacity':'0'},800); // toTop 버튼을 화면 밖으로 나가게 해주세요.
        }
    });

    // 탑 버튼 클릭시 맨위로 부드럽게 화면 이동
    $("#toTop").click(function(){
        $("html, body").animate({scrollTop:0},800);
        return false;
    });

    // 
    $("#CIA001").click(function(){
        $("html, body").animate({scrollTop:900},800);
        return false;
    });    
    $("#CIA002").click(function(){
        $("html, body").animate({scrollTop:2500},800);
        return false;
    });
    $("#CIA003").click(function(){
        $("html, body").animate({scrollTop:4100},800);
        return false;
    });
    $("#CIAECOS").click(function(){
        $("html, body").animate({scrollTop:5700},800);
        return false;
    });

    // 모바일 버전에서는 높이가 다르기 때문에 해상도값을 뽑아내야한다.
    var width = $(window).width();
    if(width<=859){
        $("#mobileCIA001").click(function(){
            $("#mobileMenu").css("display","none");
            $("html, body").animate({scrollTop:600},800);
            return false;
        });
        $("#mobileCIA002").click(function(){
            $("#mobileMenu").css("display","none");
            $("html, body").animate({scrollTop:3900},800);
            return false;
        });
        $("#mobileCIA003").click(function(){
            $("#mobileMenu").css("display","none");
            $("html, body").animate({scrollTop:7269},800);
            return false;
        });
        $("#mobileCIAECOS").click(function(){
            $("#mobileMenu").css("display","none");
            $("html, body").animate({scrollTop:10548},800);
            return false;
        });
    }
    $(window).on("scroll",function(){
        //console.log($(this).scrollTop()); //높이값을 알아내기 위한 값 찍기
        if(width<=859){   // mobile버전 animate 효과(제품 이미지와 간단한 설명 박스)
            if($(this).scrollTop()>=300){
                $(".cia001Img").animate({'opacity':'1','margin-top':'0px'},1300);
                $(".cia001Info").delay(300).animate({'opacity':'1','margin-top':'0px'},1300);
            }
            if($(this).scrollTop()>=3700){
                $(".cia002Img").animate({'opacity':'1','margin-top':'0px'},1300);
                $(".cia002Info").delay(300).animate({'opacity':'1','margin-top':'0px'},1300);
            }
            if($(this).scrollTop()>=7100){
                $(".cia003Img").animate({'opacity':'1','margin-top':'0px'},1300);
                $(".cia003Info").delay(300).animate({'opacity':'1','margin-top':'0px'},1300);
            }
            if($(this).scrollTop()>=10400){
                $(".ciaEcoSImg").animate({'opacity':'1','margin-top':'0px'},1300);
                $(".ciaEcoSInfo").delay(300).animate({'opacity':'1','margin-top':'0px'},1300);
            }            
        }else{  // pc버전 animate 효과(제품 이미지와 간단한 설명 박스)
            if($(this).scrollTop()>=600){
                $(".cia001Img").animate({'opacity':'1','margin-top':'0px'},1300);
                $(".cia001Info").delay(300).animate({'opacity':'1','margin-top':'0px'},1300);
            }
            if($(this).scrollTop()>=2200){
                $(".cia002Img").animate({'opacity':'1','margin-top':'0px'},1300);
                $(".cia002Info").delay(300).animate({'opacity':'1','margin-top':'0px'},1300);
            }
            if($(this).scrollTop()>=3700){
                $(".cia003Img").animate({'opacity':'1','margin-top':'0px'},1300);
                $(".cia003Info").delay(300).animate({'opacity':'1','margin-top':'0px'},1300);
            }
            if($(this).scrollTop()>=5300){
                $(".ciaEcoSImg").animate({'opacity':'1','margin-top':'0px'},1300);
                $(".ciaEcoSInfo").delay(300).animate({'opacity':'1','margin-top':'0px'},1300);
            }
        }   
        
    });


    // 동그란 이미지 hover시 opacity:1
    $(".statisticBoxIcon").hover(
        function(){
            $(this).children().animate({opacity:1},300);
        },
        function(){
            $(this).children().animate({opacity:0.5},300);
        }
    );

    // 상품 컨텐츠박스 hover시 box-shadow 효과
    $(".innerContentBox").hover(
        function(){
            $(this).css('transition','all ease 0.3s').css("box-shadow","0 -10px 30px -10px rgba(0, 0, 0, 0.7)");
        },
        function(){
            $(this).css('transition','all ease 0.3s').css("box-shadow","none");
        }
    );
    
});

