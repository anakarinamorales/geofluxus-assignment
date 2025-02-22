import type { ItemType } from 'antd/es/menu/interface';
import type { Reports } from '@/components/Report/types';

export enum REPORT_TYPES {
    AFVAL = 'afval',
    BENCHMARK = 'benchmark',
    CSRD = 'csrd',
}

export enum ANALYSIS_TYPES {
    MATERIALS = 'materialen',
    TRENDS = 'trends-afvalproductie',
    WASTE_PROCESSING_VS_NATIONAL = 'afvalverwerking-in-vergelijking-met-landelijke-praktijken',
}

export const selectReportOptions = [
    { value: REPORT_TYPES.AFVAL, label: 'Afval rapport' },
    { value: REPORT_TYPES.BENCHMARK, label: 'Benchmark rapport' },
    { value: REPORT_TYPES.CSRD, label: 'CSRD rapport' },
];

export type ReportFormValues = {
    reportType: REPORT_TYPES.AFVAL | REPORT_TYPES.BENCHMARK | REPORT_TYPES.CSRD;
};

export enum CONTAINER_THEMES {
    LIGHT,
    GREY1,
    GREY2,
    GREY3,
}

export enum CARD_THEMES {
    DEFAULT,
    GREY,
}

// DATA

// Menu items
export const menuItems = [
    { label: 'GEOFLUXUS' },
    { label: 'Home' },
    { label: 'Reporting' },
    { label: 'Dashboard' },
    { label: 'Kaart' },
    { label: 'Verwerkingsmethoden' },
    { label: 'Alternatieve verwerkers' },
    { label: 'Plan nieuwe stromen' },
    { label: 'Data' },
    { label: 'View beheer' },
    { label: 'Company' },
    { label: 'Taal' },
    { label: 'Name Lastname' },
] as ItemType[];

