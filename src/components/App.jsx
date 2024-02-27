function App() {
  return (
    <div className='wrapper'>
      <header className="header">

      </header>
      <div className="news">
        <div className="news__main">
          <img className="news__main__img" alt="main content image" />
          <h2 className="news__main__title"></h2>
          <article className="news__main__content">
            <p className="news__main__content__text"></p>
            <button className="news__main__content__btn"></button>
          </article>
        </div>
        
        <div className="news__side">
          <h2 className="news__side__title"></h2>
          <article className="news__side__content">
            <article className="news__side__cotent__card"></article>
            <article className="news__side__cotent__card"></article>
            <article className="news__side__cotent__card"></article>
          </article>
        </div>

        <div className="news__others">
          <article className="news__others__info">
            <img src="" alt="" className="news__others__info__img" />
            <span className="news__others__info__content">
              <h3 className="news__others__info__content__title"></h3>
              <p className="news__others__info__content__text"></p>
            </span>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
