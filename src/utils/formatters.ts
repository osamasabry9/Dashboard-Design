/**
 * Format a number as currency
 * @param value Number to format
 * @param currency Currency symbol
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number, currency = '$'): string => {
  return `${currency}${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

/**
 * Format a number as a percentage
 * @param value Number to format (0-1)
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(1)}%`;
};

/**
 * Truncate text with ellipsis
 * @param text Text to truncate
 * @param length Maximum length
 * @returns Truncated text
 */
export const truncateText = (text: string, length = 25): string => {
  if (text.length <= length) return text;
  return `${text.substring(0, length)}...`;
};


export const formatYAxis = (value: number) => value > 1000 ? `${value / 1000}k` : value.toString();
