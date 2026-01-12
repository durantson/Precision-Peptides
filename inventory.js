// MASTER INVENTORY CONTROL
// ----------------------------------------
// showInCatalog: true = For Sale (Appears in Store)
// inStock: true = Buy Now | false = "Out of Stock"
// ----------------------------------------

const masterInventory = [
    // --- ACTIVE STOCK (FOR SALE) ---
    { id: "AM-101", name: "Tirzepatide", category: "Metabolic", price: 69.00, inStock: true, showInCatalog: true, img: "vial-tirzepatide.jpg", desc: "Dual GIP/GLP-1 agonist.", code: "TZ", mw: "4813.53", cas: "2023788-19-2", seq: "Y-{Aib}-EGTFTSDYSIYLDKQAA..." },
    { id: "AM-102", name: "Semaglutide", category: "Metabolic", price: 85.00, inStock: true, showInCatalog: true, img: "vial-semaglutide.jpg", desc: "GLP-1 Analogue.", code: "SM", mw: "4113.58", cas: "910463-68-2", seq: "H-{Aib}-EGTFTSDVSSYLEGQAA..." },
    { id: "AM-103", name: "Retatrutide", category: "Metabolic", price: 115.00, inStock: true, showInCatalog: true, img: "vial-retatrutide.jpg", desc: "Triple agonist (GLP-1/GIP/GCGR).", code: "RT", mw: "4731.33", cas: "2381089-83-2", seq: "Y-{Aib}-QGTFTSDYSKYLDE..." },
    { id: "AM-104", name: "BPC-157", category: "Regenerative", price: 45.00, inStock: true, showInCatalog: true, img: "vial-bpc157.jpg", desc: "Stable Arginine Salt.", code: "BP", mw: "1419.50", cas: "137525-51-0", seq: "Gly-Glu-Pro-Pro-Pro-Gly..." },
    { id: "AM-105", name: "TB-500", category: "Regenerative", price: 55.00, inStock: true, showInCatalog: true, img: "vial-tb500.jpg", desc: "Thymosin Beta-4 synthetic.", code: "TB", mw: "4963.50", cas: "77591-33-4", seq: "Ac-Ser-Asp-Lys-Pro-Asp..." },
    { id: "AM-106", name: "GHK-Cu", category: "Regenerative", price: 45.00, inStock: true, showInCatalog: true, img: "vial-ghkcu.jpg", desc: "Copper peptide complex.", code: "GC", mw: "340.38", cas: "49557-75-7", seq: "Gly-His-Lys (Copper)" },
    { id: "AM-107", name: "Epitalon", category: "Longevity", price: 45.00, inStock: true, showInCatalog: true, img: "vial-epitalon.jpg", desc: "Telomerase activator.", code: "EP", mw: "390.35", cas: "307297-39-8", seq: "Ala-Glu-Asp-Gly" },
    { id: "AM-108", name: "NAD+", category: "Longevity", price: 45.00, inStock: true, showInCatalog: true, img: "vial-nad.jpg", desc: "Oxidized Coenzyme.", code: "ND", mw: "663.43", cas: "53-84-9", seq: "Nicotinamide Adenine Dinuc..." },
    { id: "AM-109", name: "Tesamorelin", category: "Metabolic", price: 45.00, inStock: true, showInCatalog: true, img: "vial-tesamorelin.jpg", desc: "GHRH Analogue.", code: "TM", mw: "5135.90", cas: "218949-48-5", seq: "Trans-3-hexenoyl-GHRH..." },
    { id: "AM-110", name: "Ipamorelin", category: "Metabolic", price: 35.00, inStock: true, showInCatalog: true, img: "vial-ipamorelin.jpg", desc: "Selective GH Secretagogue.", code: "IP", mw: "711.85", cas: "170851-70-4", seq: "Aib-His-D-2-Nal-D-Phe-Lys" },
    { id: "AM-111", name: "CJC-1295", category: "Metabolic", price: 35.00, inStock: true, showInCatalog: true, img: "vial-cjc1295.jpg", desc: "Mod GRF 1-29 No DAC.", code: "CJ", mw: "3367.97", cas: "863288-34-0", seq: "Tyr-D-Ala-Asp-Ala-Ile..." },
    { id: "AM-112", name: "MOTS-c", category: "Metabolic", price: 55.00, inStock: true, showInCatalog: true, img: "vial-motsc.jpg", desc: "Mitochondrial-Derived Peptide.", code: "MC", mw: "2174.60", cas: "1627580-64-6", seq: "Met-Arg-Trp-Gln-Glu-Met..." },
    { id: "AM-113", name: "Semax", category: "Nootropic", price: 45.00, inStock: true, showInCatalog: true, img: "vial-semax.jpg", desc: "ACTH(4-10) Analogue.", code: "SX", mw: "813.90", cas: "80714-61-0", seq: "Met-Glu-His-Phe-Pro-Gly-Pro" },
    { id: "AM-114", name: "Selank", category: "Nootropic", price: 45.00, inStock: true, showInCatalog: true, img: "vial-selank.jpg", desc: "Tuftsin analogue.", code: "SL", mw: "751.90", cas: "129954-34-3", seq: "Thr-Lys-Pro-Arg-Pro-Gly-Pro" },
    { id: "AM-115", name: "AOD-9604", category: "Metabolic", price: 45.00, inStock: true, showInCatalog: true, img: "vial-aod9604.jpg", desc: "Lipolytic fragment 177-191.", code: "AD", mw: "1815.90", cas: "221231-10-3", seq: "Tyr-Leu-Arg-Ile-Val..." },

    // --- GHOST INVENTORY (DATABASE ONLY) ---
    // These appear in the Molecular Library to show authority, but are NOT for sale.
    { id: "AM-G01", name: "Dihexa", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Neurogenic compound.", code: "DH", mw: "509.29", cas: "1401708-83-5", seq: "N-hexanoic-Tyr-Ile-(6)AHx..." },
    { id: "AM-G02", name: "Sermorelin", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "GHRH Analogue 1-29.", code: "SR", mw: "3357.88", cas: "86168-78-7", seq: "YADAIFTNSYRKVLGQLSARK..." },
    { id: "AM-G03", name: "Hexarelin", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "GHRP.", code: "HX", mw: "887.04", cas: "140703-51-1", seq: "His-D-2-Me-Trp-Ala-Trp..." },
    { id: "AM-G04", name: "GHRP-6", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "GHRP.", code: "G6", mw: "873.01", cas: "87616-84-0", seq: "His-D-Trp-Ala-Trp-D-Phe..." },
    { id: "AM-G05", name: "GHRP-2", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "GHRP.", code: "G2", mw: "817.90", cas: "158861-67-7", seq: "D-Ala-D-2-Nal-Ala-Trp..." },
    { id: "AM-G06", name: "Thymalin", category: "Immune", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Bioregulator.", code: "TL", mw: "859.10", cas: "63958-90-7", seq: "Pyr-L-Ala-L-Glu-L-Asp..." },
    { id: "AM-G07", name: "Kisspeptin-10", category: "Hormonal", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Metastin derivative.", code: "KP", mw: "1302.45", cas: "374675-21-5", seq: "Y-N-W-N-S-F-G-L-R-F-NH2" },
    { id: "AM-G08", name: "Oxytocin", category: "Hormonal", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Neuropeptide.", code: "OX", mw: "1007.19", cas: "50-56-6", seq: "Cys-Tyr-Ile-Gln-Asn-Cys..." },
    { id: "AM-G09", name: "Argireline", category: "Cosmetic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Acetyl Hexapeptide-3.", code: "AR", mw: "888.99", cas: "616204-22-9", seq: "Ac-Glu-Glu-Met-Gln-Arg..." },
    { id: "AM-G10", name: "Snap-8", category: "Cosmetic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Octapeptide.", code: "S8", mw: "1075.16", cas: "868844-74-0", seq: "Ac-Glu-Glu-Met-Gln-Arg..." },
    { id: "AM-G11", name: "ARA-290", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Cibinetide.", code: "A2", mw: "1257.30", cas: "1208243-50-8", seq: "Glp-Glu-Gln-Leu-Glu..." },
    { id: "AM-G12", name: "5-Amino-1MQ", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "NNMT inhibitor.", code: "5A", mw: "179.20", cas: "42464-96-0", seq: "Small Molecule" },
    { id: "AM-G13", name: "SS-31", category: "Mitochondrial", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Elamipretide.", code: "SS", mw: "639.80", cas: "736999-31-1", seq: "D-Arg-Dmt-Lys-Phe-NH2" },
    { id: "AM-G14", name: "Pinealon", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Bioregulator.", code: "PN", mw: "301.30", cas: "N/A", seq: "Glu-Asp-Arg" },
    { id: "AM-G15", name: "Vesugen", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Bioregulator.", code: "VS", mw: "329.40", cas: "N/A", seq: "Lys-Glu-Asp" },
    { id: "AM-G16", name: "Thymosin A1", category: "Immune", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Immune modulator.", code: "TA", mw: "3108.32", cas: "62304-98-7", seq: "Ac-S-D-A-A-V-D-T-S-S-E..." },
    { id: "AM-G17", name: "LL-37", category: "Immune", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Cathelicidin.", code: "LL", mw: "4493.30", cas: "154947-66-7", seq: "LLGDFFRKSKEKIGKEFKR..." },
    { id: "AM-G18", name: "Melanotan 1", category: "Cosmetic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Afamelanotide.", code: "M1", mw: "1646.85", cas: "75921-69-6", seq: "Ac-Ser-Tyr-Ser-Nle-Glu..." },
    { id: "AM-G19", name: "PT-141", category: "Hormonal", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Bremelanotide.", code: "PT", mw: "1025.20", cas: "189691-06-3", seq: "Ac-Nle-c[Asp-His-D-Phe-Arg-Trp-Lys]" },
    { id: "AM-G20", name: "DSIP", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Delta Sleep Inducing.", code: "DS", mw: "848.81", cas: "62568-57-4", seq: "Trp-Ala-Gly-Gly-Asp-Ala..." },
    { id: "AM-G21", name: "IGF-1 LR3", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Long R3 IGF-1.", code: "IG", mw: "9111.00", cas: "946870-92-4", seq: "83 Amino Acid Chain" },
    { id: "AM-G22", name: "MGF", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Mechano Growth Factor.", code: "MF", mw: "2867.20", cas: "N/A", seq: "YQPPSTNKNTKSQRRKGST..." },
    { id: "AM-G23", name: "PEG-MGF", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Pegylated MGF.", code: "PM", mw: "3000+", cas: "N/A", seq: "Pegylated Isoform" },
    { id: "AM-G24", name: "HGH Frag 176-191", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Lipolytic Fragment.", code: "HF", mw: "1815.90", cas: "221231-10-3", seq: "Tyr-Leu-Arg-Ile-Val..." },
    { id: "AM-G25", name: "Taltirelin", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "TRH Analog.", code: "TT", mw: "405.45", cas: "103300-74-9", seq: "Small Molecule" },
    { id: "AM-G26", name: "Noopept", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, img: "placeholder.jpg", desc: "Cycloprolylglycine.", code: "NP", mw: "157.17", cas: "157115-85-0", seq: "Small Molecule" }
];
