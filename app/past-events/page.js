export default function PastEvents() {
  return (
    <section className="px-4 pt-20 pb-10">
      <h2 className="text-3xl text-center text-yellow-400 font-bold mb-6">
        Event Highlights
      </h2>

      <img
        src="/past-events/poster.jpg"
        className="rounded-xl mb-8"
      />

      <div className="columns-2 gap-3">
        {["event1","event2","event3","event4","event5"].map((e, i) => (
          <img
            key={i}
            src={`/past-events/${e}.jpg`}
            className="rounded-xl mb-3"
          />
        ))}
      </div>
    </section>
  );
}