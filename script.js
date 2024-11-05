console.log("This is my project1")
let r = document.getElementById("red_btn")
console.log(r)
r.addEventListener("click", () => {
    alert("Don't  click!!!")
})
let r2 = document.getElementById("signin")
console.log(r2)
r2.addEventListener("click", () => {
    document.getElementById("signin").innerHTML = "Signed In"
}
)