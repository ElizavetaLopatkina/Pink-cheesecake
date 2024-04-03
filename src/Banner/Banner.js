import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Container fluid className="banner">
      <Carousel>
        <Carousel.Item className="banner-item-1">
          <h1 className="banner-header">
            Розовый
            <br />
            чизкейк
          </h1>
          <h1 className="banner-text">
            Я занимаюсь профессиональной выпечкой тортов уже более 15 лет. На
            своем опыте знаю, в момент процесса выпечки всегда не вовремя
            заканчивается нужный краситель, ломается фигурка, рассыпается смесь.
            Где кондитеру найти товары поздним вечером, ночью или ранним утром?
            У нас!
          </h1>
        </Carousel.Item>
        <Carousel.Item className="banner-item-2">
          <h1 className="banner-header">
            Вкусные шедевры
            <br />
            начинаются здесь
          </h1>
          <h1 className="banner-text">
            В нашем магазине вы найдете всё, что нужно для создания ваших
            кулинарных шедевров. От нежных силиконовых форм до острых ножей для
            декорирования. Наша команда экспертов всегда готова помочь вам с
            выбором и подсказать, какие инструменты подойдут именно для вашего
            проекта.
          </h1>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default Banner;
