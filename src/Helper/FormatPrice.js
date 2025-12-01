// Helper/FormatPrice.js
const FormatPrice = ({ price }) => {
  const val = typeof price === 'object' && price.price ? price.price : price;
  return Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(val);
};
export default FormatPrice;
