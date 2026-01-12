// MASTER INVENTORY CONTROL
// ----------------------------------------
// showInCatalog: true = For Sale | false = Ghost Item (Database Only)
// inStock: true = Buy Now | false = "Out of Stock" label
// ----------------------------------------

const masterInventory = [
    // --- ACTIVE BESTSELLERS ---
    { 
        id: "AM-101", 
        name: "Tirzepatide", 
        category: "Metabolic", 
        price: 69.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-tirzepatide.jpg", 
        desc: "Dual GIP/GLP-1 agonist.",
        code: "TZ", 
        mw: "4813.53", 
        cas: "2023788-19-2", 
        seq: "Y-{Aib}-EGTFTSDYSIYLDKQAA..." 
    },
    { 
        id: "AM-102", 
        name: "Semaglutide", 
        category: "Metabolic", 
        price: 85.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-semaglutide.jpg", 
        desc: "GLP-1 Analogue.",
        code: "SM", 
        mw: "4113.58", 
        cas: "910463-68-2", 
        seq: "H-{Aib}-EGTFTSDVSSYLEGQAA..." 
    },
    { 
        id: "AM-103", 
        name: "Retatrutide", 
        category: "Metabolic", 
        price: 115.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-retatrutide.jpg", 
        desc: "Triple agonist (GLP-1/GIP/GCGR).",
        code: "RT", 
        mw: "4731.33", 
        cas: "2381089-83-2", 
        seq: "Y-{Aib}-QGTFTSDYSKYLDE..." 
    },
    { 
        id: "AM-104", 
        name: "BPC-157", 
        category: "Regenerative", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-bpc157.jpg", 
        desc: "Stable Arginine Salt.",
        code: "BP", 
        mw: "1419.50", 
        cas: "137525-51-0", 
        seq: "Gly-Glu-Pro-Pro-Pro-Gly..." 
    },
    { 
        id: "AM-105", 
        name: "TB-500", 
        category: "Regenerative", 
        price: 55.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-tb500.jpg", 
        desc: "Thymosin Beta-4 synthetic.",
        code: "TB", 
        mw: "4963.50", 
        cas: "77591-33-4", 
        seq: "Ac-Ser-Asp-Lys-Pro-Asp..." 
    },
    
    // --- GHOST ITEMS (Database Only) ---
    // These will appear in the Molecular Library but NOT in the store.
    { 
        id: "AM-G01", 
        name: "Dihexa", 
        category: "Nootropic", 
        price: 0, 
        inStock: false, 
        showInCatalog: false, 
        img: "placeholder.jpg", 
        desc: "Neurogenic compound.",
        code: "DH", 
        mw: "509.29", 
        cas: "1401708-83-5", 
        seq: "N-hexanoic-Tyr-Ile-(6)AHx..." 
    },
    { 
        id: "AM-G02", 
        name: "Sermorelin", 
        category: "Metabolic", 
        price: 0, 
        inStock: false, 
        showInCatalog: false, 
        img: "placeholder.jpg", 
        desc: "GHRH Analogue 1-29.",
        code: "SR", 
        mw: "3357.88", 
        cas: "86168-78-7", 
        seq: "YADAIFTNSYRKVLGQLSARK..." 
    },
    { 
        id: "AM-G03", 
        name: "Oxytocin", 
        category: "Hormonal", 
        price: 0, 
        inStock: false, 
        showInCatalog: false, 
        img: "placeholder.jpg", 
        desc: "Neuropeptide.",
        code: "OX", 
        mw: "1007.19", 
        cas: "50-56-6", 
        seq: "Cys-Tyr-Ile-Gln-Asn-Cys..." 
    }
    // ... You can add as many Ghost Items here as you want
];
