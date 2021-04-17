import './index.css';
import './css/index.css';
import React, { useState } from 'react';
import { Main } from './components/Main';
import { ResultModal } from './components/Modal';
import { LOTTO_VALUE, LOTTO_PRICE } from './constants';
import { getAnnouncementDate } from './utils/lottoUtils';

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
}
