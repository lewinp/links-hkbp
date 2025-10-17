// import { NowPlaying } from "../components";
import Image from "next/image";
import Banners from "../components/Banner";
import Link from "next/link";
const name = "HKBP BATAM";
const Bio1 = "❝Signed off to live a different story❞";
const Bio2 = "Blogger | Dreamer | Observer 🗿";
import instagram from "../public/assests/logo/social/instagram.svg";
import github from "../public/assests/logo/social/github.svg";
import twitter from "../public/assests/logo/social/twitter.svg";
import pinterest from "../public/assests/logo/social/pinterest.svg";
import medium from "../public/assests/logo/social/medium.svg";
import discord from "../public/assests/logo/social/discord.svg";
// import spotify from "../public/assests/logo/social/spotify.svg";
import tiktok from "../public/assests/logo/social/tiktok.png";
import youtube from "../public/assests/logo/social/youtube.svg";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex min-h-screen flex-col bg-primary">
          <div
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-60 w-full bg-banner"
          />
          <div className="mx-auto -mt-20 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
            <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
              <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
                <div className="relative">
                  <Image
                    style={{ width: "130px", height: "130px" }}
                    className="rounded-full border-4 border-solid border-primary bg-primary object-cover"
                    src="/profile.png"
                    alt="profile"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="relative flex flex-row items-center justify-center">
                  <div className="mb-1 flex flex-col">
                    <div className="mt-1 flex flex-row items-center justify-center">
                      <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                        {name}
                      </span>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                      <a
                      // rel="noopener noreferrer nofollow"
                      // target="_blank"
                      // href=""
                      >
                        {Bio1}
                      </a>
                    </p>
                    {/*<div className="mt-3 flex flex-col">
                      <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                        {Bio2}
                      </p>
                    </div>*/}
                  </div>
                </div>
                <div className="mt-3">
                  <Banners />
                  <div className="mt-3 flex flex-row flex-wrap items-center justify-center gap-4">
                    <a
                      href="https://instagram.com/eleremen7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      href="https://x.com/romanromannya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={twitter}
                        alt="Twitter"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      href="https://www.tiktok.com/@eleremen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={tiktok} alt="TikTok" width={24} height={24} />
                    </a>
                    <a
                      href="https://id.pinterest.com/romanromannya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={pinterest}
                        alt="Pinterest"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      href="https://github.com/lrmn7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={github} alt="GitHub" width={24} height={24} />
                    </a>
                    {/* <a
                      href="https://open.spotify.com/artist/3jHW4HKnaYSaEmovirJRKj"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={spotify}
                        alt="Spotify"
                        width={24}
                        height={24}
                      />
                    </a> */}
                    <a
                      href="https://discord.com/invite/9HkKkkA9Jt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={discord}
                        alt="Discord"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@eleremen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={youtube}
                        alt="Youtube"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      href="https://medium.com/@lrmn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={medium} alt="Medium" width={24} height={24} />
                    </a>

                    <div className="max-w-s mt-1 w-full space-y-2">
                      <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                        <a
                          href="https://lrmn.is-a.dev/"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="w-full transition-all sm:hover:opacity-70"
                        >
                          <div>
                            <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                              <div className="flex items-center justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                  <span className="">🌐</span>
                                </div>
                                <div className="mx-4 flex flex-col">
                                  <span
                                    title="Personal Website"
                                    className="text-ellipsis text-[16px] text-zinc-400"
                                  >
                                    Personal Website
                                  </span>
                                  <span
                                    title="Personal Website"
                                    className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                  >
                                    Explore my biography, projects, and more
                                  </span>
                                </div>
                              </div>
                              <span className="absolute right-2 text-zinc-600 transition-all">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-8"
                                >
                                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </a>
                      </div>

                      <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                        <a
                          href="https://vp.lrmn.link/"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="w-full transition-all sm:hover:opacity-70"
                        >
                          <div>
                            <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                              <div className="flex items-center justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                  <span className=""> 📸 </span>
                                </div>
                                <div className="mx-4 flex flex-col">
                                  <span
                                    title="Virtual Photography"
                                    className="text-ellipsis text-[16px] text-zinc-400"
                                  >
                                    Virtual Photography
                                  </span>
                                  <span
                                    title="Web toolbox"
                                    className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                  >
                                    A collection of my in-game photography
                                  </span>
                                </div>
                              </div>
                              <span className="absolute right-2 text-zinc-600 transition-all">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-8"
                                >
                                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </a>
                      </div>

                      <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                        <a
                          href="https://music.lrmn.link/"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="w-full transition-all sm:hover:opacity-70"
                        >
                          <div>
                            <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                              <div className="flex items-center justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                  <span className=""> 📀 </span>
                                </div>
                                <div className="mx-4 flex flex-col">
                                  <span
                                    title="Nothing"
                                    className="text-ellipsis text-[16px] text-zinc-400"
                                  >
                                    Music
                                  </span>
                                  <span
                                    title=""
                                    className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                  >
                                    Those who wish to sing always find a song ♪
                                  </span>
                                </div>
                              </div>
                              <span className="absolute right-2 text-zinc-600 transition-all">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-8"
                                >
                                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </a>
                      </div>

                      <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                        <a
                          href="https://mewwme.lrmn.link/"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="w-full transition-all sm:hover:opacity-70"
                        >
                          <div>
                            <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                              <div className="flex items-center justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                  <span className=""> 🤖 </span>
                                </div>
                                <div className="mx-4 flex flex-col">
                                  <span
                                    title="Nothing"
                                    className="text-ellipsis text-[16px] text-zinc-400"
                                  >
                                    Mewwme&apos;s
                                  </span>
                                  <span
                                    title=""
                                    className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                  >
                                    The music bot that fills your server with
                                    endless melodies
                                  </span>
                                </div>
                              </div>
                              <span className="absolute right-2 text-zinc-600 transition-all">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-8"
                                >
                                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </a>
                      </div>

                      <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                        <Link
                          href="/passiveincome"
                          passHref
                          className="w-full transition-all sm:hover:opacity-70"
                        >
                          <div>
                            <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                              <div className="flex items-center justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                  <span className=""> 💸 </span>
                                </div>
                                <div className="mx-4 flex flex-col">
                                  <span
                                    title="Nothing"
                                    className="text-ellipsis text-[16px] text-zinc-400"
                                  >
                                    Passive Income
                                  </span>
                                  <span
                                    title=""
                                    className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                  >
                                    Looking for a way to earn passive income
                                    effortlessly?
                                  </span>
                                </div>
                              </div>
                              <span className="absolute right-2 text-zinc-600 transition-all">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-8"
                                >
                                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner"></div>
                  <div className="mb-4 flex justify-center"></div>
                </div>
              </div>
              {/* <NowPlaying /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 flex justify-center bg-primary">
        <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner">
          <footer>
            <div className="container mx-auto text-center">
              ✦ born from silence, built with purpose ✦
              <p className="text-gray text-s">
                {new Date().getFullYear()} L RMN. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
