"use client";
import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  // Define a function to create a checkout session
  const createCheckoutSession = async () => {
    // Check if the user is authenticated
    if (!session?.user.id) return;

    // Set loading state to true
    setLoading(true);

    // Add a document to the "checkout_session" collection for the user
    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_session"),
      {
        price: "price_1PB6aGDmhJbc9K9RqkgkMwhp",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    // Listen for changes to the document and handle the response
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = "https://buy.stripe.com/test_7sI9CI199eG3fpS6oo";
      const error = data?.error;
      if (error) {
        // Display an alert if there is an error
        alert(`An error occurred: ${error.message}`);
        setLoading(false);
      }
      if (url) {
        // Redirect to the checkout URL if available
        window.location.assign(url);
        setLoading(false);
      }
    });
  };

  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font semibold landing-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus:visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
      >
        {loading ? "loading..." : "Sign Up"}
      </button>
    </div>
  );
}

export default CheckoutButton;
