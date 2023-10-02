import ContextNavigationProvider from "@context/contextNavigation";

const ContextGlobalIntance = ({ children }: any) => {
  return <ContextNavigationProvider>{children}</ContextNavigationProvider>;
};

export default ContextGlobalIntance;
