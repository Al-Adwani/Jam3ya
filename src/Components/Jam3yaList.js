import { observer } from "mobx-react-lite";
import React from "react";
import jam3yaStore from "../Store/jam3yaStore";
import Jam3yaItem from "./Jam3yaItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { FormLabel, InputGroup } from "react-bootstrap";

function Jam3yaList() {
  const [query, setQuery] = useState("");
  const [check, setCheck] = useState(false);
  const [rangeOfPayment, setRangeOfPayment] = useState("");
  const handleRangeOfPayment = (e) => {
    console.log(e.target.value);
    setRangeOfPayment(e.target.value);
  };

  const handleChange = () => {
    if (check === true) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  const jam3yaList = jam3yaStore.jam3yat
    .filter((jam3ya) => jam3ya.title.toLowerCase().includes(query))
    .filter((jam3ya) => {
      if (check === true) {
        if (new Date(jam3ya.startDate) > new Date()) {
          return jam3ya;
        }
      } else {
        return jam3ya;
      }
    })
    .filter((jam3ya) => {
      if (rangeOfPayment <= jam3ya.amount) {
        return jam3ya;
      }
    })

    .map((jam3ya) => {
      return <Jam3yaItem jam3ya={jam3ya} key={jam3ya.id} />;
    });
  console.log(jam3yaList);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <InputGroup className="mb-3">
        <FormLabel>Date</FormLabel>
        <InputGroup.Checkbox
          checked={check}
          onChange={handleChange}
          aria-label="Checkbox for following text input"
        />
      </InputGroup>
      <label for="customRange1" class="form-label">
        Range of payment
      </label>
      <input
        type="range"
        class="form-range"
        id="customRange1"
        onChange={handleRangeOfPayment}
      />
      {jam3yaList}
    </div>
  );
}

export default observer(Jam3yaList);
