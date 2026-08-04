document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!');

    init();


})

function init() {
    console.log('init() CALLED!!')

    // 뷰와 관련된 내용
    initViews();


    // 이벤트와 관련된 내용
    addEvents();

}

let signUpWrap = '';
let signInWrap = '';
let writeWrap  = '';
let listWrap   = '';

function initViews() {
    console.log('initViews() CALLED!!!')

    signUpWrap = document.querySelector('div.sign_up_wrap')
    signInWrap = document.querySelector('div.sign_in_wrap')
    writeWrap = document.querySelector('div.write_wrap')
    listWrap = document.querySelector('div.list_wrap')

}

function addEvents() {
    console.log('addEvents() CALLED!!!')

    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up')
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICKED!!!!!');

        showSelectedView(1);
    })  
    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in')
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICKED!!!!!');

        showSelectedView(2);
    })  
    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out')
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICKED!!!!!');

        showSelectedView(3);
    })  
    let writeMenuBtn = document.querySelector('div.menu_wrap a.write')
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED!!!!!');

        showSelectedView(4);
    })  
    
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED!!!!!');

        showSelectedView(5);
    })  

}
