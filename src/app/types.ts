import { REPORT_TYPES } from '@/utils/constants';

export type FormValues = {
    reportType: REPORT_TYPES.AFVAL | REPORT_TYPES.BENCHMARK | REPORT_TYPES.CSRD;
};
