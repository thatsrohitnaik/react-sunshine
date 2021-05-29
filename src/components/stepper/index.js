import React from 'react';
import './style.scss';

const Stepper = props => {
  const { steps = [] } = props;
  return (
    <>
      {steps.length > 0 ? (
        <ul class="stepper">
          {steps.map((s, index) => (
            <li
              key={index}
              className={
                s.current
                  ? 'stepper__item current'
                  : s.complete
                  ? 'stepper__item complete'
                  : 'stepper__item'
              }
            >
              <p className="largeFont">
                {index + ' '}
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
