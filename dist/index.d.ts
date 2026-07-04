import { FC, ReactNode, JSX } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare enum AVATAR_VARIANT {
    IMAGE_WITH_FULL = "image_with_full",
    INITIALS_WITH_FULL = "initials_with_full",
    IMAGE_ONLY = "image-only",
    INITIALS_ONLY = "initials-only"
}
declare enum AVATAR_SIZE {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG",
    XL = "XL"
}
declare enum AVATAR_LABEL_POSITION {
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}
interface IAvatar {
    name: string;
    email: string;
    image?: string;
    variant: string;
    size?: AVATAR_SIZE;
    labelPosition?: AVATAR_LABEL_POSITION;
    className?: string;
    isLoading?: boolean;
}
declare const Avatar: FC<IAvatar>;

declare enum CALLOUT_TYPE {
    INFO = "INFO",
    WARNING = "WARNING",
    TIP = "TIP",
    DANGER = "DANGER"
}
interface ICallout {
    type?: CALLOUT_TYPE;
    title?: string;
    children: ReactNode;
    className?: string;
}
declare const Callout: FC<ICallout>;

interface IBanner {
    title?: string;
    titleClassName?: string;
    subTitle?: string;
    subTitleClassName?: string;
    contentPlacement?: "left" | "right";
    backgroundImage?: string;
    backgroundColor?: string;
    className?: string;
}
declare const Banner: FC<IBanner>;

declare enum BUTTON_VARIANTS {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary"
}
declare enum BUTTON_EDGE_STYLE {
    ROUNDED = "rounded",
    SQUARED = "squared",
    PILL = "pill"
}
declare enum BUTTON_SIZE {
    SM = "SM",
    MD = "MD",
    LG = "LG"
}
interface IButton {
    variant?: BUTTON_VARIANTS;
    label?: string;
    onClick: () => void;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    type?: "button" | "submit";
    disabled?: boolean;
    className?: string;
    edges?: BUTTON_EDGE_STYLE;
    size?: BUTTON_SIZE;
}
declare const Button: FC<IButton>;

interface ICarousel {
    slides: IBanner[];
    interval?: number;
    className?: string;
}
declare const Carousel: FC<ICarousel>;

declare enum CHECKBOX_SIZE {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
declare enum CHECKBOX_EDGE_STYLE {
    ROUNDED = "rounded",
    SQUARED = "squared"
}
interface ICheckbox {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    disabled?: boolean;
    size?: CHECKBOX_SIZE;
    edges?: CHECKBOX_EDGE_STYLE;
}
declare const Checkbox: FC<ICheckbox>;

interface IChip {
    label: string;
    onClear: () => void;
    className?: string;
    variant?: CHIP_VARIANT;
    edges?: CHIP_EDGE_STYLE;
}
declare enum CHIP_VARIANT {
    SOLID = "solid",
    OUTLINE = "outline"
}
declare enum CHIP_EDGE_STYLE {
    ROUNDED = "rounded",
    SQUARED = "squared",
    PILL = "pill"
}
declare const Chip: FC<IChip>;

declare enum TOOLTIP_POSITION {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}
interface ITooltip {
    position: TOOLTIP_POSITION;
    label: React.ReactNode;
    isVisible: boolean;
    toolTipWidth?: string;
    toolTipClass?: string;
    className?: string;
}
declare const Tooltip: FC<ITooltip>;

interface IEllipsis {
    label: string;
    labelMaxWidth?: string;
    tooltipPosition?: TOOLTIP_POSITION;
    tooltipWidth?: string;
    className?: string;
}
declare const Ellipsis: FC<IEllipsis>;

interface IFileUploader {
    title: string;
    subTitle1?: string;
    subTitle2?: string;
    handleAttachment: (file: File) => void;
    accept?: string;
    className?: string;
}
declare const FileUploader: FC<IFileUploader>;

interface IFilterOption {
    label: string;
    value: string;
    isChecked?: boolean;
}
interface IFilterCategory {
    category: string;
    options: IFilterOption[];
}
interface IFilter {
    children: (closeDropdown: () => void) => React.ReactNode;
    className?: string;
}
declare const FilterDropdown: FC<IFilter>;

declare enum FORM_ELEMENT_EDGE_STYLE {
    ROUNDED = "rounded",
    SQUARED = "squared"
}
declare enum FORM_ELEMENT_SIZE {
    SM = "SM",
    MD = "MD"
}
interface IInput extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    value: string;
    disabled?: boolean;
    placeholder?: string;
    inputClassName?: string;
    required?: boolean;
    className?: string;
    type?: string;
    onClear?: () => void;
    isError?: boolean;
    errorMessage?: string;
    edges?: FORM_ELEMENT_EDGE_STYLE;
    size?: FORM_ELEMENT_SIZE;
    min?: number;
    max?: number;
    step?: number;
}
declare const Input: FC<IInput>;

interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    value: string;
    disabled?: boolean;
    placeholder?: string;
    inputClassName?: string;
    required?: boolean;
    className?: string;
    onClear?: () => void;
    isError?: boolean;
    errorMessage?: string;
    edges?: FORM_ELEMENT_EDGE_STYLE;
}
declare const TextArea: FC<ITextArea>;

declare enum MODAL_SIZE {
    SMALL = "w-[calc(100vw-2rem)] sm:w-[600px]",
    MEDIUM = "w-[calc(100vw-2rem)] sm:w-[800px]",
    LARGE = "w-[calc(100vw-2rem)] sm:w-[950px]",
    FULL = "w-full h-full"
}
interface IModal {
    title: string;
    children: React.ReactNode;
    onClear: () => void;
    size?: MODAL_SIZE;
    className?: string;
}
declare const Modal: FC<IModal>;

