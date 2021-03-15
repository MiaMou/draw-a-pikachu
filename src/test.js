const string = `/* 画一个海绵宝宝
* 首先画一个背景
*/
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  .skin {
    background: #ffe600;
    min-height: 60vh;
    position: relative;
  }
  /* 接下来画鼻子
 */
  .nose {
    width: 70px; 
    height: 100px;
    position: absolute;
    border-radius: 80%;
    left: 50%;
    top: 200px;
    background-color:#000;
    margin-left: -35px;
    z-index: 2;
  }
  .nose::after {
    position: absolute;
    content: " ";
    width:60px; 
    height:100px;
    background:#ffe600;
    border-radius: 80%;
    left: 5px;
    top: 5px;
    z-index:5;
  }
  /* 接下来画眼睛
  */
  .eye {
    width: 140px;
    height: 140px;
    position: absolute;
    left: 50%;
    top: 110px;
    margin-left: -70px;
    background: #fff;
    border-radius: 50%;
    border: 6px solid #000;
  }
  .eye.left{
    transform: translateX(-70px);
  }
  .eye.right{
    transform: translateX(70px);
  }
  .eye.left::before { 
    content: '';
    border: 5px solid #000; 
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 50%; 
    background: #64c5f2;
    position: relative;
    top: 30px;
    left: 50px; 
  }
  .eye.left::after {
    content: " ";
    width: 30px;
    height: 30px;
    display: block;
    background-color: #000;
    border-radius:50%;
    position: absolute;
    top: 46px;
    left: 66px;  
  }
  .eye.right::before { 
    content: '';
    border: 5px solid #000; 
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 50%; 
    background: #64c5f2;
    position: relative;
    top: 30px;
    left: 20px; 
  }
  .eye.right::after {
    content: " ";
    width: 30px;
    height: 30px;
    display: block;
    background-color: #000;
    border-radius:50%;
    position: absolute;
    top: 46px;
    left: 34px;  
  }
  /* 接下来画眼睫毛
  */
  .eyelashes.left {
    position: absolute;
    top: -30px;
      left: 60px;
    width: 8px;
    height: 25px;
    background: #000;
  }
  .eyelashes.left::before {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 30px;
      width: 8px;
    height: 25px;
      background: #000;
    transform: rotate(30deg);
  }
  .eyelashes.left::after {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: -30px;
      width: 8px;
    height: 25px;
      background: #000;
      transform: rotate(-30deg);
  }
  .eyelashes.right {
    position: absolute;
    top: -30px;
      left: 60px;
    width: 8px;
    height: 25px;
    background: #000;
  }
  .eyelashes.right::before {
    content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: -30px;
      width: 8px;
    height: 25px;
      background: #000;
      transform: rotate(-30deg);
  }
  .eyelashes.right::after {
    content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 30px;
      width: 8px;
    height: 25px;
      background: #000;
      transform: rotate(30deg);
  }
  /* 接下来画脸颊和小雀斑
  */
  .face {
    width: 60px;
      height: 60px;
      position: absolute;
    left: 50%;
    top: 110px;
    margin-left: -30px;
    margin-top: 100px;
      border: 5px solid #fa3c14;
      border-radius: 50px;
      background: #ffe600;
  }
  .face.left{
    transform: translateX(-120px);
  }
  .face.right{
    transform: translateX(120px);
  }
  .face::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 10%;
      width: 40px;
      height: 40px;
      background: #ffe600;
      z-index: 2;
  }
  .spot {
      display: block;
      position: absolute;
      left: 15%;
      top: 30%;
      width: 10px;
      height: 10px;
      background-color: #fa3c14;
      border-radius: 50%;
      z-index: 5;
  }
  .spot::before {
      content: '';
      display: block;
      position: absolute;
      left: 15px;
    top: -10px;
      width: 10px;
      height: 10px;
      background-color: #fa3c14;
      border-radius: 50%;
      z-index: 5;
  }
  .spot::after {
      content: '';
      display: block;
      position: absolute;
      left: 30px;
      width: 10px;
      height: 10px;
      background-color: #fa3c14;
      border-radius: 50%;
      z-index: 5;
  }
  /* 接下来画一个微笑的嘴巴
  */
  .smile {
      width: 300px;
      height: 120px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -150px;
      border: 5px solid #000;
      border-color: #000 transparent transparent transparent;
      border-radius: 50% / 100px 100px 10px 10px;
      transform: rotate(180deg);
      z-index: 2;
  }
  .smile::before {
      content: '';
      position: absolute;
      top: 15px;
      left: 28px;
      width: 20px;
      height: 24px;
    border: 5px solid transparent;
    border-left: 5px solid #000;
    transform: rotate(-30deg);
  }
  .smile::after {
      content: '';
      position: absolute;
      top: 24px;
      right: 18px;
      width: 20px;
      height: 24px;
    border: 5px solid transparent;
    border-left: 5px solid #000;
    transform: rotate(30deg);
  }
  /* 最后画两颗大门牙
  */
  .teeth {
    width: 50px;
      height: 50px;
    position: absolute;
    left: 50%;
    top: 315px;
    margin-left: -25px;
      background: white;
      border-radius: 5px;	
      border: 5px solid #000;
  }
  .teeth.left {
      transform: translateX(-30px) rotate(5deg);
  }
  .teeth.right {
      transform: translateX(30px) rotate(-5deg);
  } 
  /* 大功告成！
  */ 
`
const player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    n: 1,
    // 事件
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    // 初始化
    init(){
        // demo写文本，demo2写样式标签，同时以文本的形式和html的形式展示一个style标签
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.bindEvents()   
        player.play() 
    },    
    bindEvents(){    
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }       
        }     
    },
    run(){
        player.n += 1
        if(player.n > string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play(){
        // fix 多次点击播放会卡死
        window.clearInterval(player.id)
        player.id = setInterval(player.run, player.time)
    },
    pause(){
        window.clearInterval(player.id)
    },
    slow(){
        player.pause()
        player.time = 300
        player.play()
    },
    normal(){
        player.pause()
        player.time = 100
        player.play()
    },
    fast(){
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()
