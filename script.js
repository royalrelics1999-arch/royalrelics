// ROYALRELICS - Complete Product Gallery
// Product Slider, Search, Filter and Cart

const IMAGE_ROOT = "./royalrelics_new_collection_images/royalrelics_new_collection/images/";

const PRODUCTS = [
  {
    id: 1,
    name: "SMOKE",
    type: "Sunglasses",
    colour: "Smoke Brown",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A translucent smoke-brown frame with warm gradient lenses and a bold, confident silhouette.",
    image: IMAGE_ROOT + "frame-smoke-brown-1.jpeg.png",
    gallery: [
      IMAGE_ROOT + "frame-smoke-brown-1.jpeg.png",
      IMAGE_ROOT + "frame-smoke-brown-2.jpeg.png",
      IMAGE_ROOT + "frame-smoke-brown-3.jpeg.png",
      IMAGE_ROOT + "frame-smoke-brown-4.jpeg.png"
    ]
  },
  {
    id: 2,
    name: "GLOSSY BLACK",
    type: "Sunglasses",
    colour: "Glossy Black",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A glossy black statement frame paired with warm amber lenses.",
    image: IMAGE_ROOT + "royal-black-4.png",
    gallery: [
      IMAGE_ROOT + "royal-black-1.png",
      IMAGE_ROOT + "royal-black-2.png",
      IMAGE_ROOT + "royal-black-3.png",
      IMAGE_ROOT + "royal-black-4.png"
    ]
  },
  {
    id: 3,
    name: "CRYSTAL",
    type: "Eyeglasses",
    colour: "Crystal Red",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A crystal-clear frame with a rich red tint.",
    image: IMAGE_ROOT + "frame-crystal-red-1.jpeg.png",
    gallery: [
      IMAGE_ROOT + "frame-crystal-red-1.jpeg.png",
      IMAGE_ROOT + "frame-crystal-red-2.jpeg.png",
      IMAGE_ROOT + "frame-crystal-red-3.jpeg.png",
      IMAGE_ROOT + "frame-crystal-red-4.jpeg.png"
    ]
  },
  {
    id: 4,
    name: "BLUE",
    type: "Eyeglasses",
    colour: "Transparent Blue",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A vivid transparent-blue frame.",
    image: IMAGE_ROOT + "frame-transparent-blue-1.jpeg.png",
    gallery: [
      IMAGE_ROOT + "frame-transparent-blue-1.jpeg.png",
      IMAGE_ROOT + "frame-transparent-blue-2.jpeg.png",
      IMAGE_ROOT + "frame-transparent-blue-3.jpeg.png",
      IMAGE_ROOT + "frame-transparent-blue-4.jpeg.png"
    ]
  },
  {
    id: 5,
    name: "TORTOISE",
    type: "Sunglasses",
    colour: "Tortoise Brown",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A warm tortoiseshell frame with dark lenses.",
    image: IMAGE_ROOT + "frame-tortoise-black-1.jpeg.png",
    gallery: [
      IMAGE_ROOT + "frame-tortoise-black-1.jpeg.png",
      IMAGE_ROOT + "frame-tortoise-black-2.jpeg.png",
      IMAGE_ROOT + "frame-tortoise-black-3.jpeg.png",
      IMAGE_ROOT + "frame-tortoise-black-4.jpeg.png"
    ]
  },
  {
    id: 6,
    name: "AMBER",
    type: "Sunglasses",
    colour: "Orange / Amber",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A bold orange-amber frame.",
    image: IMAGE_ROOT + "royal-amberr-1.png",
    gallery: [
      IMAGE_ROOT + "royal-amberr-1.png",
      IMAGE_ROOT + "royal-amberr-2.png",
      IMAGE_ROOT + "royal-amber-3.png",
      IMAGE_ROOT + "royal-amber-4.png"
    ]
  },
  {
    id: 7,
    name: "EMERALD",
    type: "Sunglasses",
    colour: "Dark Green",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "An elegant emerald-green frame.",
    image: IMAGE_ROOT + "royal-emerald-1.png",
    gallery: [
      IMAGE_ROOT + "royal-emerald-1.png",
      IMAGE_ROOT + "royal-emerald-2.png",
      IMAGE_ROOT + "royal-emerald-3.png",
      IMAGE_ROOT + "royal-emerald-4.png"
    ]
  },
  {
    id: 8,
    name: "PINK",
    type: "Sunglasses",
    colour: "Hot Pink",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A vibrant hot-pink frame.",
    image: IMAGE_ROOT + "royal-pink-1.png",
    gallery: [
      IMAGE_ROOT + "royal-pink-1.png",
      IMAGE_ROOT + "royal-pink-2.png",
      IMAGE_ROOT + "royal-pink-3.png",
      IMAGE_ROOT + "royal-pink-4.png"
    ]
  },
  {
    id: 9,
    name: "HONEY",
    type: "Sunglasses",
    colour: "Golden Brown",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A warm golden-brown frame.",
    image: IMAGE_ROOT + "royal-honey-1.png",
    gallery: [
      IMAGE_ROOT + "royal-honey-1.png",
      IMAGE_ROOT + "royal-honey-2.png",
      IMAGE_ROOT + "royal-honey-3.png",
      IMAGE_ROOT + "royal-honey-4.png"
    ]
  },
  {
    id: 10,
    name: "SAPPHIRE",
    type: "Sunglasses",
    colour: "Teal Blue",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A striking teal-blue frame.",
    image: IMAGE_ROOT + "royal-sapphire-1.png",
    gallery: [
      IMAGE_ROOT + "royal-sapphire-1.png",
      IMAGE_ROOT + "royal-sapphire-2.png",
      IMAGE_ROOT + "royal-sapphire-3.png",
      IMAGE_ROOT + "royal-sapphire-4.png"
    ]
  },
  {
    id: 11,
    name: "CRYSTAL",
    type: "Eyeglasses",
    colour: "Crystal Clear",
    price: 799,
    tag: "NEW ARRIVAL",
    description: "A crystal-clear optical frame.",
    image: IMAGE_ROOT + "royal-crystal-1.png",
    gallery: [
      IMAGE_ROOT + "royal-crystal-1.png",
      IMAGE_ROOT + "royal-crystal-2.png",
      IMAGE_ROOT + "royal-crystal-3.png",
      IMAGE_ROOT + "royal-crystal-4.png"
    ]
  },
  {
    id: 12,
    name: "CHROME",
    type: "Sunglasses",
    colour: "Crystal Grey",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A refined round silhouette with a polished chrome finish.",
    image: IMAGE_ROOT + "royalrelics-product-6.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-6.png"]
  },
  {
    id: 13,
    name: "SHADOW",
    type: "Sunglasses",
    colour: "Black Gradient",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A sleek dark aviator frame.",
    image: IMAGE_ROOT + "royalrelics-product-7.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-7.png"]
  },
  {
    id: 14,
    name: "GOLDEN",
    type: "Sunglasses",
    colour: "Gold & Black",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A premium round gold-tone frame.",
    image: IMAGE_ROOT + "royalrelics-product-8.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-8.png"]
  },
  {
    id: 15,
    name: "FOREST",
    type: "Sunglasses",
    colour: "Green Lens",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A minimal rimless style with deep green lenses.",
    image: IMAGE_ROOT + "royalrelics-product-9.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-9.png"]
  },
  {
    id: 16,
    name: "GUNMETAL",
    type: "Sunglasses",
    colour: "Gunmetal Grey",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A modern round-aviator profile.",
    image: IMAGE_ROOT + "royalrelics-product-10.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-10.png"]
  },
  {
    id: 17,
    name: "OLIVE",
    type: "Sunglasses",
    colour: "Olive Green",
    price: ,
    tag: "NEW ARRIVAL",
    description: "A classic aviator-inspired frame.",
    image: IMAGE_ROOT + "royalrelics-product-11.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-11.png"]
  },
  {
    id: 18,
    name: "FERRARI",
    type: "Sunglasses",
    colour: "Black & Gold",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A bold round frame with gold-tone accents.",
    image: IMAGE_ROOT + "royalrelics-product-12.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-12.png"]
  },
  {
    id: 19,
    name: "COCOA",
    type: "Sunglasses",
    colour: "Brown & Gold",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A warm brown lens design.",
    image: IMAGE_ROOT + "royalrelics-product-13.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-13.png"]
  },
  {
    id: 20,
    name: "POLAR",
    type: "Sunglasses",
    colour: "Brown Polarized Look",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A gold-accented frame with rich brown lenses.",
    image: IMAGE_ROOT + "royalrelics-product-14.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-14.png"]
  },
  {
    id: 21,
    name: "AURUM",
    type: "Sunglasses",
    colour: "Gold & Dark Grey",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A sophisticated gold-accented round frame.",
    image: IMAGE_ROOT + "royalrelics-product-15.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-15.png"]
  },
  {
    id: 22,
    name: "BRONZE",
    type: "Sunglasses",
    colour: "Bronze Brown",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A polished gold-tone frame with warm brown lenses.",
    image: IMAGE_ROOT + "royalrelics-product-16.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-16.png"]
  },
  {
    id: 23,
    name: "SILVER",
    type: "Sunglasses",
    colour: "Silver & Black",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A clean metal frame with dark lenses.",
    image: IMAGE_ROOT + "royalrelics-product-17.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-17.png"]
  },
  {
    id: 24,
    name: "VERDE",
    type: "Sunglasses",
    colour: "Green & Gold",
    price: 499,
    tag: "NEW ARRIVAL",
    description: "A gold-tone frame paired with deep green lenses.",
    image: IMAGE_ROOT + "royalrelics-product-18.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-18.png"]
  },
  {
    id: 25,
    name: "RACING",
    type: "Sunglasses",
    colour: "Black & Gold",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A sporty premium-inspired frame.",
    image: IMAGE_ROOT + "royalrelics-product-19.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-19.png"]
  },
  {
    id: 26,
    name: "ONYX",
    type: "Sunglasses",
    colour: "Glossy Black",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A bold black frame.",
    image: IMAGE_ROOT + "royalrelics-product-20.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-20.png"]
  },
  {
    id: 27,
    name: "CLEAR",
    type: "Eyeglasses",
    colour: "Black & Clear Lens",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A lightweight round optical frame.",
    image: IMAGE_ROOT + "royalrelics-product-21.png",
    gallery: [IMAGE_ROOT + "royalrelics-product-21.png"]
  },
  {
    id: 28,
    name: "AQUA",
    type: "Sunglasses",
    colour: "Transparent Blue",
    price: 599,
    tag: "NEW ARRIVAL",
    description: "A transparent aqua-blue frame.",
    image: IMAGE_ROOT + "royal-aqua-1.png",
    gallery: [
      IMAGE_ROOT + "royal-aqua-1.png",
      IMAGE_ROOT + "royal-aqua-2.png",
      IMAGE_ROOT + "royal-aqua-3.png",
      IMAGE_ROOT + "royal-aqua-4.png.png"
    ]
  }
];
// ==========================================
// GLOBAL VARIABLES
// ==========================================

