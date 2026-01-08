/**
 * PRECISION LABS - AI RESEARCH ASSISTANT (Dr. Alara)
 * version: 4.0.0 (Expert Knowledge Base)
 */

document.addEventListener('DOMContentLoaded', () => {
    initChatSystem();
});

// --- CONFIGURATION ---
const CONFIG = {
    botName: "Dr. Alara",
    typingSpeed: 20, 
    minDelay: 600,   
};

// --- STATE MANAGEMENT ---
let sessionState = {
    hasGreeted: false,
    lastTopic: null,
    messageCount: 0
};

// --- INTELLIGENT KNOWLEDGE BASE ---
const KNOWLEDGE_BASE = {
    
    // 1. RECONSTITUTION (Mixing)
    reconstitution: {
        triggers: ['mix', 'water', 'bac', 'bacteriostatic', 'reconstitute', 'liquid', 'dilute', 'dilution', 'add', 'syringe', 'ratio', 'prep'],
        responses: [
            `<strong>Standard Reconstitution Protocol:</strong><br>
             1. Swab the vial stopper with 70% alcohol.<br>
             2. Inject 1ml, 2ml, or 3ml of <strong>Bacteriostatic Water</strong> slowly down the side of the glass.<br>
             3. Do not spray directly on the lyophilized cake.<br>
             4. Gently swirl (do not shake) until fully dissolved.`,
             
            `Most researchers prefer a concentration that makes math simple. For a <strong>5mg vial</strong>, adding <strong>2ml of water</strong> creates a concentration of <strong>2.5mg/ml</strong>.`,
            
            `Use <strong>Bacteriostatic Water</strong> (containing 0.9% Benzyl Alcohol) if you plan to store the vial after opening. Sterile water is only suitable for immediate, single-use applications as it inhibits bacterial growth for only a few hours.`
        ]
    },

    // 2. STORAGE (The Smart Logic)
    storage_powder: {
        triggers: ['store powder', 'store dry', 'unmixed', 'arrive', 'keep', 'shelf life', 'storage'],
        responses: [
            `<strong>Lyophilized (Dry) Storage:</strong><br>
             Store at <strong>-20°C (Freezer)</strong>. In this state, peptides are stable for 24+ months. At room temperature, they remain stable for approximately 8 weeks.`,
             
            `Keep vials away from direct light. UV radiation can degrade peptide bonds. If storing for >1 month, the freezer is mandatory.`
        ]
    },

    storage_liquid: {
        triggers: ['store mixed', 'store liquid', 'after mixing', 'reconstituted', 'fridge', 'freezer', 'frozen', 'refreeze'],
        responses: [
            `<strong>Reconstituted (Liquid) Storage:</strong><br>
             Once mixed, store at <strong>4°C (Refrigerator)</strong>. Do <strong>NOT</strong> refreeze, as ice crystal formation can shear the peptide structure.`,
             
            `Use reconstituted peptides within <strong>30 days</strong>. If the solution becomes cloudy or discolored, discard immediately.`
        ]
    },

    // 3. SHIPPING & LOGISTICS (US Only)
    shipping: {
        triggers: ['ship', 'track', 'delivery', 'arrive', 'fedex', 'ups', 'usps', 'time', 'long', 'where'],
        responses: [
            `<strong>Logistics Protocol:</strong><br>
             We ship exclusively via <strong>FedEx Priority</strong> from our US facility. Orders placed before 14:00 EST dispatch same-day. Transit time is typically 24-48 hours.`,
             
            `All parcels are shipped in temperature-controlled packaging containing phase-change gel packs. This protects the reagents from thermal spikes during transit.`,
            
            `Tracking numbers are automated. Check your email (and spam folder) after 5:00 PM EST on the day of your order.`
        ]
    },

    international: {
        triggers: ['canada', 'uk', 'australia', 'europe', 'asia', 'mexico', 'international', 'customs', 'overseas'],
        responses: [
            `<span class="text-red-600 font-bold"><i class="fas fa-ban"></i> Protocol Violation</span><br>
             Precision Peptides services <strong>United States domestic addresses only</strong>. We do not export international orders due to cold-chain stability risks.`
        ]
    },

    // 4. TROUBLESHOOTING
    troubleshooting: {
        triggers: ['warm', 'hot', 'melted', 'ice', 'cloudy', 'broken', 'damage', 'clear'],
        responses: [
            `<strong>Temperature Alert:</strong><br>
             If your ice pack arrived melted, do not panic. Lyophilized peptides are stable at room temperature for weeks. The ice is a precaution for extreme heat spikes only. Put the vial in the freezer upon receipt.`,
             
            `<strong>Solubility Check:</strong><br>
             If the solution is cloudy after mixing, let it sit in the fridge for 20 minutes. Some hydrophobic peptides (like Adipotide or high-concentration Tirzepatide) require time to dissolve fully. Do not use if particles remain after 1 hour.`
        ]
    },

    // 5. PRODUCT SPECIFIC KNOWLEDGE (The "Deep Brain")
    product_glp: {
        triggers: ['tirzepatide', 'semaglutide', 'retatrutide', 'liraglutide', 'weight', 'fat', 'loss', 'glp'],
        responses: [
            `<strong>Metabolic Agent Identified:</strong><br>
             These peptides (GLP-1/GIP agonists) act on incretin hormones. <br>
             &bull; <strong>Tirzepatide:</strong> Dual agonist (GIP/GLP-1).<br>
             &bull; <strong>Retatrutide:</strong> Triple agonist (GCGR/GIP/GLP-1).<br>
             &bull; <strong>Semaglutide:</strong> Selective GLP-1.<br>
             <i>Note: These require careful research protocol titration.</i>`,
             
            `Research indicates these compounds modulate glucose homeostasis. Store strictly at 4°C after reconstitution.`
        ]
    },

    product_healing: {
        triggers: ['bpc', '157', 'tb500', 'tb-500', 'thymosin', 'repair', 'heal', 'injury', 'kpv'],
        responses: [
            `<strong>Regenerative Agent Identified:</strong><br>
             &bull; <strong>BPC-157:</strong> Stable Arginine Salt (Gastric/Systemic).<br>
             &bull; <strong>TB-500:</strong> Actin sequestering (Cell migration).<br>
             Standard lab protocol often investigates these two in synergy.`,
             
            `BPC-157 is soluble in water/saline. It is highly stable. TB-500 is more sensitive to shaking/agitation.`
        ]
    },

    product_nootropic: {
        triggers: ['semax', 'selank', 'na-semax', 'na-selank', 'brain', 'focus', 'anxiety', 'amidate'],
        responses: [
            `<strong>Cognitive Agent Identified:</strong><br>
             Our "NA-Amidate" versions are modified with an N-Acetyl group and C-Terminal Amide. This enhances metabolic stability and blood-brain barrier permeability compared to the standard acetate forms.`
        ]
    },

    product_longevity: {
        triggers: ['epitalon', 'nad', 'foxo4', 'mots', 'motsc', 'aging', 'telomere'],
        responses: [
            `<strong>Longevity Agent Identified:</strong><br>
             &bull; <strong>Epitalon:</strong> Telomerase activator.<br>
             &bull; <strong>FOXO4-DRI:</strong> Senolytic (targets senescent cells).<br>
             &bull; <strong>MOTS-c:</strong> Mitochondrial-Derived Peptide.<br>
             These are strictly for cellular research.`
        ]
    },

    // 6. COMPLIANCE (Guardrail)
    compliance: {
        triggers: ['human', 'inject', 'dose', 'dosage', 'me', 'my', 'body', 'muscle', 'take', 'consumption', 'oral', 'subq', 'iu'],
        responses: [
            `<div class="border-l-4 border-red-500 pl-4 py-2 bg-red-50 text-red-900 text-xs">
                <strong><i class="fas fa-exclamation-triangle"></i> Compliance Restriction</strong><br>
                I am a laboratory assistant AI. I cannot provide instructions for <strong>human consumption, injection, or therapeutic dosage</strong>.<br><br>
                These reagents are for in-vitro / biological test subject research only.
            </div>`
        ]
    },

    // 7. PAYMENT
    payment: {
        triggers: ['pay', 'card', 'credit', 'bitcoin', 'crypto', 'money', 'cost', 'buy'],
        responses: [
            "We accept all major credit cards (Visa/Mastercard) and Bitcoin. All transactions are SSL-encrypted and billing is discreet."
        ]
    },

    // 8. GREETINGS
    greetings: {
        triggers: ['hello', 'hi', 'hey', 'start', 'morning'],
        responses: [
            "Greetings. Accessing Precision Peptides Database... Ready.",
            "Dr. Alara online. How can I assist with your synthesis or logistics today?",
            "Welcome to the portal. I have full access to our COA and Shipping protocols. Go ahead."
        ]
    }
};

