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


let formElement = document.querySelector('#form')
let allOfDataObject = {};
//setup現在的日期

const setup現在的日期 = () =>{
    let current = new Date()
    let year = current.getFullYear()
    let month = current.getMonth()+1
    let date = current.getDate()
    
    
    let month_string = String(month).padStart(2,"0")
    let date_string = String(date).padStart(2,"0")
    let current_date_string = `${year}-${month_string}-${date_string}`

    let dateElement = document.querySelector('#warrantyDate')
    dateElement.value = current_date_string
    dateElement.min =current_date_string
}

setup現在的日期 ()

const validateName = ()=>{
    let inputNameElement = document.querySelector('#inputName')
    let nameAlertElement = document.querySelector('#nameAlert')
    let productName = inputNameElement.value
    if (productName.length == 0){
        //console.log("沒有填資料")
        nameAlertElement.classList.remove("close")
        return
    }
    //allOfDataArray.push({'productName':productName})
    allOfDataObject['productName'] = productName
}


const validateCodeFormat = () =>{
    let inputCodeElement = document.querySelector('#inputCode')
    let codeAlertElement = document.querySelector('#codeAlert')
    let inputCodeValue = inputCodeElement.value
    
    //正規則表達式
    const codePatternReg = /\w\w\w-\w\w\w-\w\w\w/g

    if (inputCodeValue.length == 0 || codePatternReg.test(inputCodeValue) == false){
        //console.log("沒有填資料")
        codeAlertElement.classList.remove("close")
        console.log("執行錯誤")
        return
    }
    //allOfDataArray.push({'code':inputCodeValue})
    allOfDataObject['code'] = inputCodeValue
}

const checkRadioValue = () => {
    let radionElements = document.querySelectorAll('.form-check-input')
    radionElements.forEach(element => {
        if(element.checked){
            //console.log(element.value)
           // allOfDataArray.push({'catgory':element.value})
           allOfDataObject['category'] = element.value
        }
    })
}

const warrantyCheck = () =>{
    let checkboxElement = document.querySelector('#warrantyCheck1')
    if (checkboxElement.checked){
        //allOfDataObject.push({'warranty':true})
        allOfDataObject ['warranty']= true
    }else{
        allOfDataObject ['warranty']= false
        }
    }

    const getWarrantyDate = () => {
        let dateElement = document.querySelector('#warrantyDate')
        //allOfDataArray.push({'warrantyDate':dateElement.value})
        allOfDataObject['warrantyDate'] = dateElement.value
    }

const clearAllAlertAndData = ()=>{

    //清除產品警告
    let nameAlertElement = document.querySelector('#nameAlert')
    nameAlertElement.classList.add("close")

    //清除code警告
    let codeAlertElement = document.querySelector('#codeAlert')
    codeAlertElement.classList.add("close")

    //清除收集的資料
    allOfDataObject = {}
}

const setEmpty = () => {
    let inputNameElement = document.querySelector('#inputName')
    inputNameElement.value = ""
    let inputCodeElement = document.querySelector('#inputCode')
    inputCodeElement.value = ""
    let radionElements = document.querySelectorAll
    ('.form-check-input')
    radionElements.checked = true
    let checkboxElement = document.querySelector
    ('#warrantyCheck1')
    checkboxElement.checked = false
    setup現在的日期 ()

}

formElement.addEventListener('submit',async (event)=>{
    clearAllAlertAndData()
    event.preventDefault()
    validateName()
    validateCodeFormat()
    checkRadioValue()
    warrantyCheck()
    getWarrantyDate()
    console.log(allOfDataObject)
    try{
        const docRef = await addDoc(collection(db, "products"), allOfDataObject);
        console.log("這個文件的id是", docRef.id);
    }catch(e){
        console.error("加入文件的錯誤是 ", e);
    }
    setEmpty()
})