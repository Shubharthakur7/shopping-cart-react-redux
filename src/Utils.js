export default function formateCurrancy(num) {
  return Number(num.toFixed(2)).toLocaleString() + " /Rs ";
}
