import Head from "next/head";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

import Comments from "../../components/input/comments";

function EventDetailPage(props) {
  //const router = useRouter(); //use router object
  //const eventId = router.query.eventId; //access to query in key "eventId"

  //const event = getEventById(eventId); //get event
  const event = props.selectedEvent;

  if (!event) {
    return (
      <Fragment>
        <div className="center">
          {/* <Button link="/">All Events Page</Button> */}
          <p>Loading...</p>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
