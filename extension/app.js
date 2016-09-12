console.log('Configurator loader injected');

if (!document.getElementById('amp-configurator')) {
  var iFrame = document.createElement('iframe');
  iFrame.src = '//localhost:9244/dist/index.html';
  iFrame.setAttribute('id', 'amp-configurator');
  iFrame.style.display = 'none';
  iFrame.style.position = 'fixed';
  iFrame.style.top = 0;
  iFrame.style.right = 0;
  iFrame.style.height = '100%';
  iFrame.style.width = '600px';
  iFrame.style.border = 'none';

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(iFrame);
}

window.ampConfigurator = {
  getElement: function () {
    return document.getElementById('amp-configurator');
  },
  toggle: function () {
    var element = this.getElement();
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
};
