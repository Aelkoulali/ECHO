
// Product Data
const products = [
  {id: 1, name: "Céline sunglasses", price: 500.00, category: "Accessories", image: "Images/Products/Accessories/Celine_sunglasses.webp", Newest: true},  
  {id: 2, name: "Dior sunglasses", price: 450.00, category: "Accessories", image: "Images/Products/Accessories/Dior_sunglasses.webp", Newest: false},
  {id: 3, name: "Dolce Gabana belt", price: 500.00, category: "Accessories", image: "Images/Products/Accessories/Dolce_Gabana_belt.webp", Newest: true},
  {id: 4, name: "Givenchy belt", price: 550.00, category: "Accessories", image: "Images/Products/Accessories/Givenchy_belt.webp", Newest: true},
  {id: 5, name: "Givenchy scarf", price: 600.00, category: "Accessories", image: "Images/Products/Accessories/Givenchy_scarf.webp", Newest: true},
  {id: 6, name: "Miu Miu hat", price: 650.00, category: "Accessories", image: "Images/Products/Accessories/Miu_Miu_hat.webp", Newest: true},
  {id: 7, name: "Prada scarf", price: 700.00, category: "Accessories", image: "Images/Products/Accessories/Prada_scarf.webp", Newest: false},
  {id: 8, name: "Saint Laurent belt", price: 750.00, category: "Accessories", image: "Images/Products/Accessories/Saint_Laurent_belt.webp", Newest: false},
  {id: 9, name: "Balenciaga bag", price: 2000.00, category: "Bags", image: "Images/Products/Bags/Balenciaga_bag.webp", Newest: true},
  {id: 10, name: "Bvlgari bag", price: 2500.00, category: "Bags", image: "Images/Products/Bags/Bvlgari_bag.webp", Newest: true},
  {id: 11, name: "Dolce Gabana bag", price: 3000.00, category: "Bags", image: "Images/Products/Bags/Dolce_Gabana_bag.webp", Newest: false},
  {id: 12, name: "Chloe bag", price: 3000.00, category: "Bags", image: "Images/Products/Bags/Chloe_bag.webp", Newest: true},
  {id: 13, name: "Givenchy bag", price: 3500.00, category: "Bags", image: "Images/Products/Bags/Givenchy_bag.webp", Newest: false},
  {id: 14, name: "Loewe bag", price: 4000.00, category: "Bags", image: "Images/Products/Bags/Loewe_bag.webp", Newest: false},
  {id: 15, name: "Miu Miu bag", price: 4500.00, category: "Bags", image: "Images/Products/Bags/Miu_Miu_bag.webp", Newest: true},
  {id: 16, name: "Prada bag", price: 5000.00, category: "Bags", image: "Images/Products/Bags/Prada_bag.webp", Newest: true},
  {id: 17, name: "Saint Laurent bag", price: 5500.00, category: "Bags", image: "Images/Products/Bags/Saint_Laurent_bag.webp", Newest: true},
  {id: 18, name: "Balenciaga le dix", price: 320.00, category: "Beauty", image: "Images/Products/Beauty/Balenciaga_Le_Dix.webp", Newest: true},
  {id: 19, name: "Creed perfume", price: 150.00, category: "Beauty", image: "Images/Products/Beauty/Creed_perfume.webp", Newest: false},
  {id: 20, name: "Dior lip glow", price: 100.00, category: "Beauty", image: "Images/Products/Beauty/Dior_lip_glow.webp", Newest: true},
  {id: 21, name: "Dior mascara", price: 150.00, category: "Beauty", image: "Images/Products/Beauty/Dior_mascara.webp", Newest: false},
  {id: 22, name: "Givenchy foundation", price: 130.00, category: "Beauty", image: "Images/Products/Beauty/Givenchy_foundation.webp", Newest: true},
  {id: 23, name: "Guerlain lipstick", price: 115.00, category: "Beauty", image: "Images/Products/Beauty/Guerlain_lipstick.webp", Newest: false},
  {id: 24, name: "Guerlain powder", price: 125.00, category: "Beauty", image: "Images/Products/Beauty/Guerlain_powder_blush.webp", Newest: true},
  {id: 25, name: "Guerlain perfume", price: 180.00, category: "Beauty", image: "Images/Products/Beauty/Guerlain_perfume.webp", Newest: false},
  {id: 26, name: "Hermès foundation", price: 135.00, category: "Beauty", image: "Images/Products/Beauty/Hermès_foundation.webp", Newest: true},
  {id: 27, name: "Balenciaga t-shirt", price: 150.00, category: "Clothing", image: "Images/Products/Clothing/Balenciaga_T_Shirt.webp", Newest: true},
  {id: 28, name: "Dolce_Gabana jacket", price: 1250.00, category: "Clothing", image: "Images/Products/Clothing/Dolce_Gabana_Jacket.webp", Newest: false},
  {id: 29, name: "Miu Miu jeans", price: 1000.00, category: "Clothing", image: "Images/Products/Clothing/Miu_Miu_Jeans.webp", Newest: true},
  {id: 30, name: "Miu Miu t-shirt", price: 350.00, category: "Clothing", image: "Images/Products/Clothing/Miu_Miu_T_Shirt.webp", Newest: false},
  {id: 31, name: "Prada t-shirt", price: 1400.00, category: "Clothing", image: "Images/Products/Clothing/Prada_T_Shirt.webp", Newest: true},
  {id: 32, name: "Ralph Lauren jacket", price: 550.00, category: "Clothing", image: "Images/Products/Clothing/Ralph_Lauren_Jacket.webp", Newest: true},
  {id: 33, name: "Ralph Lauren pant", price: 1500.00, category: "Clothing", image: "Images/Products/Clothing/Ralph_Lauren_Pant.webp", Newest: false},
  {id: 34, name: "Saint Laurent jeans", price: 1150.00, category: "Clothing", image: "Images/Products/Clothing/Saint_Laurent_Jeans.webp", Newest: true},
  {id: 35, name: "Dolce Gabana dress", price: 2600.00, category: "Dresses", image: "Images/Products/Dresses/Dolce_Gabana_Dress.webp", Newest: false},
  {id: 36, name: "Giorgio Armani dress", price: 3650.00, category: "Dresses", image: "Images/Products/Dresses/Giorgio_Armani_Dress.webp", Newest: true},
  {id: 37, name: "Givenchy dress", price: 3700.00, category: "Dresses", image: "Images/Products/Dresses/Givenchy_Dress.webp", Newest: false},
  {id: 38, name: "Michael Kors dress", price: 3750.00, category: "Dresses", image: "Images/Products/Dresses/Michael_Kors_Dress.webp", Newest: true},
  {id: 39, name: "Prada dress", price: 3800.00, category: "Dresses", image: "Images/Products/Dresses/Prada_Dress.webp", Newest: false},
  {id: 40, name: "Ralph Lauren dress", price: 4850.00, category: "Dresses", image: "Images/Products/Dresses/Ralph_Lauren_Dress.webp", Newest: true},
  {id: 41, name: "Saint Laurent dress", price: 5900.00, category: "Dresses", image: "Images/Products/Dresses/Saint_Laurent_Dress.webp", Newest: false},
  {id: 42, name: "Versace dress", price: 3950.00, category: "Dresses", image: "Images/Products/Dresses/Versace_Dress.webp", Newest: true},
  {id: 43, name: "Bvlgari ring", price: 2000.00, category: "Jewelry", image: "Images/Products/Jewelry/Bvlgari_Ring.webp", Newest: true},
  {id: 44, name: "Chopard earrings", price: 2050.00, category: "Jewelry", image: "Images/Products/Jewelry/Chopard_Earrings.webp", Newest: false},
  {id: 45, name: "Givenchy necklace", price: 2100.00, category: "Jewelry", image: "Images/Products/Jewelry/Givenchy_Necklace.webp", Newest: true},
  {id: 46, name: "Gucci Bracelet", price: 1750.00, category: "Jewelry", image: "Images/Products/Jewelry/Gucci_Bracelet.webp", Newest: false},
  {id: 47, name: "Gucci cuffs", price: 1500.00, category: "Jewelry", image: "Images/Products/Jewelry/Gucci_Cuffs.webp", Newest: true},
  {id: 48, name: "Gucci necklace", price: 2250.00, category: "Jewelry", image: "Images/Products/Jewelry/Gucci_Necklace.webp", Newest: false},
  {id: 49, name: "Gucci ring", price: 2250.00, category: "Jewelry", image: "Images/Products/Jewelry/Gucci_Ring.webp", Newest: true},
  {id: 50, name: "Lana earrings", price: 1300.00, category: "Jewelry", image: "Images/Products/Jewelry/Lana_Earrings.webp", Newest: false},
  {id: 51, name: "Amiri sneakers", price: 1350.00, category: "Shoes", image: "Images/Products/Shoes/Amiri_Sneakers.webp", Newest: true},
  {id: 52, name: "Dolce Gabana sneakers", price: 2400.00, category: "Shoes", image: "Images/Products/Shoes/Dolce_Gabana_Sneakers.webp", Newest: false},
  {id: 53, name: "Givenchy boots", price: 2450.00, category: "Shoes", image: "Images/Products/Shoes/Givenchy_Boots.webp", Newest: true},
  {id: 54, name: "Givenchy slide", price: 2500.00, category: "Shoes", image: "Images/Products/Shoes/Givenchy_Slide.webp", Newest: false},
  {id: 55, name: "Gucci heels", price: 2550.00, category: "Shoes", image: "Images/Products/Shoes/Gucci_Heels.webp", Newest: true},
  {id: 56, name: "Moschino heels", price: 2600.00, category: "Shoes", image: "Images/Products/Shoes/Moschino_Heels.webp", Newest: false},
  {id: 57, name: "Valentino Garavani sneakers", price: 2650.00, category: "Shoes", image: "Images/Products/Shoes/Valentino_Garavani_Sneakers.webp", Newest: true},
  {id: 58, name: "Versace heels", price: 2700.00, category: "Shoes", image: "Images/Products/Shoes/Versace_Heels.webp", Newest: false}
];

// Create one product card
const productGrid = document.getElementById("product-grid");

function createCard(product) {
  return `
    <div class="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">

      <img
        src="${product.image}"
        alt="${product.name}"
        class="w-full h-56 object-cover">

      <div class="p-4">

        <h2 class="text-lg font-bold">
          ${product.name}
        </h2>

        <p class="text-gray-500">
          ${product.category}
        </p>

        <p class="text-pink-600 font-bold mt-2">
          $${product.price}
        </p>

        <div class="mt-auto pt-4">
        <button
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Buy
        </button>
        </div>

      </div>

    </div>
  `;
}

// Display products in the grid