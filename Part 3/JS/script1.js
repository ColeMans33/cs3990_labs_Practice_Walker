
let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');
let listItems = menuElem.querySelectorAll('li');
let sweetieImage = document.getElementById('sweetieImage');

titleElem.onclick = function() {                //toggle menu
    menuElem.classList.toggle('open');
    sweetieImage.innerHTML = '';                //clear image
    listItems.forEach(li => li.style.color = ''); //clear color




};

let sweetImages = {
    Cake: "Images/cake.jpg",
    Donut: "Images/donut.jpg",
    Honey: "Images/honey.jpg"
};


listItems.forEach(item => {                 //menu function for when open
    item.onclick = function() {
        listItems.forEach(li => {
        li.style.color = '';                        //remove red first
        item.style.color = 'red';                      //add red to clicked item

    });
    let sweetName = item.innerHTML;                 //add image of corresponing sweet
    sweetieImage.innerHTML = `<img src="${sweetImages[sweetName]}" width="400px" height="400px">`;
}

});