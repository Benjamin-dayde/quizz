// var annoncesUne = document.getElementById('ann_a _la_une');
// annoncesUne.addEventListener('click', function(e) {
//     changeContent('last_ann.html', null, 'modContent');// <=> index.php?page=last_ann
// }); 
// annoncesUne.addEventListener('mouseover', function(e) {
//     e.target.style.cursor = 'pointer';
// });

// // ------------------------------------------------------

// var search = document.getElementById('search_ann');
// search.addEventListener('click', function(e) {
//     changeContent('search_input.html', null, 'modContent');// <=> index.php?page=search_input
// });
// search.addEventListener('mouseover', function(e) {
//     e.target.style.cursor = 'pointer';
// });

// // ------------------------------------------------------

// var contact = document.getElementById('contact_membre');
// contact.addEventListener('click', function(e) {
//     changeContent('vue_membres.html', null, 'modContent');// <=> index.php?page=vue_membres
// });
// contact.addEventListener('mouseover', function(e) {
//     e.target.style.cursor = 'pointer';
// });


// var searchinput = document.getElementById('searchinput');
// searchinput.addEventListener('keyup', function(e) {
//     //document.getElementById('searchresult').innerHTML = ' ' + e.target.value;
//     changeContent('search_input.html', 'input='+ e.target.value, 'searchresult');
// });

// // -----------------------------------------------------

// var searchcp = document.getElementById('searchcp');
// searchcp.addEventListener('keyup', function(e) {
    
//     if(e.target.value.length == 5) {
//         //document.getElementById('searchresult').innerHTML = ' ' + e.target.value;
//         /*var client = new XMLHttpRequest();
//         client.open("GET", "http://api.zippopotam.us/fr/" + e.target.value, true);
//         client.onreadystatechange = function() {
//             if(client.readyState == 4) {
//                 document.getElementById('zipCode').innerHTML = client.responseText;
//             };
//         };
//         client.send();*/
//         changeContent('curlZipCode.html', 'scp='+ e.target.value, 'curlZipCode');
//     }
    
// });