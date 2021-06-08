// 슬라이드를 사용하기 위해 myswiper을 초기화한다
new Swiper('.myswiper', {
	infinite : true, 
	autoplay : true,
	autoplaySpeed: 12000,
	navigation : {
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

new Swiper('.myswiper2', {
	infinite : true, 
	navigation : {
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

// 검색창에 무언가를 검색했을 때 문구가 등장
var btn = document.getElementById('input-group-addon-button');

btn.onclick = function() {
  alert('사이트에 방문해보세요');
}

var mouseover = document.getElementById('whereto');

mouseover.mouseover = function() {
}

// 사이드바 func 지정(여닫기)
function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// 아이콘 슬라이드 설정
var swiper = new Swiper('.swiper-container2', {
	slidesPerView: 5,
	navigation : {
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
	});

// 헤더 상단의 미국 국기 마우스오버시 숨겨졌던 DIV 등장
function view_language(opt) {
	if(opt) {
		hidden_div_language.style.display = "block";
	}
	else {
		hidden_div_language.style.display = "none";
	}
}

// 헤더 상단의 hello, sign in 마우스오버시 숨겨졌던 DIV 등장
function view_sign(opt) {
	if(opt) {
		hidden_div_sign.style.display = "block";
	}
	else {
		hidden_div_sign.style.display = "none";
	}
  }

// div 클릭하면 회원가입 섹션 등장
function ClickFunction(idMyDiv){
	var objDiv = document.getElementById(idMyDiv);
	if(objDiv.style.display=="block"){ objDiv.style.display = "none"; }
	 else{ objDiv.style.display = "block"; }
}

input.oninput = function() {
	result.innerHTML = "put an exact value";
};

// zip code input 박스에 무엇인가 입력하면 글자 등장
function printName()  {
	const enter_code = document.getElementById('enter_code').value;
	document.getElementById("code_alert").innerText = "! Please enter a valid US zip code";
}

// 체크박스에서 선택된 location를 헤더 상단에 표시
function location_function(e) {
const value = e.value;
document.getElementById('location_chosen').innerText
	= value;
}