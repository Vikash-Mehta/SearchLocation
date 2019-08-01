import * as React from 'react';

interface IGradingKeyOption {
  id: string;
  label: string;
}

interface IGradingKeyOptions {
  options: IGradingKeyOption[];
}

const GradingKeyOptions = (props: IGradingKeyOptions): JSX.Element => {
  return <div className="key">
    {props.options.map((option: IGradingKeyOption) => (
      <div className={option.id} key={option.id}><span className="circle"></span>{option.label}</div>
    ))}
  </div>;
};

export default GradingKeyOptions;
