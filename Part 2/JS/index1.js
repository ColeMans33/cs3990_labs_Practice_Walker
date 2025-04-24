
class News {
    constructor(title, imageSrc, content) {
      this.title = title;
      this.imageSrc = imageSrc;
      this.content = content;
      this.likes = 0;
      this.hidden = false;       //allows to toggle the hide button
    }
  
      
    incLikes(buttonElem) {
        this.likes++;
        const starsElem = buttonElem.previousElementSibling;
        starsElem.innerHTML = "&#9824;".repeat(this.likes);   //repeat star for each like
    }

    hide(buttonElem) {                                               //it occurs to me that I should've just put all
        const container = buttonElem.parentElement;                   //this styling in CSS and just swap back n forth....
        const img = container.querySelector("img");
        const title = container.querySelector("h3");
        const paragraph = container.querySelector("p");
        const likeBtn = container.querySelector("button[data-role='like']");
    
        if (!this.hidden) {         //
          img.style.opacity = "0.3";
          title.style.color = "darkgray";
          paragraph.style.color = "darkgray";

          likeBtn.disabled = true;
          likeBtn.style.opacity = "0.4";
          buttonElem.textContent = "Show";
          this.hidden = true;

        } else {                                    //else its visible
          img.style.opacity = "1";
          title.style.color = "";                    //Maybe make a list of colors and randomize it    
          paragraph.style.color = "";
    
          likeBtn.disabled = false;
          likeBtn.style.opacity = "1";
    
          buttonElem.textContent = "Hide";
          this.hidden = false;
        }
    }
    
    
    render() {
        const wrapper = document.createElement("section");   //Where the news begins on channel 6!
    
        const titleElem = document.createElement("h3");    //title
        titleElem.textContent = this.title;
    
        const imgElem = document.createElement("img");    //image
        imgElem.src = this.imageSrc;
        imgElem.style.maxWidth = "100px";
    
        const pElem = document.createElement("p");    //content paragraph
        pElem.textContent = this.content;
    
        const starDisplay = document.createElement("div");    //stars on display
        starDisplay.className = "stars";
    
        const likeBtn = document.createElement("button");   //like news button
        likeBtn.textContent = "Like";
        likeBtn.setAttribute("data-role", "like");
        likeBtn.setAttribute("onclick", "this.__news__.incLikes(this)");
        likeBtn.__news__ = this;
    
        const hideBtn = document.createElement("button");       //hide news button
        hideBtn.textContent = "Hide";
        hideBtn.setAttribute("onclick", "this.__news__.hide(this)");
        hideBtn.__news__ = this;
    
        wrapper.appendChild(titleElem);
        wrapper.appendChild(imgElem);
        wrapper.appendChild(pElem);
        wrapper.appendChild(starDisplay);
        wrapper.appendChild(likeBtn);
        wrapper.appendChild(hideBtn);
    
        return wrapper;                   //Time for news
    }
  
    show(targetElement) {
      targetElement.appendChild(this.render());
    }
}
  
  function generatenews() {                                              //Fakes news time
    const contentBlocks = document.querySelectorAll("#content p");       
    contentBlocks.forEach((pElem, i) => {
      if (arrRecourses[i]) {
        const { newsTitle, srcImg, newsContent } = arrRecourses[i];
        const newsItem = new News(newsTitle, srcImg, newsContent);
        newsItem.show(pElem);
      }
    });
  }
  

  
                    
                    //Cronk, Run the Dom!
  window.onload = () => {
    generatenews();
  };


  let arrRecourses = [
    {
    srcImg: 'Images/1.jpg',
    newsTitle: 'title1',
    newsContent: ` Lorem ipsum, or lipsum as it is sometimes known, is dummy
    text used in laying out print, graphic or web designs. The passage is attributed
    to an unknown typesetter in the 15th century who is thought to have scrambled
    parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
    `
    },

    {
    srcImg: 'Images/2.jpg',
    newsTitle: 'title2',
    newsContent: ` The purpose of lorem ipsum is to create a natural looking block of text
   (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without
   controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to
   be on design, not content.`
   }
 ]