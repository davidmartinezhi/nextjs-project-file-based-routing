import { getEventById, getAllEvents } from "../../helpers/api-utils";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function EventDetailPage(props) {
  //const router = useRouter(); //use router object
  //const eventId = router.query.eventId; //access to query in key "eventId"

  //const event = getEventById(eventId); //get event
  const event = props.selectedEvent;

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found :(</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/">All Events Page</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
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
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailPage;
