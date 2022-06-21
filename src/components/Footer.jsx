const Footer = () => {
  return (
    <footer className="py-4">
      <p className="text-center text-white">
        Copyright {new Date().getFullYear()} by{" "}
        <a
          href="https://github.com/manikangkandas"
          className="underline underline-offset-8">
          manikangkandas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
