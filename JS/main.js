fetch('D:/Monk_Insights/Webstories/WebStory-1.html')
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const html = parser.parseFromString(text, 'text/html');
    const meta = html.querySelector('meta[name="poster"]');
    const posterImage = meta ? meta.getAttribute('content') : '';
    console.log(posterImage);
  })
  .catch(error => console.error(error));
