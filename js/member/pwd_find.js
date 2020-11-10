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
    
});


function findPwd(){
    var regExpEmail = /^\w{5,12}@[a-z]{2,10}[\.][a-z]{2,3}[\.]?[a-z]{0,2}$/;// 이메일 정규식
    var memberId = document.getElementById("member_id").value;
    var valueEmail = document.getElementById("member_email").value;
    if(memberId==""){
        // 아이디를 입력하지 않은 경우
        alert("아이디를 입력해주세요.");
        document.getElementById("member_id").focus();
    }else if(memberId!="" && valueEmail==""){
        // 이이디만 입력했을 경우
        alert("이메일을 입력하세요.");
    }else if(memberId!="scott" && regExpEmail.test(valueEmail)){
        // 아이디와 이메일의 정보가 일치하지 않을 경우
        alert("정보가 일치하지 않습니다.");
        document.getElementById("member_email").focus(); 
    }else if(valueEmail!="" && regExpEmail.test(valueEmail)==false){
        // 이메일을 정확히 입력하지 않았을 경우
        alert("이메일을 올바르게 입력해주세요.");
        document.getElementById("member_email").focus();
    }else if(valueEmail!="" && regExpEmail.test(valueEmail) && memberId=="scott"){
        // 올바른 형식으로 이메일을 입력한 경우
        console.log(memberId+"님의 비밀번호는 tiger 입니다.");
    }
}
