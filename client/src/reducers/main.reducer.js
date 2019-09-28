const initialState = {
  feature_properties: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FEATURE_PROPERTIES":
      return { ...state, feature_properties: action.payload };
    default:
      return state;
  }
}
