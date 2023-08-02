export default function dateFormat(dateInput) {
  function formatNumberWithZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }
  const date = new Date(dateInput);

  const day = formatNumberWithZero(date.getDate());
  const month = formatNumberWithZero(date.getMonth() + 1);
  const year = date.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
}
