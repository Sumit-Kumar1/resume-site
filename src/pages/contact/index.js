import Head from "next/head";

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Contact Me</h2>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
