// document.addEventListener('DOMContentLoaded', function() {
//     console.log(document.querySelector('#colorPicker').value);
//     console.log(document.querySelector('#colorText').textContent);
//     document.querySelector('#colorText').textContent = 'color code search';
//     console.log(document.querySelector('#colorText').textContent);
//     document.querySelector('#colorText').innerHTML = '<h3>컬러 코드 검색</h3>';
// });


// document.addEventListener('DOMContentLoaded', function() {

//     let colorValue = document.querySelector('#colorPicker').value;
    
//     console.log(colorValue);
    
//     document.querySelector('#colorText').textContent = '컬러 코드: ' +colorValue+ ' 입니다.';
// });

document.addEventListener('DOMContentLoaded', function() {

    const text = document.querySelector('#colorText');
    const color = document.querySelector('#colorPicker');

    color.addEventListener('input', colorBg);

});

function colorBg() {
    console.log('colorBg() called!');

}0