import axios from "axios";
import { useState, useEffect } from "react";
import H1 from "./H1";

const Contact = () => {
  const [bakery, setBakery] = useState(null);

  const dataFn = async () => {
    try {
      const { data } = await axios.get("data.json");
      setBakery(data.bakery);
    } catch (error) {
      console.error("Error fetching bakery data:", error);
    }
  };

  useEffect(() => {
    dataFn();
  }, []);

  useEffect(() => {
    if (bakery) {
      console.log(bakery);
    }
  }, [bakery]);

  if (!bakery) return <div>Loading...</div>;

  return (
    <>
      <H1 content={"Contact Information"} />

      <div className="m-auto p-4 border-[1px] w-[400px] border-black border-solid rounded-lg mb-4">
        <p>
          <strong>Location:</strong> {bakery.location}
        </p>
        <p>
          <strong>Phone:</strong> {bakery.contact.phone}
        </p>
        <p>
          <strong>Email:</strong> {bakery.contact.email}
        </p>
        <p>
          <strong>Follow us on:</strong>
        </p>
        <ul className="flex justify-between ">
          <li>
            <a
              href={bakery.contact.social_media.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={bakery.contact.social_media.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
