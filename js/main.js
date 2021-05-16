// 슬라이드를 사용하기 위해 myswiper을 초기화한다
new Swiper('.myswiper', {
	infinite : true, 
	autoplay : true,
	autoplaySpeed: 5000,
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