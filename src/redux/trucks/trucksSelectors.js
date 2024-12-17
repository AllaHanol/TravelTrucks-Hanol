export const selectIsRefreshing = (
  state,
) => state.trucks.isRefreshing;

export const selectError = (state) =>
  state.trucks.error;

export const selectTotal = (state) =>
  state.trucks.total; // select the total number of pages

export const selectPagination = (
  state,
) => state.trucks.pagination; // select pagination

export const selectItems = (state) =>
  state.trucks.items; // select all trucks

export const selectTruckInfo = (
  state,
) => state.trucks.truckInfo; // select all trucks

export const selectFilters = (state) =>
  state.trucks.filters; // select all filters

export const selectLocation = (state) =>
  state.trucks.filters.location; // select filter location

export const selectEquipment = (
  state,
) => state.trucks.filters.equipment; //select all equipment options

export const selectType = (state) =>
  state.trucks.filters.form; //select type of truck
