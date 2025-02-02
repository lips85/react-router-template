import type { Route } from "./+types/home";
import HomePage from "~/common/pages/home-page";
import Navigation from "~/common/components/navigation";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="py-28">
      <Navigation isLoggedIn={false} hasNotifications={false} hasMessages={false} />
      <HomePage />
    </div>
  );
}
