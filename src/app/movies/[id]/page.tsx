import { getMovie, getTopMovies } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { overview, title, release_date, runtime,backdrop_path } =
    await getMovie({ id });
  const movies = await getTopMovies();
  return (
    <div className="flex min-h-screen">
      <div className="fixed top-[0px] bottom-[0px] translate-x-[-100%] transition-all z-[1] h-screen bg-white sm:sticky sm:translate-x-[0%] flex flex-col justify-between pt-[52px] rounded-r-[45px] border border-[#0000004D]">
        <Link href="/" className="translate-x-[100%] sm:translate-x-[0%] flex flex-col items-center gap-[24px] pl-[20px] mb-[78px] md:flex-row">
          <Image alt="" src="/assets/tv.png" width={50} height={50} />
          <p className="text-[#333] text-[24px] leading-[24px] font-bold hidden sm:inline">
            MovieBox
          </p>
        </Link>
        <div className="flex flex-col mb-[50px]">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-[15px] h-[86px] pl-[42px] text-[#666] border-r-[6px] border-r-transparent hover:border-r-[#BE123C] hover:bg-[#BE123C1A] hover:text-[#BE123C]"
          >
            <Image alt="" src="/assets/Home.png" width={25} height={25} />
            <p className="text-[20px] font-semibold leading-[30px]">Home</p>
          </Link>
          <div className="cursor-pointer flex items-center gap-[15px] h-[86px] pl-[42px] border-r-[6px] border-r-transparent border-r-[#BE123C] bg-[#BE123C1A] text-[#BE123C]">
            <Image
              alt=""
              src="/assets/movie-projector.png"
              width={25}
              height={25}
            />
            <p className="text-[20px] font-semibold leading-[30px]">Movie</p>
          </div>
          <div className="cursor-pointer flex items-center gap-[15px] h-[86px] pl-[42px] text-[#666] border-r-[6px] border-r-transparent hover:border-r-[#BE123C] hover:bg-[#BE123C1A] hover:text-[#BE123C]">
            <Image alt="" src="/assets/TV Show.png" width={25} height={25} />
            <p className="text-[20px] font-semibold leading-[30px]">
              TV Series
            </p>
          </div>
          <div className="cursor-pointer flex items-center gap-[15px] h-[86px] pl-[42px] text-[#666] border-r-[6px] border-r-transparent hover:border-r-[#BE123C] hover:bg-[#BE123C1A] hover:text-[#BE123C]">
            <Image alt="" src="/assets/Calendar.png" width={25} height={25} />
            <p className="text-[20px] font-semibold leading-[30px]">Upcoming</p>
          </div>
        </div>
        <div className="w-[170px] mx-[28px] mb-[44px] flex flex-col gap-[8px] rounded-[20px] p-[16px] pt-[42px] bg-[#F8E7EB66] border border-[#BE123CB2]">
          <p className="text-[#333333CC] text-[15px] font-semibold leading-[22.5px]">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[#666] text-[12px] font-medium leading-[18px]">
            50k people are playing now
          </p>
          <button className="rounded-[30px] px-[17px] py-[6px] bg-[#BE123C33] text-[#BE123C] text-[12px] font-medium leading-[18px]">
            Start playing
          </button>
        </div>
        <div className="ml-[42px] flex gap-[24px] mb-[70px]">
          <Image alt="" src="/assets/Logout.png" width={30} height={30} />
          <p className="text-[#666] text-[20px] font-semibold leading-[30px]">
            Log Out
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] justify-between px-[50px] pt-[38px] pb-[20px] flex-grow">
        <div className="relative min-h-[450px] flex items-center justify-center flex-grow rounded-[20px] overflow-hidden">
          <Image
            alt=""
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            fill
            objectFit="cover"
            objectPosition="center"
            className="z-[1px]"
          />
          <div className="flex flex-col gap-[9px] absolute items-center">
            <div className="flex items-center justify-center w-[110px] h-[110px] rounded-full bg-white filter drop-shadow-md bg-opacity-[30%]">
              <Image alt="" src="/assets/play.png" width={54} height={54} />
            </div>
            <p className="text-[25px] font-medium text-white">Watch Trailer</p>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col justify-between items-start lg:flex-row lg:items-center">
            <div className="flex gap-[16px] items-center">
              <p>
                <span data-testid="movie-title">{title}</span> •{" "}
                <span data-testid="movie-release-date">
                  {new Date(release_date).toUTCString()}
                </span>{" "}
                • PG-13 • <span data-testid="movie-runtime">{runtime}</span> mins
              </p>
              <div className="flex flex-col items-center gap-[10px] md:flex-row">
                <p className="px-[16px] py-[3px] text-[#B91C1C] rounded-[15px] border border-[#F8E7EB] text-[15px] font-medium">
                  Action
                </p>
                <p className="px-[16px] py-[3px] text-[#B91C1C] rounded-[15px] border border-[#F8E7EB] text-[15px] font-medium">
                  Drama
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                alt=""
                src="/assets/Star.png"
                width={30}
                height={30}
                className="mr-[10px]"
              />
              <span className="text-[#E8E8E8] text-[25px] font-medium leading-[37.5px]">
                8.5 
              </span>
              <span className="text-[#666] text-[20px] font-medium leading-[30px]">
                | 350k
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[26px] lg:flex-row">
            <div className="flex flex-col gap-[36px]">
              <p
                className="text-[20px] leading-[30px]"
                data-testid="movie-overview"
              >
                {overview}
              </p>
              <div className="flex flex-col gap-[30px]">
                <p className="text-[20px] leading-[30px] text-[#333]">
                  Director :{" "}
                  <span className="text-[#BE123C] block md:inline">Joseph Kosinski</span>
                </p>
                <p className="text-[20px] leading-[30px] text-[#333]">
                  Writers :{" "}
                  <span className="text-[#BE123C] block md:inline">
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </p>
                <p className="text-[20px] leading-[30px] text-[#333]">
                  Stars :{" "}
                  <span className="text-[#BE123C] block md:inline">
                    Tom Cruise, Jennifer Connelly, Miles Teller
                  </span>
                </p>
              </div>
              <div className="flex gap-[24px] items-center justify-center">
                <button className="bg-[#BE123C] text-white px-[20px] py-[12px] rounded-[10px]">
                  Top rated movie #65
                </button>
                <p className="text-[20px] leading-[30px] font-medium text-[#333]">
                  Awards 9 nominations
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[33px]">
              <div className="flex flex-col items-center gap-[12px]">
                <button className="py-[12px] w-[360px] flex justify-center gap-[12px] items-center text-white text-[20px] font-medium leading-[30px] bg-[#BE123C] rounded-[10px]">
                  <Image
                    alt=""
                    src="/assets/Two Tickets.png"
                    width={25}
                    height={25}
                  />
                  See Showtimes
                </button>
                <button className="py-[12px] w-[360px] flex justify-center gap-[12px] items-center text-[#333] text-[20px] font-medium leading-[30px] bg-[#BE123C1A] rounded-[10px]">
                  <Image alt="" src="/assets/List.png" width={25} height={25} />
                  More watch options
                </button>
              </div>
              <div className="flex gap-[3px] rounded-[10px] overflow-hidden">
                {movies.results.sort(() => Math.random() - 0.5).slice(0, 3).map(({ id,poster_path }) => (
                  <Link href={`/movies/${id}`} key={id} className="relative h-[230px] w-full">
                    <Image
                      alt=""
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      fill
                      objectFit="cover"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
