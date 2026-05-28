export const maskName = (name: string) => {
  if (!name || name.length <= 1) {
    return name;
  }

  if (name.length === 2) {
    return `${name[0]}*`;
  }

  const firstChar = name[0];
  const lastChar = name[name.length - 1];
  return `${firstChar}*${lastChar}`;
};
