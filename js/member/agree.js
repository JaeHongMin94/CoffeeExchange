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
    
    $('#allAgree').click(function(){ // 모두 동의 클릭 시
        if($(this).prop("checked")){ // true면 약관동의 모두 체크
            $(this).prevAll().prop("checked",true);
        }else{ // false면 약관동의 모두 해제            
            $(this).prevAll().prop("checked",false);
        }
    });

    $('.chkAgree').click(function(){ // 약관 동의 클릭 시
        if($('#e-commerceAgree').prop("checked") && $('#privacyPolicy').prop("checked")){
            // 전자상거래 이용약관, 개인정보 취급방침 둘 다 체크 된다면 
            $('#allAgree').prop("checked",true);// 약관 모두 동의 체크
        }else{ // 전자상거래 이용약관, 개인정보 취급방침 둘 중 하나라도 체크가 안되어 있다면
            $('#allAgree').prop("checked",false); // 약관 모두 동의 체크해제
        }
    });
    
    $('#agreeAccept').click(function(){ // 확인 버튼 클릭 시
        if($('#allAgree').prop("checked")){ // true면 정보입력 페이지로 이동
            location.href = "register.html";
        }else{ // false면 알림창 표시
            alert("동의 항목을 반드시 체크하셔야 다음 단계로 넘어갑니다.");
        }
    });

});

function accept(){
    var theForm = document.getElementById("agreeForm");
    theForm.method = "get";
    theForm.action = "#";
    if(document.Agreeform.e-commerceAgree.checked==false){
        alert("동의 항목(필수)는 반드시 체크하셔야 다음 단계로 넘어갑니다.");
        return "#";
    }else if(document.Agreeform.privacyPolicy.checked==false){
        alert("동의 항목(필수)는 반드시 체크하셔야 다음 단계로 넘어갑니다.");
        return "#";
    }else if(document.Agreeform.list.allAgree==false){
        alert("동의 항목(필수)는 반드시 체크하셔야 다음 단계로 넘어갑니다.");
        return "#";
    }
    theForm.submit();
    return "./register.jsp";
}