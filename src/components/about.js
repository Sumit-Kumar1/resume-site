import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="dark:bg-[#353353] px-64 py-20">
      <div className="">
        <h2 className="text-4xl font-bold text-[#454360] dark:text-white">About Me</h2>
        <div className="divider"></div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="mr-5">
              <Image
                src="/images/animated.png"
                className="bg-[#5E5C7F] rounded-full"
                alt="avatar-2"
                width={400}
                height={250}
              />
            </div>
            <div className="divider"></div>
          </div>

          <div className="rounded-xl shadow-2xl shadow-[#00000040] dark:bg-[#302f4e]">
            <div className="rounded p-[30px]">
              <div className="flex flex-row gap-5 px-15 h-full">
                <div className="m-3 flex flex-col gap-2 w-2/3 text-justify">
                  <p>
                    I am Sumit Kumar, backend developer from Rajasthan, India. I
                    have rich experience in backend development with golang and
                    postgres SQL. I am also a machine learning enthusiast and a
                    game developer.
                  </p>
                  <div className="mt-5">
                    <a
                      href="/document/Resume-Sumit-Kumar.pdf"
                      target="_blank"
                      className="btn btn-error text-white"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="w-full">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between">
                        <h4 className="font-bold">Backend API Development</h4>
                        <span>85%</span>
                      </div>
                      <progress
                        value="85"
                        max="100"
                        className="progress progress-warning"
                      ></progress>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between">
                        <h4 className="font-bold">Machine Learning</h4>
                        <span>74%</span>
                      </div>
                      <progress
                        value="74"
                        max="100"
                        className="progress progress-error"
                      ></progress>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between">
                        <h4 className="font-bold">Full Stack Development</h4>
                        <span>75%</span>
                      </div>
                      <progress
                        value="75"
                        max="100"
                        className="progress progress-primary"
                      ></progress>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between">
                        <h4 className="font-bold">Game Development</h4>
                        <span>75%</span>
                      </div>
                      <progress
                        value="75"
                        max="100"
                        className="progress progress-accent"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow-2xl mt-10 text-center w-full dark:bg-[#302f4e] dark:text-white">
        <div className="stat">
          <div className="stat-title">Highest Education (B.Tech)</div>
          <div className="stat-value">8.9</div>
          <div className="stat-desc">
            Jaypee University of Information Technology, Solan
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Projects Completed</div>
          <div className="stat-value">6</div>
          <div className="stat-desc">All projects are self-made</div>
        </div>

        <div className="stat">
          <div className="stat-title">Professional Experience</div>
          <div className="stat-value">1.5</div>
          <div className="stat-desc">(excluding internship)</div>
        </div>
      </div>
    </section>
  );
}
