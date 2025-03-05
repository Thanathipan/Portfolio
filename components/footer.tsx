export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            Thanathipan
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
            Full-Stack Developer specializing in modern web technologies.
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} Thanathipan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}