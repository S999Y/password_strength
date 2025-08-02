const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye');
const requirementList = document.querySelectorAll('.requirements-list li');

const requirements = [
    {regex: /.{8,}/, index:0},
    {regex: /[0-9]/, index:1},
    {regex: /[^a-zA-z0-9]/, index:2},
    {regex: /[a-z]/, index:3},
    {regex: /[A-Z]/, index:4},
]

eyeIcon.addEventListener('click', ()=>{
   //toggle the password input between password and test.
   // to show and hide the password
   passwordInput.type = passwordInput.type==="password" ? "text" : "password";

   //update the eye icon based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type==="password" ? "" : "-slash"}`
});

passwordInput.addEventListener('keyup', (e)=>{
    requirements.forEach(item=>{
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // update the requirement list
        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        }
        else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    })
})
