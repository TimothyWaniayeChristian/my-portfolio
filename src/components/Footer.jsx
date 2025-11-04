export default function Footer() {
    return (
        <footer className="w-full overflow-x-hidden bg-[#0D0D0D] border-t border-gray-800 mt-10">
            <div className="px-6 md:px-16 lg:px-24 py-6 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Timothy Christian Waniaye. All Rights Reserved.
            </div>
        </footer>
    );
}
