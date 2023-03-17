"use strict";
/*
function delete_message (event) {
  let parseINT_id = event.target.parentNode.dataset.message;
  parseINT_id = parseInt(parseINT_id);
  console.log(parseINT_id);



  const delete_request = new Request(prefix, {
    method: "DELETE",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      un: me.un,
      pw: me.pw,
      message_id: parseINT_id,
    }),
  });
        event.target.parentNode.classList.add("deleting");
        event.target.parentNode.remove();
  fetch(delete_request)
    .then(r => r.json())
    .then(r => {
      console.log(r);
    }
);
}
*/

function handle_delete_resource (message_dom) {
  
  if (!message_dom.classList.contains("error")) {
    message_dom.remove();
  }

}
function remove_message (message, message_dom) {

  const message_id = message.message_id;

  const delete_request = new Request(prefix, {
    method: "DELETE",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      un: me.un,
      pw: me.pw,
      message_id,
    }),
  });

  fetch(delete_request)
    .then(response => {
      if (response.status !== 200) {
        message_dom.classList.add("delete_error");
      }
      return response.json();
    })
    .then(() => handle_delete_resource(message_dom) );

  message_dom.classList.add("deleting");

}

