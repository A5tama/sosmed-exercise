"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import axios from "axios";
import { appConfig } from "@/utils/config";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema";
import FormInput from "@/components/forms/FormInput";

const Register: React.FC = () => {
  const router = useRouter();
  const { baseUrl } = appConfig;

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },

      validationSchema: RegisterValidationSchema,

      onSubmit: async (values) => {
        const { data } = await axios.get(
          baseUrl + `/users?email=${values.email}`,
        );

        if (data.length) {
          return alert("email already axist");
        }

        await axios.post(baseUrl + "/users", {
          name: values.name,
          email: values.email,
          password: values.password,
          isVerufy: false,
        });

        toast.success("Register success");
        router.push("/login");
      },
    });

  return (
    <main className="container mx-auto px-4">
      <div className="flex justify-center">
        <Card className="mt-8 w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Welcome to Sosmed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* NAME */}
                <FormInput
                  name="name"
                  error={errors.name}
                  isError={!!touched.name && !!errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Name"
                  type="text"
                  value={values.name}
                />

                {/* EMAIL */}
                <FormInput
                  name="name"
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Email"
                  type="text"
                  value={values.email}
                />

                {/* PASSWORD */}
                <FormInput
                  name="name"
                  error={errors.password}
                  isError={
                    !!touched.password && !!errors.password
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password"
                  type="text"
                  value={values.password}
                />
              </div>
              <Button className="mt-6 w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
