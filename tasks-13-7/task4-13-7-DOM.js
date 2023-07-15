const select = document.getElementById('Font-family');
const div = document.getElementById('div');

select.addEventListener('change', function () {
    if (select.value === 'Times New Roman') {
        div.style.fontFamily = "Times New Roman";
    } else if (select.value === 'Fantasy') {
        div.style.fontFamily = "fantasy"
    };
});

const selectsize = document.getElementById('Font-size');

selectsize.addEventListener('change', function () {
    if (selectsize.value === '10px') {
        div.style.fontSize = "10px"
    } else if (selectsize.value === '15px') {
        div.style.fontSize = "15px"
    };
});

const style1 = document.getElementById('style1');
const style2 = document.getElementById('style2');
const style3 = document.getElementById('style3');
style1.addEventListener('change', function () {
    if (style1.checked == true) {
        div.style.fontStyle = "Italic"
    }else div.style.fontStyle = "normal";
});

style2.addEventListener('change', function () {
    if (style2.checked == true) {
        div.style.fontWeight = "Bold"
    }else div.style.fontWeight = "normal";
});
style3.addEventListener('change', function () {
    if (style3.checked == true) {
        div.style.textDecoration = "underline"
    }else div.style.textDecoration = "none";
});



