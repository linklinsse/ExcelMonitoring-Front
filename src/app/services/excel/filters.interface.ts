
export enum FilterType {
  OR = 1,
  XOR = 2,
}

export interface FilterInterface {
  label: string,
  type: FilterType,
  filter: string[]
}

export interface GlobalFiltersInterface {
  filters: FilterInterface[]
}