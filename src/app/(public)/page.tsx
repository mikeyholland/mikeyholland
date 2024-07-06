// import Link from 'next/link';
// import { SanityDocument } from 'next-sanity';

// import { sanityFetch } from '../../../sanity/client';
import About from '../../components/About';
import Projects from '../../components/Projects';

// const EVENTS_QUERY = `*[_type == "event"]{_id, name, slug, date}|order(date desc)`;

export default async function Home() {
  // const events = await sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });

  // console.log({ events });
  return (
    <>
      <About />
      <Projects />
      {/* <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {events.map((event) => (
          <li className="bg-white p-4 rounded-lg" key={event._id}>
            <Link
              className="hover:underline"
              href={`/events/${event.slug.current}`}
            >
              <h2 className="text-xl font-semibold">{event?.name}</h2>
              <p className="text-gray-500">
                {new Date(event?.date).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
