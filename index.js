$(function () {
  // Menu items
  const menuItems = [
    { name: "&#127968", action: "Home" },
    { name: "&#128151", action: "Favorities" },
    { name: "&#127942", action: "Achievements" },
  ];

  menuItems.forEach((item) => {
    $("#menu ul").append(
      `<li style="list-style-type:none;" display="inline";><button class="menu-btn" data-action="${item.action}">${item.name}</button></li>`
    );
  });

  $("#menu").on("click", ".menu-btn", function () {
    const action = $(this).data("action");

    const contentData = coleData.find((data) => data.item === action);

    if (contentData) {

      const item = new Item(contentData.item, contentData.img, contentData.content);
      item.render();
    }
  });
});




let coleData = [
  {
    item: "Home",
    img: "images/school.jpg",
    content: "something about gp",
  },

  {
    item: "Favorities",
    img: "images/eastlink.png",
    content: "something about eastlink centre",
  },

  {
    item: "Achievements",
    img: "images/cat.jpg",
    content: "something about achievement",
  },

];


class Item {
  constructor(name, image, content) {
    this.name = name;
    this.image = image;
    this.content = content;
  }

  render() {
    $("#main").empty();

    const menu2 = $(`
      <div class="menu">
        <h2>${this.name}</h2>
        <img src="${this.image}" alt="${this.name}" />
        <p>${this.content}</p>
      </div>
    `);
      
    $("#main").append(menu2);
  }
}




































