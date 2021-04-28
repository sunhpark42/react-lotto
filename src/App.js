import './index.css';
import './css/index.css';
import React, { useState } from 'react';
import { Main } from './components/Main';
import { ResultModal } from './components/Modal';
import { LOTTO_VALUE, LOTTO_PRICE } from './constants';
import { getAnnouncementDate } from './utils/lottoUtils';

const initialState = {
    isModalOpened: false,
    isLottoListToggled: false,
    winningCounts: {
      [LOTTO_VALUE.RANK.FIRST]: 0,
      [LOTTO_VALUE.RANK.SECOND]: 0,
      [LOTTO_VALUE.RANK.THIRD]: 0,
      [LOTTO_VALUE.RANK.FOURTH]: 0,
      [LOTTO_VALUE.RANK.FIFTH]: 0,
    },
    lottoCount: 0,
    announcementDate: getAnnouncementDate(),
    winningNumbers: {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      sixth: 0,
    },
    bonusNumber: 0,
    moneyInput: 0,
}
<<<<<<< HEAD
export default class App extends Component {
  state = {
    isModalOpened: false,
    isLottoListToggled: false,
    winningCounts: {
      [LOTTO_VALUE.RANK.FIRST]: 0,
      [LOTTO_VALUE.RANK.SECOND]: 0,
      [LOTTO_VALUE.RANK.THIRD]: 0,
      [LOTTO_VALUE.RANK.FOURTH]: 0,
      [LOTTO_VALUE.RANK.FIFTH]: 0,
    },
    lottoCount: 0,
    announcementDate: getAnnouncementDate(),
    winningNumbers: {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      sixth: 0,
    },
    bonusNumber: 0,
    moneyInput: 0,
  };

  initialState = this.state;

  resetState = () => {
    this.setState({ ...this.initialState });
  };

  setMoneyInput = (moneyInput) => {
    this.setState({ moneyInput });
  };

  setWinningCounts = (winningCounts) => {
    this.setState({ winningCounts });
  };

  increaseWinningCounts = (rank) => {
    this.setState((prevState) => ({
      winningCounts: {
        ...prevState.winningCounts,
        [rank]: prevState.winningCounts[rank] + 1,
      },
    }));
  };

  setLottoCount = (lottoCount) => {
    this.setState({
      lottoCount,
    });
  };

  setWinningNumbers = (winningNumbers) => {
    this.setState({
      winningNumbers,
    });
  };

  setBonusNumber = (bonusNumber) => {
    this.setState({ bonusNumber });
  };

  setAnnouncementDate = (announcementDate) => {
    this.setState({ announcementDate });
  };

  openModal = () => {
    this.setState({
      isModalOpened: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpened: false,
    });

    this.setWinningCounts(this.initialState.winningCounts);
  };

  setToggleLottoList = (isLottoListToggled) => {
    this.setState({ isLottoListToggled });
  };

  render() {
    return (
      <div className="app d-flex justify-center items-center">
        <Main
          announcementDate={this.state.announcementDate}
          setAnnouncementDate={this.setAnnouncementDate}
          isModalOpened={this.state.isModalOpened}
          isLottoListToggled={this.state.isLottoListToggled}
          setToggleLottoList={this.setToggleLottoList}
          openModal={this.openModal}
          moneyInput={this.state.moneyInput}
          setMoneyInput={this.setMoneyInput}
          increaseWinningCounts={this.increaseWinningCounts}
          setWinningCounts={this.setWinningCounts}
          lottoCount={this.state.lottoCount}
          setLottoCount={this.setLottoCount}
          winningNumbers={this.state.winningNumbers}
          bonusNumber={this.state.bonusNumber}
          setWinningNumbers={this.setWinningNumbers}
          setBonusNumber={this.setBonusNumber}
        />
        {this.state.isModalOpened && (
          <ResultModal
            closeModal={this.closeModal}
            winningCounts={this.state.winningCounts}
            paidMoney={this.state.lottoCount * LOTTO_PRICE}
            resetAllState={this.resetState}
          />
        )}
      </div>
    );
  }
=======
const initialState = {
  isModalOpened: false,
  winningCounts: {
    [LOTTO_VALUE.RANK.FIRST]: 0,
    [LOTTO_VALUE.RANK.SECOND]: 0,
    [LOTTO_VALUE.RANK.THIRD]: 0,
    [LOTTO_VALUE.RANK.FOURTH]: 0,
    [LOTTO_VALUE.RANK.FIFTH]: 0,
  },
  lottoCount: 0,
};

export default function App() {
  const [isModalOpened, setIsModalOpened] = useState(initialState.isModalOpened);
  const [winningCounts, setWinningCounts] = useState(initialState.winningCounts);
  const [lottoCount, setLottoCount] = useState(initialState.lottoCount);
  const [announcementDate, setAnnouncementDate] = useState(getAnnouncementDate());
  const [mainComponentKey, setMainComponentKey] = useState(new Date());

  const resetState = () => {
    setIsModalOpened(initialState.isModalOpened);
    setWinningCounts(initialState.winningCounts);
    setLottoCount(initialState.lottoCount);
    setAnnouncementDate(getAnnouncementDate());
    setMainComponentKey(new Date());
  };

  const increaseWinningCounts = (rank) => {
    setWinningCounts({
      ...winningCounts,
      [rank]: winningCounts[rank] + 1,
    });
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
    setWinningCounts(initialState.winningCounts);
  };

  return (
    <div className="app d-flex justify-center items-center">
      <Main
        announcementDate={announcementDate}
        setAnnouncementDate={setAnnouncementDate}
        isModalOpened={isModalOpened}
        openModal={openModal}
        increaseWinningCounts={increaseWinningCounts}
        setWinningCounts={setWinningCounts}
        lottoCount={lottoCount}
        setLottoCount={setLottoCount}
        key={mainComponentKey}
      />
      {isModalOpened && (
        <ResultModal
          closeModal={closeModal}
          winningCounts={winningCounts}
          paidMoney={lottoCount * LOTTO_PRICE}
          resetAllState={resetState}
        />
      )}
    </div>
  );
>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8
}
