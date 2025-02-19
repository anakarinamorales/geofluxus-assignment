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
