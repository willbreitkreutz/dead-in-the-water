import createRouteMatcher from "feather-route-matcher";

// import our page roots here
import Home from "../app_pages/home";

const matcher = createRouteMatcher({
  "/": Home,
  "*": Home,
});

// build out our hook
function useRouter() {
  const pathname = window.location.pathname;
  const route = matcher(pathname);
  return [route.value, route.params];
}

export default useRouter;
