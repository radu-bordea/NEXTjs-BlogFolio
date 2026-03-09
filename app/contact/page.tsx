import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-300">
      <h2 className="text-3xl font-bold text-gray-500 mb-8 text-center">
        ContactPage
      </h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-200 text-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-200 text-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-600"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-200 text-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-200 text-gray-500"
          />
        </div>
        <Button className="w-full bg-gray-500 hover:bg-gray-600 cursor-pointer text-white py-2 rounded-lg">Send Message</Button>
      </form>
    </div>
  );
};
export default ContactPage;
