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

// 정보 입력칸 배열 생성
var formInput = new Array();
// 정보 입력칸 갯수를 알기위한 변수
var listInput = document.getElementsByClassName("form_input");
var regExpPwd =  /^[A-Za-z0-9]{6,16}$/;// 비밀번호 정규식
var regExpEmail = /^\w{5,12}@[a-z]{2,10}[\.][a-z]{2,3}[\.]?[a-z]{0,2}$/;// 이메일 정규식
// 작성 완료
function join(){
    
    // 배열에 정보입력칸 value값을 넣어준다.
    for(var i=0; i<listInput.length; i++){
        formInput[i] = document.getElementsByClassName("form_input")[i].value;
    }
    // 아이디 입력칸이 빈칸일 경우 입력하라는 문구를 띄운후에 포커스를 이용해 아이디에 시선이 가게 한다.
    if(formInput[0]==""){
        alert("사용할 아이디를 입력해주세요.");
        document.getElementsByClassName("form_input")[0].focus();
    }else if(formInput[1]==""){
        alert("사용할 이메일을 입력해주세요.");
        document.getElementsByClassName("form_input")[1].focus();
    }else if(!(regExpEmail.test(formInput[1]))){
        alert("입력한 이메일 형식이 올바르지 않습니다.");
        document.getElementsByClassName("form_input")[1].focus();
    }else if(formInput[2]==""){
        alert("사용할 비밀번호를 입력해주세요.");
        document.getElementsByClassName("form_input")[2].focus();
    }else if(!(regExpPwd.test(formInput[2]))){
        alert("비밀번호는 6~16자 영문 대 소문자, 숫자를 사용하세요.");
        document.getElementsByClassName("form_input")[2].focus();
    }else if(formInput[3]==""){
        alert("사용할 비밀번호 확인을 입력해주세요.");
        document.getElementsByClassName("form_input")[3].focus();
    }else if(formInput[3]!=formInput[2]){
        // 비밀번호와 비밀번호 확인이 일치하는지 확인
        alert("비밀번호를 똑같이 맞춰주세요.");
        document.getElementsByClassName("form_input")[3].focus();
    }else{
        var theForm = document.joinForm;
        theForm.method = "get";
        theForm.action = "#";
        // 모든 조건을 충족했을 경우 회원가입 완료
        if(formInput[0]!="" && regExpEmail.test(formInput[1]) && formInput[2]!="" && regExpPwd.test(formInput[2]) && formInput[3]!="" || formInput[2]==formInput[3]){
            theForm.submit();
            alert(formInput[0] + "님 회원가입을 축하합니다.");
            location.href = "./login.html";
        }
    }

    
}