let cart = [];
let sliderTimer = null;
let currentGallery = [];
let currentSlide = 0;
let currentProduct = null;

const $ = (id) => document.getElementById(id);

const productGrid = $("productGrid");
const categoryFilter = $("categoryFilter");
const productSearch = $("productSearch");
const cartDrawer = $("cartDrawer");
const overlay = $("overlay");
const productModal = $("productModal");
const productModalBody = $("productModalBody");


// ==========================================
// PRICE FORMAT
// ==========================================

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}


// ==========================================
// CART DISPLAY
// ==========================================

function renderCart() {

  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if ($("cartCount")) {
    $("cartCount").textContent = count;
  }

  if ($("drawerCount")) {
    $("drawerCount").textContent = `(${count})`;
  }

  if ($("cartSubtotal")) {
    $("cartSubtotal").textContent = money(subtotal);
  }

  const cartItems = $("cartItems");

  if (!cartItems) return;

  cartItems.innerHTML = cart.length

    ? cart.map(item => `

      <div class="cart-row">

        <div>
          <strong>${item.name}</strong>
          <br>
          ${money(item.price)} × ${item.qty}
        </div>

        <button data-remove="${item.id}">
          REMOVE
        </button>

      </div>

    `).join("")

    : '<p class="empty-cart">Your bag is currently empty.</p>';

}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

  if (!cartDrawer || !overlay) return;

  cartDrawer.classList.add("open");

  overlay.classList.add("show");

  cartDrawer.setAttribute("aria-hidden", "false");

}


