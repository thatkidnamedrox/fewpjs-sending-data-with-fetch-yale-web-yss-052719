// Add your code here


function submitData(name, email)
{
  let url = 'http://localhost:3000/users';
  let formData = {
    name: name,
    email: email
  }
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch(url, configObj)
  .then(res => res.json())
  .then(data => {
    let id = data.id
    document.body.innerHTML = id;
    console.log("fetch", document.body.innerHTML);
  })
  .catch(error => {
    document.body.innerHTML = error.message;
  })
}
