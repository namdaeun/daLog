export const formatDate = (date: string) => {
  if (date.includes('T')) {
    return date.split('T')[0];
  }

  return '';
};
