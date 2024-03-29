'use strict'
const WIKI_STORAGE_KEY = 'wikiResults'
const YouTube_STORAGE_KEY = 'youtubeResults'
const API_KEY = 'AIzaSyCODpJLXzI6ZTob42WE5VVGWvtLe7G4m-c'
let wikiSearchCache = loadFromStorage(WIKI_STORAGE_KEY) || {}
let youtubeSearchCache = loadFromStorage(YouTube_STORAGE_KEY) || {}

function getWikiData(term) {
  if (wikiSearchCache[term]) {
    return new Promise((resolve) => {
      resolve(wikiSearchCache[term])
    })
  }
  return axios
    .get(
      `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&
srsearch=${term}&format=json`
    )
    .then((res) => {
      res = res.data.query.search.slice(0, 2)
      res = arrangeWikiObject(res)
      _updateWikiCache(term, res)
      return res
    })
}

function getYouTubeData(term) {
  console.log('we looked for: ', term)
  if (youtubeSearchCache[term]) {
    return new Promise((resolve) => {
      resolve(youtubeSearchCache[term])
    })
  }
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet
&videoEmbeddable=true&type=video&key=${API_KEY}&q=${term}`
    )
    .then((res) => {
      res = res.data.items.slice(0, 4)
      res = arrangeYouTubeObject(res)
      _updateYoutubeCache(term, res)
      return res
    })
}

function _updateWikiCache(property, results) {
  wikiSearchCache[property] = results
  _saveResultsToStorage(WIKI_STORAGE_KEY, wikiSearchCache)
}

function arrangeWikiObject(results) {
  return results.map((obj) => {
    return { title: obj.title, snippet: obj.snippet }
  })
}

function _updateYoutubeCache(property, results) {
  youtubeSearchCache[property] = results
  _saveResultsToStorage(YouTube_STORAGE_KEY, youtubeSearchCache)
}

function arrangeYouTubeObject(result) {
  return result.map((obj) => {
    return {
      image: obj.snippet.thumbnails.default,
      title: obj.snippet.title,
      description: obj.snippet.description,
      videoId: obj.id.videoId,
    }
  })
}

function _saveResultsToStorage(key, val) {
  saveToStorage(key, val)
}
