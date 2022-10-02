import React from "react";
import Card from "../../components/prouductcart/ProuductCart";
import image from "../../assets/images/apple.png"
import Container from "../../components/container/Container";
import CartRow from "../../components/CartRow/CartRow";

const Home = ()=>{
    const products = [
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
        {
            image: image,
            name: "نام آیتم در دسته بندی",
            price: 22_000_000,
            onClick: () => {},
        },
    ];
    console.log(products[0])
    return(
        <div className="Home">
            <Container>
                <CartRow className="mt-1" title={"دسته بندی اول"} href="/categories/1">
                    {products.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </CartRow>
                <CartRow className="mt-1" title={"دسته بندی دوم"} href="/categories/2">
                    {products.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </CartRow>
                <CartRow className="mt-1" title={"دسته بندی سوم"} href="/categories/3">
                    {products.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </CartRow>
            </Container>
        </div>
    );
}

export default Home;