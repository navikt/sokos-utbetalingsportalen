import useStore from "./store";

const withStore = (Component) => (props) => {
  const store = useStore();
  return <Component {...props} store={store} />;
};

export default withStore;
