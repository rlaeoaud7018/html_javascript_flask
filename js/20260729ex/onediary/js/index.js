
import { initviews } from './viewChange.js';
import { addEvents } from './events.js';


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOCUMENT READY!!')

    // 화면 초기화
    initviews();
    
    // 이벤트 정의
    addEvents();

});

