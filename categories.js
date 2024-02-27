document.addEventListener('DOMContentLoaded', function () {
  const jsonData = {
    "categories": [
      {
        "id": 7,
        "imageUrl": "Images/product-img-1.jfif",
        "heading": "Athletic Sneakers",
        "tagline": "Running Shoes",
        "price": "2000",
        "stock": "instock",
        "gender": "smale",
        "color": "gray"
      },
      {
        "id": 8,
        "imageUrl": "Images/category-cart-img-2.png",
        "heading": "Sports Sneakers",
        "tagline": "Basketball Shoes",
        "price": "2500",
        "stock": "instock",
        "gender": "smale",
        "color": "white"
      },
      {
        "id": 9,
        "imageUrl": "Images/category-cart-img-3.png",
        "heading": "Sports Sneakers Blue",
        "tagline": "Basketball Shoes",
        "price": "3000",
        "stock": "outofstock",
        "gender": "smale",
        "color": "blue"
      },
      {
        "id": 10,
        "imageUrl": "Images/category-cart-img-4.png",
        "heading": "Sports Sneakers",
        "tagline": "Tennis Shoes",
        "price": "4000",
        "stock": "outofstock",
        "gender": "sfemale",
        "color": "red"
      },
      {
        "id": 11,
        "imageUrl": "Images/category-cart-img-5.png",
        "heading": "Regular Sneakers",
        "tagline": "Walking Shoes",
        "price": "2000",
        "stock": "instock",
        "gender": "sfemale",
        "color": "blue"
      },
      {
        "id": 12,
        "imageUrl": "Images/category-cart-img-6.png",
        "heading": "Hiking Sneakers",
        "tagline": "Hiking Shoes",
        "price": "3500",
        "stock": "instock",
        "gender": "smale",
        "color": "yellow"
      },
      {
        "id": 13,
        "imageUrl": "Images/category-cart-img-7.jpeg",
        "heading": "Nike High Sneakers",
        "tagline": "Basketball Shoes",
        "price": "5000",
        "stock": "instock",
        "gender": "smale",
        "color": "white"
      },
      {
        "id": 14,
        "imageUrl": "Images/category-cart-img-8.jpg",
        "heading": "Regular Sneakers",
        "tagline": "Regular Shoes",
        "price": "2200",
        "stock": "outofstock",
        "gender": "smale",
        "color": "white"
      },
      {
        "id": 15,
        "imageUrl": "Images/category-cart-img-9.jpg",
        "heading": "Athletic Sneakers",
        "tagline": "Football Shoes",
        "price": "6000",
        "stock": "instock",
        "gender": "smale",
        "color": "black"
      }
    ]
  };


  // Function to filter shoes based on category
  function filterByCategory(categoryName) {
    const filteredCategories = jsonData.categories.filter(category => {
      // Check if the shoe belongs to the clicked category
      return category.tagline.toLowerCase().includes(categoryName.toLowerCase());
    });

    // Display the filtered shoes
    const categoriesContainer = document.querySelector('.categories-cards-container');
    categoriesContainer.innerHTML = generateCategoryCards(filteredCategories);
    addRedirectEventListeners();
  }

  function filterAndSortCategories(event) {
    event.preventDefault();

    const stockFilter = document.getElementById('stock').value;
    const genderFilter = document.getElementById('sgender').value;
    const priceRangeFilter = document.getElementById('pricerange').value;
    const colorFilter = document.getElementById('shoecolor').value;
    const sortOption = document.getElementById('sort').value;

    let filteredCategories = jsonData.categories.filter(category => {
      return (stockFilter === 'all' || category.stock === stockFilter) &&
        (genderFilter === 'sallgender' || category.gender === genderFilter) &&
        (priceRangeFilter === 'all' || checkPriceRange(category.price, priceRangeFilter)) &&
        (colorFilter === 'allcolor' || category.color === colorFilter);
    });

    // Sort the filtered categories based on the selected sort option
    filteredCategories = sortCategories(filteredCategories, sortOption);

    // Display the filtered and sorted categories
    const categoriesContainer = document.querySelector('.categories-cards-container');
    categoriesContainer.innerHTML = generateCategoryCards(filteredCategories);
    addRedirectEventListeners();

    // Add event listener to each filtered category card
    const filteredCategoryCards = document.querySelectorAll('.categories-card');
    filteredCategoryCards.forEach(card => {
      card.addEventListener('click', redirectToDescriptionPage);
    });
  }

  function redirectToDescriptionPage(event) {
    if (!event.target.classList.contains('category-card-cart-btn')) {
      const categoryId = event.currentTarget.id.split('-')[1]; // Extract category id from card id
      window.location.href = `sneaker-description.html?id=${categoryId}`;
    }
  }


  function checkPriceRange(price, range) {
    switch (range) {
      case 'below1000':
        return price < 1000;
      case '1000to2000':
        return price >= 1000 && price <= 2000;
      case '2000to3000':
        return price >= 2000 && price <= 3000;
      case '3000to4000':
        return price >= 3000 && price <= 4000;
      case 'above4000':
        return price > 4000;
      default:
        return false;
    }
  }

  function sortCategories(categories, sortOption) {
    switch (sortOption) {
      case 'A - Z':
        return categories.sort((a, b) => a.heading.localeCompare(b.heading));
      case 'Z - A':
        return categories.sort((a, b) => b.heading.localeCompare(a.heading));
      case 'priceltoh':
        return categories.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      case 'pricehtol':
        return categories.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      case 'instock':
        return categories.sort((a, b) => a.stock.localeCompare(b.stock));
      default:
        return categories;
    }
  }


  // Function to generate HTML for category cards
  function generateCategoryCards(data) {
    let html = '';
    data.forEach(category => {
      html += `
        <div class="categories-card" id="category-${category.id}">
          <div class="category-card-image">
            <img src="${category.imageUrl}" alt="img" class="category-img">
          </div>
          <div class="category-card-heading">
            <h1 class="category-card-head">${category.heading}</h1>
          </div>
          <div class="category-card-tagline">
            <p class="category-card-tag">${category.tagline}</p>
          </div>
          <div class="category-card-price">
            <p class="category-card-price">${category.price}&#8377</p>
          </div>
          <div class="category-card-add-to-cart">
            <button class="category-card-cart-btn"><i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp; ADD TO CART</button>
          </div>
        </div>
      `;
    });
    return html;
  }

  function addRedirectEventListeners() {
    const categoryCards = document.querySelectorAll('.categories-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', redirectToDescriptionPage);
    });
}

  // Get the container to append the generated HTML
  const categoriesContainer = document.querySelector('.categories-cards-container');

  // Generate HTML for category cards and append it to the container
  categoriesContainer.innerHTML = generateCategoryCards(jsonData.categories);

  // Add event listener for applying filters and sorting
  const applyFiltersButton = document.querySelector('.apply-filters');
  applyFiltersButton.addEventListener('click', filterAndSortCategories);

  // Add event listener to each category card
  const categoryCards = document.querySelectorAll('.categories-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', redirectToDescriptionPage);
  });

  // Event listener for category links
  const categoryLinks = document.querySelectorAll('.category-name');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const categoryName = this.textContent;
      filterByCategory(categoryName);
    });
  });
  addRedirectEventListeners();
});