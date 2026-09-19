// iOS Safari UI chrome color — match the dashboard's dark violet so the top bar blends in
(function () {
  function setThemeColor() {
    var color = '#0c0620'; // matches nebula bg top-edge tone
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = color;
  }
  setThemeColor();
  setInterval(setThemeColor, 2000);
})();
