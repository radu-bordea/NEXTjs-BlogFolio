
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-300">
      {/* Intro  */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <Image
          src="/images/profile.jpg"
          alt="profile image"
          className="object-cover rounded-full border-4 border-gray-500 shadow-md"
          width={100}
          height={100}
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-500 mb-2">
            Hey, I am Radu
          </h1>
          <p className="text-gray-600 text-lg">
            I'm pasionate about web developer and I love building digital
            experience and helping others
          </p>
        </div>
      </div>

      {/* Bio Section  */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-500 mb-4">
          My Mission
        </h2>
        <p className="text-gray-600 leading-relax">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor neque
          possimus, iste magnam dolore sunt vero ipsa laboriosam fugiat eaque
          dolores incidunt natus, aliquid tenetur harum temporibus, deleniti
          aut? Modi autem fuga dolorum earum et aperiam perspiciatis saepe
          corrupti ab architecto debitis vel quidem maxime nemo accusantium
          recusandae officia, magnam molestiae sed eligendi reiciendis nesciunt,
          odit, velit atque! Laboriosam quisquam quasi consequuntur rerum dicta
          fugiat, iusto, culpa eligendi aliquam amet nemo ut, suscipit ex quod
          hic sit? Ratione tenetur atque nam quis praesentium voluptas excepturi
          unde ipsum, minus illum ipsam nihil facilis quae consequatur. Culpa
          voluptatem quam blanditiis adipisci totam.
        </p>
      </div>

      {/* Tech STack  */}
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-200">
        {[
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Prisma",
          "Neon/Postgres",
          "Clerk",
          "MongoDB",
          "Zod",
          "Vercel",
        ].map((tech) => (
          <li key={tech} className="bg-gray-500 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AboutPage;
