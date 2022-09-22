// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', () => {
fetch(imgUrl)
.then((resp) => resp.json())
.then((data) => {
        data.message.forEach((e) => {
              const img = document.createElement('img'); //creates img element
              const dogImg = document.querySelector('#dog-image-container'); // finds location for img placement
              img.src = `${e}`; //defines image source
              dogImg.appendChild(img); //appends image
           } ) } )
       
  fetch(breedUrl)
  .then((resp) => resp.json())
  .then((data) => {
    breedAdder(data)
    } )   
}) //dom conetent loaded closer

function breedAdder(data) {

    document.addEventListener('click', (event) => {
        const ul = document.querySelector('#dog-breeds')
        if (event.target.matches('#breed-dropdown')) { //selects what can be clicked
            ul.innerHTML = '' //clears the list 
            Object.keys(data.message).filter((e) => {
             const trial = e.startsWith(event.target.value)
             if (trial) {
                 console.log('trial', trial)
                 const li = document.createElement('li') //creates list element
                 li.innerText = `${e} ` // adds element to the list 
                 ul.append(li) //appends the li to the ul 
                 li.addEventListener('click', (event)=> { //changes the color of e when clicked //make it its own function, add if event..===li then change color
                 event.target.style.color = 'blue'
                             
          }) 
        }
      })
    }
  })
}


