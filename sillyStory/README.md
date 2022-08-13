MDN의 JavaScript first step 파트를 공부하고 그 관련 과제를 풀었다.
https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Silly_story_generator

TIL

<h2>replace와 replaceAll의 차이점</h2>
replace는 문자 하나만 치환한다. 그렇기 때문에 xItem이 두개가 치환되야해서 두개가 필요하다.
replace는 전달받은 문자를 수정하는 것 (X) 새로운 값을 만들어 반환하는 것(O)
즉, 새로 반환된 문자를 사용하지않으면 기존의 문자는 그대로 유지된다.
지금의 경우, 함수가 사용되지않았다면 :insertx:가 바뀌지않고 고대로 유지되었을 것이란 뜻 같다.

replaceAll은 최신형이라 오류가 날 수 도 있다. 이건 한번에 모든걸 치환할 수 있는것이다.
replaceAll을 썼으면 xItem을 두번 replace할 필요 없이 한줄만으로 바꿀 수 있었다.

<h2>const와 let</h2>
변수선언에는 기본적으로 const를 사용한다. const를 사용하여 의도치않은 재할당을 방지할 수 있기 때문에.
변수가 재할당 될 가능성이 있는 것에만 let을 사용한다.
var는 중복선언이 가능해서 좋지않다.
