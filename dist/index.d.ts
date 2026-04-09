import { FC, ReactNode, JSX } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare enum AVATAR_VARIANT {
    IMAGE_WITH_FULL = "image_with_full",
    INITIALS_WITH_FULL = "initials_with_full",
    IMAGE_ONLY = "image-only",
    INITIALS_ONLY = "initials-only"
}
interface IAvatar {
    name: string;
    email: string;
    image?: string;
    variant: string;
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
}
declare const Input: FC<IInput>;

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
type AvatarVisibleProps = {
    isAvatarVisible: true;
    avatarName: string;
    avatarEmail: string;
    avatarImage: string;
    avatarType: AVATAR_VARIANT;
};
type AvatarHiddenProps = {
    isAvatarVisible?: false;
    avatarName?: string;
    avatarEmail?: string;
    avatarImage?: string;
    avatarType?: AVATAR_VARIANT;
};
type INavBar = NavBarSharedProps & (AvatarVisibleProps | AvatarHiddenProps);
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

declare const index_BrightHigh: typeof BrightHigh;
declare namespace index {
  export { AddCircular as AddCircularSVG, Add as AddSVG, AddSquared as AddSquaredSVG, AlienFace as AlienFaceSVG, AlienUser as AlienUserSVG, ArrowLeft as ArrowLeftSVG, ArrowRight as ArrowRightSVG, Astronaut as AstronautSVG, Balance as BalanceSVG, Balloons as BalloonsSVG, Basket as BasketSVG, Bat as BatSVG, Battery as BatterySVG, Bee as BeeSVG, Binocular as BinocularSVG, Bird as BirdSVG, BoxFilled as BoxFilledSVG, Brain as BrainSVG, index_BrightHigh as BrightHigh, BrightLow as BrightLowSVG, Bucket as BucketSVG, Cabin as CabinSVG, Cake as CakeSVG, Chart as ChartSVG, Check as CheckSVG, ChevDown as ChevDownSVG, ChevLeft as ChevLeftSVG, ChevRight as ChevRightSVG, ChevUp as ChevUpSVG, Circle as CircleSVG, City as CitySVG, Clock as ClockSVG, Cocktail as CocktailSVG, Code as CodeSVG, Coin as CoinSVG, Coins as CoinsSVG, Colors as ColorsSVG, Connection as ConnectionSVG, Copy as CopySVG, Covers as CoversSVG, Cow as CowSVG, Crab as CrabSVG, Cross as CrossSVG, Csv as CsvSVG, Dashboard as DashboardSVG, Dice as DiceSVG, Dolphin as DolphinSVG, DoorOpen as DoorOpnSVG, DotFill as DotFillSVG, DownFolder as DownFolderSVG, Download as DownloadSVG, Eclipse as EclipseSVG, Edit as EditSVG, Elephant as ElephantSVG, Fence as FenceSVG, Filter as FilterSVG, Filters as FiltersSVG, Fox as FoxSVG, Ghost as GhostSVG, Helicopter as HelicopterSVG, Hospital as HospitalSVG, Image as ImageSVG, Joystick as JoystickSVG, Light as LightSVG, Lion as LionSVG, Lobster as LobsterSVG, Lock as LockSVG, Masks as MasksSVG, Mobile as MobileSVG, MoneyBag as MoneyBagSVG, Money as MoneySVG, Monkey as MonkeySVG, NewTab as NewTabSVG, OrderInfo as OrderInfoSVG, Orders as OrdersSVG, Pdf as PdfSVG, Percentage as PercentageSVG, Pin as PinSVG, Plane as PlaneSVG, Printer as PrinterSVG, Products as ProductsSVG, Radio as RadioSVG, Robot as RobotSVG, Rocket as RocketSVG, Sheep as SheepSVG, Shuttle as ShuttleSVG, SignIn as SignInSVG, SignOut as SignOutSVG, Signal as SignalSVG, Siren as SirenSVG, Snake as SnakeSVG, Sort as SortSVG, SquareFill as SquareFillSVG, Stars as StarsSVG, Steps as StepsSVG, Store as StoreSVG, Suitcase as SuitcaseSVG, Tags as TagsSVG, Templates as TemplatesSVG, Terminal as TerminalSVG, ToDo as ToDoSVG, Trash as TrashSVG, Turtle as TurtleSVG, Ufo as UfoSVG, Unlock as UnlockSVG, UpFolder as UpFolderSVG, Upload as UploadSVG, Van as VanSVG, VideoCam as VideoCamSVG, Wallet as WalletSVG, Whale as WhaleSVG, Wifi as WifiSVG };
}

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

interface IDatePicker {
    value?: Date | null;
    onChange: (date: Date | null) => void;
    label?: string;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
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
    className?: string;
}
declare const ColorPicker: FC<IColorPicker>;

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

export { ACCORDION_VARIANT, ALERT_TYPE, ALERT_VARIANT, AVATAR_VARIANT, Accordion, Alert, Avatar, BADGE_SIZE, BADGE_TYPE, BADGE_VARIANT, BREADCRUMB_SEPARATOR, BUTTON_VARIANTS, Badge, Banner, Breadcrumb, Button, CALLOUT_TYPE, Callout, Carousel, Checkbox, Chip, ColorPicker, CommandPalette, DRAWER_PLACEMENT, DRAWER_SIZE, DatePicker, Drawer, Ellipsis, FileUploader, FilterDropdown, type IAccordion, type IAccordionItem, type IAlert, type IAvatar, type IBadge, type IBanner, type IBreadcrumb, type IBreadcrumbItem, type IButton, type ICallout, type ICarousel, type ICheckbox, type IChip, type IColorPicker, type ICommandItem, type ICommandPalette, type IDatePicker, type IDrawer, type IEllipsis, type IFileUploader, type IFilter, type IFilterCategory, type IFilterOption, type IInput, type ILog, type IMenuItem, type IModal, type INavBar, type IPagination, type IPaging, type IPopover, type IProgressBar, type IRadioButton, type ISelectDropdown, type ISelectDropdownOption, type ISkeleton, type ISnackBar, type IState, type IStateBase, type IStep, type IStepper, type ISwitch, type ITabItem, type ITable, type ITableColumn, type ITabs, type ITag, type ITextArea, type ITimeLine, type ITooltip, index as Icons, Input, MODAL_SIZE, Modal, NavBar, POPOVER_PLACEMENT, POPOVER_TRIGGER, PROGRESS_BAR_SIZE, PROGRESS_BAR_TYPE, Pagination, Popover, ProgressBar, RadioButton, SKELETON_VARIANT, SNACK_BAR_TYPE, STATE_TYPE, STEPPER_ORIENTATION, STEPPER_VARIANT, STEP_STATUS, SWITCH_SIZE, SelectDropdown, Skeleton, Snackbar, State as States, Stepper, Switch, TABS_VARIANT, TAG_TYPE, TOOLTIP_POSITION, Table, Tabs, Tag, TimeLine, Tooltip };
