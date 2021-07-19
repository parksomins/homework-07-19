function sendit(){

    //정규 표현식
    const expNameText = /[가-힣]+$/;
    const expHpText = /^010+\d{3,4}\d{4}$/;
    // aA.-0123@aA.-0123.aA01
    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9]+$/;
    const expUserpwText = /^(?=.*[A-Za-z])(?=.*[!@#$%^~*+=-])(?=.*[0-9])/;

    // 아이디를 입력하지 않았을 경우
    if($("#userid").val() == ''){
        alert('아이디를 입력하세요');
        $("#userid").focus();
        return false;
    }

    // 아이디가 4자 미만 또는 16자를 초과하는 경우
    if($("#userid").val().length < 4 || $("#userid").val().length > 16){
        alert('아이디를 4자 이상 16자 이하로 입력하세요');
        $("userid").focus();
        return false;
    }

    // 비밀번호를 입력하지 않은 경우
    if($("#userpw").val() == ''){
        alert('비밀번호를 입력하세요');
        $("#userpw").focus();
        return false;
    }

    // 비밀번호와 비밀번호 확인의 값이 다른 경우
    if($("#userpw").val() != $("#userpw_re").val()){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다.');
        $("#userpw_re").focus();
        return false;
    }

    if(!expNameText.test($("#name").val())){
        alert('이름 형식을 확인하세요\n한글만 입력 가능합니다.');
        $("#name").val("");
        $("#name").focus();
        return false;
    }

    if(!expHpText.test($("#hp").val())){
        alert('휴대폰 번호 형식을 확인하세요');
        $("#hp").val("");
        $("#hp").focus();
        return false;
    }

    if(!expEmailText.test($("#email").val())){
        alert('이메일 형식을 확인하세요');
        $("#email").val("");
        $("#email").focus();
        return false;
    }

    if(!expUserpwText.test($("#userpw").val())){
        alert('비밀번호 형식을 확인하세요');
        $("#userpw").val("");
        $("#userpw").focus();
        return false;
    }


    if($("input:checkbox:checked").length == 0){
        alert('취미는 1개 이상 선택하세요');
        return false;
    }

    if($("#isssn").val() == 'n'){
        alert('주민등록번호 검증버튼을 눌러주세요');
        return false;
    }
    return true;
}

function ssnCheck(){    
    if($("#ssn1").val() == '' || $("#ssn2").val() == ''){
        alert('주민등록번호를 입력하세요');
        $("#ssn1").focus();
        return false;
    }

    const ssn = $("#ssn1").val() + $("#ssn2").val();   //0010113068518
    
    const s1 = Number(ssn.substr(0, 1)) * 2;
    const s2 = Number(ssn.substr(1, 1)) * 3;
    const s3 = Number(ssn.substr(2, 1)) * 4;
    const s4 = Number(ssn.substr(3, 1)) * 5;
    const s5 = Number(ssn.substr(4, 1)) * 6;
    const s6 = Number(ssn.substr(5, 1)) * 7;
    const s7 = Number(ssn.substr(6, 1)) * 8;
    const s8 = Number(ssn.substr(7, 1)) * 9;
    const s9 = Number(ssn.substr(8, 1)) * 2;
    const s10 = Number(ssn.substr(9, 1)) * 3;
    const s11 = Number(ssn.substr(10, 1)) * 4;
    const s12 = Number(ssn.substr(11, 1)) * 5;
    const s13 = Number(ssn.substr(12, 1));

    let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;
    result = result % 11;
    result = 11 - result;
    if(result >= 10) result = result % 10;

    if(result == s13){
        alert('유효한 주민등록번호입니다.');
        $("#isssn").val('y');
    }else{
        alert('유효하지 않은 주민등록번호입니다.');
    }

}

function moveFocus(){
    if($("#ssn1").val().length >= 6){
        $("#ssn2").focus();
    }
}

function changeSsn(){
    $("#isssn").val('n');
    
}

