const inputs = document.querySelectorAll(".form");

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];

  if (localStorage.getItem(input.id)) {
    input.value = localStorage.getItem(input.id);
  }

  input.onkeyup = function() {
    localStorage.setItem(input.id, input.value);
  };
}
const birthDateInput = document.getElementById('BD');
const birthDateValue = birthDateInput.value;
if (localStorage.getItem(birthDateInput.id)) {
    birthDateInput.value = localStorage.getItem(birthDateInput.id);
  }
  birthDateInput.addEventListener('input', function() {
    localStorage.setItem(birthDateInput.id, birthDateInput.value);
  });




const checkboxes = document.querySelectorAll(".check");
checkboxes.forEach((checkbox) => {
    const storedState = localStorage.getItem(checkbox.id);
    if (storedState === 'true') {
        checkbox.checked = true;
    }
});
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
});
