/**
 * PRECISION LABS - AI RESEARCH ASSISTANT (Dr. Alara)
 * version: 3.0.0 (Advanced Logic)
 */

document.addEventListener('DOMContentLoaded', () => {
    initChatSystem();
});

// --- CONFIGURATION ---
const CONFIG = {
    botName: "Dr. Alara",
    typingSpeed: 25, // ms per char
    minDelay: 800,   // minimum "thinking" time
};

// --- STATE MANAGEMENT ---
let sessionState = {
    hasGreeted: false,
    lastTopic: null,
    messageCount: 0
};

// --- INTELLIGENT KNOWLEDGE BASE ---
// The AI picks a RANDOM response from the array to sound natural.
const KNOWLEDGE_BASE = {
    
    // 1. GREETINGS
    greetings: {
        triggers: ['hello', 'hi', 'hey', 'greetings', 'start', 'good morning', 'good afternoon'],
        responses: [
            "Greetings. I am Dr. Alara. How can I assist with your research protocols today?",
            "Hello. I am ready to access the Precision Peptides database. What requires verification?",
            "System online. Please state your inquiry regarding our reagent catalog.",
            "Welcome back to the portal. I am standing by for your query."
        ]
    },

    // 2. SHIPPING & LOGISTICS
    shipping: {
        triggers: ['ship', 'track', 'delivery', 'arrive', 'long', 'time', 'fedex', 'ups', 'where is'],
        responses: [
            "We utilize <strong>FedEx Priority Overnight</strong> for domestic reagents. Orders placed before 14:00 EST dispatch the same day.",
            "Logistics data indicates a 24-48 hour transit time for most US locations. We use insulated cold-chain packaging.",
            "Tracking numbers are automatically generated upon label creation. You should receive yours via email by 5:00 PM EST.",
            "We ship strictly via Priority Air to maintain peptide stability. Do you have a specific Order ID you wish to trace?"
        ]
    },

    // 3. STORAGE & HANDLING
    storage: {
        triggers: ['store', 'keep', 'fridge', 'freezer', 'temperature', 'shelf life', 'expire', 'stable'],
        responses: [
            "For long-term preservation, all lyophilized reagents should be stored at <strong>-20°C</strong> (Freezer).",
            "Once reconstituted with bacteriostatic water, the solution must be refrigerated at 4°C and used within 30 days.",
            "Lyophilized powder is stable at room temperature for up to 8 weeks, but we recommend immediate cold storage upon receipt.",
            "Avoid repeated freeze-thaw cycles. We recommend aliquoting your solution if you do not plan to use the full vial immediately."
        ]
    },

    // 4. PURITY & TESTING
    purity: {
        triggers: ['purity', 'test', 'hplc', 'coa', 'lab', 'janoshik', 'mz', 'quality', 'verified'],
        responses: [
            "Our purity standard is strict: <strong>&ge;99.0%</strong>. Any batch testing lower is rejected.",
            "We verify every batch through Janoshik Analytics or MZ Biolabs. You can find the raw HPLC data on the 'Batch Verification' page.",
            "We test for both identity (Mass Spec) and purity (HPLC). We do not sell unverified raw powder.",
            "Transparency is key. If you have a specific Batch ID, I can pull the chromatogram for you immediately."
        ]
    },

    // 5. PAYMENT
    payment: {
        triggers: ['pay', 'card', 'credit', 'bitcoin', 'crypto', 'payment', 'money', 'cost'],
        responses: [
            "We accept all major credit cards (Visa, Mastercard, Amex) via a secure, 256-bit encrypted gateway.",
            "Institutional clients may request net-30 terms. For individual researchers, we accept Credit Card and Bitcoin.",
            "All transactions are discreetly billed. We do not store payment data on our servers."
        ]
    },

    // 6. COMPLIANCE (Hard Guardrail)
    compliance: {
        triggers: ['human', 'inject', 'dose', 'dosage', 'body', 'muscle', 'fat loss', 'take', 'consumption', 'oral'],
        responses: [
            `<div class="border-l-4 border-red-500 pl-4 py-2 bg-red-50 text-red-900">
                <strong><i class="fas fa-exclamation-triangle"></i> Compliance Alert</strong><br>
                I must remind you that all Precision Peptides reagents are for <strong>in-vitro laboratory research only</strong>. 
                I cannot provide instructions for human administration or therapeutic dosage.
            </div>`
        ]
    },

    // 7. PRODUCT SPECIFICS
    products: {
        'tirzepatide': "Tirzepatide is a dual GIP/GLP-1 agonist. We stock it in 5mg, 10mg, and 15mg aliquots.",
        'semaglutide': "Semaglutide is our most popular GLP-1 analogue. It features a C18 fatty acid chain for extended research half-life.",
        'bpc': "BPC-157 is available in the stable Arginine Salt form, which is more resistant to pH variations than the Acetate form.",
        'retatrutide': "Retatrutide is the triple agonist (GCGR/GIP/GLP-1). It is currently the most potent metabolic agent in our catalog.",
        'tesamorelin': "Tesamorelin is a GHRH analogue. Note that it is highly fragile once reconstituted and should be handled gently."
    }
};

