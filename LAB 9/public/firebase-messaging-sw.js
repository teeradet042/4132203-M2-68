// นำเข้า Firebase Scripts สำหรับ Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// ตั้งค่า Firebase (ต้องตรงกับในไฟล์หลัก)
const firebaseConfig = {
    apiKey: "AIzaSyBObInkRJ-Ij8RnH8X2oTR-6OGGEMT2H-g",
    authDomain: "teeradet-f2e00.firebaseapp.com",
    projectId: "teeradet-f2e00",
    storageBucket: "teeradet-f2e00.firebasestorage.app",
    messagingSenderId: "937702338398",
    appId: "1:937702338398:web:c19f11e7bb01f59c84a9cf"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// จัดการข้อความเมื่อแอปทำงานเบื้องหลัง (Background/Closed)
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // ใส่ URL ไอคอนของคุณที่นี่
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});