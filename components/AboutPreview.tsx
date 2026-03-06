import Image from "next/image";
import Link from "next/link";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col items-center gap-8 bg-gray-300 md:flex-row">
      <Image
        src="/images/profile.jpg"
        alt="profile image"
        className="object-cover rounded-full border-4 border-gray-500 shadow-md"
        width={100}
        height={100}
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-500 mb-2">About Me</h2>

        <p className="text-gray-600 mb-4 max-w-4xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          facilis, veritatis reiciendis vitae perferendis accusantium numquam
          harum impedit nisi maiores quidem.
        </p>
        <Link
          href="/about"
          className="inline-block text-blue-600 hover:underline text-sm"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
