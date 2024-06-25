import MainNavigator from "../components/MainNavigator";

export default function ErrorPage() {
  return (
    <>
      <MainNavigator />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}
