import Image from "next/image";

interface MovieCardProps {
  liked:boolean;
  type:string;
  movieImage:string;
  countryYear:string;
  title:string;
  imdbRating:string;
  rottenTomatoesRating:string;
  genre:string;
}

export default function MovieCard({countryYear,genre,movieImage,imdbRating,liked,rottenTomatoesRating,title,type}: MovieCardProps) {
  return (
    <div className=" flex flex-col w-[250px] bg-white" data-testid="movie-card">
      <div className=" relative p-[16px] h-[370px] bg-no-repeat bg-cover" >
        <Image data-testid="movie-poster" alt="" src={movieImage} width={250} height={370} className="absolute left-[0%] top-[0%] bottom-[0%] right-[0%] "/>
        <div className="flex justify-between items-center relative">
          <span className="rounded-[12px] px-[8px] py-[3px] text-[#111827] bg-[#F3F4F680]">
            {type}
          </span>
          <div className="bg-[#F3F4F680] rounded-full w-[30px] h-[30px] flex items-center justify-center">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.17157 1.48284C2.73367 -0.0381453 5.26633 -0.0381453 6.82842 1.48284L7.99999 2.62359L9.17157 1.48284C10.7337 -0.0381453 13.2663 -0.0381453 14.8284 1.48284C16.3905 3.00383 16.3905 5.46984 14.8284 6.99083L7.99999 13.6396L1.17157 6.99083C-0.390524 5.46984 -0.390524 3.00383 1.17157 1.48284Z"
                fill={liked ?"#EF4444": "#D1D5DB"}
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="min-h-[120px] pt-[12px] bg-white flex flex-col gap-[12px]">
        <p className="text-[#9CA3AF] font-bold text-[12px] leading-[15.62px]" data-testid="movie-release-date">{countryYear}</p>
        <h2 className="text-[#111827] font-bold text-[18px] leading-[23.44px]" data-testid="movie-title">{title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <Image src="/assets/imdb-logo.png" height={17} width={37} alt="IMDB" />
            <span className=" font-normal text-[12px] leading-[12px] text-[#111827]">{imdbRating}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image src="/assets/rotten-tomatoes-logo.png" height={17} width={16} alt="Rotten Tomatoes" />
            <span className="font-normal text-[12px] leading-[12px] text-[#111827]">{rottenTomatoesRating}</span>
          </div>
        </div>
        <p className="text-[#9CA3AF] font-bold text-[12px] leading-[15.62px]">{genre}</p>
      </div>
    </div>
  );
}
