//Logic to fill data
let tb = document.querySelector("table");
let data = localStorage.getItem("passwords");
if (data == null) {
  tb.innerHTML = "No Data To Show";
} else {
  let arr = JSON.parse(data);
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    str = `            
<tr>
                <td>${element.website}</td>
                <td>${element.username}</td>
                <td>${element.password}</td>
                <td>${"delete"}</td>
    
              </tr>`;
  }
  tb.innerHTML = tb.innerHTML + str;
}

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let passwords = localStorage.getItem("passwords");
  if (passwords == null) {
    let json = [];
    json.push({ username: username.value, passwords: password.value });
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({ username: username.value, password: password.value });
    localStorage.setItem("passwords", JSON.stringify(json));
  }
});
