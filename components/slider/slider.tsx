"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";
import "./style.css";

export default function ImageSlider({ data }: { data: ImageType[] }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid className="mainStyle">
      <Slider {...settings}>
        {data.map((item) => (
          <Link href={item.href} key={item.id}>
            <Image
              className="imageStyle"
              src={item.src}
              alt={item.title}
              width={1370}
              height={400}
              priority
            />
          </Link>
        ))}
      </Slider>
    </Grid>
  );
}
