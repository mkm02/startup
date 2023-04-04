var wholeChat;
class Comments {
    socket;

    constructor() {
        this.configureWebSocket();
    }

    addComment() {
        let userName = localStorage.getItem('userName');
        //console.log(userName);
        if (userName === null) {
            userName = "anonymous";
        }
        const newComment = document.getElementById('comments').value;
        //console.log(newComment);
        this.broadcastEvent(userName, newComment);
    }

    configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        
        this.socket.onmessage = async (event) => {
            console.log('received', event.data);
            const msg = JSON.parse(await event.data.text());
            this.displayMsg(msg.from, `${msg.value}`);
        };
    }

    displayMsg(from, msg) {
        const chatText = document.querySelector('#newComments');
        chatText.innerHTML =
          `<div class="comment"><span></span> ${from}: ${msg}</div>` + chatText.innerHTML;
    }

    broadcastEvent(from, value) {
        const event = {
          from: from,
          value: value,
        };
        //console.log("in broadcast");
        this.socket.send(JSON.stringify(event));
    }
}

const comments = new Comments();

var commentID = 0;

var allComments = [];

function createCommentID() {
    commentID++;
    return window['value'+commentID] = + commentID;
}

function loadComments() {
    document.querySelector('#newComments').style.display = "block";
}

function hideComments() {
    document.querySelector('#newComments').style.display = "none";
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