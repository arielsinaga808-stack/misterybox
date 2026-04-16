// 🔥 GANTI DENGAN CONFIG FIREBASE KAMU
const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT.firebaseapp.com",
  databaseURL: "https://PROJECT.firebaseio.com",
  projectId: "PROJECT",
  storageBucket: "PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 🎁 LIST HADIAH
const hadiahList = [
  "Rp 10.000",
  "Rp 100.000",
  "Rp 200.000",
  "Rp 1.000.000",
  "Honda Brio 🚗",
  "Yamaha NMAX 🏍️"
];

function openBox() {
  const box = document.querySelector(".box");
  const result = document.getElementById("result");

  // animasi buka
  box.classList.add("open");

  // random hadiah
  const hadiah = hadiahList[Math.floor(Math.random() * hadiahList.length)];

  setTimeout(() => {
    result.innerHTML = "🎉 Kamu mendapatkan: <br><b>" + hadiah + "</b>";

    // simpan ke firebase
    db.ref("hasil").push({
      hadiah: hadiah,
      waktu: new Date().toLocaleString()
    });

  }, 800);
}
