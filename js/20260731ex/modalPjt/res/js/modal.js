document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!!');

    addEvents();
    
});

const addEvents = () => {
    console.log('addEvents() CALLED!!');

    /*
        1. 엘리먼트 찾기!
        2. 찾은 엘리먼트에 리스너 달기!
        3. 할일 명시!
    */

    let btn = document.querySelector('#wrap > div.btn > a');
    btn.addEventListener('click', function() {
        console.log('btn CLICKED!!');

        // let modal = document.querySelector('#modal_bg');
        // modal.style.display = 'block';

        showHideEleForModal();

    });

    let modal = document.querySelector('#modal_bg');
    modal.addEventListener('click', function() {
        console.log('modal CLICKED!!');

        // modal.style.display = 'none';

        showHideEleForModal();

    });

}

const showHideEleForModal = () => {
    console.log('showHideEle() CLALLED!!');

    let ele = document.querySelector('#modal_bg');


    // if (ele.style.display === '' || ele.style.display === 'none') {
    //     ele.style.display = 'block';
    // } else {
    //     ele.style.display = 'none';
    // }

    // falsy
    if (!ele.style.display || ele.style.display === 'none') {
        ele.style.display = 'block';
    } else {
        ele.style.display = 'none';
    }

}