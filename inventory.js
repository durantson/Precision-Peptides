// AMINTEX LABS - GLOBAL INVENTORY CONTROL SYSTEM
// =============================================================================
// This file controls the data for the entire website.
// - showInCatalog: true = Visible in store | false = Hidden (Ghost Inventory)
// - inStock: true = "Add to Cart" | false = "Out of Stock" / "Reference Only"
// =============================================================================

const masterInventory = [

    // =========================================================================
    // SECTION 1: ACTIVE COMMERCIAL STOCK (Currently For Sale)
    // =========================================================================
    
    { 
        id: "AM-101", 
        name: "Tirzepatide", 
        category: "Metabolic", 
        price: 69.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-tirzepatide.jpg", 
        desc: "A synthetic peptide engineered as a dual GIP/GLP-1 receptor agonist. Investigated for its synergistic effects on glucose homeostasis and lipolysis.", 
        code: "TZ", 
        mw: "4813.53", 
        cas: "2023788-19-2", 
        seq: "Y-{Aib}-EGTFTSDYSIYLDKQAA-EFVNWLLAGGPSSGAPPPS" 
    },
    { 
        id: "AM-102", 
        name: "Semaglutide", 
        category: "Metabolic", 
        price: 85.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-semaglutide.jpg", 
        desc: "A long-acting glucagon-like peptide-1 (GLP-1) analogue. Research suggests it promotes insulin secretion and inhibits glucagon release.", 
        code: "SM", 
        mw: "4113.58", 
        cas: "910463-68-2", 
        seq: "H-{Aib}-EGTFTSDVSSYLEGQAA-K(PEG2-PEG2-GammaGlu-C18 Diacid)-EFIAWLVRGRG" 
    },
    { 
        id: "AM-103", 
        name: "Retatrutide", 
        category: "Metabolic", 
        price: 115.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-retatrutide.jpg", 
        desc: "Next-generation triple agonist targeting GLP-1, GIP, and Glucagon (GCGR) receptors for comprehensive metabolic modulation.", 
        code: "RT", 
        mw: "4731.33", 
        cas: "2381089-83-2", 
        seq: "Y-{Aib}-QGTFTSDYSKYLDE-K(C20 diacid-gammaGlu-(AEEA)2)-RAK-E-F-V-Q-W-L-L-D-H-G-P-S-S-G-A-P-P-P-S-NH2" 
    },
    { 
        id: "AM-104", 
        name: "BPC-157", 
        category: "Regenerative", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-bpc157.jpg", 
        desc: "Stable Arginine Salt form of Body Protection Compound 157. Studied for its angiogenic and tendon-healing properties.", 
        code: "BP", 
        mw: "1419.50", 
        cas: "137525-51-0", 
        seq: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val" 
    },
    { 
        id: "AM-105", 
        name: "TB-500", 
        category: "Regenerative", 
        price: 55.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-tb500.jpg", 
        desc: "Synthetic fraction of Thymosin Beta-4. Research indicates utility in actin sequestration and cellular migration/repair.", 
        code: "TB", 
        mw: "4963.50", 
        cas: "77591-33-4", 
        seq: "Ac-Ser-Asp-Lys-Pro-Asp-Met-Ala-E-I-E-K-F-D-K-S-K-L-K-K-T-E-T-Q-E-K-N-P-L-P-S-K-E-T-I-E-Q-E-K-Q-A-G-E-S" 
    },
    { 
        id: "AM-106", 
        name: "GHK-Cu", 
        category: "Regenerative", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-ghkcu.jpg", 
        desc: "Tripeptide-Copper complex. Widely studied for its ability to stimulate collagen synthesis and downregulate inflammation.", 
        code: "GC", 
        mw: "340.38", 
        cas: "49557-75-7", 
        seq: "Gly-His-Lys (Copper Complex)" 
    },
    { 
        id: "AM-107", 
        name: "Epitalon", 
        category: "Longevity", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-epitalon.jpg", 
        desc: "Synthetic tetrapeptide bioregulator. Research suggests it may induce telomerase activity and telomere elongation.", 
        code: "EP", 
        mw: "390.35", 
        cas: "307297-39-8", 
        seq: "Ala-Glu-Asp-Gly" 
    },
    { 
        id: "AM-108", 
        name: "NAD+", 
        category: "Longevity", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-nad.jpg", 
        desc: "Nicotinamide Adenine Dinucleotide (Oxidized). A critical coenzyme found in all living cells, essential for mitochondrial function.", 
        code: "ND", 
        mw: "663.43", 
        cas: "53-84-9", 
        seq: "C21H27N7O14P2 (Coenzyme)" 
    },
    { 
        id: "AM-109", 
        name: "Tesamorelin", 
        category: "Metabolic", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-tesamorelin.jpg", 
        desc: "Stabilized GHRH analogue. Induces the release of endogenous growth hormone with a specific potency in reducing visceral adipose tissue.", 
        code: "TM", 
        mw: "5135.90", 
        cas: "218949-48-5", 
        seq: "Trans-3-hexenoyl-YADAIFTNSYRKVLGQLSARKLLQDIMSRQQGESNQERGARARL-NH2" 
    },
    { 
        id: "AM-110", 
        name: "Ipamorelin", 
        category: "Metabolic", 
        price: 35.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-ipamorelin.jpg", 
        desc: "A selective GH-Secretagogue. Known for high specificity to the ghrelin receptor with minimal impact on cortisol or prolactin.", 
        code: "IP", 
        mw: "711.85", 
        cas: "170851-70-4", 
        seq: "Aib-His-D-2-Nal-D-Phe-Lys-NH2" 
    },
    { 
        id: "AM-111", 
        name: "CJC-1295", 
        category: "Metabolic", 
        price: 35.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-cjc1295.jpg", 
        desc: "Mod GRF 1-29 (No DAC). A tetra-substituted analogue of GHRH 1-29 with improved metabolic stability.", 
        code: "CJ", 
        mw: "3367.97", 
        cas: "863288-34-0", 
        seq: "Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2" 
    },
    { 
        id: "AM-112", 
        name: "MOTS-c", 
        category: "Metabolic", 
        price: 55.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-motsc.jpg", 
        desc: "Mitochondrial-Derived Peptide. Acts on the folate cycle and has been shown to regulate insulin sensitivity and metabolic homeostasis.", 
        code: "MC", 
        mw: "2174.60", 
        cas: "1627580-64-6", 
        seq: "Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg" 
    },
    { 
        id: "AM-113", 
        name: "Semax", 
        category: "Nootropic", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-semax.jpg", 
        desc: "A heptapeptide synthetic analogue of ACTH(4-10). Studied for its neuroprotective and cognitive-enhancing properties.", 
        code: "SX", 
        mw: "813.90", 
        cas: "80714-61-0", 
        seq: "Met-Glu-His-Phe-Pro-Gly-Pro" 
    },
    { 
        id: "AM-114", 
        name: "Selank", 
        category: "Nootropic", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-selank.jpg", 
        desc: "Synthetic analogue of the immunomodulatory peptide Tuftsin. Research focuses on its anxiolytic and nootropic effects.", 
        code: "SL", 
        mw: "751.90", 
        cas: "129954-34-3", 
        seq: "Thr-Lys-Pro-Arg-Pro-Gly-Pro" 
    },
    { 
        id: "AM-115", 
        name: "AOD-9604", 
        category: "Metabolic", 
        price: 45.00, 
        inStock: true, 
        showInCatalog: true, 
        img: "vial-aod9604.jpg", 
        desc: "Modified form of amino acids 177-191 of the GH polypeptide. Specifically isolated for its lipolytic properties without hyperglycemic effects.", 
        code: "AD", 
        mw: "1815.90", 
        cas: "221231-10-3", 
        seq: "Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gln-Ser-Cys-Gly-Phe" 
    },

    // =========================================================================
    // SECTION 2: GHOST INVENTORY (Database Only - Hidden from Store)
    // =========================================================================
    // To activate these: Change showInCatalog to true and inStock to true.
    
    { 
        id: "AM-G01", name: "Dihexa", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Oligopeptide angiotensin IV analog. Research suggests potent neurogenic activity.", 
        code: "DH", mw: "509.29", cas: "1401708-83-5", seq: "N-hexanoic-Tyr-Ile-(6)AHx-NH2" 
    },
    { 
        id: "AM-G02", name: "Sermorelin", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "GHRH 1-29. A biological active analogue of growth hormone releasing hormone.", 
        code: "SR", mw: "3357.88", cas: "86168-78-7", seq: "YADAIFTNSYRKVLGQLSARKLLQDIMSR-NH2" 
    },
    { 
        id: "AM-G03", name: "Hexarelin", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Hexapeptide GHRP. Known for strong GH release and potential cardioprotective effects.", 
        code: "HX", mw: "887.04", cas: "140703-51-1", seq: "His-D-2-Me-Trp-Ala-Trp-D-Phe-Lys-NH2" 
    },
    { 
        id: "AM-G04", name: "GHRP-6", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Growth Hormone Releasing Peptide-6. A secretagogue that stimulates the release of growth hormone.", 
        code: "G6", mw: "873.01", cas: "87616-84-0", seq: "His-D-Trp-Ala-Trp-D-Phe-Lys-NH2" 
    },
    { 
        id: "AM-G05", name: "GHRP-2", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Pralmorelin. A synthetic ghrelin agonist with potent growth hormone secreting activity.", 
        code: "G2", mw: "817.90", cas: "158861-67-7", seq: "D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH2" 
    },
    { 
        id: "AM-G06", name: "Thymalin", category: "Immune", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Polypeptide complex extracted from the thymus. Studied for immunocorrective properties.", 
        code: "TL", mw: "859.10", cas: "63958-90-7", seq: "Pyr-L-Ala-L-Glu-L-Asp-Gly-OH" 
    },
    { 
        id: "AM-G07", name: "Kisspeptin-10", category: "Hormonal", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "N-terminal fragment of Metastin. Stimulates GnRH release.", 
        code: "KP", mw: "1302.45", cas: "374675-21-5", seq: "Y-N-W-N-S-F-G-L-R-F-NH2" 
    },
    { 
        id: "AM-G08", name: "Oxytocin", category: "Hormonal", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Neuropeptide and peptide hormone. Plays a role in social bonding and reproduction.", 
        code: "OX", mw: "1007.19", cas: "50-56-6", seq: "Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH2" 
    },
    { 
        id: "AM-G09", name: "Argireline", category: "Cosmetic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Acetyl Hexapeptide-3. A synthetic anti-wrinkle cosmetic ingredient.", 
        code: "AR", mw: "888.99", cas: "616204-22-9", seq: "Ac-Glu-Glu-Met-Gln-Arg-Arg-NH2" 
    },
    { 
        id: "AM-G10", name: "Snap-8", category: "Cosmetic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Acetyl Octapeptide-3. An elongation of Argireline with enhanced activity.", 
        code: "S8", mw: "1075.16", cas: "868844-74-0", seq: "Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH2" 
    },
    { 
        id: "AM-G11", name: "ARA-290", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Cibinetide. An erythropoietin derivative designed to provide tissue protection without hematopoiesis.", 
        code: "A2", mw: "1257.30", cas: "1208243-50-8", seq: "Glp-Glu-Gln-Leu-Glu-Arg-Ala-Leu-Asn-Ser-Ser" 
    },
    { 
        id: "AM-G12", name: "5-Amino-1MQ", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Small molecule inhibitor of NNMT. Studied for adipose tissue reduction and muscle preservation.", 
        code: "5A", mw: "179.20", cas: "42464-96-0", seq: "Small Molecule (Non-peptide)" 
    },
    { 
        id: "AM-G13", name: "SS-31", category: "Mitochondrial", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Elamipretide. A mitochondrial-targeted antioxidant peptide.", 
        code: "SS", mw: "639.80", cas: "736999-31-1", seq: "D-Arg-Dmt-Lys-Phe-NH2" 
    },
    { 
        id: "AM-G14", name: "Pinealon", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Short peptide bioregulator. Research suggests it may correct circadian rhythms.", 
        code: "PN", mw: "301.30", cas: "N/A", seq: "Glu-Asp-Arg" 
    },
    { 
        id: "AM-G15", name: "Vesugen", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Khavinson peptide bioregulator focused on vascular health.", 
        code: "VS", mw: "329.40", cas: "N/A", seq: "Lys-Glu-Asp" 
    },
    { 
        id: "AM-G16", name: "Thymosin A1", category: "Immune", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Thymic peptide. A strong modulator of immune function and T-cell maturation.", 
        code: "TA", mw: "3108.32", cas: "62304-98-7", seq: "Ac-S-D-A-A-V-D-T-S-S-E-I-T-T-K-D-L-K-E-K-K-E-V-V-E-E-A-E-N" 
    },
    { 
        id: "AM-G17", name: "LL-37", category: "Immune", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Cathelicidin antimicrobial peptide. Part of the innate immune response.", 
        code: "LL", mw: "4493.30", cas: "154947-66-7", seq: "LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES" 
    },
    { 
        id: "AM-G18", name: "Melanotan 1", category: "Cosmetic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Afamelanotide. A synthetic analog of alpha-MSH, stimulating melanogenesis.", 
        code: "M1", mw: "1646.85", cas: "75921-69-6", seq: "Ac-Ser-Tyr-Ser-Nle-Glu-His-D-Phe-Arg-Trp-Gly-Lys-Pro-Val-NH2" 
    },
    { 
        id: "AM-G19", name: "PT-141", category: "Hormonal", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Bremelanotide. An active metabolite of Melanotan II, targeting MC3R and MC4R.", 
        code: "PT", mw: "1025.20", cas: "189691-06-3", seq: "Ac-Nle-c[Asp-His-D-Phe-Arg-Trp-Lys]-OH" 
    },
    { 
        id: "AM-G20", name: "DSIP", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Delta Sleep Inducing Peptide. Neuromodulator associated with slow-wave sleep.", 
        code: "DS", mw: "848.81", cas: "62568-57-4", seq: "Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu" 
    },
    { 
        id: "AM-G21", name: "IGF-1 LR3", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Long R3 IGF-1. A modified version of IGF-1 with an 83 amino acid chain and extended half-life.", 
        code: "IG", mw: "9111.00", cas: "946870-92-4", seq: "MFPAMPLSSLFVNGPRTLCELH... (83 AA)" 
    },
    { 
        id: "AM-G22", name: "MGF", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Mechano Growth Factor. A splice variant of IGF-1 sensitive to mechanical stimuli.", 
        code: "MF", mw: "2867.20", cas: "N/A", seq: "YQPPSTNKNTKSQRRKGSTFEEHK" 
    },
    { 
        id: "AM-G23", name: "PEG-MGF", category: "Regenerative", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Pegylated Mechano Growth Factor. PEGylation increases stability and half-life.", 
        code: "PM", mw: "3000+", cas: "N/A", seq: "Pegylated Isoform of MGF" 
    },
    { 
        id: "AM-G24", name: "HGH Frag 176-191", category: "Metabolic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Lipolytic Fragment. A modified form of amino acids 176-191 of the GH polypeptide.", 
        code: "HF", mw: "1815.90", cas: "221231-10-3", seq: "Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gln-Ser-Cys-Gly-Phe" 
    },
    { 
        id: "AM-G25", name: "Taltirelin", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "Thyrotropin-releasing hormone (TRH) analog. Investigated for ataxia and cognitive function.", 
        code: "TT", mw: "405.45", cas: "103300-74-9", seq: "Small Molecule (TRH Analog)" 
    },
    { 
        id: "AM-G26", name: "Noopept", category: "Nootropic", price: 0, inStock: false, showInCatalog: false, 
        img: "placeholder.jpg", desc: "N-phenylacetyl-L-prolylglycine ethyl ester. A synthetic dipeptide with nootropic properties.", 
        code: "NP", mw: "157.17", cas: "157115-85-0", seq: "Small Molecule (Dipeptide)" 
    }
];
