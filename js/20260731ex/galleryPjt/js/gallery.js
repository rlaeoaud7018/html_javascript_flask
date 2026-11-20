let pics = ['pic_01.jpg', 'pic_02.jpg', 'pic_03.jpg', 
            'pic_04.jpg', 'pic_05.jpg', 'pic_06.jpg', ]

let currentIdx = 0;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!')

    addEvents();

const changeImg = (tagEle, picArr, idx) => {
    console.log('changeImg() CALLED!')

    tagEle.setAttribute('src', './imgs/pics,${picArr[idx]}')
}

const addEvents = () => {
    console.log('addEvents CALLED!')
    
        let left_btn = document.querySelector('#wrap li.left_arrow > a');
        left_btn.addEventListener('click', function() {         //addEventListener = 어떠한 객체의 이벤트가 발생했는지 감지하는게 리스너
            console.log('left_btn CLICKED!')                    //function = 리스너가 이벤트를 들었을 때 실행되는 함수가 핸들러
                                                            // 리스너와 핸들러는 다른 함수로도 가능
            currentIdx--;  // 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 5 -> 4 .........
            if (currentIdx >= 0) currentIdx = pics.length-1; 
        
            changeImg(document.querySelector('#wrap li.pic > img'), pics, currentIdx);
    
            })                                                      

        let right_btn = document.querySelector('#wrap li.right_arrow > a');
        right_btn.addEventListener('click', function() {
            console.log('right_btn CLICKED!')
    
            currentIdx++;  // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 0 -> 1 .........
            if (currentIdx >= pics.length) currentIdx = 0;  // if문에서 조건이 하나일 경우 한줄로 써도 무방
        
            changeImg(document.querySelector('#wrap li.pic > img'), pics, currentIdx);

        })
    })
}