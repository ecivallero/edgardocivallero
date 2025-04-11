document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');
  
  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${file}`);
        return res.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => {
        console.error(err);
        el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
      });
  });
});