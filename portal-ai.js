/**
 * PRECISION LABS - AI RESEARCH ASSISTANT (Dr. Alara)
 * version: 2.4.0 (Stable)
 */

document.addEventListener('DOMContentLoaded', () => {
    initChatSystem();
});

// --- CONFIGURATION ---
const CONFIG = {
    botName: "Dr. Alara",
    typingSpeed: 30, // ms per character calculation
    minDelay: 1000,  // minimum wait time for realism
    maxHistory: 50   // keep DOM light
};

// --- KNOWLEDGE BASE ---
const KNOWLEDGE = {
    // 1. Compliance & Safety (Highest Priority)
    compliance: {
        triggers: ['human', 'inject', 'dosage', 'dose', 'take', 'consumption', 'body', 'muscle', 'fat loss', 'symptom'],
        response: `<div class="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
            <strong class="text-red-700 uppercase text-[10px] tracking-widest block mb-1"><i class="fas fa-exclamation-triangle"></i> Compliance Alert</strong>
            <p class="text-red-800/80">Precision Peptides supplies reagents strictly for <strong>in-vitro laboratory research</strong> and non-clinical applications. We are unable to provide instructions regarding administration, dosage, or therapeutic use.</p>
        </div>`
    },

    // 2. Logistics
    shipping: {
        triggers: ['ship', 'delivery', 'track', 'fedex', 'time', 'long', 'arrive'],
        response: `<strong>Logistics Data:</strong><br>
        <ul class="list-disc ml-4 mt-2 space-y-1 text-slate-500">
            <li><strong>Domestic:</strong> FedEx Priority Overnight (1-2 Business Days).</li>
            <li><strong>International:</strong> DHL Express (3-5 Business Days).</li>
            <li><strong>Cutoff:</strong> Orders placed before 14:00 EST ship same-day.</li>
        </ul>`
    },

    // 3. Quality Control
    quality: {
        triggers: ['purity', 'test', 'hplc', 'coa', 'lab', 'verify', 'janoshik'],
        response: `<strong>Quality Assurance Protocols:</strong><br>
        All batches are subjected to third-party verification via Janoshik or MZ Biolabs.
        <br><br>
        We guarantee a purity standard of <strong>&ge;99.0%</strong>. Every vial includes a QR code linking directly to the mass spectrometry raw data.`
    },

    // 4. Product Specific Intelligence
    products: {
        'tirzepatide': 'Tirzepatide is a dual GIP/GLP-1 receptor agonist. Stock is currently available in 10mg aliquots. Requires -20°C storage.',
        'semaglutide': 'Semaglutide (GLP-1 Analogue) features the C18 fatty diacid modification for albumin binding studies. Available in 5mg.',
        'retatrutide': 'Retatrutide is the triple agonist (GCGR/GIP/GLP-1). It is our newest metabolic reagent.',
        'bpc': 'BPC-157 is available as the stable Arginine Salt form, designed for gastric pH resistance in research models.',
        'tb-500': 'TB-500 (Thymosin Beta-4) is a synthetic 43-amino acid peptide involved in actin sequestration.',
        'semax': 'We carry both Standard Semax (Heptapeptide) and NA-Semax Amidate (Acetyl/Amide modified) for neurological research.',
        'ghk': 'GHK-Cu appears as a deep blue crystal due to the Copper(II) complex. It is highly hygroscopic.',
        'tesamorelin': 'Tesamorelin features the trans-3-hexenoic acid modification at the N-terminus.'
    }
};

// --- SYSTEM LOGIC ---

function initChatSystem() {
    const form = document.getElementById('chat-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('user-input');
        const text = input.value.trim();
        
        if (text) {
            processUserMessage(text);
            input.value = '';
        }
    });

    // Initialize "Enter" key override if needed
    document.getElementById('user-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            // default form submit handles this
        }
    });
}

function processUserMessage(text) {
    // 1. Render User Message
    addMessageToUI('user', text);

    // 2. Show Typing Indicator
    showTypingIndicator();

    // 3. Analyze & Generate Response
    const responseData = analyzeInput(text);
    
    // 4. Calculate "AI Thinking Time" (Simulated realism)
    const delay = Math.max(CONFIG.minDelay, (responseData.length * CONFIG.typingSpeed) / 5);

    setTimeout(() => {
        removeTypingIndicator();
        addMessageToUI('bot', responseData);
    }, delay);
}

