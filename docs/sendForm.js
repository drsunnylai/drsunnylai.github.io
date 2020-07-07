function sendForm() {
  console.log("HI");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit-form", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(serializeForm()));
}

function serializeForm() {
  let result = {};
  const form = document.getElementById("form");
  for (const child of form.children) {
    result[child.name] = child.value;
  }
  return result;
}