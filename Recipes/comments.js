var commentID = 0;

var allComments = [];

function createCommentID() {
    commentID++;
    return window['value'+commentID] = + commentID;
}

function addComment() {
    const commentSectionEl = document.querySelector('.commentSection');
    const commentEl = document.querySelector('#comments');

    if (commentEl.value != "") {
        const newCommentEl = document.createElement('div');
        newCommentEl.setAttribute('class', 'comment');
        newCommentEl.textContent = commentEl.value;
        console.log("%s", commentEl.value);
    
        commentSectionEl.appendChild(newCommentEl);
        allComments.push(commentEl.value);
    }

    

}

function loadComments() {
    const commentSectionEl = document.querySelector('.commentSection');

    removeAllChildNodes(commentSectionEl);

    for (const [i] of allComments.entries()) {
        const newCommentEl = document.createElement('div');
        newCommentEl.setAttribute('class', 'comment');
        newCommentEl.textContent = allComments[i];
        commentSectionEl.appendChild(newCommentEl);   
    }
}

function hideComments() {
    const commentSectionEl = document.querySelector('.commentSection');

    removeAllChildNodes(commentSectionEl);
}

function removeAllChildNodes(parentSelector) {
    if (!parentSelector.firstChild) {
      return;
    }
    while (parentSelector.firstChild) {
      parentSelector.removeChild(parentSelector.firstChild);
    }
  }