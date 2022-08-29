const searchEngineUrl = 'https://www.smu.ac.kr/search/search.do?menu=통합검색&qt=';

const searchForm = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const searchIcon = document.querySelector('.search-bar i');
const iconContainer = document.querySelectorAll('.icon-container');
const iconInButton = document.querySelectorAll('.icon-container i');
const buttonGrid = document.querySelector('.buttons-collection');

function onSearchBtnClick() {
  const searchWord = searchInput.value;
  if (searchWord) {
    whale.tabs.create({
      url: searchEngineUrl + searchWord,
    });
  }
}
searchButton.addEventListener('click', onSearchBtnClick);

function onIconContainerMouseEnter(event) {
  const selectedIcon = event.target.children[0].className;
  const selectedTitle = event.target.parentNode.title;
  searchIcon.className = selectedIcon;
  searchInput.placeholder = selectedTitle;
}
function onIconContainerMouseLeave() {
  searchIcon.className = 'fa-solid fa-magnifying-glass';
  searchInput.placeholder = '통합검색';
}
[].forEach.call(iconContainer, function (params) {
  params.addEventListener('mouseenter', onIconContainerMouseEnter);
});
buttonGrid.addEventListener('mouseleave', onIconContainerMouseLeave);

function onSearchInputScroll(event) {
  //TODO
  if (searchInput.placeholder == '통합검색') {
    searchInput.placeholder = '에브리타임검색';
    searchInput.name = '';
    searchForm.action = 'https://everytime.kr/search/all/';
  } else {
    searchInput.placeholder = '통합검색';
    searchInput.name = 'qt';
    searchForm.action = 'https://www.smu.ac.kr/search/search.do?menu=통합검색';
  }
}
searchForm.addEventListener('wheel', onSearchInputScroll);
