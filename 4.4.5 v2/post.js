
function handle_send_resource (resource) {
  
  document.querySelector("#send_form .feedback").textContent = resource.response_feedback;
  document.querySelector("#send_form button").removeAttribute("disabled");

  if (!document.querySelector("#send_form .feedback").classList.contains("error")) {
    document.querySelector("input[name='receiver']").value = "";
    document.querySelector("input[name='content']").value = "";
    add_message(resource.messages[0], "from_me");
  }


}

document.querySelector("#send_form button").addEventListener("click", send_message);
function send_message () {

  const receiver = document.querySelector("input[name='receiver']").value;
  const content = document.querySelector("input[name='content']").value;

  const post_request = new Request(prefix, {
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      // ...credentials,
      un: credentials.un,
      pw: credentials.pw,
      receiver: receiver,
      content: content
    }),
  });

  fetch(post_request)
    .then(response => {
      if (response.status !== 200) {
        document.querySelector("#send_form .feedback").classList.add("error");
      }
      return response.json();
    })
    .then(handle_send_resource);

  document.querySelector("#send_form button").setAttribute("disabled", true);
  document.querySelector("#send_form .feedback").textContent = "Sending...";
  document.querySelector("#send_form .feedback").classList.remove("error");


}

