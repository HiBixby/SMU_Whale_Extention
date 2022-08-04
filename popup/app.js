const searchEngineUrl =
  "https://www.smu.ac.kr/search/search.do?menu=통합검색&qt=";

const searchInput = document.querySelector("#search input");
const searchButton = document.querySelector("#search button");

function onSearchBtnClick() {
  const searchWord = searchInput.value;
  if (searchWord) {
    console.log(searchWord);
    whale.tabs.create({
      url: searchEngineUrl + searchWord,
    });
  }
}
searchButton.addEventListener("click", onSearchBtnClick);
