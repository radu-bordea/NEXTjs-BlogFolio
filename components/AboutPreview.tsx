import Image from "next/image";
import Link from "next/link";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-5 flex flex-col items-center gap-8 bg-gray-300 md:flex-row">
      <div className="relative shrink-0 w-24 h-24">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-400 shadow-md">
          <Image
            src="/images/profile.jpg"
            alt="profile image"
            className="object-cover w-full h-full"
            width={96}
            height={96}
          />
        </div>
        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-gray-300" />
      </div>
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
