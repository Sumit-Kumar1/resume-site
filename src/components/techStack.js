import Image from "next/image";

export default function TechStack() {
    return (
        <section id="techStack" className="dark:bg-[#353353] px-64 py-20">
            <h2 className="text-4xl font-bold text-[#5E5C7F]">Tech Stack</h2>

            <div className="divider"></div>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col gap-2">
                            <Image src="/images/techStack/golang.png" alt="Golang" width={50} height={50} />
                            <p>Golang</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