// ==========================================
// CLOSE CART
// ==========================================

function closeCart() {

  if (!cartDrawer || !overlay) return;

  cartDrawer.classList.remove("open");

  overlay.classList.remove("show");

  cartDrawer.setAttribute("aria-hidden", "true");

}


// ==========================================
// STOP PRODUCT SLIDER
// ==========================================

function stopSlider() {

  if (sliderTimer) {

    clearInterval(sliderTimer);

    sliderTimer = null;

  }

}


// ==========================================
// CHECK AVAILABLE PRODUCT IMAGES
// ==========================================

function getAvailableImages(paths) {

  const checks = paths.map(path =>

    new Promise(resolve => {

      const img = new Image();

      img.onload = () => resolve(path);

      img.onerror = () => resolve(null);

      img.src = path;

    })

  );

  return Promise.all(checks).then(

    results => results.filter(Boolean)

  );

}


// ==========================================
// UPDATE PRODUCT SLIDER
// ==========================================

function updateSlide(index) {

  if (!currentGallery.length) return;

  currentSlide =
    (index + currentGallery.length) % currentGallery.length;

  const image = $("productSlideImage");

  const counter = $("productSlideCounter");

  if (image) {

    image.style.opacity = "0";

    window.setTimeout(() => {

      image.src = currentGallery[currentSlide];

      image.onload = () => {
        image.style.opacity = "1";
      };

    }, 120);

  }

  if (counter) {
    counter.textContent = `${currentSlide + 1} / ${currentGallery.length}`;
  }

  document.querySelectorAll(".product-thumbnail").forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentSlide);
  });

}


