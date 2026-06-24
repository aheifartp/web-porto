export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-bordercolor dark:border-darkBordercolor bg-bgsec dark:bg-darkBgsec transition-colors duration-300">
      <p className="text-textmuted dark:text-darkTextmuted text-sm font-mono font-medium">
        Designed & Built by{" "}
        <a 
          href="https://github.com/aheifartp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-textmain dark:text-darkTextmain font-bold hover:text-accent dark:hover:text-accent hover:underline transition-colors"
        >
          Muhammad Rafie Habibi Fauzi
        </a>
      </p>
    </footer>
  );
}
