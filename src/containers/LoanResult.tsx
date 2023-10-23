import { ChronoUnit, Period } from '@js-joda/core';
import { LoanDecisionProcessResult, Result } from '../client/types';
import { Button, ButtonTheme, ButtonType } from '../components/button/Button';

export interface LoanResultProps {
  loanResult?: LoanDecisionProcessResult;
}

function LoanResult({ loanResult }: LoanResultProps) {
  function getLoanPeriod(): string {
    if (loanResult?.details?.approvedPeriod) {
      return Period.parse(loanResult?.details?.approvedPeriod)
        .get(ChronoUnit.MONTHS)
        .toString();
    }
    return '-';
  }

  return (
    <div className="flex justify-end">
      <dl className="w-64 space-y-8 xl:w-80">
        {loanResult?.decision === Result.REJECTED && !loanResult?.details ? (
          <div className="flex flex-col-reverse gap-y-4">
            <dt className="text-base leading-7 text-red-400">
              Please try with lower loan amount
            </dt>
            <dd className="text-5xl font-semibold tracking-tight text-red-500">
              Loan rejected
            </dd>
          </div>
        ) : (
          <>
            <div className="flex flex-col-reverse gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Approved loan limit
              </dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                {loanResult?.details?.approvedLimit ?? '-'} €
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Approved loan period
              </dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                {getLoanPeriod()} Months
              </dd>
            </div>
            <div className="flex justify-end">
              <Button
                type={ButtonType.SUBMIT}
                theme={ButtonTheme.SUCCESS}
                onClick={() => {
                  console.log('Sign agreement');
                }}
              >
                Sign agreement
              </Button>
            </div>
          </>
        )}
      </dl>
    </div>
  );
}

export { LoanResult };
