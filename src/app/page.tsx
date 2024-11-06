import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
};

export default Home;
