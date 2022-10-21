import React from "react";

export const Service = () => {
  return (
    <section className="service" id="service">
      <div className="service__logo">
        <span></span>service<span></span>
      </div>
      <div className="cervice__content grid">
        <section className="service__content-section span-3 span-md-6 span-sm-12">
          <img src="./images/mini1.png" class="service__img" />
          <h2 className="cervice__tekst">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consectetur facere labore numquam cupiditate accusantium aut ex
            eligendi provident illum.
          </p>
          <button className="cervice__button">
            <a href="">Read more</a>
          </button>
        </section>
        <section className="service__content-section span-3 span-md-6 span-sm-12">
          <img src="./images/mini2.png" class="service__img" />
          <h2 className="cervice__tekst">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consectetur facere labore numquam cupiditate accusantium aut ex
            eligendi provident illum.
          </p>
          <button className="cervice__button">
            <a href="/">Read more</a>
          </button>
        </section>
        <section className="service__content-section span-3 span-md-6 span-sm-12">
          <img src="./images/mini3.png" class="service__img" />
          <h2 class="cervice__tekst">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consectetur facere labore numquam cupiditate accusantium aut ex
            eligendi provident illum.
          </p>
          <button className="cervice__button">
            <a href="/">Read more</a>
          </button>
        </section>
        <section className="service__content-section span-3 span-md-6 span-sm-12">
          <img src="./images/mini4.png" class="service__img" />
          <h2 className="cervice__tekst">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consectetur facere labore numquam cupiditate accusantium aut ex
            eligendi provident illum.
          </p>
          <button className="cervice__button">
            <a href="/">Read more</a>
          </button>
        </section>
      </div>
    </section>
  );
};
