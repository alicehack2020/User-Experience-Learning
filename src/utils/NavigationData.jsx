import {
  AdjustmentsVerticalIcon,
  ArrowDownCircleIcon,
  BellAlertIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const OtherMenuDataWeb = [
  {
    label: "Notification",
    icon: <BellAlertIcon />,
    href: "/login",
    isNew: false,
    menuType: "Login",
  },
  {
    label: "Download",
    icon: <ArrowDownCircleIcon />,
    href: "/login",
    isNew: false,
    menuType: "Download",
  },
  {
    label: "Download",
    icon: <ArrowDownCircleIcon />,
    href: "/login",
    isNew: false,
    menuType: "Download",
  },
  {
    label: "Download",
    icon: <ArrowDownCircleIcon />,
    href: "/login",
    isNew: false,
    menuType: "Download",
  },
];
export const NavigationDataWeb = [
  {
    label: "Login",
    icon: <UserIcon />,
    href: "/login",
    isNew: false,
    menuType: "Login",
  },
  {
    label: "Cart",
    icon: <TruckIcon />,
    href: "/offers",
    isNew: true,
    menuType: "Cart",
  },
  {
    label: "Become a Seller",
    icon: <ShoppingBagIcon />,
    href: "/seller",
    isNew: false,
    menuType: "Become a Seller",
  },
  {
    label: "",
    icon: <AdjustmentsVerticalIcon />,
    href: "",
    isNew: false,
    menuType: "Other",
  },
];
