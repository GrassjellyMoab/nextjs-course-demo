import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some Address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some Address 5, 12345 Some City",
//     description: "This is a second meetup!",
//   },
// ];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups"></meta>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>;
    </Fragment>
  );
}

// code only executes during build process, not on server side and not on client side
// we do not fetch data during the 2nd component render cycle on the client, but initially before the page is pre-rendered during the build process
export async function getStaticProps() {
  // fetch data from an API
  // code is run during build time/ on server side so it will not be on client hence we dont need to redirect data from an api and can directly
  // retrieve data in getStaticProps()

  const client = await MongoClient.connect(
    "mongodb+srv://Planking:qwertyuiop@cluster0.0stzx4p.mongodb.net/meetupList?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // .find() is an async task returning a promise that will find all the documents in the collection
  // .toArray() ensures we get back an array of documents
  const meetups = await meetupsCollection.find().toArray();

  console.log(meetups);

  client.close();

  // all this code will execute whenever the page is pre-generated, not for every incoming request because its getStaticProps
  return {
    props: {
      // map out object since default _id given by mongoDB is an object type resulting in an error
      // `object` ("[object Object]") cannot be serialized as JSON.
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        // converts object id to string format
        id: meetup._id.toString(),
      })),
    },
    // number of seconds nextJs will wait until it regenerates the page for an incoming request
    revalidate: 10,
  };
}

// // function does not run during the build process but instead always on the server after deployment
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from API
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export default HomePage;
