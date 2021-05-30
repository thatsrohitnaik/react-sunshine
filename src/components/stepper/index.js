import React from 'react';
import './style.scss';

const Stepper = props => {
  const { steps = [] } = props;
  return (
    <>
      {steps.length > 0 ? (
        <ul className="stepper">
          {steps.map((s, index) => (
            <li
              key={index}
              className={
                s.current
                  ? 'stepper__item current liBorder'
                  : s.complete
                  ? 'stepper__item complete liBorder'
                  : 'stepper__item liBorder'
              }
            >
              <p className="largeFont">
                {index + 1 + ' '}
                <span className="smallFont">{s.step}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Stepper;
