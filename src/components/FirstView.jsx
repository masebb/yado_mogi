'use client'

import { Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import Image from 'next/image';

export default function FirstView() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div class="text-center">
          <div className="text-white font-bold bg-sky-500 p-6 lg:p-12 shadow-2xl rounded-full m-10">
            <p className="text-xl m-2">筑波大学 やどかり祭 第100回 模擬店</p>
            <h1 className=" text-4xl lg:text-7xl">店名思いつかなくて顔ない</h1>
          </div>
          <p className="text-white font-bold text-xl bg-sky-800 p-8 lg:p-4 m-2 shadow-2xl rounded-full">顔ない ─ 合わせる顔がないに由来するネットスラング。顔はなくとも美味しいメロンパンアイスはあります。</p>
        </div>
      </div>
          <Splide
            hasTrack={false}
            options={{
              height: '100vh',
              width: '100vw',
              type: 'loop',
              arrows: false,
              drag: true,
              autoplay: true,
              interval: 3000,
            }}
          >
      <SplideTrack>
        <SplideSlide>
          <Image 
            src="/hakusigo.jpg"
            alt="博士号"
            priority={true}
            fill
            objectFit="cover"
            />
        </SplideSlide>
        <SplideSlide>
          <Image 
            src="/sisaku.jpg"
            alt="試作風景"
            priority={true}
            fill
            objectFit="cover"
            />
        </SplideSlide>
      </SplideTrack>
      </Splide>
    </>
    );
}
