var bookmarkInput=document.getElementById("bookmarkInput");
var websiteInput=document.getElementById("websiteInput");
var searchInput=document.getElementById("searchInput");
var btnupdate= document.getElementById("subInput");
var mainIndex=0;

if(localStorage.getItem("bookmarkTable")){
    var arrBookmark=JSON.parse(localStorage.getItem("bookmarkTable"));
    retriveBookmarks()
}
else{
    var arrBookmark = [];
}

function createBooKmark(){
    if( btnupdate.innerHTML=='Update Bookmark'){
        btnupdate.innerHTML='Add Bookmark'
        var bookMark={
            bookmarkName: bookmarkInput.value,
            websiteName: websiteInput.value
        }
        arrBookmark.splice(mainIndex, 1,bookMark)
    }
    else{
        var bookMark={
            bookmarkName: bookmarkInput.value,
            websiteName: websiteInput.value
        }
        arrBookmark.push(bookMark);
    }
    
       
        localStorage.setItem("bookmarkTable",JSON.stringify(arrBookmark));
        clearBookmarks()
        retriveBookmarks()
  
   
}
function clearBookmarks() {
    bookmarkInput.value ="";
    websiteInput.value ="";
}
function retriveBookmarks() {
    var str="";
    for(var i=0; i<arrBookmark.length; i++)
    {
        str +=`
        <tr >
                    <td >${i}</td>
                    <td>${arrBookmark[i].bookmarkName}</td>
                    <td>${arrBookmark[i].websiteName}</td>
                    <td><button onclick="deleteBookmark(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
                    <td> <button onclick="updateBookmark(${i})" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
                </tr> 
        `
    }
    document.getElementById('tbody').innerHTML =str;
}
function searchBookmarks() {
    var str="";
    var searchword=searchInput.value;
    for(var i=0; i<arrBookmark.length; i++) {
        if(arrBookmark[i].bookmarkName.toLowerCase() .includes(searchword.toLowerCase())){
        
                    str +=`
                    <tr >
                                <td >${i}</td>
                                <td>${arrBookmark[i].bookmarkName}</td>
                                <td>${arrBookmark[i].websiteName}</td>
                                <td><button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
                                <td> <button class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
                            </tr> 
                    ` 
        }
        document.getElementById('tbody').innerHTML =str;
}
}
function deleteBookmark(index){
arrBookmark.splice(index, 1);
retriveBookmarks();
localStorage.setItem("bookmarkTable",JSON.stringify(arrBookmark));
}
function updateBookmark(index){
    bookmarkInput.value=arrBookmark[index].bookmarkName;
    websiteInput.value=arrBookmark[index].websiteName;
    btnupdate.innerHTML='Update Bookmark';
    mainIndex=index;
}
