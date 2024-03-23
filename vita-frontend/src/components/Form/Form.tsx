import { FormEvent } from "react";
import { CustomForm } from "../../types";

import "./Form.css";

type FormProps = {
  createProperty: (event: FormEvent<CustomForm>) => void;
};

export const Form = (props: FormProps) => {
  const { createProperty } = props;

  return (
    <div className="Form-Container">
      <form onSubmit={createProperty} encType="multipart/form-data">
        <div className="Input-Container">
          <label>Name your listing </label>
          <input type="text" required id="name" />
        </div>
        <div className="Input-Container">
          <label>Add an image: </label>
          <input type="file" accept=".jpg" id="image" required />
        </div>
        <div className="Input-Container">
          <label>Enter the property address: </label>
          <input type="text" required id="address" />
        </div>
        <div className="Input-Container">
          <label>Enter the price: </label>
          <input type="number" required id="price" />
        </div>
        <div className="Input-Container">
          <label>Add a description: </label>
          <input type="text" required id="description" />
        </div>
        <div className="Form-Button">
          <button type="submit">
            <p>Create listing</p>
          </button>
        </div>
      </form>
    </div>
  );
};
