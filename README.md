# HomeMandu - Nepal's Smart Home Building Marketplace

**Plan Smart. Build Better.**

HomeMandu is a modern, responsive e-commerce web application designed specifically for construction and home-building supplies. It brings suppliers, real-time prices, quantity estimation, and direct site delivery into a single unified digital marketplace.

---

## 🌟 Key Features

1. **Product Categories**:
   - 8 major construction categories with direct filtering:
     - Cement & Aggregates
     - Structural Steel & Rebar
     - Bricks & Masonry Blocks
     - Plumbing & Sanitaryware
     - Electrical & Lighting
     - Paints & Protective Finishes
     - Roofing & Waterproofing
     - Smart Home & Security

2. **Catalog with Multi-Supplier Comparison**:
   - Real-time search by keyword, category, and vendor
   - Multi-vendor price comparison modal displaying quotes, lead times, and ratings from multiple suppliers
   - Stock status indicators, unit prices (in NPR), and direct quantity cart addition

3. **Interactive Shopping Cart Drawer**:
   - Slide-over drawer with item thumbnails, quantity increment/decrement controls, and remove actions
   - Subtotal, 13% Government VAT calculation, and Site Transport Logistics fee calculation (free for orders above NPR 100,000)
   - Persistent cart state saved via `localStorage`

4. **Multi-Step Checkout Workflow**:
   - **Step 1: Construction Site Details**: Customer name, phone, province, municipality, site landmark, preferred delivery date, and truck unloading instructions
   - **Step 2: Payment & Invoicing**: eSewa, Khalti, Bank Transfer / FonePay, Cash on Delivery, plus PAN/VAT invoice option for construction bank loans
   - **Step 3: Order Review & Confirmation**: Full breakdown table with itemization
   - **Order Confirmation Modal**: Generated Order Reference ID and printable GST tax invoice

5. **Smart Material Cost Calculator**:
   - Calculates estimated bags of cement, tons of steel rebar, bricks, and sand tipper loads based on house built-up square footage and number of storeys.
   - Includes a one-click "Add Bundle to Cart" action.

---

## 🚀 How to Run

1. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, serve with any local HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.

---

## 📂 Project Structure

```
homemandu-ecommerce/
├── index.html       # Semantic HTML5 layout and modal dialogs
├── styles.css       # Responsive CSS design system with CSS custom properties
├── app.js           # Core state management, cart engine, estimator & checkout workflow
└── README.md        # Project documentation
```
