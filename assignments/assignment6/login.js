window.onload = loginLoad;

function loginLoad() {
    const form = document.getElementById("myLogin");
    form.onsubmit = checkLogin; // เมื่อกด submit จะเรียกฟังก์ชัน checkLogin
}

function checkLogin() {
    const username = document.forms["myLogin"]["username"].value;
    const password = document.forms["myLogin"]["password"].value;

    // ดึงข้อมูลที่ register ไว้จาก localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // ตรวจสอบ username และ password ว่าตรงกันหรือไม่
    if (username === storedUsername && password === storedPassword) {
        alert("เข้าสู่ระบบสำเร็จ");
        return true; // ข้อมูลถูกต้อง ดำเนินการต่อ
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่");
        return false; // ข้อมูลไม่ถูกต้อง ไม่เปลี่ยนหน้า
    }
}
