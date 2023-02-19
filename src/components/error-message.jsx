import { useState } from 'react';
import classNames from 'classnames';

export const ErrorMessage = () => {
  const [isError, setIsError] = useState(true);

  return (
    <div className={classNames('error', {hidden: !isError})} data-test-id='error'>
      <i className='icon-error' />
      <h4>Что-то пошло не так. Обновите страницу через некоторое время.</h4>
      <button type='button' onClick={() => setIsError(false) }>
        <i className='icon-cross' />
      </button>
    </div>
  );
};
