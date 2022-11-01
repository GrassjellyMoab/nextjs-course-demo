import react, { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

// our-domain.com/new-meetup/[id]

function MeetUpDetails(props) {
  return (<Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content={props.meetupData.description}></meta>
    </Head>
    <MeetUpDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  </Fragment>
  );
}

// we need to pre-generate for all the URLs for all meetupId values that the user can enter
export async function getStaticPaths() {

  const client = await MongoClient.connect("mongodb+srv://Planking:qwertyuiop@cluster0.0stzx4p.mongodb.net/meetupList?retryWrites=true&w=majority");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // empty {} means give all objects, no filter criteria, 2nd argument tells which field to get, in this case only include _id but no other field values]
  // we fetch the document objects but they each will only include the id, nothing else
  const meetupsIDs = await meetupsCollection.find({}, {_id: 1}).toArray();

  return {
    // if fallback = false we say our paths contain all supported meetupId values, if non supported url entered, we see 404 error
    // if fallback: true => NextJs would try to generate a page for this meetupId dynamically on this server for this incoming request.
    fallback: false,
    // paths: [
    //   { params: {
    //     meetupId: 'm1',
    //   } },
    //   { params: {
    //     meetupId: 'm2',
    //   } },
    // ]
    paths: meetupsIDs.map(meetupID => ({ params: {meetupId: meetupID._id.toString() }}))
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const client = await MongoClient.connect("mongodb+srv://Planking:qwertyuiop@cluster0.0stzx4p.mongodb.net/meetupList?retryWrites=true&w=majority");
  const db = client.db();

  const meetupsCollection = db.collection("meetups"); 

  // get meetupId(parameter)
  const meetupId = context.params.meetupId;

  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId) });

  console.log(selectedMeetup);

  return {
    props: {
      meetupData: {
        // id passed in must be string
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetUpDetails;
