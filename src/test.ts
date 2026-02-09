document.addEventListener("DOMContentLoaded", () => {
  // Wait a little longer to ensure Elementor fully loads everything
  setTimeout(() => {
    const input = document.querySelector<HTMLInputElement>(".my-input-field");
    const button = document.querySelector(".my-button");

    console.log("Input found:", input);
    console.log("Button found:", button);

    if (!input || !button) {
      alert("⚠️ Input or button not found. Check HTML classes or placement.");
      return;
    }

    button.addEventListener("click", async (e) => {
      e.preventDefault();

      const userInput = input.value.trim();
      if (!userInput) {
        alert("Please enter your Instagram handle.");
        return;
      }

      const targetUrl =
        "https://script.google.com/macros/s/AKfycbxGLPAx22veieB9Yi1VTBok-jMTXyjl-KqYFqBplnVKyw2VnlqIoHGwC-3uaq72SgGMiw/dev"; // paste your Apps Script URL here

      try {
        const response = await fetch(targetUrl, {
          method: "POST",
          body: JSON.stringify({ instagram: userInput }),
          headers: { "Content-Type": "application/json" },
        });

        alert(
          "✅ Check-in sent! (Google Script will process it in background)"
        );

        input.value = "";
      } catch (err) {
        console.error("❌ Error details:", err);
        alert("Network error:\n" + (err.stack || err.message || err));
      }
    });
  }, 1000); // wait 1 second to ensure Elementor content is ready
});
