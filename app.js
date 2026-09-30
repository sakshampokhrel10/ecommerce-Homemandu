/**
 * HomeMandu - Nepal's Smart Home Building Marketplace
 * JavaScript Application Logic
 */

// ==========================================================================
// 1. Data Store (Categories, Products & Multi-Vendor Quotes)
// ==========================================================================

const CATEGORIES = [
  {
    id: 'cement',
    name: 'Cement & Aggregates',
    icon: 'fa-solid fa-cubes-stacked',
    colorClass: 'cat-cement',
    desc: 'OPC, PPC, and PSC grade cements, washed river sand & graded aggregate stones.',
    itemCount: 14
  },
  {
    id: 'steel',
    name: 'Structural Steel & Rebar',
    icon: 'fa-solid fa-bars-staggered',
    colorClass: 'cat-steel',
    desc: 'Fe 500D earthquake-resistant TMT bars, binding wire, MS angles & beams.',
    itemCount: 18
  },
  {
    id: 'bricks',
    name: 'Bricks & Masonry Blocks',
    icon: 'fa-solid fa-shapes',
    colorClass: 'cat-brick',
    desc: 'First-class chimney fired red bricks, lightweight AAC blocks & concrete pavers.',
    itemCount: 12
  },
  {
    id: 'plumbing',
    name: 'Plumbing & Sanitaryware',
    icon: 'fa-solid fa-faucet-drip',
    colorClass: 'cat-plumb',
    desc: 'CPVC/PPR water pipes, drainage lines, sanitary fixtures, pumps & overhead tanks.',
    itemCount: 22
  },
  {
    id: 'electrical',
    name: 'Electrical & Lighting',
    icon: 'fa-solid fa-bolt',
    colorClass: 'cat-elect',
    desc: 'Fire-retardant copper wiring, modular switches, distribution panels & LED fittings.',
    itemCount: 20
  },
  {
    id: 'paint',
    name: 'Paints & Protective Finishes',
    icon: 'fa-solid fa-fill-drip',
    colorClass: 'cat-paint',
    desc: 'Weather-proof exterior emulsions, luxury interior paints, waterproof primers & putties.',
    itemCount: 16
  },
  {
    id: 'roofing',
    name: 'Roofing & Waterproofing',
    icon: 'fa-solid fa-umbrella',
    colorClass: 'cat-roof',
    desc: 'Color-coated corrugated CGI sheets, membrane waterproofing & roof insulation.',
    itemCount: 10
  },
  {
    id: 'smart-home',
    name: 'Smart Home & Security',
    icon: 'fa-solid fa-microchip',
    colorClass: 'cat-smart',
    desc: 'Digital smart door locks, CCTV security kits, smart video doorbells & automated sensors.',
    itemCount: 9
  }
];

