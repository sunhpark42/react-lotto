import { useState } from 'react';
import LottoItem from './LottoItem';

export default function LottoListSection(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="mt-5">
      <div className="d-flex justify-space-between items-center">
        <div>
          총 <span>{props.lottoCount}</span>개를 구매하였습니다.
        </div>
        <label className="toggle-button">
          <input type="checkbox" onChange={() => setToggle(!toggle)} />
          <span className="toggle-slider"></span>
        </label>
      </div>
      <ul className="lotto-list">
        {Array.from({ length: props.lottoCount }).map((_, index) => (
          <LottoItem
            key={index}
            isToggled={toggle}
            winningNumbers={props.winningNumbers}
            bonusNumber={props.bonusNumber}
            increaseWinningCounts={props.increaseWinningCounts}
            isModalOpened={props.isModalOpened}
          />
        ))}
      </ul>
    </section>
  );
}
