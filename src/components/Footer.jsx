export default function Footer({ site }) {
    return (
        <footer className="bg-white dark:bg-gray-800 py-6 mt-12">
            <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
                <p>
                    © {new Date().getFullYear()} {site.title}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
