export function timestampToTime (timestamp, format) {
  const time = new Date(timestamp * 1000);
  const year = time.getFullYear();
  let month = time.getMonth() + 1;
  month < 10 && (month = `0${month}`);
  let date = time.getDate();
  date < 10 && (date = `0${date}`);
  let hour = time.getHours();
  hour < 10 && (hour = `0${hour}`);
  let min = time.getMinutes();
  min < 10 && (min = `0${min}`);
  let second = time.getSeconds();
  second < 10 && (second = `0${second}`);

  const defaultFormat = 'YY-MM-DD hh:mm:ss';
  const _format = format || defaultFormat;

  const res = _format.replace('YY', year).replace('MM', month).replace('DD', date).replace('hh', hour).replace('mm', min).replace('ss', second);
  return res;
}

export function timeToTimestamp (timeString) {
  return String((new Date(timeString)).getTime() / 1000);
}