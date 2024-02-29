
/* eslint-disable jsx-a11y/anchor-is-valid */
function App() {

  const openMenu = () => {
    document.querySelector('.header__nav').classList.add('active')
  }
  
  const closeMenu = () => {
    document.querySelector('.header__nav').classList.remove('active')
  }

  return (
    <div className='wrapper'>
      <header className="header">
        <img src="./images/logo.svg" alt="" className="header__img" />
        <img src="./images/icon-menu.svg" alt="" className="header__menu" onClick={openMenu}/>
        <nav className="header__nav">
          <article className="header__nav__list">
            <img src="./images/icon-menu-close.svg" alt="" className="header__menu--close" onClick={closeMenu}/>
            <article className="header__nav__list__links">
              <a href="#" className="header__nav__list__links__item">Home</a>
              <a href="#" className="header__nav__list__links__item">New</a>
              <a href="#" className="header__nav__list__links__item">Popular</a>
              <a href="#" className="header__nav__list__links__item">Trending</a>
              <a href="#" className="header__nav__list__links__item">Categories</a>
            </article>
          </article>
        </nav>
      </header>
      <div className="news">
        <div className="news__main">
          <img className="news__main__img" alt="main content" src="./images/image-web-3-mobile.jpg" />
            <article className="news__main__wrapper">
            <h1 className="news__main__title">The Bright Future of Web 3.0?</h1>
            <article className="news__main__content">
              <p className="news__main__content__text">
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
              </p>
              <button className="news__main__content__btn">Read more</button>
            </article>
          </article>
        </div>
        
        <div className="news__side">
          <h2 className="news__side__title">New</h2>
          <article className="news__side__content">
            <span className="news__side__content__card">
              <h3 className="news__side__content__card__title">Hydrogen VS Electric Cars</h3>
              <p className="news__side__content__card__text">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </span>
              <span className="divide"></span>
            <span className="news__side__content__card">
              <h3 className="news__side__content__card__title">The Downsides of AI Artistry</h3>
              <p className="news__side__content__card__text">What are the possible adverse effects of on-demand AI image generation?</p>
            </span>
              <span className="divide"></span>
            <span className="news__side__content__card">
              <h3 className="news__side__content__card__title">Is VC Funding Drying Up?</h3>
              <p className="news__side__content__card__text">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </span>
          </article>
        </div>

        <div className="news__others">
          <article className="news__others__info">
            <img src="./images/image-retro-pcs.jpg" alt="" className="news__others__info__img" />
            <span className="news__others__info__content">
              <h3 className="news__others__info__content__num">01</h3>
              <h3 className="news__others__info__content__title">Reviving Retro PCs</h3>
              <p className="news__others__info__content__text">What happens when old PCs are given modern upgrades?</p>
            </span>
          </article>
          <article className="news__others__info">
            <img src="./images/image-top-laptops.jpg" alt="" className="news__others__info__img" />
            <span className="news__others__info__content">
              <h3 className="news__others__info__content__num">02</h3>
              <h3 className="news__others__info__content__title">Top 10 Laptops of 2022</h3>
              <p className="news__others__info__content__text">Our best picks for various needs and budgets.</p>
            </span>
          </article>
          <article className="news__others__info">
            <img src="./images/image-gaming-growth.jpg" alt="" className="news__others__info__img" />
            <span className="news__others__info__content">
              <h3 className="news__others__info__content__num">03</h3>
              <h3 className="news__others__info__content__title">The Growth of Gaming</h3>
              <p className="news__others__info__content__text">How the pandemic has sparked fresh opportunities.</p>
            </span>
          </article>
        </div>
        <span className="credits">Challenge by <a href="https://www.frontendmentor.io/home">Frontend Mentor</a>. Coded by <a href="https://github.com/8n9ght">8n9ght</a>.</span>
      </div>
    </div>
  );
}

export default App;