const FALLBACKS = [
    "I am analyzing your input but cannot match it to a standard protocol. Are you asking about <strong>Reconstitution</strong>, <strong>Storage</strong>, or a specific <strong>Compound</strong>?",
    "My database covers: Stability, Mixing Ratios, Shipping Logistics, and Purity Data. Please refine your query.",
    "Query unclear. Please use standard laboratory terminology.",
    "I cannot process that request. If you need custom synthesis, please contact the lab director directly."
];

// --- SYSTEM LOGIC ---

function initChatSystem() {
    const form = document.getElementById('chat-form');
    if (!form) return;

    if (!sessionState.hasGreeted) {
        setTimeout(() => {
            addMessageToUI('bot', KNOWLEDGE_BASE.greetings.responses[0]);
            sessionState.hasGreeted = true;
        }, 1000);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('user-input');
        const text = input.value.trim();
        
        if (text) {
            processUserMessage(text);
            input.value = '';
        }
    });
}

function processUserMessage(text) {
    addMessageToUI('user', text);
    sessionState.messageCount++;
    showTypingIndicator();

    const responseData = analyzeInput(text);
    const delay = Math.max(CONFIG.minDelay, (responseData.length * CONFIG.typingSpeed) / 4);

    setTimeout(() => {
        removeTypingIndicator();
        addMessageToUI('bot', responseData);
    }, delay);
}

