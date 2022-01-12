import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTournaments } from '../../store/action-creators';
import { InputWrapper } from './styled';

type Props = {
  placeholder?: string;
};

export const Input: FC<Props> = ({ placeholder }) => {
  const [filter, setFilter] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filter === (inputRef.current as any).value) {
        dispatch(getTournaments(filter));
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, inputRef]);

  return (
    <InputWrapper
      ref={inputRef as any}
      placeholder={placeholder}
      onChange={event => setFilter(event.target.value)}
      value={filter}
    ></InputWrapper>
  );
};
