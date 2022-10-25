import React from "react";
import { Collection } from "./Collection";

import data from "./data.json";
import "./index.scss";
import { Pagination } from "./Pagination";

function App() {
  const [collections, setCollections] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1); // Текущая страница
  const [searchValue, setSearchValue] = React.useState("");
  const [categoryId, setCategoryId] = React.useState(0);

  const categorys = data.categories;

  const collectionsOnPage = 3; // Лимит коллекций на странице

  React.useEffect(() => {
    setCollections(data.collections);
  }, []);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [categoryId]);

  // Не добавили тут слайс чтоб передать кол-во отфильтрованных коллекций в пагинацию, для того чтобы страницы в пагинации
  // были динамические и ренедирились от кол-ва коллекций
  const items = collections
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        item.category.includes(categoryId)
    )
    .map((item, i) => {
      return <Collection key={i} name={item.name} images={item.photos} />;
    });

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {categorys.map((category, i) => {
            return (
              <li
                key={i}
                className={categoryId === i ? "active" : null}
                onClick={() => setCategoryId(i)}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {items.length > 0 ? (
          items.slice(
            currentPage * collectionsOnPage - collectionsOnPage,
            collectionsOnPage * currentPage
          )
        ) : (
          <h2>Коллекции не найдены</h2>
        )}
      </div>
      <Pagination
        pages={Math.ceil(items.length / collectionsOnPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
