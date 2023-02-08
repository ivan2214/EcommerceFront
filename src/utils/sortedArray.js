export function SortArray(x, y) {
  if (x?.attributes?.name < y?.attributes?.name) {
    return -1
  }
  if (x?.attributes?.name > y?.attributes?.name) {
    return 1
  }
  return 0
}
