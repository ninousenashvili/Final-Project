function getuser(page) {
    let request = new XMLHttpRequest();
    request.addEventListener('load', render);
    request.addEventListener('error', errorender);

    request.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1' + page);
    request.send();
}

let currentPage = 1;
let totalPagesApi;

function render() {
    let response = this.responseText;
    let responsedata = JSON.parse(response);

    var fragment = document.createDocumentFragment();

    responsedata.forEach(item => {

        let email = document.createElement('p');
        email.textContent = item.email;
        email.classList.add('p-email');

        let description = document.createElement('p');
        description.textContent = item.body;
        description.classList.add('description');

        let postdiv = document.createElement('div');
        postdiv.classList.add('post-div');

        postdiv.appendChild(email);
        postdiv.appendChild(description);


        fragment.appendChild(postdiv);

    })
    document.querySelector('.post-block').innerHTML = ' ';
    document.querySelector('.post-block').appendChild(fragment);
    totalPagesApi = responsedata.total_pages;


}
function errorender() {
    let error = document.createElement('p');
    error.textContent = 'Server error';

    document.getElementById('service-section').appendChild(error);

}
document.getElementById('previous').addEventListener('click', function () {
    if (currentPage == 1) {
        return;
    }

    currentPage -= 1;
    getuser(currentPage);

})

document.getElementById('next').addEventListener('click', function () {
    if (currentPage == totalPagesApi) {
        return;
    }
    currentPage += 1;
    getuser(currentPage);
})
getuser(currentPage);

let today = new Date();
let date = ' ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
document.querySelector(".ftr-bottom-text").append(date);