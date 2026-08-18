const PAPER_METADATA_MAP = {
    "ACMG_2015.pdf":                      {"title": "ACMG/AMP Standards and Guidelines (Richards et al., 2015)",          "year": 2015, "doi": "http://www.nature.com/doifinder/10.1038/gim.2015.30"},
    "ACMG_cuantitativo_2018.pdf":         {"title": "Bayesian Framework Quantitative ACMG (Tavtigian et al., 2018)",      "year": 2018, "doi": "http://dx.doi.org/10.1038/gim.2017.210"},
    "BA1_2018.pdf":                        {"title": "ClinGen BA1 Allele Frequency Stand-Alone (Ghosh et al., 2018)",      "year": 2018, "doi": "https://doi.org/10.1002/humu.23642"},
    "BS1_2017.pdf":                        {"title": "ClinGen BS1 Allele Frequency Thresholds (Whiffin et al., 2017)",    "year": 2017, "doi": "https://linkinghub.elsevier.com/retrieve/pii/S1098360021013678"},
    "BayesQuantifyPaper_2025.pdf":         {"title": "BayesQuantify — Bayesian Quantification Framework (2025)",          "year": 2025, "doi": "https://github.com/liusihan/BayesQuantify"},
    "BayesQuantify_2025.pdf":             {"title": "BayesQuantify Tool Summary (2025)",                                  "year": 2025, "doi": "https://doi.org/10.1136/jmg-2025-110863"},
    "ClinGen_actualizaciones_pp1_2020.pdf":{"title": "ClinGen PP1/PP4 Cosegregation Updates (2020)",                     "year": 2020, "doi": "https://doi.org/10.1002/cphg.98"},
    "PM2_S_2020.pdf":                     {"title": "ClinGen SVI PM2_Supporting Specification (2020)",                    "year": 2020, "doi": "https://clinicalgenome.org/site/assets/files/5182/pm2_-_svi_recommendation_-_approved_sept2020.pdf"},
    "PM3_2019.pdf":                        {"title": "ClinGen PM3 Specification for Recessive Disorders (2019)",          "year": 2019, "doi": "https://clinicalgenome.org/site/assets/files/3717/svi_proposal_for_pm3_criterion_-_version_1.pdf"},
    "PP1-2016.pdf":                        {"title": "ClinGen PP1 Segregation Guidance (2016)",                            "year": 2016, "doi": "http://dx.doi.org/10.1016/j.ajhg.2016.04.003"},
    "PP1-PP4-2024.pdf":                   {"title": "ClinGen Cosegregation PP1 & Phenotype PP4 Recommendations (2024)",  "year": 2024, "doi": "https://doi.org/10.1016/j.ajhg.2023.11.009"},
    "PP3-BP4.pdf":                         {"title": "ClinGen In Silico Predictors PP3 & BP4 Guidance",                   "year": null, "doi": "https://doi.org/10.1016/j.ajhg.2022.10.013"},
    "PP3_2025.pdf":                        {"title": "ClinGen 2025 Computational Evidence PP3 Gradation",                 "year": 2025, "doi": "https://doi.org/10.1016/j.gim.2025.101402"},
    "PS2-PM6_2021.pdf":                   {"title": "ClinGen SVI De Novo Criteria PS2/PM6 Guidance (2021)",              "year": 2021, "doi": "https://clinicalgenome.org/site/assets/files/3461/svi_proposal_for_de_novo_criteria_v1_1.pdf"},
    "PS3_2019.pdf":                        {"title": "ClinGen Functional Evidence PS3/BS3 Framework (Brnich et al., 2019)","year": 2019, "doi": "https://doi.org/10.1186/s13073-019-0690-2"},
    "PS4-likelihood-calculator_2024.pdf": {"title": "ClinGen PS4 Case-Control Likelihood Calculator (2024)",             "year": 2024, "doi": "https://doi.org/10.1136/jmg-2024-110034"},
    "PVS1_2018.pdf":                      {"title": "ClinGen PVS1 Loss-of-Function Guidance (Abou Tayoun et al., 2018)", "year": 2018, "doi": "https://doi.org/10.1002/humu.23626"},
    "PVS1_splicing_2023.pdf":             {"title": "ClinGen SVI Splicing Recommendations PVS1 (2023)",                  "year": 2023, "doi": "https://doi.org/10.1016/j.ajhg.2023.06.002"},
};

