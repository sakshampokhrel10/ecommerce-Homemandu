/**
 * HomeMandu - Supplier Panel Logic
 */

// Mock Supplier Data
const SUPPLIER_ORDERS = [
  { id: 'HM-948210', items: '3 items (Cement, Rebar...)', customer: 'Ram Bahadur Thapa', location: 'Mahalaxmi-4, Lalitpur', date: 'Oct 12, 2026', amount: 345000, status: 'pending' },
  { id: 'HM-883201', items: '2 items (Bricks, Sand)', customer: 'Sita Sharma', location: 'Baneshwor, Ktm', date: 'Oct 11, 2026', amount: 82000, status: 'processing' },
  { id: 'HM-739112', items: '1 item (PPC Cement)', customer: 'Niraj Karki', location: 'Bhaktapur', date: 'Oct 10, 2026', amount: 45000, status: 'delivered' },
];

const SUPPLIER_INVENTORY = [
  { id: 'P-1', name: 'Shivam OPC Cement 53 Grade', category: 'Cement & Aggregates', price: 780, stock: 450 },
  { id: 'P-2', name: 'Washed River Sand (Tripper Load)', category: 'Cement & Aggregates', price: 16500, stock: 12 },
  { id: 'P-3', name: 'Hetauda PPC Cement (Green Bag)', category: 'Cement & Aggregates', price: 670, stock: 5 }, // Low stock
];

function formatCurrency(amount) {
  return 'NPR ' + Number(amount).toLocaleString('en-IN');
}

