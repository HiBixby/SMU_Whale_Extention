const searchEngineUrl = 'https://www.smu.ac.kr/search/search.do?menu=통합검색&qt=';

const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const searchIcon = document.querySelector('.search-bar i');
const iconContainer = document.querySelectorAll('.icon-container');
const iconInButton = document.querySelectorAll('.icon-container i');

function onSearchBtnClick() {
  const searchWord = searchInput.value;
  if (searchWord) {
    whale.tabs.create({
      url: searchEngineUrl + searchWord,
    });
  }
}
searchButton.addEventListener('click', onSearchBtnClick);

function onIconContainerHover() {
  //TODO
}
iconContainer.addEventListener('hover', onIconContainerHover);
