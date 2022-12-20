'use strict'
function onInit() {
  let defaultSearch = 'Fabrizio de Andre'
  getWikiData(defaultSearch).then(renderWikiData)
  getYouTubeData(defaultSearch).then(renderYoutubeData).then(renderFooter)
}

function onSearch(ev, evType) {
  let userSearch
  if (evType === 'ev') {
    ev.preventDefault()
    userSearch = ev.target.search.value
  }
  if (evType === 'val') userSearch = ev
  getWikiData(userSearch).then(renderWikiData).then(renderFooter)
  getYouTubeData(userSearch).then(renderYoutubeData)
}

function renderWikiData(data) {
  var strHTML = data.map(
    (term) => `<article class="result-article">
  <h3 class="wiki-results-title">${term.title}</h3>
  <p class="wiki-results-content">${term.snippet}</p>
  <span><a href="https://en.wikipedia.org/wiki/${term.title}">Read more...</a></span>
  
</article>`
  )
  document.querySelector('.wiki-results-container').innerHTML = strHTML.join('')
  return data
}

function renderYoutubeData(data) {
  var strHTML = data.map(
    (previewCard) => `<article class="preview-article">
      <span class="video-results-title">${previewCard.title}</span>
      <img src="${previewCard.image.url}" width="${previewCard.image.width}" height="${previewCard.image.height}" onclick="updateVideo('https://www.youtube.com/embed/${previewCard.videoId}')">
      <p class="video-results-content">${previewCard.description}</p> 
    </article>`
  )
  document.querySelector('.videos-preview').innerHTML = strHTML.join('')
  return data
}

function renderFooter() {
  let strHTML = ''
  for (const key in loadFromStorage(WIKI_STORAGE_KEY)) {
    strHTML += `<button "class="history-btn" onclick="onSearch('${key}','val')">${key}</button>`
  }
  document.querySelector('.search-history-list').innerHTML = strHTML
}

function updateVideo(src) {
  console.log(src)
  document.querySelector('.video-frame').src = src
}
