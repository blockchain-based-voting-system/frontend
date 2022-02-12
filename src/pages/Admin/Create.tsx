import React, { useRef, useState } from "react";
import { RouteProps } from "react-router";
import { Formik } from "formik";

const Admin = (props: RouteProps) => {
  const [candidates, setCandidates] = useState<Array<string>>([]);
  const [text, setText] = useState<string>("");

  const candidateField = useRef<HTMLInputElement>(null);

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {
          console.log({ values, candidates });
        }}
      >
        {({ errors, touched, getFieldProps, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                id="name"
                type="text"
                placeholder="Poll Name"
                {...getFieldProps("name")}
              />

              <div className="form-error-text">
                {touched.name && errors.name ? errors.name : null}
              </div>
            </div>

            {candidates.length !== 0 ? (
              <div className="candidates-container">
                {candidates.map((candidate, index) => (
                  <div key={index} className="candidate-wrapper">
                    <span>{candidate}</span>
                    <span
                      onClick={() => {
                        const newList = [...candidates];
                        const i = newList.indexOf(candidate);
                        newList.splice(i, 1);

                        setCandidates(newList);
                      }}
                      className="remove"
                    >
                      <i className="bi bi-dash-circle"></i>
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="input-container">
              <div className="add-candidate-wrapper">
                <input
                  id="candidates"
                  type="text"
                  placeholder="Add Candidate"
                  ref={candidateField}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />

                <button
                  className=""
                  type="button"
                  onClick={() => {
                    const newCandidate = text;
                    setCandidates([...candidates, newCandidate]);
                    if (candidateField.current)
                      candidateField.current.value = "";
                  }}
                >
                  Add
                </button>
              </div>
            </div>

            <button className="login-button button-primary" type="submit">
              Create
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Admin;
