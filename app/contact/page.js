export default function Contact() {
    return (
      <section className="px-10 py-12 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Contact Us
        </h2>
  
        <form className="space-y-4">
          <input
            className="w-full p-3 bg-grayDark rounded"
            placeholder="Name"
          />
          <input
            className="w-full p-3 bg-grayDark rounded"
            placeholder="Email"
          />
          <input
            className="w-full p-3 bg-grayDark rounded"
            placeholder="City"
          />
          <textarea
            className="w-full p-3 bg-grayDark rounded"
            placeholder="Message"
          />
  
          <button
            type="submit"
            className="bg-primary text-dark px-6 py-3 rounded font-semibold w-full"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  } 