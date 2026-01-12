// AMINTEX LABS - GOD MODE ENGINE (UX/UI CONTROLLER)
// Handles: Command Palette, 3D Tilt, Global Notifications

// --- 1. COMMAND PALETTE (CTRL + K) ---
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        togglePalette();
    }
});

function togglePalette() {
    let palette = document.getElementById('cmd-palette');
    
    if (!palette) {
        // Create Palette if it doesn't exist
        palette = document.createElement('div');
        palette.id = 'cmd-palette';
        palette.className = 'fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-start justify-center pt-24 opacity-0 transition-opacity duration-200';
        palette.onclick = (e) => { if(e.target === palette) togglePalette(); };
        
        palette.innerHTML = `
            <div class="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden transform scale-95 transition-transform duration-200">
                <div class="border-b border-slate-100 p-4 flex items-center gap-3">
                    <i class="fas fa-search text-slate-400"></i>
                    <input type="text" id="cmd-input" placeholder="Jump to... (e.g., 'Tirzepatide', 'Admin', 'Orders')" 
                        class="flex-1 outline-none text-slate-700 font-bold text-lg placeholder:font-normal">
                    <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">ESC</span>
                </div>
                <div id="cmd-results" class="max-h-[60vh] overflow-y-auto p-2">
                    </div>
            </div>
        `;
        document.body.appendChild(palette);
        
        // Input Logic
        const input = palette.querySelector('input');
        input.addEventListener('input', (e) => runCmdSearch(e.target.value));
    }

    if (palette.classList.contains('hidden')) {
        palette.classList.remove('hidden');
        setTimeout(() => {
            palette.classList.remove('opacity-0');
            palette.querySelector('div').classList.remove('scale-95');
            palette.querySelector('div').classList.add('scale-100');
            document.getElementById('cmd-input').focus();
        }, 10);
    } else {
        palette.classList.add('opacity-0');
        palette.querySelector('div').classList.add('scale-95');
        setTimeout(() => palette.classList.add('hidden'), 200);
    }
}

function runCmdSearch(query) {
    const results = document.getElementById('cmd-results');
    if (!query) { results.innerHTML = ''; return; }
    
    // Search Master Inventory (if loaded)
    let hits = [];
    if (typeof masterInventory !== 'undefined') {
        hits = masterInventory.filter(i => i.name.toLowerCase().includes(query.toLowerCase())).slice(0, 3);
    }

    let html = '';
    
    // Product Matches
    hits.forEach(h => {
        html += `
            <a href="product.html?id=${h.id}" class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl group transition-colors">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><i class="fas fa-flask"></i></div>
                    <span class="font-bold text-slate-700 group-hover:text-blue-600">${h.name}</span>
                </div>
                <span class="text-[10px] font-bold text-slate-400 uppercase">Product</span>
            </a>
        `;
    });

    // Static Navigation
    const navs = [
        { name: "Catalog", url: "catalog.html", icon: "fa-th" },
        { name: "Admin Portal", url: "admin.html", icon: "fa-lock" },
        { name: "Track Order", url: "account.html", icon: "fa-truck" }
    ];
    
    navs.filter(n => n.name.toLowerCase().includes(query.toLowerCase())).forEach(n => {
        html += `
            <a href="${n.url}" class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl group transition-colors">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center"><i class="fas ${n.icon}"></i></div>
                    <span class="font-bold text-slate-700">${n.name}</span>
                </div>
                <span class="text-[10px] font-bold text-slate-400 uppercase">Page</span>
            </a>
        `;
    });

    results.innerHTML = html || '<div class="p-4 text-center text-slate-400 text-sm">No results found.</div>';
}

// --- 2. TILT CARD ENGINE (VANILLA) ---
function initTilt() {
    const cards = document.querySelectorAll(".tilt-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Limit rotation to small angles (Stability)
            const rotateX = ((y - centerY) / centerY) * -3; 
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
        });
    });
}
document.addEventListener("DOMContentLoaded", initTilt);

// --- 3. TOAST NOTIFICATIONS ---
function showToast(msg) {
    let toast = document.createElement('div');
    toast.className = 'fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 text-sm font-bold animate-bounce-in';
    toast.innerHTML = `<i class="fas fa-check-circle text-emerald-400"></i> ${msg}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
