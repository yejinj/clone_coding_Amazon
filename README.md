## 20211148 조예진

 #### (1) 어떤 웹사이트를 클론 코딩한 것인지   
 https://www.amazon.com/    
 아무것도 설정하지 않았을 때 보이는 초기의 화면을 클론했습니다.
 
 ####  (2) 주요하게 봐야 할 특성에 어떤 것이 있는지   
 * slide
   * 이미지 슬라이드 (자동 넘어가기, 손으로 넘기기, 양 옆 버튼으로 넘기기)
   * 두 개의 아이콘 슬라이드 (위와 같은 기능, 아이콘을 넘기면서 선택 가능)   
 
 * location form
   * 헤더 상단의 Deliver to Republic of Korea를 클릭하면 숨겨졌던 div가 등장
   * apply 버튼 왼쪽의 input 박스에 입력을 시작하면, 경고 문구가 등장
   * select 박스의 항목 중 하나를 선택하면 헤더 상단의 국가가 선택한 항목으로 바뀜
   * done을 클릭하면 나타났던 div가 사라짐   
   
 * mouseover event
   * 헤더 상단의 미국 국기에 마우스를 갖다대면 숨겨졌던 div가 등장
   * 헤더 상단의 Hello, sign in 영역에 마우스를 갖다대면 숨겨졌던 div가 등장   
   
 * appear event
   * 새로고침 시 헤더의 Hello, sign in 밑에 div가 등장했다 사라짐
   * 등장 시간 : 0.5초 후 , 소멸 시간 : 4초 후
   
 * sidebar
   * 헤더 하단의 All을 클릭하면 좌측에서 사이드바가 서서히 등장   
 
 ####  (3) (라이브러리를 사용하였다면) 어떤 라이브러리를 사용하였는지 - 등을 설명
 * jquery
   * myswiper 안에 swiper-wrapper가 있고, 그 안에 이미지 or 아이콘을 나열해 넘길 수 있도록 함
   * 아이콘 슬라이드에서는 한 번에 5개의 아이콘이 보이도록 지정
   
 ### 감사합니다!
