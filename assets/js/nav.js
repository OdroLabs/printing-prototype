/* ============================================================
   NAV.JS — renders shared navbar/footer (customer) and
   sidebar/header (admin) into mount points on each page.
   Keeps every page file small and consistent.
   ============================================================ */

// ====================== CUSTOMER NAVBAR ======================
function renderCustomerNav(activeKey, base){
  base = base || ""; // "" if in /customer or /pages, "../" prefix handled by caller via base
  const mount = document.getElementById("site-header");
  if(!mount) return;
  const loggedIn = currentRole() === "Customer";
  const links = [
    {key:"home", label:"Home", href: base+"index.html"},
    {key:"services", label:"Services", href: base+"pages/services.html"},
    {key:"catalogue", label:"Catalogue", href: base+"pages/catalogue.html"},
    {key:"how", label:"How It Works", href: base+"index.html#how-it-works"},
    {key:"contact", label:"Contact", href: base+"index.html#contact"},
  ];
  const linkHtml = links.map(l=>`<a class="nav-link ${activeKey===l.key?'active':''}" href="${l.href}">${l.label}</a>`).join("");
  const adminBtn = `<a href="${base}admin/dashboard.html" class="btn btn-light btn-sm me-2" title="Staff / Admin Panel"><i class="fa-solid fa-user-shield"></i>Admin Dashboard</a>`;
  const rightHtml = loggedIn ? `
    ${adminBtn}
    <a href="${base}customer/dashboard.html" class="btn btn-light btn-sm me-2"><i class="fa-solid fa-gauge"></i>Dashboard</a>
    <div class="dropdown d-inline-block">
      <button class="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown"><span class="avatar-circle" style="width:26px;height:26px;font-size:11px;display:inline-flex;margin-right:6px;vertical-align:middle" data-user-initials></span><span data-user-name style="font-size:13px"></span></button>
      <ul class="dropdown-menu dropdown-menu-end shadow-sm">
        <li><a class="dropdown-item" href="${base}customer/profile.html"><i class="fa-solid fa-user fa-fw me-2"></i>My Profile</a></li>
        <li><a class="dropdown-item" href="${base}customer/order-history.html"><i class="fa-solid fa-clock-rotate-left fa-fw me-2"></i>Order History</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item text-danger" href="#" onclick="setDemoRole('Guest');showToast('Logged out');setTimeout(()=>location.href='${base}index.html',600);return false;"><i class="fa-solid fa-right-from-bracket fa-fw me-2"></i>Logout</a></li>
      </ul>
    </div>` : `
    ${adminBtn}
    <a href="${base}pages/login.html" class="btn btn-outline-primary btn-sm me-2">Login</a>
    <a href="${base}pages/register.html" class="btn btn-primary btn-sm">Register</a>`;

  mount.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-customer">
    <div class="container">
      <a class="brand-logo" href="${base}index.html"><span class="mark"><i class="fa-solid fa-swatchbook"></i></span>PrintCraft Studio</a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#custNavCollapse"><i class="fa-solid fa-bars"></i></button>
      <div class="collapse navbar-collapse" id="custNavCollapse">
        <div class="mx-auto nav-cust d-flex gap-1 my-2 my-lg-0">${linkHtml}</div>
        <div class="d-flex align-items-center">${rightHtml}</div>
      </div>
    </div>
  </nav>`;
  document.querySelectorAll("[data-user-name]").forEach(el => el.textContent = currentUserName());
  document.querySelectorAll("[data-user-initials]").forEach(el => el.textContent = initials(currentUserName()));
}
window.renderCustomerNav = renderCustomerNav;

function renderSiteFooter(base){
  base = base || "";
  const mount = document.getElementById("site-footer");
  if(!mount) return;
  mount.innerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="brand-logo text-white mb-3"><span class="mark"><i class="fa-solid fa-swatchbook"></i></span>PrintCraft Studio</div>
          <p style="font-size:13.5px">Sri Lanka's trusted design & printing partner — from concept to courier, we handle it all.</p>
          <div class="d-flex gap-2 mt-3">
            <a href="#" class="header-icon-btn" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12);color:#fff"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="header-icon-btn" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12);color:#fff"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="header-icon-btn" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12);color:#fff"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-6">
          <div class="text-white fw-bold mb-3">Company</div>
          <div class="d-flex flex-column gap-2" style="font-size:13.5px">
            <a href="${base}index.html#about">About Us</a><a href="${base}index.html#testimonials">Testimonials</a><a href="${base}index.html#faq">FAQ</a><a href="${base}index.html#contact">Contact</a>
          </div>
        </div>
        <div class="col-lg-2 col-6">
          <div class="text-white fw-bold mb-3">Services</div>
          <div class="d-flex flex-column gap-2" style="font-size:13.5px">
            <a href="${base}pages/services.html">Full Service</a><a href="${base}pages/services.html">Design Only</a><a href="${base}pages/services.html">Print Only</a><a href="${base}pages/catalogue.html">Catalogue</a>
          </div>
        </div>
        <div class="col-lg-2 col-6">
          <div class="text-white fw-bold mb-3">Account</div>
          <div class="d-flex flex-column gap-2" style="font-size:13.5px">
            <a href="${base}pages/login.html">Login</a><a href="${base}pages/register.html">Register</a><a href="${base}pages/track-order.html">Track Order</a><a href="${base}demo-login.html">Staff / Admin Login</a>
          </div>
        </div>
        <div class="col-lg-2 col-6">
          <div class="text-white fw-bold mb-3">Contact</div>
          <div class="d-flex flex-column gap-2" style="font-size:13.5px">
            <span><i class="fa-solid fa-phone fa-fw me-1"></i> 011 234 5678</span>
            <span><i class="fa-solid fa-envelope fa-fw me-1"></i> hello@printcraft.lk</span>
            <span><i class="fa-solid fa-location-dot fa-fw me-1"></i> Colombo 03, Sri Lanka</span>
          </div>
        </div>
      </div>
      <div class="divider-x" style="border-color:rgba(255,255,255,.1)"></div>
      <div class="d-flex justify-content-between flex-wrap gap-2" style="font-size:12.5px">
        <span>&copy; 2026 PrintCraft Studio. All rights reserved. (UI Prototype — no live data)</span>
        <span>Privacy Policy &middot; Terms of Service</span>
      </div>
    </div>
  </footer>`;
}
window.renderSiteFooter = renderSiteFooter;

