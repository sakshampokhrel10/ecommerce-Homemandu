/**
 * HomeMandu - Admin Panel Logic
 */

// Mock Admin Data
const ADMIN_ACTIVITY = [
  { time: '2 mins ago', type: 'Order Placed', entity: 'Ram Bahadur', details: 'Order HM-948210 for NPR 345,000' },
  { time: '15 mins ago', type: 'User Signup', entity: 'Sita Sharma', details: 'Registered as Homeowner' },
  { time: '1 hour ago', type: 'Supplier Application', entity: 'Valley Hardware Center', details: 'Awaiting Document Verification' },
  { time: '3 hours ago', type: 'Payout Processed', entity: 'System', details: 'NPR 1.2M settled to 14 suppliers' }
];

const ADMIN_USERS = [
  { id: 'U-9901', name: 'Ram Bahadur Thapa', role: 'Homeowner', status: 'active' },
  { id: 'U-9902', name: 'Niraj Karki', role: 'Contractor', status: 'active' },
  { id: 'U-9903', name: 'Rajesh Hamal', role: 'Homeowner', status: 'pending' }
];

const ADMIN_SUPPLIERS = [
  { id: 'SP-4091', name: 'Kathmandu Building Supplies', location: 'Tinkune', status: 'active' },
  { id: 'SP-4092', name: 'Valley Hardware Center', location: 'Patan', status: 'pending' },
  { id: 'SP-4093', name: 'Siddhi Ganesh Kiln', location: 'Bhaktapur', status: 'suspended' }
];

function getStatusBadge(status) {
  const map = {
    'pending': '<span class="status-badge status-pending">Pending Review</span>',
    'active': '<span class="status-badge status-active">Active</span>',
    'suspended': '<span class="status-badge status-low">Suspended</span>',
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
function renderActivityLog() {
  const tbody = document.getElementById('adminActivityLog');
  if (!tbody) return;
  tbody.innerHTML = ADMIN_ACTIVITY.map(act => `
    <tr>
      <td style="color:var(--slate-500);font-size:0.85rem">${act.time}</td>
      <td><strong>${act.type}</strong></td>
      <td>${act.entity}</td>
      <td>${act.details}</td>
    </tr>
  `).join('');
}

function renderUsersTable() {
  const tbody = document.getElementById('usersTableBody');
  if (!tbody) return;
  tbody.innerHTML = ADMIN_USERS.map(user => `
    <tr>
      <td>${user.id}</td>
      <td><strong>${user.name}</strong></td>
      <td>${user.role}</td>
      <td>${getStatusBadge(user.status)}</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="showToast('Viewing user profile for ${user.name}', 'info')">View Profile</button>
      </td>
    </tr>
  `).join('');
}

function renderSuppliersTable() {
  const tbody = document.getElementById('suppliersTableBody');
  if (!tbody) return;
  tbody.innerHTML = ADMIN_SUPPLIERS.map(sup => `
    <tr>
      <td>${sup.id}</td>
      <td><strong>${sup.name}</strong></td>
      <td>${sup.location}</td>
      <td>${getStatusBadge(sup.status)}</td>
      <td>
        ${sup.status === 'pending' ? `<button class="btn btn-primary btn-sm" onclick="window.AdminApp.verifySupplier('${sup.id}')">Verify Now</button>` : ''}
        ${sup.status === 'active' ? `<button class="btn btn-secondary btn-sm" style="color:var(--danger-600);border-color:var(--danger-200)" onclick="window.AdminApp.suspendSupplier('${sup.id}')">Suspend</button>` : ''}
        ${sup.status === 'suspended' ? `<button class="btn btn-secondary btn-sm" onclick="window.AdminApp.verifySupplier('${sup.id}')">Reactivate</button>` : ''}
      </td>
    </tr>
  `).join('');
}

// Application Logic
window.AdminApp = {
  switchTab: (tabId) => {
    // Hide all views
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('view-users').classList.add('hidden');
    document.getElementById('view-suppliers').classList.add('hidden');
    document.getElementById('view-activity').classList.add('hidden');
    
    // Remove active class from nav
    document.getElementById('nav-dashboard').classList.remove('active');
    document.getElementById('nav-users').classList.remove('active');
    document.getElementById('nav-suppliers').classList.remove('active');
    document.getElementById('nav-activity').classList.remove('active');

    // Show selected view and update active nav
    if(tabId === 'dashboard' || tabId === 'users' || tabId === 'suppliers' || tabId === 'activity') {
      document.getElementById(`view-${tabId}`).classList.remove('hidden');
      document.getElementById(`nav-${tabId}`).classList.add('active');
      
      const titles = { 'dashboard': 'Platform Overview', 'users': 'User Management', 'suppliers': 'Supplier Verification', 'activity': 'System Activity Log' };
      document.getElementById('pageTitle').textContent = titles[tabId];
    }
  },
  
  verifySupplier: (supId) => {
    const sup = ADMIN_SUPPLIERS.find(s => s.id === supId);
    if(sup) {
      sup.status = 'active';
      renderSuppliersTable();
      showToast(`Supplier ${sup.name} has been verified and activated!`, 'success');
    }
  },
  
  suspendSupplier: (supId) => {
    const sup = ADMIN_SUPPLIERS.find(s => s.id === supId);
    if(sup) {
      if(confirm(`Are you sure you want to suspend ${sup.name}? They will not be able to receive new orders.`)) {
        sup.status = 'suspended';
        renderSuppliersTable();
        showToast(`Supplier ${sup.name} suspended.`, 'danger');
      }
    }
  }
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderActivityLog();
  renderUsersTable();
  renderSuppliersTable();

  document.getElementById('nav-dashboard').addEventListener('click', () => window.AdminApp.switchTab('dashboard'));
  document.getElementById('nav-users').addEventListener('click', () => window.AdminApp.switchTab('users'));
  document.getElementById('nav-suppliers').addEventListener('click', () => window.AdminApp.switchTab('suppliers'));
  document.getElementById('nav-activity').addEventListener('click', () => window.AdminApp.switchTab('activity'));
});
