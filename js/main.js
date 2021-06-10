// 페이지 로딩 시 처음으로 등장하는 DIV
// 헤더 상단 Hello, Sign in 글자 밑에 등장했다 소멸
document.addEventListener("DOMContentLoaded", function(){
	setTimeout(function(){
	  showImage();
	  setInterval(hideImage, 4000); //0.5초 뒤에 등장 후 4초 뒤에 소멸
	}, 500);
});
function hideImage(){
	document.getElementById( "hd_appear" ).style.display = "none" ;
}
function showImage(){
	document.getElementById( "hd_appear" ).style.display = "block" ;
}

// 슬라이드 1, 2, 3 기본 설정
new Swiper('.myswiper', {
	infinite : true,  // 무한 + 자동 재생
	autoplay : true,
	autoplaySpeed: 12000, // 넘기기 속도
	navigation : {
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

new Swiper('.myswiper2', {
	infinite : true,
	navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev',
	},
});

new Swiper('.myswiper3', {
	infinite : true, 
	navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev',
	},
});

// 슬라이드 항목들을 드래그 가능하게
mouseover.mouseover = function() {
}

// 사이드바 func 지정(여닫기)
function openNav() {
	document.getElementById("bb_1_open").style.width = "300px";
}

function closeNav() {
	document.getElementById("bb_1_open").style.width = "0";
}

// 첫 번째 아이콘 슬라이드 설정
var swiper = new Swiper('.swiper-container2', {
	slidesPerView: 5, // 5개의 아이콘이 보임
	navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev',
	},
});

// 두 번째 아이콘 슬라이드 설정
var swiper = new Swiper('.swiper-container3', {
	slidesPerView: 5,
	navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev',
	},
});

// 헤더 상단의 미국 국기 마우스오버시 숨겨졌던 DIV 등장
function view_language(opt) {
	if(opt) {
		hd_2.style.display = "block";
	}
	else {
		hd_2.style.display = "none";
	}
}

// 헤더 상단의 hello, sign in 마우스오버시 숨겨졌던 DIV 등장
function view_sign(opt) {
	if(opt) {
		hd_3.style.display = "block";
	}
	else {
		hd_3.style.display = "none";
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

// zip code input 박스에 무엇인가 입력하면 경고 문자 등장
function printName()  {
	const hd_1_input = document.getElementById('hd_1_input').value;
	document.getElementById("hd_1_alert").innerText = "! Please enter a valid US zip code";
}

// 체크박스에서 선택된 location를 헤더 상단에 표시
function location_function(e) {
const value = e.value;
document.getElementById('tb_2_change').innerText
	= value;
}