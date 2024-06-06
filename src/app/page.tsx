import Header from "@/components/header";
import { flexCenter } from "@/components/style";

export default function Home() {
  return (
    <main className="w-full h-[100vh] bg-orange-100">
      <Header />
      <div className={`${flexCenter} flex-col w-[100%] p-5 rounded-md text-black`}>
        <p className="my-10 text-center">Welcome to Clerkaria, we provide build in authentication for your web applications.</p>

        <div className="rounded-md bg-white p-10">
          <h2 className="text-center text-orange-700 uppercase font-semibold mb-7 text-2xl">Our Major Goals</h2>
          <ol className="list-decimal">
            <li className="mb-2">We provide the authentication facilitation.</li>
            <li className="mb-2">Client can easily customize the pages.</li>
            <li className="mb-2">Supported by majority of browsers.</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
