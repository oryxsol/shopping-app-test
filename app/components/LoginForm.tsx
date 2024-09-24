"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import styled from "@emotion/styled";

// Validation schema using Zod
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [error, setError] = useState(""); // State to store API error message
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  // Handles form submission and API request
  const onSubmit = async (data: LoginFormData) => {
    axios
      .post(
        "https://dummyjson.com/auth/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log("success api of login ",res)
        reset(); // Resets form fields on successful submission
        router.push("/dashboard/products"); // Redirects to dashboard on success
      })
      .catch((err) => {
        setError(err.response.data.message); // Sets error message on API failure
      });
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Sign in</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Input Field */}
          <div>
            <Label htmlFor="username">Username</Label>
            <InputWrapper>
              <Input
                {...register("username")}
                type="text"
                placeholder="Enter username"
              />
              <IconWrapper>
                {/* Username icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" />
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
                </svg>
              </IconWrapper>
            </InputWrapper>
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </div>

          {/* Password Input Field */}
          <div>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
              <Input
                {...register("password")}
                type="password"
                placeholder="Enter password"
              />
              <IconWrapper>
                {/* Password icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4"
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                </svg>
              </IconWrapper>
            </InputWrapper>
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>

          {/* Display error message if API fails */}
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {/* Submit Button */}
          <Button type="submit">Sign in</Button>
        </form>
      </FormWrapper>
    </FormContainer>
  );
}

// Styled Components

const FormContainer = styled.div`
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: #e53e3e;
  margin-top: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px;
  &:hover {
    background-color: #0056b3;
  }
`;
