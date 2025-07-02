import { ModeToggle } from "@/components/ui/mode-toggle";
import "./header.css";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Header() {
    return (
        <NavigationMenu className="pt-5 pl-5">
            <NavigationMenuList>
                <NavigationMenuItem className="text-center text-4xl font-extrabold">TaskManager</NavigationMenuItem>
                {/* <div className="ml-auto">
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Important Tasks <span className="emoji">{"\u203C"}</span>
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                </div> */}
                <NavigationMenuItem className="ml-auto">
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Header;
