import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    State: "",
    postal_code: "",
    Comments: false,
    Candidates: false,
    Offers: false,
    PushNotifications: "",
  });

  function changeHandler(event) {
    const { value, name, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked :  value,
      };
    });
  }


  function submitHandler(event){
    event.preventDefault()

    console.log("printing all Data")

    console.log(formData)


  }

  return (
    <div className="w-full lg:max-w-[50%] mx-auto mt-8 mb-8 px-8">
      <h1 className="text-center my-4 text-3xl font-bold">Form in React</h1>
      <form onSubmit={submitHandler}>
        <label>
          <p className="font-medium text-md">First Name</p>
          <input

            required
            className="outline-none text-lg border-2 rounded-md py-2 px-4 w-full shadow-sm ring-1 mt-1"
            type="text"
            placeholder="mahendra"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />
        </label>
        <label>
          <p className="font-medium text-md mt-2">last Name</p>
          <input
            required
            className="border-2 rounded-md py-2 px-4 w-full shadow-sm ring-1 mt-1"
            type="text"
            placeholder="kumawat"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />
        </label>
        <label>
          <p className="font-medium text-md mt-2">Email address </p>
          <input
            required
            className="border-2 rounded-md py-2 px-4 w-full shadow-sm ring-1 mt-1"
            type="email"
            placeholder="example123@gmail.com"
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />
        </label>
        <label>
          <p className="font-medium text-md mt-2">Country</p>
          <select
            required
            className="border-2 rounded-md py-2 px-4 w-full shadow-sm ring-1 mt-1 bg-white"
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}>
            <option>Select Country</option>
            <option  value="India">India</option>
            <option value="US">US</option>
            <option value="singapur">singapur</option>
            <option value="australia">australia</option>
          </select>
        </label>

        <label>
          <p className="font-medium text-md mt-2">Street address </p>
          <input
            required
            className="border-2 rounded-md py-2 px-4 w-full shadow-sm ring-1 mt-1 bg-white"
            type="text"
            placeholder="1234 Main St"
            onChange={changeHandler}
            name="street"
            value={formData.street}
          />
        </label>

        <label>
          <p className="font-medium text-md mt-2">City </p>
          <input
            required
            className="border-2 rounded-md py-2 px-4 w-full shadow-sm ring-1 mt-1"
            type="text"
            placeholder="bikaner"
            onChange={changeHandler}
            name="city"
            value={formData.city}
          />
        </label>

        <label>
          <p className="font-medium text-md mt-2"> State / Province </p>
          <input
            required
            className="border-2 rounded-md py-2 px-4 w-full shadow-sm ring-1 mt-1"
            type="text"
            placeholder="Rajsthan"
            onChange={changeHandler}
            name="State"
            value={formData.State}
          />
        </label>

        <label>
          <p className="font-medium text-md mt-2">ZIP / Postal code</p>
          <input
            required
            className="border-2 rounded-md py-2 px-4 w-full shadow-sm ring-1 mt-1"
            type="text"
            placeholder="874728"
            onChange={changeHandler}
            name="postal_code"
            value={formData.postal_code}
          />
        </label>

        <div>
          <div className="py-4 font-medium text-md">By Email</div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label className="flex gap-3">
                <input
                  type="checkbox"
                  name="Comments"
                  id="Comments"
                  onChange={changeHandler}
                  checked={formData.Comments}
                />
                <p className="font-medium">Comments</p>
              </label>
              <p className="px-6 text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
            <div className="flex flex-col">
              <label className="flex gap-3">
                <input
                  type="checkbox"
                  name="Candidates"
                  id="Candidates"
                  onChange={changeHandler}
                  value={formData.Candidates}
                />
                <p className="font-medium">Candidates</p>
              </label>
              <p className="px-6 text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
            <div className="flex flex-col">
              <label className="flex gap-3">
                <input
                  type="checkbox"
                  name="Offers"
                  id="Offers"
                  onChange={changeHandler}
                  value={formData.Offers}
                />
                <p className="font-medium">Offers</p>
              </label>
              <p className="px-6 text-gray-500">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-y-3">
          <div>
            <p className="font-medium">Push Notifications</p>
            <p className="text-gray-500">
              These are delivered via SMS to your mobile phone.
            </p>
          </div>
          <label className="flex gap-x-4">
            <input
              type="radio"
              name="PushNotifications"
              onChange={changeHandler}
              value="Everything"
              checked={formData.PushNotifications === "Everything"}
            />
            <p className="font-medium">Everything</p>
          </label>
          <label className="flex gap-x-4">
            <input
              type="radio"
              name="PushNotifications"
              onChange={changeHandler}
              value="Same as email"
              checked={formData.PushNotifications === "Same as email"}
            />
            <p className="font-medium">Same as email</p>
          </label>
          <label className="flex gap-x-4">
            <input
              type="radio"
              name="PushNotifications"
              onChange={changeHandler}
              value="No push notifications"
              checked={formData.PushNotifications === "No push notifications"}
            />
            <p className="font-medium">No push notifications</p>
          </label>
        </div>

        <button className="bg-blue-600 py-2 px-4 my-6 rounded-md text-white font-bold cursor-pointer hover:bg-blue-700 transition-all duration-300">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
