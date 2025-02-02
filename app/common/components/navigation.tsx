import { Link } from "react-router";
import { Separator } from "~/common/components/ui/separator";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle, } from "~/common/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "~/common/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuGroup } from "~/common/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "~/common/components/ui/avatar";
import { BarChart3Icon, BellIcon, LogOutIcon, MessageCircleIcon, MessageSquareIcon, SettingsIcon, UserIcon } from "lucide-react";

const menus = [
    {
        name: "Products",
        to: "/products",
        items: [
            {
                name: "Leaderboards",
                description: "See the leaderboards",
                to: "/products/leaderboards",
            },
            {
                name: "Categories",
                description: "See the categories in your community",
                to: "/products/categories",
            },
            {
                name: "Search",
                description: "Search for a product",
                to: "/products/search",
            },
            {
                name: "Submit a Product",
                description: "Submit a product to the community",
                to: "/products/submit",
            },
            {
                name: "Promote",
                description: "Promote your product to the community",
                to: "/products/promote",
            }
        ]
    },
    {
        name: "Jobs",
        to: "/jobs",
        items: [
            {
                name: "Remote Jobs",
                description: "See the remote jobs in your community",
                to: "/jobs?location=remote",
            },
            {
                name: "Full-Time Jobs",
                description: "See the full-time jobs in your community",
                to: "/jobs?type=full-time",
            },
            {
                name: "Freelance Jobs",
                description: "See the freelance jobs in your community",
                to: "/jobs?type=freelance",
            },
            {
                name: "Internships",
                description: "See the internships in your community",
                to: "/jobs?type=internship",
            },
            {
                name: "Submit a Job",
                description: "Submit a job to the community",
                to: "/jobs/submit",
            }
        ],
    },
    {
        name: "Community",
        to: "/community",
        items: [
            {
                name: "All posts",
                description: "See all posts in the community",
                to: "/community",
            },
            {
                name: "Top posts",
                description: "See the top posts in the community",
                to: "/community?sort=top",
            },
            {
                name: "New posts",
                description: "See the new posts in the community",
                to: "/community?sort=new",
            },
            {
                name: "Submit a post",
                description: "Submit a post to the community",
                to: "/community/submit",
            },
        ],
    },
    {
        name: "IdeasGPT",
        to: "/ideasgpt",
    },
    {
        name: "Teams",
        to: "/teams",
        items: [
            {
                name: "All teams",
                description: "See all teams in the community",
                to: "/teams",
            },
            {
                name: "Create a team",
                description: "Create a team in the community",
                to: "/teams/create",
            },
        ],
    },
];


export default function Navigation({
    isLoggedIn,
    hasNotifications,
    hasMessages,
}: {
    isLoggedIn: boolean;
    hasNotifications: boolean;
    hasMessages: boolean;
}) {
    return <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
        <div className="flex items-center gap-2">
            <Link to="/" className="text-lg font-bold tracking-tighter">
                wemake
            </Link>
            <Separator orientation="vertical" className="h-6 mx-4" />
            <NavigationMenu>
                <NavigationMenuList>
                    {menus.map((menu) => (
                        <NavigationMenuItem key={menu.name}>
                            {menu.items ? (
                                <>
                                    <Link to={menu.to}>
                                        <NavigationMenuTrigger>
                                            {menu.name}
                                        </NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                                            {menu.items.map((item) => (
                                                <NavigationMenuItem
                                                    key={item.name}
                                                    className={cn([
                                                        "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                                                        item.to === "/products/promote" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                        item.to === "/jobs/submit" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                    ])}
                                                >
                                                    <NavigationMenuLink asChild>
                                                        <Link className="p-3 space-y-1 block leading-none no-underline outline-none" to={item.to}>
                                                            <span className="text-sm font-medium leading-none">
                                                                {item.name}
                                                            </span>
                                                            <p className="text-sm leading-snug text-muted-foreground">
                                                                {item.description}
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            ) : (
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                    <Link to={menu.to}>{menu.name}</Link>
                                </NavigationMenuLink>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        {isLoggedIn ? <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" asChild className="relative">
                <Link to="/my/notifications">
                    <BellIcon className="size-4" />
                    {hasNotifications && <div className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />}
                </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild className="relative">
                <Link to="/my/messages">
                    <MessageCircleIcon className="size-4" />
                    {hasMessages && <div className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />}
                </Link>
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/lips85.png" />
                        <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                        <span className="font-medium">Lips85</span>
                        <span className="text-xs text-muted-foreground leading-none">@username</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/my/dashboard">
                                <BarChart3Icon className="size-4 mr-2" />
                                Dashboard
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/my/profile">
                                <UserIcon className="size-4 mr-2" />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/my/settings">
                                <SettingsIcon className="size-4 mr-2" />
                                Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/auth/logout">
                                <LogOutIcon className="size-4 mr-2" />
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
            : <div className="flex items-center gap-2">
                <Button asChild variant="secondary">
                    <Link to="/auth/login">login</Link>
                </Button>
                <Button asChild>
                    <Link to="/auth/join">Join</Link>
                </Button>
            </div>}
    </nav >;
}
