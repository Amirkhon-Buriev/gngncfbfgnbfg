let btn = document.getElementById("btn");

btn.addEventListener("click",() => {
    getData();
});

function getData() {
    fetch("https://randomuser.me/api/")
    .then((res) =>res.json())
    .then((data) =>getData(data));
}

getData();

function getUser(user) {
    let myData = user.results[0];

    let large = document.getElementById("rasm");
    let name = document.getElementById("name");

    large.ser = myData.picture.large;
    name.innerHTML = "Name:" + myData.name.first + " " + myData.name.last;
}