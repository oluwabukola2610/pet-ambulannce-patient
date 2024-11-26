import { Redirect } from "expo-router";

const  Index = () => {
//   const { isSignedIn } = useAuth();

//   if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

  return <Redirect href="/login" />;
};

export default Index;