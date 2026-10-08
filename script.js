// ระบบเข้าสู่ระบบ
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("⚠️ กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
    } else {
        alert("✅ เข้าสู่ระบบสำเร็จ");
    }
}

// ระบบแจ้งซ่อม
function sendRepair() {
    let room = document.getElementById("room").value;
    let problem = document.getElementById("problem").value;

    if (problem === "") {
        alert("⚠️ กรุณากรอกปัญหาที่ต้องการแจ้งซ่อม");
    } else {
        alert(
            "✅ แจ้งซ่อมเรียบร้อย\n" +
            "ห้อง: " + room + "\n" +
            "ปัญหา: " + problem
        );
    }
}