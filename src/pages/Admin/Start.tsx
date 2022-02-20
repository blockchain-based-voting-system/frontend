import React, { useRef, useState } from "react";
import { RouteProps } from "react-router";
import { Formik } from "formik";
import axios from "../../axios";

interface Candidate {
  name: string;
  info: string;
}

const Start = () => {
  const [candidates, setCandidates] = useState<Array<Candidate>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const candidateField = useRef<HTMLInputElement>(null);
  const candidateInfoField = useRef<HTMLInputElement>(null);

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={({ name, description }) => {
          setLoading(true);
          axios
            .post("/polls/start", { name, description, candidates })
            .then((_) => {
              window.location.reload();
            })
            .catch((error) => console.log({ error }));
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit }) => (
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

            <div className="input-container">
              <input
                id="description"
                type="text"
                placeholder="Poll Description"
                {...getFieldProps("description")}
              />

              <div className="form-error-text">
                {touched.description && errors.description
                  ? errors.description
                  : null}
              </div>
            </div>

            {candidates.length !== 0 ? (
              <div className="candidates-container">
                {candidates.map(({ name, info }, index) => (
                  <div key={index} className="candidate-wrapper">
                    <span>{name}</span>
                    <span
                      onClick={() => {
                        const newList = [...candidates];
                        const i = newList.indexOf({ name, info });
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
                  type="text"
                  placeholder="Add Candidate"
                  ref={candidateField}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <button
                  className=""
                  type="button"
                  onClick={() => {
                    const newCandidate = { name, info };
                    setCandidates([...candidates, newCandidate]);
                    if (candidateField.current)
                      candidateField.current.value = "";
                    if (candidateInfoField.current)
                      candidateInfoField.current.value = "";
                  }}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="input-container">
              <div className="add-candidate-wrapper">
                <input
                  type="text"
                  placeholder="Candidate Info"
                  ref={candidateInfoField}
                  onChange={(e) => {
                    setInfo(e.target.value);
                  }}
                />
              </div>
            </div>

            <button className="login-button button-primary" type="submit">
              Start Election
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Start;
