const searchEngineUrl =
  "https://www.smu.ac.kr/search/search.do?menu=%ED%86%B5%ED%95%A9%EA%B2%80%EC%83%89&qt=";

const searchInput = document.querySelector("#search input");
const searchButton = document.querySelector("#search button");

function onSearchBtnClick() {
  const searchWord = searchInput.value;
  console.log(searchWord);
  whale.tabs.create({
    url: searchEngineUrl + searchWord,
  });
}
searchButton.addEventListener("click", onSearchBtnClick);