const FALLBACKS = [
    "I am analyzing your query. Could you rephrase that using specific chemical or logistical terminology?",
    "I do not have a protocol for that specific inquiry. Are you asking about shipping, purity, or a specific compound?",
    "My database is limited to technical specifications and logistics. Please clarify your request.",
    "I am unable to parse that input. Would you like to open a ticket with a human specialist?"
];

// --- SYSTEM LOGIC ---

function initChatSystem() {
    const form = document.getElementById('chat-form');
    if (!form) return;

    // Greeting on load (only once)
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
    // 1. Add User Message
    addMessageToUI('user', text);
    sessionState.messageCount++;

    // 2. Show Typing
    showTypingIndicator();

    // 3. Think & Respond
    const responseData = analyzeInput(text);
    
    // Calculated delay based on response length to feel "human"
    const delay = Math.max(CONFIG.minDelay, (responseData.length * CONFIG.typingSpeed) / 4);

    setTimeout(() => {
        removeTypingIndicator();
        addMessageToUI('bot', responseData);
    }, delay);
}

function analyzeInput(input) {
    const lower = input.toLowerCase();

    // 1. PRODUCT SPECIFIC CHECK (Priority)
    for (const [key, value] of Object.entries(KNOWLEDGE_BASE.products)) {
        if (lower.includes(key)) {
            return `<strong>Reagent Identified:</strong><br>${value}<br><br>Would you like to view the COA for this compound?`;
        }
    }

    // 2. CATEGORY SCANNING
    // We shuffle the response array to ensure variety
    if (matchTrigger(lower, KNOWLEDGE_BASE.compliance.triggers)) return getRandom(KNOWLEDGE_BASE.compliance.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.shipping.triggers)) return getRandom(KNOWLEDGE_BASE.shipping.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.storage.triggers)) return getRandom(KNOWLEDGE_BASE.storage.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.purity.triggers)) return getRandom(KNOWLEDGE_BASE.purity.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.payment.triggers)) return getRandom(KNOWLEDGE_BASE.payment.responses);
    if (matchTrigger(lower, KNOWLEDGE_BASE.greetings.triggers)) {
        if (sessionState.messageCount > 1) return "We are already in an active session. Please state your inquiry.";
        return getRandom(KNOWLEDGE_BASE.greetings.responses);
    }

    // 3. FALLBACK
    return getRandom(FALLBACKS);
}

// Helper: Check if input contains any trigger word
function matchTrigger(input, triggers) {
    return triggers.some(trigger => input.includes(trigger));
}

// Helper: Get random item from array
function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// --- UI RENDERING (Identical to previous, ensures visual consistency) ---

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

// Global scope for Quick Reply buttons in the HTML
window.sendQuickReply = function(text) {
    const input = document.getElementById('user-input');
    input.value = text;
    document.getElementById('chat-form').dispatchEvent(new Event('submit'));
};
