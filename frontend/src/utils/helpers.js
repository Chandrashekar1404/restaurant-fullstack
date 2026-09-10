// Format Currency
export const formatCurrency = (amount) => {
  return `₹${amount}`;
};

// Current Date
export const getCurrentDate = () => {
  return new Date().toLocaleDateString();
};

// Capitalize Text
export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};