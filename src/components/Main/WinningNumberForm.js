import { useState } from 'react';
import { MESSAGE } from '../../constants';
import { isDuplicatedArray } from '../../utils';

export default function WinningNumberForm(props) {
  const [winningNumberInputs, setWinningNumberInputs] = useState({});
  const [bonusNumberInput, setBonusNumberInput] = useState(0);

  const onWinningNumberInputChange = (event) => {
    setWinningNumberInputs({
      ...winningNumberInputs,
      [event.target.name]: event.target.valueAsNumber,
    });
  };

  const onBonusNumberInputChange = (event) => {
    setBonusNumberInput(event.target.valueAsNumber);
  };

  const onSubmitWinningNumberForm = (event) => {
    event.preventDefault();
    const winningNumberInputsArray = Object.values(winningNumberInputs);

    if (!props.lottoCount) {
      alert(MESSAGE.ALERT.LOTTO_NOT_EXIST);
      return;
    }

    if (isDuplicatedArray([...winningNumberInputsArray, bonusNumberInput])) {
      alert(MESSAGE.ALERT.DUPLICATED_WINNING_NUMBERS);
      return;
    }

    props.setWinningNumbers(winningNumberInputsArray);
    props.setBonusNumber(bonusNumberInput);
    props.openModal();
  };

  return (
    <section className="w-100 mt-5">
      <form className="w-100 mt-1" onSubmit={onSubmitWinningNumberForm}>
        <label htmlFor="first-winning-number" className="w-100">
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해 주세요.
        </label>
        <div className="d-flex mt-3">
          <fieldset id="winning-number-fieldset" className="d-flex flex-col flex-auto">
            <legend className="text-center font-bold">당첨번호</legend>
            <div className="d-flex flex-row justify-space-between">
              <input
                type="number"
                min="1"
                max="45"
                id="first-winning-number"
                name="first-winning-number"
                value={winningNumberInputs['first-winning-number'] || ''}
                onChange={onWinningNumberInputChange}
                className="winning-number-input"
                required
              />
              <input
                type="number"
                min="1"
                max="45"
                name="second-winning-number"
                value={winningNumberInputs['second-winning-number'] || ''}
                onChange={onWinningNumberInputChange}
                aria-label="winning-number"
                required
                className="winning-number-input"
              />
              <input
                type="number"
                min="1"
                max="45"
                name="third-winning-number"
                value={winningNumberInputs['third-winning-number'] || ''}
                onChange={onWinningNumberInputChange}
                aria-label="winning-number"
                required
                className="winning-number-input"
              />
              <input
                type="number"
                min="1"
                max="45"
                name="fourth-winning-number"
                value={winningNumberInputs['fourth-winning-number'] || ''}
                onChange={onWinningNumberInputChange}
                aria-label="winning-number"
                required
                className="winning-number-input"
              />
              <input
                type="number"
                min="1"
                max="45"
                name="fifth-winning-number"
                value={winningNumberInputs['fifth-winning-number'] || ''}
                onChange={onWinningNumberInputChange}
                aria-label="winning-number"
                required
                className="winning-number-input"
              />
              <input
                type="number"
                min="1"
                max="45"
                name="sixth-winning-number"
                value={winningNumberInputs['sixth-winning-number'] || ''}
                onChange={onWinningNumberInputChange}
                aria-label="winning-number"
                required
                className="winning-number-input"
              />
            </div>
          </fieldset>
          <fieldset
            id="bonus-number-fieldset"
            className="d-flex flex-col justify-center items-center"
          >
            <legend className="text-center font-bold">보너스</legend>
            <input
              type="number"
              className="winning-number-input"
              min="1"
              max="45"
              name="bonus-number"
              value={bonusNumberInput || ''}
              onChange={onBonusNumberInputChange}
              required
            />
          </fieldset>
        </div>
        <button className="w-100 basic-button mt-3" type="submit">
          결과 확인하기
        </button>
      </form>
    </section>
  );
}
