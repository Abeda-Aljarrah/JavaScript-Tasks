colorPicker.addEventListener('input', () => {
    body.style.backgroundColor = colorPicker.value;
    sessionStorage.setItem('key', colorPicker.value);
 })
body.style.backgroundColor=sessionStorage.getItem("key");

