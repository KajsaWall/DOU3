<!DOCTYPE html>
<html>
  <head>
    <title>The CRUD App Tester</title>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; }
      html { background: white; font-family: monospace; font-size: 16px; line-height: 1.6; }
      body { margin: 15px auto 60px; padding: 20px; max-width: 800px; background: beige; box-shadow: 10px 10px 0 #666; }
      code { padding: 2px 4px; border-radius: 4px; background: #ddd; color: red; color: red; font-size: 90%; }
      h1, h2 { text-align: center; }
      h1 { margin-bottom: 0; }
      h2 { margin-top: 0; margin-bottom: 30px; font-weight: normal; font-size: 18px; color: #444; }
      h3 { font-size: 24px; margin-bottom: 0; text-align: center; }
      h4 { font-size: 21px; margin-top: 10px; margin-bottom: 0;}
      h3 + p { margin-bottom: 45px; text-align: center; }
      body label + p { text-align: center; margin-bottom: 45px; }
      label { display: block; text-align: center; }
      label input { font-family: monospace; padding: 2px 4px; width: 250px; }
      section { margin-bottom: 20px; }
      button { background-color: #017d01; color: white; border: 0; box-shadow: 4px 4px 0 #999; font-size: 18px; font-family: monospace; font-weight: bold; width: 250px; padding: 10px; }
      button:hover { background: #28ae28; cursor: pointer; }
      button:active { box-shadow: 1px 1px 0 #999; }
      h3 span, h4 span { color: blue; cursor: pointer; text-decoration: underline dotted; font-size: 14px; }
      section div:last-child { margin-top: 15px; margin-bottom: 40px; padding: 10px 20px; background: blue; color: white; font-size: 18px; box-shadow: 4px 4px 0 #999; font-weight: bold; font-style: italic; }
      section.collapsed p, section.collapsed button, section.collapsed div { display: none; }
      .running { animation: flashing 1s infinite; }
      @keyframes flashing { from { background-color: #017d01; } 50% { background-color: #28ae28; } to { background-color: #017d01; }}
    </style>
  </head>
  <body>
    <h1>The CRUD App Tester</h1>
    <h2>(Create, Read, Update, Delete)</h2>

    <label>
      Your Host Address
      <input id="host-field" type="text" value="http://localhost:8888" placeholder="Host">
    </label>
    <p>An <i>endpoint</i> is the same as "Host + Endpoint",<br>e.g. <code>http://localhost:8888/create.php</code>.</p>

    <h3>Test Suite <span>collapse all</span></h3>

    <p><i>Your assignment is to create an API that passes all the tests below. Use the information from these tests to figure out what you'll need to do. <br>Don't forget to check out your console as well.</i></p>

    <section>
      <h4>Test 01 <span>collapse</span></h4>
      <p>Endpoint: <code>/create.php</code>, Method: <code>POST</code>.</p>
      <p>Object <b>A</b>: <code>{ name, age, breed }</code>, Object <b>B</b>: <code>{ id, name, age, breed }</code></p>
      <p>This test will send an object (A) with data to the endpoint, and then verify that we received an object (B) with the same keys (and <code>id</code>*) as the response.</p>
      <p><i>* the key <code>id</code> should be a number, which starts at 1 and increments by 1 for each newly added object.</i></p>
      <button id="test-1">Run Test 01</button> 
      <div id="test-1-info"></div>
    </section>

    <section>
      <h4>Test 02 <span>collapse</span></h4>
      <p>Endpoint: <code>/create.php</code>, Method: <code>POST</code>.</p>
      <p>This test will send an empty object (<code>{}</code>) to the endpoint and verify that we received a response with a status code between <code>400-499</code> (since one or more <b>keys are missing*</b>).</p>
      <p><i>* you'll find the required keys in Object <b>A</b> from Test 01.</i></p>
      <button id="test-2">Run Test 02</button> 
      <div id="test-2-info"></div>
    </section>

    <section>
      <h4>Test 03 <span>collapse</span></h4>
      <p>Endpoint: <code>/create.php</code>, Method: <code>POST</code>.</p>
      <p>This test will send an object (<code>{ name, age, breed }</code>) <b>with empty data*</b> to the endpoint, and then verify that we received a response with a status code between <code>400-499</code> (since we can't create something with empty data).</p>
      <p>* <i>which means each value will either be an empty string (<code>""</code>) or the number <code>0</code>.</i></p>
      <button id="test-3">Run Test 03</button> 
      <div id="test-3-info"></div>
    </section>

    <section>
      <h4>Test 04 <span>collapse</span></h4>
      <p>Endpoint: <code>/read.php</code>, Method: <code>GET</code>.</p>
      <p>This test will send a request and then verify that we received a response of either: an empty array (<code>[]</code>) or an array of objects, where each object has the following keys <code>{ id, name, age, breed }</code>.</p>
      <button id="test-4">Run Test 04</button> 
      <div id="test-4-info"></div>
    </section>

    <section>
      <h4>Test 05 <span>collapse</span></h4>
      <p>Endpoint: <code>/read-one.php</code>, Method: <code>GET</code>.</p>
      <p>This test will send a request with a the parameter <code>?id=1</code> and then verify that we received a single object (<code>{ id, name, age, breed }</code>), where the key <code>id</code> has the value <code>1</code>.</p>
      <p><i>This requires your database to have one object with <code>id=1</code>.</i></p>
      <button id="test-5">Run Test 05</button> 
      <div id="test-5-info"></div>
    </section>

    <section>
      <h4>Test 06 <span>collapse</span></h4>
      <p>Endpoint: <code>/read-one.php</code>, Method: <code>GET</code>.</p>
      <p>This test will send a request with a the parameter <code>?id=abc</code> and then verify that we received a response with the status code <code>404</code> (since no object should exist with <code>id=abc</code>).</p>
      <p><i>In other words, we were unable to find the object.</i></p>
      <button id="test-6">Run Test 06</button> 
      <div id="test-6-info"></div>
    </section>

    <section>
      <h4>Test 07 <span>collapse</span></h4>
      <p>Endpoint: <code>/update.php</code>, Method: <code>PUT</code>.</p>
      <p>Object <b>A</b>: <code>{ id: 1, name: "Erik", age: 11, breed: "Collie" }</code>
      <p>This test will send an object (A) with data to the endpoint, and then verify that we received an object with the same keys and values (i.e. object A). In other words, we successfully edited the object.</p>
      <p><i>This requires your database to have one object with <code>id=1</code>.</i></p>
      <button id="test-7">Run Test 07</button> 
      <div id="test-7-info"></div>
    </section>

    <section>
      <h4>Test 08 <span>collapse</span></h4>
      <p>Endpoint: <code>/update.php</code>, Method: <code>PUT</code>.</p>
      <p>This test will send an object (<code>{ id: "abc" }</code>) to the endpoint, and then verify that we received a response with a status code between <code>400-499</code> (since no object should exist with <code>id=abc</code>).</p>
      <p><i>In other words, we were unable to find the object.</i></p>
      <button id="test-8">Run Test 08</button> 
      <div id="test-8-info"></div>
    </section>

    <section>
      <h4>Test 09 <span>collapse</span></h4>
      <p>Endpoint: <code>/delete.php</code>, Method: <code>DELETE</code>.</p>
      <p>This test will send an object (<code>{ id: 1 }</code>) to the endpoint, and then verify that we received a response containing only the number <code>1</code>, <b>not</b> the object <code>{ id: 1 }</code>.</p>
      <p><i>Since this test will delete an object from your database, don't forget to add a new object with <code>id=1</code> afterwards.</i></p>
      <button id="test-9">Run Test 09</button> 
      <div id="test-9-info"></div>
    </section>

    <section>
      <h4>Test 10 <span>collapse</span></h4>
      <p>Endpoint: <code>/delete.php</code>, Method: <code>DELETE</code>.</p>
      <p>This test will send an object (<code>{ id: "abc" }</code>) to the endpoint, and then verify that we received a response with a status code between <code>400-499</code> (since no object should exist with <code>id=abc</code>).</p>
      <p><i>In other words, we were unable to find the object.</i></p>
      <button id="test-10">Run Test 10</button> 
      <div id="test-10-info"></div>
    </section>

    <section>
      <h4>Test 11 <span>collapse</span></h4>
      <p>Endpoint: <code>/create.php</code>, Method: <code>PUT</code>.</p>
      <p>This test will send request with an <b>invalid</b> method to the endpoint, and then verify that we received a response with the status code <code>405</code>.</p>
      <p><i>The endpoint <code>/create.php</code> should only allow the method <code>POST</code>.</i></p>
      <button id="test-11">Run Test 11</button> 
      <div id="test-11-info"></div>
    </section>

    <section>
      <h4>Test 12 <span>collapse</span></h4>
      <p>Endpoint: <code>/read.php</code>, Method: <code>DELETE</code>.</p>
      <p>This test will send request with an <b>invalid</b> method to the endpoint, and then verify that we received a response with the status code <code>405</code>.</p>
      <p><i>The endpoint <code>/read.php</code> should only allow the method <code>GET</code>.</i></p>
      <button id="test-12">Run Test 12</button> 
      <div id="test-12-info"></div>
    </section>

    <section>
      <h4>Test 13 <span>collapse</span></h4>
      <p>Endpoint: <code>/read-one.php</code>, Method: <code>POST</code>.</p>
      <p>This test will send request with an <b>invalid</b> method to the endpoint, and then verify that we received a response with the status code <code>405</code>.</p>
      <p><i>The endpoint <code>/read-one.php</code> should only allow the method <code>GET</code>.</i></p>
      <button id="test-13">Run Test 13</button> 
      <div id="test-13-info"></div>
    </section>

    <section>
      <h4>Test 14 <span>collapse</span></h4>
      <p>Endpoint: <code>/update.php</code>, Method: <code>GET</code>.</p>
      <p>This test will send request with an <b>invalid</b> method to the endpoint, and then verify that we received a response with the status code <code>405</code>.</p>
      <p><i>The endpoint <code>/update.php</code> should only allow the method <code>PUT</code>.</i></p>
      <button id="test-14">Run Test 14</button> 
      <div id="test-14-info"></div>
    </section>

    <section>
      <h4>Test 15 <span>collapse</span></h4>
      <p>Endpoint: <code>/delete.php</code>, Method: <code>POST</code>.</p>
      <p>This test will send request with an <b>invalid</b> method to the endpoint, and then verify that we received a response with the status code <code>405</code>.</p>
      <p><i>The endpoint <code>/delete.php</code> should only allow the method <code>DELETE</code>.</i></p>
      <button id="test-15">Run Test 15</button> 
      <div id="test-15-info"></div>
    </section>

    <section>
      <h4>Test 1-15 <span>collapse</span></h4>
      <p><i>Tired of running each test separately? I've got you covered.</i></p>
      <p>This will run all tests from 1 to 15. In order for this to work you <b>have</b> to clear your database (so it only contains an empty array).</p>
      <button id="test-1-15">Run Test 1-15</button> 
      <div id="test-1-15-info"></div>
    </section>

    <script>
      let host = document.querySelector("#host-field").value;

      document.querySelector("body > p > code").textContent = `${host}/create.php`;

      document.querySelector("#host-field").addEventListener("input", (event) => {
        host = event.target.value
        document.querySelector("body > p > code").textContent = `${host}/create.php`;
      });

      Array.from(document.querySelectorAll("section h4 span")).forEach((element) => {
        element.addEventListener("click", (event) => {
          event.target.parentElement.parentElement.classList.toggle("collapsed");
          event.target.textContent = event.target.parentElement.parentElement.classList.contains("collapsed") 
            ? "show"
            : "collapse";
        });
      });

      document.querySelector("h3 span").addEventListener("click", (event) => {
        Array.from(document.querySelectorAll("section")).forEach((section) => {
          section.classList.add("collapsed")
          section.querySelector("h4 span").textContent = "show";
        });
      });

      function showMessage(nr, message) {
        document.querySelector(`#test-${nr}-info`).textContent = message;
      }

      function clearMessage(nr) {
        showMessage(nr, "");
      }

      function setIsRunning(nr) {
        document.querySelector(`#test-${nr}`).classList.add("running");
        document.querySelector(`#test-${nr}`).textContent = "Running...";
      }

      function resetIsRunning(nr) {
        document.querySelector(`#test-${nr}`).classList.remove("running");
        document.querySelector(`#test-${nr}`).textContent = `Run Test ${nr < 10 ? "0" + nr : nr}`;
      }

      function setIsDone(nr) {
        document.querySelector(`#test-${nr}`).classList.remove("running");
        document.querySelector(`#test-${nr}`).textContent = `[DONE] Run Test ${nr < 10 ? "0" + nr : nr}`;
      }

      // This allows us to have delays between stuff
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
      }

      // So we don't need to repeat ourselves
      function send(method, endpoint, body) {
        if (method == "GET") {
          console.info(`Sending a GET request to ${host + endpoint}`);
          return fetch(host + endpoint);
        }

        console.info(`Sending a ${method} request to ${host + endpoint} with`, body);
        return fetch(host + endpoint, {
          method: method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      }

      function createTest(nr, endpoint, method, data, callback) {
        return async function(ms = 3000) {
          const label = nr < 10 ? "0" + nr : nr;

          if (typeof ms !== "number") {
            ms = 3000;
          }

          setIsRunning(nr);
          showMessage(nr, `Running Test ${label} on ${host}${endpoint}`);
          await sleep(ms);

          try {
            let response = await send(method, endpoint, data);
            let message = await callback(response, { endpoint, method, data}); 

            if (!message) {
              showMessage(nr, `Test ${label} successful!`);
            } else {
              resetIsRunning(nr);
              showMessage(nr, message);
              return Promise.resolve([false, nr]);
            }
          } catch (error) {
              resetIsRunning(nr);
              console.warn(error);
              showMessage(nr, "An error occured, check your console for more information.");
              return Promise.resolve([false, nr]);
          } 

          setIsDone(nr);
          await sleep(ms);
          clearMessage(nr);
          return Promise.resolve([true, nr]);
        }
      }
        
      const runTest01 = createTest(1, "/create.php", "POST",
        { name: "Arya", age: 2, breed: "Siberian Husky" },
        async (response, request) => {
          if (response.status >= 200 && response.status <= 299) {
            let data = await response.json();

            if (data.name == request.data.name &&
                data.age == request.data.age &&
                data.breed == request.data.breed &&
                data.id !== undefined) {
              return;
            }

            console.warn("Expecting this", request.data);
            console.warn("to be the same as this", data);
            return "Failure: Test 01 received invalid data, check your console for more information.";
          }

          return `Failure: Test 01 received the status code ${response.status}, expected 200-299.`;
        }
      );

      const runTest02 = createTest(2, "/create.php", "POST", {},
        async (response) => {
          if (response.status >= 400 && response.status <= 499) {
            return;
          }

          return `Failure: Test 02 received the status code ${response.status}, expected 400-499.`;
        }
      );

      const runTest03 = createTest(3, "/create.php", "POST",
        { name: "", age: 0, breed: "" },
        async (response) => {
          if (response.status >= 400 && response.status <= 499) {
            return;
          }

          return `Failure: Test 03 received the status code ${response.status}, expected 400-499.`;
        }
      );

      const runTest04 = createTest(4, "/read.php", "GET", {},
        async (response) => {
          if (response.status < 200 || response.status > 299) {
            return `Failure: Test 04 received the status code ${response.status}, expected 200-299.`;
          }

          let data = await response.json();

          if (!Array.isArray(data)) {
            return `Failure: Test 04 expected to receive an array.`;
          }

          if (data.length == 0) {
            return;
          }

          let first = data[0];

          if (first.id && first.name && first.age && first.breed) {
            return;
          }

          console.warn("The keys [id, name, age, breed] are either empty or does not exist.");
          console.warn("We got these", first);
          return `Failure: Test 04 received invalid data, check your console for more information.`;
        }
      );

      const runTest05 = createTest(5, "/read-one.php?id=1", "GET", {},
        async (response) => {
          if (response.status < 200 || response.status > 299) {
            return `Failure: Test 05 received the status code ${response.status}, expected 200-299.`;
          }

          let data = await response.json();

          if (Array.isArray(data) || typeof data !== "object") {
            return `Failure: Test 05 expected to receive a single object.`;
          }

          if (data.id !== 1) {
            return `Failure: Test 05 expected id to be 1, but got ${data.id} instead.`;
          }

          if (data.name && data.age && data.breed) {
            return;
          }

          console.warn("The keys [id, name, age, breed] are either empty or does not exist.");
          console.warn("We got these", data);
          return `Failure: Test 05 received invalid data, check your console for more information.`;
        }
      );

      const runTest06 = createTest(6, "/read-one.php?id=abc", "GET", {},
        async (response) => {
          if (response.status == 404) {
            return;
          }

          return `Failure: Test 06 received the status code ${response.status}, expected 404.`;
        }
      );

      const runTest07 = createTest(7, "/update.php", "PUT",
        { id: 1, name: "Erik", age: 11, breed: "Collie" },
        async (response, request) => {
          if (response.status < 200 || response.status > 299) {
            return `Failure: Test 07 received the status code ${response.status}, expected 200-299.`;
          }

          let data = await response.json();

          if (Array.isArray(data) || typeof data !== "object") {
            return `Failure: Test 07 expected to receive a single object.`;
          }

          if (data.id === request.data.id &&
              data.name === request.data.name &&
              data.age === request.data.age &&
              data.breed === request.data.breed) {
            return;
          }

          console.warn("Expected the keys [id, name, age, breed] to have these values", request.data);
          console.warn("But got these instead", data);
          return `Failure: Test 07 got unexpected values, check your console for more information.`;
        }
      );

      const runTest08 = createTest(8, "/update.php", "PUT",
        { id: "abc" },
        async (response) => {
          if (response.status >= 400 && response.status <= 499) {
            return;
          }

          return `Failure: Test 08 received the status code ${response.status}, expected 400-499.`;
        }
      );

      const runTest09 = createTest(9, "/delete.php", "DELETE",
        { id: 1 },
        async (response, request) => {
          if (response.status < 200 || response.status > 299) {
            return `Failure: Test 09 received the status code ${response.status}, expected 200-299.`;
          }

          let data = await response.json();

          if (typeof data !== "number") {
            return `Failure: Test 09 expected to receive a number.`;
          }

          if (data === request.data.id) {
            return;
          }

          return `Failure: Test 09 expected the key "id" to be ${request.data.id} but it was ${data}.`;
        }
      );

      const runTest10 = createTest(10, "/delete.php", "DELETE",
        { id: "abc" },
        async (response) => {
          if (response.status >= 400 && response.status <= 499) {
            return;
          }

          return `Failure: Test 10 received the status code ${response.status}, expected 400-499.`;
        }
      );

      const runTest11 = createTest(11, "/create.php", "PUT", {},
        async (response) => {
          if (response.status == 405) {
            return;
          }

          return `Failure: Test 11 received the status code ${response.status}, expected 405.`;
        }
      );

      const runTest12 = createTest(12, "/read.php", "DELETE", {},
        async (response) => {
          if (response.status == 405) {
            return;
          }

          return `Failure: Test 12 received the status code ${response.status}, expected 405.`;
        }
      );

      const runTest13 = createTest(13, "/read-one.php", "POST", {},
        async (response) => {
          if (response.status == 405) {
            return;
          }

          return `Failure: Test 13 received the status code ${response.status}, expected 405.`;
        }
      );

      const runTest14 = createTest(14, "/update.php", "GET", {},
        async (response) => {
          if (response.status == 405) {
            return;
          }

          return `Failure: Test 14 received the status code ${response.status}, expected 405.`;
        }
      );

      const runTest15 = createTest(15, "/delete.php", "POST", {},
        async (response) => {
          if (response.status == 405) {
            return;
          }

          return `Failure: Test 15 received the status code ${response.status}, expected 405.`;
        }
      );

      document.querySelector("#test-1").addEventListener("click", runTest01);
      document.querySelector("#test-2").addEventListener("click", runTest02);
      document.querySelector("#test-3").addEventListener("click", runTest03);
      document.querySelector("#test-4").addEventListener("click", runTest04);
      document.querySelector("#test-5").addEventListener("click", runTest05);
      document.querySelector("#test-6").addEventListener("click", runTest06);
      document.querySelector("#test-7").addEventListener("click", runTest07);
      document.querySelector("#test-8").addEventListener("click", runTest08);
      document.querySelector("#test-9").addEventListener("click", runTest09);
      document.querySelector("#test-10").addEventListener("click", runTest10);
      document.querySelector("#test-11").addEventListener("click", runTest11);
      document.querySelector("#test-12").addEventListener("click", runTest12);
      document.querySelector("#test-13").addEventListener("click", runTest13);
      document.querySelector("#test-14").addEventListener("click", runTest14);
      document.querySelector("#test-15").addEventListener("click", runTest15);

      document.querySelector("#test-1-15").addEventListener("click", async () => {
        const tests = [
          runTest01, runTest02, runTest03, runTest04,
          runTest05, runTest06, runTest07, runTest08,
          runTest09, [runTest01, runTest10], runTest11,
          runTest12, runTest13, runTest14, runTest15,
        ];

        for (const test of tests) {
          if (Array.isArray(test)) {
            for (const innerTest of test) {
              const [success, nr] = await innerTest(1);

              if (!success) {
                showMessage("1-15", `The test ${nr} failed, go back and try again.`);
                return;
              }
            }
          } else {
            const [success, nr] = await test(1);

            if (!success) {
              showMessage("1-15", `The test ${nr} failed, go back and try again.`);
              return;
            }
          }
        }

        showMessage("1-15", "You passed all the tests!");
        setIsDone("1-15");
      });
    </script>
  </body>
</html>
