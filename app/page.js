import Head from 'next/head';

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>Under Maintenance - Cyrus Electrical</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="max-w-lg bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Under Maintenance</h1>
          <p className="text-lg text-gray-600 mb-2">
            We are currently performing scheduled maintenance. We should be back online shortly.
          </p>
          <p className="text-lg text-gray-600">Thank you for your patience.</p>
        </div>
      </div>
    </>
  );
}
