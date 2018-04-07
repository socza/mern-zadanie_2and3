// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_EDIT_POST = 'TOGGLE_EDIT_POST';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleEditPost() {
  return {
    type: TOGGLE_EDIT_POST,
  };
}

