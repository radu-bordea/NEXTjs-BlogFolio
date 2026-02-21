import Link from "next/link";

type HeroProps = {
  name?: string;
  text?: string;
};

const Hero = ({
  name = "Radu",
  text = "build friendly web experiences and help others run their businesses.",
}: HeroProps) => {
  return (
    <header className="text-center py-20 px-4 bg-gray-300 text-gray-500 transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">
        Hey, I'm {name} 👋
      </h2>

      <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-6">
        I {text}
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/projects"
          className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="border border-gray-500 text-gray-400 px-6 py-2 rounded hover:bg-gray-600 hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
