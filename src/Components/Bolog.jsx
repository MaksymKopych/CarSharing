import React from "react";

export const Bolog = () => {
  return (
    <section className="blog">
      <div className="blog__logo">
        <span id="blog"></span>blog<span></span>
      </div>
      <div className="grid">
        <section className="blog__content-section span-4 span-sm-12">
          <img src="./images/photo1.png" class="blog__img" />
          <h2 className="blog__tekst">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consectetur facere labore numquam cupiditate accusantium aut ex
            eligendi provident illum.
          </p>
          <button className="blog__button">
            <a href="/">Read more</a>
          </button>
        </section>
        <section className="blog__content-section span-4 span-sm-12">
          <img src="./images/photo2.png" class="blog__img" />
          <h2 className="blog__tekst">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consectetur facere labore numquam cupiditate accusantium aut ex
            eligendi provident illum.
          </p>
          <button className="blog__button">
            <a href="/">Read more</a>
          </button>
        </section>
        <section className="blog__content-section span-4 span-sm-12">
          <img src="./images/photo3.png" class="blog__img" />
          <h2 className="blog__tekst">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consectetur facere labore numquam cupiditate accusantium aut ex
            eligendi provident illum.
          </p>
          <button className="blog__button">
            <a href="/">Read more</a>
          </button>
        </section>
      </div>
    </section>
  );
};
