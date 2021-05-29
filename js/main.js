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

var btn = document.getElementById('input-group-addon-button');

btn.onclick = function() {
  alert('사이트에 방문해보세요');
}

var mouseover = document.getElementById('whereto');

mouseover.mouseover = function() {
}

// mysidebar

function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

const $backToTop = document.querySelector(".backToTop");

$backToTop.addEventListener("click", function () {
	window.scroll({
	  top: 0,
	  left: 0,
	  behavior: "smooth",
	});
  });

//   첨가
function view(opt) {
	if(opt) {
		hidden_div.style.display = "block";
	}
	else {
		hidden_div.style.display = "none";
	}
  }

function view_language(opt) {
	if(opt) {
		hidden_div_language.style.display = "block";
	}
	else {
		hidden_div_language.style.display = "none";
	}
}

function view_language_2(opt) {
	if(opt) {
		hidden_div_language_2.style.display = "block";
	}
	else {
		hidden_div_language_2.style.display = "none";
	}
}

// adding

// html dom 이 다 로딩된 후 실행된다.
$(document).ready(function(){
	// memu 클래스 바로 하위에 있는 a 태그를 클릭했을때
	$(".menu>a").click(function(){
		$(this).next("ul").toggleClass("hide");
	});
});