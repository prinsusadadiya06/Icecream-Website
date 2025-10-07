// section-3
// let pre1 = document.querySelector('.pre1');
// let post1 = document.querySelector('.post1');

// let overflow1 = document.querySelector('.overflow1');
// post1.addEventListener('click', () => {
//     overflow1.scrollBy({ left: 200, behavior: "smooth" })
// })
// pre1.addEventListener('click', () => {
//     overflow1.scrollBy({ left: -200, behavior: "smooth" })
// })
const pre1 = document.querySelector('.pre1');
const post1 = document.querySelector('.post1');
const overflow1 = document.querySelector('.overflow1');

const itemWidth = document.querySelector('.item').offsetWidth + 10;

const totalItems = 8;

let currentIndex = 0;

post1.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0; // loop back to first
  }
  overflow1.scrollTo({ left: currentIndex * itemWidth, behavior: "smooth" });
});

pre1.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1; // loop to last
  }
  overflow1.scrollTo({ left: currentIndex * itemWidth, behavior: "smooth" });
});





// // section-5

const pre2 = document.querySelector('.pre2');
const post2 = document.querySelector('.post2');
const overflow2 = document.querySelector('.overflow2');

const itemWidth2 = document.querySelector('.item2').offsetWidth + 10;

const totalItems2 = 10;

let currentIndex2 = 0;

post2.addEventListener('click', () => {
  currentIndex2++;
  if (currentIndex2 >= totalItems2) {
    currentIndex2 = 0; // loop back to first
  }
  overflow2.scrollTo({ left: currentIndex2* itemWidth2, behavior: "smooth" });
});

pre2.addEventListener('click', () => {
  currentIndex2--;
  if (currentIndex2 < 0) {
    currentIndex2 = totalItems2 - 1; // loop to last
  }
  overflow2.scrollTo({ left: currentIndex2 * itemWidth2, behavior: "smooth" });
});

// let pre2 = document.querySelector('.pre2');
// let post2 = document.querySelector('.post2');

// let overflow2 = document.querySelector('.overflow2');
// post2.addEventListener('click', () => {
//     overflow2.scrollBy({ left: 200, behavior: "smooth" })
// })
// pre2.addEventListener('click', () => {
//     overflow2.scrollBy({ left: -200, behavior: "smooth" })
// })


// section-6



// let pre3 = document.querySelector('.pre3');
// let post3 = document.querySelector('.post3');

// let overflow3 = document.querySelector('.overflow3');
// post3.addEventListener('click', () => {
//     overflow3.scrollBy({ left: 200, behavior: "smooth" })
// })
// pre3.addEventListener('click', () => {
//     overflow3.scrollBy({ left: -200, behavior: "smooth" })
// })



const pre3 = document.querySelector('.pre3');
const post3 = document.querySelector('.post3');
const overflow3 = document.querySelector('.overflow3');

const itemWidth3 = document.querySelector('.item3').offsetWidth + 10;

const totalItems3 = 8;

let currentIndex3 = 0;

post3.addEventListener('click', () => {
  currentIndex3++;
  if (currentIndex3 >= totalItems3) {
    currentIndex3 = 0; // loop back to first
  }
  overflow3.scrollTo({ left: currentIndex3* itemWidth3, behavior: "smooth" });
});

pre3.addEventListener('click', () => {
  currentIndex3--;
  if (currentIndex3 < 0) {
    currentIndex3 = totalItems3 - 1; // loop to last
  }
  overflow3.scrollTo({ left: currentIndex3 * itemWidth3, behavior: "smooth" });
});