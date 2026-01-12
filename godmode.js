/* =========================================
   GOD MODE ENGINE: AMINTEX LABS
   Includes: Command Palette, 3D Tilt, Toasts
   ========================================= */

// --- 1. COMMAND PALETTE (CTRL + K) ---
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        togglePalette();
    }
    if (e.key === 'Escape') closePalette();
});

function togglePalette() {
    let palette = document.getElementById('cmd-palette');
    if (!palette) { createPalette(); palette = document.getElementById('cmd-palette'); }
    
    if (palette.classList.contains('hidden')) {
        palette.classList.remove('hidden');
        document.getElementById('cmd-input').focus();
    } else {
        closePalette();
    }
}

function closePalette() {
    const palette = document.getElementById('cmd-palette');
    if (palette) palette.classList.add('hidden');
}

function createPalette() {
    const div = document.createElement('div');
    div.id = 'cmd-palette';
    div.className = 'fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-start justify-center pt-24 hidden transition-all';
    div.innerHTML = `
        <div class="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div class="border-b border-slate-100 p-4 flex items-center gap-3">
                <i class="fas fa-search text-slate-400"></i>
                <input id="cmd-input" type="text" placeholder="Type a command or search..." class="w-full outline-none text-slate-900 font-bold placeholder:font-medium">
                <span class="text-[10px] font-black bg-slate-100 text-slate-400 px-2 py-1 rounded">ESC</span>
            </div>
            <div id="cmd-results" class="max-h-64 overflow-y-auto p-2">
                </div>
            <div class="bg-slate-50 p-2 text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest border-t border-slate-100">
                Amintex Labs Neural Link
            </div>
        </div>
    `;
    document.body.appendChild(div);
    
    // Close on click outside
    div.addEventListener('click', (e) => { if(e.target === div) closePalette(); });

    // Search Logic
    const input = document.getElementById('cmd-input');
    input.addEventListener('input', (e) => runCmdSearch(e.target.value));
}

function runCmdSearch(query) {
    const results = document.getElementById('cmd-results');
    const q = query.toLowerCase();
    
    // Define Quick Actions
    const actions = [
        { name: "Go to Catalog", icon: "fa-flask", url: "catalog.html", type: "Navigation" },
        { name: "View Dashboard", icon: "fa-chart-line", url: "dashboard.html", type: "Navigation" },
        { name: "Track Shipment", icon: "fa-truck-fast", url: "logistics.html", type: "Logistics" },
        { name: "Verify Batch", icon: "fa-check-circle", url: "batch-verification.html", type: "Quality" },
        { name: "Contact Support", icon: "fa-headset", url: "support.html", type: "Support" },
    ];

    // Merge with Inventory (if available)
    if (typeof masterInventory !== 'undefined') {
        masterInventory.forEach(item => {
            if(item.showInCatalog) {
                actions.push({ 
                    name: item.name, 
                    icon: "fa-vial", 
                    url: `product.html?id=${item.id}`, 
                    type: "Product",
                    desc: item.category
                });
            }
        });
    }

    const filtered = actions.filter(a => a.name.toLowerCase().includes(q));
    
    results.innerHTML = filtered.length > 0 ? filtered.map(a => `
        <a href="${a.url}" class="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 group transition-colors">
            <div class="w-8 h-8 bg-slate-100 text-slate-400 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i class="fas ${a.icon}"></i>
            </div>
            <div>
                <p class="text-sm font-bold text-slate-700 group-hover:text-blue-700">${a.name}</p>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${a.type} ${a.desc ? '• ' + a.desc : ''}</p>
            </div>
        </a>
    `).join('') : `<div class="p-4 text-center text-xs font-bold text-slate-400">No results found.</div>`;
}


// --- 2. HOLOGRAPHIC TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
    // Remove existing container if any
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-6 right-6 z-[110] flex flex-col gap-3 pointer-events-none';
        document.body.appendChild(container);
    }

    // Colors
    const colors = type === 'success' ? 'border-emerald-500 bg-slate-900' : 'border-red-500 bg-slate-900';
    const icon = type === 'success' ? 'fa-check-circle text-emerald-500' : 'fa-exclamation-circle text-red-500';

    const toast = document.createElement('div');
    toast.className = `${colors} border-l-4 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 min-w-[300px] transform transition-all duration-500 translate-x-full opacity-0 pointer-events-auto`;
    toast.innerHTML = `
        <i class="fas ${icon} text-lg"></i>
        <div>
            <p class="font-bold text-sm">System Notification</p>
            <p class="text-xs text-slate-400">${message}</p>
        </div>
    `;

    container.appendChild(toast);

    // Animate In
    setTimeout(() => { toast.classList.remove('translate-x-full', 'opacity-0'); }, 100);

    // Animate Out
    setTimeout(() => {
        toast.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}


// --- 3. MAGNETIC 3D TILT EFFECT ---
// Applies to any element with class="tilt-card"
function initTilt() {
    const cards = document.querySelectorAll('.tilt-card, .product-card, .glass-panel'); // Auto-applies to existing classes

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'none'; // Instant movement
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s ease'; // Smooth reset
        });
    });
}

// Initialize on Load
window.addEventListener('DOMContentLoaded', () => {
    initTilt();
    
    // Override alert() to use our Toasts instead
    window.alert = function(msg) { showToast(msg, 'success'); }
});
