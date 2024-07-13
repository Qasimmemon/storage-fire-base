// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// import {
//   getStorage,
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBwwuczW0LLhhP8A5f_4sliRkhq-E25AIQ",
//     authDomain: "first-project-fe546.firebaseapp.com",
//     projectId: "first-project-fe546",
//     storageBucket: "first-project-fe546.appspot.com",
//     messagingSenderId: "521320857220",
//     appId: "1:521320857220:web:f2296527cedf7b68024cd1",
//     measurementId: "G-GSCYXYFGX3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);

// const carsCollection = collection(db, "cars");
// console.log("storage=>", storage);

// const car_img = document.getElementById("car_img");
// const save_file = document.getElementById("save_file");
// const container = document.getElementById("container");

// getImagesFromDB();

// save_file.addEventListener("click", () => {
//   //console the first file from the input type file
//   console.log(car_img.files[0]);

//   const carStorageRef = ref(storage, car_img.files[0].name);

//   //upload file to the storage
//   save_file.disabled = true;
//   uploadBytes(carStorageRef, car_img.files[0])
//     .then((snapshot) => {
//       console.log("Uploaded  file!");

//       // get url from the same storage ref
//       getDownloadURL(carStorageRef)
//         .then((url) => {
//           console.log("url=>", url);

//           //add url + category to the db
//           addDoc(carsCollection, { url, category: "car" }).then(() => {
//             console.log("Document updated to the DB");
//             getImagesFromDB();
//             save_file.disabled = false;
//           });
//         })
//         .catch((err) => {
//           console.log("Error in download=>", err), (save_file.disabled = false);
//         });
//     })
//     .catch((err) => {
//       console.log(err), (save_file.disabled = false);
//     });
// });

// async function getImagesFromDB() {
//   const querySnapshot = await getDocs(carsCollection);
//   container.innerHTML = "";
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} =>`);

//     console.log(doc.data());

//     const img = `<img
//     id = ${doc.id}
//     src = ${doc.data().url}
//     style="height: 300px; width: 300px; border-radius: 12px; margin: 10px"
//   />`;

//     container.innerHTML == img;
//   });
// }

const Gender = document.getElementById('Gender')
const message = document.getElementById('message')
const email = document.getElementById('email')
const contact = document.getElementById('contact')
const last_name = document.getElementById('last_name')
const first_name = document.getElementById('first_name')
 const submit = document.getElementById('submit')
//  const show_Result = document.getElementById('show_Result')

submit.addEventListener('click', function () {
  const show_Result = document.getElementById('show_Result')
 
  let saev = `
  
    <div class="profile-container">
        <div>
         
           <div class="profile-header">
            <img src="profile.jpg" alt="Profile Picture" class="profile-pic">
        </div>
        <div class="profile-info">
            <h1 class="profile-name">John Doe</h1>
            <p class="profile-status">Hey there! I am using WhatsApp.</p>
            <div class="profile-details">
                <p><strong>First Name:</strong>${first_name}</p>
                <p><strong>Last Name:</strong>${last_name}</p>
                <p><strong>Email:</strong>${email}</p>
                <p><strong>Contact Number:</strong>${contact}</p>
                <p><strong>Contact Number:</strong>${message}</p>
                <p><strong>Contact Number:</strong>${Gender}</p>

            </div>
        </div>
        <div class="profile-actions">
            <button class="message-btn">Message</button>
            <button class="call-btn">Call</button>
        </div>
        </div>
    </div> 
  `
  show_Result.innerHTML += saev
})


function adddata(params) {
  let saev = `
    <div class="profile-container">
        <div>
         
           <div class="profile-header">
            <img src="profile.jpg" alt="Profile Picture" class="profile-pic">
        </div>
        <div class="profile-info">
            <h1 class="profile-name">John Doe</h1>
            <p class="profile-status">Hey there! I am using WhatsApp.</p>
            <div class="profile-details">
                <p><strong>First Name:</strong>${first_name}</p>
                <p><strong>Last Name:</strong>${last_name}</p>
                <p><strong>Email:</strong>${email}</p>
                <p><strong>Contact Number:</strong>${contact}</p>
                <p><strong>Contact Number:</strong>${message}</p>
                <p><strong>Contact Number:</strong>${Gender}</p>

            </div>
        </div>
        <div class="profile-actions">
            <button class="message-btn">Message</button>
            <button class="call-btn">Call</button>
        </div>
        </div>
    </div> 
  `
}