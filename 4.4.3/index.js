
const input_receiver_dom = document.querySelector("#receiver");
const input_content_dom = document.querySelector("#content");
const button = document.querySelector("button");
button.addEventListener("click", send_message);
const feedback = document.querySelector(".feedback");
input_content_dom.value= ``;
input_receiver_dom.value= ``;

let me = {
    un: "oak_book",
    pw: "pass",
};

function send_message (event) {
    let input_receiver = input_receiver_dom.value;
    let input_content = input_content_dom.value;
    feedback.textContent = "Sending..."



    const post_request = new Request ("https://teaching.maumt.se/apis/BBAPI/v1/", {
        method: "POST",
        headers: {"Content-type": "application/json; chatset=UTF-8"},
        body: JSON.stringify({
            un: me.un,
            pw: me.pw,
            receiver: input_receiver,
            content: input_content,
        }),
    });

    fetch(post_request)
        .then(r => r.json())
        .then(handle_post_resource);
 
    function handle_post_resource (resource) {

        if(resource.response_feedback === "User not found") {
            feedback.textContent = resource.response_feedback;
            feedback.classList.add("error");
        } else if (resource.response_feedback === "Invalid credentials") {
            feedback.textContent = resource.response_feedback;
            feedback.classList.add("error");
        } else if (resource.response_feedback === "OK") {
            feedback.textContent = resource.response_feedback;
            feedback.classList.remove("error");
        }
    
    
    }

}