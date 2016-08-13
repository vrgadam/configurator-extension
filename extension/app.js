console.log('Configurator loader injected');

if (!document.getElementById('configurator-script')) {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script');
  script.setAttribute('id', 'configurator-script');
  script.async = true;
  script.onload = function () {
    console.log('Remote script loaded');
  };
  script.src = '//localhost:9244/configurator.js';
  head.appendChild(script);

  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '//localhost:9244/dist/configurator.css';
  head.appendChild(link);
}


