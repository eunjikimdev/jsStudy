const customName = document.getElementById('customname'); //enter custom name 텍스트 필드값 저장
const randomize = document.querySelector('.randomize'); //Generate random story 버튼 오브젝트 저장
const story = document.querySelector('.story'); // p엘리먼트는 스토리 변수에 저장하며 해당 엘리먼트에는 랜덤한 이야기가 복사됨

function randomValueFromArray(array){ //배열을 가져와서 배열이 가진 항목중 하나를 랜덤하게 반환
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas',
];

const insertY = [
  'the soup kitchen',
  'Disneyland',
  'the White House'
  ];

const insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  //const로 바꾸니 작동이 되지 않았다. let은 변수의 재할당이 가능함. const는 변수 재선언, 재할당 불가.

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:",xItem);
  newStory = newStory.replace(":insertx:",xItem); 
  /*replace와 replaceAll의 차이점 : 
  replace는 문자 하나만 치환한다. 그렇기 때문에 xItem이 두개가 치환되야해서 두개가 필요하다.
  replace는 전달받은 문자를 수정하는 것 (X) 새로운 값을 만들어 반환하는 것(O)
  즉, 새로 반환된 문자를 사용하지않으면 기존의 문자는 그대로 유지된다.
  지금의 경우, 함수가 사용되지않았다면 :insertx:가 바뀌지않고 고대로 유지되었을 것이란 뜻 같다.

  replaceAll은 최신형이라 오류가 날 수 도 있다. 이건 한번에 모든걸 치환할 수 있는것이다.
  replaceAll을 썼으면 xItem을 두번 replace할 필요 없이 한줄만으로 바꿀 수 있었다.
  
  */
  newStory = newStory.replace(":inserty:",yItem);
  newStory = newStory.replace(":insertz:",zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286)+' stones';
    const temperature =  Math.round((94-32)*(5/9)) + 'centigrade';

    newStory = newStory.replace('94 farenheit',temperature);
    newStory = newStory.replace('300 pounds', weight);
//storyText.replace하지않고 newStroy.replace하는 이유가 있을까?
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

/*변수선언에는 기본적으로 const를 사용한다. const를 사용하여 의도치않은 재할당을 방지할 수 있기 때문에.
변수가 재할당 될 가능성이 있는 것에만 let을 사용한다.
var는 중복선언이 가능해서 좋지않다.*/