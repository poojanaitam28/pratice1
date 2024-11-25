import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    state:"",
    city:"",
    streetAddress:"",
    zipAdd: "",
    comment: false,
    candidates: false,
    offers: false,

  });

  function changeHandler(event) {
    const { name, value, } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="w-full h-full bg-slate-400 mt-5 flex flex-col justify-center">
      <form>

        <label htmlFor="firstname">First Name : </label>
        <input
          className="outline"
          type="text"
          placeholder="First Name"
          name="firstname"
          id="firstname"
          value={formData.firstname}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="lastname">Last Name : </label>
        <input
          className="outline"
          type="text"
          placeholder="Last Name"
          name="lastname"
          id="lastname"
          value={formData.lastname}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="email">Email : </label>
        <input
          className="outline"
          type="text"
          placeholder="example@gmail.com"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="country">Country : </label>
        <select name="country" id="country" value={formData.country}>
          <option>India</option>
          <option>USA</option>
          <option>Germany</option>
          <option>Italy</option>
          <option>Russia</option>
        </select><br></br>

        <label htmlFor="state">State : </label>
        <input
          className="outline"
          type="text"
          placeholder="State"
          name="state"
          id="state"
          value={formData.state}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="city">City : </label>
        <input
          className="outline"
          type="text"
          placeholder="City"
          name="city"
          id="city"
          value={formData.city}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="streetAddress">Street Address : </label>
        <input
          className="outline"
          type="text"
          placeholder="123 Main Street"
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="zip">Zip / Postal Code : </label>
        <input
          className="outline"
          type="text"
          placeholder="Zip Address"
          name="zip"
          id="zip"
          value={formData.zip}
          onChange={changeHandler}
        /><br></br>

      <fieldset>
        <legend>By Email : </legend>

        <div className="flex">
        <input 
        id="comment"
        type="checkbox"
        checked={formData.comment}
        onChange={changeHandler}
        />
        <div>
        <label htmlFor="comment">Comments</label>
        <p>Get notified when someone posts a comment.</p>
        </div>
        </div>

        <div className="flex">
        <input 
        id="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
        />
        <div> 
        <label htmlFor="candidates">candidates</label>
        <p>Get notified when someone posts a comment.</p>
        </div>
        </div>

        <div className="flex">
        <input 
        id="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
        />
        <div>
          
        <label htmlFor="offers">Offers</label>
        <p>Get notified when someone posts a comment.</p>
        </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Push Notification </legend>
        <p>These are delivered via SMS to your mobile phone.</p>

        <input
        type="radio"
        id="pushEverything"
        name="pushNotification"
        value="Everything"
        onChange={changeHandler}
        />
        <label htmlFor="pushEverything">Everything</label><br></br>

        <input
        type="radio"
        id="pushEmail"
        name="pushNotification"
        value="Same as Email"
        onChange={changeHandler}
        />
        <label htmlFor="pushEmail">Same as Email</label><br></br>

        <input
        type="radio"
        id="pushNothing"
        name="pushNotification"
        value="No Push Notification"
        onChange={changeHandler}
        />
        <label htmlFor="pushNothing">No Push Notification</label>


      </fieldset>



      </form>
    </div>
  );
}

export default App;
