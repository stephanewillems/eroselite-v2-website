import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Image
        alt="Next.js logo"
        className="dark:invert"
        height={38}
        priority
        src="/next.svg"
        width={180}
      />
    </div>
  );
};

export default Home;
