import { Box, Flex, Input, Button, calc } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import PropTypes, { string } from "prop-types";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const router = useRouter();

  return (
    <Box height={"100vh"} width={"100vw"} bg={"black"} color={"white"}>
      <Flex justify={"center"} align={"center"} height={"100px"}>
        Hello
      </Flex>
      <Flex justify={"center"} align={"center"} height={"calc(100vh - 100px)"}>
        Form
      </Flex>
    </Box>
  );
};

AuthForm.propTypes = {
  mode: PropTypes.string,
};

export default AuthForm;
