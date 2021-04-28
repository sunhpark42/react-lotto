<<<<<<< HEAD
import { Component } from 'react';
import { LOTTO_VALUE } from '../../constants';
export default class ResultSection extends Component {
  rankKey = ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'];

  render() {
    return (
      <table className="mt-3">
        <tbody>
          <tr>
            <th className="p-2">일치 갯수</th>
            <th className="p-2">당첨금</th>
            <th className="p-2">당첨 갯수</th>
          </tr>
          {this.rankKey.map((key) => (
            <tr className="text-center" key={key}>
              <td className="p-2">{LOTTO_VALUE.WINNING_CONDITION_TEXT[key]}</td>
              <td className="p-2">{LOTTO_VALUE.WINNING_PRIZE[key].toLocaleString()}</td>
              <td className="p-2">
                <span>{this.props.winningCounts[LOTTO_VALUE.RANK[key]]}</span>개
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
=======
import { LOTTO_VALUE } from '../../constants';

export default function ResultSection(props) {
  return (
    <table className="mt-3">
      <tbody>
        <tr>
          <th className="p-2">일치 갯수</th>
          <th className="p-2">당첨금</th>
          <th className="p-2">당첨 갯수</th>
        </tr>
        <tr className="text-center">
          <td className="p-2">3개</td>
          <td className="p-2">{LOTTO_VALUE.WINNING_PRIZE.FIFTH.toLocaleString()}</td>
          <td className="p-2">
            <span>{props.winningCounts[LOTTO_VALUE.RANK.FIFTH]}</span>개
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-2">4개</td>
          <td className="p-2">{LOTTO_VALUE.WINNING_PRIZE.FOURTH.toLocaleString()}</td>
          <td className="p-2">
            <span>{props.winningCounts[LOTTO_VALUE.RANK.FOURTH]}</span>개
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-2">5개</td>
          <td className="p-2">{LOTTO_VALUE.WINNING_PRIZE.THIRD.toLocaleString()}</td>
          <td className="p-2">
            <span>{props.winningCounts[LOTTO_VALUE.RANK.THIRD]}</span>개
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-2">5개 + 보너스볼</td>
          <td className="p-2">{LOTTO_VALUE.WINNING_PRIZE.SECOND.toLocaleString()}</td>
          <td className="p-2">
            <span>{props.winningCounts[LOTTO_VALUE.RANK.SECOND]}</span>개
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-2">6개</td>
          <td className="p-2">{LOTTO_VALUE.WINNING_PRIZE.FIRST.toLocaleString()}</td>
          <td className="p-2">
            <span>{props.winningCounts[LOTTO_VALUE.RANK.FIRST]}</span>개
          </td>
        </tr>
      </tbody>
    </table>
  );
>>>>>>> 87ae5f915cdc99a0bd6228da4b87819864212ea8
}
