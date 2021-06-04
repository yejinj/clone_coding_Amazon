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


// 백투탑 (scroll to Top)버튼 속성 지정
const $backToTop = document.querySelector(".backToTop");

$backToTop.addEventListener("click", function () {
	window.scroll({
	  top: 0,
	  left: 0,
	  behavior: "smooth",
	});
  });

// 클릭하면 등장하는 div No.1
function view(opt) {
	if(opt) {
		hidden_div.style.display = "block";
	}
	else {
		hidden_div.style.display = "none";
	}
  }

// 클릭하면 등장하는 div (언어)
function view_language(opt) {
	if(opt) {
		hidden_div_language.style.display = "block";
	}
	else {
		hidden_div_language.style.display = "none";
	}
}

// html dom 이 다 로딩된 후 실행된다.
$(document).ready(function(){

	// memu 클래스 바로 하위에 있는 a 태그를 클릭했을때
	$(".menu>a").click(function(){
		
		// 클릭되었을 때가 아니면 숨기기
		$(this).next("ul").toggleClass("hide");
	});
});

// 페이드인 효과
$( document ).ready( function() {
	$( 'div.fi' ).fadeIn( 2000 );
  } );

// 페이드아웃 효과
$( document ).ready( function() {
	$( 'div.fi' ).fadeOut( 6000 );
  } );

// div 클릭하면 회원가입 섹션 등장
function ClickFunction(idMyDiv){
	var objDiv = document.getElementById(idMyDiv);
	if(objDiv.style.display=="block"){ objDiv.style.display = "none"; }
	 else{ objDiv.style.display = "block"; }
}

input.oninput = function() {
	result.innerHTML = "put an exact value";
};

// 첨가
function printName()  {
	const btn_view_03 = document.getElementById('btn_view_03').value;
	document.getElementById("result").innerText = "! Please enter a valid US zip code";
  }