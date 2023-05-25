//Head can be added anywhere to my jsx code to a given component
//next js injects this to head of app, search engines will see it
import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-utils";

import EventList from "../components/events/EventList";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great event that allow you to evolve"
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}
//https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json
export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
