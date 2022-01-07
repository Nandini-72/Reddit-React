import React, { useState, useEffect } from "react";
import CardSection from "./CardSection";
import { Dropdown } from "react-bootstrap";
export default function Header() {
  const [value, setValue] = useState("dog");
  const [info, setInfo] = useState([]);
  const [heading, setHeading] = useState("Dogs");

  useEffect(() => {
    info.children = [];
    fetch(`https://www.reddit.com/r/${value}.json`)
      .then((response) => response.json())
      .then((data) => setInfo(data.data.children));
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="w-100"
        >
          Chose
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-100 text-center">
          <Dropdown.Item
            data-name="cats"
            onClick={(evt) => {
              setValue(evt.target.getAttribute("data-name"));
              setHeading(evt.target.innerHTML);
            }}
          >
            Cats
          </Dropdown.Item>
          <Dropdown.Item
            data-name="dog"
            onClick={(evt) => {
              setValue(evt.target.getAttribute("data-name"));
              setHeading(evt.target.innerHTML);
            }}
          >
            Dog
          </Dropdown.Item>
          <Dropdown.Item
            data-name="all"
            onClick={(evt) => {
              setValue(evt.target.getAttribute("data-name"));
              setHeading(evt.target.innerHTML);
            }}
          >
            All
          </Dropdown.Item>
          <Dropdown.Item
            data-name="images"
            onClick={(evt) => {
              setValue(evt.target.getAttribute("data-name"));
              setHeading(evt.target.innerHTML);
            }}
          >
            Random Images
          </Dropdown.Item>
          <Dropdown.Item
            data-name="alternativeart"
            onClick={(evt) => {
              setValue(evt.target.getAttribute("data-name"));
              setHeading(evt.target.innerHTML);
            }}
          >
            Art
          </Dropdown.Item>
          <Dropdown.Item
            data-name="aww"
            onClick={(evt) => {
              setValue(evt.target.getAttribute("data-name"));
              setHeading(evt.target.innerHTML);
            }}
          >
            Aww
          </Dropdown.Item>
          <Dropdown.Item
            data-name="gifts"
            onClick={(evt) => {
              setValue(evt.target.getAttribute("data-name"));
              setHeading(evt.target.innerHTML);
            }}
          >
            Gifts
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <p className="bg-dark mt-2 text-white p-1 text-center">{heading}</p>

      <div className="section-grid mt-3">
        {Object.keys(info).map(function (keyName, keyIndex) {
          return info[keyIndex].data.url.substring(0,18) !== "https://i.redd.it/" ? (
            <></>
          ) : (
            <CardSection
              url={info[keyIndex].data.url}
              title={info[keyIndex].data.title}
              no_of_comments={info[keyIndex].data.num_comments}
            />
          );
        })}
      </div>

    </div>
  );
}