// ==========================================
// START AUTO SLIDER
// ==========================================

function startSlider() {

  stopSlider();

  if (currentGallery.length <= 1) return;

  sliderTimer = window.setInterval(() => {

    updateSlide(currentSlide + 1);

  }, 2500);

}


// ==========================================
// OPEN PRODUCT DETAILS
// ==========================================

async function openProductDetails(id) {

  const product = PRODUCTS.find(
    item => item.id === Number(id)
  );

  if (!product || !productModal || !productModalBody) return;

  stopSlider();

  currentProduct = product;

  productModalBody.innerHTML = `

    <div class="product-detail-layout">

      <div class="product-gallery-wrap">
        <div class="product-detail-image product-slider">
          <img id="productSlideImage" src="${product.image}" alt="${product.name}">
          <button class="product-slide-arrow product-slide-prev" type="button" data-slide-prev aria-label="Previous photo">&#10094;</button>
          <button class="product-slide-arrow product-slide-next" type="button" data-slide-next aria-label="Next photo">&#10095;</button>
          <span class="product-slide-counter" id="productSlideCounter">1 / 1</span>
        </div>
        <div class="product-thumbnails" id="productThumbnails" aria-label="Product photos"></div>
      </div>

      <div class="product-detail-info">

        <span class="product-detail-tag">
          ${product.tag}
        </span>

        <h2 id="productModalTitle">
          ${product.name}
        </h2>

        <p class="product-detail-category">
          ${product.type} · ${product.colour}
        </p>

        <p class="product-detail-description">
          ${product.description}
        </p>

        <div class="product-detail-price">
          ${money(product.price)}
        </div>

        <button
          class="add-button"
          data-modal-add="${product.id}"
        >
          ADD TO BAG +
        </button>

      </div>

    </div>

  `;

  productModal.classList.add("open");

  productModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  const available = await getAvailableImages(
    product.gallery || [product.image]
  );

  if (
    !productModal.classList.contains("open") ||
    currentProduct !== product
  ) return;

  currentGallery = available.length
    ? available
    : [product.image];

  currentSlide = 0;

  const thumbnails = $("productThumbnails");
  if (thumbnails) {
    thumbnails.innerHTML = currentGallery.map((src, index) => `
      <button type="button" class="product-thumbnail ${index === 0 ? "active" : ""}"
              data-thumbnail="${index}" aria-label="View product photo ${index + 1}">
        <img src="${src}" alt="${product.name} view ${index + 1}">
      </button>
    `).join("");
  }

  const image = $("productSlideImage");

  if (image) {

    image.src = currentGallery[0];

    image.alt = product.name;

  }

  const counter = $("productSlideCounter");

  if (counter) {

    counter.textContent =
      `1 / ${currentGallery.length}`;

  }

  const prev = productModalBody.querySelector(
    "[data-slide-prev]"
  );

  const next = productModalBody.querySelector(
    "[data-slide-next]"
  );

  if (prev) {
    prev.hidden = currentGallery.length <= 1;
  }

  if (next) {
    next.hidden = currentGallery.length <= 1;
  }

  startSlider();

}


