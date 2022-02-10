const warp = document.querySelector(".warp"),
mainPage = document.getElementById("main"),
inGame = document.getElementById("in-game"),
zone = inGame.querySelector(".zone"),
score = inGame.querySelector(".score"),
bestScore = inGame.querySelector(".best-score"),
time = inGame.querySelector(".time"),
bestScoreMain = warp.querySelector(".best-score-main"),
crossHairFlowArea = document.getElementById("cross-hair"),
optionPage = document.getElementById("option"),
modeBtnInner = warp.querySelector(".mode-btn-inner"),
btnStandard = warp.querySelector(".btn-standard"),
btnFlick = warp.querySelector(".btn-flick"),
btnTracking = warp.querySelector(".btn-tracking"),
btnStart = warp.querySelector(".btn-start"),
btnOption = warp.querySelector(".btn-option"),

btnBack = warp.querySelector(".btn-back"),
btnLevel = warp.querySelector(".btn-level"),
btnCrossHair = warp.querySelector(".btn-cross-hair"),
levelArea = warp.querySelector(".level-area"),
CrossHairArea = warp.querySelector(".cross-hair-area"),
btnCross = warp.querySelector(".btn-cross-select"),
btnDot = warp.querySelector(".btn-dot-select"),
optionCorss = warp.querySelector(".option-corss"),
optionDot = warp.querySelector(".option-dot"),

cross = document.getElementById("cross"),
dot = document.getElementById("dot")

btnStandardLevel1 = warp.querySelector(".btn-standard-easy"),
btnStandardLevel2 = warp.querySelector(".btn-standard-normal"),
btnStandardLevel3 = warp.querySelector(".btn-standard-master"),
btnFlickLevel1 = warp.querySelector(".btn-flick-easy"),
btnFlickLevel2 = warp.querySelector(".btn-flick-normal"),
btnFlickLevel3 = warp.querySelector(".btn-flick-master"),
btnTrackingLevel1 = warp.querySelector(".btn-tracking-easy"),
btnTrackingLevel2 = warp.querySelector(".btn-tracking-normal"),
btnTrackingLevel3 = warp.querySelector(".btn-tracking-master")

let gameMode = 1;
let game1Level = 1;
let game2Level = 1;
let game3Level = 1;

let game1score = 0;
let game2score = 0;
let game3score = 0;
let game1bestScore = 0;
let game2bestScore = 0;
let game3bestScore = 0;

btnStandard.addEventListener( "click", ()=>{modeChange(1);} );  //모드변경
btnFlick.addEventListener( "click", ()=>{modeChange(2);} );
btnTracking.addEventListener( "click", ()=>{modeChange(3);} );

btnStandardLevel1.addEventListener("click", ()=>{ //난이도변경
  levelChange1(btnStandardLevel1, btnStandardLevel2, btnStandardLevel3, 0)});
btnStandardLevel2.addEventListener("click", ()=>{
  levelChange1(btnStandardLevel2, btnStandardLevel1, btnStandardLevel3, 1)});
btnStandardLevel3.addEventListener("click", ()=>{
  levelChange1(btnStandardLevel3, btnStandardLevel1, btnStandardLevel2, 2)});
btnFlickLevel1.addEventListener("click", ()=>{
  levelChange2(btnFlickLevel1, btnFlickLevel2, btnFlickLevel3, 0)});
btnFlickLevel2.addEventListener("click", ()=>{
  levelChange2(btnFlickLevel2, btnFlickLevel1, btnFlickLevel3, 1)});
btnFlickLevel3.addEventListener("click", ()=>{
  levelChange2(btnFlickLevel3, btnFlickLevel1, btnFlickLevel2, 2)});
btnTrackingLevel1.addEventListener("click", ()=>{
  levelChange3(btnTrackingLevel1, btnTrackingLevel2, btnTrackingLevel3, 0)});
btnTrackingLevel2.addEventListener("click", ()=>{
  levelChange3(btnTrackingLevel2, btnTrackingLevel1, btnTrackingLevel3, 1)});
btnTrackingLevel3.addEventListener("click", ()=>{
  levelChange3(btnTrackingLevel3, btnTrackingLevel1, btnTrackingLevel2, 2)});

btnStart.addEventListener("click", ()=>{gameStart()}); //게임시작

btnOption.addEventListener( "click", ()=>{PageChange(mainPage, optionPage);} );
btnBack.addEventListener( "click", ()=>{PageChange(optionPage, mainPage);} );

btnLevel.addEventListener( "click", ()=>{
  optionChane(btnLevel, btnCrossHair, levelArea, CrossHairArea);} );
btnCrossHair.addEventListener( "click", ()=>{
  optionChane(btnCrossHair, btnLevel, CrossHairArea, levelArea);} );
