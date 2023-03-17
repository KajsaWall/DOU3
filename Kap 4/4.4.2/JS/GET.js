"use strict";

function array_each (array, funktion) {
    for (const element of array) {
      funktion(element);
    }
}


function show_messages (resource, container_id) {
    let list_container_dom = document.querySelector(`#${container_id} ul`);

    array_each(resource.messages, print_message);
    function print_message (message) {
        const message_dom = document.createElement("li");
        list_container_dom.append(message_dom);
        console.log(message);
        message_dom.innerHTML = `
        <div class="message">
            <div class="date_to_from">
                <div>${message.timestamp}</div>
                <div>From: ${message.sender}</div>
                <div>To: ${message.receiver}</div>
            </div>
            <div class="content">${message.content}</div>
        </div>
        `;
    }

    if(resource.messages === 0) {
        const to_from = container_id === "to_me" ? "to" : "from";
        list_container_dom.innerHTML = `No messages ${to_from} you`;
    }
}

function show_messages_ToMe (resource) {
    show_messages(resource, "to_me");
}

function show_messages_FromMe (resource) {
    show_messages(resource, "from_me");
}

const me = {
    un: "oak_book",
    pw: "pass",
};

const prefix = (`https://teaching.maumt.se/apis/BBAPI/v1/?un=${me.un}&pw=${me.pw}`);

//To me
fetch(prefix + `&receiver=${me.un}`)
    .then(r => r.json())
    .then(show_messages_ToMe);

//From me
fetch(prefix + `&sender=${me.un}`)
    .then(r => r.json())
    .then(show_messages_FromMe);