export const getId = async (url, id) => {
  const res = await fetch(`${url}${id}`);
  const data = await res.json();
  return data;
};
