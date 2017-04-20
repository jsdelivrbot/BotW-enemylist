export default function(state=null, action) {
  switch(action.type) {
    case 'FOE_SELECTED':
      return action.payload;
  }

  return state;
}