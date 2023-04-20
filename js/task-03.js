const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryList = document.querySelector(".gallery");


const loadingGalleryImages = images.map(({ url, alt }) => {
  const galleryImages = `<li"><img src="${url}" alt="${alt}" width="225" height="200"></li>`;
  return galleryImages;
})

galleryList.insertAdjacentHTML("beforebegin", loadingGalleryImages);






// const loadingImages = images.reduce((acc, { url, alt }) => {
//   return acc += `<li><img srs="${url}" alt="${alt}" width="200" height="200"/></li>`;
// }, "")

// galleryList.insertAdjacentHTML("afterbegin", loadingImages);















  

