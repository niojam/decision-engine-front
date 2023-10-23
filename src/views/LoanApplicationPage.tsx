import { useState } from 'react';
import { Container } from '../components/container/Container';
import { LoanApplicationForm } from '../containers/LoanApplicationForm';
import { LoanResult } from '../containers/LoanResult';
import { CustomerPersonalCodes } from '../containers/CustomerPersonalCodes';
import { LoanDecisionProcessResult, LoanRequest } from '../client/types';
import { LoanServiceClient } from '../client/LoanServiceClient';

function LoanApplicationPage() {
  const [loanResult, setLoanResult] = useState<LoanDecisionProcessResult>();

  const sendLoanRequest = async (loanRequest: LoanRequest) => {
    setLoanResult(await LoanServiceClient.applyLoan(loanRequest));
  };

  return (
    <>
      <section className="min-h-fin min-w-fit bg-bg-secondary py-8">
        <Container>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
            Act. Apply for a loan.
          </h2>
          <div className="mt-6 grid grid-cols-8 gap-6">
            <div className="col-span-8 md:col-span-5">
              <LoanApplicationForm onSubmit={sendLoanRequest} />
            </div>
            <div className="hidden md:block lg:col-span-1" />
            <div className="col-span-8 flex justify-center md:col-span-2">
              <LoanResult loanResult={loanResult} />
            </div>
          </div>
        </Container>
      </section>

      <Container as="section">
        <CustomerPersonalCodes />
      </Container>
    </>
  );
}

export { LoanApplicationPage };
