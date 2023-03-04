export function SortArray(x, y) {
  if (x?.name < y?.name) {
    return -1;
  }
  if (x?.name > y?.name) {
    return 1;
  }
  return 0;
}