function analyzeInput(input) {
    const lower = input.toLowerCase();

    // Priority Check: Compliance
    if (matchTrigger(lower, KNOWLEDGE_BASE.compliance.triggers)) return getRandom(KNOWLEDGE_BASE.compliance.responses);

    // International Block
    if (matchTrigger(lower, KNOWLEDGE_BASE.international.triggers)) return getRandom(KNOWLEDGE_BASE.international.responses);

    // Specific Product Knowledge
    if (matchTrigger(lower, KNOWLEDGE_BASE.product_glp.triggers)) return getRandom(KNOWLEDGE_BASE.product_glp.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.product_healing.triggers)) return getRandom(KNOWLEDGE_BASE.product_healing.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.product_nootropic.triggers)) return getRandom(KNOWLEDGE_BASE.product_nootropic.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.product_longevity.triggers)) return getRandom(KNOWLEDGE_BASE.product_longevity.responses);

    // Protocol Knowledge
    // Note: We check for "mix" or "liquid" combined with "store" to differentiate states
    if (matchTrigger(lower, ['mix', 'reconstitut']) && matchTrigger(lower, ['store', 'keep'])) {
        return getRandom(KNOWLEDGE_BASE.storage_liquid.responses);
    }

    if (matchTrigger(lower, KNOWLEDGE_BASE.reconstitution.triggers)) return getRandom(KNOWLEDGE_BASE.reconstitution.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.storage_liquid.triggers)) return getRandom(KNOWLEDGE_BASE.storage_liquid.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.storage_powder.triggers)) return getRandom(KNOWLEDGE_BASE.storage_powder.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.troubleshooting.triggers)) return getRandom(KNOWLEDGE_BASE.troubleshooting.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.shipping.triggers)) return getRandom(KNOWLEDGE_BASE.shipping.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.payment.triggers)) return getRandom(KNOWLEDGE_BASE.payment.responses);
    
    // Greeting Check
    if (matchTrigger(lower, KNOWLEDGE_BASE.greetings.triggers)) {
        if (sessionState.messageCount > 1) return "System is already active. Please state your query.";
        return getRandom(KNOWLEDGE_BASE.greetings.responses);
    }

    // Fallback
    return getRandom(FALLBACKS);
}

function matchTrigger(input, triggers) {
    return triggers.some(trigger => input.includes(trigger));
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// --- UI RENDER FUNCTIONS ---
function addMessageToUI(sender, htmlContent) {
    const container = document.getElementById('chat-container');
    const div = document.createElement('div');
    const isUser = sender === 'user';
    
    div.className = `flex gap-4 message-bubble ${isUser ? 'flex-row-reverse' : ''}`;
    
    const avatar = isUser 
        ? `<div class="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-lg"><i class="fas fa-user"></i></div>`
        : `<div class="w-8 h-8 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-lg"><i class="fas fa-robot"></i></div>`;

    const bubbleStyle = isUser 
        ? 'bg-blue-600 text-white rounded-tr-none shadow-blue-600/20' 
        : 'bg-white border border-slate-200 text-slate-600 rounded-tl-none';

    div.innerHTML = `
        ${avatar}
        <div class="max-w-2xl animate-fade-in-up">
            <div class="flex items-center gap-2 mb-1 ${isUser ? 'justify-end' : ''}">
                <span class="text-[10px] font-bold uppercase tracking-wider ${isUser ? 'text-slate-500' : 'text-slate-900'}">${isUser ? 'You' : CONFIG.botName}</span>
                <span class="text-[10px] text-slate-300">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
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

window.sendQuickReply = function(text) {
    const input = document.getElementById('user-input');
    input.value = text;
    document.getElementById('chat-form').dispatchEvent(new Event('submit'));
};
