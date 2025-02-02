import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // index("routes/home.tsx"),
    route("/", "common/pages/home-page.tsx"),
    // route("/users", "common/pages/users-page.tsx"),
] satisfies RouteConfig;
