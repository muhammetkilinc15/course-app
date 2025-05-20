export default function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3">
                © {new Date().getFullYear()} course-app
            </div>
        </footer>
    );
}