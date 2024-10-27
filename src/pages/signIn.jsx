import React from 'react';
import FormSignIn from "../components/Fragments/FormSignIn"; // Pastikan ini benar
import AuthLayout from "../components/Layouts/AuthLayout"; // Pastikan ini sesuai

const SignInPage = () => {
  return (
    <AuthLayout type="sign in">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage;
