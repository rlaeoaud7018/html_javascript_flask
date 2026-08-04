let pics = ['pic_01.jpg', 'pic_02.jpg', 'pic_03.jpg', 
            'pic_04.jpg', 'pic_05.jpg', 'pic_06.jpg'];

let currentIdx = 0;

document.addEventListener('DOMContentLoaded', function() {
   console.log('DOCUMENT READY!!');

   addEvents();

});

const changeImg = (tagEle, picArr, idx) => {
    console.log('changeImg() CALLED!!');

    tagEle.setAttribute('src', `./imgs/pics/${picArr[idx]}`);

}

const addEvents = () => {
    console.log('addEvents() CALLED!!');

    let left_btn = document.querySelector('#wrap li.left_arrow > a');
   left_btn.addEventListener('click', function() {
        console.log('left_btn CLICKED!!');

        currentIdx--;  // 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 5 ....
        if (currentIdx < 0) currentIdx = pics.length - 1;

        changeImg(document.querySelector('#wrap li.pic > img'), pics, currentIdx);

   });  

   let right_btn = document.querySelector('#wrap li.right_arrow > a');
   right_btn.addEventListener('click', function() {
        console.log('right_btn CLICKED!!');
        
        currentIdx++;  // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 0 -> 1 .......
        if (currentIdx >= pics.length) currentIdx = 0;

        changeImg(document.querySelector('#wrap li.pic > img'), pics, currentIdx);

   }); 

}