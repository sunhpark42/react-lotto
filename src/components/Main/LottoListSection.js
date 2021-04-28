<<<<<<< HEAD
import { Component } from 'react';
import LottoItem from './LottoItem';

export default class LottoListSection extends Component {
  onToggle = () => {
    this.props.setToggleLottoList(!this.props.isLottoListToggled);
  };

  render() {
    const lottoCount = this.props.lottoCount;

    return (
      <section className="mt-5">
        <div className="d-flex justify-space-between items-center">
          <div>
            총 <span>{lottoCount}</span>개를 구매하였습니다.
          </div>
          <label className="toggle-button">
            <input type="checkbox" onChange={this.onToggle} />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <ul className="lotto-list">
          {Array.from({ length: lottoCount }).map((_, index) => (
            <LottoItem
              key={index}
              isToggled={this.props.isLottoListToggled}
              winningNumbers={this.props.winningNumbers}
              bonusNumber={this.props.bonusNumber}
              increaseWinningCounts={this.props.increaseWinningCounts}
              isModalOpened={this.props.isModalOpened}
            />
          ))}
        </ul>
      </section>
    );
  }
=======
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
>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8
}
