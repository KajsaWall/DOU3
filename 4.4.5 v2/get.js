function array_each (array, funktion) {
  for (const element of array) {
    funktion(element);
  }
}

function add_message (message, container_id) {

  const message_dom = document.createElement("li");
  message_dom.classList.add("message");
  message_dom.id = "message_" + message.message_id;
  message_dom.dataset.message = JSON.stringify(message);
  document.querySelector(`#${container_id} ul`).prepend(message_dom);

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
      <div class="content">${message.content}</div>
    </div>
    <button class="delete">
      <img src="./images/icon_delete.png">
    </button>
  `;

  message_dom.querySelector("button.delete").addEventListener( "click", () => remove_message(message, message_dom) );
}
function show_messages (resource, container_id) {

  const list_container_dom = document.querySelector(`#${container_id} ul`);
  list_container_dom.innerHTML = "";

  array_each(resource.messages, message => {
    add_message(message, container_id);
  });

  if (resource.messages.length === 0) {
    const to_from = container_id === "to_me" ? "to" : "from";
    list_container_dom.innerHTML = `No messages ${to_from} you.`;
  }

}
function show_messages_tome (resource) {
  show_messages(resource, "to_me");
}
function show_messages_fromme (resource) {
  show_messages(resource, "from_me");
}

function get_messages (to_from) {

  console.log("get messages", to_from);
  const _prefix = `${prefix}?un=${credentials.un}&pw=${credentials.pw}`;


  if (to_from === "to") {

    fetch(_prefix + `&receiver=${credentials.un}`)
    .then(r => r.json())
    .then(show_messages_tome);
  
  }

  if (to_from === "from") {

    fetch(_prefix + `&sender=${credentials.un}`)
    .then(r => r.json())
    .then(show_messages_fromme);
  
  }  
}
