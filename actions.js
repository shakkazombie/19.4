export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";
export const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";

//action creator

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
};

const boundAddComment = text => dispatch(addComment(text));

boundAddComment("New comment!");
boundAddComment("Another new comment!");

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
};

const boundEditComment = (text, id) => dispatch(editComment(text, id));

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

const boundRemoveComment = id => dispatchEvent(removeComment(id));

function thumbsUp(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
}

function thumbsDown(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
}