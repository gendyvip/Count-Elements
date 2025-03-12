function countElements(){
    var tagnameInput= document.getElementById("tagname").value.toLowerCase()
    var tagname=document.getElementsByTagName(tagnameInput).length
    document.getElementById("tagN").innerHTML=`<h4>Number of divs: ${tagname}</h4>`

    var classnameInput= document.getElementById("classname").value.toLowerCase()
    var classname=document.getElementsByClassName(classnameInput).length
    document.getElementById("classN").innerHTML=`<h4>Class Content: ${classname}</h4>`

    var idInput= document.getElementById("id").value.toLowerCase()
    var id=document.getElementById(idInput)!==null
    document.getElementById("idN").innerHTML=`<h4>ID: ${id?true:false}</h4>`

    var nameInput= document.getElementById("name").value.toLowerCase()
    var name= document.getElementsByName(nameInput).length
    document.getElementById("nameN").innerHTML=`<h4>Name: ${name}</h4>`
}

