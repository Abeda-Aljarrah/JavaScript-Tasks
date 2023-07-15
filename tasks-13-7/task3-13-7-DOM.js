const select = document.getElementById('country');
const img = document.getElementById('img');

// Add an event listener for the 'change' event on the select element
select.addEventListener('change', function() {
  // Get the selected value
  const selectedValue = select.value;
  if (select.value === 'Jordan') {
    img.src = "./2a24bf48206dcb0e1b046437b15c69c2.jpg";
  } else if (select.value === 'Palestine') {
    img.src = "./shutterstock_1975087202.jpg";
  };
});