// ====================== ADMIN SIDEBAR ======================
const ADMIN_MENU = [
  { group:"Workspace", items:[
    {key:"dashboard", label:"Dashboard & Reports", icon:"fa-gauge-high", href:"dashboard.html"},
    {key:"my-queue", label:"My Queue", icon:"fa-list-check", href:"my-queue.html"},
    {key:"audit-trail", label:"Audit Trail", icon:"fa-shield-halved", href:"audit-trail.html", lock:"SUPER ADMIN"},
  ]},
  { group:"Catalogue & Content", items:[
    {key:"content-management", label:"Content Management", icon:"fa-file-lines", href:"content-management.html"},
    {key:"catalogue-management", label:"Catalogue Management", icon:"fa-swatchbook", href:"catalogue-management.html"},
    {key:"price-management", label:"Price Management", icon:"fa-tags", href:"price-management.html"},
  ]},
  { group:"Operations", items:[
    {key:"orders", label:"Orders & Job Pipeline", icon:"fa-boxes-stacked", href:"orders.html"},
    {key:"delivery", label:"Delivery & Fulfillment", icon:"fa-truck-fast", href:"delivery.html"},
    {key:"job-closure", label:"Job Closure & Archival", icon:"fa-box-archive", href:"job-closure.html"},
  ]},
  { group:"Sales & Business Dev", items:[
    {key:"staff-order", label:"Staff-Assisted Order Creation", icon:"fa-user-plus", href:"staff-order-creation.html"},
    {key:"bdo-dashboard", label:"Business Dev & Referrals", icon:"fa-bullhorn", href:"bdo-dashboard.html"},
  ]},
  { group:"Finance", items:[
    {key:"payment-verification", label:"Payment Verification", icon:"fa-money-check-dollar", href:"payment-verification.html"},
    {key:"invoices", label:"Invoices, Quotations & Receipts", icon:"fa-file-invoice", href:"invoices.html"},
  ]},
  { group:"People", items:[
    {key:"customers", label:"Customer Management", icon:"fa-users", href:"customers.html"},
    {key:"staff-hierarchy", label:"Staff & Hierarchy", icon:"fa-sitemap", href:"staff-hierarchy.html"},
    {key:"roles-permissions", label:"Roles & Permissions", icon:"fa-user-shield", href:"roles-permissions.html"},
  ]},
  { group:"System", items:[
    {key:"notifications-templates", label:"Notifications & Templates", icon:"fa-bell", href:"notifications-templates.html"},
    {key:"system-settings", label:"System Settings", icon:"fa-gear", href:"system-settings.html"},
  ]},
];

function renderAdminSidebar(activeKey){
  const mount = document.getElementById("sidebarMount");
  if(!mount) return;
  const role = currentRole();
  let groupsHtml = ADMIN_MENU.map(g=>{
    const items = g.items.map(it=>{
      if(it.lock && role !== "Super Admin") return ""; // hide super-admin-only from other roles visually
      return `<a href="${it.href}" class="side-link ${activeKey===it.key?'active':''}"><i class="fa-solid ${it.icon} fa-fw"></i><span>${it.label}</span>${it.lock?`<span class="lock-tag">${it.lock}</span>`:""}</a>`;
    }).join("");
    if(!items.trim()) return "";
    return `<div class="side-group-label">${g.group}</div>${items}`;
  }).join("");

  mount.innerHTML = `
  <aside class="admin-sidebar" id="adminSidebar">
    <div class="side-brand"><span class="mark"><i class="fa-solid fa-swatchbook"></i></span><span>PrintCraft Admin</span></div>
    <div class="side-scroll">${groupsHtml}</div>
    <div class="p-3" style="border-top:1px solid rgba(255,255,255,.08)">
      <a href="../index.html" class="side-link"><i class="fa-solid fa-arrow-right-from-bracket fa-fw"></i><span>Exit to Storefront</span></a>
    </div>
  </aside>`;
}
window.renderAdminSidebar = renderAdminSidebar;

