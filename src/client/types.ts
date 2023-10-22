export interface LoanRequest {
  customerPersonalCode: string;
  loanPeriodInMonths: number;
  loanAmount: number;
}

export interface LoanDecisionProcessResult {
  decision: Result;
  details: LoanLimitDecisionDetails;
}

export interface LoanLimitDecisionDetails {
  approvedLimit: number;
  approvedPeriod: string;
}

export enum Result {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}
