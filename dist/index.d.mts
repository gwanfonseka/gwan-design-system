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
interface IButton {
    variant?: BUTTON_VARIANTS;
    label?: string;
    onClick: () => void;
    icon?: ReactNode;
    type?: "button" | "submit";
    disabled?: boolean;
    className?: string;
}
declare const Button: FC<IButton>;

interface ICarousel {
    slides: IBanner[];
    interval?: number;
    className?: string;
}
declare const Carousel: FC<ICarousel>;

interface ICheckbox {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    disabled?: boolean;
}
declare const Checkbox: FC<ICheckbox>;

interface IChip {
    label: string;
    onClear: () => void;
    className?: string;
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
}
declare const Input: FC<IInput>;

declare enum MODAL_SIZE {
    SMALL = "w-[600px] h-60",
    MEDIUM = "w-[800px] h-96",
    LARGE = "w-[950px] h-[600px]",
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
interface INavBar {
    menuItems: IMenuItem[];
    logoShort: string;
    logoLong: string;
    avatarName: string;
    avatarEmail: string;
    avatarImage: string;
    avatarType: AVATAR_VARIANT;
    menuWidthClass?: string;
    menuHeightClass?: string;
    isCollapsed?: boolean;
    menuBackgroundColor?: string;
    className?: string;
    menuItemTextClass?: string;
    isLoading?: boolean;
}
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
}
declare const Table: FC<ITable>;

declare enum TAG_TYPE {
    DEFAULT = "default",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}
interface ITag {
    type: TAG_TYPE;
    label: string;
    className?: string;
}
declare const Tag: FC<ITag>;

interface ILog {
    title: string;
    date?: string;
    description?: string;
    status: string;
}
interface ITimeLine {
    logs: ILog[];
    className?: string;
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

declare const index_BrightHigh: typeof BrightHigh;
declare namespace index {
  export { AlienFace as AlienFaceSVG, AlienUser as AlienUserSVG, ArrowLeft as ArrowLeftSVG, ArrowRight as ArrowRightSVG, Astronaut as AstronautSVG, Balance as BalanceSVG, Balloons as BalloonsSVG, Basket as BasketSVG, Bat as BatSVG, Battery as BatterySVG, Bee as BeeSVG, Binocular as BinocularSVG, Bird as BirdSVG, BoxFilled as BoxFilledSVG, Brain as BrainSVG, index_BrightHigh as BrightHigh, BrightLow as BrightLowSVG, Bucket as BucketSVG, Cabin as CabinSVG, Cake as CakeSVG, Chart as ChartSVG, Check as CheckSVG, ChevDown as ChevDownSVG, ChevLeft as ChevLeftSVG, ChevRight as ChevRightSVG, ChevUp as ChevUpSVG, Circle as CircleSVG, City as CitySVG, Clock as ClockSVG, Cocktail as CocktailSVG, Code as CodeSVG, Coin as CoinSVG, Coins as CoinsSVG, Colors as ColorsSVG, Connection as ConnectionSVG, Covers as CoversSVG, Cow as CowSVG, Crab as CrabSVG, Cross as CrossSVG, Csv as CsvSVG, Dashboard as DashboardSVG, Dice as DiceSVG, Dolphin as DolphinSVG, DoorOpen as DoorOpnSVG, DotFill as DotFillSVG, DownFolder as DownFolderSVG, Download as DownloadSVG, Eclipse as EclipseSVG, Edit as EditSVG, Elephant as ElephantSVG, Fence as FenceSVG, Filter as FilterSVG, Filters as FiltersSVG, Fox as FoxSVG, Ghost as GhostSVG, Helicopter as HelicopterSVG, Hospital as HospitalSVG, Image as ImageSVG, Joystick as JoystickSVG, Light as LightSVG, Lion as LionSVG, Lobster as LobsterSVG, Lock as LockSVG, Masks as MasksSVG, Mobile as MobileSVG, MoneyBag as MoneyBagSVG, Money as MoneySVG, Monkey as MonkeySVG, NewTab as NewTabSVG, OrderInfo as OrderInfoSVG, Orders as OrdersSVG, Pdf as PdfSVG, Percentage as PercentageSVG, Pin as PinSVG, Plane as PlaneSVG, Printer as PrinterSVG, Products as ProductsSVG, Radio as RadioSVG, Robot as RobotSVG, Rocket as RocketSVG, Sheep as SheepSVG, Shuttle as ShuttleSVG, SignIn as SignInSVG, SignOut as SignOutSVG, Signal as SignalSVG, Siren as SirenSVG, Snake as SnakeSVG, Sort as SortSVG, SquareFill as SquareFillSVG, Stars as StarsSVG, Steps as StepsSVG, Store as StoreSVG, Suitcase as SuitcaseSVG, Tags as TagsSVG, Templates as TemplatesSVG, Terminal as TerminalSVG, ToDo as ToDoSVG, Turtle as TurtleSVG, Ufo as UfoSVG, Unlock as UnlockSVG, UpFolder as UpFolderSVG, Upload as UploadSVG, Van as VanSVG, VideoCam as VideoCamSVG, Wallet as WalletSVG, Whale as WhaleSVG, Wifi as WifiSVG };
}

export { AVATAR_VARIANT, Avatar, BUTTON_VARIANTS, Banner, Button, Carousel, Checkbox, Chip, Ellipsis, FileUploader, FilterDropdown, type IAvatar, type IBanner, type IButton, type ICarousel, type ICheckbox, type IChip, type IEllipsis, type IFileUploader, type IFilter, type IFilterCategory, type IFilterOption, type IInput, type ILog, type IMenuItem, type IModal, type INavBar, type IPagination, type IPaging, type IRadioButton, type ISelectDropdown, type ISelectDropdownOption, type ISnackBar, type IState, type IStateBase, type ITable, type ITableColumn, type ITag, type ITimeLine, type ITooltip, index as Icons, Input, MODAL_SIZE, Modal, NavBar, Pagination, RadioButton, SNACK_BAR_TYPE, STATE_TYPE, SelectDropdown, Snackbar, State as States, TAG_TYPE, TOOLTIP_POSITION, Table, Tag, TimeLine, Tooltip };
