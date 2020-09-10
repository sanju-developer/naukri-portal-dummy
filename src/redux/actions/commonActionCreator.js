export const commonActionCreator = (actionType, payload) => {
  return {
    type: actionType,
    payload
  };
};
