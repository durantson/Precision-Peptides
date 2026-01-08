<section id="technical-knowledge-base" class="mt-16 bg-white border-2 border-slate-100 rounded-[3rem] p-6 md:p-12 shadow-2xl shadow-slate-200/50">
    
    <div class="max-w-3xl mx-auto text-center mb-10">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Precision Intelligence</h2>
        <p class="text-3xl md:text-5xl font-black text-slate-900 italic uppercase tracking-tighter">Technical Knowledge Base</p>
        <p class="text-slate-500 mt-4 text-sm md:text-base font-medium leading-relaxed">Verified laboratory protocols, reconstitution physics, and molecular stability data.</p>
    </div>

    <div class="relative max-w-xl mx-auto mb-10">
        <input type="text" id="faqSearch" onkeyup="searchFaq()" placeholder="Search technical database (e.g. 'Storage', 'Mixing')..." 
        class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all shadow-inner">
        <i class="fas fa-search absolute right-6 top-1/2 -translate-y-1/2 text-slate-300"></i>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button onclick="filterFaq('all', this)" class="faq-tab active px-5 py-2 rounded-full border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all">All Data</button>
        <button onclick="filterFaq('handling', this)" class="faq-tab px-5 py-2 rounded-full border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all">Handling</button>
        <button onclick="filterFaq('storage', this)" class="faq-tab px-5 py-2 rounded-full border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all">Storage</button>
        <button onclick="filterFaq('math', this)" class="faq-tab px-5 py-2 rounded-full border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all">Concentration</button>
    </div>

    <div id="faq-grid" class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        
        <div class="faq-item bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer group" data-category="handling" onclick="toggleFaq('f1')">
            <div class="flex justify-between items-start gap-4">
                <span class="text-sm font-black uppercase tracking-tight text-slate-900 leading-tight">What is the "Wall-Drip" reconstitution method?</span>
                <i id="icon-f1" class="fas fa-plus text-[10px] text-slate-300 group-hover:text-blue-600 mt-1"></i>
            </div>
            <div id="f1" class="hidden mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                
                To prevent molecular denaturing, point the needle at the glass wall of the vial. Allow the Bacteriostatic Water to run down the glass into the lyophilized powder. **Never spray directly onto the powder**, as the impact pressure can damage the peptide chains.
            </div>
        </div>

        <div class="faq-item bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer group" data-category="storage" onclick="toggleFaq('f2')">
            <div class="flex justify-between items-start gap-4">
                <span class="text-sm font-black uppercase tracking-tight text-slate-900 leading-tight">Optimal storage for reconstituted liquid?</span>
                <i id="icon-f2" class="fas fa-plus text-[10px] text-slate-300 group-hover:text-blue-600 mt-1"></i>
            </div>
            <div id="f2" class="hidden mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                Once liquid, the peptide is highly sensitive. It must be stored at 2°C – 8°C (36°F – 46°F). Avoid the door of the refrigerator as temperature fluctuations every time the door opens can degrade the sequence. Utilization should occur within 14-21 days for maximum potency.
            </div>
        </div>

        <div class="faq-item bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer group" data-category="math" onclick="toggleFaq('f3')">
            <div class="flex justify-between items-start gap-4">
                <span class="text-sm font-black uppercase tracking-tight text-slate-900 leading-tight">How do I calculate mg per mL concentration?</span>
                <i id="icon-f3" class="fas fa-plus text-[10px] text-slate-300 group-hover:text-blue-600 mt-1"></i>
            </div>
            <div id="f3" class="hidden mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                Concentration is calculated by dividing the total mg in the vial by the mL of water added. 
                <br><br>
                <strong>Example:</strong> A 10mg vial + 2mL of water = 5mg per 1mL concentration. This means 10 units on a standard syringe would contain 0.5mg of reagent.
            </div>
        </div>

        <div class="faq-item bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer group" data-category="handling" onclick="toggleFaq('f4')">
            <div class="flex justify-between items-start gap-4">
                <span class="text-sm font-black uppercase tracking-tight text-slate-900 leading-tight">Why is there a vacuum seal in the vial?</span>
                <i id="icon-f4" class="fas fa-plus text-[10px] text-slate-300 group-hover:text-blue-600 mt-1"></i>
            </div>
            <div id="f4" class="hidden mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                Our vials are vacuum-sealed to ensure a zero-oxygen environment, preventing oxidation. A strong vacuum pull during reconstitution is a key indicator of factory seal integrity. If the water does not pull in automatically, please contact support.
            </div>
        </div>

        <div class="faq-item bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer group" data-category="handling" onclick="toggleFaq('f5')">
            <div class="flex justify-between items-start gap-4">
                <span class="text-sm font-black uppercase tracking-tight text-slate-900 leading-tight">Why does my powder look like a solid puck?</span>
                <i id="icon-f5" class="fas fa-plus text-[10px] text-slate-300 group-hover:text-blue-600 mt-1"></i>
            </div>
            <div id="f5" class="hidden mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                This is known as a "lyophilized cake." High-quality freeze-drying often results in a solid puck. If the cake breaks into powder during shipping, it does not affect the purity or mass of the peptide; it is purely aesthetic.
            </div>
        </div>

        <div class="faq-item bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer group" data-category="storage" onclick="toggleFaq('f6')">
            <div class="flex justify-between items-start gap-4">
                <span class="text-sm font-black uppercase tracking-tight text-slate-900 leading-tight">Is the peptide safe if it was warm during shipping?</span>
                <i id="icon-f6" class="fas fa-plus text-[10px] text-slate-300 group-hover:text-blue-600 mt-1"></i>
            </div>
            <div id="f6" class="hidden mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                Yes. In their lyophilized (powder) state, peptides are extremely stable. Research shows they can withstand room-temperature exposure for up to 4 weeks without losing potency. Always refrigerate immediately upon arrival to preserve long-term shelf life.
            </div>
        </div>

    </div>

    <div class="mt-12 text-center border-t border-slate-100 pt-8">
        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Question not listed?</p>
        <a href="mailto:support@precisionlabs.com" class="bg-slate-900 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">Email Lab Support</a>
    </div>
</section>

<style>
    .faq-tab.active { background-color: #0f172a; color: white; border-color: #0f172a; shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
    .faq-item:hover { border-color: #2563eb; }
</style>

<script>
    function toggleFaq(id) {
        const el = document.getElementById(id);
        const icon = document.getElementById('icon-' + id);
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
            icon.classList.replace('fa-plus', 'fa-minus');
            icon.classList.add('text-blue-600');
        } else {
            el.classList.add('hidden');
            icon.classList.replace('fa-minus', 'fa-plus');
            icon.classList.remove('text-blue-600');
        }
    }

    function filterFaq(cat, btn) {
        document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            if (cat === 'all' || item.getAttribute('data-category') === cat) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function searchFaq() {
        let input = document.getElementById('faqSearch').value.toLowerCase();
        let items = document.querySelectorAll('.faq-item');
        items.forEach(item => {
            let text = item.innerText.toLowerCase();
            item.style.display = text.includes(input) ? 'block' : 'none';
        });
    }
</script>
