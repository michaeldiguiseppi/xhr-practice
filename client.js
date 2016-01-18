// var usersRequest = new XMLHttpRequest();
// var div = document.getElementsByTagName('div');

// usersRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         var userListings = JSON.parse(this.responseText);
//         console.log(userListings);
//         for (var i = 0; i < userListings.data.children.length; i++) {
//             var userListing = userListings.data.children[i];
//             console.log(userListing.data.title);
//         };
//     };
// };

// usersRequest.open('GET', 'http://localhost:3000/users');

// usersRequest.send();

var userListings = null;

var data2 = document.getElementById('total-likes');

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    userListings = JSON.parse(this.responseText);
    data2.innerText = '';
    for (var i = 0; i < userListings.length; i++) {
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        li.innerText = (userListings[i].name + ': ' + userListings[i].likes);
        data2.appendChild(ul);
        ul.appendChild(li);
    };

  }
});

xhr.open('GET', 'http://localhost:3000/users');
xhr.send();