btnCross.addEventListener( "click", ()=>{
  optionChane(btnCross, btnDot, optionCorss, optionDot);} );
btnDot.addEventListener( "click", ()=>{
  optionChane(btnDot, btnCross, optionDot, optionCorss);} );

document.addEventListener("keydown", checkKeyPressed, false); //키보드 입력

function PageChange(a,b){ //메인 <-> 옵션 페이지 전환
  a.style.display = 'none';
  b.style.display = 'flex';
  cross.style.display = 'block';
  dot.style.display = 'none';
  corssDotShow();
};
function optionChane(a,b,c,d){ //레벨 <-> 크로스헤어 페이지 전환
  a.classList.add('on');
  b.classList.remove('on');
  c.style.display = 'flex';
  d.style.display = 'none';
  corssDotShow();
};
function removeModeBtnSelcet(){ //모드 버튼 선택제거
  btnStandard.classList.remove('on');
  btnFlick.classList.remove('on');
  btnTracking.classList.remove('on');
};
function modeChange(e){ //게임 모드 변경
  gameMode = e;
  removeModeBtnSelcet()
  if(gameMode == 1){
    btnStandard.classList.add('on');
    bestScoreChange();
  }else if(gameMode == 2){
    btnFlick.classList.add('on');
    bestScoreChange();
  }else{
    btnTracking.classList.add('on');
    bestScoreChange();
  };
};
function levelChange1(a,b,c,d){  //난이도변경
    a.classList.add('on'); b.classList.remove('on'); c.classList.remove('on');
    game1Level = d;};
function levelChange2(a,b,c,d){  //난이도변경
  a.classList.add('on'); b.classList.remove('on'); c.classList.remove('on');
  game2Level = d;};
function levelChange3(a,b,c,d){  //난이도변경
  a.classList.add('on'); b.classList.remove('on'); c.classList.remove('on');
  game3Level = d;};

function corssDotShow(){ //크로스 - 도트 전환(옵션페이지)
  if(optionCorss.style.display == 'flex'){
    cross.style.display = 'block';
    dot.style.display = 'none';
  }else if(optionDot.style.display == 'flex'){
    cross.style.display = 'none';
    dot.style.display = 'block';
  }
};

function bestScoreChange(){ //모드변경,게임 종료시 베스트스코어 업뎃
  if(game1score > game1bestScore) {game1bestScore = game1score;};
  if(game2score > game2bestScore) {game2bestScore = game2score;};
  if(game3score > game3bestScore) {game3bestScore = game3score;};

  if(gameMode == 1){
    bestScore.innerHTML = 'best score : '+ game1bestScore;
    bestScoreMain.innerHTML = 'best score : '+ game1bestScore;
  };
  if(gameMode == 2){
    bestScore.innerHTML = 'best score : '+ game2bestScore;
    bestScoreMain.innerHTML = 'best score : '+ game2bestScore;
  };
  if(gameMode == 3){
    bestScore.innerHTML = 'best score : '+ game3bestScore;
    bestScoreMain.innerHTML = 'best score : '+ game3bestScore;
  };
};

zone.addEventListener("mousedown",()=>{marksEffect(event)});

function marksEffect(event){//마크 이벤트(총알자국),바닥클릭
  event.preventDefault();
  const newDiv = document.createElement('div');
  newDiv.className = 'mark';
  newDiv.style.left  = event.offsetX + 'px';
  newDiv.style.top = event.offsetY + 'px';
  var opacity =1;
  setInterval(hide,500);//점점사라짐
  function hide(){
		if(opacity>0){
			opacity = opacity-0.2;
			newDiv.style.opacity = opacity;
		}else{newDiv.style.display = 'none'};
	};
  zone.append(newDiv);
  if(gameMode == 1){ //빗나갓을 시 점수 -1
    game1score = game1score -1;
    score.innerHTML = 'score : '+ game1score;
  };
  if(gameMode ==2){
    game2score = game2score -1;
    score.innerHTML = 'score : '+ game2score;
  }
  if(gameMode ==3){
    game3score = game3score -1;
    score.innerHTML = 'score : '+ game3score;
  };
};

function checkKeyPressed(e) {//게임끝내기
	if(e.keyCode === 27 && inGame.style.display == 'block'){
    crossHairFlowArea.style.width = '1000px';
    crossHairFlowArea.style.height = '700px';
    cross.style.top = '370px'; cross.style.left = '650px';
    dot.style.top = '370px'; dot.style.left = '650px';
    PageChange(inGame, mainPage);
    ready.style.display = 'block';
    while (zone.hasChildNodes()) {  //모든 표적 삭제
      zone.removeChild(zone.firstChild);
    };
    bestScoreChange();
    game1score = 0; score.innerHTML = 'score : 0';
    game2score = 0; score.innerHTML = 'score : 0';
    game3score = 0; score.innerHTML = 'score : 0';
    end.style.display = 'none';
  };
};