// ==========================================
// CLOSE PRODUCT DETAILS
// ==========================================

function closeProductDetails() {

  stopSlider();

  currentProduct = null;

  currentGallery = [];

  if (productModal) {

    productModal.classList.remove("open");

    productModal.setAttribute("aria-hidden", "true");

  }

  document.body.classList.remove("modal-open");

}


// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addProductToCart(id) {

  const product = PRODUCTS.find(
    item => item.id === Number(id)
  );

  if (!product) return;

  const existing = cart.find(
    item => item.id === product.id
  );

  if (existing) {

    existing.qty += 1;

  } else {

    cart.push({
      ...product,
      qty: 1
    });

  }

  renderCart();

}
// ==========================================
// PRODUCT CARD CLICK EVENTS
// ==========================================

if (productGrid) {

  productGrid.addEventListener("click", event => {

    const detailsTarget = event.target.closest("[data-details]");

    if (detailsTarget) {

      openProductDetails(detailsTarget.dataset.details);

      return;

    }

    const addButton = event.target.closest("[data-add]");

    if (addButton) {

      addProductToCart(addButton.dataset.add);

      addButton.textContent = "ADDED ✓";

      window.setTimeout(() => {

        addButton.textContent = "ADD TO BAG +";

      }, 900);

    }

  });


  // Keyboard accessibility

  productGrid.addEventListener("keydown", event => {

    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target.matches("[data-details]")
    ) {

      event.preventDefault();

      openProductDetails(event.target.dataset.details);

    }

  });

}


// ==========================================
// PRODUCT MODAL CONTROLS
// ==========================================

if ($("productModalClose")) {

  $("productModalClose").addEventListener(
    "click",
    closeProductDetails
  );

}


if (productModal) {

  productModal.addEventListener("click", event => {

    if (event.target === productModal) {

      closeProductDetails();

      return;

    }


    // Previous Image

    if (event.target.closest("[data-slide-prev]")) {

      updateSlide(currentSlide - 1);

      startSlider();

      return;

    }


    // Next Image

    if (event.target.closest("[data-slide-next]")) {

      updateSlide(currentSlide + 1);

      startSlider();

      return;

    }


    // Select a product thumbnail
    const thumbnail = event.target.closest("[data-thumbnail]");
    if (thumbnail) {
      updateSlide(Number(thumbnail.dataset.thumbnail));
      startSlider();
      return;
    }

    // Add From Product Details
    const addButton = event.target.closest("[data-modal-add]");

    if (addButton) {

      addProductToCart(addButton.dataset.modalAdd);

      closeProductDetails();

      openCart();

    }

  });

}


// ==========================================
// CART REMOVE PRODUCT
// ==========================================

if ($("cartItems")) {

  $("cartItems").addEventListener("click", event => {

    const removeButton = event.target.closest("[data-remove]");

    if (!removeButton) return;

    cart = cart.filter(
      item => item.id !== Number(removeButton.dataset.remove)
    );

    renderCart();

  });

}


// ==========================================
// CATEGORY FILTER
// ==========================================

if (categoryFilter) {

  categoryFilter.addEventListener(
    "change",
    renderProducts
  );

}


// ==========================================
// PRODUCT SEARCH
// ==========================================

if (productSearch) {

  productSearch.addEventListener(
    "input",
    renderProducts
  );

}


// ==========================================
// CART OPEN / CLOSE
// ==========================================

if ($("cartToggle")) {

  $("cartToggle").addEventListener(
    "click",
    openCart
  );

}


