/*
    GODMODE.JS - GLOBAL CONTROLLER
    This file now controls the visual style of cards to prevent you 
    from having to edit every HTML file manually.
*/

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // 1. GLOBAL STYLE INJECTOR (THE FIX)
    // ============================================
    // This injects a CSS rule into every page to override the old tilt behavior.
    // It creates a clean "Lift" effect instead of the "Wobble".
    const styleFix = document.createElement('style');
    styleFix.innerHTML = `
        .tilt-card {
            transform: translateZ(0); /* Hardware acceleration for crisp text */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            will-change: transform;
        }
        .tilt-card:hover {
            transform: translateY(-5px) !important; /* Simple Upward Lift */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
        }
        /* Mobile Menu Fixes */
        #mobile-menu { z-index: 9999; }
    `;
    document.head.appendChild(styleFix);


    // ============================================
    // 2. TOAST NOTIFICATIONS
    // ============================================
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    Object.assign(toastContainer.style, {
        position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999',
        display: 'flex', flexDirection: 'column', gap: '10px'
    });
    document.body.appendChild(toastContainer);

    window.showToast = (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = `flex items-center gap-3 px-6 py-4 rounded-xl border shadow-2xl backdrop-blur-md transform transition-all duration-500 translate-y-10 opacity-0 ${
            type === 'success' ? 'bg-slate-900/95 border-emerald-500/30 text-white' : 'bg-red-900/95 border-red-500/30 text-white'
        }`;
        toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle text-emerald-400' : 'fa-exclamation-circle text-red-400'} text-lg"></i><span class="text-xs font-bold uppercase tracking-widest">${message}</span>`;
        toastContainer.appendChild(toast);
        requestAnimationFrame(() => toast.classList.remove('translate-y-10', 'opacity-0'));
        setTimeout(() => {
            toast.classList.add('translate-y-10', 'opacity-0');
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    };


    // ============================================
    // 3. COMMAND PALETTE (CTRL + K)
    // ============================================
    const palette = document.createElement('div');
    palette.id = 'command-palette';
    palette.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[9999] hidden items-start justify-center pt-[15vh]';
    palette.innerHTML = `
        <div class="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden scale-95 opacity-0 transition-all duration-200" id="palette-modal">
            <div class="border-b border-slate-100 p-4 flex items-center gap-3">
                <i class="fas fa-search text-slate-400"></i>
                <input type="text" id="cmd-input" placeholder="Search catalog..." class="flex-1 outline-none text-sm font-bold text-slate-900 placeholder:text-slate-300">
                <span class="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">ESC</span>
            </div>
            <div class="p-2" id="cmd-results">
                <a href="catalog.html" class="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors"><div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><i class="fas fa-flask"></i></div><span class="text-xs font-bold text-slate-700">Catalog</span></a>
                <a href="dashboard.html" class="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors"><div class="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center"><i class="fas fa-tachometer-alt"></i></div><span class="text-xs font-bold text-slate-700">Dashboard</span></a>
            </div>
        </div>
    `;
    document.body.appendChild(palette);

    const modal = document.getElementById('palette-modal');
    window.togglePalette = () => {
        const isOpen = !palette.classList.contains('hidden');
        if(isOpen) {
            modal.classList.remove('scale-100', 'opacity-100');
            modal.classList.add('scale-95', 'opacity-0');
            setTimeout(() => palette.classList.add('hidden'), 200);
        } else {
            palette.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('scale-95', 'opacity-0');
                modal.classList.add('scale-100', 'opacity-100');
                document.getElementById('cmd-input').focus();
            }, 10);
        }
    };

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); togglePalette(); }
        if (e.key === 'Escape' && !palette.classList.contains('hidden')) togglePalette();
    });
    palette.addEventListener('click', (e) => { if(e.target === palette) togglePalette(); });


    // ============================================
    // 4. MOBILE MENU
    // ============================================
    const nav = document.querySelector('nav');
    if(nav) {
        // Inject Hamburger if needed
        const rightActions = nav.querySelector('.flex.items-center.gap-6');
        if(rightActions && !document.getElementById('mobile-trigger')) {
            rightActions.classList.add('hidden', 'lg:flex'); 
            const btn = document.createElement('button');
            btn.id = 'mobile-trigger';
            btn.className = "lg:hidden text-slate-900 text-xl p-2 ml-auto";
            btn.innerHTML = '<i class="fas fa-bars"></i>';
            btn.onclick = toggleMobileMenu;
            nav.appendChild(btn);
        }

        // Inject Drawer
        const drawer = document.createElement('div');
        drawer.id = 'mobile-menu-drawer';
        drawer.className = 'fixed inset-0 z-[9999] pointer-events-none';
        drawer.innerHTML = `
            <div class="absolute inset-0 bg-slate-900/50 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="mobile-overlay"></div>
            <div class="absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-out flex flex-col p-6 pointer-events-auto" id="mobile-content">
                <div class="flex justify-between items-center mb-8">
                    <span class="font-black text-xl italic uppercase text-slate-900">Amintex<span class="text-blue-600">Labs</span></span>
                    <button id="close-mobile" class="text-slate-400 text-2xl"><i class="fas fa-times"></i></button>
                </div>
                <div class="flex flex-col gap-6 text-lg font-bold text-slate-900">
                    <a href="index.html" class="hover:text-blue-600">Home</a>
                    <a href="catalog.html" class="hover:text-blue-600">Catalog</a>
                    <a href="molecular-structures.html" class="hover:text-blue-600">3D Database</a>
                    <a href="calculator.html" class="hover:text-blue-600">Lab Calculator</a>
                    <a href="dashboard.html" class="hover:text-blue-600">Dashboard</a>
                    <a href="profile.html" class="hover:text-blue-600">Profile</a>
                </div>
                <div class="mt-auto space-y-4">
                    <a href="login.html" class="block w-full border border-slate-200 text-slate-600 text-center py-3 rounded-xl font-bold uppercase text-xs">Login</a>
                    <a href="register.html" class="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-bold uppercase text-xs">Register</a>
                </div>
            </div>
        `;
        document.body.appendChild(drawer);

        const overlay = document.getElementById('mobile-overlay');
        const content = document.getElementById('mobile-content');
        const closeBtn = document.getElementById('close-mobile');

        function toggleMobileMenu() {
            const isOpen = content.classList.contains('translate-x-0');
            if(isOpen) {
                drawer.classList.add('pointer-events-none');
                overlay.classList.remove('opacity-100');
                content.classList.add('translate-x-full');
                content.classList.remove('translate-x-0');
            } else {
                drawer.classList.remove('pointer-events-none');
                overlay.classList.add('opacity-100');
                content.classList.remove('translate-x-full');
                content.classList.add('translate-x-0');
            }
        }
        
        closeBtn.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', toggleMobileMenu);
    }
});
