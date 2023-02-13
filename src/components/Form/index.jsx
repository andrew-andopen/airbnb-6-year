import React from "react";
import { useEffect, useContext, useState } from "react";

import { useForm } from "react-hook-form";

import DownArrow from "../../images/down_arrow.svg";
import Button from "../Button";
import Dots from "../Dots";
import Success from "../Success";

import {
  StyledForm,
  StyledFormTitle,
  StyledField,
  StyledInput,
  StyledHalfField,
  StyledError,
  StyledFlex,
  StyledPhoneText,
  StyledSelect,
  StyledFormWrapper,
  StyledSuccessContainer,
  SuccessTitleContainer,
  SuccessH1,
} from "./styles";

import { StyledH1, StyledTitleContainer } from "../../styles";

const Form = ({ setStat }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://usebasin.com/f/ba46f5d6bdba", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      handleSubmit(true);
      setHasSubmitted(true);

      setStat(5);
    });
  };

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [searchParams] = useSearchParams();
  const searchFirst = searchParams.get("fname");
  const [firstName, setFirstname] = useState();
  const searchLast = searchParams.get("lname");
  const [lastName, setLastname] = useState();

  useEffect(() => {
    setFirstname(searchFirst);
    setLastname(searchLast);
  }, []);

  useEffect(() => {
    setValue("firstname", firstName);
    setValue("lastname", lastName);
    reset();
  }, []);

  return (
    <>
      {!hasSubmitted ? (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormTitle>
            Pop your address below, and we’ll get your anniversary gift on its
            way to you:
          </StyledFormTitle>
          <StyledFormWrapper>
            <StyledFlex>
              <StyledHalfField>
                <StyledInput
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  {...register("firstname", { required: true })}
                />
                {errors.firstname && (
                  <StyledError>First name is required</StyledError>
                )}
              </StyledHalfField>

              <StyledHalfField>
                <StyledInput
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  {...register("lastname", { required: true })}
                />
                {errors.lastname && (
                  <StyledError>Last name is required</StyledError>
                )}
              </StyledHalfField>
            </StyledFlex>

            <StyledField>
              <StyledInput
                type="text"
                name="addresslineone"
                placeholder="Address Line One"
                {...register("addresslineone", { required: true })}
              />
              {errors.addresslineone && (
                <StyledError>Address Line One is required</StyledError>
              )}
            </StyledField>

            <StyledField>
              <StyledInput
                type="text"
                name="addresslinetwo"
                placeholder="Address Line Two"
                {...register("addresslinetwo", { required: false })}
              />
            </StyledField>

            <StyledFlex>
              <StyledHalfField>
                <StyledInput
                  type="text"
                  name="city"
                  placeholder="City"
                  {...register("city", { required: true })}
                />
                {errors.city && <StyledError>City is required</StyledError>}
              </StyledHalfField>

              <StyledHalfField>
                <StyledInput
                  type="text"
                  name="provincestateregion"
                  placeholder="Province/State/Region"
                  {...register("provincestateregion", { required: true })}
                />
                {errors.provincestateregion && (
                  <StyledError>Province/State/Region is required</StyledError>
                )}
              </StyledHalfField>
            </StyledFlex>

            <StyledField>
              <StyledInput
                type="text"
                name="zippostcode"
                placeholder="Zip/Postcode"
                {...register("zippostcode", { required: true })}
              />
              {errors.zippostcode && (
                <StyledError>Zip/Postcode is required</StyledError>
              )}
            </StyledField>

            <StyledField>
              <StyledInput
                type="number"
                name="phonenumber"
                placeholder="Phone number"
                {...register("phonenumber", { required: true })}
              />
              {errors.phonenumber && (
                <StyledError>Phone number is required</StyledError>
              )}
              <StyledPhoneText>
                Your phone number will be used for delivery purposes only
              </StyledPhoneText>
            </StyledField>

            <StyledField>
              <StyledSelect
                type="text"
                name="country"
                placeholder="Select your country"
                {...register("country", { required: true })}
                DownArrow={DownArrow}
              >
                <option value="Choose your country">Choose your country</option>
                <option value="Argentina">Argentina</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Belgium">Belgium</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Canada">Canada</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Croatia">Croatia</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Estonia">Estonia</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Greece">Greece</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea, Republic of</option>
                <option value="Latvia">Latvia</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Malta">Malta</option>
                <option value="Mexico">Mexico</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Norway">Norway</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Romania">Romania</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="South Africa">South Africa</option>
                <option value="Span">Spain</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Thailand">Thailand</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </StyledSelect>
              {errors.country && <StyledError>Country is required</StyledError>}
            </StyledField>
          </StyledFormWrapper>

          <Button submit="Submit" type="submit"></Button>
        </StyledForm>
      ) : (
        <Success />
      )}
    </>
  );
};

export default Form;
