# LMSSU

오픈소스기반기초설계

8조

프로젝트 매뉴얼

팀원: 최규현(20182662)
전종원(20182651)
박현수(20182618)
이승호(20182641)

<br>
1. 프로젝트 소개 <br>
• 프로젝트 명 : LMSSU <br> <br>
• 기획 의도 
<br>
기존에 있는 LMS 시스템은 학생들이 학업 일정을 확인하는 데 있어서 어려움이 많고, 교내 및 학과 공지사항을 확인하기 번거로운 점이 있다. 실제로 많은 숭실대학교 학생들이 불편함을 느낀 경험이 있으며, 학업 일정을 정리하고자 아예 주차별 과목 일정을 직접 수기로 작성하는 학생도 있었다. 대표적인 문제점으로는 다음 두 가지가 존재한다.

1 - 1) 본인이 수강하는 과목들에 대하여 일정 정보를 한 눈에 알아보기 힘들다.
스마트캠퍼스 LMS 마이페이지에 가면 수강 과목에 대하여 리스트 형태로 정보가 떠있긴 하지만 개수를 파악할 수 있을 뿐, 구체적인 정보를 파악하기 힘들다. 이런 정보들은 직접 과목별 홈에 들어가야만 확인이 가능한데 한 학기에 평균 5~6개의 과목을 수강하는 학생 입장에서는 불편함을 느낄 수 밖에 없다.

1 - 2) 학교 공지사항 확인이 번거롭다.
본교 학생들은 학교 관련 공지사항을 다음 세 가지 사이트에서 확인할 수 있다. 숭실대학교 홈페이지, 학과 홈페이지, 펀시스템 홈페이지이다. 학생들은 자신이 참여할 수 있는 프로그램이나 활동들에 대한 정보를 놓치지 않기 위해선 수시로 공지사항을 확인해 줘야 한다. 하지만 해당 정보들은 각기 다른 홈페이지에서 확인을 해야하기에 학생들은 여러 홈페이지를 옮겨 다니며 공지사항을 체크해야 한다는 번거로움이 있다. 이로 인해 필요한 정보들을 학생들이 놓치는 일이 자주 일어나기도 한다.
 
팀원들은 실제로 위에서 제기한 문제점들에서 불편함을 느꼈던 경험이 있다. 또, 이러한 불편함은 주변 학우들에게도 많은 공감을 얻을 수 있었다. 우리는 이런 불편함들을 해소하고자 하였다. 강의 콘텐츠들과 공지사항들을 한 눈에 직관적으로 확인할 수 있는 웹 페이지를 만들면 학우들의 학업 일정 관리에 도움이 될 것이라 판단했고, 본 프로젝트를 기획하게 되었다.

<br><br>

• 작품 개요 <br>
LMSSU는 크게 4가지 기능을 제공한다.

첫 번째로, 강의 콘텐츠들의 마감일을 캘린더에서 확인하고 사용자가 직접 시험 일정을 추가하여 캘린더에 표시할 수 있다.

두 번째로, 마감일 3일 이내의 강의, 과제만 보아서 보여준다. 이를 통하여 학생들이 마감 임박한 콘텐츠들을 까먹지 않고 완료할 수 있도록 돕는다.

세 번째로, 주차별 과목 리스트들만 모아놓고, 주차별 과목별로 본인만의 to-do-list를 만들 수 있도록 한다. 이를 통하여 학생들은 일정 관리를 더욱 수월하게 할 수 있다.
 
네 번째로, 학교/학과/펀시스템 공지사항들을 탭으로 구분하여 각각의 공지들을 확인할 수 있도록 함으로써 학생들로 하여금 페이지를 옮겨가며 공지사항을 확인해야 하는 수고를 덜어주었다.
 
데이터 관리는 다음과 같이 진행했다. 
과목, 강의 콘텐츠는 크롤링을 통하여 데이터들을 DB에 저장한다. 그리고 과목 테이블에 update_time 속성을 추가하여 업데이트 시간이 2시간이 넘어가면 크롤링을 통해 정보를 갱신하도록 하여 데이터 최신화를 해주었다. 이를 통하여 사용자들은 2시간 이내의 데이터들을 받아볼 수 있다. 또한, 공지사항의 경우 매번 크롤링을 통해 데이터를 제공한다. 따라서 사용자들은 항상 실시간 데이터를 받아볼 수 있다.

• 프로젝트 아키텍쳐
   ![image](https://user-images.githubusercontent.com/81209525/206213728-17b80742-7b3e-40f6-b505-4d4fdc9b01be.png)

• 기능 구성도
  ![image](https://user-images.githubusercontent.com/81209525/206213742-752ae971-c9f0-4138-8b2f-1547479c7991.png)


<br> <br>

2. 상세 매뉴얼(설치방법 및 사용법)
2 - 1) Git clone : https://github.com/rbgus2002/LMSSU.git (BE)
		https://github.com/Jadest13/LMSSU_FE.git (FE)
2 - 2) FE 설치 후 $ npm i --save --legacy-peer-deps
		 $ npm run dev
2 - 3) BE 설치 후 intellij build -> run
2 - 4) http://localhost:3000/ 접속

 <img width="452" alt="image" src="https://user-images.githubusercontent.com/81209525/206213757-f6e858ac-e0af-407d-baae-c4a2d1f8be52.png">
(실행화면)

<br><br>

3. 프로젝트 개발 참고서적 및 참고 사이트 URL <br>
https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web <br>
https://jsoup.org/apidocs/org/jsoup/Jsoup.html <br>
https://docs.spring.io/spring-data/jpa/docs/current/reference/html <br>
https://spring.io/guides/gs/accessing-data-mysql/ <br><br>


4. 시연 영상 <br>
[Youtube](https://youtu.be/NQos49uvTY8)



[FE GitHub Link](https://github.com/Jadest13/LMSSU_FE)
