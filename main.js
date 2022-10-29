const time = document.getElementById('time');
const startButton = document.getElementById('start');
const touchButton = document.getElementById('touch');
const touch_num = document.getElementById('touch_num');
const goalButton = document.getElementById('goal');
const container = document.getElementById('container');
const second_container = document.getElementById('second-container');
const realtime = document.getElementById('realtime');
const penalty = document.getElementById('penalty');
const record = document.getElementById('record');

// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
// タイムアウトID
let timeoutID;
// 追加時間
let addtime = 0;

goalButton.disabled = true;

// 時間を表示する関数
function displayTime(){
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

    time.textContent = `${m}:${s}.${ms}`;
    timeoutID = setTimeout(displayTime, 10);
}

// スタートボタンがクリックされたら時間を進める
startButton.addEventListener('click', () =>{
    startButton.disabled = true;
    goalButton.disabled = false;
    startTime = Date.now();
    displayTime();
});

// 減点ボタンがクリックされたら時間を10秒追加する
touchButton.addEventListener('click', function(){
    addtime += 1;
    touch_num.textContent = `${addtime}回`;
});

// 結果ボタンがクリックされたら結果画面を表示
goalButton.addEventListener('click', function(){
    clearTimeout(timeoutID);
    container.setAttribute("style","display:none");
    second_container.setAttribute("style","display:block");

    var currentTime = new Date(Date.now() - startTime + stopTime);
    var m = String(currentTime.getMinutes()).padStart(2, '0');
    var s = String(currentTime.getSeconds()).padStart(2, '0');
    var ms = String(currentTime.getMilliseconds()).padStart(3, '0');

    realtime.textContent = `${m}:${s}.${ms}`;

    penalty.textContent = `${addtime}回`;

    var currentTime = new Date(Date.now() - startTime + stopTime + (addtime*10000));
    var m = String(currentTime.getMinutes()).padStart(2, '0');
    var s = String(currentTime.getSeconds()).padStart(2, '0');
    var ms = String(currentTime.getMilliseconds()).padStart(3, '0');

    record.textContent = `${m}:${s}.${ms}`;

});
