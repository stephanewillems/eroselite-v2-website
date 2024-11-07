import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Image
        alt="Eros Elite logo"
        className="dark:invert"
        height={38}
        priority
        src="/EE_LOGO_BIG.webp"
        width={180}
      />
    </div>
  );
};

export default Home;
