import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Marquee from "react-fast-marquee";


type HorizontalLoopConfig = {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: boolean | number | ((value: number) => number);
  paddingRight?: number;
  reversed?: boolean;
};

// export function horizontalLoop(
//   items: gsap.DOMTarget[] | NodeListOf<Element> | Element[],
//   config: HorizontalLoopConfig = {}
// ): gsap.core.Timeline & {
//   next: (vars?: gsap.TweenVars) => gsap.core.Tween;
//   previous: (vars?: gsap.TweenVars) => gsap.core.Tween;
//   current: () => number;
//   toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
//   times: number[];
// } {
//   const tl = gsap.timeline({
//     repeat: config.repeat,
//     paused: config.paused,
//     defaults: { ease: "none" },
//     onReverseComplete: () =>
//       tl.totalTime(tl.rawTime() + tl.duration() * 100),
//   });

//   const elements = gsap.utils.toArray<HTMLElement>(items);
//   const length = elements.length;
//   const startX = elements[0].offsetLeft;
//   const times: number[] = [];
//   const widths: number[] = [];
//   const xPercents: number[] = [];
//   let curIndex = 0;
//   const pixelsPerSecond = (config.speed || 1) * 100;
//   const snap =
//     config.snap === false
//       ? (v: number) => v
//       : gsap.utils.snap(config.snap ?? 1);

//   let totalWidth: number;
//   let curX: number;
//   let distanceToStart: number;
//   let distanceToLoop: number;

//   gsap.set(elements, {
//     xPercent: (i, el) => {
//       const w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
//       const x = parseFloat(gsap.getProperty(el, "x", "px") as string) / w * 100;
//       const xp = gsap.getProperty(el, "xPercent") as number;
//       xPercents[i] = snap(x + xp);
//       return xPercents[i];
//     },
//   });

//   gsap.set(elements, { x: 0 });

//   totalWidth =
//     elements[length - 1].offsetLeft +
//     (xPercents[length - 1] / 100) * widths[length - 1] -
//     startX +
//     elements[length - 1].offsetWidth *
//     (gsap.getProperty(elements[length - 1], "scaleX") as number) +
//     (config.paddingRight || 0);

//   for (let i = 0; i < length; i++) {
//     const item = elements[i];
//     curX = (xPercents[i] / 100) * widths[i];
//     distanceToStart = item.offsetLeft + curX - startX;
//     distanceToLoop =
//       distanceToStart +
//       widths[i] * (gsap.getProperty(item, "scaleX") as number);

//     tl.to(
//       item,
//       {
//         xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
//         duration: distanceToLoop / pixelsPerSecond,
//       },
//       0
//     ).fromTo(
//       item,
//       {
//         xPercent: snap(
//           ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
//         ),
//       },
//       {
//         xPercent: xPercents[i],
//         duration:
//           (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
//         immediateRender: false,
//       },
//       distanceToLoop / pixelsPerSecond
//     ).add("label" + i, distanceToStart / pixelsPerSecond);

//     times[i] = distanceToStart / pixelsPerSecond;
//   }

//   function toIndex(index: number, vars?: gsap.TweenVars) {
//     vars = vars || {};
//     if (Math.abs(index - curIndex) > length / 2) {
//       index += index > curIndex ? -length : length;
//     }

//     const newIndex = gsap.utils.wrap(0, length, index);
//     let time = times[newIndex];

//     if ((time > tl.time()) !== (index > curIndex)) {
//       vars.modifiers = {
//         time: gsap.utils.wrap(0, tl.duration()),
//       };
//       time += tl.duration() * (index > curIndex ? 1 : -1);
//     }

//     curIndex = newIndex;
//     vars.overwrite = true;

//     return tl.tweenTo(time, vars);
//   }

//   (tl as any).next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
//   (tl as any).previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
//   (tl as any).current = () => curIndex;
//   (tl as any).toIndex = (index: number, vars?: gsap.TweenVars) =>
//     toIndex(index, vars);
//   (tl as any).times = times;

//   tl.progress(1, true).progress(0, true);

//   if (config.reversed) {
//     tl.vars.onReverseComplete!();
//     tl.reverse();
//   }

//   return tl as typeof tl & {
//     next: (vars?: gsap.TweenVars) => gsap.core.Tween;
//     previous: (vars?: gsap.TweenVars) => gsap.core.Tween;
//     current: () => number;
//     toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
//     times: number[];
//   };
// }

const InfiniteMarqueeComponent = () => {
  const logosWrapper = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //     const arrayLogos = logosWrapper.current?.children;
  //     if (arrayLogos) {
  //         const logosArray = Array.from(arrayLogos);
  //         const loop = horizontalLoop(logosArray, { paused: false, repeat: -1 });
  //     }
  // }, []);

  return (
    <div className='py-20 flex flex-col items-center w-[100vw] overflow-x-hidden'>
      <h2 className="p-5 text-4xl pb-20 text-center text-white w-full lg:w-[50%]">Trabajamos con marcas que usan las <span className='underline decoration-[#d140f6ee]'>mejores herramientas</span> del mercado</h2>
      <div>
        <div className="relative h-min" ref={logosWrapper}>
          <div
            className='w-[100%] h-[100%] absolute z-10 top-0 left-0'
            style={{
              background: 'linear-gradient(95deg,rgba(10, 10, 10, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(10, 10, 10, 1) 100%)'
            }}
          ></div>
          <Marquee
            autoFill={true}
          >
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./1.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./3.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./4.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./5.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./6.png" alt="" />
            <img className='h-[20px] md:h-[40px] filter brightness-0 invert pr-10 md:pr-30' src="./8.png" alt="" />
          </Marquee>
        </div>

      </div>
    </div>

  )
}

export default InfiniteMarqueeComponent