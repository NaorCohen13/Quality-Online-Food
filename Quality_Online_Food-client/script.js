// שליחת האימייל והסיסמה בלוגאין לשרת (POST)
let submit_btn_login = document.querySelector(".submit-btn-login"); 
submit_btn_login.addEventListener("click", async () => { // מוסיף מאזין לכפתור השליחה שברגע שנלחץ, מבצע פעולה אסינכרונית
  const email_input_login = document.getElementById('email-input-login').value // משיג את ערך האימייל שהמשתמש הקליד בתיבת הטקסט באמצעות ה־ID שלה
  const password_input_login = document.getElementById('password-input-login').value // משיג את ערך הסיסמה שהמשתמש הקליד בתיבת הטקסט באמצעות ה־ID שלה
  const response = await fetch("http://127.0.0.1:3000/login", { // מבצע בקשת fetch אסינכרונית לנתיב "http://127.0.0.1:3000/login" באמצעות POST
    method: "POST", 
    mode: "cors",
    headers: {
      "Content-Type": "application/json"}, // הגדרת הכותרות של הבקשה, כאשר התוכן מסוג JSON
    body: JSON.stringify({"email_input_login": email_input_login, "password_input_login": password_input_login})}); // שולח את גוף הבקשה כאובייקט JSON המכיל את ערכי שדות האימייל והסיסמה
  });

// שליחת האימייל והסיסמה בהרשמה לשרת (POST)
let submit_btn_register = document.querySelector(".submit-btn-register");
console.log("sadfffffffffffffffffffffffffffff")
register.addEventListener("click", async () => {
  const firstname_input_register = document.getElementById("firstname-input-register").value
  const lastname_input_register = document.getElementById("lastname-input-register").value
  const email_input_register = document.getElementById('email-input-register').value
  const password_input_register = document.getElementById('password-input-register').value
  console.log(`In Register with: ${firstname_input_register} and ${lastname_input_register} and ${email_input_register} and ${password_input_register}`)
  const response = await fetch("http://127.0.0.1:/Register", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"},
    body: JSON.stringify({"username_input_register": username_input_register, "email_input_register": email_input_register, "password_input_register": password_input_register})})
});