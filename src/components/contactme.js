import Image from "next/image";

export default function ContactMe() {
  return (
    <section id="contact" className="dark:bg-[#353353] lg:px-64 lg:py-20 xs:p-5">
      <h2 className="text-4xl font-bold text-[#454360] dark:text-white">Contact Me</h2>
      <div className="divider"></div>
      <div className="flex md:flex-row md:gap-5 xs:flex-col xs:gap-1">
        <div className="flex flex-col gap-3 text-[#454360] dark:text-white">
          <p className="font-bold text-2xl">Let&apos;s talk about anything!!</p>
          <p>
            Don&apos;t like forms? Send me an{" "}
            <a href="mailto:sumitkumar123@gmail.com" className="text-red-500">
              email
            </a>
            .
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col gap-3">
          <form className="flex flex-col gap-5">
            <div className="flex md:flex-row md:gap-2 xs:flex-col xs:gap-3">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" placeholder="Your Name" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="text"
                  className="grow"
                  placeholder="example@email.com"
                />
              </label>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Subject" />
            </label>
            <textarea
              className="textarea textarea-bordered h-32"
              placeholder="Message"
              required={true}
            ></textarea>
            <div className="flex justify-start">
              <button className="btn btn-error text-white">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
