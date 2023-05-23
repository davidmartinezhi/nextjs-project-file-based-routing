import { getFeaturedEvents } from "../helpers/api-utils";

import EventList from "../components/events/EventList";

function HomePage(props) {
  return (
    <div>
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
  };
}
