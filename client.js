var usersRequest = new XMLHttpRequest;
usersRequest.open('GET', '/users');
usersRequest.responseType = 'json';
usersRequest.addEventListener('load', function () {
  console.log(usersRequest.response);
});
usersRequest.send();
