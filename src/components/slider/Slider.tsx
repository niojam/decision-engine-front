import { ChangeEvent } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import './Slider.scss';

export interface SliderProps {
  value: number;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  tooltipLabel: (value: number) => string;
  label?: string;
  showBoundaries?: boolean;
}

function Slider({
  id,
  value,
  onChange,
  label,
  tooltipLabel,
  step,
  min,
  max,
  showBoundaries = true,
}: SliderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-700"
      >
        {label}
      </label>
      <RangeSlider
        value={value ?? 0}
        inputProps={{
          id,
        }}
        min={min}
        max={max}
        variant="primary"
        step={step}
        tooltipLabel={tooltipLabel}
        onChange={handleChange}
      />
      {showBoundaries && min && max && (
        <div className="flex justify-between text-xs">
          <span>{tooltipLabel(min)}</span>
          <span>{tooltipLabel(max)}</span>
        </div>
      )}
    </div>
  );
}

export { Slider };
