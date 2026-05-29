/**
 * Aura — AI dining concierge at Rameshwaram Café
 * Mock data · ₹ pricing · Real Unsplash photography
 */

const GUEST_NAME = "Abhinav";

/** Unique Unsplash IDs — one per dish, no reuse */
const PHOTOS = {
  gheeDosa: "1631515243349-e0cb169fb81a",
  filterCoffee: "1514432324607-a09d9b4aefdd",
  mysoreDosa: "1668236541034-5c11386e0a21",
  ravaIdli: "1596797038530-2c879c7946b0",
  paneerMasala: "1585937421612-70a008592fbe",
  chickenChettinad: "1603894584375-3fb898e6c9f0",
  chickenSalad: "1546069901-ba9599a7e63c",
  eggParatha: "1599487439621-2dd416b1e977",
  spicyPrawns: "1565680018434-b703a14b9a2d",
  kesariBath: "1571877227200-a0d98ea607e9",
  coffeeIceCream: "1563805042-7684c019e1cb",
  masalaVada: "1601050690597-df57e0707f2c",
};

function imgUrl(photoId, w = 900, h = null) {
  let url = `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${w}&q=85`;
  if (h) url += `&h=${h}`;
  return url;
}

function imgTag(src, alt, w, h) {
  const safeAlt = alt.replace(/"/g, "&quot;");
  return `<img src="${src}" alt="${safeAlt}" loading="lazy" decoding="async" width="${w}" height="${h}" />`;
}

function assertUniqueImages() {
  const urls = MENU.map((m) => m.image);
  const unique = new Set(urls);
  if (unique.size !== urls.length) {
    console.warn("Aura: duplicate menu images detected", urls.length - unique.size);
  }
}

const MENU = [
  {
    id: 1,
    name: "Ghee Masala Dosa",
    desc: "Crisp, golden, whisper-light — the kind of comfort that feels like home on a plate.",
    price: 180,
    categories: ["comfort", "quick", "bestseller"],
    veg: true,
    spice: 1,
    prep: "12 min",
    chef: true,
    trending: true,
    image: imgUrl(PHOTOS.gheeDosa, 900, 600),
  },
  {
    id: 2,
    name: "Filter Coffee",
    desc: "Dark, aromatic, poured with ritual — Bangalore in a steel tumbler.",
    price: 45,
    categories: ["quick", "bestseller", "comfort"],
    veg: true,
    spice: 0,
    prep: "5 min",
    trending: true,
    weather: true,
    image: imgUrl(PHOTOS.filterCoffee, 800, 520),
  },
  {
    id: 3,
    name: "Mysore Masala Dosa",
    desc: "Fiery red chutney beneath golden folds — bold, beautiful, unapologetically spicy.",
    price: 195,
    categories: ["spicy", "bestseller", "comfort"],
    veg: true,
    spice: 3,
    prep: "14 min",
    trending: true,
    image: imgUrl(PHOTOS.mysoreDosa, 800, 520),
  },
  {
    id: 4,
    name: "Rava Idli (2 pcs)",
    desc: "Fluffy semolina clouds with coconut chutney — gentle, soul-soothing, perfect anytime.",
    price: 120,
    categories: ["comfort", "quick"],
    veg: true,
    spice: 0,
    prep: "8 min",
    image: imgUrl(PHOTOS.ravaIdli),
  },
  {
    id: 5,
    name: "Paneer Butter Masala",
    desc: "Silken paneer swimming in velvet tomato — rich without weighing you down.",
    price: 280,
    categories: ["comfort", "protein", "bestseller"],
    veg: true,
    spice: 2,
    prep: "18 min",
    image: imgUrl(PHOTOS.paneerMasala),
  },
  {
    id: 6,
    name: "Chicken Chettinad",
    desc: "Pepper-fired, coconut-deep, fiercely aromatic — a South Indian legend on your table.",
    price: 340,
    categories: ["spicy", "protein", "bestseller"],
    veg: false,
    spice: 3,
    prep: "22 min",
    chef: true,
    chefSpecial: true,
    image: imgUrl(PHOTOS.chickenChettinad, 900, 600),
  },
  {
    id: 7,
    name: "Grilled Chicken Salad",
    desc: "Charred protein, crisp greens, lemon kiss — clean fuel that still feels indulgent.",
    price: 320,
    categories: ["protein", "quick"],
    veg: false,
    spice: 0,
    prep: "15 min",
    image: imgUrl(PHOTOS.chickenSalad),
  },
  {
    id: 8,
    name: "Egg Bhurji & Paratha",
    desc: "Soft scrambled eggs, flaky paratha — the 2 AM friend every city needs.",
    price: 210,
    categories: ["protein", "comfort", "quick"],
    veg: false,
    spice: 2,
    prep: "12 min",
    image: imgUrl(PHOTOS.eggParatha),
  },
  {
    id: 9,
    name: "Andhra Spicy Prawns",
    desc: "Tiger prawns tossed in chili-garlic fire — for nights when mild won't do.",
    price: 420,
    categories: ["spicy", "protein"],
    veg: false,
    spice: 3,
    prep: "20 min",
    image: imgUrl(PHOTOS.spicyPrawns),
  },
  {
    id: 10,
    name: "Kesari Bath",
    desc: "Saffron-soaked semolina, ghee-laced, jewel-sweet — dessert that hugs you back.",
    price: 95,
    categories: ["desserts", "comfort", "quick"],
    veg: true,
    spice: 0,
    prep: "10 min",
    weather: true,
    image: imgUrl(PHOTOS.kesariBath),
  },
  {
    id: 11,
    name: "Filter Coffee Ice Cream",
    desc: "Chilled nostalgia — South Indian coffee turned into silky frozen poetry.",
    price: 140,
    categories: ["desserts", "bestseller"],
    veg: true,
    spice: 0,
    prep: "5 min",
    weather: true,
    image: imgUrl(PHOTOS.coffeeIceCream),
  },
  {
    id: 12,
    name: "Masala Vada (4 pcs)",
    desc: "Crunchy lentil fritters, coriander-fresh — the perfect shareable late-night bite.",
    price: 110,
    categories: ["quick", "spicy", "comfort"],
    veg: true,
    spice: 2,
    prep: "8 min",
    image: imgUrl(PHOTOS.masalaVada),
  },
];

const CAT_LABELS = {
  all: "Best Sellers",
  comfort: "Comfort Food",
  spicy: "Spicy",
  protein: "High Protein",
  desserts: "Desserts",
  quick: "Quick Bites",
};

const ISLAND_PROMPTS = [
  "Hey — craving something cozy tonight?",
  "Rain outside? I know the perfect warm plate.",
  "Want comfort food without the guilt?",
  "Trending now: Mysore Masala Dosa · 142 orders",
  "Need something filling under ₹300?",
  "Chef's comfort pick is waiting for you.",
  "Not sure? I'll match your mood in seconds.",
];

const AI_RESPONSES = {
  comfort: {
    text: "Comfort food is calling your name. I'd start with our Ghee Masala Dosa — it's what regulars order when they need a warm hug. Pair it with Filter Coffee for the full Bangalore ritual.",
    ids: [1, 2, 4],
  },
  filling: {
    text: "Filling but light on oil? The Grilled Chicken Salad hits that balance beautifully. Paneer Butter Masala is richer but surprisingly clean if you skip the extra ghee.",
    ids: [7, 5],
  },
  protein: {
    text: "For protein tonight, Chicken Chettinad delivers 32g with serious flavor. Egg Bhurji & Paratha is faster and still satisfying after a long day.",
    ids: [6, 8, 7],
  },
  latenight: {
    text: "Late-night soul food: Masala Vada with Filter Coffee is the move. Egg Bhurji & Paratha if you want something more substantial before midnight.",
    ids: [12, 8, 2],
  },
  "spicy-budget": {
    text: "Spicy and under ₹400? Mysore Masala Dosa at ₹195 brings serious heat. Masala Vada is ₹110 if you want snacks to share.",
    ids: [3, 12],
  },
  default: {
    text: "Tell me your mood — spicy, light, celebratory, or budget — and I'll curate from tonight's freshest picks at Rameshwaram Café.",
    ids: [1, 3, 6],
  },
};

let activeCat = "all";
let searchQuery = "";
const cart = new Map();
const favorites = new Set();

const $ = (s) => document.querySelector(s);
const grid = $("#menu-grid");
const chefCarousel = $("#chef-carousel");
const emptyState = $("#empty-state");
const menuTitle = $("#menu-title");
const menuCount = $("#menu-count");

function formatRupee(n) {
  return `₹${n.toLocaleString("en-IN")}`;
}

function spiceDots(level) {
  if (!level) return "";
  let html = '<span class="spice-row" aria-label="Spice level ' + level + ' of 3">';
  for (let i = 0; i < 3; i++) {
    html += `<span class="spice-dot${i < level ? " on" : ""}"></span>`;
  }
  return html + "</span>";
}

function renderLuxCard(item, i) {
  const isFav = favorites.has(item.id);
  return `
    <article class="lux-card" data-id="${item.id}" style="--i:${i}">
      <div class="lux-card-img">
        ${imgTag(item.image, item.name, 800, 550)}
        <span class="img-warm-glow" aria-hidden="true"></span>
        <div class="card-tags">
          <span class="tag ${item.veg ? "tag-veg" : "tag-nonveg"}">${item.veg ? "Veg" : "Non-veg"}</span>
          ${spiceDots(item.spice)}
        </div>
        <button type="button" class="fav-btn ${isFav ? "active" : ""}" data-fav="${item.id}" aria-label="Favorite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.5-7-10a4 4 0 017-2 4 4 0 017 2c0 5.5-7 10-7 10z"/></svg>
        </button>
        <span class="prep-time">${item.prep}</span>
      </div>
      <div class="lux-card-body">
        <h3>${item.name}</h3>
        <p class="lux-desc">${item.desc}</p>
        <div class="lux-footer">
          <span class="lux-price">${formatRupee(item.price)}</span>
          <button type="button" class="add-btn" data-add="${item.id}">Add to table</button>
        </div>
      </div>
    </article>
  `;
}

function renderCarouselCard(item) {
  return `
    <article class="carousel-card" data-id="${item.id}">
      <div class="card-img">
        ${imgTag(item.image, item.name, 480, 300)}
        <div class="card-img-overlay"></div>
        <div class="card-body">
          <h4>${item.name}</h4>
          <span class="price">${formatRupee(item.price)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderTrendingTile(item) {
  return `
    <article class="trending-tile" data-id="${item.id}">
      <div class="trending-tile-img">
        ${imgTag(item.image, item.name, 320, 400)}
        <div class="tile-overlay"></div>
        <span class="tile-badge">🔥 Hot</span>
      </div>
      <div class="trending-tile-body">
        <h4>${item.name}</h4>
        <span>${formatRupee(item.price)}</span>
      </div>
    </article>
  `;
}

function renderWeatherTile(item) {
  return `
    <article class="weather-tile" data-id="${item.id}">
      <div class="weather-tile-img">
        ${imgTag(item.image, item.name, 280, 280)}
        <div class="tile-overlay"></div>
      </div>
      <div class="weather-tile-body">
        <h4>${item.name}</h4>
        <p>${item.desc.split("—")[0].trim().slice(0, 42)}…</p>
        <span class="weather-price">${formatRupee(item.price)}</span>
      </div>
    </article>
  `;
}

function renderChefSpecial() {
  const item = MENU.find((m) => m.chefSpecial) || MENU.find((m) => m.chef) || MENU[0];
  const el = $("#chef-special");
  if (!el) return;
  el.dataset.id = item.id;
  el.innerHTML = `
    <div class="chef-special-img">
      ${imgTag(item.image, item.name, 900, 520)}
      <div class="chef-special-overlay"></div>
      <span class="chef-special-label">Chef's special</span>
    </div>
    <div class="chef-special-content glass">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="chef-special-footer">
        <span class="chef-special-price">${formatRupee(item.price)}</span>
        <button type="button" class="spotlight-cta" data-add="${item.id}">Add to table</button>
      </div>
    </div>
  `;
}

function renderTrendingCarousel() {
  const trending = MENU.filter((m) => m.trending);
  const el = $("#trending-carousel");
  if (el) el.innerHTML = trending.map(renderTrendingTile).join("");
}

function renderWeatherRow() {
  const weather = MENU.filter((m) => m.weather);
  const el = $("#weather-row");
  if (el) el.innerHTML = weather.map(renderWeatherTile).join("");
}

function renderFeatured() {
  renderChefSpecial();
  renderTrendingCarousel();
  renderWeatherRow();
}

function getFiltered() {
  return MENU.filter((item) => {
    const catMatch =
      activeCat === "all"
        ? item.categories.includes("bestseller")
        : item.categories.includes(activeCat);
    const q = searchQuery.toLowerCase().trim();
    const searchMatch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.categories.some((c) => c.includes(q));
    return catMatch && searchMatch;
  });
}

function renderMenu() {
  grid.classList.add("transitioning");
  const items = getFiltered();

  setTimeout(() => {
    menuTitle.textContent = CAT_LABELS[activeCat] || "Menu";
    menuCount.textContent = items.length ? `${items.length} dishes` : "";

    if (!items.length) {
      grid.innerHTML = "";
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
      grid.innerHTML = items.map((item, i) => renderLuxCard(item, i)).join("");
    }
    grid.classList.remove("transitioning");
  }, 140);
}

function renderChefCarousel() {
  const picks = MENU.filter((m) => m.chef);
  chefCarousel.innerHTML = picks.map(renderCarouselCard).join("");
}

/* Cart */
function updateCart() {
  let count = 0;
  let total = 0;
  cart.forEach(({ item, qty }) => {
    count += qty;
    total += item.price * qty;
  });

  const badge = $("#nav-cart-badge");
  badge.textContent = count;
  badge.classList.toggle("show", count > 0);

  $("#cart-total").textContent = formatRupee(total);
  $("#checkout").disabled = count === 0;

  const list = $("#cart-list");
  const empty = $("#cart-empty");

  if (!count) {
    list.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  list.innerHTML = [...cart.entries()]
    .map(
      ([, { item, qty }]) => `
    <li class="cart-item">
      ${imgTag(item.image, item.name, 52, 52)}
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>Qty ${qty}</span>
      </div>
      <span class="cart-item-price">${formatRupee(item.price * qty)}</span>
    </li>`
    )
    .join("");
}

function addToCart(id) {
  const item = MENU.find((m) => m.id === id);
  if (!item) return;
  const cur = cart.get(id);
  cart.set(id, { item, qty: (cur?.qty ?? 0) + 1 });
  updateCart();
  showToast(`${item.name} added · ${formatRupee(item.price)}`);
  playSoundPlaceholder();
}

function renderFavorites() {
  const list = $("#fav-list");
  const empty = $("#fav-empty");
  const items = MENU.filter((m) => favorites.has(m.id));

  if (!items.length) {
    list.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  list.innerHTML = items
    .map(
      (item) => `
    <div class="fav-item">
      ${imgTag(item.image, item.name, 56, 56)}
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${formatRupee(item.price)}</span>
      </div>
      <button type="button" class="add-btn" data-add="${item.id}" style="padding:0.4rem 0.75rem;font-size:0.7rem">Add</button>
    </div>`
    )
    .join("");
}

/* Toast + sound placeholder */
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  t.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => (t.hidden = true), 400);
  }, 2400);
}

function playSoundPlaceholder() {
  // Placeholder for micro-interaction sounds
  if (typeof AudioContext !== "undefined") {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 520;
      gain.gain.value = 0.03;
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (_) {}
  }
}

/* AI Island rotating text */
let islandIndex = 0;
const islandText = $("#ai-island-text");
setInterval(() => {
  islandIndex = (islandIndex + 1) % ISLAND_PROMPTS.length;
  islandText.style.opacity = "0";
  setTimeout(() => {
    islandText.textContent = ISLAND_PROMPTS[islandIndex];
    islandText.style.opacity = "1";
  }, 300);
}, 4500);

/* Sheets */
function openSheet(sheet, overlay) {
  overlay.hidden = false;
  sheet.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => {
    overlay.classList.add("open");
    sheet.classList.add("open");
  });
}

function closeSheet(sheet, overlay) {
  overlay.classList.remove("open");
  sheet.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => {
    overlay.hidden = true;
    sheet.hidden = true;
  }, 450);
}

const aiSheet = $("#ai-sheet");
const aiOverlay = $("#ai-overlay");
const cartSheet = $("#cart-sheet");
const cartOverlay = $("#cart-overlay");
const favSheet = $("#fav-sheet");
const favOverlay = $("#fav-overlay");

function openAI() {
  openSheet(aiSheet, aiOverlay);
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  document.querySelector('[data-nav="ai"]')?.classList.add("active");
}

$("#ai-island").addEventListener("click", openAI);
$("#aura-badge-open")?.addEventListener("click", openAI);
$("#ai-close").addEventListener("click", () => closeSheet(aiSheet, aiOverlay));
aiOverlay.addEventListener("click", () => closeSheet(aiSheet, aiOverlay));

function openCart() {
  openSheet(cartSheet, cartOverlay);
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  document.querySelector('[data-nav="cart"]')?.classList.add("active");
}

$("#cart-close").addEventListener("click", () => closeSheet(cartSheet, cartOverlay));
cartOverlay.addEventListener("click", () => closeSheet(cartSheet, cartOverlay));

function openFav() {
  renderFavorites();
  openSheet(favSheet, favOverlay);
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  document.querySelector('[data-nav="favorites"]')?.classList.add("active");
}

$("#fav-close").addEventListener("click", () => closeSheet(favSheet, favOverlay));
favOverlay.addEventListener("click", () => closeSheet(favSheet, favOverlay));

/* Bottom nav */
document.querySelectorAll(".nav-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nav = btn.dataset.nav;
    document.querySelectorAll(".nav-item").forEach((n) => {
      n.classList.remove("active");
      n.removeAttribute("aria-current");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-current", "page");

    closeSheet(aiSheet, aiOverlay);
    closeSheet(cartSheet, cartOverlay);
    closeSheet(favSheet, favOverlay);

    if (nav === "ai") openAI();
    else if (nav === "cart") openCart();
    else if (nav === "favorites") openFav();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* Categories */
document.querySelectorAll(".cat-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".cat-pill").forEach((p) => {
      p.classList.remove("active");
      p.setAttribute("aria-selected", "false");
    });
    pill.classList.add("active");
    pill.setAttribute("aria-selected", "true");
    activeCat = pill.dataset.cat;
    renderMenu();
    playSoundPlaceholder();
  });
});

/* Search */
let debounce;
$("#search").addEventListener("input", (e) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    searchQuery = e.target.value;
    renderMenu();
  }, 200);
});

/* Delegated clicks */
document.body.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) addToCart(Number(add.dataset.add));

  const fav = e.target.closest("[data-fav]");
  if (fav) {
    const id = Number(fav.dataset.fav);
    if (favorites.has(id)) favorites.delete(id);
    else favorites.add(id);
    renderMenu();
    renderFavorites();
    showToast(favorites.has(id) ? "Saved to favorites" : "Removed from favorites");
  }

  const tapCard = e.target.closest(
    ".carousel-card, .trending-tile, .weather-tile"
  );
  if (tapCard && !e.target.closest(".add-btn, .spotlight-cta, .fav-btn")) {
    const id = Number(tapCard.dataset.id);
    if (id) {
      addToCart(id);
      const item = MENU.find((m) => m.id === id);
      if (item) showToast(`${item.name} added`);
    }
  }
});


/* AI Chat */
const aiMessages = $("#ai-messages");
const aiRecs = $("#ai-recs");

function appendBubble(text, role) {
  const div = document.createElement("div");
  div.className = `ai-bubble ${role}`;
  div.innerHTML = `<p>${text}</p>`;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function showTyping() {
  const el = document.createElement("div");
  el.className = "typing-indicator";
  el.id = "typing";
  el.innerHTML = "<span></span><span></span><span></span>";
  aiMessages.appendChild(el);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  return el;
}

function hideTyping() {
  document.getElementById("typing")?.remove();
}

function showRecCards(ids) {
  aiRecs.hidden = false;
  aiRecs.innerHTML = ids
    .map((id) => {
      const item = MENU.find((m) => m.id === id);
      if (!item) return "";
      return `
      <div class="rec-card" data-add="${item.id}">
        ${imgTag(item.image, item.name, 52, 52)}
        <div>
          <strong>${item.name}</strong>
          <span>${formatRupee(item.price)} · ${item.prep}</span>
        </div>
      </div>`;
    })
    .join("");
}

function handleAIQuery(key, userText) {
  if (userText) appendBubble(userText, "user");
  showTyping();

  const res = AI_RESPONSES[key] || AI_RESPONSES.default;

  setTimeout(() => {
    hideTyping();
    appendBubble(res.text, "bot");
    showRecCards(res.ids);
    playSoundPlaceholder();
  }, 900 + Math.random() * 400);
}

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    handleAIQuery(chip.dataset.query, chip.textContent);
  });
});

$("#ai-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#ai-input");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";

  let key = "default";
  const lower = text.toLowerCase();
  if (lower.includes("comfort")) key = "comfort";
  else if (lower.includes("oily") || lower.includes("filling")) key = "filling";
  else if (lower.includes("protein")) key = "protein";
  else if (lower.includes("late") || lower.includes("night")) key = "latenight";
  else if (lower.includes("spicy") && (lower.includes("400") || lower.includes("₹")))
    key = "spicy-budget";
  else if (lower.includes("spicy")) key = "spicy-budget";

  handleAIQuery(key, text);
});

$("#checkout").addEventListener("click", () => {
  if (!cart.size) return;
  showToast("Sent to kitchen — enjoy your meal, Abhinav ✦");
  cart.clear();
  updateCart();
  closeSheet(cartSheet, cartOverlay);
});

/* Init */
document.getElementById("guest-name").textContent = GUEST_NAME;
assertUniqueImages();
renderFeatured();
renderChefCarousel();
renderMenu();
updateCart();
