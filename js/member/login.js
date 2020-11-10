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


window.onload = function() { 
    if (getCookie("id")) { // getCookie함수로 id라는 이름의 쿠키를 불러와서 있을경우
        //input 이름이 id인곳에 getCookie("id")값을 넣어줌
        document.login_form.member_id.value = getCookie("id"); 
        document.login_form.saveId.checked = true; // 체크는 true로 변경
    }
}

function setCookie(name, value, expiredays){ //쿠키 저장함수
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function getCookie(Name) { // 쿠키 불러오는 함수
    var search = Name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) { 
            offset += search.length; 
            end = document.cookie.indexOf(";", offset); 
            if (end == -1)
                end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
    }
}

function saveId(){
    if(getCookie("id")==undefined){
        // 쿠키에 아이디와 비밀번호가 저장되지 않았을 경우 아무행동도 하지 않는다.                  
    }else if(document.login_form.saveId.checked==true){
        // 쿠키에 아이디와 비밀번호가 저장되어 있을 경우 자동로그인 체크시 자동으로 로그인
        document.getElementById("member_id").value = getCookie("id");  
    }
}

var cntPwd = 1; // 비밀번호 틀린 횟수
// 로그인
function login(){
    var memberId = document.getElementById("member_id").value;            
    var memberPwd = document.getElementById("member_pwd").value;
    
    if(memberId==""){ // 아이디가 NULL값일 때
        alert("아이디를 입력하세요.");
        document.getElementById("member_id").focus();
    }else if(memberId!="" && memberId!="scott"){ // 존재하지 않는 아이디를 입력했을 경우
        alert("존재하지 않는 아이디(계정) 입니다.");
        document.getElementById("member_id").focus();
    }

    if(memberId=="scott" && memberPwd==""){ // 아이디를 입력했지만 비밀번호를 입력하지 않은 경우
        alert("비밀번호를 입력해주세요.");
        document.getElementById("member_pwd").focus();
    }else if(cntPwd>=5){ // 비밀번호를 5회 이상 틀린 경우
        alert("비밀번호가 5회 틀렸습니다.\n관리자에게 문의하세요.")
    }else if(memberId=="scott" && memberPwd!="tiger" && cntPwd<5){
        // 비밀번호를 5회 미만으로 틀린 경우
        alert("비밀번호가 " + cntPwd + "회 틀렸습니다.\n5회 틀리면 로그인 진행할 수 없습니다.");
        document.getElementById("member_pwd").focus();
        cntPwd++;
    }

    var theForm = document.login_form;
    theForm.method = "get";
    theForm.action = "#";
    if(cntPwd<5 && memberId=="scott" && memberPwd=="tiger"){ // 모든 조건을 만족할 경우 로그인
        theForm.submit();
        alert(memberId+"님께서 로그인하셨습니다.");
        location.href="../index.html";
        if (document.login_form.saveId.checked == true) { // 아이디 저장을 체크 하였을때
            setCookie("id", document.login_form.member_id.value, 7); //쿠키이름을 id로아이디입력필드값을 7일동안 저장
        } else { // 아이디 저장을 체크 하지 않았을때
            setCookie("id", document.login_form.member_id.value, 0); //날짜를 0으로 저장하여 쿠키삭제
        }
    }            
} 