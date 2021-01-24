
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    state: "open"
  }
}

const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    state: null
  }
}