function gameStart(){ //게임시작
  mainPage.style.display = 'none';
  inGame.style.display = 'block';
  crossHairFlowArea.style.width = '100%';
  crossHairFlowArea.style.height = '100%';
  //마우스따라움직임
  function crossFun(x) {//크로스
    cross.style.left = x.clientX + "px";
    cross.style.top = x.clientY + "px";
  };
  if (document.addEventListener){
    inGame.addEventListener("mousemove", crossFun);
  };
  function dotFun(x) {//도트
    dot.style.left = x.clientX + "px";
    dot.style.top = x.clientY + "px";
  };
  if (document.addEventListener){
    inGame.addEventListener("mousemove", dotFun);
  };
  time.innerHTML = "30";
};

const ready = inGame.querySelector(".ready")//게임시작 전 준비화면
end = inGame.querySelector(".end"),
yourScore = inGame.querySelector(".your-score"),

ready.addEventListener("mousedown",()=>{readyClick(event)});

function readyClick(event){
  event.stopPropagation();
  ready.style.display = 'none';
  if(gameMode == 1){
    standardStart()
  };
  if(gameMode == 2){
    flickStart();
  };
  if(gameMode == 3){
    trackingStart();
  };
  var timeOut = setInterval(timeMinus,1000);
  function timeMinus(){
    time.innerHTML = time.innerHTML -1;
    if(time.innerHTML == 0){
      clearInterval(timeOut);
      end.style.display = 'block';
      yourScore.innerHTML = 'your '+ score.innerHTML;
    };
  };
  document.addEventListener("keydown", endGame, false);//셋인터벌 정지
  function endGame(e){
    if(e.keyCode === 27){
      clearInterval(timeOut);
    };
  }; 
};

function standardStart(){ //스텐다드 모드
  var standardPlateAdd = setInterval(standardStartPlay,320);
  function standardStartPlay(){
    const randW = Math.floor(Math.random() * 850) + 50;
    const randH = Math.floor(Math.random() * 500) + 80;
    const plate = document.createElement('div');
    plate.className = 'plate';
    plate.style.transform = 'scale(' + (1 - game1Level *0.2) + ')';
    plate.style.transition = '' + (9 - game1Level*3) + 's';
    plate.style.left  = randW + 'px';
    plate.style.top = randH + 'px';
    plate.addEventListener("mousedown", ()=>{plateShot(event)});
    function plateShot(event){
      event.stopPropagation();
      plate.style.display = 'none';
      game1score = game1score +1;
      score.innerHTML = 'score : '+ game1score;
    };
    setInterval(scale,100);
    function scale(){
      plate.style.transform = 'scale(0.0)';
    };
    zone.append(plate);
    if(time.innerHTML == 0){
      clearInterval(standardPlateAdd);
    };
  };
  document.addEventListener("keydown", clearStandard, false);//셋인터벌 정지
  function clearStandard(e){
    if(e.keyCode === 27){
      clearInterval(standardPlateAdd);
    };
  }; 
};

function flickStart(){ //플릭 모드
  const randW = Math.floor(Math.random() * 850) + 50;
  const randH = Math.floor(Math.random() * 500) + 80;
    const plate = document.createElement('div');
    plate.style.transform = 'scale(' + (1 - game2Level*0.4) + ')';
    plate.className = 'plate';
    plate.style.left  = randW + 'px';
    plate.style.top = randH + 'px';
    zone.append(plate);
    plate.addEventListener("mousedown", ()=>{plateShot(event)});

    function plateShot(event){
      const randW = Math.floor(Math.random() * 850) + 50;
      const randH = Math.floor(Math.random() * 500) + 80;
      event.stopPropagation();
      plate.style.left  = randW + 'px';
      plate.style.top = randH + 'px';
      game2score = game2score +1;
      score.innerHTML = 'score : '+ game2score;
    };
};

function trackingStart(){ //트래킹 모드
    const plate = document.createElement('div');
    plate.style.transform = 'scale(' + (0.9 - game3Level*0.1) + ')';
    plate.className = 'plate';
    plate.style.left  = '500px';
    plate.style.top = '320px';
    plate.style.transition = '' + (1.5 - game3Level*0.1) + 's';
    setInterval(trackingMove,230);
    zone.append(plate);

    function trackingMove(){
      const randW = Math.floor(Math.random() * 850) + 50;
      const randH = Math.floor(Math.random() * 40) + 300;
      plate.style.left  = randW + 'px';
      plate.style.top = randH + 'px';
    };
    plate.addEventListener("mousedown", ()=>{plateShot(event)});
    function plateShot(event){
      event.stopPropagation();
      game3score = game3score +1;
      score.innerHTML = 'score : '+ game3score;
    };
};
