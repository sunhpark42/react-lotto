import { useEffect, useState } from 'react';
import { toFormattedTimeString, getAnnouncementDate } from '../../utils/lottoUtils';

export default function LotteryCountDown(props) {
  const [remainTime, setRemainTime] = useState(0);

  const tick = () => {
    const currentTime = new Date();
    const gap = props.announcementDate - currentTime;

    if (gap < 1000) {
      props.setAnnouncementDate(getAnnouncementDate());
    }

    setRemainTime(gap);
  };

  useEffect(() => {
    tick();
    const intervalId = setInterval(tick, 1000);
    return function () {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mt-5 text-center">
      <h3 className="m-1">🎉 당첨 번호 발표 시간 🎉</h3>
      <p className="m-1">{props.announcementDate.toLocaleString('ko-KR')}</p>
      <p className="mt-1">남은 시간 : {toFormattedTimeString(remainTime)}</p>
    </div>
  );
}
