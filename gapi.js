// ฟังก์ชันในการโหลด Google API
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

// ฟังก์ชันในการเริ่มการเชื่อมต่อกับ Google API
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyAOoz8BRKC8Gvd0epodOd9GMMzvNZC1MNI',
        clientId: '155089957788-tt23macpng7f58gb12hv32j0kn2p0ddb.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/drive.file',
    }).then(() => {
        auth2 = gapi.auth2.getAuthInstance();
        // ถ้าผู้ใช้เข้าสู่ระบบแล้วแสดงปุ่มอัปโหลด
        if (auth2.isSignedIn.get()) {
            document.getElementById('upload-section').style.display = 'block';
        } else {
            document.getElementById('login-button').style.display = 'inline';
        }
    });
}

// ฟังก์ชันในการเข้าสู่ระบบ
function handleAuthClick() {
    auth2.signIn().then(() => {
        document.getElementById('upload-section').style.display = 'block';
        document.getElementById('login-button').style.display = 'none';
    });
}
