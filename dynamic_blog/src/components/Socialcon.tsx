import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIconType {
    Icon: IconType;
    IconUrl: string;

}

export default function SocialIcon({Icon, IconUrl}: SocialIconType) {
    return(
        <Link href={IconUrl} target="_blank">
            <div className="rounded-full p-3 bg-black dark:bg-slate-300 text-white dark:text-orange-800">
                <Icon />
            </div>
        </Link>
    )
}