"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";




export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6  lg:grid-cols-5  md:grid-row-7  gap-4 max-w-7xl lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('divyanshchauhan520@gmail.com');
    setCopied(true);
    console.log("helooo");
    
  };
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col space-y-4 border border-white-[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(43,43,83,1) 45%, rgba(0,212,255,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center h-full '}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
            src={spareImg}
            alt={spareImg}

            className={'object-cover w-full h-full object-center'}
            />
          )}
        </div>
        {id ===6 && (
         <BackgroundGradientAnimation>
       </BackgroundGradientAnimation>       
         )}
      <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
     

      {/* {id === 2 && <GlobeDemo />} */}

      {id === 3 && (
        <div className="flex gap-2 lg:gap-2 w-fit absolute -right-3 lg:-right-2 ">
          <div className="flex flex-col gap-3 lg:gap-2 ">
            {['React.js', 'Next.js', 'TypeSccript'].map((item, index) => (
              <span key={`stack-item-${index}`} className="py-2 lg:py-2 lg:px-2 px-3 text-sm  lg:text-[12px]  opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                {item}
              </span>
            ))}
            <span className="py-5 px-3 rounded-lg text-center bg-[#10132e]" />
          </div>
          <div className="flex flex-col gap-3 lg:gap-2">
          <span className="py-5 px-3 rounded-lg text-center bg-[#10132e]" />
            {['MongoDB', 'TailwindCSS', 'Redux'].map((item, index) => (
              <span key={`stack-item-${index}`} className="py-2 lg:py-2 lg:px-2 px-3 text-xs lg:text-[12px] opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {id === 6 && (
        <div className="mt-5 relative">
          <div className={`absolute -bottom-5 right-0`}> 
            <Lottie options={{
              loop: copied,
              autoplay: copied,
              animationData: animationData,
              rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
              }
            }} />
           
          </div>
          <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
        </div>

      )}
      </div>
    </div>
    </div>
  );
};
