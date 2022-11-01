import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function onAddMeetupPage(enteredMeetupData) {
    // console.log(enteredMeetupData)

    // equivalent to fetch("https://cloud.mongodb.....")
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    // show response message in the console
    console.log(data);

    router.push("/");
    // router.replace("/")
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupPage} />;
    </Fragment>
  );
}

export default NewMeetupPage;
