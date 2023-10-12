/**
 * ULAK Functions
 *
 * Ulak is a Turkish word for "messenger".
 * Ulak system in this page is a simple messaging system.
 * If visitor write "ulak" to console, visitor will see ulak message panel.
 * The message panel is include a form. Visitor can send message to admin's API.
 * The form have two input for name or telegram username and message.
 * If visitor send message, the message will be send to admin's telegram account.
 *
 * The panel is not include html code. The panel is include in main.js file.
 * With ulakView function, the panel create and append to body.
 * The panel see in center of screen.
 */

// Ulak panel visibility variable
let isUlakVisible = false;

// Ulak panel view function
function ulakView() {
  // If ulak panel is not visible
  if (!isUlakVisible) {
    // Create ulak panel HTML with added overlay and CSS
    const ulakPanelHtml = `
    <style>
      input, textarea {
        margin: 10px;
        padding: 6px 12px;
        width: 80%;
        background: rgb(31, 32, 35);
        border: 1px solid rgb(60, 63, 68);
        border-radius: 4px;
        font-size: 13px;
        color: rgb(247, 248, 248);
        height: 46px;
        appearance: none;
        transition: border 0.15s ease 0s;
      }
      input:focus, textarea:focus {
        outline: none;
        box-shadow: none;
        border-color: rgb(100, 153, 255);
      }
      textarea {
        height: 100px;
        resize: none;
      }
      button {
        display: inline-block;
        outline: 0;
        border: 0;
        cursor: pointer;
        background: rgb(31, 32, 35);
        color: #FFFFFF;
        border-radius: 8px;
        padding: 14px 24px 16px;
        font-size: 13px;
        font-weight: 700;
        line-height: 1;
        transition: transform 200ms,background 200ms;
      }
      button:hover {
        background: #3A3D42;
      }
    </style>
    <div id="ulakOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 999;">
      <div id="ulakPanel" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #000000; padding: 20px; z-index: 1000; box-shadow: 0 0 10px #000; text-align: center; border-radius: 10px;">
        <h2 style="color: #fff; margin-bottom: 20px;">Write to me!</h2>

        <form id="ulakForm" style="text-align: center;">
          <input type="text" id="username" placeholder="Mail or Telegram" required />
          <textarea id="message" placeholder="Enter your message" required ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    `;

    // Append ulak panel to body
    $("body").append(ulakPanelHtml);
    isUlakVisible = true; // Set ulak panel visibility to true

    // Add form submit event listener
    $("#ulakForm").submit(function (e) {
      e.preventDefault();
      const username = $("#username").val();
      const message = $("#message").val();

      // Send message to admin's Telegram account (Implement your API call here)
      // ...

      // Remove ulak panel and overlay after sending the message
      $("#ulakOverlay").remove();

      // Reset isUlakVisible
      isUlakVisible = false;
    });

    // Close ulak panel and overlay when overlay is clicked
    $("#ulakOverlay").click(function (e) {
      if (e.target.id === "ulakOverlay") {
        $("#ulakOverlay").remove();
        isUlakVisible = false;
      }
    });
  }
}

// Keys string variable
let keys = "";

// If key pressed. Write to console.
$(document).keypress(function (event) {
  // Add key to keys string
  keys += event.key;

  // If keys string is greater than 4 characters
  if (keys.length > 4) {
    // Remove first character
    keys = keys.substring(1);
  }

  // If keys string is equal to "ulak" && !isUlakVisible
  if (keys === "ulak" && !isUlakVisible) {
    // Call ulakView function to show the ulak panel
    ulakView();
  }
});