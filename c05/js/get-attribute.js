let firstItem = document.getElementById('one')
if(firstItem.hasAttribute('class')){
    let ClassAttri_string = firstItem.getAttribute('class')
    let resultsElement = document.getElementById('scriptResults')
    resultsElement.innerHTML = '<p>這第一個item的class屬性值為:'+ClassAttri_string +'</p>'
}