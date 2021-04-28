import { Component } from 'react';
import { PurchaseForm, LottoListSection, WinningNumberForm, LotteryCountDown } from '.';

export default class Main extends Component {
<<<<<<< HEAD
=======
  state = {
    winningNumbers: [],
    bonusNumber: 0,
  };

  setWinningNumbers = (numbers) => {
    this.setState({
      winningNumbers: numbers,
    });
  };

  setBonusNumber = (number) => {
    this.setState({
      bonusNumber: number,
    });
  };

>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8
  render() {
    return (
      <main className="main-container d-flex flex-col">
        <h1 className="text-center m-0">🎱 행운의 로또</h1>
<<<<<<< HEAD
        <PurchaseForm
          setLottoCount={this.props.setLottoCount}
          lottoCount={this.props.lottoCount}
          moneyInput={this.props.moneyInput}
          setMoneyInput={this.props.setMoneyInput}
        />
        <LottoListSection
          isModalOpened={this.props.isModalOpened}
          lottoCount={this.props.lottoCount}
          winningNumbers={this.props.winningNumbers}
          bonusNumber={this.props.bonusNumber}
          increaseWinningCounts={this.props.increaseWinningCounts}
          isLottoListToggled={this.props.isLottoListToggled}
          setToggleLottoList={this.props.setToggleLottoList}
        />
        <WinningNumberForm
          lottoCount={this.props.lottoCount}
          setWinningNumbers={this.props.setWinningNumbers}
          winningNumbers={this.props.winningNumbers}
          bonusNumber={this.props.bonusNumber}
          setBonusNumber={this.props.setBonusNumber}
=======
        <PurchaseForm setLottoCount={this.props.setLottoCount} />
        <LottoListSection
          isModalOpened={this.props.isModalOpened}
          lottoCount={this.props.lottoCount}
          winningNumbers={this.state.winningNumbers}
          bonusNumber={this.state.bonusNumber}
          increaseWinningCounts={this.props.increaseWinningCounts}
        />
        <WinningNumberForm
          lottoCount={this.props.lottoCount}
          setWinningNumbers={this.setWinningNumbers}
          setBonusNumber={this.setBonusNumber}
>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8
          openModal={this.props.openModal}
        />
        <LotteryCountDown
          announcementDate={this.props.announcementDate}
          setAnnouncementDate={this.props.setAnnouncementDate}
        />
      </main>
    );
  }
}
