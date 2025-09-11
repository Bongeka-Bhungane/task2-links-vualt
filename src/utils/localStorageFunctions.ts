export function setItem(key: string, value: any) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    alert(error);
  }
}

export function getItem(key: string) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    alert(error);
  }
}

export function getItems(): object[] {
  const jsonList = localStorage.getItem("links");
  if (jsonList) {
    const links: object[] = JSON.parse(jsonList);
    return links;
  }
  return [];
}
