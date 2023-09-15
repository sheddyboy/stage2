import { getTopMovies } from "@/utils";
import Image from "next/image";
import Link from "next/link";


export default async function HeroSlider() {
    const {results:movies} = await getTopMovies();
    const randomMovieIndex = Math.floor(Math.random() * movies.length);
    const {title,backdrop_path,overview} = movies[randomMovieIndex]


  return (
    <div className={`bg-cover bg-top`} style={{backgroundImage:`url('https://image.tmdb.org/t/p/original${backdrop_path}')`}}>
      <div className=" container pt-[22px]">
        <div className="flex flex-col gap-[12px] items-center justify-between sm:flex-row">
          <Link href={"/"} className="flex gap-[24px] items-center">
            <Image alt="" src="/assets/tv.png" width={50} height={50} />
            <p className=" text-[24px] font-bold text-white leading-[24px]">MovieBox</p>
          </Link>
          <form className="w-[70%] flex sm:w-[50%]">
            <input
              type="text"
              placeholder="What do you want to watch?"
              className=" w-full bg-transparent text-white placeholder:text-white placeholder:text-[16px] placeholder:leading-[24px] rounded-[6px] border-[2px] border-white px-[10px] py-[6px]"
            />
          </form>
          <div className="flex gap-[27px] items-center">
            <p className=" text-white text-[16px] leading-[24px] font-bold">Sign in</p>
            <Image alt="" src="/assets/menu.png" width={36} height={36} />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] text-white max-w-[400px] mt-[100px] pb-[157px]">
          <p className="text-[48px] leading-[56px] font-bold">{title}</p>
          <div className="flex gap-[34px] items-center">
            <div className="flex items-center gap-[10px]">
                <Image alt="" src="/assets/imdb-logo.png" width={35} height={17}/>
                <span className=" font-normal">86.0 / 100</span>
            </div>
            <div className="flex items-center gap-[10px]">
            <Image alt="" src="/assets/rotten-tomatoes-logo.png" width={16} height={17}/>
            <span className=" font-normal">97%</span>
            </div>
          </div>
          <p className=" font-medium text-[14px] leading-[18px]">{overview}</p>
          <button className="flex items-center px-[16px] py-[6px] gap-[8px] bg-[#BE123C] rounded-[6px] mr-auto">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                fill="white"
              />
            </svg>
            <p className="text-white capitalize text-[14px] leading-[24px] font-bold">Watch trailer</p>
          </button>
        </div>
      </div>
    </div>
  );
}
