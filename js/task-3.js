function updateName() {
  const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');
  
  let name = input.value.trim();
  if (name === '') {
    name = 'Anonymous';
  }
  
  output.textContent = name;
}

