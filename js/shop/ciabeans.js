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

    $("#thumbnailImg img").hover(
        function(){
            $(this).css("border","2px solid black").css("opacity","1").css("box-sizing","border-box").css("cursor","pointer");
        },
        function(){
            $(this).css("border","1px solid #efefef").css("opacity","0.7");
        }
    );

    responsive();

    $(window).resize(function(){
        responsive();
    });

    // 첫 시작시에는 장바구니 버튼 비활성화
    $(".cartButton").attr("disabled","true");

    $(".price").slideUp(0);
    $(".optionWeight").change(function(){
        var optionValue = $(this).val();
        if(optionValue=="200g"){
            $(".priceWrap").slideDown(500);
            $(".price").text("￦14,000").slideDown(500);
            $(".reset").animate({opacity:1},500);
            $(".cartButton").removeAttr("disabled").css("cursor","pointer");
        }else if(optionValue=="500g"){
            $(".priceWrap").slideDown(500);
            $(".price").text("￦30,000").slideDown(500);
            $(".reset").animate({opacity:1},500);
            $(".cartButton").removeAttr("disabled").css("cursor","pointer");
        }else if(optionValue==""){
            $(".priceWrap").slideUp(500);
            $(".reset").animate({opacity:0},500);
            $(".cartButton").attr("disabled","true").css("cursor","not-allowed");
        }
    });

    // 클리어 버튼 클릭 시
    $(".reset").click(function(){
        $(".optionWeight").val("");
        $(".priceWrap").slideUp(500);
        $(".reset").animate({opacity:0},500);
        $(".cartButton").attr("disabled","true").css("cursor","not-allowed");
    });

    // 장바구니 버튼에 마우스 올리고 내리고 할 경우
    $(".cartButton").hover(
        function(){ // 마우스 올릴 경우 색을 좀 더 진하게 변경
            $(this).animate({backgroundColor:"#997748"},200);
        },
        function(){ // 마우스 내릴 경우 원래 색으로 변경
            $(this).animate({backgroundColor:"#bf955a"},200);
        }
    );
    

    // 쇼핑몰로 돌아가기 버튼에 마우스 올리고 내리고 할 경우
    $("#backStore a").hover(
        function(){ // 마우스 올릴 경우 색을 좀 더 진하게 변경
            $(this).animate({backgroundColor:"#997748"},200);
        },
        function(){ // 마우스 내릴 경우 원래 색으로 변경
            $(this).animate({backgroundColor:"#bf955a"},200);
        }
    );

    $(".statisticBoxIcon").hover(
        function(){
            $(this).children().animate({opacity:1},300);
        },
        function(){
            $(this).children().animate({opacity:0.5},300);
        }
    );

    $(".innerContentBox").hover(
        function(){
            $(this).css('transition','all ease 0.3s').css("box-shadow","0 -10px 30px -10px rgba(0, 0, 0, 0.7)");
        },
        function(){
            $(this).css('transition','all ease 0.3s').css("box-shadow","none");
        }
    );
    
});

function basketPut(){
    var productCount = document.getElementsByClassName("quantityText")[0].value;
    var productName = document.getElementById("productName").value;

    var theForm = document.cartForm;
    theForm.method = "get";
    theForm.action = "#";
    theForm.submit();
    alert(productName+"상품이 " + productCount + "개 장바구니에 담겼습니다.");
}

function responsive(){
    var w = $("#productImg img").width();

    if(w >=550){
        // 썸네일 사진 클릭시 대표이미지 슬라이드 변경
        $("#thumbnailImg img:first").click(function(){
            $("#leftImg").stop().animate({marginLeft:0},300);
        });
        $("#thumbnailImg img:last").click(function(){
            $("#leftImg").stop().animate({marginLeft:-w-5},300);
        });
    }else if(w<550 && w>400){
        // 썸네일 사진 클릭시 대표이미지 슬라이드 변경
        $("#thumbnailImg img:first").click(function(){
            $("#leftImg").stop().animate({marginLeft:0},300);
        });
        $("#thumbnailImg img:last").click(function(){
            $("#leftImg").stop().animate({marginLeft:-w-5},300);
        });
    }
}