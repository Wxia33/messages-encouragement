import Link from 'next/link';

export default function Responses() {
  // TODO: Placeholder data - replace with actual data fetching logic
  const mostSharedMessages = ['Message 1', 'Message 2', 'Message 3'];
  const mostLikedMessages = ['Message A', 'Message B', 'Message C'];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Aggregated Responses</h1>
      
      <section>
        <h2 className="text-xl font-semibold">Most Shared Messages</h2>
        <ul>
          {mostSharedMessages.map((msg, index) => (
            <li key={index} className="mt-2">{msg}</li>
          ))}
        </ul>
      </section>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Most Liked Messages</h2>
        <ul>
          {mostLikedMessages.map((msg, index) => (
            <li key={index} className="mt-2">{msg}</li>
          ))}
        </ul>
      </section>

      <div className="mt-8">
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Back to Home
        </Link>
      </div>
    </div>
  );
}
