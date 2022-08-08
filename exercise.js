// // console.log('this is exercise')
// a = document
// a = document.image;
// Array.from(a).forEach(function(element){
//     console.log(element);
//     // console.log(a);
// })
let link = document.links;
Array.from(link).forEach(function(element){

    b = element.href;
    bo = b.includes('linkdin')
    if(bo){
        console.log(b);
    }
})