document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("nform");  // form id
  const resultDiv = document.getElementById("result");  // output div id

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    // Get values from input boxes
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, "");
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s+/g, "");

    // Convert names to character arrays
    let L1 = name1.split("");
    let L2 = name2.split("");

    // Remove common characters
    L1.forEach((char) => {
      const index = L2.indexOf(char);
      if (index !== -1) {
        L1.splice(L1.indexOf(char), 1);
        L2.splice(index, 1);
      }
    });

    // Count remaining letters
    const count = L1.length + L2.length;

    // FLAMES logic
    let flames = ["F", "L", "A", "M", "E", "S"];
    while (flames.length > 1) {
      let cut = (count % flames.length) - 1;
      if (cut >= 0) {
        flames = flames.slice(cut + 1).concat(flames.slice(0, cut));
      } else {
        flames.pop();
      }
    }

    // Relationship meaning
    const relation = {
      F: "Friendship 💫",
      L: "Love ❤️",
      A: "Affection 💕",
      M: "Marriage 💍",
      E: "Enemy 😈",
      S: "Siblings 🤗"
    };

    // Show result
    //resultDiv.textContent = `The relation between you and your crush is: ${relation[flames[0]]}`;
    resultDiv.innerHTML = `<h2>${relation[flames[0]]}</h2>`;
    resultDiv.classList.add("show-result"); // optional CSS animation hook
    document.getElementById("formdiv").style.display = "none";
    document.getElementById("result").style.display = "block";
  });
});
