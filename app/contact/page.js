export default function Contact() {
    return (
      <section className="px-10 py-12 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Contact Us
        </h2>
  
        <form className="space-y-4">
          <input
            className="w-full p-4 text-base"
            placeholder="Name"
          />
          <input
            className="w-full p-4 text-base"
            placeholder="Email"
          />
          <input
            className="w-full p-4 text-base"
            placeholder="City"
          />
          <textarea
            className="w-full p-4 text-base"
            placeholder="Message"
          />
  
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-4"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  } 