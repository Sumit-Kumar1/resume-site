export default function Footer() {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <footer className="bg-[#353353] w-full text-center text-white py-10">
            <div className="flex flex-row gap-5 justify-center">
                <p>&copy; {year} Sumit Kumar. All rights reserved.</p>
            </div>
        </footer>
    )
}