import { useState } from 'react';
import { LOTTO_PRICE, MESSAGE } from '../../constants';

export default function PurchaseForm(props) {
  const [isActive, setIsActive] = useState(true);
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  const onPurchaseAmountChange = (event) => {
    setPurchaseAmount(event.target.valueAsNumber);
  };

  const setLottoCount = (count) => {
    props.setLottoCount(count);
  };

  const onSubmitPurchaseForm = (event) => {
    event.preventDefault();

    if (!isValidPrice()) {
      alert(MESSAGE.ALERT.INVALID_MONEY_UNIT);
      return;
    }

    setLottoCount(purchaseAmount / LOTTO_PRICE);
    setIsActive(false);
  };

  const isValidPrice = () => {
    return purchaseAmount % LOTTO_PRICE === 0;
  };

  return (
    <section className="mt-5">
      <form className="w-100" onSubmit={onSubmitPurchaseForm}>
        <label htmlFor="money-input" className="w-100">
          구입할 금액을 입력해주세요. (단위: 원)
        </label>
        <div className="d-flex justify-space-between items-center mt-1">
          <input
            id="money-input"
            className="money-input flex-auto mr-3"
            type="number"
            placeholder="구입 금액"
            min="1000"
            value={purchaseAmount || ''}
            onChange={onPurchaseAmountChange}
            required
            disabled={isActive ? false : true}
          />
          <button type="submit" className="basic-button" disabled={isActive ? false : true}>
            확인
          </button>
        </div>
      </form>
    </section>
  );
}

/*
export default class PurchaseForm extends Component {
  state = {
    isActive: true,
  };

  setLottoCount = (count) => {
    this.props.setLottoCount(count);
  };

  onSubmitPurchaseForm = (event) => {
    event.preventDefault();

    const moneyInput = event.target.elements[ID.MAIN.PURCHASE_FORM.INPUT].valueAsNumber;

    if (!this.isValidPrice(moneyInput)) {
      alert(MESSAGE.ALERT.INVALID_MONEY_UNIT);
      return;
    }

    this.props.setLottoCount(moneyInput / LOTTO_PRICE);
    this.setState({ isActive: false });
  };

  isValidPrice = (price) => {
    return price % LOTTO_PRICE === 0;
  };

  render() {
    return (
      <section className="mt-5">
        <form className="w-100" onSubmit={this.onSubmitPurchaseForm}>
          <label htmlFor="money-input" className="w-100">
            구입할 금액을 입력해주세요. (단위: 원)
          </label>
          <div className="d-flex justify-space-between items-center mt-1">
            <input
              id="money-input"
              className="money-input flex-auto mr-3"
              type="number"
              placeholder="구입 금액"
              min="1000"
              required
              disabled={this.state.isActive ? false : true}
            />
            <button
              type="submit"
              className="basic-button"
              disabled={this.state.isActive ? false : true}
            >
              확인
            </button>
          </div>
        </form>
      </section>
    );
  }
}
*/
