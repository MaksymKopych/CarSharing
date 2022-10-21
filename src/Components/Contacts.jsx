import React from "react";

export const Contacts = () => {
  return (
    <section className="contakt" id="contact">
      <div className="contakt__logo">
        <span></span>Contact<span></span>
      </div>
      <form className="contakt__content grid">
        <img
          className="contakt__img span-6 span-md-12"
          src="images/form-photo.png"
        />
        <div className="contakt__form span-6 span-md-12">
          <label class="label" for="name">
            Your name
          </label>
          <input
            class="form__name"
            name="name"
            id="name"
            type="text"
            placeholder="Type your name"
          />
          <label class="label" for="maile">
            Your e-maile
          </label>
          <input
            class="form__mail"
            name="maile"
            id="emaile"
            type="email"
            placeholder="Type your e-mail"
          />
          <label class="label" for="massege">
            Your massege
          </label>
          <textarea
            class="form__massege"
            id="massege"
            name="massege"
            placeholder="Type your message"
          ></textarea>
          <label class="checkbox__label">
            <input class="form__checkbox" type="checkbox" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            molestiae mollitia veniam recusandae unde aliquid quas quasi hic
            obcaecati provident fuga a, praesentium, maiores beatae iusto odit
            accusantium cum magni assumenda, consequatur amet pariatur placeat?
          </label>
          <button class="form_button">Send</button>
        </div>
      </form>
    </section>
  );
};
