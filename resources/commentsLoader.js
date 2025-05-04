document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loadCommentsBtn");
  const container = document.getElementById("commentsContainer");

  let loaded = false;

  btn.addEventListener("click", () => {
    if (!loaded) {
      fetch("https://jsonplaceholder.typicode.com/posts/6/comments")
        .then((res) => {
          if (!res.ok) throw new Error("Не вдалося завантажити");
          return res.json();
        })
        .then((comments) => {
          comments.forEach((comment) => {
            const el = document.createElement("div");
            el.classList.add("comment");
            el.innerHTML = `
              <h4>${comment.name}</h4>
              <p><strong>Email:</strong> ${comment.email}</p>
              <p>${comment.body}</p>
              <hr/>
            `;
            container.appendChild(el);
          });
          container.style.display = "block";
          btn.textContent = "Сховати відгуки";
          loaded = true;
        })
        .catch((err) => {
          container.innerHTML = `<p style="color: red;">⚠️ ${err.message}</p>`;
          container.style.display = "block";
        });
    } else {
      // toggle visibility
      if (container.style.display === "none") {
        container.style.display = "block";
        btn.textContent = "Сховати відгуки";
      } else {
        container.style.display = "none";
        btn.textContent = "Показати відгуки";
      }
    }
  });
});
