<<<<<<< HEAD
import { Component } from 'react';
import { LOTTO_VALUE } from '../../constants';
import { getRandomNumberArray } from '../../utils';

export default class LottoItem extends Component {
  state = {
    numbers: getRandomNumberArray(
      LOTTO_VALUE.MIN_NUMBER,
      LOTTO_VALUE.MAX_NUMBER,
      LOTTO_VALUE.NUMBER_COUNT
    ),
  };

  componentDidUpdate(prevProps) {
    if (this.props.isModalOpened && this.props.isModalOpened !== prevProps.isModalOpened) {
      this.increaseWinningCounts();
    }
  }

  // 일치하는 개수를 구하는 연산식
  getMatchedCount = () => {
    return (
      this.props.winningNumbers.length +
      this.state.numbers.length -
      new Set([...this.props.winningNumbers, ...this.state.numbers]).size
    );
  };

  getWinningCount = (matchedCount) => {
    const hasBonusNumber = this.state.numbers.includes(this.props.bonusNumber);

    switch (matchedCount) {
      case LOTTO_VALUE.MATCHED_COUNT.FIRST:
        return LOTTO_VALUE.RANK.FIRST;
      case LOTTO_VALUE.MATCHED_COUNT.THIRD:
        return hasBonusNumber ? LOTTO_VALUE.RANK.SECOND : LOTTO_VALUE.RANK.THIRD;
      case LOTTO_VALUE.MATCHED_COUNT.FOURTH:
        return LOTTO_VALUE.RANK.FOURTH;
      case LOTTO_VALUE.MATCHED_COUNT.FIFTH:
        return LOTTO_VALUE.RANK.FIFTH;
      default:
        return;
    }
  };

  increaseWinningCounts = () => {
    const matchedCount = this.getMatchedCount();
    const winningCount = this.getWinningCount(matchedCount);

    winningCount && this.props.increaseWinningCounts(winningCount);
  };

  render() {
    const isToggled = this.props.isToggled;

    return (
      <li className={`lotto-item ${isToggled ? 'toggle' : ''}`}>
        <span className="lotto-icon">🎟</span>
        {isToggled && <span>{[...this.state.numbers].join(', ')}</span>}
      </li>
    );
  }
=======
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
>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8
}
