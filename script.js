document.querySelector(".btn").addEventListener("click", (e)=> {
    e.preventDefault()
    let passwords = localStorage.getItem("passwords")
    if(passwords){
        let json = []
        json.push({username:username.value, passwords:password.value})
        localStorage.setItem("passwords", JSON.stringify(json))
    }else{
        let json = JSON.parse(localStorage.getItem("passwords"))
    }
})