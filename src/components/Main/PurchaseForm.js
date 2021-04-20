import { Component } from 'react';
import { ID, LOTTO_PRICE, MESSAGE } from '../../constants';

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
          <label className="w-100">
            구입할 금액을 입력해주세요. (단위: 원)
            <div className="d-flex justify-space-between items-center mt-1">
              <input
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
          </label>
        </form>
      </section>
    );
  }
}