function renderAdminHeader(opts){
  opts = opts || {};
  const mount = document.getElementById("headerMount");
  if(!mount) return;
  const crumbs = (opts.breadcrumb || []).map(c => c.href ? `<a href="${c.href}">${c.label}</a>` : `<span>${c.label}</span>`).join(' <i class="fa-solid fa-angle-right" style="font-size:9px;margin:0 4px"></i> ');
  mount.innerHTML = `
  <header class="admin-header">
    <button class="header-icon-btn" id="sidebarToggle"><i class="fa-solid fa-bars"></i></button>
    <div class="header-search"><i class="fa-solid fa-magnifying-glass text-muted-2"></i><input type="text" placeholder="Search orders, customers, jobs..."></div>
    <div class="ms-auto d-flex align-items-center gap-2">
      <div class="dropdown">
        <button class="header-icon-btn" data-bs-toggle="dropdown"><i class="fa-regular fa-bell"></i><span class="notif-dot"></span></button>
        <ul class="dropdown-menu dropdown-menu-end shadow-sm p-2" style="width:320px">
          <div class="d-flex justify-content-between align-items-center px-2 pb-2"><strong style="font-size:13.5px">Notifications</strong><span class="badge-pill badge-brand">5 new</span></div>
          <li><a class="dropdown-item rounded-2 py-2" href="payment-verification.html"><i class="fa-solid fa-money-check-dollar fa-fw me-2 text-warning"></i>3 bank slips awaiting verification</a></li>
          <li><a class="dropdown-item rounded-2 py-2" href="my-queue.html"><i class="fa-solid fa-clock fa-fw me-2 text-danger"></i>JOB-2026-00431 is overdue</a></li>
          <li><a class="dropdown-item rounded-2 py-2" href="orders.html"><i class="fa-solid fa-circle-check fa-fw me-2 text-success"></i>JOB-2026-00417 payment verified</a></li>
          <li><a class="dropdown-item rounded-2 py-2" href="ai-clearance.html"><i class="fa-solid fa-robot fa-fw me-2 text-info"></i>New AI-flagged file needs clearance</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item text-center text-primary fw-semibold" href="#">View all notifications</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="d-flex align-items-center gap-2 border-0 bg-transparent" data-bs-toggle="dropdown">
          <span class="avatar-circle" data-user-initials></span>
          <div class="text-start d-none d-md-block">
            <div style="font-size:13px;font-weight:700;line-height:1.1" data-user-name></div>
            <div style="font-size:11px;color:var(--gray-500)" data-user-role></div>
          </div>
          <i class="fa-solid fa-chevron-down text-muted-2" style="font-size:10px"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow-sm">
          <li><span class="dropdown-item-text" style="font-size:12px;color:var(--gray-500)">Signed in as <strong data-user-role></strong></span></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#"><i class="fa-solid fa-user fa-fw me-2"></i>My Profile</a></li>
          <li><a class="dropdown-item" href="system-settings.html"><i class="fa-solid fa-gear fa-fw me-2"></i>Settings</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item text-danger" href="#" onclick="setDemoRole('Guest');showToast('Logged out');setTimeout(()=>location.href='../demo-login.html',600);return false;"><i class="fa-solid fa-right-from-bracket fa-fw me-2"></i>Logout</a></li>
        </ul>
      </div>
    </div>
  </header>
  <div class="admin-content">
    <div class="breadcrumb-bar">${crumbs}</div>
    <div class="page-title-row">
      <div>
        <h3 class="mb-1">${opts.title||""}</h3>
        ${opts.subtitle?`<div class="text-muted-2" style="font-size:13.5px">${opts.subtitle}</div>`:""}
      </div>
      <div class="d-flex gap-2" id="pageActionsMount">${opts.actionsHtml||""}</div>
    </div>
  </div>`;
}
window.renderAdminHeader = renderAdminHeader;

function initAdminPage(activeKey, headerOpts){
  renderAdminSidebar(activeKey);
  renderAdminHeader(headerOpts);
  document.querySelectorAll("[data-user-name]").forEach(el => el.textContent = currentUserName());
  document.querySelectorAll("[data-user-role]").forEach(el => el.textContent = currentRole());
  document.querySelectorAll("[data-user-initials]").forEach(el => el.textContent = initials(currentUserName()));
}
window.initAdminPage = initAdminPage;
