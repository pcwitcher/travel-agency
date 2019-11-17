export const formatTime = time => {
  if (typeof time === 'string') {
    return null;
  } else if (typeof time === 'function') {
    return null;
  } else if (time < 0) {
    return null;
  } else if (typeof time === 'number') {
    const seconds = (time % 60).toString().padStart(2, '0');
    const minutes = Math.floor((time / 60) % 60)
      .toString()
      .padStart(2, '0');
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const result = `${hours}:${minutes}:${seconds}`;

    return result;
  } else {
    return null;
  }
};
