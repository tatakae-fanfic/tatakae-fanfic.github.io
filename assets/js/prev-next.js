document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("prev-next-box");
  if (!container) return;

  const series = container.dataset.series || "default";
  const currentURL = window.location.pathname.replace(/\/$/, "");

  fetch(`/assets/js/pages-${series}.json`)
    .then((res) => res.json())
    .then((pages) => {
      const index = pages.findIndex((p) => p.url === currentURL);
      if (index === -1) return;

      let html = "";
      if (pages[index - 1]) {
        html += `上一篇：<a href="${pages[index - 1].url}">${pages[index - 1].title}</a><br>`;
      }
      if (pages[index + 1]) {
        html += `下一篇：<a href="${pages[index + 1].url}">${pages[index + 1].title}</a>`;
      }

      container.innerHTML = html;
    });
});


