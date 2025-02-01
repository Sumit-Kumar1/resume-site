import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="dark:bg-[#353353] px-64 py-20">
      <div className="">
        <h2 className="text-4xl font-bold text-[#5E5C7F]">About Me</h2>
        <div className="divider"></div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="mr-5">
              <Image
                src="https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg"
                alt="avatar-2"
                width={250}
                height={250}
              />
            </div>
            <div className="divider"></div>
          </div>

          <div className="rounded-xl shadow-xl">
            <div className="rounded p-[30px]">
              <div className="flex flex-row gap-5 px-15">
                <div className="m-3 flex flex-col gap-2 w-2/3">
                  <p>
                    I am Sumit Kumar, backend developer from Rajasthan, India. I
                    have rich experience in backend development with golang and
                    postgres SQL.
                  </p>
                  <div className="mt-5">
                    <a href="#" className="btn btn-error text-white">
                      Download CV
                    </a>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="w-full">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between">
                        <h4 className="font-bold">Software Development</h4>
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
                        <h4 className="font-bold">API Development</h4>
                        <span>85%</span>
                      </div>
                      <progress
                        value="95"
                        max="100"
                        className="progress progress-error"
                      ></progress>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between">
                        <h4 className="font-bold">Full Stack Development</h4>
                        <span>70%</span>
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

      <div className="stats stats-vertical lg:stats-horizontal shadow-2xl mt-10 text-center w-full">
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
