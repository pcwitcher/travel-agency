import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownTime() {
    const currentTime = new Date();
    const nextSummer = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        5,
        21,
        currentTime.getUTCHours(),
        currentTime.getUTCMinutes(),
        currentTime.getUTCSeconds(),
        currentTime.getUTCMilliseconds(),
      ),
    );

    const endOfNextSummer = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        8,
        23,
        currentTime.getUTCHours(),
        currentTime.getUTCMinutes(),
        currentTime.getUTCSeconds(),
        currentTime.getUTCMilliseconds(),
      ),
    );

    if (currentTime.getTime() > endOfNextSummer.getTime()) {
      nextSummer.setYear(currentTime.getUTCFullYear() + 1);
      const result = Math.round(
        (nextSummer.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24),
      );
      return `${result} days to summer`;
    } else if (currentTime.getTime() < nextSummer.getTime()) {
      const result = Math.round(
        (nextSummer.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24),
      );
      return result > 1
        ? `${result} days to summer`
        : `${result} day to summer`;
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{this.getCountdownTime()}</h2>
      </div>
    );
  }
}

export default DaysToSummer;
