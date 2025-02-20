import { ItemType } from 'antd/es/menu/interface';

export enum REPORT_OPTS {
    AFVAL = 'afval',
    BENCHMARK = 'benchmark',
    CSRD = 'csrd',
}

export const reportOptions = [
    { value: REPORT_OPTS.AFVAL, label: 'Afval rapport' },
    { value: REPORT_OPTS.BENCHMARK, label: 'Benchmark rapport' },
    { value: REPORT_OPTS.CSRD, label: 'CSRD rapport' },
];

export type ReportFormValues = {
    reportType: REPORT_OPTS.AFVAL | REPORT_OPTS.BENCHMARK | REPORT_OPTS.CSRD;
};

export enum CONTAINER_THEMES {
    LIGHT,
    GREY1,
    GREY2,
    GREY3,
}

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
