import { LoanDecisionProcessResult, LoanRequest } from './types';
import { http } from './HttpClient';

export const LoanServiceClient = {
  applyLoan: (
    loanRequest: LoanRequest,
  ): Promise<LoanDecisionProcessResult> => http.post({
    url: '/loan',
    data: loanRequest,
  }),
};