if ($("cartClose")) {

  $("cartClose").addEventListener(
    "click",
    closeCart
  );

}


if (overlay) {

  overlay.addEventListener(
    "click",
    closeCart
  );

}


// ==========================================
// WHATSAPP CHECKOUT
// ==========================================

const WHATSAPP_NUMBER = "918308801911";

if ($("checkoutButton")) {

  $("checkoutButton").addEventListener("click", () => {

    if (cart.length === 0) {
      alert("Your bag is empty!");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    let message = "Hello ROYALRELICS! I want to place an order.\n\n";

    message += "ORDER DETAILS:\n";

    cart.forEach((item, index) => {

      message += `${index + 1}. ${item.name}\n`;
      message += `Quantity: ${item.qty}\n`;
      message += `Price: ₹${item.price * item.qty}\n\n`;

    });

    message += `TOTAL AMOUNT: ₹${total}\n\n`;
    message += "Please share the next steps for ordering.";

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

  });

}


// ==========================================
// MOBILE MENU
// ==========================================

if ($("menuToggle") && $("mainNav")) {

  $("menuToggle").addEventListener("click", () => {

    $("mainNav").classList.toggle("open");

  });

}


// ==========================================
// HEADER SEARCH TOGGLE
// ==========================================

if ($("searchToggle") && $("searchPanel")) {

  $("searchToggle").addEventListener("click", () => {

    $("searchPanel").classList.toggle("open");

  });

}


// ==========================================
// CLOSE SEARCH PANEL
// ==========================================

if ($("searchClose") && $("searchPanel")) {

  $("searchClose").addEventListener("click", () => {

    $("searchPanel").classList.remove("open");

  });

}


// ==========================================
// HEADER SEARCH INPUT
// ==========================================

if ($("searchInput") && productSearch) {

  $("searchInput").addEventListener("input", event => {

    productSearch.value = event.target.value;

    renderProducts();

    if ($("products")) {

      $("products").scrollIntoView({
        behavior: "smooth"
      });

    }

  });

}


// ==========================================
// ROYALRELICS NEWSLETTER - GOOGLE SHEETS
// ==========================================

const NEWSLETTER_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyRN1ifaItaGWBPLQmLDsubka2-_R53e2ghN-4oNpOYov918VYoSNkL76JrY1i_6pTP/exec";

if ($("newsletterForm")) {

  $("newsletterForm").addEventListener("submit", async (event) => {

    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    const message = $("newsletterMessage");
    const submitButton = form.querySelector('button[type="submit"]');

    if (!email) {
      message.textContent = "Please enter your email address.";
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "SUBSCRIBING...";

    try {

      const formData = new URLSearchParams();
      formData.append("email", email);

      await fetch(NEWSLETTER_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      message.textContent =
        "Thank you! You have subscribed to RoyalRelics.";

      form.reset();

    } catch (error) {

      message.textContent =
        "Something went wrong. Please try again.";

      console.error("Newsletter Error:", error);

    } finally {

      submitButton.disabled = false;
      submitButton.textContent = "SUBSCRIBE";

    }

  });

}


// ==========================================
// KEYBOARD CONTROLS
// ==========================================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeProductDetails();

    closeCart();

  }


  if (
    productModal &&
    productModal.classList.contains("open") &&
    currentGallery.length > 1
  ) {

    if (event.key === "ArrowLeft") {

      updateSlide(currentSlide - 1);

    }

    if (event.key === "ArrowRight") {

      updateSlide(currentSlide + 1);

    }

  }

});


// ==========================================
// INITIALIZE WEBSITE
// ==========================================

// ==========================================
// DISPLAY PRODUCTS
// ==========================================

// SWAP PRODUCT POSITIONS
const chromeIndex = PRODUCTS.findIndex(p => p.id === 12);
const aquaIndex = PRODUCTS.findIndex(p => p.id === 28);

if (chromeIndex !== -1 && aquaIndex !== -1) {
  [PRODUCTS[chromeIndex], PRODUCTS[aquaIndex]] =
  [PRODUCTS[aquaIndex], PRODUCTS[chromeIndex]];
}

