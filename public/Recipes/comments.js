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

function likeBBQ() {
    const userName = localStorage.getItem('userName');
    const newLike = { user: userName, recipe: "bbq_pork.html" };

    try {
        sendLike(newLike);
    } catch {
        console.log("Failure to like the recipe");
    }
}

function likeBirria() {
    const userName = localStorage.getItem('userName');
    const newLike = { user: userName, recipe: "birria_tacos.html" };

    try {
        sendLike(newLike);
    } catch {
        console.log("Failure to like the recipe");
    }
}

function likeChicken() {
    const userName = localStorage.getItem('userName');
    const newLike = { user: userName, recipe: "chicken_parm.html" };

    try {
        sendLike(newLike);
    } catch {
        console.log("Failure to like the recipe");
    }
}

async function sendLike(like) {
    console.log("sending like");
    const response = await fetch('/api/like', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(like),
    });
    console.log(response);
}