import useStore from "./store";

// eslint-disable-next-line react/display-name
const withStore = (Component) => (props) => {
  const store = useStore();
  return <Component {...props} store={store} />;
};

export default withStore;
