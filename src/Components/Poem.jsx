import React, { useState } from "react";

export default function Poem() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastNmae] = useState("");
  const [address, setAddress] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [hobby, setHobby] = useState("");
  const [petName, setPetName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !hobby || !favoriteColor || !petName) {
      alert("Please fill form fields!!");
      setIsSubmitted(false);
    } else {
      console.log("Form submitting!!!");
      setIsSubmitted(true);
      alert("Form submitted successfully!!!");
    }
  };

  const renderPoem = () => {
    if (!firstName || !lastName || !address || !hobby || !favoriteColor || !petName) {
      return <em>Fill in the form to reveal your poem ....</em>;
    }
    return (
      <>
        <p>
          In the land of
          <strong className="text-slate-800"> {address}</strong>, where the sky is{" "}
          <strong className="text-slate-800">{favoriteColor}</strong>, Lived{" "}
          <strong className="text-slate-800">
            {firstName} {lastName}
          </strong>
          , who loved <strong className="text-slate-800">{hobby}</strong> so much.
        </p>
        <p className="pb-8">
          With their pet <strong className="text-slate-800">{petName}</strong> always nearby, They
          laughed and played as the sun went down.
        </p>
      </>
    );
  };

  return (
    <>
      <div className="bg-slate-200 min-h-screen w-full px-4 py-6"> 
        <div className="max-w-3xl mx-auto"> 
          <h3 className="font-bold py-5 text-center text-xl md:text-2xl">Your Poem:</h3>
          {isSubmitted && <div className="text-center">{renderPoem()}</div>}
        </div>

        <div className="flex justify-center mt-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-slate-800 p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl"
          >
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              className="p-2 rounded-xl w-full focus:outline-none"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              className="p-2 rounded-xl w-full focus:outline-none"
              onChange={(e) => setLastNmae(e.target.value)}
            />
            <input
              type="text"
              value={address}
              placeholder="Address"
              className="p-2 rounded-xl w-full focus:outline-none"
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              value={favoriteColor}
              placeholder="Favorite Color"
              className="p-2 rounded-xl w-full focus:outline-none"
              onChange={(e) => setFavoriteColor(e.target.value)}
            />
            <input
              type="text"
              value={hobby}
              placeholder="Hobby"
              className="p-2 rounded-xl w-full focus:outline-none"
              onChange={(e) => setHobby(e.target.value)}
            />
            <input
              type="text"
              value={petName}
              placeholder="Pet Name"
              className="p-2 rounded-xl w-full focus:outline-none"
              onChange={(e) => setPetName(e.target.value)}
            />
            <button
              type="submit"
              className="border rounded-full text-white self-center px-6 py-2 font-bold hover:bg-slate-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