function analyzeInput(input) {
    const lower = input.toLowerCase();

    // Check Compliance First (Guardrail)
    if (KNOWLEDGE.compliance.triggers.some(t => lower.includes(t))) {
        return KNOWLEDGE.compliance.response;
    }

    // Check Product Specifics
    for (const [key, value] of Object.entries(KNOWLEDGE.products)) {
        if (lower.includes(key)) {
            return `<strong>Reagent Identification:</strong><br>${value}<br><br>Would you like the HPLC report for this compound?`;
        }
    }

    // Check Categories
    if (KNOWLEDGE.shipping.triggers.some(t => lower.includes(t))) return KNOWLEDGE.shipping.response;
    if (KNOWLEDGE.quality.triggers.some(t => lower.includes(t))) return KNOWLEDGE.quality.response;

    // Bulk/Wholesale
    if (lower.includes('bulk') || lower.includes('price') || lower.includes('discount')) {
        return `We offer institutional pricing tiers:
        <ul class="list-disc ml-4 mt-2 mb-2 text-slate-500">
            <li>10+ Vials: 15% Off</li>
            <li>50+ Vials: 25% Off</li>
        </ul>
        Contact <strong>wholesale@precisionpeptides.com</strong> for bulk manifests.`;
    }

    // Fallback / Greetings
    if (lower.includes('hello') || lower.includes('hi ') || lower === 'hi') {
        return `Greetings. I am ready to assist with your research inquiries. You can ask about product specs, shipping, or purity verification.`;
    }

    return `I am analyzing your query regarding "<em>${input}</em>".<br><br>
    My database does not have a direct match for this specific phrasing. Could you specify if you are looking for a CAS number, a shipping update, or a chemical specification?`;
}

// --- UI RENDERING ---

function addMessageToUI(sender, htmlContent) {
    const container = document.getElementById('chat-container');
    const div = document.createElement('div');
    
    const isUser = sender === 'user';
    div.className = `flex gap-4 message-bubble ${isUser ? 'flex-row-reverse' : ''}`;
    
    const avatar = isUser 
        ? `<div class="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-lg shadow-blue-600/30"><i class="fas fa-user"></i></div>`
        : `<div class="w-8 h-8 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-lg"><i class="fas fa-robot"></i></div>`;

    const name = isUser ? 'You' : CONFIG.botName;
    const bubbleStyle = isUser 
        ? 'bg-blue-600 text-white rounded-tr-none shadow-blue-600/20' 
        : 'bg-white border border-slate-200 text-slate-600 rounded-tl-none';

    // Timestamp
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    div.innerHTML = `
        ${avatar}
        <div class="max-w-2xl animate-fade-in-up">
            <div class="flex items-center gap-2 mb-1 ${isUser ? 'justify-end' : ''}">
                <span class="text-[10px] font-bold uppercase tracking-wider ${isUser ? 'text-slate-500' : 'text-slate-900'}">${name}</span>
                <span class="text-[10px] text-slate-300">${timeString}</span>
            </div>
            <div class="${bubbleStyle} p-4 rounded-2xl shadow-sm text-sm leading-relaxed">
                ${htmlContent}
            </div>
        </div>
    `;

    container.appendChild(div);
    scrollToBottom();
}

function showTypingIndicator() {
    const container = document.getElementById('chat-container');
    const div = document.createElement('div');
    div.id = 'typing-indicator';
    div.className = 'flex gap-4 message-bubble';
    div.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center text-white text-xs"><i class="fas fa-robot"></i></div>
        <div class="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1 h-[52px]">
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot" style="animation-delay: 0.2s"></div>
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot" style="animation-delay: 0.4s"></div>
        </div>
    `;
    container.appendChild(div);
    scrollToBottom();
}

function removeTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

function scrollToBottom() {
    const container = document.getElementById('chat-container');
    container.scrollTop = container.scrollHeight;
}

// Global exposure for the "Quick Reply" buttons in the sidebar
window.sendQuickReply = function(text) {
    const input = document.getElementById('user-input');
    input.value = text;
    // Programmatically trigger submit
    const event = new Event('submit');
    document.getElementById('chat-form').dispatchEvent(event);
};
