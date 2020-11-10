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


var random;
var regExpEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;// 이메일 정규식
var numPhone; // 인증번호를 보낸 전화번호
var chkRequest = false; // 인증요청을 하지 않았다면 false

function findId(){
    var valueEmail = document.getElementById("member_email").value;
    //console.log(regExpEmail.test(valueEmail));
    if(valueEmail!="" && regExpEmail.test(valueEmail)){
        // 올바른 형식으로 이메일을 입력한 경우
        console.log("회원님의 아이디는 scott입니다.");
    }else if(document.getElementById("member_email").value==""){
        // 이메일을 입력하지 않은 경우
        alert("이메일을 입력해주세요.");
    }else if(valueEmail!="" && regExpEmail.test(valueEmail)==false){
        // 이메일을 정확히 입력하지 않았을 경우
        alert("이메일을 올바르게 입력해주세요.");
    }
}