export const reports = {
    afval: {
        title: 'Afval',
        description:
            'In dit afval rapport vindt u een overzicht van alle afvalstromen, de bijbehorende hoeveelheden afval en de gebruikte verwerkingsmethodes. Daarnaast wordt aangegeven wie het afval heeft verwerkt en welke materialen er in het afval aanwezig zijn.',
        analysis: {
            [ANALYSIS_TYPES.TRENDS]: {
                firstMeasureYear: 2018,
                title: 'Trends afvalproductie',
                description:
                    'Sinds begin 2016 stijgt de afvalproductie van uw organisatie gemiddeld met 5,14% per jaar. Bovendien is er in Q4 2021 sinds vorig kwartaal een vermindering van 51,82% te zien in vergelijking met hetzelfde kwartaal vorig jaar.',
                statistics: {
                    average: -1.1,
                    '2022': {
                        q1: {},
                        q2: {},
                        q3: {},
                        q4: 0.5,
                    },
                    renewableMaterialQtd: 12.7,
                },
            },
            [ANALYSIS_TYPES.WASTE_PROCESSING_VS_NATIONAL]: {
                title: 'Afvalverwerking in vergelijking met landelijke-praktijken',
                description:
                    'In de onderstaande tabel analyseren we de toegepaste verwerkingsmethoden per afvalsoort en vergelijken we deze met de meest gebruikte methoden op nationaal niveau. Hierbij categoriseren we elke verwerkingsmethode als beter, gelijk aan, of minder effectief dan de landelijke standaard. Indien de verwerkingsmethode onbekend is, wordt deze apart vermeld. Dit biedt inzicht in hoe onze verwerkingspraktijken zich verhouden tot de gangbare methoden en waar mogelijke verbeterpunten liggen.',
                analysis: {
                    '08': {
                        id: ' 08',
                        title: 'Afval van bereiding, formulering, levering en gebruik (BFLG) van coatings (verf, lak en email), lijm, kit en drukinkt',
                        data: {
                            '080111': {
                                title: 'Afval van verf en lak dat organische oplosmiddelen of andere gevaarlijke stoffen bevat',
                                best: 91.5,
                                average: 0,
                                under: 0,
                                unknown: 8.5,
                            },
                            '080314': {
                                title: 'Inktslib dat gevaarlijke stoffen bevat',
                                best: 100,
                                average: 0,
                                under: 0,
                                unknown: 0,
                            },
                        },
                    },
                },
            },
            [ANALYSIS_TYPES.MATERIALS]: {
                title: 'Materialen',
                description: [
                    "De Rijksoverheid heeft plannen voor de transitie naar een circulaire economie geformuleerd in 5 transitieagenda's (TA's) die verschillende economische sectoren en ketens behelzen:1) Biomassa en Voedsel,2) Kunststof,3) Maakindustrie,4) Bouw,5) Consumptiegoederen.",
                    "In vergelijking met 2019 zijn de afvalstromen in de TAs Biomassa & Voedsel en Consumptiegoederen licht gedaald, daarentegen zijn de TAs 'onbekend' en Bouw toegenomen. Hoewel de biomassa- en voedselsectoren klein lijken in vergelijking met de anderen, genereren ze aanzienlijke negatieve effecten op het gebied van landgebruik, broeikasgasemissies en degradatie van land en water.",
                ],
            },
        },
    },
    benchmark: {
        title: 'Benchmark',
        description:
            'In dit benchmark rapport vindt u een overzicht van de huidige afvalverwerkingsmethoden en hoe deze zich verhouden tot zowel nationale standaarden als best practices. Door middel van grafieken en tabellen analyseren we de verwerkingsmethoden per afvalsoort en identificeren we waar verbeteringen mogelijk zijn en waar al goed gepresteerd wordt.',
        firstMeasureYear: 2018,
        analysis: {
            [ANALYSIS_TYPES.TRENDS]: {
                title: 'Trends afvalproductie',
                description:
                    'Sinds begin 2016 stijgt de afvalproductie van uw organisatie gemiddeld met 5,14% per jaar. Bovendien is er in Q4 2021 sinds vorig kwartaal een vermindering van 51,82% te zien in vergelijking met hetzelfde kwartaal vorig jaar.',
                statistics: {
                    average: -1.1,
                    '2022': {
                        q1: {},
                        q2: {},
                        q3: {},
                        q4: 0.5,
                    },
                    renewableMaterialQtd: 12.7,
                },
            },
            [ANALYSIS_TYPES.WASTE_PROCESSING_VS_NATIONAL]: {
                title: 'Afvalverwerking in vergelijking met landelijke-praktijken',
                description:
                    'In de onderstaande tabel analyseren we de toegepaste verwerkingsmethoden per afvalsoort en vergelijken we deze met de meest gebruikte methoden op nationaal niveau. Hierbij categoriseren we elke verwerkingsmethode als beter, gelijk aan, of minder effectief dan de landelijke standaard. Indien de verwerkingsmethode onbekend is, wordt deze apart vermeld. Dit biedt inzicht in hoe onze verwerkingspraktijken zich verhouden tot de gangbare methoden en waar mogelijke verbeterpunten liggen.',
                analysis: {
                    '08': {
                        id: ' 08',
                        title: 'Afval van bereiding, formulering, levering en gebruik (BFLG) van coatings (verf, lak en email), lijm, kit en drukinkt',
                        data: {
                            '080111': {
                                title: 'Afval van verf en lak dat organische oplosmiddelen of andere gevaarlijke stoffen bevat',
                                best: 91.5,
                                average: 0,
                                under: 0,
                                unknown: 8.5,
                            },
                            '080314': {
                                title: 'Inktslib dat gevaarlijke stoffen bevat',
                                best: 100,
                                average: 0,
                                under: 0,
                                unknown: 0,
                            },
                        },
                    },
                },
            },
            [ANALYSIS_TYPES.MATERIALS]: {
                title: 'Materialen',
                description: [
                    "De Rijksoverheid heeft plannen voor de transitie naar een circulaire economie geformuleerd in 5 transitieagenda's (TA's) die verschillende economische sectoren en ketens behelzen:1) Biomassa en Voedsel,2) Kunststof,3) Maakindustrie,4) Bouw,5) Consumptiegoederen.",
                    "In vergelijking met 2019 zijn de afvalstromen in de TAs Biomassa & Voedsel en Consumptiegoederen licht gedaald, daarentegen zijn de TAs 'onbekend' en Bouw toegenomen. Hoewel de biomassa- en voedselsectoren klein lijken in vergelijking met de anderen, genereren ze aanzienlijke negatieve effecten op het gebied van landgebruik, broeikasgasemissies en degradatie van land en water.",
                ],
            },
        },
    },
    csrd: {
        title: 'CSRD',
        description:
            'Dit rapport biedt een uitgebreid overzicht van verschillende aspecten van afvalbeheer zoals gevraagd in het CSRD. Het omvat een gedetailleerd overzicht van de totale afvalcijfers, gebruikte verwerkingsmethodes, samenstelling van het afval, en de aanwezige materialen in het afval. Elk hoofdstuk biedt waardevolle inzichten in de omvang, verwerking en inhoud van afvalstromen, essentieel voor het optimaliseren van duurzaam afvalbeheer.',
        firstMeasureYear: 2018,
        analysis: {
            [ANALYSIS_TYPES.TRENDS]: {
                title: 'Trends afvalproductie',
                description:
                    'Sinds begin 2016 stijgt de afvalproductie van uw organisatie gemiddeld met 5,14% per jaar. Bovendien is er in Q4 2021 sinds vorig kwartaal een vermindering van 51,82% te zien in vergelijking met hetzelfde kwartaal vorig jaar.',
                statistics: {
                    average: -1.1,
                    '2022': {
                        q1: {},
                        q2: {},
                        q3: {},
                        q4: 0.5,
                    },
                    renewableMaterialQtd: 12.7,
                },
            },
            [ANALYSIS_TYPES.WASTE_PROCESSING_VS_NATIONAL]: {
                title: 'Afvalverwerking in vergelijking met landelijke-praktijken',
                description:
                    'In de onderstaande tabel analyseren we de toegepaste verwerkingsmethoden per afvalsoort en vergelijken we deze met de meest gebruikte methoden op nationaal niveau. Hierbij categoriseren we elke verwerkingsmethode als beter, gelijk aan, of minder effectief dan de landelijke standaard. Indien de verwerkingsmethode onbekend is, wordt deze apart vermeld. Dit biedt inzicht in hoe onze verwerkingspraktijken zich verhouden tot de gangbare methoden en waar mogelijke verbeterpunten liggen.',
                analysis: {
                    '08': {
                        id: ' 08',
                        title: 'Afval van bereiding, formulering, levering en gebruik (BFLG) van coatings (verf, lak en email), lijm, kit en drukinkt',
                        data: {
                            '080111': {
                                title: 'Afval van verf en lak dat organische oplosmiddelen of andere gevaarlijke stoffen bevat',
                                best: 91.5,
                                average: 0,
                                under: 0,
                                unknown: 8.5,
                            },
                            '080314': {
                                title: 'Inktslib dat gevaarlijke stoffen bevat',
                                best: 100,
                                average: 0,
                                under: 0,
                                unknown: 0,
                            },
                        },
                    },
                },
            },
            [ANALYSIS_TYPES.MATERIALS]: {
                title: 'Materialen',
                description: [
                    "De Rijksoverheid heeft plannen voor de transitie naar een circulaire economie geformuleerd in 5 transitieagenda's (TA's) die verschillende economische sectoren en ketens behelzen:1) Biomassa en Voedsel,2) Kunststof,3) Maakindustrie,4) Bouw,5) Consumptiegoederen.",
                    "In vergelijking met 2019 zijn de afvalstromen in de TAs Biomassa & Voedsel en Consumptiegoederen licht gedaald, daarentegen zijn de TAs 'onbekend' en Bouw toegenomen. Hoewel de biomassa- en voedselsectoren klein lijken in vergelijking met de anderen, genereren ze aanzienlijke negatieve effecten op het gebied van landgebruik, broeikasgasemissies en degradatie van land en water.",
                ],
            },
        },
    },
} as unknown as Reports;
