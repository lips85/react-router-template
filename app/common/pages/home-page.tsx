import { Link, type MetaFunction } from "react-router";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import Navigation from "../components/navigation";

export const meta: MetaFunction = () => {
    return [
        { title: "Home | wemake" },
        { name: "description", content: "Home page" },
    ]
}

export default function HomePage() {
    return (
        <div className="py-28">
            <Navigation isLoggedIn={false} hasNotifications={false} hasMessages={false} />
            <div className="px-20">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Products</h2>
                        <p className="text-xl font-light text-foreground">The best products for today</p>
                    </div>
                    <div>
                        <Link to="/products/productId">
                            <Card className="w-full flex items-center justify-between bg-transparent hover:bg-card/50">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold leading-none tracking-tight">Product Name</CardTitle>
                                    <CardDescription className="text-sm font-light text-foreground">Product Description</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
