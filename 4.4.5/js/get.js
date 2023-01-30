
"use strict";
function array_each (array, funktion) {
    for (const element of array) {
      funktion(element);
    }
}

function add_message (message, container_id) {
  const message_dom = document.createElement("li");
        document.querySelector(`#${container_id} ul`).prepend(message_dom);
        message_dom.classList.add("message");

        message_dom.id = "message_" + message.message_id;
       // message_dom.dataset.message = message.message_id;
       message_dom.dataset.message = JSON.stringify(message);

        
        message_dom.innerHTML = `
    <div class="payload">
      <div class="date_to_from">
        <div>${message.timestamp}</div>
        <div class="from">
          <span>From: </span>
          <span>${message.sender}</span>
        </div>    
        <div class="from">
          <span>To: </span>
          <span>${message.receiver}</span>
        </div>    
      </div>
      <div class="content"></div>
    </div>
    <img src="images/icon_delete.png" class="delete">
  `;
  message_dom.querySelector(".content").textContent = message.content;
  message_dom.querySelector("img.delete").addEventListener("click", () => remove_message(message, message_dom));
}

function show_messages (resource, container_id) {
    let list_container_dom = document.querySelector(`#${container_id} ul`);
    list_container_dom.innerHTML = "";
    

    array_each(resource.messages, message => {
      add_message(message, container_id)
    });

    if(resource.messages === 0) {
        let to_from = container_id = "to_me" ? "to" : "from";
        list_container_dom.textContent = `No message ${to_from} you`;
    }

    
}

function show_messages_ToMe(resource) {
    show_messages(resource, "to_me");
}
function show_messages_FromMe(resource) {
    show_messages(resource, "from_me");
}

const get_prefix = `https://teaching.maumt.se/apis/BBAPI/v1/?un=${me.un}&pw=${me.pw}`;

//get messages to me
fetch(get_prefix + `&receiver=${me.un}`)
    .then(r => r.json())
    .then(show_messages_ToMe);

//get messages from me
fetch(get_prefix + `&sender=${me.un}`)
    .then(r => r.json())
    .then(show_messages_FromMe);