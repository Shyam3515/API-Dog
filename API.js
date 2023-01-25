const dogImage = document.getElementById('dogImage');
const newDog = document.getElementById('getDog');
/*API - Application programming Interface and it lets your app to communicate
    with other services to fetch data.*/
//Asynchronous programming(Stuff you have to wait for)-Promises

function getDog(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
    console.log(json.message)
    dogImage.innerHTML=`<img src='${json.message}' height=300 width=300/>`})
}
newDog.onclick = ()=> getDog();