function getStatusBadge(status) {
  const map = {
    'pending': '<span class="status-badge status-pending">Pending</span>',
    'processing': '<span class="status-badge status-processing">Dispatching</span>',
    'delivered': '<span class="status-badge status-delivered">Delivered</span>',
    'low': '<span class="status-badge status-low">Low Stock</span>',
    'active': '<span class="status-badge status-active">In Stock</span>',
  };
  return map[status] || `<span class="status-badge">${status}</span>`;
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Render Functions
function renderDashboardOrders() {
  const tbody = document.getElementById('dashboardRecentOrders');
  if (!tbody) return;
  tbody.innerHTML = SUPPLIER_ORDERS.slice(0, 3).map(order => `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td>${order.customer}<br><small style="color:var(--slate-500)">${order.location}</small></td>
      <td>${order.date}</td>
      <td><strong>${formatCurrency(order.amount)}</strong></td>
      <td>${getStatusBadge(order.status)}</td>
    </tr>
  `).join('');
}

function renderOrdersTable() {
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;
  tbody.innerHTML = SUPPLIER_ORDERS.map(order => `
    <tr>
      <td><strong>${order.id}</strong><br><small style="color:var(--slate-500)">${order.date}</small></td>
      <td>${order.items}</td>
      <td>${order.customer}<br><small style="color:var(--slate-500)">${order.location}</small></td>
      <td><strong>${formatCurrency(order.amount)}</strong></td>
      <td>${getStatusBadge(order.status)}</td>
      <td>
        ${order.status === 'pending' ? `<button class="btn btn-secondary btn-sm" onclick="window.SupplierApp.updateOrderStatus('${order.id}', 'processing')">Approve & Dispatch</button>` : ''}
        ${order.status === 'processing' ? `<button class="btn btn-primary btn-sm" onclick="window.SupplierApp.updateOrderStatus('${order.id}', 'delivered')">Mark Delivered</button>` : ''}
        ${order.status === 'delivered' ? `<span style="color:var(--success-600);font-size:0.85rem;"><i class="fa-solid fa-check"></i> Completed</span>` : ''}
      </td>
    </tr>
  `).join('');
}

function renderInventoryTable() {
  const tbody = document.getElementById('inventoryTableBody');
  if (!tbody) return;
  tbody.innerHTML = SUPPLIER_INVENTORY.map(item => `
    <tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.category}</td>
      <td>${formatCurrency(item.price)}</td>
      <td>${item.stock < 10 ? getStatusBadge('low') : getStatusBadge('active')} <span style="margin-left:0.5rem;font-size:0.85rem">(${item.stock} units)</span></td>
      <td>
        <div class="action-btns">
          <button class="btn btn-secondary btn-sm" onclick="window.SupplierApp.updateStock('${item.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Application Logic
window.SupplierApp = {
  switchTab: (tabId) => {
    // Hide all views
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('view-orders').classList.add('hidden');
    document.getElementById('view-inventory').classList.add('hidden');
    const viewWallet = document.getElementById('view-wallet');
    if (viewWallet) viewWallet.classList.add('hidden');
    
    // Remove active class from nav
    document.getElementById('nav-dashboard').classList.remove('active');
    document.getElementById('nav-orders').classList.remove('active');
    document.getElementById('nav-inventory').classList.remove('active');
    const navWallet = document.getElementById('nav-wallet');
    if (navWallet) navWallet.classList.remove('active');

    // Show selected view and update active nav
    if(tabId === 'dashboard' || tabId === 'orders' || tabId === 'inventory' || tabId === 'wallet') {
      document.getElementById(`view-${tabId}`).classList.remove('hidden');
      document.getElementById(`nav-${tabId}`).classList.add('active');
      
      const titles = { 'dashboard': 'Overview', 'orders': 'Orders Management', 'inventory': 'Inventory', 'wallet': 'Wallet & P2P Transfers' };
      document.getElementById('pageTitle').textContent = titles[tabId];
    }
  },
  
  updateOrderStatus: (orderId, newStatus) => {
    const order = SUPPLIER_ORDERS.find(o => o.id === orderId);
    if(order) {
      order.status = newStatus;
      renderDashboardOrders();
      renderOrdersTable();
      showToast(`Order ${orderId} marked as ${newStatus}!`, 'success');
    }
  },
  
  updateStock: (itemId) => {
    const item = SUPPLIER_INVENTORY.find(i => i.id === itemId);
    if(item) {
      const newStock = prompt(`Update stock for ${item.name} (Current: ${item.stock}):`, item.stock);
      if(newStock !== null && !isNaN(newStock)) {
        item.stock = parseInt(newStock);
        renderInventoryTable();
        showToast('Stock updated successfully', 'success');
      }
    }
  },
  
  handleP2PTransfer: () => {
    const recipient = document.getElementById('p2pRecipient').value.trim();
    const amount = document.getElementById('p2pAmount').value;
    const remarks = document.getElementById('p2pRemarks').value.trim();
    
    if (!recipient || !amount || amount < 10) {
      showToast('Please enter a valid recipient and amount (Min: NPR 10).', 'danger');
      return;
    }
    
    const btn = document.getElementById('initiateP2PBtn');
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
      btn.disabled = true;
      
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Money';
        btn.disabled = false;
        
        // Add to history
        const tbody = document.getElementById('p2pHistoryBody');
        const d = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${d}</td>
          <td><span class="status-badge" style="background:#fef2f2; color:var(--danger-600); border:none;">Sent</span></td>
          <td>To: ${recipient}<br><small style="color:var(--slate-500)">${remarks || 'P2P Transfer'}</small></td>
          <td><strong>- NPR ${Number(amount).toLocaleString()}</strong></td>
          <td><span class="status-badge status-active">Success</span></td>
        `;
        tbody.prepend(tr);
        
        // Update balance
        const balanceEl = document.getElementById('walletBalanceDisplay');
        if (balanceEl) {
          let currentBalStr = balanceEl.textContent.replace(/[^0-9]/g, '');
          let currentBal = parseInt(currentBalStr, 10);
          if (!isNaN(currentBal)) {
            balanceEl.textContent = 'NPR ' + (currentBal - amount).toLocaleString('en-IN');
          }
        }
        
        document.getElementById('p2pTransferForm').reset();
        showToast(`Successfully sent NPR ${amount} to ${recipient}!`, 'success');
      }, 1500);
    }
  }
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderDashboardOrders();
  renderOrdersTable();
  renderInventoryTable();

  document.getElementById('nav-dashboard').addEventListener('click', () => window.SupplierApp.switchTab('dashboard'));
  document.getElementById('nav-orders').addEventListener('click', () => window.SupplierApp.switchTab('orders'));
  document.getElementById('nav-inventory').addEventListener('click', () => window.SupplierApp.switchTab('inventory'));
  
  const navWallet = document.getElementById('nav-wallet');
  if (navWallet) navWallet.addEventListener('click', () => window.SupplierApp.switchTab('wallet'));

  const p2pBtn = document.getElementById('initiateP2PBtn');
  if (p2pBtn) p2pBtn.addEventListener('click', window.SupplierApp.handleP2PTransfer);
});