interface ISubMenuItem {
    title: string;
    route: string;
    isActive: boolean;
}
interface IMenuItem {
    title: string;
    icon?: ReactNode;
    route: string;
    isActive: boolean;
    isDivider: boolean;
    onClick?: () => void;
    hasChildren?: boolean;
    children?: ISubMenuItem[];
}
type NavBarSharedProps = {
    menuItems: IMenuItem[];
    logoShort: string;
    logoLong: string;
    logoShortWidth?: number;
    logoShortHeight?: number;
    logoLongWidth?: number | string;
    menuWidthClass?: string;
    menuHeightClass?: string;
    isCollapsed?: boolean;
    menuBackgroundColor?: string;
    className?: string;
    menuItemTextClass?: string;
    isLoading?: boolean;
    onNavigate?: (route: string) => void;
    tooltipPortalTarget?: HTMLElement | null;
};
type AvatarVisibleProps$1 = {
    isAvatarVisible: true;
    avatarName: string;
    avatarEmail: string;
    avatarImage: string;
    avatarType: AVATAR_VARIANT;
};
type AvatarHiddenProps$1 = {
    isAvatarVisible?: false;
    avatarName?: string;
    avatarEmail?: string;
    avatarImage?: string;
    avatarType?: AVATAR_VARIANT;
};
type INavBar = NavBarSharedProps & (AvatarVisibleProps$1 | AvatarHiddenProps$1);
declare const NavBar: FC<INavBar>;

interface ISelectDropdownOption {
    value?: string;
    label: string;
}
interface ISelectDropdown {
    options: ISelectDropdownOption[];
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    value: string;
    onChange: (option: string) => void;
    inputClassName?: string;
    className?: string;
    isError?: boolean;
    errorMessage?: string;
    required?: boolean;
    edges?: FORM_ELEMENT_EDGE_STYLE;
    size?: FORM_ELEMENT_SIZE;
}
declare const SelectDropdown: FC<ISelectDropdown>;

interface IPaging {
    total: number;
    page: number;
    size: number;
}
interface IPagination extends IPaging {
    options: ISelectDropdownOption[];
    onChange: (paging: IPaging) => void;
    className?: string;
}
declare const Pagination: FC<IPagination>;

interface IRadioButton {
    label: string;
    value: string;
    selectedValue?: string;
    onChange?: (value: string) => void;
    name?: string;
    className?: string;
    disabled?: boolean;
}
declare const RadioButton: FC<IRadioButton>;

declare enum SNACK_BAR_TYPE {
    DEFAULT = "default",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}
interface ISnackBar {
    type?: SNACK_BAR_TYPE;
    message: string;
    icon?: React.ReactNode;
    className?: string;
}
declare const Snackbar: FC<ISnackBar>;

declare enum STATE_TYPE {
    EMPTY = "EMPTY",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    LOADING = "LOADING"
}
interface IStateBase {
    title: string;
    subTitle: string;
    imageWidth?: number;
    imageHeight?: number;
    className?: string;
}
type IState = ({
    type: STATE_TYPE;
    stateImage?: string;
} & IStateBase) | ({
    type?: undefined;
    stateImage: string;
} & IStateBase);
declare const State: FC<IState>;

interface ITableColumn {
    header: string;
    render: (row?: any) => JSX.Element;
    headerClassName?: string;
    cellClassName?: string;
}
interface ITable {
    columns: ITableColumn[];
    data: any[];
    className?: string;
    striped?: boolean;
    bordered?: boolean;
}
declare const Table: FC<ITable>;

declare enum TAG_TYPE {
    DEFAULT = "default",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}
declare enum TAG_VARIANT {
    SOLID = "solid",
    OUTLINE = "outline"
}
declare enum TAG_EDGE_STYLE {
    ROUNDED = "rounded",
    SQUARED = "squared",
    PILL = "pill"
}
interface ITag {
    type: TAG_TYPE;
    label: string;
    variant?: TAG_VARIANT;
    edges?: TAG_EDGE_STYLE;
    className?: string;
}
declare const Tag: FC<ITag>;

declare enum STEP_DIRECTION {
    UPWARD = "upward",
    DOWNWARD = "downward"
}
interface ILog {
    title: string;
    placeholderRight?: string;
    placeholderBottom?: string;
    description?: string;
    status: string;
}
interface ITimeLine {
    logs: ILog[];
    className?: string;
    direction?: STEP_DIRECTION;
}
declare const TimeLine: FC<ITimeLine>;

declare const Dashboard: () => ReactNode;

declare const Orders: () => ReactNode;

declare const Products: () => ReactNode;

declare const Templates: () => ReactNode;

declare const Covers: () => ReactNode;

declare const Colors: () => ReactNode;

declare const SignIn: () => ReactNode;

declare const SignOut: () => ReactNode;

declare const Filter: () => ReactNode;

declare const ChevDown: () => ReactNode;

declare const Add: () => react_jsx_runtime.JSX.Element;

declare const AddSquared: () => react_jsx_runtime.JSX.Element;

declare const AddCircular: () => react_jsx_runtime.JSX.Element;

declare const Cross: () => ReactNode;

declare const OrderInfo: () => ReactNode;

declare const ChevLeft: () => ReactNode;

declare const ChevRight: () => ReactNode;

declare const ChevUp: () => ReactNode;

declare const Check: () => ReactNode;

declare const Circle: () => ReactNode;

declare const Upload: () => ReactNode;

declare const ArrowLeft: () => ReactNode;

declare const ArrowRight: () => ReactNode;

declare const AlienFace: () => react_jsx_runtime.JSX.Element;

declare const NewTab: () => react_jsx_runtime.JSX.Element;

declare const Percentage: () => react_jsx_runtime.JSX.Element;

declare const Balloons: () => react_jsx_runtime.JSX.Element;

declare const ToDo: () => react_jsx_runtime.JSX.Element;

declare const Basket: () => react_jsx_runtime.JSX.Element;

declare const Bat: () => react_jsx_runtime.JSX.Element;

declare const Battery: () => react_jsx_runtime.JSX.Element;

declare const Bee: () => react_jsx_runtime.JSX.Element;

declare const Binocular: () => react_jsx_runtime.JSX.Element;

declare const Bird: () => react_jsx_runtime.JSX.Element;

declare const Printer: () => react_jsx_runtime.JSX.Element;

declare const BoxFilled: () => react_jsx_runtime.JSX.Element;

declare const Brain: () => react_jsx_runtime.JSX.Element;

declare const BrightLow: () => react_jsx_runtime.JSX.Element;

declare const BrightHigh: () => react_jsx_runtime.JSX.Element;

declare const Cabin: () => react_jsx_runtime.JSX.Element;

declare const Cake: () => react_jsx_runtime.JSX.Element;

declare const Chart: () => react_jsx_runtime.JSX.Element;

declare const City: () => react_jsx_runtime.JSX.Element;

declare const Clock: () => react_jsx_runtime.JSX.Element;

declare const Code: () => react_jsx_runtime.JSX.Element;

declare const Coins: () => react_jsx_runtime.JSX.Element;

declare const Cow: () => react_jsx_runtime.JSX.Element;

