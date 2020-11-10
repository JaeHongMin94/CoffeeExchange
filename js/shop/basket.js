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
    
    // 장바구니 페이지에 X버튼을 누르면 리스트에서 삭제
    $("#listCancel").click(function(){
        $("#basket").css("display","none");
        $(".cartWrap").css("display","none");
        $("#txtBasketEmpty").css("display","block");
    });
    


});

var quantityTotal = 0;
function quantityRenew(){
    
    var quantity = document.getElementsByTagName("input")[0].value;

    if(application==false){
        quantityTotal = quantity*14000;
        alert("수량이 변경되어 총계가 바뀝니다.");
        document.getElementsByClassName("productSubtotal")[2].innerText = quantityTotal.toLocaleString();
        document.getElementsByClassName("priceAmount")[0].innerText = quantityTotal.toLocaleString();
        document.getElementsByClassName("priceAmount")[2].innerText = (quantityTotal+3000).toLocaleString();
    }else{
        quantityTotal = quantity*14000;
        alert("수량이 변경되어 총계가 바뀝니다.");
        document.getElementsByClassName("productSubtotal")[2].innerText = quantityTotal.toLocaleString();
        quantityTotal = quantityTotal-((quantity*14000)/10);
        document.getElementsByClassName("priceAmount")[0].innerText = quantityTotal.toLocaleString();
        document.getElementsByClassName("priceAmount")[2].innerText = (quantityTotal+3000).toLocaleString();
    }
    

}

var application = false;
function priceRenew(){    
    console.log(quantityTotal);
    var commodityPrice = quantityTotal-(quantityTotal/10);
    
    var coupon = document.getElementById("couponCode").value;

    if(coupon=="goodee2020") {
        if(application==false){
            alert("쿠폰이 적용되었습니다.");
            application = true;
            document.getElementsByClassName("priceAmount")[0].innerText = commodityPrice.toLocaleString();
            document.getElementsByClassName("priceAmount")[2].innerText = (commodityPrice+3000).toLocaleString();
        }else{
            alert("쿠폰이 이미 적용되었습니다.");
        }        
    }else if(coupon!="goodee2020" && coupon!=""){
        alert("쿠폰번호가 다릅니다.");
    }else if(coupon==""){
        alert("쿠폰번호를 입력해주세요.");
    }

}

function payment(){
    alert("결제 페이지로 넘어갑니다.");
}