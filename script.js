document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("nform");  // form id
  const resultDiv = document.getElementById("result");  // output div id

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, "");
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s+/g, "");

    
    let L1 = name1.split("");
    let L2 = name2.split("");

    
    L1.forEach((char) => {
      const index = L2.indexOf(char);
      if (index !== -1) {
        L1.splice(L1.indexOf(char), 1);
        L2.splice(index, 1);
      }
    });

    
    const count = L1.length + L2.length;

    
    let flames = ["F", "L", "A", "M", "E", "S"];
    while (flames.length > 1) {
      let cut = (count % flames.length) - 1;
      if (cut >= 0) {
        flames = flames.slice(cut + 1).concat(flames.slice(0, cut));
      } else {
        flames.pop();
      }
    }

    const relation = {
      F: "Friendship 💫",
      L: "Love ❤️",
      A: "Affection 💕",
      M: "Marriage 💍",
      E: "Enemy 😈",
      S: "Siblings 🤗"
    };

    
    //resultDiv.textContent = `The relation between you and your crush is: ${relation[flames[0]]}`;
    resultDiv.innerHTML = `<h2 id ="result_css">${relation[flames[0]]}</h2>`;
    resultDiv.classList.add("show-result"); 
    document.getElementById("formdiv").style.display = "none";
    document.getElementById("result").style.display = "block";
    
    if (relation[flames[0]] == "Friendship 💫") {
        document.getElementById("maindiv").style.boxShadow = "0px 0px 50px rgb(255, 255, 0)" ;
    }

    else if (relation[flames[0]] == "Love ❤️") {
        document.getElementById("maindiv").style.boxShadow = "0px 0px 50px rgb(255, 0, 0)" ;
    }

    else if (relation[flames[0]] == "Affection 💕") {
        document.getElementById("maindiv").style.boxShadow = "0px 0px 50px rgb(255, 192, 203)" ;
    }

    else if (relation[flames[0]] == "Marriage 💍") {
        document.getElementById("maindiv").style.boxShadow = "0px 0px 50px rgb(255, 215, 0)" ;
    }

    else if (relation[flames[0]] == "Enemy 😈") {
        document.getElementById("maindiv").style.boxShadow = "0px 0px 50px rgb(64, 64, 64)" ;
    }

    else if (relation[flames[0]] == "Siblings 🤗") {
        document.getElementById("maindiv").style.boxShadow = "0px 0px 50px rgb(0, 128, 0)" ;
    }

  });
});

const button = document.getElementById("name2");

  button.onclick = function() {
    document.getElementById("fheart").style.display = "block";
  };