declare const Crab: () => react_jsx_runtime.JSX.Element;

declare const Dice: () => react_jsx_runtime.JSX.Element;

declare const Dolphin: () => react_jsx_runtime.JSX.Element;

declare const DoorOpen: () => react_jsx_runtime.JSX.Element;

declare const Cocktail: () => react_jsx_runtime.JSX.Element;

declare const Elephant: () => react_jsx_runtime.JSX.Element;

declare const Balance: () => react_jsx_runtime.JSX.Element;

declare const Fence: () => react_jsx_runtime.JSX.Element;

declare const Csv: () => react_jsx_runtime.JSX.Element;

declare const Edit: () => react_jsx_runtime.JSX.Element;

declare const Pdf: () => react_jsx_runtime.JSX.Element;

declare const Filters: () => react_jsx_runtime.JSX.Element;

declare const DownFolder: () => react_jsx_runtime.JSX.Element;

declare const UpFolder: () => react_jsx_runtime.JSX.Element;

declare const Fox: () => react_jsx_runtime.JSX.Element;

declare const Joystick: () => react_jsx_runtime.JSX.Element;

declare const Ghost: () => react_jsx_runtime.JSX.Element;

declare const Image: () => react_jsx_runtime.JSX.Element;

declare const Helicopter: () => react_jsx_runtime.JSX.Element;

declare const Hospital: () => react_jsx_runtime.JSX.Element;

declare const Download: () => react_jsx_runtime.JSX.Element;

declare const Light: () => react_jsx_runtime.JSX.Element;

declare const Lion: () => react_jsx_runtime.JSX.Element;

declare const Lobster: () => react_jsx_runtime.JSX.Element;

declare const Lock: () => react_jsx_runtime.JSX.Element;

declare const Pin: () => react_jsx_runtime.JSX.Element;

declare const Mobile: () => react_jsx_runtime.JSX.Element;

declare const Money: () => react_jsx_runtime.JSX.Element;

declare const Monkey: () => react_jsx_runtime.JSX.Element;

declare const Plane: () => react_jsx_runtime.JSX.Element;

declare const Radio: () => react_jsx_runtime.JSX.Element;

declare const Sheep: () => react_jsx_runtime.JSX.Element;

declare const Rocket: () => react_jsx_runtime.JSX.Element;

declare const MoneyBag: () => react_jsx_runtime.JSX.Element;

declare const Steps: () => react_jsx_runtime.JSX.Element;

declare const Bucket: () => react_jsx_runtime.JSX.Element;

declare const Van: () => react_jsx_runtime.JSX.Element;

declare const Signal: () => react_jsx_runtime.JSX.Element;

declare const Connection: () => react_jsx_runtime.JSX.Element;

declare const Siren: () => react_jsx_runtime.JSX.Element;

declare const Snake: () => react_jsx_runtime.JSX.Element;

declare const Sort: () => react_jsx_runtime.JSX.Element;

declare const Shuttle: () => react_jsx_runtime.JSX.Element;

declare const Stars: () => react_jsx_runtime.JSX.Element;

declare const Terminal: () => react_jsx_runtime.JSX.Element;

declare const Store: () => react_jsx_runtime.JSX.Element;

declare const Suitcase: () => react_jsx_runtime.JSX.Element;

declare const Tags: () => react_jsx_runtime.JSX.Element;

declare const Masks: () => react_jsx_runtime.JSX.Element;

declare const Trash: () => react_jsx_runtime.JSX.Element;

declare const Turtle: () => react_jsx_runtime.JSX.Element;

declare const Ufo: () => react_jsx_runtime.JSX.Element;

declare const Unlock: () => react_jsx_runtime.JSX.Element;

declare const Coin: () => react_jsx_runtime.JSX.Element;

declare const AlienUser: () => react_jsx_runtime.JSX.Element;

declare const Astronaut: () => react_jsx_runtime.JSX.Element;

declare const Robot: () => react_jsx_runtime.JSX.Element;

declare const VideoCam: () => react_jsx_runtime.JSX.Element;

declare const Wallet: () => react_jsx_runtime.JSX.Element;

declare const Whale: () => react_jsx_runtime.JSX.Element;

declare const Wifi: () => react_jsx_runtime.JSX.Element;

declare const DotFill: () => ReactNode;

declare const SquareFill: () => ReactNode;

declare const Eclipse: () => ReactNode;

declare const Copy: () => react_jsx_runtime.JSX.Element;

declare const Bell: () => react_jsx_runtime.JSX.Element;

declare const BellRinging: () => react_jsx_runtime.JSX.Element;

declare const BellSilent: () => react_jsx_runtime.JSX.Element;

declare const DeskBell: () => react_jsx_runtime.JSX.Element;

declare const Search: () => react_jsx_runtime.JSX.Element;

declare const Settings: () => react_jsx_runtime.JSX.Element;

declare const Menu: () => react_jsx_runtime.JSX.Element;

declare const User: () => react_jsx_runtime.JSX.Element;

declare const Users: () => react_jsx_runtime.JSX.Element;

declare const Star: () => react_jsx_runtime.JSX.Element;

declare const StarRound: () => react_jsx_runtime.JSX.Element;

declare const Mail: () => react_jsx_runtime.JSX.Element;

declare const Mails: () => react_jsx_runtime.JSX.Element;

declare const MailOpen: () => react_jsx_runtime.JSX.Element;

declare const MailPlus: () => react_jsx_runtime.JSX.Element;

declare const At: () => react_jsx_runtime.JSX.Element;

declare const Phone: () => react_jsx_runtime.JSX.Element;

declare const PhoneCut: () => react_jsx_runtime.JSX.Element;

declare const PhoneIn: () => react_jsx_runtime.JSX.Element;

declare const PhoneOut: () => react_jsx_runtime.JSX.Element;

declare const Telephone: () => react_jsx_runtime.JSX.Element;

declare const OfficePhone: () => react_jsx_runtime.JSX.Element;

declare const Refresh: () => react_jsx_runtime.JSX.Element;

declare const Calendar: () => react_jsx_runtime.JSX.Element;

declare const Info: () => react_jsx_runtime.JSX.Element;

declare const Help: () => react_jsx_runtime.JSX.Element;

declare const Key: () => react_jsx_runtime.JSX.Element;

declare const Shield: () => react_jsx_runtime.JSX.Element;

declare const Github: () => react_jsx_runtime.JSX.Element;

