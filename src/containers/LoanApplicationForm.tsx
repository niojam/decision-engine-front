import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/input/Input';
import { Slider } from '../components/slider/Slider';
import {
  LOAN_MAXIMAL_AMOUNT,
  LOAN_MAXIMAL_PERIOD,
  LOAN_MINIMAL_AMOUNT,
  LOAN_MINIMAL_PERIOD,
} from '../utils/loanConstants';
import { Button, ButtonTheme, ButtonType } from '../components/button/Button';
import { LoanRequest } from '../client/types';

export interface LoanApplicationFormProps {
  onSubmit: (loanRequest: LoanRequest) => void;
}

function LoanApplicationForm({ onSubmit }: LoanApplicationFormProps) {
  const [loanAmount, setLoanAmount] = useState<number>(3000);
  const [loanPeriod, setLoanPeriod] = useState<number>(24);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      personalCode: '',
      loanAmount,
      loanPeriod,
    },
  });

  const onLoanAmountSliderChanged = (value: number) => {
    setLoanAmount(value);
    setValue('loanAmount', value);
  };

  const onLoanPeriodSliderChanged = (value: number) => {
    setLoanPeriod(value);
    setValue('loanPeriod', value);
  };
  const handleFormSubmit = (d: {
    loanAmount: number;
    loanPeriod: number;
    personalCode: string;
  }) => {
    const loanRequest: LoanRequest = {
      loanAmount: d.loanAmount,
      loanPeriodInMonths: d.loanPeriod,
      customerPersonalCode: d.personalCode,
    };
    onSubmit(loanRequest);
  };

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit((res) => handleFormSubmit(res))}
    >
      <div>
        <Input
          placeHolder="39909202229"
          label="Personal code"
          type="text"
          name="personal-code-input"
          errorMessage={errors?.personalCode?.message}
          htmlInputOriginalProps={{
            ...register('personalCode', {
              required: 'Personal code is required',
              validate: {
                matchPattern: (v) =>
                  /^[1-6][0-9]{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[0-9]{4}/.test(
                    v,
                  ) || 'Must be valid Estonian personal code',
              },
            }),
          }}
        />
      </div>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-6 xs:col-span-4 ">
          <Slider
            value={loanAmount}
            label="Amount"
            id="loan-amount-range"
            max={LOAN_MAXIMAL_AMOUNT}
            min={LOAN_MINIMAL_AMOUNT}
            step={100}
            tooltipLabel={(val) => `${val} €`}
            onChange={onLoanAmountSliderChanged}
          />
        </div>
        <div className="col-span-6 xs:col-span-2">
          <Input
            placeHolder="1000"
            label="Amount"
            type="number"
            name="loan-amount-input"
            errorMessage={errors?.loanAmount?.message}
            htmlInputOriginalProps={{
              ...register('loanAmount', {
                required: 'Amount is required',
                valueAsNumber: true,
                validate: {
                  positive: (v: number) =>
                    v >= LOAN_MINIMAL_AMOUNT ||
                    `Minimum value is ${LOAN_MINIMAL_AMOUNT}`,
                  lessThanTen: (v: number) =>
                    v <= LOAN_MAXIMAL_AMOUNT ||
                    `Maxium value is ${LOAN_MAXIMAL_AMOUNT}`,
                  matchPattern: (v) =>
                    /^[0-9]+$/.test(v.toString()) || 'Must be full number',
                },
                onChange: (e) => setLoanAmount(e.target.value),
              }),
              step: 1,
            }}
          />
        </div>
        <div className="col-span-6 xs:col-span-4">
          <Slider
            value={loanPeriod}
            label="Period"
            id="loan-amount-range"
            max={LOAN_MAXIMAL_PERIOD}
            min={LOAN_MINIMAL_PERIOD}
            step={2}
            tooltipLabel={(val) => `${val} months`}
            onChange={onLoanPeriodSliderChanged}
          />
        </div>
        <div className="col-span-6 xs:col-span-2">
          <Input
            placeHolder="24"
            label="Period"
            type="number"
            name="loan-period-input"
            errorMessage={errors?.loanPeriod?.message}
            htmlInputOriginalProps={{
              ...register('loanPeriod', {
                required: 'Period is required',
                valueAsNumber: true,
                validate: {
                  positive: (v: number) =>
                    v >= LOAN_MINIMAL_PERIOD ||
                    `Minimum value is ${LOAN_MINIMAL_PERIOD}`,
                  lessThanTen: (v: number) =>
                    v <= LOAN_MAXIMAL_PERIOD ||
                    `Maxium value is ${LOAN_MAXIMAL_PERIOD}`,
                  matchPattern: (v) =>
                    /^[0-9]+$/.test(v.toString()) || 'Must be full number',
                },
                onChange: (e) => setLoanPeriod(e.target.value),
              }),
              step: 1,
            }}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type={ButtonType.SUBMIT} theme={ButtonTheme.SUCCESS}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export { LoanApplicationForm };