function renderProducts() {
  // ==========================================
// DISPLAY ALL PRODUCTS IN ONE COMMON GRID
// ==========================================

function renderProducts() {
  if (!productGrid || !categoryFilter || !productSearch) return;

  const category = categoryFilter.value;
  const query = productSearch.value.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter(product =>
    (category === "all" || product.type === category) &&
    (
      product.name.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query) ||
      product.colour.toLowerCase().includes(query)
    )
  );

  if (!filteredProducts.length) {
    productGrid.innerHTML =
      '<p class="no-frames">No frames found. Try another search.</p>';
    return;
  }

  productGrid.innerHTML = filteredProducts.map(product => {

    const productNumber = String(
      PRODUCTS.findIndex(item => item.id === product.id) + 1
    ).padStart(2, "0");

    return `
      <article class="product-card">

        <div
          class="product-image"
          data-details="${product.id}"
          role="button"
          tabindex="0"
          aria-label="View ${product.name} details"
        >

          <span class="product-number">${productNumber}</span>

          <span class="product-tag">${product.tag}</span>

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='${product.gallery[0] || product.image}';"
          >

          <span class="view-product">VIEW FRAME ↗</span>

        </div>

        <div class="product-info">

          <div>
            <h3
              data-details="${product.id}"
              tabindex="0"
              role="button"
            >
              ${product.name}
            </h3>

            <p>${product.type} · ${product.colour}</p>
          </div>

          <span class="product-price">
            ${money(product.price)}
          </span>

        </div>

        <button class="add-button" data-add="${product.id}">
          ADD TO BAG +
        </button>

      </article>
    `;

  }).join("");
}

// ==========================================
// INITIALIZE WEBSITE
// ==========================================

// CHROME (12) आणि AQUA (28) यांची Position Swap
const chromeIndex = PRODUCTS.findIndex(product => product.id === 12);
const aquaIndex = PRODUCTS.findIndex(product => product.id === 28);

if (chromeIndex !== -1 && aquaIndex !== -1) {
  [PRODUCTS[chromeIndex], PRODUCTS[aquaIndex]] =
    [PRODUCTS[aquaIndex], PRODUCTS[chromeIndex]];
}


// ==========================================
// DISPLAY ALL PRODUCTS IN ONE COMMON GRID
// ==========================================

function renderProducts() {

  if (!productGrid) return;

  const category = categoryFilter
    ? categoryFilter.value
    : "all";

  const query = productSearch
    ? productSearch.value.trim().toLowerCase()
    : "";

  const filteredProducts = PRODUCTS.filter(product =>

    (category === "all" || product.type === category) &&

    (
      product.name.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query) ||
      product.colour.toLowerCase().includes(query)
    )

  );


  // NO PRODUCT FOUND
  if (!filteredProducts.length) {

    productGrid.innerHTML =
      '<p class="no-frames">No frames found. Try another search.</p>';

    return;
  }


  // PRODUCT CARDS
  productGrid.innerHTML = filteredProducts.map(product => {

    const productNumber = String(
      PRODUCTS.findIndex(item => item.id === product.id) + 1
    ).padStart(2, "0");


    const fallbackImage =
      (product.gallery && product.gallery.length)
        ? product.gallery[0]
        : product.image;


    return `

      <article class="product-card">

        <div
          class="product-image"
          data-details="${product.id}"
          role="button"
          tabindex="0"
          aria-label="View ${product.name} details"
        >

          <span class="product-number">
            ${productNumber}
          </span>

          <span class="product-tag">
            ${product.tag}
          </span>

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='${fallbackImage}';"
          >

          <span class="view-product">
            VIEW FRAME ↗
          </span>

        </div>


        <div class="product-info">

          <div>

            <h3
              data-details="${product.id}"
              tabindex="0"
              role="button"
            >
              ${product.name}
            </h3>

            <p>
              ${product.type} · ${product.colour}
            </p>

          </div>

          <span class="product-price">
            ${money(product.price)}
          </span>

        </div>


        <button
          class="add-button"
          data-add="${product.id}"
        >
          ADD TO BAG +
        </button>

      </article>

    `;

  }).join("");

}


// ==========================================
// INITIALIZE WEBSITE
// ==========================================

renderProducts();

renderCart();


// ==========================================
// ROYALRELICS SCRIPT COMPLETED
// ==========================================
