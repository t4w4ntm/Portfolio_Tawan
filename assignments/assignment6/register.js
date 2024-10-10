window.onload = pageLoad;

function pageLoad(){
    const form = document.getElementById("myRegister");
    form.onsubmit = validateForm; // เมื่อกด submit จะเรียกฟังก์ชัน validateForm
}

function validateForm() {
    const firstname = document.forms["myRegister"]["firstname"].value;
    const lastname = document.forms["myRegister"]["lastname"].value;
    const gender = document.forms["myRegister"]["gender"].value;
    const bday = document.forms["myRegister"]["bday"].value;
    const email = document.forms["myRegister"]["email"].value;
    const username = document.forms["myRegister"]["username"].value;
    const password = document.forms["myRegister"]["password"][0].value; // password
    const retypePassword = document.forms["myRegister"]["password"][1].value; // retype password

    // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
    if (!firstname || !lastname || !gender || !bday || !email || !username || !password || !retypePassword) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return false;
    }

    // ตรวจสอบว่า password ตรงกับ retype password หรือไม่
    if (password !== retypePassword) {
        alert("รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่");
        return false;
    }

    // เก็บข้อมูลไว้ใน localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    return true; // ข้อมูลถูกต้อง ส่งไปยังหน้า login
}