declare const Linkedin: () => react_jsx_runtime.JSX.Element;

declare const TwitterX: () => react_jsx_runtime.JSX.Element;

declare const Database: () => react_jsx_runtime.JSX.Element;

declare const Bookmark: () => react_jsx_runtime.JSX.Element;

declare const Controller: () => react_jsx_runtime.JSX.Element;

declare const Ban: () => react_jsx_runtime.JSX.Element;

declare const Cloud: () => react_jsx_runtime.JSX.Element;

declare const CreditCard: () => react_jsx_runtime.JSX.Element;

declare const DragHandle: () => react_jsx_runtime.JSX.Element;

declare const Gift: () => react_jsx_runtime.JSX.Element;

declare const Link: () => react_jsx_runtime.JSX.Element;

declare const Message: () => react_jsx_runtime.JSX.Element;

declare const Mic: () => react_jsx_runtime.JSX.Element;

declare const MicMute: () => react_jsx_runtime.JSX.Element;

declare const EclipseHorizontal: () => react_jsx_runtime.JSX.Element;

declare const Paperclip: () => react_jsx_runtime.JSX.Element;

declare const Receipt: () => react_jsx_runtime.JSX.Element;

declare const Send: () => react_jsx_runtime.JSX.Element;

declare const Spinner$1: () => react_jsx_runtime.JSX.Element;

declare const Thought: () => react_jsx_runtime.JSX.Element;

declare const Warning: () => react_jsx_runtime.JSX.Element;

declare const Hash: () => react_jsx_runtime.JSX.Element;

declare const Globe: () => react_jsx_runtime.JSX.Element;

declare const Flag: () => react_jsx_runtime.JSX.Element;

declare const Heart: () => react_jsx_runtime.JSX.Element;

declare const ThumbsUp: () => react_jsx_runtime.JSX.Element;

declare const Eye: () => react_jsx_runtime.JSX.Element;

declare const EyeOff: () => react_jsx_runtime.JSX.Element;

declare const Layers: () => react_jsx_runtime.JSX.Element;

declare const Grid: () => react_jsx_runtime.JSX.Element;

declare const Layout: () => react_jsx_runtime.JSX.Element;

declare const Minus: () => react_jsx_runtime.JSX.Element;

declare const AddCircularFill: () => react_jsx_runtime.JSX.Element;

declare const Bold: () => react_jsx_runtime.JSX.Element;

declare const Italic: () => react_jsx_runtime.JSX.Element;

declare const Underline: () => react_jsx_runtime.JSX.Element;

declare const AlignLeft: () => react_jsx_runtime.JSX.Element;

declare const AlignCenter: () => react_jsx_runtime.JSX.Element;

declare const AlignRight: () => react_jsx_runtime.JSX.Element;

declare const AlignJustify: () => react_jsx_runtime.JSX.Element;

declare const Text: () => react_jsx_runtime.JSX.Element;

declare const Quote: () => react_jsx_runtime.JSX.Element;

declare const Moon: () => react_jsx_runtime.JSX.Element;

declare const Undo: () => react_jsx_runtime.JSX.Element;

declare const Redo: () => react_jsx_runtime.JSX.Element;

declare const Line: () => react_jsx_runtime.JSX.Element;

declare const LineCircle: () => react_jsx_runtime.JSX.Element;

declare const LineSquare: () => react_jsx_runtime.JSX.Element;

declare const FingerClick: () => react_jsx_runtime.JSX.Element;

declare const Hand: () => react_jsx_runtime.JSX.Element;

declare const ZoomIn: () => react_jsx_runtime.JSX.Element;

declare const ZoomOut: () => react_jsx_runtime.JSX.Element;

declare const RotateCw: () => react_jsx_runtime.JSX.Element;

declare const RotateCcw: () => react_jsx_runtime.JSX.Element;

declare const Crop: () => react_jsx_runtime.JSX.Element;

declare const Focus: () => react_jsx_runtime.JSX.Element;

declare const Scan: () => react_jsx_runtime.JSX.Element;

declare const Target: () => react_jsx_runtime.JSX.Element;

declare const Sun: () => react_jsx_runtime.JSX.Element;

declare const CloudRain: () => react_jsx_runtime.JSX.Element;

declare const Snowflake: () => react_jsx_runtime.JSX.Element;

declare const Map: () => react_jsx_runtime.JSX.Element;

declare const MapPin: () => react_jsx_runtime.JSX.Element;

declare const Compass: () => react_jsx_runtime.JSX.Element;

declare const Navigation: () => react_jsx_runtime.JSX.Element;

declare const Route: () => react_jsx_runtime.JSX.Element;

declare const Earth: () => react_jsx_runtime.JSX.Element;

declare const Package: () => react_jsx_runtime.JSX.Element;

declare const Box: () => react_jsx_runtime.JSX.Element;

declare const Bag: () => react_jsx_runtime.JSX.Element;

declare const Cart: () => react_jsx_runtime.JSX.Element;

declare const Truck: () => react_jsx_runtime.JSX.Element;

declare const Shipping: () => react_jsx_runtime.JSX.Element;

declare const Coupon: () => react_jsx_runtime.JSX.Element;

declare const Sale: () => react_jsx_runtime.JSX.Element;

declare const Barcode: () => react_jsx_runtime.JSX.Element;

declare const QrCode: () => react_jsx_runtime.JSX.Element;

declare enum BADGE_TYPE {
    DEFAULT = "default",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}
declare enum BADGE_VARIANT {
    SOLID = "solid",
    OUTLINE = "outline"
}
declare enum BADGE_SIZE {
    SMALL = "small",
    MEDIUM = "medium"
}
interface IBadge {
    type?: BADGE_TYPE;
    variant?: BADGE_VARIANT;
    size?: BADGE_SIZE;
    label?: string | number;
    dot?: boolean;
    className?: string;
}
declare const Badge: FC<IBadge>;

