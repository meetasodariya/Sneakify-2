document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Extract the ID from the URL parameter

    const jsonData = {
        "products": [
            {
                "id": "1",
                "imageSrc": "Images/bestseller-img-1.png",
                "imageSrc2": "Images/bestseller-img-11.png",
                "name": "Nike Dunk High",
                "description": "Custom Running Shoes",
                "price": "1000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "2",
                "imageSrc": "Images/bestseller-img-2.png",
                "imageSrc2": "Images/bestseller-img-22.png",
                "name": "Nike Dunk Blue",
                "description": "Custom Running Shoes",
                "price": "2000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "3",
                "imageSrc": "Images/bestseller-img-3.png",
                "imageSrc2": "Images/bestseller-img-33.png",
                "name": "Nike High Orange",
                "description": "Custom Running Shoes",
                "price": "3000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "4",
                "imageSrc": "Images/bestseller-img-4.png",
                "imageSrc2": "Images/bestseller-img-44.jfif",
                "name": "Nike High Orange",
                "description": "Custom Running Shoes",
                "price": "3000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "5",
                "imageSrc": "Images/bestseller-img-5.png",
                "imageSrc2": "Images/bestseller-img-55.png",
                "name": "Nike High Orange",
                "description": "Custom Running Shoes",
                "price": "3000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "6",
                "imageSrc": "Images/bestseller-img-6.png",
                "imageSrc2": "Images/bestseller-img-66.jfif",
                "name": "Nike High red",
                "description": "Custom Running Shoes",
                "price": "6000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "7",
                "imageSrc": "Images/product-img-1.jfif",
                "imageSrc2": "Images/product-img-2.jfif",
                "name": "Athletic Sneakers",
                "description": "Custom Running Shoes",
                "price": "2000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "8",
                "imageSrc": "Images/category-cart-img-2.png",
                "imageSrc2": "Images/category-cart-img-22.jpg",
                "name": "Sports Sneakers",
                "description": "Custom Sports Shoes",
                "price": "2500.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "9",
                "imageSrc": "Images/category-cart-img-3.png",
                "imageSrc2": "Images/category-cart-img-33.jfif",
                "name": "Sports Sneakers",
                "description": "Basketball Shoes",
                "price": "3000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "10",
                "imageSrc": "Images/category-cart-img-4.png",
                "imageSrc2": "Images/category-cart-img-44.png",
                "name": "Sports Sneakers",
                "description": "Tennis Shoes",
                "price": "4000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "11",
                "imageSrc": "Images/category-cart-img-5.png",
                "imageSrc2": "Images/category-cart-img-55.png",
                "name": "Regular Sneakers",
                "description": "Walking Shoes",
                "price": "2000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "12",
                "imageSrc": "Images/category-cart-img-6.png",
                "imageSrc2": "Images/category-cart-img-66.jfif",
                "name": "Hiking Sneakers",
                "description": "Hiking Shoes",
                "price": "3500.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "13",
                "imageSrc": "Images/category-cart-img-7.jpeg",
                "imageSrc2": "Images/category-cart-img-77.jpg",
                "name": "Nike High Sneakers",
                "description": "Basketball Shoes",
                "price": "5000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "14",
                "imageSrc": "Images/category-cart-img-8.jpg",
                "imageSrc2": "Images/category-cart-img-88.jfif",
                "name": "Regular Sneakers",
                "description": "Regular Shoes",
                "price": "2200.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            {
                "id": "15",
                "imageSrc": "Images/category-cart-img-9.jpg",
                "imageSrc2": "Images/category-cart-img-99.jfif",
                "name": "Athletic Sneakers",
                "description": "Football Shoes",
                "price": "6000.00",
                "taxesIncluded": true,
                "sizes": [
                    "UK 5.5",
                    "UK 6",
                    "UK 6.5",
                    "UK 7",
                    "UK 7.5",
                    "UK 8",
                    "UK 8.5",
                    "UK 9",
                    "UK 9.5",
                    "UK 11",
                    "UK 11.5",
                    "UK 12"
                ]
            },
            
        ]
    };

    // Find the product data based on the product ID
    const productData = jsonData.products.find(product => product.id === productId);

    // Function to generate HTML for product details
    function generateProductHtml(data) {
        return `
            <div class="product-img-container">
                <div class="product-img-div"><img src="${data.imageSrc}" alt="img" class="product-img"></div>
                <div class="product-img-div"><img src="${data.imageSrc2}" alt="img" class="product-img"></div>
            </div>
            <div class="product-description-container">
                <div class="product-name-container">
                    <h1 class="product-name">${data.name}</h1>
                </div>
                <div class="product-description">
                    <p class="product-des">${data.description}</p>
                </div>
                <div class="product-price-container">
                    <p class="product-price">MRP: &#8377; ${data.price}</p>
                    <div class="price-taxes">${data.taxesIncluded ? '(incl. of all taxes)' : ''}</div>
                </div>
                <div class="gender-container">
                    <div class="radio-container">
                        <label for="gender">Select Gender:</label>
                        <label for="gender">
                            <input type="radio" name="gender" value="male">Man's
                        </label>
                        <label for="gender">
                            <input type="radio" name="gender" value="female">Woman's
                        </label>
                    </div>
                </div>
                <div class="size-container">
                    <label for="size">Select size:
                        <select name="size" id="size">
                            ${data.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                        </select>
                    </label>
                </div>
                <div class="customize-btn-container">
                    <a href="customize-shoe.html"><button class="customize-btn">Customize <i class="fa-regular fa-pen-to-square"></i></button></a>
                </div>
                <div class="signin-to-buy-btn-container">
                    <a href="login.html"><button class="signin-to-buy-btn">Sign In to Buy</button></a>
                </div>
            </div>
        `;
    }

    // Get the container to append the generated HTML
    const productContainer = document.getElementById('product-container');

    // Generate HTML for product details and append it to the container
    productContainer.innerHTML = generateProductHtml(productData);
});
