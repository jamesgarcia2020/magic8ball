const pics = [
'url("1.jpg")',
'url("2.jpg")',
'url("3.jpg")',
'url("4.jpg")',
];

const pic = document.querySelector('div');


function showImage(){
    
    let a = Math.floor(Math.random()*pics.length)
    let img = pics[a];
    console.log(img)
    console.log(a)
    
    pic.style.backgroundImage = img
    
    ;

}
showImage();