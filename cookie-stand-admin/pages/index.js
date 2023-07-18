import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie stand admin</title>
      </Head>
      <body className="bg-white">
        {/* Header */}
        <Header />
        <main className="flex flex-col items-center py-20  space-y-20">
          {/* form */}
          <Form />

          {/* question section */}
          {/* <Question /> */}

          <p className="text-4xl text-center">Report Table Coming Soon...</p>
        </main>
        <footer className="p-4 mt-20 bg-green-500 text-gray-50 text-black">
          &copy; 2023
        </footer>
      </body>
    </>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-green-500 text-gray-50">
      <h1 className="text-4xl text-black ">Cookie stand admin</h1>
    </header>
  );
}

function Form() {
  return (
    <form className="flex flex-col w-1/2 p-2 mx-auto my-4 bg-green-500 border-green-500 border-2 rounded-lg">
      <h1 className="mb-4 text-black text-center">Create Cookie Stand</h1>
      <div className="flex items-center mb-2">
        <label className="text-black">location</label>
        <input name="location" className="flex-auto pl-1 text-black ml-2" />
      </div>
      <div className="flex mb-2">
        <div className="w-10" />
        <label className="text-black">Minimum Customers<br/> per Hour</label>
        <div className="w-20" />
        <label className="text-black">Maximum Customers<br/> per Hour </label>
        <div className="w-20" />
        <label className="text-black">Avereg Cookie per<br/> Sale</label>
      </div>
      <div className="flex mb-2">
        <input name="min" className="flex-auto text-black pl-1 mr-2" />
        <input name="max" className="flex-auto text-black pl-1 mr-2" />
        <input name="avg" className="flex-auto text-black pl-1" />
        <button className="px-4 py-2 bg-green-900 text-gray-50 rounded ml-auto">
          Create
        </button>
      </div>
    </form>
  );
}

// function Question() {
//   return (
//     <div className="mx-auto my-4 bg-gray-900 rounded-full w-96 h-96">
//       <div className="">
//         <p className="text-xl text-center ">kukuju</p>
//       </div>
//     </div>
//   )
// }