const ACMG_SECTORS = [
    {
        id: 'effect',
        name: 'Efecto Molecular & In Silico',
        color: '#a78bfa',
        desc: 'Consecuencia molecular, variantes truncantes, indels inframe, dominios mutacionales y predicciones in silico',
        criteria: [
            {
                code: 'PVS1',
                title: 'Variante Nula / Loss of Function (LOF)',
                defaultStrength: 'Very Strong',
                defaultPts: 8,
                allowedStrengths: [
                    { label: 'Very Strong (+8p)', pts: 8, strength: 'Very Strong' },
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'Variante nula (nonsense, frameshift, splice ±1,2) en gen donde LOF es mecanismo establecido de enfermedad.',
                papers: [{ name: 'PVS1_2018.pdf', label: 'ClinGen PVS1 LOF Guidance (2018)' }]
            },
            {
                code: 'PS1',
                title: 'Mismo cambio aminoacídico patogénico (distinto codón)',
                defaultStrength: 'Strong',
                defaultPts: 4,
                allowedStrengths: [
                    { label: 'Very Strong (+8p)', pts: 8, strength: 'Very Strong' },
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' }
                ],
                type: 'pathogenic',
                desc: 'Mismo cambio de aminoácido que una variante patogénica previa comprobada.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'PM1',
                title: 'Hotspot mutacional o Dominio crítico',
                defaultStrength: 'Moderate',
                defaultPts: 2,
                allowedStrengths: [
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'Localizada en hotspot mutacional o dominio funcional crítico sin variación benigna.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'PM4',
                title: 'Indel inframe o pérdida de stop (stop-loss)',
                defaultStrength: 'Moderate',
                defaultPts: 2,
                allowedStrengths: [
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'Inserción o deleción inframe en región no repetitiva.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'PM5',
                title: 'Nuevo missense en misma posición',
                defaultStrength: 'Moderate',
                defaultPts: 2,
                allowedStrengths: [
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'Nuevo cambio missense observado en posición con otra variante patogénica (distinto AA).',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'PP2',
                title: 'Missense en gen sensible a missense',
                defaultStrength: 'Supporting',
                defaultPts: 1,
                allowedStrengths: [{ label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }],
                type: 'pathogenic',
                desc: 'Variante missense en gen donde las mutaciones missense son mecanismo común de patogenicidad.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'BP1',
                title: 'Missense en gen donde solo LoF es patogénico',
                defaultStrength: 'Supporting',
                defaultPts: -1,
                allowedStrengths: [{ label: 'Supporting (-1p)', pts: -1, strength: 'Supporting' }],
                type: 'benign',
                desc: 'Missense en un gen donde únicamente variantes truncantes LOF causan enfermedad.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'BP3',
                title: 'Indel inframe en región repetitiva',
                defaultStrength: 'Supporting',
                defaultPts: -1,
                allowedStrengths: [{ label: 'Supporting (-1p)', pts: -1, strength: 'Supporting' }],
                type: 'benign',
                desc: 'Indel inframe en región repetitiva no conservada.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'BP4',
                title: 'Predictores computacionales benignos (Concordantes)',
                defaultStrength: 'Supporting',
                defaultPts: -1,
                allowedStrengths: [
                    { label: 'Very Strong (-8p)', pts: -8, strength: 'Very Strong' },
                    { label: 'Strong (-4p)', pts: -4, strength: 'Strong' },
                    { label: 'Moderate (-2p)', pts: -2, strength: 'Moderate' },
                    { label: 'Supporting (-1p)', pts: -1, strength: 'Supporting' }
                ],
                type: 'benign',
                desc: 'Herramientas in silico predicen variante benigna sin alteración funcional.',
                papers: [{ name: 'PP3-BP4.pdf', label: 'ClinGen In Silico Recommendations' }]
            },
            {
                code: 'BP7',
                title: 'Sinónima sin efecto predicho en splicing',
                defaultStrength: 'Supporting',
                defaultPts: -1,
                allowedStrengths: [{ label: 'Supporting (-1p)', pts: -1, strength: 'Supporting' }],
                type: 'benign',
                desc: 'Variante sinónima sin alteración de sitio de splicing predicho por SpliceAI.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            }
        ]
    },
    {
        id: 'functional',
        name: 'Estudios Funcionales',
        color: '#06b6d4',
        desc: 'Evaluación de ensayos funcionales experimentales in vitro e in vivo',
        criteria: [
            {
                code: 'PS3',
                title: 'Ensayo funcional con efecto dañino',
                defaultStrength: 'Strong',
                defaultPts: 4,
                allowedStrengths: [
                    { label: 'Very Strong (+8p)', pts: 8, strength: 'Very Strong' },
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'Ensayos funcionales rigurosos muestran pérdida o alteración grave de función.',
                papers: [{ name: 'PS3_2019.pdf', label: 'ClinGen Functional Evidence Framework (2019)' }]
            },
            {
                code: 'BS3',
                title: 'Ensayo funcional con función normal (sin efecto dañino)',
                defaultStrength: 'Strong',
                defaultPts: -4,
                allowedStrengths: [
                    { label: 'Very Strong (-8p)', pts: -8, strength: 'Very Strong' },
                    { label: 'Strong (-4p)', pts: -4, strength: 'Strong' },
                    { label: 'Moderate (-2p)', pts: -2, strength: 'Moderate' },
                    { label: 'Supporting (-1p)', pts: -1, strength: 'Supporting' }
                ],
                type: 'benign',
                desc: 'Estudios funcionales bien validados muestran función proteica conservada.',
                papers: [{ name: 'PS3_2019.pdf', label: 'ClinGen Functional Evidence Framework (2019)' }]
            }
        ]
    },
    {
        id: 'frequency',
        name: 'Frecuencia Poblacional (gnomAD)',
        color: '#10b981',
        desc: 'Frecuencia en controles poblacionales gnomAD/TOPMed',
        criteria: [
            {
                code: 'PM2_Supporting',
                title: 'Ausente o frecuencia extremadamente baja en gnomAD',
                defaultStrength: 'Supporting',
                defaultPts: 1,
                allowedStrengths: [{ label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }],
                type: 'pathogenic',
                desc: 'Ausente o con MAF por debajo del umbral de la enfermedad.',
                papers: [{ name: 'PM2_S_2020.pdf', label: 'ClinGen PM2_Supporting (2020)' }]
            },
            {
                code: 'BS1',
                title: 'Frecuencia mayor a la esperada para la enfermedad',
                defaultStrength: 'Strong',
                defaultPts: -4,
                allowedStrengths: [{ label: 'Strong (-4p)', pts: -4, strength: 'Strong' }],
                type: 'benign',
                desc: 'Frecuencia alélica supera la frecuencia máxima esperada.',
                papers: [{ name: 'BS1_2017.pdf', label: 'ClinGen Allele Frequency Thresholds (2017)' }]
            },
            {
                code: 'BA1',
                title: 'Frecuencia Stand-Alone (> 5% en gnomAD)',
                defaultStrength: 'Stand-alone',
                defaultPts: -8,
                allowedStrengths: [{ label: 'Stand-Alone (-8p)', pts: -8, strength: 'Stand-alone' }],
                type: 'benign',
                desc: 'Frecuencia alélica > 5% en gnomAD (clasificación benigna automática).',
                papers: [{ name: 'BS1_2017.pdf', label: 'ClinGen Allele Frequency Thresholds (2017)' }]
            },
            {
                code: 'BS2',
                title: 'Observada en individuo sano para enfermedad dominante penetrante',
                defaultStrength: 'Strong',
                defaultPts: -4,
                allowedStrengths: [{ label: 'Strong (-4p)', pts: -4, strength: 'Strong' }],
                type: 'benign',
                desc: 'Observada en controles sanos en homocigosis/hemicigosis para enfermedad severa.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            }
        ]
    },
    {
        id: 'segregation',
        name: 'Segregación & Datos Clínicos',
        color: '#f59e0b',
        desc: 'Co-segregación familiar, fenotipo y fase en trans',
        criteria: [
            {
                code: 'PM3',
                title: 'Detectada en trans con variante patogénica (Recesivo)',
                defaultStrength: 'Moderate',
                defaultPts: 2,
                allowedStrengths: [
                    { label: 'Very Strong (+8p)', pts: 8, strength: 'Very Strong' },
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'En trans con variante patogénica en trastorno recesivo.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'PP1',
                title: 'Co-segregación con la enfermedad en la familia',
                defaultStrength: 'Supporting',
                defaultPts: 1,
                allowedStrengths: [
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'Co-segregación demostrada con la patología.',
                papers: [{ name: 'Sheets/clingen-cosegregacion-checklist-2024.pdf', label: 'ClinGen Cosegregation 2024' }]
            },
            {
                code: 'PP4',
                title: 'Fenotipo altamente específico y etiología única',
                defaultStrength: 'Supporting',
                defaultPts: 1,
                allowedStrengths: [
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'Fenotipo altamente específico y característico.',
                papers: [{ name: 'Sheets/clingen-cosegregacion-checklist-2024.pdf', label: 'ClinGen Cosegregation 2024' }]
            },
            {
                code: 'BS4',
                title: 'Falta de co-segregación familiar',
                defaultStrength: 'Strong',
                defaultPts: -4,
                allowedStrengths: [{ label: 'Strong (-4p)', pts: -4, strength: 'Strong' }],
                type: 'benign',
                desc: 'Falta de segregación en la familia (afectado sin variante o sano con variante).',
                papers: [{ name: 'Sheets/clingen-cosegregacion-checklist-2024.pdf', label: 'ClinGen Cosegregation 2024' }]
            },
            {
                code: 'BP2',
                title: 'En cis con variante patogénica o en trans en dominante',
                defaultStrength: 'Supporting',
                defaultPts: -1,
                allowedStrengths: [{ label: 'Supporting (-1p)', pts: -1, strength: 'Supporting' }],
                type: 'benign',
                desc: 'Observada en cis con variante patogénica o en trans en un sano.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'BP5',
                title: 'Otra variante alternativa explica el fenotipo',
                defaultStrength: 'Supporting',
                defaultPts: -1,
                allowedStrengths: [{ label: 'Supporting (-1p)', pts: -1, strength: 'Supporting' }],
                type: 'benign',
                desc: 'Existe variante causa-efecto alternativa comprobada.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            }
        ]
    },
    {
        id: 'denovo',
        name: 'Variantes De Novo',
        color: '#f43f5e',
        desc: 'Evaluación de variantes de novo',
        criteria: [
            {
                code: 'PS2',
                title: 'Variante De Novo confirmada (Paternidad verificada)',
                defaultStrength: 'Strong',
                defaultPts: 4,
                allowedStrengths: [
                    { label: 'Very Strong (+8p)', pts: 8, strength: 'Very Strong' },
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' }
                ],
                type: 'pathogenic',
                desc: 'De novo confirmada con prueba de filiación.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            },
            {
                code: 'PM6',
                title: 'Variante De Novo asumida (Sin confirmación de filiación)',
                defaultStrength: 'Moderate',
                defaultPts: 2,
                allowedStrengths: [
                    { label: 'Strong (+4p)', pts: 4, strength: 'Strong' },
                    { label: 'Moderate (+2p)', pts: 2, strength: 'Moderate' },
                    { label: 'Supporting (+1p)', pts: 1, strength: 'Supporting' }
                ],
                type: 'pathogenic',
                desc: 'De novo asumida sin confirmación genética de filiación.',
                papers: [{ name: 'ACMG_2015.pdf', label: 'ACMG/AMP Standards (2015)' }]
            }
        ]
    }
];

const ALL_CRITERIA = ACMG_SECTORS.flatMap(s => s.criteria);

// Tabla de thresholds SVI 2025 (PP3-BP4 paper, ClinGen)
const PREDICTOR_CONFIG = {
    // ── Missense ──────────────────────────────────────────────────────────────
    'REVEL': {
        label: 'REVEL', min: 0, max: 1, step: 0.001, unit: '',
        missenseOnly: true, splicingOnly: false,
        ref: 'PP3_2025.pdf',
        thresholds: [
            { cond: s => s >= 0.932, code:'PP3', strength:'Strong',      pts: 4, grade:'REVEL ≥ 0.932 (Strong +4p)' },
            { cond: s => s >= 0.879, code:'PP3', strength:'Moderate(+3)',  pts: 3, grade:'REVEL 0.879-0.931 (Moderate +3p)' },
            { cond: s => s >= 0.773, code:'PP3', strength:'Moderate',     pts: 2, grade:'REVEL 0.773-0.878 (Moderate +2p)' },
            { cond: s => s >= 0.644, code:'PP3', strength:'Supporting',   pts: 1, grade:'REVEL 0.644-0.772 (Supporting +1p)' },
            { cond: s => s <= 0.016, code:'BP4', strength:'Very Strong',  pts:-8, grade:'REVEL ≤ 0.016 (Very Strong -8p)' },
            { cond: s => s <= 0.052, code:'BP4', strength:'Strong',       pts:-4, grade:'REVEL 0.017-0.052 (Strong -4p)' },
            { cond: s => s <= 0.183, code:'BP4', strength:'Moderate',     pts:-2, grade:'REVEL 0.053-0.183 (Moderate -2p)' },
            { cond: s => s <= 0.290, code:'BP4', strength:'Supporting',   pts:-1, grade:'REVEL 0.184-0.290 (Supporting -1p)' },
        ]
    },
    'AlphaMissense': {
        label: 'AlphaMissense', min: 0, max: 1, step: 0.001, unit: '',
        missenseOnly: true, splicingOnly: false,
        ref: 'PP3_2025.pdf',
        thresholds: [
            { cond: s => s >= 0.990, code:'PP3', strength:'Strong',      pts: 4, grade:'AlphaMissense ≥ 0.990 (Strong +4p)' },
            { cond: s => s >= 0.972, code:'PP3', strength:'Moderate(+3)', pts: 3, grade:'AlphaMissense 0.972-0.989 (Moderate +3p)' },
            { cond: s => s >= 0.906, code:'PP3', strength:'Moderate',    pts: 2, grade:'AlphaMissense 0.906-0.971 (Moderate +2p)' },
            { cond: s => s >= 0.792, code:'PP3', strength:'Supporting',  pts: 1, grade:'AlphaMissense 0.792-0.905 (Supporting +1p)' },
            { cond: s => s <= 0.070, code:'BP4', strength:'Strong',      pts:-4, grade:'AlphaMissense ≤ 0.070 (Strong -4p)' },
            { cond: s => s <= 0.099, code:'BP4', strength:'Moderate(-3)', pts:-3, grade:'AlphaMissense 0.071-0.099 (Moderate -3p)' },
            { cond: s => s <= 0.169, code:'BP4', strength:'Moderate',    pts:-2, grade:'AlphaMissense 0.100-0.169 (Moderate -2p)' },
            { cond: s => s <= 0.791, code:'BP4', strength:'Supporting',  pts:-1, grade:'AlphaMissense 0.170-0.791 check indeterminate zone' },
        ]
    },
    'BayesDel': {
        label: 'BayesDel (no AF)', min: -1, max: 1, step: 0.001, unit: '',
        missenseOnly: true, splicingOnly: false,
        ref: 'PP3_2025.pdf',
        thresholds: [
            { cond: s => s >= 0.500, code:'PP3', strength:'Strong',      pts: 4, grade:'BayesDel ≥ 0.500 (Strong +4p)' },
            { cond: s => s >= 0.410, code:'PP3', strength:'Moderate(+3)', pts: 3, grade:'BayesDel 0.410-0.499 (Moderate +3p)' },
            { cond: s => s >= 0.270, code:'PP3', strength:'Moderate',    pts: 2, grade:'BayesDel 0.270-0.409 (Moderate +2p)' },
            { cond: s => s >= 0.130, code:'PP3', strength:'Supporting',  pts: 1, grade:'BayesDel 0.130-0.269 (Supporting +1p)' },
            { cond: s => s <= -0.520,code:'BP4', strength:'Strong',      pts:-4, grade:'BayesDel ≤ -0.520 (Strong -4p)' },
            { cond: s => s <= -0.360,code:'BP4', strength:'Moderate(-3)', pts:-3, grade:'BayesDel [-0.519,-0.360] (Moderate -3p)' },
            { cond: s => s <= -0.180,code:'BP4', strength:'Moderate',    pts:-2, grade:'BayesDel [-0.359,-0.180] (Moderate -2p)' },
            { cond: s => s <= -0.179,code:'BP4', strength:'Supporting',  pts:-1, grade:'BayesDel [-0.179,0.129] (Supporting -1p)' },
        ]
    },
    'MutPred2': {
        label: 'MutPred2', min: 0, max: 1, step: 0.001, unit: '',
        missenseOnly: true, splicingOnly: false,
        ref: 'PP3_2025.pdf',
        thresholds: [
            { cond: s => s >= 0.932, code:'PP3', strength:'Strong',      pts: 4, grade:'MutPred2 ≥ 0.932 (Strong +4p)' },
            { cond: s => s >= 0.895, code:'PP3', strength:'Moderate(+3)', pts: 3, grade:'MutPred2 0.895-0.931 (Moderate +3p)' },
            { cond: s => s >= 0.829, code:'PP3', strength:'Moderate',    pts: 2, grade:'MutPred2 0.829-0.894 (Moderate +2p)' },
            { cond: s => s >= 0.737, code:'PP3', strength:'Supporting',  pts: 1, grade:'MutPred2 0.737-0.828 (Supporting +1p)' },
            { cond: s => s <= 0.010, code:'BP4', strength:'Strong',      pts:-4, grade:'MutPred2 ≤ 0.010 (Strong -4p)' },
            { cond: s => s <= 0.031, code:'BP4', strength:'Moderate(-3)', pts:-3, grade:'MutPred2 0.011-0.031 (Moderate -3p)' },
            { cond: s => s <= 0.197, code:'BP4', strength:'Moderate',    pts:-2, grade:'MutPred2 0.032-0.197 (Moderate -2p)' },
            { cond: s => s <= 0.391, code:'BP4', strength:'Supporting',  pts:-1, grade:'MutPred2 0.198-0.391 (Supporting -1p)' },
        ]
    },
    'VEST4': {
        label: 'VEST4', min: 0, max: 1, step: 0.001, unit: '',
        missenseOnly: true, splicingOnly: false,
        ref: 'PP3_2025.pdf',
        thresholds: [
            { cond: s => s >= 0.965, code:'PP3', strength:'Strong',      pts: 4, grade:'VEST4 ≥ 0.965 (Strong +4p)' },
            { cond: s => s >= 0.909, code:'PP3', strength:'Moderate(+3)', pts: 3, grade:'VEST4 0.909-0.964 (Moderate +3p)' },
            { cond: s => s >= 0.861, code:'PP3', strength:'Moderate',    pts: 2, grade:'VEST4 0.861-0.908 (Moderate +2p)' },
            { cond: s => s >= 0.764, code:'PP3', strength:'Supporting',  pts: 1, grade:'VEST4 0.764-0.860 (Supporting +1p)' },
            { cond: s => s <= 0.077, code:'BP4', strength:'Strong',      pts:-4, grade:'VEST4 ≤ 0.077 (Strong -4p)' },
            { cond: s => s <= 0.302, code:'BP4', strength:'Moderate(-3)', pts:-3, grade:'VEST4 0.078-0.302 (Moderate -3p)' },
            { cond: s => s <= 0.449, code:'BP4', strength:'Moderate',    pts:-2, grade:'VEST4 0.303-0.449 (Moderate -2p)' },
            { cond: s => s <= 0.763, code:'BP4', strength:'Supporting',  pts:-1, grade:'VEST4 0.450-0.763 (Supporting -1p)' },
        ]
    },
    'ESM1b': {
        label: 'ESM1b (LLR)', min: -30, max: 15, step: 0.1, unit: '',
        missenseOnly: true, splicingOnly: false,
        ref: 'PP3_2025.pdf',
        thresholds: [
            // ESM1b: more negative = more pathogenic
            { cond: s => s <= -24.0, code:'PP3', strength:'Strong',      pts: 4, grade:'ESM1b ≤ -24.0 (Strong +4p)' },
            { cond: s => s <= -14.0, code:'PP3', strength:'Moderate(+3)', pts: 3, grade:'ESM1b [-23.9,-14.0] (Moderate +3p)' },
            { cond: s => s <= -12.2, code:'PP3', strength:'Moderate',    pts: 2, grade:'ESM1b [-13.9,-12.2] (Moderate +2p)' },
            { cond: s => s <= -10.7, code:'PP3', strength:'Supporting',  pts: 1, grade:'ESM1b [-12.1,-10.7] (Supporting +1p)' },
            { cond: s => s >= 8.8,   code:'BP4', strength:'Strong',      pts:-4, grade:'ESM1b ≥ 8.8 (Strong -4p)' },
            { cond: s => s >= -3.1,  code:'BP4', strength:'Moderate(-3)', pts:-3, grade:'ESM1b [-3.1,8.7] (Moderate -3p)' },
            { cond: s => s >= -6.3,  code:'BP4', strength:'Moderate',    pts:-2, grade:'ESM1b [-6.3,-3.2] (Moderate -2p)' },
            { cond: s => s >= -10.6, code:'BP4', strength:'Supporting',  pts:-1, grade:'ESM1b [-10.6,-6.4] (Supporting -1p)' },
        ]
    },
    'VARITY_R': {
        label: 'VARITY_R', min: 0, max: 1, step: 0.001, unit: '',
        missenseOnly: true, splicingOnly: false,
        ref: 'PP3_2025.pdf',
        thresholds: [
            { cond: s => s >= 0.965, code:'PP3', strength:'Strong',      pts: 4, grade:'VARITY_R ≥ 0.965 (Strong +4p)' },
            { cond: s => s >= 0.915, code:'PP3', strength:'Moderate(+3)', pts: 3, grade:'VARITY_R 0.915-0.964 (Moderate +3p)' },
            { cond: s => s >= 0.842, code:'PP3', strength:'Moderate',    pts: 2, grade:'VARITY_R 0.842-0.914 (Moderate +2p)' },
            { cond: s => s >= 0.675, code:'PP3', strength:'Supporting',  pts: 1, grade:'VARITY_R 0.675-0.841 (Supporting +1p)' },
            { cond: s => s <= 0.036, code:'BP4', strength:'Strong',      pts:-4, grade:'VARITY_R ≤ 0.036 (Strong -4p)' },
            { cond: s => s <= 0.063, code:'BP4', strength:'Moderate(-3)', pts:-3, grade:'VARITY_R 0.037-0.063 (Moderate -3p)' },
            { cond: s => s <= 0.116, code:'BP4', strength:'Moderate',    pts:-2, grade:'VARITY_R 0.064-0.116 (Moderate -2p)' },
            { cond: s => s <= 0.251, code:'BP4', strength:'Supporting',  pts:-1, grade:'VARITY_R 0.117-0.251 (Supporting -1p)' },
        ]
    },
    // ── Splicing (solo disponible para LOF/Splicing) ─────────────────────────
    'SpliceAI': {
        label: 'SpliceAI (delta score)', min: 0, max: 1, step: 0.01, unit: '',
        missenseOnly: false, splicingOnly: true,
        ref: 'PP3-BP4.pdf',
        thresholds: [
            { cond: s => s >= 0.80, code:'PP3', strength:'Strong',    pts: 4, grade:'SpliceAI ≥ 0.80 (Strong +4p)' },
            { cond: s => s >= 0.50, code:'PP3', strength:'Moderate',  pts: 2, grade:'SpliceAI 0.50-0.79 (Moderate +2p)' },
            { cond: s => s >= 0.20, code:'PP3', strength:'Supporting',pts: 1, grade:'SpliceAI 0.20-0.49 (Supporting +1p)' },
            { cond: s => s <  0.10, code:'BP4', strength:'Supporting',pts:-1, grade:'SpliceAI < 0.10 (Supporting -1p)' },
        ]
    },
};

function evaluatePredictorScore(predictorName, score) {
    const cfg = PREDICTOR_CONFIG[predictorName];
    if (!cfg) return { code: null, strength: null, pts: 0, grade: 'Predictor no reconocido (0p)' };
    for (const t of cfg.thresholds) {
        if (t.cond(score)) return { code: t.code, strength: t.strength, pts: t.pts, grade: t.grade };
    }
    return { code: null, strength: null, pts: 0, grade: `${predictorName} Indeterminado (0p)` };
}

function calculateBayesianVerdict(totalPoints, hasBA1 = false) {
    if (hasBA1) {
        return { verdict: 'BENIGNA (BENIGN) — Stand-Alone BA1', class: 'verdict-benign', prob: '< 0.001' };
    }
    const priorOdds = 0.10 / 0.90;
    const bayesFactorPerPoint = 2.08;
    const postOdds = priorOdds * Math.pow(bayesFactorPerPoint, totalPoints);
    const postProb = postOdds / (1 + postOdds);
    const probFormatted = postProb >= 0.999 ? '> 0.999' : (postProb <= 0.001 ? '< 0.001' : postProb.toFixed(3));

    if (totalPoints >= 10) return { verdict: 'PATOGÉNICA (PATHOGENIC)', class: 'verdict-pathogenic', prob: probFormatted };
    if (totalPoints >= 6) return { verdict: 'PROBABLEMENTE PATOGÉNICA (LIKELY PATHOGENIC)', class: 'verdict-likely-pathogenic', prob: probFormatted };
    if (totalPoints <= -6) return { verdict: 'BENIGNA (BENIGN)', class: 'verdict-benign', prob: probFormatted };
    if (totalPoints <= -1) return { verdict: 'PROBABLEMENTE BENIGNA (LIKELY BENIGN)', class: 'verdict-likely-benign', prob: probFormatted };
    return { verdict: 'VARIANTE DE SIGNIFICADO INCIERTO (VUS)', class: 'verdict-vus', prob: probFormatted };
}

class ACMGCanvasPlotter {
    constructor(canvasId) {
        this.canvasId = canvasId;
        this.prior_p = 0.10;
        this.odds_vst = 350.0;
        this.pointsData = [];
        this.theme = 'dark'; // 'dark' | 'light'
        this.lastActiveTags = [];
        this.lastHasBA1 = false;
    }

    getCanvas() {
        return document.getElementById(this.canvasId);
    }

    setTheme(theme) {
        this.theme = theme;
        this.render(this.lastActiveTags, this.lastHasBA1);
    }

    calculatePostP(cumulativePoints, hasBA1 = false) {
        if (hasBA1) return 0.0;
        const exponent = cumulativePoints / 8.0;
        const op = Math.pow(this.odds_vst, exponent);
        const post_p = (op * this.prior_p) / ((op - 1) * this.prior_p + 1);
        return Math.max(0, Math.min(1, parseFloat(post_p.toFixed(3))));
    }

    getColorForProb(p) {
        const stops = [
            { pos: 0.0, r: 22,  g: 163, b: 74  }, // green #16a34a
            { pos: 0.1, r: 132, g: 204, b: 22  }, // yellow-green #84cc16
            { pos: 0.5, r: 234, g: 179, b: 8   }, // gold #eab308
            { pos: 0.8, r: 249, g: 115, b: 22  }, // darkorange #f97316
            { pos: 0.9, r: 239, g: 68,  b: 68  }, // tomato #ef4444
            { pos: 1.0, r: 220, g: 38,  b: 38  }  // red #dc2626
        ];
        if (p <= 0.0) return `rgb(${stops[0].r}, ${stops[0].g}, ${stops[0].b})`;
        if (p >= 1.0) return `rgb(${stops[stops.length - 1].r}, ${stops[stops.length - 1].g}, ${stops[stops.length - 1].b})`;

        for (let i = 0; i < stops.length - 1; i++) {
            const s1 = stops[i];
            const s2 = stops[i + 1];
            if (p >= s1.pos && p <= s2.pos) {
                const t = (p - s1.pos) / (s2.pos - s1.pos);
                const r = Math.round(s1.r + t * (s2.r - s1.r));
                const g = Math.round(s1.g + t * (s2.g - s1.g));
                const b = Math.round(s1.b + t * (s2.b - s1.b));
                return `rgb(${r}, ${g}, ${b})`;
            }
        }
        return '#eab308';
    }

    render(activeTags = [], hasBA1 = false, targetCanvas = null, themeOverride = null) {
        this.lastActiveTags = activeTags;
        this.lastHasBA1 = hasBA1;

        const canvas = targetCanvas || this.getCanvas();
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const theme = themeOverride || this.theme || 'dark';
        const isLight = theme === 'light';

        // Construir secuencia de progresión de evidencia
        const sequence = [
            { xIndex: 0, label: 'Inicio', xLabel: 'Inicio (Prior)', post_p: this.prior_p, pts: 0 }
        ];

        let cumPts = 0;
        let isBA1Active = false;
        activeTags.forEach((tag, idx) => {
            if (tag.code.includes('BA1')) isBA1Active = true;
            cumPts += (tag.pts || 0);
            const p = this.calculatePostP(cumPts, isBA1Active || hasBA1);
            const shortCode = tag.code.length > 20 ? tag.code.substring(0, 18) + '...' : tag.code;
            sequence.push({
                xIndex: idx + 1,
                label: shortCode,
                xLabel: `+ ${shortCode}`,
                post_p: p,
                pts: tag.pts
            });
        });

        this.pointsData = sequence;

        // Dimensionado HiDPI
        const dpr = window.devicePixelRatio || 1;
        const parentW = canvas.parentElement ? canvas.parentElement.clientWidth : 860;
        const displayWidth = Math.max(720, Math.min(1000, parentW - 24));
        const displayHeight = 540;

        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        canvas.style.width = `${displayWidth}px`;
        canvas.style.height = `${displayHeight}px`;

        ctx.save();
        ctx.scale(dpr, dpr);

        // Fondo del gráfico
        ctx.fillStyle = isLight ? '#ffffff' : '#0b0f19';
        ctx.fillRect(0, 0, displayWidth, displayHeight);

        // Márgenes del área de trazado
        const marginLeft = 65;
        const marginRight = 85;
        const marginTop = 45;
        const marginBottom = 115;

        const plotWidth = displayWidth - marginLeft - marginRight;
        const plotHeight = displayHeight - marginTop - marginBottom;

        // Conversión de coordenadas
        const yMin = -0.05;
        const yMax = 1.05;
        const getY = (val) => marginTop + plotHeight - ((val - yMin) / (yMax - yMin)) * plotHeight;

        const count = sequence.length;
        const xMin = -0.6;
        const xMax = Math.max(1, count - 1) + 0.6;
        const getX = (idx) => marginLeft + ((idx - xMin) / (xMax - xMin)) * plotWidth;

        // 1. Fondos coloreados según rangos ACMG (conforme a Plot_Bayes_index.ipynb)
        const bands = [
            { min: 0.990, max: 1.050, color: isLight ? 'rgba(239, 68, 68, 0.18)' : 'rgba(239, 68, 68, 0.22)', label: 'Pathogenic (0.990-1.000)', stroke: isLight ? 'rgba(239, 68, 68, 0.35)' : 'rgba(239, 68, 68, 0.45)' },
            { min: 0.900, max: 0.990, color: isLight ? 'rgba(240, 128, 128, 0.22)' : 'rgba(248, 113, 113, 0.18)', label: 'Likely Pathogenic [0.900-0.990]', stroke: isLight ? 'rgba(240, 128, 128, 0.35)' : 'rgba(248, 113, 113, 0.35)' },
            { min: 0.100, max: 0.900, color: isLight ? 'rgba(240, 230, 140, 0.28)' : 'rgba(234, 179, 8, 0.14)', label: 'VUS [0.100-0.900)', stroke: isLight ? 'rgba(202, 138, 4, 0.25)' : 'rgba(234, 179, 8, 0.25)' },
            { min: 0.001, max: 0.100, color: isLight ? 'rgba(144, 238, 144, 0.25)' : 'rgba(34, 197, 94, 0.16)', label: 'Likely Benign [0.001-0.100)', stroke: isLight ? 'rgba(34, 197, 94, 0.35)' : 'rgba(34, 197, 94, 0.35)' },
            { min: -0.050, max: 0.001, color: isLight ? 'rgba(34, 197, 94, 0.20)' : 'rgba(16, 185, 129, 0.22)', label: 'Benign (0.000-0.001)', stroke: isLight ? 'rgba(22, 163, 74, 0.35)' : 'rgba(16, 185, 129, 0.45)' }
        ];

        bands.forEach(b => {
            const yTop = getY(b.max);
            const yBottom = getY(b.min);
            const h = yBottom - yTop;
            ctx.fillStyle = b.color;
            ctx.fillRect(marginLeft, yTop, plotWidth, h);

            ctx.strokeStyle = b.stroke;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(marginLeft, yTop);
            ctx.lineTo(marginLeft + plotWidth, yTop);
            ctx.stroke();
        });

        // 2. Líneas de rejilla discontinua (Y ticks)
        const yTicks = [0.001, 0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 0.99];
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = isLight ? 'rgba(100, 116, 139, 0.35)' : 'rgba(255, 255, 255, 0.16)';
        ctx.lineWidth = 1;

        yTicks.forEach(tVal => {
            const y = getY(tVal);
            ctx.beginPath();
            ctx.moveTo(marginLeft, y);
            ctx.lineTo(marginLeft + plotWidth, y);
            ctx.stroke();
        });

        // Rejilla vertical para puntos
        sequence.forEach(pt => {
            const x = getX(pt.xIndex);
            ctx.beginPath();
            ctx.moveTo(x, marginTop);
            ctx.lineTo(x, marginTop + plotHeight);
            ctx.stroke();
        });
        ctx.setLineDash([]); // restaurar trazo continuo

        // 3. Marco de los ejes
        ctx.strokeStyle = isLight ? '#334155' : 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1.4;
        ctx.strokeRect(marginLeft, marginTop, plotWidth, plotHeight);

        // 4. Etiquetas de Y
        ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
        ctx.font = '500 10.5px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';

        yTicks.forEach(tVal => {
            const y = getY(tVal);
            ctx.beginPath();
            ctx.moveTo(marginLeft - 5, y);
            ctx.lineTo(marginLeft, y);
            ctx.stroke();

            const textVal = tVal === 0.001 ? '0.001' : (tVal.toString().length <= 4 ? tVal.toString() : tVal.toFixed(2));
            ctx.fillText(textVal, marginLeft - 8, y);
        });

        // 5. Etiquetas de X con rotación 45° completamente por debajo del eje X
        sequence.forEach(pt => {
            const x = getX(pt.xIndex);
            const y = marginTop + plotHeight;

            // Muesca del tick
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 5);
            ctx.stroke();

            ctx.save();
            ctx.translate(x, y + 8);
            ctx.rotate((45 * Math.PI) / 180);
            ctx.fillStyle = isLight ? '#0f172a' : '#e2e8f0';
            ctx.font = '600 9.5px Outfit, Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(pt.xLabel, 0, 0);
            ctx.restore();
        });

        // 6. Puntos de dispersión (Scatter sin línea continua, idéntico a la notebook)
        sequence.forEach((pt) => {
            const x = getX(pt.xIndex);
            const y = getY(pt.post_p);
            const nodeColor = this.getColorForProb(pt.post_p);

            // Glow sutil en modo oscuro
            if (!isLight) {
                ctx.save();
                ctx.shadowColor = nodeColor;
                ctx.shadowBlur = 10;
            }

            ctx.beginPath();
            ctx.arc(x, y, 7.5, 0, 2 * Math.PI);
            ctx.fillStyle = nodeColor;
            ctx.fill();

            if (!isLight) {
                ctx.restore();
            }

            // Anillo negro de borde
            ctx.beginPath();
            ctx.arc(x, y, 7.5, 0, 2 * Math.PI);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1.4;
            ctx.stroke();

            // Posición de etiquetas a la derecha del punto (i + 0.12, val + 0.02 / val - 0.04)
            const posX = getX(pt.xIndex + 0.12);
            const posYVal = getY(pt.post_p + 0.02);
            const posYText = getY(pt.post_p - 0.04);

            // Etiqueta superior (valor numérico de Post_P)
            ctx.fillStyle = isLight ? '#0f172a' : '#ffffff';
            ctx.font = 'bold 10px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            ctx.fillText(pt.post_p.toFixed(3), posX, posYVal);

            // Etiqueta inferior (nombre del criterio ingresado)
            ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
            ctx.font = 'italic 9.5px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillText(pt.label, posX, posYText);
        });

        // 8. Barra de color en el lateral derecho
        const cbarX = displayWidth - marginRight + 22;
        const cbarY = marginTop + 15;
        const cbarWidth = 14;
        const cbarHeight = plotHeight - 30;

        const cbarGrad = ctx.createLinearGradient(0, cbarY + cbarHeight, 0, cbarY);
        cbarGrad.addColorStop(0.0, '#16a34a');
        cbarGrad.addColorStop(0.1, '#84cc16');
        cbarGrad.addColorStop(0.5, '#eab308');
        cbarGrad.addColorStop(0.8, '#f97316');
        cbarGrad.addColorStop(0.9, '#ef4444');
        cbarGrad.addColorStop(1.0, '#dc2626');

        ctx.fillStyle = cbarGrad;
        ctx.fillRect(cbarX, cbarY, cbarWidth, cbarHeight);
        ctx.strokeStyle = isLight ? '#475569' : 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.strokeRect(cbarX, cbarY, cbarWidth, cbarHeight);

        // Texto vertical de la barra de color
        ctx.save();
        ctx.translate(cbarX + cbarWidth + 18, cbarY + cbarHeight / 2);
        ctx.rotate((90 * Math.PI) / 180);
        ctx.fillStyle = isLight ? '#334155' : '#94a3b8';
        ctx.font = '600 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Post_P Parcial', 0, 0);
        ctx.restore();

        // 9. Leyenda de franjas ACMG en la esquina superior izquierda
        const legX = marginLeft + 8;
        const legY = marginTop + 8;
        const legW = 205;
        const legH = 86;

        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.88)';
        ctx.fillRect(legX, legY, legW, legH);
        ctx.strokeStyle = isLight ? '#94a3b8' : 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.strokeRect(legX, legY, legW, legH);

        bands.forEach((b, idx) => {
            const rowY = legY + 11 + idx * 15;
            ctx.fillStyle = b.color.replace('0.18', '0.9').replace('0.14', '0.9').replace('0.16', '0.9').replace('0.20', '0.9').replace('0.22', '0.9').replace('0.25', '0.9').replace('0.28', '0.9');
            ctx.fillRect(legX + 8, rowY - 5, 10, 10);
            ctx.strokeStyle = isLight ? '#475569' : '#ffffff';
            ctx.strokeRect(legX + 8, rowY - 5, 10, 10);

            ctx.fillStyle = isLight ? '#0f172a' : '#e2e8f0';
            ctx.font = '500 8.8px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(b.label, legX + 23, rowY);
        });

        // 10. Título y Etiquetas de los Ejes
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 12px Outfit, Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(`Mapeo Integral del Modelo Bayesiano ACMG (Prior_P = ${this.prior_p.toFixed(2)}, Odds_VSt = ${this.odds_vst.toFixed(1)})`, marginLeft + plotWidth / 2, 12);

        ctx.fillStyle = isLight ? '#334155' : '#94a3b8';
        ctx.font = '600 10px Inter, sans-serif';
        ctx.fillText('Combinación Progresiva de Criterios Clínicos (ACMG / AMP)', marginLeft + plotWidth / 2, displayHeight - 16);

        ctx.save();
        ctx.translate(16, marginTop + plotHeight / 2);
        ctx.rotate((-90 * Math.PI) / 180);
        ctx.fillStyle = isLight ? '#334155' : '#94a3b8';
        ctx.font = '600 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Probabilidad de Patogenicidad a Posteriori (Post_P)', 0, 0);
        ctx.restore();

        ctx.restore();
    }

    toDataURL(themeOverride = null) {
        const theme = themeOverride || this.theme;
        if (theme === this.theme) {
            const canvas = this.getCanvas();
            return canvas ? canvas.toDataURL('image/png') : '';
        }

        // Renderizado offscreen con el tema especificado
        const offCanvas = document.createElement('canvas');
        this.render(this.lastActiveTags, this.lastHasBA1, offCanvas, theme);
        const dataUrl = offCanvas.toDataURL('image/png');
        return dataUrl;
    }

    downloadPNG(filename = 'bayes_acmg_progression.png') {
        const dataUrl = this.toDataURL();
        if (!dataUrl) return;
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

class TortaApp {
    constructor() {
        this.criteriaState = new Map();
        ALL_CRITERIA.forEach(c => {
            this.criteriaState.set(c.code, { selected: false, pts: c.defaultPts, strength: c.defaultStrength });
        });

        this.selectedPredictor = 'REVEL';
        this.revelScore = 0.500;
        this.molConsequence = 'missense';
        this.inheritanceModel = 'AD';

        this.bayesPlotter = new ACMGCanvasPlotter('bayesPlotCanvas');

        this.dom = {
            svg: document.getElementById('acmgWheelSvg'),
            legend: document.getElementById('wheelLegend'),
            checklistContainer: document.getElementById('criteriaList'),
            infoCode: document.getElementById('infoCode'),
            infoCategory: document.getElementById('infoCategory'),
            infoTitleFull: document.getElementById('infoTitleFull'),
            infoDesc: document.getElementById('infoDesc'),
            infoPapers: document.getElementById('infoPapers'),
            verdictText: document.getElementById('verdictText'),
            totalPointsEl: document.getElementById('totalPoints'),
            posteriorProbEl: document.getElementById('posteriorProb'),
            activeTagsContainer: document.getElementById('activeTagsContainer'),
            revelSlider: document.getElementById('revelSlider'),
            revelInput: document.getElementById('revelInput'),
            revelGrade: document.getElementById('revelGrade'),
            revelPoints: document.getElementById('revelPoints'),
            predictorSelect: document.getElementById('predictorSelect'),
            needle: document.getElementById('gaugeNeedle'),
            reportModal: document.getElementById('reportModal')
        };

        this.init();
    }

    init() {
        this.updatePredictorSelector(); // poblar selector según variante inicial (missense)
        this.renderChecklist();
        this.bindEvents();
        this.applyGuidedRules();
        this.updateCalculator();
        this.showStep(0);
    }

    setInheritanceModel(model) {
        this.inheritanceModel = model;
        this.applyGuidedRules();
    }

    resetAllSelections() {
        this.criteriaState.forEach(state => {
            state.selected = false;
        });

        const cards = document.querySelectorAll('.criterion-item-card');
        cards.forEach(card => card.classList.remove('selected'));

        this.revelScore = 0.500;
        if (this.dom.revelSlider) this.dom.revelSlider.value = 0.500;
        if (this.dom.revelInput) this.dom.revelInput.value = '0.500';

        this.applyGuidedRules();
        this.updateCalculator();
        this.showStep(0);
    }

    setConsequence(type, cardEl) {
        this.molConsequence = type;
        if (cardEl) {
            const parent = cardEl.parentElement;
            parent.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            cardEl.classList.add('selected');
        }

        this.updatePredictorSelector();
        this.renderChecklist();
        this.applyGuidedRules();
    }

    // ── Actualiza el selector de predictor según tipo de variante ──────────
    updatePredictorSelector() {
        const sel = document.getElementById('predictorSelect');
        const panel = document.getElementById('pp3InteractivePanel');
        const panelTitle = document.getElementById('pp3PanelTitle');
        const selectorSection = document.getElementById('pp3SelectorSection');
        if (!sel) return;

        const mc = this.molConsequence;
        sel.innerHTML = '';

        if (mc === 'missense') {
            // Mostrar todos los predictores missense
            Object.entries(PREDICTOR_CONFIG)
                .filter(([, cfg]) => cfg.missenseOnly)
                .forEach(([key, cfg]) => {
                    const opt = document.createElement('option');
                    opt.value = key;
                    opt.textContent = `${cfg.label} (${cfg.min}–${cfg.max})`;
                    sel.appendChild(opt);
                });
            if (panelTitle) panelTitle.textContent = 'Calculadora In Silico PP3 / BP4 — Missense (ClinGen SVI 2025)';
            if (selectorSection) selectorSection.style.display = '';
            if (panel) panel.style.display = '';
        } else if (mc === 'lof') {
            // Solo SpliceAI para splicing, etiquetado informacional
            const opt = document.createElement('option');
            opt.value = 'SpliceAI'; opt.textContent = 'SpliceAI Delta Score (0.00 – 1.00)';
            sel.appendChild(opt);
            if (panelTitle) panelTitle.textContent = 'Impacto en Splicing — SpliceAI (Informacional)';
            if (selectorSection) selectorSection.style.display = '';
            if (panel) panel.style.display = '';
        } else {
            // Inframe, sinónima u otro: ocultar panel
            if (panel) panel.style.display = 'none';
        }

        // Actualizar slider según predictor actual
        this.updateSliderForPredictor();
    }

    updateSliderForPredictor() {
        const sel = document.getElementById('predictorSelect');
        if (!sel) return;
        const key = sel.value;
        const cfg = PREDICTOR_CONFIG[key];
        if (!cfg) return;

        this.selectedPredictor = key;

        const slider = document.getElementById('revelSlider');
        const input  = document.getElementById('revelInput');
        if (slider) {
            slider.min  = cfg.min;
            slider.max  = cfg.max;
            slider.step = cfg.step;
            slider.value = cfg.min + (cfg.max - cfg.min) / 2;
        }
        if (input) {
            input.min  = cfg.min;
            input.max  = cfg.max;
            input.step = cfg.step;
            input.value = (cfg.min + (cfg.max - cfg.min) / 2).toFixed(3);
        }
        this.revelScore = parseFloat((cfg.min + (cfg.max - cfg.min) / 2).toFixed(3));
        this.applyGuidedRules();
    }

    showStep(stepNum) {
        for (let i = 0; i <= 7; i++) {
            const s = document.getElementById(`step${i}`);
            if (s) {
                if (i <= stepNum) s.classList.remove('hidden');
                else s.classList.add('hidden');
            }
        }

        if (stepNum === 7) {
            this.renderWheelSVG();
            if (this.bayesPlotter) {
                this.bayesPlotter.render(this.currentActiveTags || [], this.currentVerdictObj?.verdict?.includes('BA1') || false);
            }
        }

        // Al mostrar el paso de segregación, sincronizar herencia
        if (stepNum >= 5) {
            const display = document.getElementById('pp1InheritanceDisplay');
            if (display) display.textContent = this.inheritanceModel || 'AD';
            this.calcPP1();
        }

        const target = document.getElementById(`step${stepNum}`);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ── PP3 Panel toggle (chevron animado) ─────────────────────────────
    togglePP3Panel() {
        const body    = document.getElementById('pp3PanelBody');
        const chevron = document.getElementById('pp3PanelChevron');
        const tableBtn= document.getElementById('pp3TableToggleBtn');
        if (!body) return;
        const isOpen = body.style.display !== 'none';
        body.style.display = isOpen ? 'none' : 'block';
        if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
        if (tableBtn) tableBtn.style.display = isOpen ? 'none' : 'inline-flex';
    }

    togglePP3Table() {
        const tbl = document.getElementById('pp3ThresholdTable');
        if (tbl) tbl.style.display = tbl.style.display === 'none' ? 'block' : 'none';
    }

    openPP1Submodal(id) {
        const el = document.getElementById(id);
        if (el) el.classList.add('active');
    }

    closePP1Submodal(id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    }

    // ── Calculadora PP1/PP4 — MODAL WIZARD ─────────────────────────────
    openPP1Modal() {
        const modal = document.getElementById('pp1Modal');
        if (!modal) return;
        // Sincronizar herencia
        const inh = document.getElementById('pp1ModalInheritance');
        if (inh) {
            const labels = { AD: 'Autosómico Dominante (AD)', AR: 'Autosómico Recesivo (AR)', XL: 'Ligado al X Recesivo (XL)' };
            inh.textContent = labels[this.inheritanceModel] || 'Autosómico Dominante (AD)';
        }
        this._pp1Step = 0;
        this.pp1GoStep(0);
        this.calcPP1();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    closePP1Modal() {
        const modal = document.getElementById('pp1Modal');
        if (modal) modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    pp1GoStep(n) {
        this._pp1Step = n;
        const TOTAL = 4;
        for (let i = 0; i < TOTAL; i++) {
            const panel = document.getElementById(`pp1Panel${i}`);
            const nav   = document.getElementById(`pp1Nav${i}`);
            if (panel) panel.classList.toggle('visible', i === n);
            if (nav) {
                nav.classList.remove('active', 'done');
                if (i === n) nav.classList.add('active');
                else if (i < n) nav.classList.add('done');
            }
        }
        // Footer buttons
        const btnBack  = document.getElementById('pp1BtnBack');
        const btnNext  = document.getElementById('pp1BtnNext');
        if (btnBack)  btnBack.style.display  = n > 0 ? '' : 'none';
        if (btnNext)  btnNext.style.display  = n < 3 ? '' : 'none';

        // Update inheritance-specific fields on step 2
        if (n === 2) this._updatePP1ModalInheritanceFields();
        // Update homo/hetero on step 1
        if (n === 1) this._updatePP1ModalLocusFields();
        // Recalculate
        this.calcPP1();
    }

    pp1NextStep() { if (this._pp1Step < 3) this.pp1GoStep(this._pp1Step + 1); }
    pp1PrevStep() { if (this._pp1Step > 0) this.pp1GoStep(this._pp1Step - 1); }

    _updatePP1ModalInheritanceFields() {
        const inh  = this.inheritanceModel || 'AD';
        const arSec = document.getElementById('pp1MArSection');
        const adSec = document.getElementById('pp1MAdXlSection');
        if (arSec)  arSec.style.display  = inh === 'AR' ? 'block' : 'none';
        if (adSec)  adSec.style.display  = inh !== 'AR' ? 'block' : 'none';
    }

    _updatePP1ModalLocusFields() {
        const isHomo = document.querySelector('input[name="pp1MLocus"][value="yes"]')?.checked;
        const yieldSec = document.getElementById('pp1MYieldSection');
        const homoNote = document.getElementById('pp1MHomoNote');
        if (yieldSec) yieldSec.style.display = isHomo ? 'none' : 'block';
        if (homoNote) homoNote.style.display  = isHomo ? 'block' : 'none';
    }

    calcPP1() {
        const inheritance  = this.inheritanceModel || 'AD';
        const isHomogeneous= document.querySelector('input[name="pp1MLocus"][value="yes"]')?.checked;
        const penetranceNo = document.querySelector('input[name="pp1MPen"][value="no"]')?.checked;
        const nonSeg       = document.getElementById('pp1MNonSeg')?.checked;
        const locusExcl    = document.getElementById('pp1MLocusExcl')?.checked;

        // Yield visibility
        const yieldSec = document.getElementById('pp1MYieldSection');
        const homoNote = document.getElementById('pp1MHomoNote');
        if (yieldSec) yieldSec.style.display = isHomogeneous ? 'none' : 'block';
        if (homoNote) homoNote.style.display  = isHomogeneous ? 'block' : 'none';

        // Exclusion yield group visibility
        const exclYieldGroup = document.getElementById('pp1MExclYieldGroup');
        if (exclYieldGroup) exclYieldGroup.style.display = (locusExcl && !isHomogeneous) ? 'block' : 'none';

        // Yield table (Biesecker 2024 - Tabla 2)
        const yieldTable = [
            {yield:99.9,pts:12},{yield:99.8,pts:11.5},{yield:99.7,pts:11},
            {yield:99.6,pts:10.5},{yield:99.4,pts:10},{yield:99.2,pts:9.5},
            {yield:98.8,pts:9},{yield:98.3,pts:8.5},{yield:97.5,pts:8},
            {yield:96.5,pts:7.5},{yield:95,pts:7},{yield:90.2,pts:6},
            {yield:86.4,pts:5.5},{yield:81.6,pts:5},{yield:75.4,pts:4.5},
            {yield:68,pts:4},{yield:59.6,pts:3.5},{yield:50.6,pts:3},
            {yield:41.5,pts:2.5},{yield:33,pts:2},{yield:25.4,pts:1.5},{yield:19.1,pts:1}
        ];
        const getYieldPts = y => {
            if (y < 19.1) return 0;
            for (const e of yieldTable) { if (y >= e.yield) return e.pts; }
            return 1;
        };

        // 1. PP4 Calculation
        let pp4 = 0;
        if (isHomogeneous) {
            pp4 = 7.0;
        } else {
            let effYield = parseFloat(document.getElementById('pp1MDiagYield')?.value) || 0;
            if (locusExcl) {
                effYield = parseFloat(document.getElementById('pp1MAdjYield')?.value) || effYield;
            }
            pp4 = (penetranceNo && effYield < 20) ? 0 : getYieldPts(effYield);
        }

        // 2. PP1 / BS4 Calculation
        let pp1 = 0;
        if (!isHomogeneous) {
            if (nonSeg) {
                pp1 = -4.0;
            } else if (inheritance === 'AR') {
                const aff   = parseInt(document.getElementById('pp1MArAff')?.value)   || 0;
                const unaff = parseInt(document.getElementById('pp1MArUnaff')?.value) || 0;
                pp1 = aff * 2 + unaff * 0.4;
            } else {
                const cnt = parseInt(document.getElementById('pp1MAdXlCnt')?.value) || 0;
                pp1 = cnt * 1.0;
            }
        }

        // 3. Cis Division
        const cisCount = Math.max(1, parseInt(document.getElementById('pp1MCisVariants')?.value) || 1);
        let rawSum = pp4 + pp1;
        const cisRow = document.getElementById('pp1MCisRow');
        const cisVal = document.getElementById('pp1MCisVal');
        if (cisCount > 1) {
            if (cisRow) cisRow.style.display = 'flex';
            if (cisVal) cisVal.textContent = `1 / ${cisCount}`;
            rawSum = rawSum / cisCount;
        } else {
            if (cisRow) cisRow.style.display = 'none';
        }

        // 4. Final Capped Score
        const total = Math.min(rawSum, 5.0);
        const isCapped = rawSum > 5.0;

        // ACMG Code mapping (Tabla 4)
        const getCode = pts => {
            if (pts <= -4) return 'BS4 (Evidencia Benigna de No-segregación)';
            if (pts < 1)   return 'No aplicable (Insuficiente)';
            if (pts < 2)   return 'PP1_Supporting Ó PP4_Supporting';
            if (pts < 3)   return 'PP1_Moderate Ó PP4_Moderate Ó [PP1_Supp+PP4_Supp]';
            if (pts < 4)   return '[PP1_Supp+PP4_Mod] Ó [PP4_Supp+PP1_Mod]';
            if (pts < 5)   return 'PP1_Strong Ó PP4_Strong Ó [PP1_Mod+PP4_Mod]';
            return 'PP1_Strong + PP4_Supporting (Tope de Locus +5.0)';
        };

        const fmt = v => (v >= 0 ? '+' : '') + v.toFixed(1);
        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set('pp1MPp4Val',   fmt(pp4) + ' pt');
        set('pp1MPp1Val',   fmt(pp1) + ' pt');
        set('pp1MRawVal',   fmt(rawSum) + ' pt');
        set('pp1MTotalVal', total.toFixed(1));
        set('pp1MAcmgCode', getCode(total));

        const capNotice = document.getElementById('pp1MCapNotice');
        if (capNotice) capNotice.style.display = isCapped ? 'inline-block' : 'none';

        // Store result for applying
        this._pp1Result = { pp4, pp1, rawSum, total, code: getCode(total), nonSeg };
    }

    applyPP1Result() {
        const r = this._pp1Result;
        if (!r) return;

        const fmt = v => (v >= 0 ? '+' : '') + v.toFixed(1);
        const setCritState = (code, selected, pts, strength) => {
            const item = this.criteriaState.get(code);
            if (item) {
                item.selected = selected;
                if (pts !== undefined) item.pts = pts;
                if (strength !== undefined) item.strength = strength;
            }
        };

        if (r.nonSeg || r.pp1 <= -4.0) {
            // Activar BS4 y desactivar PP1 / PP4
            setCritState('BS4', true, -4, 'Strong');
            setCritState('PP1', false);
            setCritState('PP4', false);
            this.showConflictToast('Se aplicó la evidencia Benigna BS4 (-4p) por no-segregación familiar.');
        } else {
            setCritState('BS4', false);

            // Mapeo cuantitativo exacto ClinGen 2024 Tabla 4 (cap máximo +5.0)
            const tot = Math.min(r.total, 5.0);

            if (tot >= 5.0) {
                // +5.0 pts (Tope máximo Locus): Strong (+4p) + Supporting (+1p) = +5.0 pts
                if (r.pp4 >= r.pp1) {
                    setCritState('PP4', true, 4, 'Strong');
                    setCritState('PP1', true, 1, 'Supporting');
                } else {
                    setCritState('PP1', true, 4, 'Strong');
                    setCritState('PP4', true, 1, 'Supporting');
                }
            } else if (tot >= 4.0) {
                // +4.0 pts: Strong (+4p) o Mod (+2p) + Mod (+2p)
                if (r.pp4 >= 4.0) {
                    setCritState('PP4', true, 4, 'Strong');
                    setCritState('PP1', false);
                } else if (r.pp1 >= 4.0) {
                    setCritState('PP1', true, 4, 'Strong');
                    setCritState('PP4', false);
                } else {
                    setCritState('PP4', true, 2, 'Moderate');
                    setCritState('PP1', true, 2, 'Moderate');
                }
            } else if (tot >= 3.0) {
                // +3.0 pts: Moderate (+2p) + Supporting (+1p) = 3p
                if (r.pp4 >= r.pp1) {
                    setCritState('PP4', true, 2, 'Moderate');
                    setCritState('PP1', true, 1, 'Supporting');
                } else {
                    setCritState('PP1', true, 2, 'Moderate');
                    setCritState('PP4', true, 1, 'Supporting');
                }
            } else if (tot >= 2.0) {
                // +2.0 pts: Moderate (+2p) o Supp (+1p) + Supp (+1p)
                if (r.pp4 >= 2.0) {
                    setCritState('PP4', true, 2, 'Moderate');
                    setCritState('PP1', false);
                } else if (r.pp1 >= 2.0) {
                    setCritState('PP1', true, 2, 'Moderate');
                    setCritState('PP4', false);
                } else {
                    setCritState('PP4', true, 1, 'Supporting');
                    setCritState('PP1', true, 1, 'Supporting');
                }
            } else if (tot >= 1.0) {
                // +1.0 pt: Supporting (+1p)
                if (r.pp4 >= r.pp1) {
                    setCritState('PP4', true, 1, 'Supporting');
                    setCritState('PP1', false);
                } else {
                    setCritState('PP1', true, 1, 'Supporting');
                    setCritState('PP4', false);
                }
            } else {
                // Insuficiente (< +1.0 pt)
                setCritState('PP1', false);
                setCritState('PP4', false);
            }

            const activeCodes = [];
            if (this.criteriaState.get('PP4')?.selected) {
                activeCodes.push(`PP4_${this.criteriaState.get('PP4').strength} (+${this.criteriaState.get('PP4').pts}p)`);
            }
            if (this.criteriaState.get('PP1')?.selected) {
                activeCodes.push(`PP1_${this.criteriaState.get('PP1').strength} (+${this.criteriaState.get('PP1').pts}p)`);
            }

            if (activeCodes.length > 0) {
                this.showConflictToast(`✓ Criterios de Locus aplicados al veredicto final: ${activeCodes.join(' + ')} = ${fmt(tot)} pts.`);
            } else {
                this.showConflictToast('Evidencia de locus insuficiente (< +1.0 pt). Ningún criterio activado.');
            }
        }

        // Update badge in step 5 button
        const badgeTotal = document.getElementById('pp1BadgeTotal');
        const badgeCode  = document.getElementById('pp1BadgeCode');
        if (badgeTotal) badgeTotal.textContent = fmt(r.total);
        if (badgeCode) {
            const activeStr = [];
            if (this.criteriaState.get('PP4')?.selected) activeStr.push(`PP4_${this.criteriaState.get('PP4').strength}`);
            if (this.criteriaState.get('PP1')?.selected) activeStr.push(`PP1_${this.criteriaState.get('PP1').strength}`);
            if (this.criteriaState.get('BS4')?.selected) activeStr.push('BS4_Strong');
            badgeCode.textContent = activeStr.length > 0 ? activeStr.join(' + ') : 'Insuficiente';
        }

        // Sincronizar UI de la Torta ACMG
        this.renderChecklist();
        this.applyGuidedRules();
        this.updateCalculator();
        this.renderWheelSVG();

        this.closePP1Modal();
    }

    renderWheelSVG() {
        if (!this.dom.svg) return;
        const svg = this.dom.svg;
        svg.setAttribute('viewBox', '0 0 560 560');
        svg.innerHTML = '';

        const cx = 280, cy = 280, rOuter = 220, rInner = 95;
        let startAngle = -Math.PI / 2;
        const totalCriteria = ALL_CRITERIA.length;
        const anglePerCrit = (2 * Math.PI) / totalCriteria;

        let globalIndex = 0;

        ACMG_SECTORS.forEach(sector => {
            const sectorAngle = sector.criteria.length * anglePerCrit;
            const endAngle = startAngle + sectorAngle;

            const x1O = cx + rOuter * Math.cos(startAngle);
            const y1O = cy + rOuter * Math.sin(startAngle);
            const x2O = cx + rOuter * Math.cos(endAngle);
            const y2O = cy + rOuter * Math.sin(endAngle);

            const x1I = cx + rInner * Math.cos(startAngle);
            const y1I = cy + rInner * Math.sin(startAngle);
            const x2I = cx + rInner * Math.cos(endAngle);
            const y2I = cy + rInner * Math.sin(endAngle);

            const largeArc = sectorAngle > Math.PI ? 1 : 0;
            const dSector = `M ${x1I} ${y1I} L ${x1O} ${y1O} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2O} ${y2O} L ${x2I} ${y2I} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x1I} ${y1I} Z`;

            const pathSector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathSector.setAttribute('d', dSector);
            pathSector.setAttribute('fill', sector.color);
            pathSector.setAttribute('opacity', '0.10');
            pathSector.setAttribute('stroke', sector.color);
            pathSector.setAttribute('stroke-width', '1.5');
            svg.appendChild(pathSector);

            sector.criteria.forEach(crit => {
                const critAngle = startAngle + (globalIndex * anglePerCrit) + anglePerCrit / 2;
                const nodeR = (rOuter + rInner) / 2;
                const nx = cx + nodeR * Math.cos(critAngle);
                const ny = cy + nodeR * Math.sin(critAngle);

                const gNode = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                gNode.style.cursor = 'pointer';

                const state = this.criteriaState.get(crit.code);
                const isSelected = state && state.selected;

                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', nx);
                circle.setAttribute('cy', ny);
                circle.setAttribute('r', isSelected ? '19' : '15');
                circle.setAttribute('fill', isSelected ? sector.color : '#1e293b');
                circle.setAttribute('stroke', isSelected ? sector.color : '#475569');
                circle.setAttribute('stroke-width', isSelected ? '3' : '1.5');
                circle.setAttribute('opacity', isSelected ? '1.0' : '0.45');
                if (isSelected) {
                    circle.setAttribute('filter', 'drop-shadow(0px 0px 8px ' + sector.color + ')');
                }

                const textCode = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                textCode.setAttribute('x', nx);
                textCode.setAttribute('y', ny + 4);
                textCode.setAttribute('text-anchor', 'middle');
                textCode.setAttribute('fill', isSelected ? '#ffffff' : '#94a3b8');
                textCode.setAttribute('font-size', '9.5px');
                textCode.setAttribute('font-weight', '800');
                textCode.textContent = crit.code;

                gNode.appendChild(circle);
                gNode.appendChild(textCode);
                gNode.addEventListener('click', () => this.showCriterionInfo(crit, sector));
                svg.appendChild(gNode);

                globalIndex++;
            });

            startAngle = endAngle;
        });

        // Hub Central
        const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        centerCircle.setAttribute('cx', cx);
        centerCircle.setAttribute('cy', cy);
        centerCircle.setAttribute('r', rInner - 8);
        centerCircle.setAttribute('fill', '#0f172a');
        centerCircle.setAttribute('stroke', 'var(--neon-cyan)');
        centerCircle.setAttribute('stroke-width', '2');
        svg.appendChild(centerCircle);

        const centerText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        centerText.setAttribute('x', cx);
        centerText.setAttribute('y', cy - 4);
        centerText.setAttribute('text-anchor', 'middle');
        centerText.setAttribute('fill', 'var(--neon-cyan)');
        centerText.setAttribute('font-size', '14px');
        centerText.setAttribute('font-weight', '800');
        centerText.textContent = 'ACMG 2024';

        const centerSub = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        centerSub.setAttribute('x', cx);
        centerSub.setAttribute('y', cy + 16);
        centerSub.setAttribute('text-anchor', 'middle');
        centerSub.setAttribute('fill', '#94a3b8');
        centerSub.setAttribute('font-size', '10px');
        centerSub.textContent = 'CLINGEN ENGINE';

        svg.appendChild(centerText);
        svg.appendChild(centerSub);

        if (this.dom.legend) {
            this.dom.legend.innerHTML = ACMG_SECTORS.map(s => 
                `<div class="legend-item"><span class="legend-dot" style="background:${s.color}"></span><span>${s.name}</span></div>`
            ).join('');
        }
    }

    renderChecklist() {
        ACMG_SECTORS.forEach(sector => {
            const container = document.getElementById(`list-${sector.id}`);
            if (!container) return;
            container.innerHTML = '';

            sector.criteria.forEach(crit => {
                const state = this.criteriaState.get(crit.code);

                const card = document.createElement('div');
                card.className = `criterion-item-card ${crit.type} ${state.selected ? 'selected' : ''}`;
                card.dataset.code = crit.code;

                const top = document.createElement('div');
                top.className = 'crit-card-top';

                const left = document.createElement('div');
                left.className = 'crit-card-left';

                const badge = document.createElement('span');
                badge.className = `crit-code-badge ${crit.type === 'pathogenic' ? 'pathogenic' : 'benign'}`;
                const iconTag = crit.type === 'pathogenic' ? '<i class="fa-solid fa-triangle-exclamation" style="font-size:0.75rem"></i>' : '<i class="fa-solid fa-shield-halved" style="font-size:0.75rem"></i>';
                badge.innerHTML = `${iconTag} ${crit.code}`;

                const title = document.createElement('span');
                title.className = 'crit-title-text';

                if (crit.code === 'PP3' || crit.code === 'BP4') {
                    title.innerHTML = `${crit.title} <span style="font-size:0.75rem; color:var(--neon-purple); font-weight:700; margin-left:8px; cursor:pointer;" onclick="event.stopPropagation(); window.tortaApp.togglePP3Panel(true)"><i class="fa-solid fa-sliders"></i> (Calibrar In Silico)</span>`;
                } else {
                    title.textContent = crit.title;
                }

                left.appendChild(badge);
                left.appendChild(title);

                top.appendChild(left);

                // MOSTRAR SELECTOR DE FUERZA/PESO SOLO SI TIENE MÁS DE 1 FUERZA O PAPER DE REVISIÓN ESPECÍFICO
                if (crit.allowedStrengths && crit.allowedStrengths.length > 1) {
                    const select = document.createElement('select');
                    select.className = 'crit-strength-select';
                    select.innerHTML = crit.allowedStrengths.map(s => 
                        `<option value="${s.pts}:${s.strength}" ${s.strength === state.strength ? 'selected' : ''}>${s.label}</option>`
                    ).join('');

                    select.addEventListener('change', e => {
                        e.stopPropagation();
                        const [ptsStr, strengthStr] = e.target.value.split(':');
                        state.pts = parseInt(ptsStr, 10);
                        state.strength = strengthStr;
                        // Recalcular restricciones por si el cap PP3+PM1 cambia
                        this.applyGuidedRules();
                    });
                    top.appendChild(select);
                } else {
                    const singleBadge = document.createElement('span');
                    singleBadge.style.fontSize = '0.8rem';
                    singleBadge.style.fontWeight = '700';
                    singleBadge.style.color = 'var(--text-muted)';
                    singleBadge.textContent = `${state.pts > 0 ? '+' : ''}${state.pts}p (${state.strength})`;
                    top.appendChild(singleBadge);
                }

                card.appendChild(top);

                card.addEventListener('click', (e) => {
                    if (card.classList.contains('disabled-rule')) return;
                    if (e.target.tagName !== 'SELECT' && e.target.tagName !== 'OPTION') {
                        this.toggleCriterionSelect(crit.code);
                    }
                });

                container.appendChild(card);
            });
        });
    }

    bindEvents() {
        if (this.dom.predictorSelect) {
            this.dom.predictorSelect.addEventListener('change', () => {
                // Actualizar slider y rango cuando cambia el predictor
                this.updateSliderForPredictor();
            });
        }

        if (this.dom.revelSlider) {
            this.dom.revelSlider.addEventListener('input', e => {
                this.revelScore = parseFloat(e.target.value);
                if (this.dom.revelInput) this.dom.revelInput.value = this.revelScore.toFixed(3);
                this.renderChecklist();
                this.applyGuidedRules();
            });
        }

        if (this.dom.revelInput) {
            this.dom.revelInput.addEventListener('change', e => {
                let val = parseFloat(e.target.value);
                const cfg = PREDICTOR_CONFIG[this.selectedPredictor];
                if (isNaN(val)) val = cfg ? cfg.min + (cfg.max - cfg.min) / 2 : 0.500;
                this.revelScore = val;
                if (this.dom.revelSlider) this.dom.revelSlider.value = val;
                this.renderChecklist();
                this.applyGuidedRules();
            });
        }
    }

    // ─── TOAST VISUAL ─────────────────────────────────────────────────────────
    showConflictToast(message, type = 'warning') {
        const container = document.getElementById('conflictToastContainer');
        if (!container) return;

        const colors = {
            warning: { bg: 'rgba(251,191,36,0.15)', border: 'rgba(251,191,36,0.5)', icon: '⚠️', text: '#fbbf24' },
            info:    { bg: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.5)', icon: 'ℹ️', text: '#818cf8' },
            block:   { bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.5)', icon: '🚫', text: '#f87171' },
        };
        const c = colors[type] || colors.warning;

        const toast = document.createElement('div');
        toast.style.cssText = `
            background: ${c.bg}; border: 1px solid ${c.border}; color: ${c.text};
            padding: 10px 16px; border-radius: 12px; font-size: 0.8rem; font-weight: 600;
            display: flex; align-items: flex-start; gap: 8px; pointer-events: none;
            animation: fadeInUp 0.3s ease; max-width: 100%; box-shadow: 0 4px 24px rgba(0,0,0,0.4);
            backdrop-filter: blur(10px); line-height: 1.4;
        `;
        toast.innerHTML = `<span style="flex-shrink:0; font-size:1rem">${c.icon}</span><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s';
            setTimeout(() => toast.remove(), 500);
        }, 4500);
    }

    // ─── REGLAS DE CONSECUENCIA MOLECULAR ─────────────────────────────────────
    applyGuidedRules() {
        const mc = this.molConsequence;
        const getSel = (code) => this.criteriaState.get(code)?.selected;

        const cards = document.querySelectorAll('.criterion-item-card');
        cards.forEach(card => {
            const code = card.dataset.code;
            let disabled = false;
            let reason = '';

            // ── PVS1 solo disponible para LOF/Truncante
            if (code === 'PVS1' && mc !== 'lof') {
                disabled = true; reason = 'PVS1 solo aplica a variantes truncantes / LOF';
            }

            // ── Criterios solo missense
            if (['PP2', 'BP1', 'PM5', 'PS1'].includes(code) && mc !== 'missense') {
                disabled = true; reason = `${code} aplica solo a variantes missense`;
            }

            // ── PP3 / BP4: disponible en missense y splicing (LOF con predictor de splicing como SpliceAI)
            if (['PP3', 'BP4'].includes(code) && mc !== 'missense' && mc !== 'lof') {
                disabled = true; reason = `${code} aplica a missense o variantes de splicing`;
            }

            // ── PM4 solo para inframe / stop-loss (mutuamente excluyente con PVS1)
            if (code === 'PM4' && mc !== 'inframe') {
                disabled = true; reason = 'PM4 aplica solo a indels inframe / stop-loss';
            }

            // ── PM3: solo recesivo
            if (code === 'PM3' && this.inheritanceModel === 'AD') {
                disabled = true; reason = 'PM3 no aplica en herencia Autosómica Dominante';
            }

            // ── BP1: solo gen LOF-only con variante missense — la regla inversa a PP2
            // BP1 disponible en missense dentro de gen LOF; no aplica a LOF/sinonima/inframe
            if (code === 'BP1' && mc !== 'missense') {
                disabled = true; reason = 'BP1 aplica solo a missense en genes donde el mecanismo es solo LOF';
            }

            // ── Restricciones dinámicas por criterios seleccionados
            // PVS1 seleccionado → bloquear PP3, PM1, PP2, PS1, PM4
            if (!disabled && getSel('PVS1')) {
                if (['PP3', 'PM1', 'PP2', 'PS1', 'PM4'].includes(code)) {
                    disabled = true;
                    const reasons = { PP3:'PP3 es redundante con PVS1 (PVS1 ya implica predicción de LOF)', PM1:'PM1 no aplica cuando PVS1 ya codifica "LOF en región crítica"', PP2:'PP2 aplica solo a missense; PVS1 es LOF', PS1:'PS1 diseñado para missense recurrente, no LOF', PM4:'PM4 y PVS1 son mutuamente excluyentes por definición de variante' };
                    reason = reasons[code] || `${code} es incompatible con PVS1`;
                }
            }

            // PS1 seleccionado → bloquear PM5, PM1, PP3 (misma posición)
            if (!disabled && getSel('PS1')) {
                if (['PM5', 'PM1', 'PP3'].includes(code)) {
                    disabled = true;
                    const reasons = { PM5:'PS1 > PM5: La misma variante exacta supera a distinto cambio en mismo residuo', PM1:'PS1 > PM1 > PP3: Jerarquía de evidencia clínica', PP3:'PP3 es redundante con PS1 (evidencia clínica directa supera predicción)' };
                    reason = reasons[code] || '';
                }
            }

            // PM5 seleccionado → bloquear PM1 (PM5 ⊂ PM1, usar el más específico)
            if (!disabled && !getSel('PS1') && getSel('PM5') && code === 'PM1') {
                disabled = true;
                reason = 'PM5 ⊂ PM1: Usar PM5 (más específico). PM1 queda implícito.';
            }

            // BA1 o BS1 seleccionado → bloquear PM2_Supporting
            if (!disabled && (getSel('BA1') || getSel('BS1')) && code === 'PM2_Supporting') {
                disabled = true;
                reason = 'BA1 / BS1 es incompatible con PM2: Frecuencia excluye ausencia significativa';
            }

            // BA1 seleccionado → bloquear BS1 y BS2 (BA1 es stand-alone, excluye criterios de frecuencia parciales)
            if (!disabled && getSel('BA1') && ['BS1', 'BS2'].includes(code)) {
                disabled = true;
                reason = 'BA1 es stand-alone: clasifica directamente como Benigno. BS1/BS2 son innecesarios.';
            }

            // BS1 seleccionado → bloquear BA1 (usa BA1 o BS1, no ambos)
            if (!disabled && getSel('BS1') && code === 'BA1') {
                disabled = true;
                reason = 'BA1 y BS1 son criterios mutuamente excluyentes de frecuencia; usar solo el más apropiado';
            }

            // BS1 seleccionado → bloquear PS4 (mutuamente excluyentes por frecuencia)
            if (!disabled && getSel('BS1') && code === 'PS4') {
                disabled = true;
                reason = 'BS1 (freq. esperada benigno) y PS4 (enriquecimiento en casos) son mutuamente excluyentes';
            }

            // PP2 seleccionado → bloquear BP1 (evidencia opuesta mismo mecanismo)
            if (!disabled && getSel('PP2') && code === 'BP1') {
                disabled = true;
                reason = 'PP2 y BP1 son evidencia opuesta sobre el mismo mecanismo de gen';
            }

            const state = this.criteriaState.get(code);
            if (disabled) {
                card.classList.add('disabled-rule');
                card.dataset.disabledReason = reason;
                if (state?.selected) {
                    state.selected = false;
                    card.classList.remove('selected');
                }
            } else {
                card.classList.remove('disabled-rule');
                card.dataset.disabledReason = '';
            }
        });

        this.applyMutualExclusions();
        this.updateCalculator();
    }

    // ─── EXCLUSIONES MUTUAS CON TOASTS ────────────────────────────────────────
    applyMutualExclusions() {
        const getSel = (code) => this.criteriaState.get(code)?.selected;
        const deselect = (code, reason) => {
            const state = this.criteriaState.get(code);
            if (state?.selected) {
                state.selected = false;
                const card = document.querySelector(`.criterion-item-card[data-code="${code}"]`);
                if (card) {
                    card.classList.remove('selected');
                }
                if (reason) this.showConflictToast(reason, 'block');
            }
        };

        // 1. REGLAS PVS1 (LOF REINA)
        if (getSel('PVS1')) {
            deselect('PP3',  '🚫 PVS1 anula PP3 — PVS1 ya implica predicción de LOF; PP3 es redundante (PP3-BP4.pdf §24)');
            deselect('PM1',  '🚫 PVS1 anula PM1 — PVS1 ya codifica "LOF en región crítica"; no sumar PM1 (ClinGen SVI 2023)');
            deselect('PP2',  '🚫 PVS1 anula PP2 — PP2 aplica solo a missense; PVS1 = LOF (ACMG_2015 §25)');
            deselect('PS1',  '🚫 PVS1 anula PS1 — PS1 diseñado para missense recurrente, no para variantes LOF');
            deselect('PM4',  '🚫 PVS1 y PM4 son mutuamente excluyentes por definición de tipo de variante');
        }

        // 2. JERARQUÍA CLÍNICA EN RESIDUO: PS1 > PM5 > PM1 > PP3
        if (getSel('PS1')) {
            deselect('PM5', '⚠️ PS1 > PM5: misma variante exacta supera a distinto cambio en el residuo');
            deselect('PM1', '⚠️ PS1 > PM1: jerarquía clínica; PM1 queda implícito en PS1');
            deselect('PP3', '⚠️ PS1 anula PP3: evidencia clínica directa supera predicción in silico');
        } else if (getSel('PM5')) {
            deselect('PM1', '⚠️ PM5 ⊂ PM1: usar PM5 (más específico); PM1 queda implícito en la jerarquía del residuo');
        }

        // 3. PP3 + PM1 CAP DURO ≤ 4 pts (informar pero NO desactivar — se maneja en updateCalculator)
        const pm1Pts  = getSel('PM1') ? (this.criteriaState.get('PM1')?.pts || 0) : 0;
        const pp3Pts  = getSel('PP3') ? (this.criteriaState.get('PP3')?.pts || 0) : 0;
        if (pm1Pts > 0 && pp3Pts > 0 && (pm1Pts + pp3Pts) > 4) {
            this.showConflictToast(
                `⚠️ PP3 (${pp3Pts > 0 ? '+' : ''}${pp3Pts}p) + PM1 (${pm1Pts > 0 ? '+' : ''}${pm1Pts}p) = ${pm1Pts + pp3Pts}p excede el techo de 4p (Strong). PP3 se recortará automáticamente al calcular. (PP3-BP4.pdf §25)`,
                'warning'
            );
        }

        // 4. EXCLUSIONES BÁSICAS DE PARES OPUESTOS
        if (getSel('PS2') && getSel('PM6')) deselect('PM6', '⚠️ PS2 (De Novo confirmado) supera a PM6 (De Novo asumido); usar solo PS2');
        if (getSel('PS3') && getSel('BS3')) deselect('BS3', '🚫 PS3 y BS3 son evidencias funcionales opuestas; elegir la de mayor validez clínica');
        if (getSel('PP3') && getSel('BP4')) deselect('BP4', '🚫 PP3 (dañino) y BP4 (benigno) son predicciones opuestas; aplicar solo una');
        if (getSel('PP2') && getSel('BP1')) deselect('BP1', '🚫 PP2 y BP1 son evidencias opuestas sobre el mismo mecanismo del gen');
        if (getSel('PM3') && getSel('BP2')) deselect('BP2', '⚠️ PM3 y BP2 pueden ser inconsistentes; revisar datos de herencia');
        if (getSel('PP1') && getSel('BS4')) deselect('BS4', '🚫 PP1 (cosegregación) y BS4 (no segregación) son opuestos; usar el que corresponda a los datos');
        if ((getSel('BA1') || getSel('BS1')) && getSel('PM2_Supporting')) {
            deselect('PM2_Supporting', '🚫 BA1/BS1 es incompatible con PM2: la frecuencia excluye la ausencia significativa en población');
        }
        if (getSel('BA1') && getSel('BS1')) deselect('BS1', '🚫 BA1 es stand-alone. BS1 es innecesario cuando BA1 aplica.');
        if (getSel('BA1') && getSel('BS2')) deselect('BS2', '🚫 BA1 es stand-alone. BS2 es innecesario cuando BA1 aplica.');
        if (getSel('BS1') && getSel('PS4')) {
            deselect('PS4', '🚫 BS1 (frecuencia benigna) y PS4 (enriquecimiento en casos) son mutuamente excluyentes');
        }
    }

    showCriterionInfo(crit, sector) {
        if (!this.dom.infoCode) return;
        const state = this.criteriaState.get(crit.code);
        this.dom.infoCode.textContent = `${crit.code} (${state.pts > 0 ? '+' + state.pts : state.pts} pts)`;
        this.dom.infoCategory.textContent = `${sector.name}`;
        if (this.dom.infoTitleFull) this.dom.infoTitleFull.textContent = crit.title;
        this.dom.infoDesc.textContent = crit.desc;
        this.dom.infoPapers.innerHTML = crit.papers.map(p => {
            const meta = PAPER_METADATA_MAP[p.name] || {};
            const url = meta.doi || `papers/${p.name}`;
            const isDoi = url.startsWith('http');
            const linkText = isDoi ? (url.includes('doi') || url.includes('10.') ? 'Ver DOI / Publicación Oficial' : 'Ver Fuente Oficial') : p.label;
            return `<a href="${url}" target="_blank" class="paper-link" style="margin-right:10px; margin-bottom:6px; display:inline-flex; align-items:center; gap:6px;"><i class="fa-solid ${isDoi ? 'fa-arrow-up-right-from-square' : 'fa-file-pdf'}"></i> ${p.label} (${linkText})</a>`;
        }).join('');
    }

    toggleCriterionSelect(code) {
        const state = this.criteriaState.get(code);
        if (!state) return;

        const card = document.querySelector(`.criterion-item-card[data-code="${code}"]`);
        if (card && card.classList.contains('disabled-rule')) return;

        state.selected = !state.selected;

        if (card) {
            if (state.selected) card.classList.add('selected');
            else card.classList.remove('selected');
        }

        // Siempre re-evaluar todas las restricciones dinámicas (PM3, BA1, etc.)
        this.applyGuidedRules();
    }

    updateCalculator() {
        this.revelEvaluation = evaluatePredictorScore(this.selectedPredictor, this.revelScore);

        if (this.dom.revelGrade) this.dom.revelGrade.textContent = this.revelEvaluation.grade;
        if (this.dom.revelPoints) {
            const pts = this.revelEvaluation.pts;
            this.dom.revelPoints.textContent = pts !== 0 ? (pts > 0 ? `+${pts} pts` : `${pts} pts`) : '0 pts';
        }

        let total = 0;
        let hasBA1 = false;
        const activeTags = [];

        // REGLA PP3 + PM1 <= 4 pts (Strong)
        let pm1Pts = this.criteriaState.get('PM1')?.selected ? this.criteriaState.get('PM1').pts : 0;
        let pp3Pts = this.criteriaState.get('PP3')?.selected ? this.criteriaState.get('PP3').pts : 0;

        if (this.molConsequence === 'missense' && !this.criteriaState.get('PP3')?.selected && !this.criteriaState.get('BP4')?.selected && this.revelEvaluation.pts > 0) {
            pp3Pts = this.revelEvaluation.pts;
        }

        let adjustedPP3Pts = pp3Pts;
        let adjustedPM1Pts = pm1Pts;
        let capWarning = false;

        if (pm1Pts > 0 && pp3Pts > 0 && (pm1Pts + pp3Pts > 4)) {
            adjustedPP3Pts = Math.max(1, 4 - pm1Pts);
            capWarning = true;
        }

        // Mostrar/ocultar banner inline de cap PP3+PM1
        const capBanner = document.getElementById('capPP3PM1Banner');
        const capDetail = document.getElementById('capPP3PM1Detail');
        if (capBanner) {
            if (capWarning) {
                capBanner.style.display = 'block';
                if (capDetail) {
                    capDetail.textContent = `PP3 (${pp3Pts > 0 ? '+' : ''}${pp3Pts}p) + PM1 (+${pm1Pts}p) = +${pm1Pts + pp3Pts}p → Cap aplicado: PP3 reducido a +${adjustedPP3Pts}p. Total efectivo: +${adjustedPP3Pts + pm1Pts}p.`;
                }
            } else {
                capBanner.style.display = 'none';
            }
        }

        this.criteriaState.forEach((state, code) => {
            if (state.selected) {
                if (code === 'BA1') hasBA1 = true;

                let effectivePts = state.pts;
                if (code === 'PP3' && capWarning) effectivePts = adjustedPP3Pts;
                if (code === 'PM1' && capWarning && !this.criteriaState.get('PP3')?.selected) effectivePts = adjustedPM1Pts;

                total += effectivePts;

                let labelTag = code;
                if ((code === 'PP3' || code === 'BP4') && this.molConsequence === 'missense' && this.revelEvaluation.code) {
                    labelTag = `${code} [${this.selectedPredictor} = ${this.revelScore.toFixed(3)}]`;
                }

                activeTags.push({ code: labelTag, pts: effectivePts, strength: state.strength });
            }
        });

        if (this.molConsequence === 'missense' && this.revelEvaluation.code && !this.criteriaState.get('PP3')?.selected && !this.criteriaState.get('BP4')?.selected) {
            if (this.revelEvaluation.pts !== 0) {
                let effectiveInSilicoPts = this.revelEvaluation.pts;
                if (effectiveInSilicoPts > 0 && pm1Pts > 0 && (pm1Pts + effectiveInSilicoPts > 4)) {
                    effectiveInSilicoPts = Math.max(1, 4 - pm1Pts);
                }
                total += effectiveInSilicoPts;
                activeTags.push({ 
                    code: `${this.revelEvaluation.code} [${this.selectedPredictor} = ${this.revelScore.toFixed(3)}]`, 
                    pts: effectiveInSilicoPts,
                    strength: this.revelEvaluation.strength 
                });
            }
        }

        const verdictObj = calculateBayesianVerdict(total, hasBA1);

        if (this.dom.verdictText) {
            this.dom.verdictText.textContent = verdictObj.verdict;
            this.dom.verdictText.className = 'verdict-result-text ' + verdictObj.class;
        }

        if (this.dom.totalPointsEl) {
            this.dom.totalPointsEl.textContent = `${total > 0 ? '+' : ''}${total} pts`;
        }

        if (this.dom.posteriorProbEl) {
            this.dom.posteriorProbEl.textContent = verdictObj.prob;
        }

        if (this.dom.needle) {
            const clampScore = Math.max(-10, Math.min(12, total));
            const angle = ((clampScore + 10) / 22) * 180 - 90;
            this.dom.needle.style.transform = `rotate(${angle}deg)`;
        }

        if (this.dom.activeTagsContainer) {
            this.dom.activeTagsContainer.innerHTML = activeTags.length > 0 
                ? activeTags.map(t => `<span class="active-tag">${t.code} (${t.pts > 0 ? '+' + t.pts : t.pts}p)</span>`).join('')
                : '<span style="color:var(--text-muted); font-size:0.8rem">Sin criterios</span>';
        }

        this.currentActiveTags = activeTags;
        this.currentVerdictObj = verdictObj;
        this.currentTotal = total;

        if (this.bayesPlotter) {
            this.bayesPlotter.render(activeTags, hasBA1);
        }

        if (document.getElementById('step7') && !document.getElementById('step7').classList.contains('hidden')) {
            this.renderWheelSVG();
        }
    }

    setPlotTheme(theme) {
        if (this.bayesPlotter) {
            this.bayesPlotter.setTheme(theme);
        }
        const darkBtn = document.getElementById('themeDarkBtn');
        const lightBtn = document.getElementById('themeLightBtn');
        if (darkBtn && lightBtn) {
            darkBtn.classList.toggle('active', theme === 'dark');
            lightBtn.classList.toggle('active', theme === 'light');
        }
    }

    downloadBayesPlot() {
        const gene = document.getElementById('inputGene')?.value.trim() || 'ACMG';
        const hgvs = document.getElementById('inputHGVS')?.value.trim() || 'Bayes';
        const filename = `ACMG_Bayes_${gene}_${hgvs}.png`.replace(/[^a-zA-Z0-9_\-\.]/g, '_');
        if (this.bayesPlotter) {
            this.bayesPlotter.downloadPNG(filename);
        }
    }

    openReportModal() {
        const modal = document.getElementById('reportModal');
        if (!modal) return;

        const geneVal = document.getElementById('inputGene')?.value.trim() || 'No especificado';
        const hgvsVal = document.getElementById('inputHGVS')?.value.trim() || 'No especificado';
        const inhVal = document.getElementById('selectInheritance')?.value || 'AD';
        
        document.getElementById('repGene').textContent = geneVal;
        document.getElementById('repHGVS').textContent = hgvsVal;
        document.getElementById('repInheritance').textContent = inhVal;
        document.getElementById('repDate').textContent = new Date().toLocaleDateString('es-ES');
        document.getElementById('repConsequence').textContent = (this.molConsequence || 'MISSENSE').toUpperCase();
        document.getElementById('repPoints').textContent = `${this.currentTotal > 0 ? '+' : ''}${this.currentTotal || 0} pts`;

        const body = document.getElementById('repTableBody');
        if (!this.currentActiveTags || this.currentActiveTags.length === 0) {
            body.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#94a3b8">No se han seleccionado criterios de evidencia.</td></tr>';
        } else {
            body.innerHTML = this.currentActiveTags.map(t => {
                const cleanCode = t.code.split(' ')[0];
                const critObj = ALL_CRITERIA.find(c => c.code === cleanCode);
                let desc = critObj ? critObj.title : 'Evaluación In Silico';

                if (cleanCode === 'PP3' || cleanCode === 'BP4' || t.code.includes(this.selectedPredictor)) {
                    desc += ` (Predictor Evaluado: ${this.selectedPredictor} = ${this.revelScore.toFixed(3)})`;
                }

                return `
                    <tr>
                        <td><strong>${t.code}</strong></td>
                        <td>${desc}</td>
                        <td>${t.strength}</td>
                        <td><strong>${t.pts > 0 ? '+' : ''}${t.pts} pts</strong></td>
                    </tr>
                `;
            }).join('');
        }

        const badge = document.getElementById('repVerdictBadge');
        if (this.currentVerdictObj) {
            badge.textContent = this.currentVerdictObj.verdict;
            badge.className = 'report-verdict-badge ' + (
                this.currentVerdictObj.class.includes('pathogenic') ? 'badge-pathogenic' :
                this.currentVerdictObj.class.includes('likely-pathogenic') ? 'badge-likely-pathogenic' :
                this.currentVerdictObj.class.includes('benign') ? 'badge-benign' :
                this.currentVerdictObj.class.includes('likely-benign') ? 'badge-likely-benign' : 'badge-vus'
            );
            document.getElementById('repProb').textContent = this.currentVerdictObj.prob;
        }

        const plotImg = document.getElementById('repBayesPlotImg');
        if (plotImg && this.bayesPlotter) {
            plotImg.src = this.bayesPlotter.toDataURL('light'); // Siempre tema blanco para el informe imprimible / PDF
        }

        modal.classList.add('active');
    }

    closeReportModal() {
        const modal = document.getElementById('reportModal');
        if (modal) modal.classList.remove('active');
    }
}

function initTortaApp() {
    if (!window.tortaApp) {
        window.tortaApp = new TortaApp();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTortaApp);
} else {
    initTortaApp();
}
