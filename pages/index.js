import Layout from "../components/Layout";
import { API_URL } from "../config/index";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcomming Events</h1>
      {events.length === 0 && <h3>No Events to Show</h3>}

      {events.map((evt) => (
        <h3 key={evt.id}>{evt.name}</h3>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
