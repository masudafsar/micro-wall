export enum AppModeEnum {
  edit = 'EDIT',
  view = 'VIEW',
}

export enum AppActionEnum {
  goToEditMode = 'GO_TO_EDIT_MODE',
  goToViewMode = 'GO_TO_VIEW_MODE',
  openNewBlockModal = 'OPEN_NEW_BLOCK_MODAL',
  closeNewBlockModal = 'CLOSE_NEW_BLOCK_MODAL',
  openSubmittedDataModal = 'OPEN_SUBMITTED_DATA_MODAL',
  closeSubmittedDataModal = 'CLOSE_SUBMITTED_DATA_MODAL',
  addNewBlock = 'ADD_NEW_BLOCK',
  updateBlock = 'UPDATE_BLOCK',
  removeBlock = 'REMOVE_BLOCK',
  moveUpBlock = 'MOVE_UP_BLOCK',
  moveDownBlock = 'MOVE_DOWN_BLOCK',
}