declare enum SWITCH_SIZE {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
interface ISwitch {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    description?: string;
    disabled?: boolean;
    size?: SWITCH_SIZE;
    className?: string;
}
declare const Switch: FC<ISwitch>;

declare enum TABS_VARIANT {
    UNDERLINE = "underline",
    PILL = "pill",
    BOXED = "boxed"
}
interface ITabItem {
    key: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}
interface ITabs {
    items: ITabItem[];
    activeKey?: string;
    onChange?: (key: string) => void;
    variant?: TABS_VARIANT;
    className?: string;
}
declare const Tabs: FC<ITabs>;

declare enum ACCORDION_VARIANT {
    DEFAULT = "default",
    BORDERED = "bordered",
    FLUSH = "flush"
}
interface IAccordionItem {
    key: string;
    title: string;
    content: ReactNode;
    disabled?: boolean;
}
interface IAccordion {
    items: IAccordionItem[];
    defaultOpenKey?: string;
    allowMultiple?: boolean;
    variant?: ACCORDION_VARIANT;
    className?: string;
}
declare const Accordion: FC<IAccordion>;

declare enum SKELETON_VARIANT {
    TEXT = "text",
    CIRCLE = "circle",
    RECT = "rect"
}
interface ISkeleton {
    variant?: SKELETON_VARIANT;
    width?: string | number;
    height?: string | number;
    lines?: number;
    className?: string;
}
declare const Skeleton: FC<ISkeleton>;

declare enum PROGRESS_BAR_TYPE {
    DEFAULT = "default",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}
declare enum PROGRESS_BAR_SIZE {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
interface IProgressBar {
    value: number;
    max?: number;
    type?: PROGRESS_BAR_TYPE;
    size?: PROGRESS_BAR_SIZE;
    label?: string;
    showValue?: boolean;
    striped?: boolean;
    animated?: boolean;
    className?: string;
}
declare const ProgressBar: FC<IProgressBar>;

declare enum BREADCRUMB_SEPARATOR {
    SLASH = "slash",
    CHEVRON = "chevron",
    DOT = "dot"
}
interface IBreadcrumbItem {
    label: string;
    href?: string;
    icon?: ReactNode;
}
interface IBreadcrumb {
    items: IBreadcrumbItem[];
    separator?: BREADCRUMB_SEPARATOR;
    className?: string;
}
declare const Breadcrumb: FC<IBreadcrumb>;

declare enum DRAWER_PLACEMENT {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom"
}
declare enum DRAWER_SIZE {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    FULL = "full"
}
interface IDrawer {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    placement?: DRAWER_PLACEMENT;
    size?: DRAWER_SIZE;
    showOverlay?: boolean;
    className?: string;
}
declare const Drawer: FC<IDrawer>;

declare enum POPOVER_PLACEMENT {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}
declare enum POPOVER_TRIGGER {
    CLICK = "click",
    HOVER = "hover"
}
interface IPopover {
    trigger: ReactNode;
    content: ReactNode;
    placement?: POPOVER_PLACEMENT;
    triggerOn?: POPOVER_TRIGGER;
    title?: string;
    className?: string;
}
declare const Popover: FC<IPopover>;

declare enum ALERT_TYPE {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}
declare enum ALERT_VARIANT {
    SOLID = "solid",
    OUTLINE = "outline",
    SUBTLE = "subtle"
}
interface IAlert {
    type?: ALERT_TYPE;
    variant?: ALERT_VARIANT;
    title?: string;
    message: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    icon?: ReactNode;
    className?: string;
}
declare const Alert: FC<IAlert>;

declare enum STEPPER_ORIENTATION {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
declare enum STEPPER_VARIANT {
    DEFAULT = "default",
    MINIMAL = "minimal"
}
declare enum STEP_STATUS {
    COMPLETE = "complete",
    ACTIVE = "active",
    PENDING = "pending",
    ERROR = "error"
}
interface IStep {
    key: string;
    title: string;
    description?: string;
    status?: STEP_STATUS;
    content?: ReactNode;
}
interface IStepper {
    steps: IStep[];
    activeKey?: string;
    orientation?: STEPPER_ORIENTATION;
    variant?: STEPPER_VARIANT;
    className?: string;
}
declare const Stepper: FC<IStepper>;

declare enum DATE_PICKER_FORMAT {
    DD_MMM_YYYY = "DD MMM YYYY",
    DD_MM_YYYY = "DD-MM-YYYY",
    MM_DD_YYYY = "MM-DD-YYYY",
    YYYY_MM_DD = "YYYY-MM-DD",
    DD_MM_YYYY_SLASH = "DD/MM/YYYY",
    MM_DD_YYYY_SLASH = "MM/DD/YYYY",
    DD_MMM_YYYY_TIME = "DD MMM YYYY HH:mm",
    DD_MM_YYYY_TIME = "DD-MM-YYYY HH:mm",
    MM_DD_YYYY_TIME = "MM-DD-YYYY HH:mm",
    YYYY_MM_DD_TIME = "YYYY-MM-DD HH:mm",
    DD_MM_YYYY_SLASH_TIME = "DD/MM/YYYY HH:mm",
    MM_DD_YYYY_SLASH_TIME = "MM/DD/YYYY HH:mm",
    DD_MMM_YYYY_TIME_12 = "DD MMM YYYY hh:mm A",
    DD_MM_YYYY_TIME_12 = "DD-MM-YYYY hh:mm A",
    MM_DD_YYYY_TIME_12 = "MM-DD-YYYY hh:mm A",
    YYYY_MM_DD_TIME_12 = "YYYY-MM-DD hh:mm A",
    DD_MM_YYYY_SLASH_TIME_12 = "DD/MM/YYYY hh:mm A",
    MM_DD_YYYY_SLASH_TIME_12 = "MM/DD/YYYY hh:mm A"
}
interface IDatePicker {
    value?: Date | null;
    onChange: (date: Date | null) => void;
    label?: string;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    size?: FORM_ELEMENT_SIZE;
    format?: DATE_PICKER_FORMAT;
    timePicker?: boolean;
    isError?: boolean;
    errorMessage?: string;
    className?: string;
}
declare const DatePicker: FC<IDatePicker>;

interface ICommandItem {
    id: string;
    label: string;
    description?: string;
    icon?: ReactNode;
    group?: string;
    shortcut?: string[];
    onSelect: () => void;
}
interface ICommandPalette {
    open: boolean;
    onClose: () => void;
    items: ICommandItem[];
    placeholder?: string;
    emptyMessage?: string;
}
declare const CommandPalette: FC<ICommandPalette>;

interface IColorPicker {
    value?: string;
    onChange: (color: string) => void;
    label?: string;
    presets?: string[];
    disabled?: boolean;
    size?: FORM_ELEMENT_SIZE;
    className?: string;
}
declare const ColorPicker: FC<IColorPicker>;

declare enum MENU_BAR_VARIANT {
    DEFAULT = "DEFAULT",
    BORDERED = "BORDERED",
    ELEVATED = "ELEVATED",
    TRANSPARENT = "TRANSPARENT"
}
declare enum MENU_BAR_ITEMS_ALIGN {
    LEFT = "LEFT",
    CENTER = "CENTER",
    RIGHT = "RIGHT"
}
type MenuBarSharedProps = {
    menuItems: IMenuItem[];
    logoShort: string;
    logoLong: string;
    logoShortWidth?: number;
    logoShortHeight?: number;
    sticky?: boolean;
    variant?: MENU_BAR_VARIANT;
    itemsAlign?: MENU_BAR_ITEMS_ALIGN;
    className?: string;
    menuItemTextClass?: string;
    isLoading?: boolean;
    onNavigate?: (route: string) => void;
    rightSlot?: ReactNode;
};
type AvatarVisibleProps = {
    isAvatarVisible: true;
    avatarName: string;
    avatarEmail: string;
    avatarImage: string;
    avatarType: AVATAR_VARIANT;
    avatarSize?: AVATAR_SIZE;
    avatarLabelPosition?: AVATAR_LABEL_POSITION;
};
type AvatarHiddenProps = {
    isAvatarVisible?: false;
    avatarName?: string;
    avatarEmail?: string;
    avatarImage?: string;
    avatarType?: AVATAR_VARIANT;
    avatarSize?: AVATAR_SIZE;
    avatarLabelPosition?: AVATAR_LABEL_POSITION;
};
type IMenuBar = MenuBarSharedProps & (AvatarVisibleProps | AvatarHiddenProps);
declare const MenuBar: FC<IMenuBar>;

declare enum CARD_VARIANT {
    DEFAULT = "DEFAULT",
    BORDERED = "BORDERED",
    ELEVATED = "ELEVATED",
    FLAT = "FLAT"
}
declare enum CARD_PADDING {
    NONE = "NONE",
    SM = "SM",
    MD = "MD",
    LG = "LG"
}
interface ICard {
    children: ReactNode;
    variant?: CARD_VARIANT;
    padding?: CARD_PADDING;
    header?: ReactNode;
    footer?: ReactNode;
    className?: string;
}
declare const Card: FC<ICard>;

declare enum DIVIDER_ORIENTATION {
    HORIZONTAL = "HORIZONTAL",
    VERTICAL = "VERTICAL"
}
declare enum DIVIDER_VARIANT {
    SOLID = "SOLID",
    DASHED = "DASHED",
    DOTTED = "DOTTED"
}
interface IDivider {
    orientation?: DIVIDER_ORIENTATION;
    variant?: DIVIDER_VARIANT;
    label?: ReactNode;
    className?: string;
}
declare const Divider: FC<IDivider>;

declare enum SPINNER_SIZE {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG",
    XL = "XL"
}
declare enum SPINNER_COLOR {
    DEFAULT = "DEFAULT",
    PRIMARY = "PRIMARY",
    SUCCESS = "SUCCESS",
    DANGER = "DANGER",
    WARNING = "WARNING"
}
interface ISpinner {
    size?: SPINNER_SIZE;
    color?: SPINNER_COLOR;
    className?: string;
}
declare const Spinner: FC<ISpinner>;

declare enum STAT_TREND {
    UP = "UP",
    DOWN = "DOWN",
    NEUTRAL = "NEUTRAL"
}
interface IStatCard {
    label: string;
    value: string | number;
    trend?: STAT_TREND;
    trendLabel?: string;
    icon?: ReactNode;
    className?: string;
}
declare const StatCard: FC<IStatCard>;

interface IAvatarGroupItem {
    name: string;
    email: string;
    image?: string;
}
interface IAvatarGroup {
    items: IAvatarGroupItem[];
    max?: number;
    size?: AVATAR_SIZE;
    overflowTooltipPosition?: TOOLTIP_POSITION;
    className?: string;
}
declare const AvatarGroup: FC<IAvatarGroup>;

declare enum CIRCULAR_PROGRESS_SIZE {
    SM = "SM",
    MD = "MD",
    LG = "LG"
}
declare enum CIRCULAR_PROGRESS_TYPE {
    DEFAULT = "DEFAULT",
    SUCCESS = "SUCCESS",
    DANGER = "DANGER",
    WARNING = "WARNING"
}
interface ICircularProgress {
    value: number;
    size?: CIRCULAR_PROGRESS_SIZE;
    type?: CIRCULAR_PROGRESS_TYPE;
    showLabel?: boolean;
    className?: string;
}
declare const CircularProgress: FC<ICircularProgress>;

declare enum DROPDOWN_PLACEMENT {
    BOTTOM_LEFT = "BOTTOM_LEFT",
    BOTTOM_RIGHT = "BOTTOM_RIGHT",
    TOP_LEFT = "TOP_LEFT",
    TOP_RIGHT = "TOP_RIGHT"
}
interface IDropdownMenuItem {
    label?: string;
    icon?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    destructive?: boolean;
    isDivider?: boolean;
}
interface IDropdownMenu {
    trigger: ReactNode;
    items: IDropdownMenuItem[];
    placement?: DROPDOWN_PLACEMENT;
    className?: string;
}
declare const DropdownMenu: FC<IDropdownMenu>;

interface IContextMenu {
    children: ReactNode;
    items: IDropdownMenuItem[];
    className?: string;
}
declare const ContextMenu: FC<IContextMenu>;

declare enum MULTI_SELECT_SIZE {
    SM = "SM",
    MD = "MD"
}
interface IMultiSelectOption {
    value: string;
    label: string;
}
interface IMultiSelect {
    options: IMultiSelectOption[];
    value: string[];
    onChange: (values: string[]) => void;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: MULTI_SELECT_SIZE;
    className?: string;
    isError?: boolean;
    errorMessage?: string;
    required?: boolean;
}
declare const MultiSelect: FC<IMultiSelect>;

interface ISearchInput {
    value: string;
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
    debounce?: number;
    placeholder?: string;
    disabled?: boolean;
    isLoading?: boolean;
    label?: string;
    size?: FORM_ELEMENT_SIZE;
    className?: string;
}
declare const SearchInput: FC<ISearchInput>;

declare enum SLIDER_SIZE {
    SM = "SM",
    MD = "MD",
    LG = "LG"
}
interface ISlider {
    value: number | [number, number];
    onChange: (value: number | [number, number]) => void;
    min?: number;
    max?: number;
    step?: number;
    showTooltip?: boolean;
    disabled?: boolean;
    size?: SLIDER_SIZE;
    label?: string;
    className?: string;
}
declare const Slider: FC<ISlider>;

declare enum OTP_SIZE {
    SM = "SM",
    MD = "MD",
    LG = "LG"
}
interface IOtpInput {
    value: string;
    onChange: (value: string) => void;
    length?: number;
    mask?: boolean;
    disabled?: boolean;
    isError?: boolean;
    errorMessage?: string;
    size?: OTP_SIZE;
    label?: string;
    className?: string;
    onComplete?: (value: string) => void;
}
declare const OtpInput: FC<IOtpInput>;

declare enum TIME_FORMAT {
    H12 = "12h",
    H24 = "24h"
}
interface ITimePicker {
    value?: string | null;
    onChange: (time: string) => void;
    label?: string;
    placeholder?: string;
    format?: TIME_FORMAT;
    withSeconds?: boolean;
    disabled?: boolean;
    isError?: boolean;
    errorMessage?: string;
    size?: FORM_ELEMENT_SIZE;
    className?: string;
}
declare const TimePicker: FC<ITimePicker>;

interface IDateRangePicker {
    startDate?: Date | null;
    endDate?: Date | null;
    onChange: (range: {
        startDate: Date | null;
        endDate: Date | null;
    }) => void;
    label?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    size?: FORM_ELEMENT_SIZE;
    format?: DATE_PICKER_FORMAT;
    isError?: boolean;
    errorMessage?: string;
    className?: string;
}
declare const DateRangePicker: FC<IDateRangePicker>;

declare enum LIST_VARIANT {
    DEFAULT = "default",
    BORDERED = "bordered",
    FLUSH = "flush",
    CARD = "card"
}
declare enum LIST_SIZE {
    SM = "SM",
    MD = "MD",
    LG = "LG"
}
interface IListItem {
    key: string;
    title: string;
    description?: string;
    icon?: ReactNode;
    rightSlot?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}
interface IList {
    items: IListItem[];
    variant?: LIST_VARIANT;
    size?: LIST_SIZE;
    className?: string;
}
declare const List: FC<IList>;

export { ACCORDION_VARIANT, ALERT_TYPE, ALERT_VARIANT, AVATAR_LABEL_POSITION, AVATAR_SIZE, AVATAR_VARIANT, Accordion, AddCircularFill as AddCircularFillSVG, AddCircular as AddCircularSVG, Add as AddSVG, AddSquared as AddSquaredSVG, Alert, AlienFace as AlienFaceSVG, AlienUser as AlienUserSVG, AlignCenter as AlignCenterSVG, AlignJustify as AlignJustifySVG, AlignLeft as AlignLeftSVG, AlignRight as AlignRightSVG, ArrowLeft as ArrowLeftSVG, ArrowRight as ArrowRightSVG, Astronaut as AstronautSVG, At as AtSVG, Avatar, AvatarGroup, BADGE_SIZE, BADGE_TYPE, BADGE_VARIANT, BREADCRUMB_SEPARATOR, BUTTON_EDGE_STYLE, BUTTON_SIZE, BUTTON_VARIANTS, Badge, Bag as BagSVG, Balance as BalanceSVG, Balloons as BalloonsSVG, Ban as BanSVG, Banner, Barcode as BarcodeSVG, Basket as BasketSVG, Bat as BatSVG, Battery as BatterySVG, Bee as BeeSVG, BellRinging as BellRingingSVG, Bell as BellSVG, BellSilent as BellSilentSVG, Binocular as BinocularSVG, Bird as BirdSVG, Bold as BoldSVG, Bookmark as BookmarkSVG, BoxFilled as BoxFilledSVG, Box as BoxSVG, Brain as BrainSVG, Breadcrumb, BrightHigh, BrightLow as BrightLowSVG, Bucket as BucketSVG, Button, CALLOUT_TYPE, CARD_PADDING, CARD_VARIANT, CHECKBOX_EDGE_STYLE, CHECKBOX_SIZE, CHIP_EDGE_STYLE, CHIP_VARIANT, CIRCULAR_PROGRESS_SIZE, CIRCULAR_PROGRESS_TYPE, Cabin as CabinSVG, Cake as CakeSVG, Calendar as CalendarSVG, Callout, Card, Carousel, Cart as CartSVG, Chart as ChartSVG, Check as CheckSVG, Checkbox, ChevDown as ChevDownSVG, ChevLeft as ChevLeftSVG, ChevRight as ChevRightSVG, ChevUp as ChevUpSVG, Chip, Circle as CircleSVG, CircularProgress, City as CitySVG, Clock as ClockSVG, CloudRain as CloudRainSVG, Cloud as CloudSVG, Cocktail as CocktailSVG, Code as CodeSVG, Coin as CoinSVG, Coins as CoinsSVG, ColorPicker, Colors as ColorsSVG, CommandPalette, Compass as CompassSVG, Connection as ConnectionSVG, ContextMenu, Controller as ControllerSVG, Copy as CopySVG, Coupon as CouponSVG, Covers as CoversSVG, Cow as CowSVG, Crab as CrabSVG, CreditCard as CreditCardSVG, Crop as CropSVG, Cross as CrossSVG, Csv as CsvSVG, DATE_PICKER_FORMAT, DIVIDER_ORIENTATION, DIVIDER_VARIANT, DRAWER_PLACEMENT, DRAWER_SIZE, DROPDOWN_PLACEMENT, Dashboard as DashboardSVG, Database as DatabaseSVG, DatePicker, DateRangePicker, DeskBell as DeskBellSVG, Dice as DiceSVG, Divider, Dolphin as DolphinSVG, DoorOpen as DoorOpnSVG, DotFill as DotFillSVG, DownFolder as DownFolderSVG, Download as DownloadSVG, DragHandle as DragHandleSVG, Drawer, DropdownMenu, Earth as EarthSVG, EclipseHorizontal as EclipseHorizontalSVG, Eclipse as EclipseSVG, Edit as EditSVG, Elephant as ElephantSVG, Ellipsis, EyeOff as EyeOffSVG, Eye as EyeSVG, FORM_ELEMENT_EDGE_STYLE, FORM_ELEMENT_SIZE, Fence as FenceSVG, FileUploader, FilterDropdown, Filter as FilterSVG, Filters as FiltersSVG, FingerClick as FingerClickSVG, Flag as FlagSVG, Focus as FocusSVG, Fox as FoxSVG, Ghost as GhostSVG, Gift as GiftSVG, Github as GithubSVG, Globe as GlobeSVG, Grid as GridSVG, Hand as HandSVG, Hash as HashSVG, Heart as HeartSVG, Helicopter as HelicopterSVG, Help as HelpSVG, Hospital as HospitalSVG, type IAccordion, type IAccordionItem, type IAlert, type IAvatar, type IAvatarGroup, type IAvatarGroupItem, type IBadge, type IBanner, type IBreadcrumb, type IBreadcrumbItem, type IButton, type ICallout, type ICard, type ICarousel, type ICheckbox, type IChip, type ICircularProgress, type IColorPicker, type ICommandItem, type ICommandPalette, type IContextMenu, type IDatePicker, type IDateRangePicker, type IDivider, type IDrawer, type IDropdownMenu, type IDropdownMenuItem, type IEllipsis, type IFileUploader, type IFilter, type IFilterCategory, type IFilterOption, type IInput, type IList, type IListItem, type ILog, type IMenuBar, type IMenuItem, type IModal, type IMultiSelect, type IMultiSelectOption, type INavBar, type IOtpInput, type IPagination, type IPaging, type IPopover, type IProgressBar, type IRadioButton, type ISearchInput, type ISelectDropdown, type ISelectDropdownOption, type ISkeleton, type ISlider, type ISnackBar, type ISpinner, type IStatCard, type IState, type IStateBase, type IStep, type IStepper, type ISwitch, type ITabItem, type ITable, type ITableColumn, type ITabs, type ITag, type ITextArea, type ITimeLine, type ITimePicker, type ITooltip, Image as ImageSVG, Info as InfoSVG, Input, Italic as ItalicSVG, Joystick as JoystickSVG, Key as KeySVG, LIST_SIZE, LIST_VARIANT, Layers as LayersSVG, Layout as LayoutSVG, Light as LightSVG, LineCircle as LineCircleSVG, Line as LineSVG, LineSquare as LineSquareSVG, Link as LinkSVG, Linkedin as LinkedinSVG, Lion as LionSVG, List, Lobster as LobsterSVG, Lock as LockSVG, MENU_BAR_ITEMS_ALIGN, MENU_BAR_VARIANT, MODAL_SIZE, MULTI_SELECT_SIZE, MailOpen as MailOpenSVG, MailPlus as MailPlusSVG, Mail as MailSVG, Mails as MailsSVG, MapPin as MapPinSVG, Map as MapSVG, Masks as MasksSVG, MenuBar, Menu as MenuSVG, Message as MessageSVG, MicMute as MicMuteSVG, Mic as MicSVG, Minus as MinusSVG, Mobile as MobileSVG, Modal, MoneyBag as MoneyBagSVG, Money as MoneySVG, Monkey as MonkeySVG, Moon as MoonSVG, MultiSelect, NavBar, Navigation as NavigationSVG, NewTab as NewTabSVG, OTP_SIZE, OfficePhone as OfficePhoneSVG, OrderInfo as OrderInfoSVG, Orders as OrdersSVG, OtpInput, POPOVER_PLACEMENT, POPOVER_TRIGGER, PROGRESS_BAR_SIZE, PROGRESS_BAR_TYPE, Package as PackageSVG, Pagination, Paperclip as PaperclipSVG, Pdf as PdfSVG, Percentage as PercentageSVG, PhoneCut as PhoneCutSVG, PhoneIn as PhoneInSVG, PhoneOut as PhoneOutSVG, Phone as PhoneSVG, Pin as PinSVG, Plane as PlaneSVG, Popover, Printer as PrinterSVG, Products as ProductsSVG, ProgressBar, QrCode as QrCodeSVG, Quote as QuoteSVG, RadioButton, Radio as RadioSVG, Receipt as ReceiptSVG, Redo as RedoSVG, Refresh as RefreshSVG, Robot as RobotSVG, Rocket as RocketSVG, RotateCcw as RotateCcwSVG, RotateCw as RotateCwSVG, Route as RouteSVG, SKELETON_VARIANT, SLIDER_SIZE, SNACK_BAR_TYPE, SPINNER_COLOR, SPINNER_SIZE, STATE_TYPE, STAT_TREND, STEPPER_ORIENTATION, STEPPER_VARIANT, STEP_DIRECTION, STEP_STATUS, SWITCH_SIZE, Sale as SaleSVG, Scan as ScanSVG, SearchInput, Search as SearchSVG, SelectDropdown, Send as SendSVG, Settings as SettingsSVG, Sheep as SheepSVG, Shield as ShieldSVG, Shipping as ShippingSVG, Shuttle as ShuttleSVG, SignIn as SignInSVG, SignOut as SignOutSVG, Signal as SignalSVG, Siren as SirenSVG, Skeleton, Slider, Snackbar, Snake as SnakeSVG, Snowflake as SnowflakeSVG, Sort as SortSVG, Spinner, Spinner$1 as SpinnerIconSVG, SquareFill as SquareFillSVG, StarRound as StarRoundSVG, Star as StarSVG, Stars as StarsSVG, StatCard, State as States, Stepper, Steps as StepsSVG, Store as StoreSVG, Suitcase as SuitcaseSVG, Sun as SunSVG, Switch, TABS_VARIANT, TAG_EDGE_STYLE, TAG_TYPE, TAG_VARIANT, TIME_FORMAT, TOOLTIP_POSITION, Table, Tabs, Tag, Tags as TagsSVG, Target as TargetSVG, Telephone as TelephoneSVG, Templates as TemplatesSVG, Terminal as TerminalSVG, TextArea, Text as TextSVG, Thought as ThoughtSVG, ThumbsUp as ThumbsUpSVG, TimeLine, TimePicker, ToDo as ToDoSVG, Tooltip, Trash as TrashSVG, Truck as TruckSVG, Turtle as TurtleSVG, TwitterX as TwitterXSVG, Ufo as UfoSVG, Underline as UnderlineSVG, Undo as UndoSVG, Unlock as UnlockSVG, UpFolder as UpFolderSVG, Upload as UploadSVG, User as UserSVG, Users as UsersSVG, Van as VanSVG, VideoCam as VideoCamSVG, Wallet as WalletSVG, Warning as WarningSVG, Whale as WhaleSVG, Wifi as WifiSVG, ZoomIn as ZoomInSVG, ZoomOut as ZoomOutSVG };
