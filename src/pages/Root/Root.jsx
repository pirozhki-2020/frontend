import React from 'react';

import Block from 'components/Block';
import BlockContent from 'components/BlockContent';
import BlockContentTitle from "../../components/BlockContentTitle";
import Logo from "../../components/Logo";
import Line from "../../components/Line";
import ImageGallery from "components/ImageGallery";

const Root = () => {
    return (
        <>
            <Block part="top" image="../../../public/static/img/top.png"/>
            <Block part="middle" image="../../../public/static/img/middle.png"/>

            <Block part="content" image="../../../public/static/img/content.png">
                <BlockContent>
                    <Logo/>
                    <Line>Проект по подбору рецептов коктейлей по имеющимся ингредиентам.</Line>
                    <Line>Ключевые особенности:</Line>
                    <Line>• Список любимых рецептов</Line>
                    <Line>• Выбор близких по рецептуре коктейлей</Line>
                    <Line>• Отображение всех характеристик коктейлей</Line>
                    <Line>• Особенные подборки и фильтрация по обстановке</Line>
                    <Line>• Личный кабинет</Line>
                </BlockContent>
            </Block>

            <Block part="content" image="../../../public/static/img/content.png">
                <BlockContent>
                    <BlockContentTitle>Идея</BlockContentTitle>
                    <Line>Кулинарное приложение vs Алкогольное приложение</Line>
                    <ImageGallery children={["../../../public/static/img/2.png", "../../../public/static/img/3.png"]}/>
                </BlockContent>
            </Block>


            <Block part="content" image="../../../public/static/img/content.png">
                <BlockContent>
                    <BlockContentTitle>Разработка</BlockContentTitle>
                    <Line>Технологии и трудности</Line>
                    <ImageGallery size={200}
                                  children={[
                                      "../../../public/static/img/figma.png",
                                      "../../../public/static/img/web_scraper.png",
                                      "../../../public/static/img/django.png",
                                      "../../../public/static/img/android.png",
                                      "../../../public/static/img/react.png",
                                  ]}/>
                </BlockContent>
            </Block>

            <Block part="content" image="../../../public/static/img/content.png">
                <BlockContent>
                    <BlockContentTitle>Команда</BlockContentTitle>
                    <ImageGallery size={250}
                                  rounded={true}
                                  children={[
                                      "../../../public/static/img/liza.jpeg",
                                      "../../../public/static/img/nastya.jpeg",
                                      "../../../public/static/img/artyom.jpeg",
                                  ]}/>
                </BlockContent>
            </Block>


            <Block part="content" image="../../../public/static/img/content.png">
                <BlockContent>
                    <BlockContentTitle>Демонстрация</BlockContentTitle>
                </BlockContent>
            </Block>

            <Block part="bottom" image="../../../public/static/img/bottom.png"/>
        </>
    );
};

export default Root;
