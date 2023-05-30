import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyDPs7LLLqnWt2vXHnfrBusqBghADIZ8Ulk",
    authDomain: "project-javascript-c5b88.firebaseapp.com",
    projectId: "project-javascript-c5b88",
    storageBucket: "project-javascript-c5b88.appspot.com",
    messagingSenderId: "576242580627",
    appId: "1:576242580627:web:e7bad93326a052658ee166"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "products"));
let contents = ""
querySnapshot.forEach(doc => {
    console.log(doc.id)
    let documentData = doc.data()
    console.log(documentData['productName'])
    contents += `<tr><th scope="row">${doc.id}</th><td>${documentData['productName']}</td><td>${documentData['code']}</td></tr>`
});

let tbodyElement = document.querySelector('#tbody')
tbodyElement.innerHTML = contents


