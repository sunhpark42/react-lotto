<<<<<<< HEAD
import { Component } from 'react';
import { PRIZE_BY_RANK } from '../../constants';
export default class EarningRateSection extends Component {
  getEarnedMoney = () => {
    return Object.keys(this.props.winningCounts).reduce(
      (sum, key) => sum + this.props.winningCounts[key] * PRIZE_BY_RANK[key],
=======
import { PRIZE_BY_RANK } from '../../constants';

export default function EarningRateSection(props) {
  const getEarnedMoney = () => {
    return Object.keys(props.winningCounts).reduce(
      (sum, key) => sum + props.winningCounts[key] * PRIZE_BY_RANK[key],
>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8
      0
    );
  };

<<<<<<< HEAD
  calculateEarningRate = () => {
    const earnedMoney = this.getEarnedMoney();
    const paidMoney = this.props.paidMoney;
=======
  const calculateEarningRate = () => {
    const earnedMoney = getEarnedMoney();
    const paidMoney = props.paidMoney;
>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8

    return Math.floor(((earnedMoney - paidMoney) / paidMoney) * 100);
  };

<<<<<<< HEAD
  render() {
    return (
      <div className="mt-5 text-center">
        🎉🎉 당신의 총 수익률은 <span className="font-bold">{this.calculateEarningRate()}</span>
        %입니다. 🎉🎉
      </div>
    );
  }
=======
  return (
    <div className="mt-5 text-center">
      🎉🎉 당신의 총 수익률은 <span className="font-bold">{calculateEarningRate()}</span>
      %입니다. 🎉🎉
    </div>
  );
>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8
}
