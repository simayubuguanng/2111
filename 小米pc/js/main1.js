// 轮波图
// 获取小圆圈，图片，按钮
var imgs = document.querySelectorAll('.carousel-inner>img')
var   prev = document.getElementsByClassName('prev')
var   next = document.getElementsByClassName('next')
var   circleBtn = document.getElementsByClassName('btn')
//    循环遍历
  for (var i = 0; i < circleBtn.length; i++) {
        circleBtn[i].setAttribute('index', i)
        circleBtn[i].onclick = function () {
         var index = this.getAttribute('index')
        // 点击那个按钮就给那个按钮切换背景颜色
        for(var j = 0;j<circleBtn.length;j++){
            // 排他思想
            circleBtn[j].style.background="none"
            imgs[j].style.zIndex = "0"
        }
    //    点击使颜色变成灰色
        this.style.background ="grey"
        // 利用层级点击切换图片
       imgs[index].style.zIndex = "1"
       prev.onclick = function(){
          
       }
        
    }
 }
 
//  声明变量
var num = 0
//  定时器
setInterval(function(){
    num++
    // num大于4时让num=0
    if(num>4){
        num = 0
    }
 for(var j = 0;j<circleBtn.length;j++){
            // 排他思想
            circleBtn[j].style.background="none"
            imgs[j].style.zIndex = "0"
     }
    //    点击使颜色变成灰色
     circleBtn[num].style.background ="grey"
        // 利用层级点击切换图片
     imgs[num].style.zIndex = "1"

},1000)


