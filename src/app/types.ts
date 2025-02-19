import { REPORT_OPTS } from "@/utils/constants";

export type FormValues = {
  reportType: REPORT_OPTS.AFVAL | REPORT_OPTS.BENCHMARK | REPORT_OPTS.CSRD;
};