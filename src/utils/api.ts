import type { ReportData } from '@/components/Report/types';
import { REPORT_TYPES, reports } from './constants';

// This is going to be replaced by API call later on
export default function getReportByType(type?: REPORT_TYPES): ReportData {
    if (type) {
        return reports?.[type];
    }

    return {} as ReportData;
}
