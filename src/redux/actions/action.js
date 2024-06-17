export const ADD = (item) => {
  return {
      type: "ADD_CART",
      payload: item
  }
}

// remove iteams
 export const DLT = (id) => {
  return {
      type: "RMV_CART",
      payload: id
  }
}

