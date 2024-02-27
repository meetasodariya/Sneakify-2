// Navbar Toggle BUtton Javascript


const menu = document.querySelector('.menu-1');
const navbar = document.querySelector('.navbar-main-container')

menu.addEventListener('click', () => {
    menu.classList.toggle('change')
    navbar.classList.toggle('change')
})

//End of Navbar Toggle BUtton Javascript

// Calling Swiper card content dynamically using JSON

document.addEventListener('DOMContentLoaded', function () {
    // Sample JSON data for card information
    const jsonData = [
        { id:1, imageUrl: 'images/bestseller-img-1.png', price: '1500₹', discountedPrice: '1000₹', name: 'Nike Dunk High' },
        { id:2, imageUrl: 'images/bestseller-img-2.png', price: '2200₹', discountedPrice: '2000₹', name: 'Nike Dunk Blue' },
        { id:3, imageUrl: 'images/bestseller-img-3.png', price: '3200₹', discountedPrice: '3000₹', name: 'Nike High Orange' },
        { id:4, imageUrl: 'images/bestseller-img-4.png', price: '2800₹', discountedPrice: '2500₹', name: 'Nike Dunk Yellow' },
        { id:5, imageUrl: 'images/bestseller-img-5.png', price: '4500₹', discountedPrice: '4000₹', name: 'Nike Blue High' },
        { id:6, imageUrl: 'images/bestseller-img-6.png', price: '6500₹', discountedPrice: '6000₹', name: 'Nike Red High' }
    ];

    // Function to generate HTML for a single card
    function generateCardHtml(cardData) {
        return `
            <div class="swiper-slide">
                <div class="section-4-card">
                    <a href="sneaker-description.html?id=${cardData.id}">
                        <img src="${cardData.imageUrl}" alt="img" class="section-4-card-image">
                    </a>
                    <div class="section-card-price-container">
                        <h1 class="section-card-price">${cardData.price}</h1><span>${cardData.discountedPrice}</span>
                    </div>
                    <a href="#" class="section-card-name-link">${cardData.name}</a>
                </div>
            </div>
        `;
    }

    // Function to generate HTML for all cards
    function generateAllCardsHtml(data) {
        const swiperWrapper = document.getElementById('swiper-wrapper');
        let html = '';
        data.forEach(card => {
            html += generateCardHtml(card);
        });
        swiperWrapper.innerHTML = html;
    }

    // Generate HTML for all cards
    generateAllCardsHtml(jsonData);

    // Initialize Swiper
    var swiper = new Swiper(".card_swiper", {
        spaceBetween: 20,
        slidesPerView: 3,
        loop : true,
        speed : 800,
        autoplay:{
          delay:3000
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 1,
          },
          "@1.00": {
            slidesPerView: 2,
          },
          "@1.50": {
            slidesPerView: 4,
          },
          "@3.00": {
            slidesPerView: 4, 
          },
        },
      });
});


//End of Calling Swiper card content dynamically using JSOn
