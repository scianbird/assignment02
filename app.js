//make an array to store the images (as objects)
const images = [
  {
    image: "media/aliencat.JPG",
    thumbnail: "media/aliencat.JPG",
    alt: "A table at a craft market. The focus is on a cat made of clay and styled to look like a green alien.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal: "My most recent market at Dragon Hall in Norwich. Fun as always!",
  },

  {
    image: "media/babytoad.JPG",
    thumbnail: "media/babytoad.JPG",
    alt: "A small pomchi puppy looking through a fence. She is curious and alert.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal: "Toad's first time in Ireland... she was so tiny...",
  },

  {
    image: "media/businesscards.JPG",
    thumbnail: "media/businesscards.JPG",
    alt: "Business cards advertising a craft business. The cards are bright and have cartoon images.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal: "I'm so happy with my new business cards.",
  },

  {
    image: "media/lough.JPG",
    thumbnail: "media/lough.JPG",
    alt: "A tranquil sunset over water. There are bullrushes growing in the water. Taken at Lough Neagh.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal:
      "The older I get, the more I appreciate that this was always on my doorstep.",
  },

  {
    image: "media/memopad.JPG",
    thumbnail: "media/memopad.JPG",
    alt: "An advertising image for memo pads. They have cartoon animals and the phrase Every day I do my silly little tasks.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal: "Every day I do my silly little tasks... but they keep coming.",
  },

  {
    image: "media/natashapierre.JPG",
    thumbnail: "media/natashapierre.JPG",
    alt: "The final cast bow after a performance of the musical Natasha, Pierre and the Great Comet of 1812. Taken at the Donmar Theatre.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal: "Natasha, Pierre was good enough that I read War & Peace after.",
  },

  {
    image: "media/sandwich.JPG",
    thumbnail: "media/sandwich.JPG",
    alt: "A small chihuahua wearing trainers. The chihuahua does not look happy.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal:
      "Training Sandwich to wear shoes in very hot or cold weather was so much easier than expected and he gets so many compliments.",
  },

  {
    image: "media/toad.JPG",
    thumbnail: "media/toad.JPG",
    alt: "A dog shaking on the grass. The dog's long fur is catching sunlight.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal:
      "I took Toad out on her birthday in her handmade dress to take photographs.",
  },

  {
    image: "media/txt.JPG",
    thumbnail: "media/txt.JPG",
    alt: "The KPOP group TXT performing in London O2 Arena.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal:
      "So happy I got to be with my sister when she saw TXT for the first time.",
  },

  {
    image: "media/william.JPG",
    thumbnail: "media/william.JPG",
    alt: "A tabby cat stares at the camera with a serious expression.",
    thumbnailclass: "thumbnailIMG",
    fullscreenclass: "fullscreenIMG",
    journal: "Oh William... what a handsome gentleman.",
  },
];

//test the array by console logging a number

console.log(images[5]); // returns the information for the image of natasha,pierre cast

const thumbnailDISPLAY = document.getElementById("thumbnailDisplay");

images.forEach(function thumbnailDISPLAY(images) {
  let thumbnailCreate = document.createElement("img");
  thumbnailCreate.setAttribute("src", images.thumbnail);
  thumbnailCreate.setAttribute("class", images.thumbnailclass);
  thumbnailCreate.setAttribute("alt", images.alt);
  thumbnailCreate.setAttribute("tabindex", "0");
  thumbnailDisplay.appendChild(thumbnailCreate);

  function displaySomething() {
    fullscreenDisplay.innerHTML = "";
    let fullscreenCreate = document.createElement("img");
    fullscreenCreate.setAttribute("src", images.image);
    fullscreenCreate.setAttribute("class", images.fullscreenclass);
    fullscreenCreate.setAttribute("alt", images.alt);

    fullscreenDisplay.appendChild(fullscreenCreate);
  }
  thumbnailCreate.addEventListener("click", displaySomething);
});

const firstImageIndex = 0;
const lastImageIndex = images.length - 1;
let currentImageIndex = 0;

const nextIMAGE = document.getElementById("nextImage");
nextIMAGE.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex >= lastImageIndex) {
    currentImageIndex = lastImageIndex;
  }
  nextbuttonPress = images[currentImageIndex];
  console.log(currentImageIndex);
});

const previousIMAGE = document.getElementById("previousImage");
previousIMAGE.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex <= firstImageIndex) {
    currentImageIndex = firstImageIndex;
  }
  previousbuttonPress = images[currentImageIndex];
  console.log(currentImageIndex);
});

const toggleHIDE = document.getElementById("toggleGallery");
toggleHIDE.addEventListener("click", function () {
  var gallerySTYLE = document.getElementById("thumbnailDisplay");
  if (gallerySTYLE.style.display == "none") {
    gallerySTYLE.style.display = "flex";
  } else {
    gallerySTYLE.style.display = "none";
  }
});
