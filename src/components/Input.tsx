import React, { useState } from "react";
import { TYPES } from "../redux";
import { connect } from "react-redux";
import {
  AccountType,
  MeterPointsType,
  ProductDetailsType,
  UsageDataType,
  UpdateResponseType,
  ActionGenericType,
} from "../types";

const URL =
  process.env.REACT_APP_MODE === ("development" || "test")
    ? "http://localhost:8000"
    : "https://energy-app-api.herokuapp.com/";

// const mapStateToProps = (state) => {
//   return {
//     location: locationSelector(state),
//   };
// };

const mapDispatchToProps = {
  setName: (payload: string) => ({ type: TYPES.setName, payload }),
  setProductDetails: (payload: ProductDetailsType) => ({
    type: TYPES.setProductDetails,
    payload,
  }),
  setMeterPoints: (payload: MeterPointsType[]) => ({
    type: TYPES.setMeterPoints,
    payload,
  }),
  setAccount: (payload: AccountType) => ({ type: TYPES.setAccount, payload }),
  setUsageData: (payload: UsageDataType[]) => ({
    type: TYPES.setUsageData,
    payload,
  }),
};

interface Props {
  setName: ActionGenericType<string>;
  setProductDetails: ActionGenericType<ProductDetailsType>;
  setMeterPoints: ActionGenericType<MeterPointsType[]>;
  setAccount: ActionGenericType<AccountType>;
  setIsOpenInput: React.Dispatch<React.SetStateAction<boolean>>;
  setUsageData: ActionGenericType<UsageDataType[]>;
}

const Input = ({
  setName,
  setProductDetails,
  setMeterPoints,
  setAccount,
  setIsOpenInput,
  setUsageData,
}: Props) => {
  const [value, setValue] = useState("");
  const [loginAttempt, setLoginAttempt] = useState({ text: "", error: "" });

  const verifyAndLogin = (input: string) => {
    setLoginAttempt({ text: "Attempting to verify...", error: "" });
    (async () => {
      try {
        const res: UpdateResponseType = await (
          await fetch(URL, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ input }),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json();
        if (res.verified && !res.error) {
          setIsOpenInput(false);
          setName(res.name);
          setProductDetails(res.obj.productDetails);
          setMeterPoints(res.obj.meterPoints);
          setAccount(res.obj.account);
          setUsageData(res.obj.usageData);
        } else {
          setName(res.name || "Guest");
          setLoginAttempt({ text: res.text, error: res.error as string });
        }
      } catch (err) {
        console.error(err);
        setLoginAttempt({ text: "Failed to verify password...", error: err });
      }
    })();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e?.target?.value);
  };
  return (
    <form id="input" onSubmit={(e) => e.preventDefault()}>
      <button onClick={() => setIsOpenInput(false)}>X</button>
      <h3>{loginAttempt.text}</h3>
      <label htmlFor="pass">Password</label>
      <input
        autoComplete="off"
        id="pass"
        type="password"
        onChange={onChange}
        value={value}
        placeholder="Enter Password..."
      />
      <button id="submitBtn" onClick={() => verifyAndLogin(value)}>
        Submit
      </button>
      {loginAttempt.error && <FullLogs error={loginAttempt.error} />}
    </form>
  );
};

const FullLogs = ({ error }: { error: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1em",
          height: "30px",
        }}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ marginLeft: "0px", marginRight: "5px" }}
        >
          {isExpanded ? "-" : "+"}
        </button>
        <p style={{ height: "30px", margin: "0px" }}>Full error...</p>
      </div>
      {isExpanded && <p>{`${error}`}</p>}
    </>
  );
};

export default connect(null, mapDispatchToProps)(Input);