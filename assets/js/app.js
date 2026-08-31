/* ============================================================
   APP.JS — shared UI behaviour for the prototype (no backend)
   ============================================================ */

// ---------- Toasts ----------
function ensureToastStack(){
  let stack = document.querySelector(".toast-stack");
  if(!stack){
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }
  return stack;
}
function showToast(message, type="success", title=null){
  const icons = { success:"fa-circle-check", warning:"fa-triangle-exclamation", danger:"fa-circle-xmark", info:"fa-circle-info" };
  const colors = { success:"var(--success-600)", warning:"var(--warning-600)", danger:"var(--danger-600)", info:"var(--brand-600)" };
  const titles = { success:"Success", warning:"Warning", danger:"Error", info:"Notice" };
  const stack = ensureToastStack();
  const el = document.createElement("div");
  el.className = "toast-pro " + type;
  el.innerHTML = `
    <i class="fa-solid ${icons[type]}" style="color:${colors[type]};margin-top:2px"></i>
    <div class="flex-grow-1">
      <div style="font-weight:700;font-size:13.5px">${title || titles[type]}</div>
      <div style="font-size:12.8px;color:var(--gray-500)">${message}</div>
    </div>
    <button class="btn-close btn-close-sm" style="font-size:10px" onclick="this.closest('.toast-pro').remove()"></button>
  `;
  stack.appendChild(el);
  setTimeout(()=>{ el.style.transition="opacity .3s"; el.style.opacity="0"; setTimeout(()=>el.remove(),300); }, 3800);
}
window.showToast = showToast;

// ---------- Generic confirm-style bootstrap modal ----------
function openConfirmModal({title, body, confirmText="Confirm", confirmClass="btn-primary", onConfirm, icon="fa-circle-question", iconColor="var(--brand-500)"}){
  let modalEl = document.getElementById("genericConfirmModal");
  if(modalEl) modalEl.remove();
  modalEl = document.createElement("div");
  modalEl.className = "modal fade";
  modalEl.id = "genericConfirmModal";
  modalEl.innerHTML = `
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center pt-4 pb-2">
        <div style="width:56px;height:56px;border-radius:50%;background:${iconColor}1a;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
          <i class="fa-solid ${icon}" style="font-size:22px;color:${iconColor}"></i>
        </div>
        <h5 class="mb-2">${title}</h5>
        <p class="text-muted-2 mb-0" style="font-size:13.5px">${body}</p>
      </div>
      <div class="modal-footer border-0 justify-content-center pb-4">
        <button class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
        <button class="btn ${confirmClass}" id="genericConfirmBtn">${confirmText}</button>
      </div>
    </div>
  </div>`;
  document.body.appendChild(modalEl);
  const bsModal = new bootstrap.Modal(modalEl);
  modalEl.querySelector("#genericConfirmBtn").addEventListener("click", ()=>{
    bsModal.hide();
    if(onConfirm) onConfirm();
  });
  bsModal.show();
}
window.openConfirmModal = openConfirmModal;

// ---------- Mock navigation guard (role switch) ----------
function setDemoRole(role, name){
  localStorage.setItem("__proto_role", role);
  localStorage.setItem("__proto_name", name || role);
}
window.setDemoRole = setDemoRole;

function currentRole(){ return localStorage.getItem("__proto_role") || "Guest"; }
function currentUserName(){ return localStorage.getItem("__proto_name") || "Guest User"; }
window.currentRole = currentRole;
window.currentUserName = currentUserName;

function initials(name){
  return name.split(" ").map(p=>p[0]).slice(0,2).join("").toUpperCase();
}

// ---------- Sidebar collapse (admin) ----------
document.addEventListener("DOMContentLoaded", function(){
  const toggleBtn = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".admin-sidebar");
  const main = document.querySelector(".admin-main");
  if(toggleBtn && sidebar && main){
    toggleBtn.addEventListener("click", ()=>{
      if(window.innerWidth < 992){
        sidebar.classList.toggle("mobile-open");
      } else {
        sidebar.classList.toggle("collapsed");
        main.classList.toggle("expanded");
      }
    });
  }
  // bootstrap tooltip / popover no-op safe init
  const headerName = document.querySelectorAll("[data-user-name]");
  headerName.forEach(el => el.textContent = currentUserName());
  const headerRole = document.querySelectorAll("[data-user-role]");
  headerRole.forEach(el => el.textContent = currentRole());
  const headerInit = document.querySelectorAll("[data-user-initials]");
  headerInit.forEach(el => el.textContent = initials(currentUserName()));
});

// ---------- Simple table search filter ----------
function wireTableSearch(inputId, tableBodyId){
  const input = document.getElementById(inputId);
  const tbody = document.getElementById(tableBodyId);
  if(!input || !tbody) return;
  input.addEventListener("input", ()=>{
    const q = input.value.toLowerCase();
    Array.from(tbody.rows).forEach(row=>{
      row.style.display = row.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });
}
window.wireTableSearch = wireTableSearch;

// ---------- Badge helper ----------
function badgeHtml(text, cls){
  return `<span class="badge-pill ${cls}"><span class="dot"></span>${text}</span>`;
}
window.badgeHtml = badgeHtml;

// Utility: navigate with a tiny simulated delay + toast (used for "mock success" actions)
function mockAction(message, redirectUrl, type="success"){
  showToast(message, type);
  if(redirectUrl){
    setTimeout(()=>{ window.location.href = redirectUrl; }, 900);
  }
}
window.mockAction = mockAction;
