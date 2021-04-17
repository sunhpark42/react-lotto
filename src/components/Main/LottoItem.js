// import {} from 'react';
import { useEffect, useRef } from 'react';
import { LOTTO_VALUE } from '../../constants';
import { getRandomNumberArray } from '../../utils';

export default function LottoItem(props) {
  const isToggled = props.isToggled;
  const numbers = useRef(
    getRandomNumberArray(LOTTO_VALUE.MIN_NUMBER, LOTTO_VALUE.MAX_NUMBER, LOTTO_VALUE.NUMBER_COUNT)
  );

  const getMatchedCount = () => {
    return (
      props.winningNumbers.length +
      numbers.current.length -
      new Set([...props.winningNumbers, ...numbers.current]).size
    );
  };

  const increaseWinningCounts = () => {
    const matchedCount = getMatchedCount();

    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FIRST) {
      props.increaseWinningCounts(LOTTO_VALUE.RANK.FIRST);
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.THIRD) {
      if (numbers.current.includes(props.bonusNumber)) {
        props.increaseWinningCounts(LOTTO_VALUE.RANK.SECOND);
      } else {
        props.increaseWinningCounts(LOTTO_VALUE.RANK.THIRD);
      }
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FOURTH) {
      props.increaseWinningCounts(LOTTO_VALUE.RANK.FOURTH);
    }
    if (matchedCount === LOTTO_VALUE.MATCHED_COUNT.FIFTH) {
      props.increaseWinningCounts(LOTTO_VALUE.RANK.FIFTH);
    }
  };

  // TODO: React Hook useEffect has a missing dependency: 'increaseWinningCounts'. Either include it or remove the dependency array
  // dependency 에러가 나는데, 왜 발생하는 건지 더 알아보기.
  useEffect(() => {
    if (props.isModalOpened) {
      increaseWinningCounts();
    }
  }, [props.isModalOpened]);

  return (
    <li className={`lotto-item ${isToggled ? 'toggle' : ''}`}>
      <span className="lotto-icon">🎟</span>
      {isToggled && <span>{[...numbers.current].join(', ')}</span>}
    </li>
  );
}
