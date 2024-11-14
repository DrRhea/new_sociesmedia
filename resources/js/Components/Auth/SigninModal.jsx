import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  Modal,
  ModalContent,
  Checkbox,
} from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "@inertiajs/react"; // Ensure you have this import

const SigninModal = ({ isOpen, onOpenChange }) => {
  const [selected, setSelected] = useState("sign-up");

  // Using Inertia's useForm for login and registration forms
  const loginForm = useForm({
    username_or_email: "",
    password: "",
  });

  const registerForm = useForm({
    username: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleLogin = (e) => {
      e.preventDefault();
      
      loginForm.post("/login", {
        onError: (errors) => {
          console.log("Error pada login:", errors);
        },
        onSuccess: () => {
          console.log("Login berhasil");
        },
      });
  };

  const handleRegister = (e) => {
      e.preventDefault();

      registerForm.post("/register", {
        onError: (errors) => {
          console.log("Error pada register:", errors);
        },
        onSuccess: () => {
          console.log("Register berhasil");
        },
      });
  };


  const handleChange = (e, form) => {
    const { name, value } = e.target;
    form.setData(name, value);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        <Card>
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Formulir Tab"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Masuk">
                <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                  <Input
                    isRequired
                    label="Nama Pengguna atau Email"
                    type="text"
                    name="username_or_email"
                    value={loginForm.data.username_or_email}
                    onChange={(e) => handleChange(e, loginForm)}
                    helperText={loginForm.errors.username_or_email}
                    color={loginForm.errors.username_or_email ? "error" : "default"}
                  />
                  <Input
                    isRequired
                    label="Kata Sandi"
                    type="password"
                    name="password"
                    value={loginForm.data.password}
                    onChange={(e) => handleChange(e, loginForm)}
                    helperText={loginForm.errors.password}
                    color={loginForm.errors.password ? "error" : "default"}
                  />
                  <div className="flex justify-between items-center">
                    <Checkbox classNames={{ label: "text-small" }}>
                      Remember me
                    </Checkbox>
                    <Link size="sm" color="primary" href="#">
                      Lupa kata sandi?
                    </Link>
                  </div>
                  <div className="flex gap-2 justify-end mt-4">
                    <Button
                      type="submit"
                      fullWidth
                      color="primary"
                      isLoading={loginForm.processing} // Show loading state
                    >
                      Masuk
                    </Button>
                  </div>
                </form>
                <Separator asChild className="my-4 bg-background">
                  <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:before:border-gray-700 dark:after:border-gray-700">
                    Atau
                  </div>
                </Separator>
                <div className="grid">
                  <Button
                    className="bg-white border-2 border-blue-100 hover:bg-gray-50"
                    onClick={() => (window.location.href = "/login/google")}
                  >
                    <svg
                  className="w-4 h-auto mr-2"
                  width={46}
                  height={47}
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  {/* SVG path elements */}
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                    Masuk dengan Google
                  </Button>
                </div>
              </Tab>
              <Tab key="sign-up" title="Daftar">
                <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                  <Input
                    isRequired
                    label="Nama Pengguna"
                    name="username"
                    value={registerForm.data.username}
                    onChange={(e) => handleChange(e, registerForm)}
                    helperText={registerForm.errors.username}
                    color={registerForm.errors.username ? "error" : "default"}
                  />
                  <Input
                    isRequired
                    label="Nama Lengkap"
                    name="name"
                    value={registerForm.data.name}
                    onChange={(e) => handleChange(e, registerForm)}
                    helperText={registerForm.errors.name}
                    color={registerForm.errors.name ? "error" : "default"}
                  />
                  <Input
                    isRequired
                    label="Email"
                    type="email"
                    name="email"
                    value={registerForm.data.email}
                    onChange={(e) => handleChange(e, registerForm)}
                    helperText={registerForm.errors.email}
                    color={registerForm.errors.email ? "error" : "default"}
                  />
                  <Input
                    isRequired
                    label="Kata Sandi"
                    type="password"
                    name="password"
                    value={registerForm.data.password}
                    onChange={(e) => handleChange(e, registerForm)}
                    helperText={registerForm.errors.password}
                    color={registerForm.errors.password ? "error" : "default"}
                  />
                  <Input
                    isRequired
                    label="Konfirmasi Password"
                    type="password"
                    name="password_confirmation"
                    value={registerForm.data.password_confirmation}
                    onChange={(e) => handleChange(e, registerForm)}
                    helperText={registerForm.errors.password_confirmation}
                    color={registerForm.errors.password_confirmation ? "error" : "default"}
                  />
                  <div className="flex gap-2 justify-end mt-4">
                    <Button
                      type="submit"
                      fullWidth
                      color="primary"
                      isLoading={registerForm.processing} // Show loading state
                    >
                      Daftar
                    </Button>
                  </div>
                </form>
                <Separator asChild className="my-4 bg-background">
                  <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:before:border-gray-700 dark:after:border-gray-700">
                    Atau
                  </div>
                </Separator>
                <div className="grid">
                  <Button
                    className="bg-white border-2 border-blue-100 hover:bg-gray-50"
                    onClick={() => (window.location.href = "/auth/google")}
                  >
                    <svg
                  className="w-4 h-auto mr-2"
                  width={46}
                  height={47}
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  {/* SVG path elements */}
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                    Daftar dengan Google
                  </Button>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </ModalContent>
    </Modal>
  );
};

export default SigninModal;