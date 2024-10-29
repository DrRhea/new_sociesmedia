import React from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody, Modal, ModalContent, Checkbox } from "@nextui-org/react";

const SigninModal = ({ isOpen, onOpenChange }) => {
  const [selected, setSelected] = React.useState("sign-up");

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        <Card className="">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Formulir Tab"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Masuk">
                <form className="flex flex-col gap-4">
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Masukkan email Anda"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Kata Sandi"
                    placeholder="Masukkan kata sandi Anda"
                    type="password"
                  />
                  <div className="flex justify-between items-center">
                    <Checkbox
                        classNames={{
                            label: "text-small",
                        }}>
                        Remember me
                    </Checkbox>
                    <Link size="sm" color="primary" href="#">
                      Lupa kata sandi?
                    </Link>
                  </div>
                  <div className="flex gap-2 justify-end mt-4">
                    <Button fullWidth color="primary">
                      Masuk
                    </Button>
                  </div>
                  <p className="text-center text-small mt-2">
                    Belum punya akun?{" "}
                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                      Daftar
                    </Link>
                  </p>
                </form>
              </Tab>
              <Tab key="sign-up" title="Daftar">
                <form className="flex flex-col gap-4 h-[300px]">
                  <Input
                    isRequired
                    label="Nama"
                    placeholder="Masukkan nama Anda"
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Masukkan email Anda"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Kata Sandi"
                    placeholder="Masukkan kata sandi Anda"
                    type="password"
                  />
                  <div className="flex gap-2 justify-end mt-4">
                    <Button fullWidth color="primary">
                      Daftar
                    </Button>
                  </div>
                  <p className="text-center text-small mb-2">
                    Sudah punya akun?{" "}
                    <Link size="sm" onPress={() => setSelected("login")}>
                      Masuk
                    </Link>
                  </p>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </ModalContent>
    </Modal>
  );
};

export default SigninModal;