const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Shivam OPC Cement 53 Grade',
    category: 'cement',
    categoryName: 'Cement & Aggregates',
    price: 780,
    unit: '50kg Bag',
    supplier: 'Kathmandu Building Supplies Hub',
    rating: 4.9,
    reviews: 142,
    tag: 'Best Seller',
    tagClass: 'best-seller',
    inStock: true,
    icon: 'fa-solid fa-cubes-stacked',
    iconColor: '#0369a1',
    quotes: [
      { supplier: 'Kathmandu Building Supplies Hub', location: 'Tinkune, Ktm', price: 780, rating: 4.9, leadTime: 'Same Day Delivery', isBest: true },
      { supplier: 'Patan Cement & Sand Traders', location: 'Lagankhel, Lalitpur', price: 795, rating: 4.7, leadTime: 'Within 24 Hours', isBest: false },
      { supplier: 'Bhaktapur Hardware Center', location: 'Suryabinayak', price: 810, rating: 4.8, leadTime: '1-2 Days Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-2',
    name: 'Jagdamba Fe 500D TMT Rebar (12mm)',
    category: 'steel',
    categoryName: 'Structural Steel & Rebar',
    price: 108,
    unit: 'Per kg',
    supplier: 'National Rebar Rolling Mills',
    rating: 4.8,
    reviews: 98,
    tag: 'Earthquake Safe',
    tagClass: 'verified',
    inStock: true,
    icon: 'fa-solid fa-bars-staggered',
    iconColor: '#b91c1c',
    quotes: [
      { supplier: 'National Rebar Rolling Mills', location: 'Birgunj / Ktm Depot', price: 108, rating: 4.8, leadTime: 'Next Day Truck Load', isBest: true },
      { supplier: 'Capital Steel Syndicate', location: 'Kalanki, Kathmandu', price: 112, rating: 4.6, leadTime: 'Within 24 Hours', isBest: false },
      { supplier: 'Himalayan Heavy Metal Traders', location: 'Teku, Kathmandu', price: 110, rating: 4.7, leadTime: '2 Days Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-3',
    name: 'Bhaktapur Chimney Red Bricks (Grade A)',
    category: 'bricks',
    categoryName: 'Bricks & Masonry Blocks',
    price: 18,
    unit: 'Per Piece',
    supplier: 'Siddhi Ganesh Kiln Factory',
    rating: 4.7,
    reviews: 86,
    tag: 'Kiln Direct',
    tagClass: 'hot',
    inStock: true,
    icon: 'fa-solid fa-shapes',
    iconColor: '#c2410c',
    quotes: [
      { supplier: 'Siddhi Ganesh Kiln Factory', location: 'Changunarayan, Bhaktapur', price: 18, rating: 4.7, leadTime: 'Direct Tipper (3000 pcs min)', isBest: true },
      { supplier: 'Balkumari Brick Depot', location: 'Balkumari, Lalitpur', price: 19.5, rating: 4.5, leadTime: 'Next Day Tipper', isBest: false },
      { supplier: 'Valley Clay Products Co.', location: 'Thimi, Bhaktapur', price: 19, rating: 4.6, leadTime: '1-2 Days Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-4',
    name: 'Astral CPVC Pro Water Pipe (1 inch, 3m)',
    category: 'plumbing',
    categoryName: 'Plumbing & Sanitaryware',
    price: 640,
    unit: '3m Length',
    supplier: 'Valley Sanitary & Pipe Store',
    rating: 4.9,
    reviews: 64,
    tag: 'Verified Genuine',
    tagClass: 'verified',
    inStock: true,
    icon: 'fa-solid fa-faucet-drip',
    iconColor: '#4338ca',
    quotes: [
      { supplier: 'Valley Sanitary & Pipe Store', location: 'Tripureshwor, Ktm', price: 640, rating: 4.9, leadTime: 'Same Day Delivery', isBest: true },
      { supplier: 'Nepal Poly Pipes Center', location: 'Kumaripati, Lalitpur', price: 660, rating: 4.7, leadTime: 'Same Day Delivery', isBest: false },
      { supplier: 'Everest Plumbing Emporium', location: 'New Road, Ktm', price: 675, rating: 4.8, leadTime: 'Next Day Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-5',
    name: 'Havells Fire-Proof FR Cable (2.5 sq mm)',
    category: 'electrical',
    categoryName: 'Electrical & Lighting',
    price: 3450,
    unit: '90m Coil',
    supplier: 'Lalitpur Electrical Wholesalers',
    rating: 4.8,
    reviews: 73,
    tag: 'Top Safety',
    tagClass: 'verified',
    inStock: true,
    icon: 'fa-solid fa-bolt',
    iconColor: '#b45309',
    quotes: [
      { supplier: 'Lalitpur Electrical Wholesalers', location: 'Jawalakhel, Lalitpur', price: 3450, rating: 4.8, leadTime: 'Same Day Dispatch', isBest: true },
      { supplier: 'Mahabir Electric Center', location: 'Ason, Kathmandu', price: 3520, rating: 4.6, leadTime: 'Same Day Dispatch', isBest: false },
      { supplier: 'Bagmati Power Controls', location: 'Baneshwor, Ktm', price: 3600, rating: 4.7, leadTime: 'Next Day Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-6',
    name: 'Asian Paints Apex Ultima Exterior Emulsion',
    category: 'paint',
    categoryName: 'Paints & Protective Finishes',
    price: 7850,
    unit: '20L Bucket',
    supplier: 'Color World Paint Studio',
    rating: 4.9,
    reviews: 112,
    tag: '7-Yr Warranty',
    tagClass: 'best-seller',
    inStock: true,
    icon: 'fa-solid fa-fill-drip',
    iconColor: '#be185d',
    quotes: [
      { supplier: 'Color World Paint Studio', location: 'Maitidevi, Kathmandu', price: 7850, rating: 4.9, leadTime: 'Same Day Computer Tinting', isBest: true },
      { supplier: 'Shree Krishna Paint Traders', location: 'Pulchowk, Lalitpur', price: 7950, rating: 4.7, leadTime: 'Same Day Delivery', isBest: false },
      { supplier: 'Koteshwor Hardware & Paints', location: 'Koteshwor, Ktm', price: 8100, rating: 4.6, leadTime: 'Next Day Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-7',
    name: 'Aarti CGI Color Coated Roofing Sheet (0.45mm)',
    category: 'roofing',
    categoryName: 'Roofing & Waterproofing',
    price: 1350,
    unit: 'Per 10ft Sheet',
    supplier: 'Metals & Roofing Nepal',
    rating: 4.6,
    reviews: 42,
    tag: 'Rust Proof',
    tagClass: 'verified',
    inStock: true,
    icon: 'fa-solid fa-umbrella',
    iconColor: '#047857',
    quotes: [
      { supplier: 'Metals & Roofing Nepal', location: 'Satdobato, Lalitpur', price: 1350, rating: 4.6, leadTime: 'Next Day Delivery', isBest: true },
      { supplier: 'Himalayan CGI Suppliers', location: 'Balaju, Kathmandu', price: 1390, rating: 4.5, leadTime: '1-2 Days Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-8',
    name: 'Godrej Biometric & PIN Smart Door Lock',
    category: 'smart-home',
    categoryName: 'Smart Home & Security',
    price: 24500,
    unit: 'Set with Install',
    supplier: 'Smart Living Systems Nepal',
    rating: 4.9,
    reviews: 38,
    tag: 'Smart Tech',
    tagClass: 'hot',
    inStock: true,
    icon: 'fa-solid fa-microchip',
    iconColor: '#0f766e',
    quotes: [
      { supplier: 'Smart Living Systems Nepal', location: 'Naxal, Kathmandu', price: 24500, rating: 4.9, leadTime: 'Free Next-Day Technician Install', isBest: true },
      { supplier: 'SecureHomes Tech Nepal', location: 'Jhamsikhel, Lalitpur', price: 25900, rating: 4.8, leadTime: '2 Days Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-9',
    name: 'Hetauda PPC Cement (Green Bag)',
    category: 'cement',
    categoryName: 'Cement & Aggregates',
    price: 670,
    unit: '50kg Bag',
    supplier: 'Nepal State Cement Distributor',
    rating: 4.7,
    reviews: 89,
    tag: 'Eco Friendly',
    tagClass: 'verified',
    inStock: true,
    icon: 'fa-solid fa-cubes-stacked',
    iconColor: '#0369a1',
    quotes: [
      { supplier: 'Nepal State Cement Distributor', location: 'Kalimati, Kathmandu', price: 670, rating: 4.7, leadTime: 'Same Day Delivery', isBest: true },
      { supplier: 'Kathmandu Building Supplies Hub', location: 'Tinkune, Ktm', price: 685, rating: 4.9, leadTime: 'Same Day Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-10',
    name: 'Washed River Sand (Tripper Load)',
    category: 'cement',
    categoryName: 'Cement & Aggregates',
    price: 16500,
    unit: 'Tripper (200 cu.ft)',
    supplier: 'Trishuli Sand Quarry Depot',
    rating: 4.6,
    reviews: 55,
    tag: 'Direct Quarry',
    tagClass: 'verified',
    inStock: true,
    icon: 'fa-solid fa-truck-ramp-box',
    iconColor: '#0369a1',
    quotes: [
      { supplier: 'Trishuli Sand Quarry Depot', location: 'Naikap, Kathmandu', price: 16500, rating: 4.6, leadTime: 'Night Delivery (6-wheel tipper)', isBest: true },
      { supplier: 'Patan Cement & Sand Traders', location: 'Lagankhel, Lalitpur', price: 17200, rating: 4.7, leadTime: 'Next Day Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-11',
    name: 'Lightweight AAC Autoclaved Aerated Blocks',
    category: 'bricks',
    categoryName: 'Bricks & Masonry Blocks',
    price: 145,
    unit: 'Per Block (600x200x150mm)',
    supplier: 'Nepal AAC Block Industries',
    rating: 4.8,
    reviews: 62,
    tag: 'Thermal Insulated',
    tagClass: 'best-seller',
    inStock: true,
    icon: 'fa-solid fa-shapes',
    iconColor: '#c2410c',
    quotes: [
      { supplier: 'Nepal AAC Block Industries', location: 'Bhaktapur Industrial Estate', price: 145, rating: 4.8, leadTime: 'Direct Factory Truck', isBest: true },
      { supplier: 'Green Building Tech Nepal', location: 'Gwarko, Lalitpur', price: 152, rating: 4.7, leadTime: '24 Hours Delivery', isBest: false }
    ]
  },
  {
    id: 'prod-12',
    name: 'Hikvision 4-Channel 1080P Smart CCTV Kit',
    category: 'smart-home',
    categoryName: 'Smart Home & Security',
    price: 18900,
    unit: 'Complete 4-Cam Kit',
    supplier: 'Smart Living Systems Nepal',
    rating: 4.8,
    reviews: 44,
    tag: 'Night Vision',
    tagClass: 'verified',
    inStock: true,
    icon: 'fa-solid fa-video',
    iconColor: '#0f766e',
    quotes: [
      { supplier: 'Smart Living Systems Nepal', location: 'Naxal, Kathmandu', price: 18900, rating: 4.8, leadTime: 'Same Day Delivery', isBest: true },
      { supplier: 'SecureHomes Tech Nepal', location: 'Jhamsikhel, Lalitpur', price: 19500, rating: 4.7, leadTime: 'Same Day Delivery', isBest: false }
    ]
  }
];

// ==========================================================================
// 2. Application State Management
// ==========================================================================

const State = {
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'popular',
  cart: [],
  checkoutStep: 1,
  checkoutData: {
    delivery: {},
    payment: 'eSewa',
    panInvoice: true,
    panNumber: ''
  }
};

// Initialize from LocalStorage
function initCartFromStorage() {
  try {
    const stored = localStorage.getItem('homemandu_cart');
    if (stored) {
      State.cart = JSON.parse(stored);
    }
  } catch (e) {
    console.error('Could not load cart from storage:', e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('homemandu_cart', JSON.stringify(State.cart));
  } catch (e) {
    console.error('Could not save cart to storage:', e);
  }
}

// ==========================================================================
// 3. UI Rendering Functions
// ==========================================================================

// Format currency in Nepali Rupees (NPR)
function formatCurrency(amount) {
  return 'NPR ' + Number(amount).toLocaleString('en-IN');
}

// Render Category Cards
function renderCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card" onclick="window.HomeManduApp.filterByCategory('${cat.id}')">
      <div class="cat-icon-wrapper ${cat.colorClass}">
        <i class="${cat.icon}"></i>
      </div>
      <h3>${cat.name}</h3>
      <p>${cat.desc}</p>
      <div class="cat-footer">
        <span>Browse Products <i class="fa-solid fa-arrow-right"></i></span>
        <span class="cat-count">${cat.itemCount} items</span>
      </div>
    </div>
  `).join('');
}

// Render Filter Pills
function renderCategoryFilterPills() {
  const container = document.getElementById('categoryFilterPills');
  if (!container) return;

  const pills = [
    { id: 'all', name: 'All Materials' },
    ...CATEGORIES.map(c => ({ id: c.id, name: c.name.split('&')[0].trim() }))
  ];

  container.innerHTML = pills.map(p => `
    <button class="filter-pill ${State.activeCategory === p.id ? 'active' : ''}" 
            onclick="window.HomeManduApp.filterByCategory('${p.id}')">
      ${p.name}
    </button>
  `).join('');
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('catalogEmptyState');
  if (!grid) return;

  let filtered = PRODUCTS.filter(p => {
    const matchesCat = State.activeCategory === 'all' || p.category === State.activeCategory;
    const matchesSearch = !State.searchQuery || 
      p.name.toLowerCase().includes(State.searchQuery.toLowerCase()) ||
      p.categoryName.toLowerCase().includes(State.searchQuery.toLowerCase()) ||
      p.supplier.toLowerCase().includes(State.searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Sort
  if (State.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (State.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (State.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(prod => `
    <div class="product-card" id="card-${prod.id}">
      <div class="prod-card-top">
        <i class="${prod.icon}" style="color: ${prod.iconColor}"></i>
        <span class="prod-tag-badge ${prod.tagClass || ''}">${prod.tag}</span>
        <button class="compare-badge-btn" onclick="window.HomeManduApp.openPriceCompare('${prod.id}')" title="Compare ${prod.quotes.length} Verified Supplier Quotes">
          <i class="fa-solid fa-scale-balanced"></i> ${prod.quotes.length} Quotes
        </button>
      </div>

      <div class="prod-card-body">
        <span class="prod-category-tag">${prod.categoryName}</span>
        <h3 class="prod-card-title">${prod.name}</h3>
        
        <div class="prod-supplier-info">
          <i class="fa-solid fa-circle-check"></i>
          <span>${prod.supplier}</span>
        </div>

        <div class="prod-rating-row">
          <span><i class="fa-solid fa-star"></i> <strong>${prod.rating}</strong></span>
          <span class="rating-count">(${prod.reviews} reviews)</span>
        </div>

        <div class="prod-card-price-row">
          <div>
            <div class="prod-price">${formatCurrency(prod.price)}</div>
            <div class="prod-unit">${prod.unit}</div>
          </div>
          <span class="prod-stock-tag">In Stock</span>
        </div>

        <div class="prod-card-actions">
          <div class="qty-input-box">
            <input type="number" id="qty-input-${prod.id}" value="1" min="1" max="1000">
          </div>
          <button class="btn btn-primary btn-sm" onclick="window.HomeManduApp.handleAddToCartFromGrid('${prod.id}')">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Cart Drawer
function renderCart() {
  const list = document.getElementById('cartItemList');
  const countBadge = document.getElementById('cartBadge');
  const countPill = document.getElementById('cartItemsCount');
  const footerCount = document.querySelector('.footer-cart-count');
  
  const subtotalEl = document.getElementById('cartSubtotal');
  const deliveryEl = document.getElementById('cartDelivery');
  const vatEl = document.getElementById('cartVat');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = State.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (countBadge) {
    countBadge.textContent = totalItems;
    countBadge.classList.add('bump');
    setTimeout(() => countBadge.classList.remove('bump'), 300);
  }
  if (countPill) countPill.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
  if (footerCount) footerCount.textContent = totalItems;

  if (!list) return;

  if (State.cart.length === 0) {
    list.innerHTML = `
      <div class="empty-state" style="padding: 2.5rem 1rem; border: none;">
        <i class="fa-solid fa-cart-shopping empty-icon" style="font-size: 2.5rem;"></i>
        <h3>Your Project Cart is Empty</h3>
        <p>Browse our verified building materials catalog and start adding items.</p>
        <button class="btn btn-primary btn-sm" onclick="window.HomeManduApp.closeCart(); window.location.hash = '#catalog';">
          Browse Catalog
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatCurrency(0);
    if (deliveryEl) deliveryEl.textContent = formatCurrency(0);
    if (vatEl) vatEl.textContent = formatCurrency(0);
    if (totalEl) totalEl.textContent = formatCurrency(0);
    return;
  }

  list.innerHTML = State.cart.map(item => `
    <div class="cart-item-card">
      <div class="cart-item-thumb">
        <i class="${item.icon}" style="color: ${item.iconColor || '#2563eb'}"></i>
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-supplier">Sold by: ${item.supplier}</span>
        
        <div class="cart-item-bottom">
          <div class="cart-qty-ctrl">
            <button class="cart-qty-btn" onclick="window.HomeManduApp.updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">-</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="window.HomeManduApp.updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <span class="cart-item-price">${formatCurrency(item.price * item.quantity)}</span>
        </div>
      </div>
      <button class="cart-item-remove-btn" onclick="window.HomeManduApp.removeFromCart('${item.id}')" title="Remove Item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  // Calculations
  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = subtotal > 0 ? (subtotal > 100000 ? 0 : 2500) : 0; // Free delivery above 1 Lakh
  const vat = Math.round(subtotal * 0.13); // 13% Nepal VAT
  const total = subtotal + delivery + vat;

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? 'FREE (Heavy Order)' : formatCurrency(delivery);
  if (vatEl) vatEl.textContent = formatCurrency(vat);
  if (totalEl) totalEl.textContent = formatCurrency(total);
}

// Render Review Table in Checkout Step 3
function renderCheckoutReview() {
  const tbody = document.getElementById('reviewTableBody');
  const subtotalEl = document.getElementById('reviewSubtotal');
  const deliveryEl = document.getElementById('reviewDelivery');
  const vatEl = document.getElementById('reviewVat');
  const totalEl = document.getElementById('reviewGrandTotal');
  const delInfoEl = document.getElementById('reviewDeliveryInfo');
  const payInfoEl = document.getElementById('reviewPaymentInfo');

  if (delInfoEl) {
    const d = State.checkoutData.delivery;
    delInfoEl.textContent = `${d.address || 'Site Address'}, ${d.city || ''} (${d.province || ''}) • ${d.name || ''} (${d.phone || ''})`;
  }

  if (payInfoEl) {
    const panText = State.checkoutData.panInvoice ? ' • GST/PAN Tax Invoice Requested' : '';
    payInfoEl.textContent = `${State.checkoutData.payment}${panText}`;
  }

  if (!tbody) return;

  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = subtotal > 0 ? (subtotal > 100000 ? 0 : 2500) : 0;
  const vat = Math.round(subtotal * 0.13);
  const total = subtotal + delivery + vat;

  tbody.innerHTML = State.cart.map(item => `
    <tr>
      <td><strong>${item.name}</strong><br><small style="color:#64748b">${item.unit}</small></td>
      <td>${item.supplier}</td>
      <td><strong>${item.quantity}</strong></td>
      <td>${formatCurrency(item.price)}</td>
      <td class="text-right"><strong>${formatCurrency(item.price * item.quantity)}</strong></td>
    </tr>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? 'FREE (Heavy Order Promotion)' : formatCurrency(delivery);
  if (vatEl) vatEl.textContent = formatCurrency(vat);
  if (totalEl) totalEl.textContent = formatCurrency(total);
}

// ==========================================================================
// 4. Cart & Shopping Actions
// ==========================================================================

function addToCart(productId, quantity = 1, customQuote = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const priceToUse = customQuote ? customQuote.price : product.price;
  const supplierToUse = customQuote ? customQuote.supplier : product.supplier;

  const existingIndex = State.cart.findIndex(item => item.id === productId && item.supplier === supplierToUse);

  if (existingIndex > -1) {
    State.cart[existingIndex].quantity += quantity;
  } else {
    State.cart.push({
      id: product.id,
      name: product.name,
      price: priceToUse,
      unit: product.unit,
      supplier: supplierToUse,
      icon: product.icon,
      iconColor: product.iconColor,
      quantity: quantity
    });
  }

  saveCartToStorage();
  renderCart();
  showToast(`Added ${quantity} × ${product.name} to Cart!`, 'success');
}

function handleAddToCartFromGrid(productId) {
  const qtyInput = document.getElementById(`qty-input-${productId}`);
  const qty = qtyInput ? Math.max(1, parseInt(qtyInput.value) || 1) : 1;
  addToCart(productId, qty);
}

function updateQuantity(productId, delta) {
  const item = State.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCartToStorage();
  renderCart();
}

function removeFromCart(productId) {
  State.cart = State.cart.filter(i => i.id !== productId);
  saveCartToStorage();
  renderCart();
  showToast('Item removed from cart', 'info');
}

function clearCart() {
  if (State.cart.length === 0) return;
  if (confirm('Are you sure you want to clear your construction cart?')) {
    State.cart = [];
    saveCartToStorage();
    renderCart();
    showToast('Cart cleared successfully', 'info');
  }
}

// ==========================================================================
// 5. Drawer & Modal Controller
// ==========================================================================

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openCheckout() {
  if (State.cart.length === 0) {
    showToast('Your project cart is empty! Please add materials first.', 'danger');
    openCart();
    return;
  }
  closeCart();
  setCheckoutStep(1);
  const modal = document.getElementById('checkoutModalBackdrop');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckout() {
  const modal = document.getElementById('checkoutModalBackdrop');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function setCheckoutStep(step) {
  State.checkoutStep = step;

  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const node = document.getElementById(`stepNode${i}`);
    const content = document.getElementById(`stepContent${i}`);
    const line = document.getElementById(`stepLine${i}`);

    if (node) {
      node.classList.remove('active', 'completed');
      if (i === step) node.classList.add('active');
      if (i < step) node.classList.add('completed');
    }

    if (content) {
      if (i === step) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    }

    if (line) {
      if (i < step) {
        line.classList.add('active');
      } else {
        line.classList.remove('active');
      }
    }
  }

  if (step === 3) {
    renderCheckoutReview();
  }
}

// Price Comparison Modal
function openPriceCompare(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const titleEl = document.getElementById('compareModalTitle');
  const listEl = document.getElementById('supplierQuotesList');
  const modal = document.getElementById('compareModalBackdrop');

  if (titleEl) titleEl.textContent = `Compare Quotes: ${prod.name}`;

  if (listEl) {
    listEl.innerHTML = prod.quotes.map(q => `
      <div class="supplier-quote-row ${q.isBest ? 'recommended' : ''}">
        <div class="quote-supplier">
          <h4>${q.supplier} ${q.isBest ? '<span class="save-tag">Lowest Quote</span>' : ''}</h4>
          <span><i class="fa-solid fa-location-dot"></i> ${q.location}</span>
        </div>
        <div class="quote-price">
          ${formatCurrency(q.price)}
          <small style="font-size:0.75rem; color:#64748b; display:block;">${prod.unit}</small>
        </div>
        <div class="quote-rating">
          <i class="fa-solid fa-star"></i> ${q.rating} / 5.0
        </div>
        <div class="quote-lead">
          <i class="fa-solid fa-truck-clock"></i> ${q.leadTime}
        </div>
        <div>
          <button class="btn btn-primary btn-sm" onclick="window.HomeManduApp.selectQuoteAndAddToCart('${prod.id}', '${q.supplier}')">
            Select & Add
          </button>
        </div>
      </div>
    `).join('');
  }

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closePriceCompare() {
  const modal = document.getElementById('compareModalBackdrop');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function selectQuoteAndAddToCart(productId, supplierName) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  const quote = prod.quotes.find(q => q.supplier === supplierName);
  addToCart(productId, 1, quote);
  closePriceCompare();
  openCart();
}

// ==========================================================================
// 6. Smart Material Cost Calculator Logic
// ==========================================================================

function calculateEstimates() {
  const areaInput = document.getElementById('houseAreaInput');
  const floorsInput = document.getElementById('floorsInput');
  const gradeInput = document.getElementById('qualityGradeInput');
  const grid = document.getElementById('estimateResultsGrid');
  const totalCostEl = document.getElementById('estimatedCostTotal');

  if (!areaInput || !floorsInput || !grid) return;

  const groundArea = Math.max(100, parseFloat(areaInput.value) || 1200);
  const floors = parseFloat(floorsInput.value) || 2;
  const grade = gradeInput ? gradeInput.value : 'standard';

  const totalSlabArea = groundArea * floors;

  // Standard Nepal NBC Structural estimation coefficients
  // Cement: ~0.45 bags per sq.ft built-up area
  // Rebar Steel: ~3.8 kg per sq.ft built-up area
  // Bricks: ~18 bricks per sq.ft built-up area (walls + partitions)
  // Sand: ~1.8 cu.ft per sq.ft built-up area
  const gradeMultiplier = grade === 'luxury' ? 1.25 : (grade === 'premium' ? 1.12 : 1.0);

  const cementBags = Math.round(totalSlabArea * 0.45 * gradeMultiplier);
  const rebarKg = Math.round(totalSlabArea * 3.8 * gradeMultiplier);
  const bricksCount = Math.round(totalSlabArea * 18);
  const sandTrucks = Math.max(2, Math.round((totalSlabArea * 1.8) / 200)); // 200 cu.ft per tipper

  const cementCost = cementBags * 780;
  const rebarCost = rebarKg * 108;
  const brickCost = bricksCount * 18;
  const sandCost = sandTrucks * 16500;

  const totalEstimatedCost = cementCost + rebarCost + brickCost + sandCost;

  grid.innerHTML = `
    <div class="estimate-result-box">
      <div class="est-icon"><i class="fa-solid fa-cubes-stacked"></i></div>
      <div class="est-data">
        <span class="est-qty">${cementBags.toLocaleString()} Bags</span>
        <span class="est-name">Grade 53 OPC Cement</span>
        <span class="est-subcost">${formatCurrency(cementCost)}</span>
      </div>
    </div>

    <div class="estimate-result-box">
      <div class="est-icon" style="color:#ef4444; background:rgba(239,68,68,0.2)"><i class="fa-solid fa-bars-staggered"></i></div>
      <div class="est-data">
        <span class="est-qty">${rebarKg.toLocaleString()} kg (${(rebarKg/1000).toFixed(1)} MT)</span>
        <span class="est-name">Fe 500D TMT Steel Rebar</span>
        <span class="est-subcost">${formatCurrency(rebarCost)}</span>
      </div>
    </div>

    <div class="estimate-result-box">
      <div class="est-icon" style="color:#f97316; background:rgba(249,115,22,0.2)"><i class="fa-solid fa-shapes"></i></div>
      <div class="est-data">
        <span class="est-qty">${bricksCount.toLocaleString()} Pcs</span>
        <span class="est-name">Class A Red Bricks</span>
        <span class="est-subcost">${formatCurrency(brickCost)}</span>
      </div>
    </div>

    <div class="estimate-result-box">
      <div class="est-icon" style="color:#10b981; background:rgba(16,185,129,0.2)"><i class="fa-solid fa-truck-ramp-box"></i></div>
      <div class="est-data">
        <span class="est-qty">${sandTrucks} Tippers</span>
        <span class="est-name">Washed River Sand (200 cu.ft)</span>
        <span class="est-subcost">${formatCurrency(sandCost)}</span>
      </div>
    </div>
  `;

  if (totalCostEl) {
    totalCostEl.textContent = formatCurrency(totalEstimatedCost);
  }

  // Store for adding bundle
  State.lastEstimate = {
    cementBags,
    rebarKg,
    bricksCount,
    sandTrucks
  };
}

function addEstimatedBundleToCart() {
  if (!State.lastEstimate) calculateEstimates();
  const est = State.lastEstimate;

  addToCart('prod-1', Math.min(est.cementBags, 100)); // Sample starter batch
  addToCart('prod-2', Math.min(est.rebarKg, 500));
  addToCart('prod-3', Math.min(est.bricksCount, 2000));
  addToCart('prod-10', 1);

  showToast('Starter Construction Material Bundle added to Cart!', 'success');
  openCart();
}

// ==========================================================================
// 7. Toast Notification Utility
// ==========================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'danger') icon = 'fa-circle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 8. Order Placement & Invoice Modal
// ==========================================================================

function confirmAndPlaceOrder() {
  const orderId = 'HM-' + Math.floor(100000 + Math.random() * 900000);
  const confirmedIdEl = document.getElementById('confirmedOrderId');
  const invoiceBox = document.getElementById('successInvoiceBox');
  const successModal = document.getElementById('successModalBackdrop');

  if (confirmedIdEl) confirmedIdEl.textContent = orderId;

  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = subtotal > 0 ? (subtotal > 100000 ? 0 : 2500) : 0;
  const vat = Math.round(subtotal * 0.13);
  const grandTotal = subtotal + delivery + vat;
  const now = new Date();

  if (invoiceBox) {
    invoiceBox.innerHTML = `
      <div class="invoice-preview-header">
        <div>
          <strong>HomeMandu Marketplace Tax Invoice</strong><br>
          <span>GST/PAN: 609823412</span>
        </div>
        <div style="text-align:right">
          <strong>Date: ${now.toLocaleDateString('en-GB')}</strong><br>
          <span>Status: Verified & Confirmed</span>
        </div>
      </div>
      <div class="invoice-bill-to">
        <strong>Site Delivery Address:</strong><br>
        ${State.checkoutData.delivery.name || 'Valued Customer'} (${State.checkoutData.delivery.phone || ''})<br>
        ${State.checkoutData.delivery.address || ''}, ${State.checkoutData.delivery.city || ''}, ${State.checkoutData.delivery.province || ''}<br>
        ${State.checkoutData.panNumber ? `<strong>Buyer PAN:</strong> ${State.checkoutData.panNumber}` : ''}
      </div>
      <div class="invoice-items-summary">
        ${State.cart.map(item => `
          <div style="display:flex; justify-content:space-between; margin-bottom:0.25rem;">
            <span>${item.quantity} × ${item.name} (${item.supplier})</span>
            <strong>${formatCurrency(item.price * item.quantity)}</strong>
          </div>
        `).join('')}
      </div>
      <div class="invoice-total-highlight">
        <span>Total Paid via ${State.checkoutData.payment}:</span>
        <span>${formatCurrency(grandTotal)}</span>
      </div>
    `;
  }

  // Clear cart
  State.cart = [];
  saveCartToStorage();
  renderCart();

  closeCheckout();
  if (successModal) {
    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSuccessModal() {
  const successModal = document.getElementById('successModalBackdrop');
  if (successModal) {
    successModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 9. Event Listeners & Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initCartFromStorage();
  renderCategories();
  renderCategoryFilterPills();
  renderProducts();
  renderCart();
  calculateEstimates();

  // Search Bar
  const searchInput = document.getElementById('globalSearchInput');
  const searchBtn = document.getElementById('searchSubmitBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      State.searchQuery = e.target.value;
      renderProducts();
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      State.searchQuery = searchInput.value;
      renderProducts();
      window.location.hash = '#catalog';
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('catalogSort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      State.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById('resetCatalogFilterBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      State.activeCategory = 'all';
      State.searchQuery = '';
      if (searchInput) searchInput.value = '';
      renderCategoryFilterPills();
      renderProducts();
    });
  }

  // Cart Button
  const cartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const continueShoppingLink = document.getElementById('continueShoppingLink');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
  if (continueShoppingLink) continueShoppingLink.addEventListener('click', closeCart);

  // Nav Checkout Button
  const navCheckoutBtn = document.getElementById('navCheckoutBtn');
  const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');

  if (navCheckoutBtn) navCheckoutBtn.addEventListener('click', openCheckout);
  if (proceedToCheckoutBtn) proceedToCheckoutBtn.addEventListener('click', openCheckout);
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);

  // Close Compare Modal
  const closeCompareBtn = document.getElementById('closeCompareBtn');
  if (closeCompareBtn) closeCompareBtn.addEventListener('click', closePriceCompare);

  // Success Modal Buttons
  const closeSuccessModalBtn = document.getElementById('closeSuccessModalBtn');
  const printInvoiceBtn = document.getElementById('printInvoiceBtn');
  if (closeSuccessModalBtn) closeSuccessModalBtn.addEventListener('click', closeSuccessModal);
  if (printInvoiceBtn) {
    printInvoiceBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Estimator Button
  const calculateEstimateBtn = document.getElementById('calculateEstimateBtn');
  const addAllEstimateToCartBtn = document.getElementById('addAllEstimateToCartBtn');
  if (calculateEstimateBtn) calculateEstimateBtn.addEventListener('click', calculateEstimates);
  if (addAllEstimateToCartBtn) addAllEstimateToCartBtn.addEventListener('click', addEstimatedBundleToCart);

  // Checkout Step Navigation
  const toStep2Btn = document.getElementById('toStep2Btn');
  const backToStep1Btn = document.getElementById('backToStep1Btn');
  const toStep3Btn = document.getElementById('toStep3Btn');
  const backToStep2Btn = document.getElementById('backToStep2Btn');
  const confirmOrderBtn = document.getElementById('confirmOrderBtn');

  if (toStep2Btn) {
    toStep2Btn.addEventListener('click', () => {
      const name = document.getElementById('custName')?.value.trim();
      const phone = document.getElementById('custPhone')?.value.trim();
      const province = document.getElementById('custProvince')?.value;
      const city = document.getElementById('custCity')?.value.trim();
      const address = document.getElementById('custAddress')?.value.trim();

      if (!name || !phone || !city || !address) {
        showToast('Please fill out all required site delivery details.', 'danger');
        return;
      }

      State.checkoutData.delivery = { name, phone, province, city, address };
      setCheckoutStep(2);
    });
  }

  if (backToStep1Btn) backToStep1Btn.addEventListener('click', () => setCheckoutStep(1));

  // Payment Selection Radios
  const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      State.checkoutData.payment = e.target.value;
      document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
      e.target.closest('.payment-method-card')?.classList.add('selected');
    });
  });

  const panCheckbox = document.getElementById('requirePanInvoice');
  const panFieldGroup = document.getElementById('panFieldGroup');
  if (panCheckbox) {
    panCheckbox.addEventListener('change', (e) => {
      State.checkoutData.panInvoice = e.target.checked;
      if (panFieldGroup) panFieldGroup.style.display = e.target.checked ? 'block' : 'none';
    });
  }

  if (toStep3Btn) {
    toStep3Btn.addEventListener('click', () => {
      const panInput = document.getElementById('custPan');
      if (panInput) State.checkoutData.panNumber = panInput.value.trim();
      setCheckoutStep(3);
    });
  }

  if (backToStep2Btn) backToStep2Btn.addEventListener('click', () => setCheckoutStep(2));
  if (confirmOrderBtn) {
    confirmOrderBtn.addEventListener('click', () => {
      const paymentMethod = State.checkoutData.payment;
      if (paymentMethod === 'eSewa' || paymentMethod === 'Khalti' || paymentMethod === 'Credit Card') {
        const mpinModal = document.getElementById('mpinModalBackdrop');
        const mpinMethodName = document.getElementById('mpinPaymentMethodName');
        const walletPhoneGroup = document.getElementById('walletPhoneGroup');
        const walletPhoneInput = document.getElementById('walletPhoneInput');

        if (mpinMethodName) mpinMethodName.textContent = paymentMethod;
        
        if (walletPhoneGroup) {
          if (paymentMethod === 'eSewa' || paymentMethod === 'Khalti') {
            walletPhoneGroup.style.display = 'block';
            if(walletPhoneInput) walletPhoneInput.value = '';
          } else {
            walletPhoneGroup.style.display = 'none';
          }
        }

        if (mpinModal) {
          mpinModal.classList.add('open');
          // Auto-focus first input or phone
          setTimeout(() => {
            if ((paymentMethod === 'eSewa' || paymentMethod === 'Khalti') && walletPhoneInput) {
               walletPhoneInput.focus();
            } else {
               const firstInput = document.querySelector('.mpin-digit');
               if (firstInput) firstInput.focus();
            }
          }, 100);
        }
      } else {
        confirmAndPlaceOrder();
      }
    });
  }

  // MPIN Modal Logic
  const closeMpinBtn = document.getElementById('closeMpinBtn');
  const mpinModal = document.getElementById('mpinModalBackdrop');
  if (closeMpinBtn && mpinModal) {
    closeMpinBtn.addEventListener('click', () => {
      mpinModal.classList.remove('open');
    });
  }

  const mpinInputs = document.querySelectorAll('.mpin-digit');
  mpinInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < mpinInputs.length - 1) {
        mpinInputs[index + 1].focus();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
        mpinInputs[index - 1].focus();
      }
    });
  });

  const verifyMpinBtn = document.getElementById('verifyMpinBtn');
  if (verifyMpinBtn) {
    verifyMpinBtn.addEventListener('click', () => {
      const paymentMethod = State.checkoutData.payment;
      if (paymentMethod === 'eSewa' || paymentMethod === 'Khalti') {
        const walletPhoneInput = document.getElementById('walletPhoneInput');
        if (!walletPhoneInput || walletPhoneInput.value.trim().length < 10) {
           showToast('Please enter a valid 10-digit mobile number', 'danger');
           return;
        }
      }

      const mpin = Array.from(mpinInputs).map(i => i.value).join('');
      if (mpin.length < 4) {
        showToast('Please enter your 4-digit PIN', 'danger');
        return;
      }
      
      verifyMpinBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verifying...';
      verifyMpinBtn.disabled = true;
      
      setTimeout(() => {
        verifyMpinBtn.innerHTML = 'Verify & Pay';
        verifyMpinBtn.disabled = false;
        mpinInputs.forEach(i => i.value = '');
        
        if (mpinModal) {
          mpinModal.classList.remove('open');
        }
        
        confirmAndPlaceOrder();
      }, 1500);
    });
  }

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
});

// Expose public API for inline onclick handlers
window.HomeManduApp = {
  filterByCategory: (catId) => {
    State.activeCategory = catId;
    renderCategoryFilterPills();
    renderProducts();
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  },
  handleAddToCartFromGrid,
  openCart,
  closeCart,
  openCheckout,
  closeCheckout,
  updateQuantity,
  removeFromCart,
  openPriceCompare,
  closePriceCompare,
  selectQuoteAndAddToCart
};
