import React, {useId} from 'react';
import clsx from 'clsx';
import {useOperator} from '../../_utils';

import styles from './styles.module.css';

export default function OperatorButton() {
  const id = useId();
  const [operator, toggleOperator] = useOperator();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input
        id={id}
        type="checkbox"
        className="screen-reader-only"
        aria-label="Toggle between OR and AND for filtering tags"
        checked={operator === 'AND'}
        onChange={toggleOperator}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleOperator();
          }
        }}
      />
      <label htmlFor={id} className={clsx(styles.checkboxLabel, 'shadow--md')}>
        {/* eslint-disable @docusaurus/no-untranslated-text */}
        <span className={styles.checkboxLabelOr}>OR</span>
        <span className={styles.checkboxLabelAnd}>AND</span>
        {/* eslint-enable @docusaurus/no-untranslated-text */}
      </label>
    </div>
  );
}