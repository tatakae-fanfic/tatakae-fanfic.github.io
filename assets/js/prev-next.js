const pages = [
  { order: 1, title: "第一章：勇者归来", url: "/test1/subtest1.html" },
  { order: 2, title: "第二章：断裂的命运", url: "/test1/subtest2.html" },
  { order: 3, title: "第三章：血染王座", url: "/test1/subtest3.html" },
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("prev-next-box");
  if (!container) return;

  const currentOrder = parseInt(container.dataset.order);
  if (!currentOrder) return;

  const prev = pages.find((p) => p.order === currentOrder - 1);
  const next = pages.find((p) => p.order === currentOrder + 1);

  let html = "";
  if (prev) {
    html += `上一篇：<a href="${prev.url}">${prev.title}</a><br>`;
  }
  if (next) {
    html += `下一篇：<a href="${next.url}">${next.title}</a>`;
  }

  container.innerHTML = html;
});
