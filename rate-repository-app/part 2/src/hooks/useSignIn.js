import { AUTHENTICATE } from "../graphql/mutations";
import { useMutation } from "@apollo/client";



const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments

    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
    //console.log(data)
    //console.log(data.authenticate)
    return data;
  };

  return [signIn, result];
};

export default useSignIn;