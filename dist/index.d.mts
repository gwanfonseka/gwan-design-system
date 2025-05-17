import * as react_jsx_runtime from 'react/jsx-runtime';
import { FC, ReactNode, JSX } from 'react';

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
}
declare const Avatar: ({ name, email, image, variant }: IAvatar) => react_jsx_runtime.JSX.Element;

interface IBanner {
    title?: string;
    titleClassName?: string;
    subTitle?: string;
    subTitleClassName?: string;
    contentPlacement?: "left" | "right";
    backgroundImage?: string;
    backgroundColor?: string;
}
declare const Banner: ({ title, subTitle, contentPlacement, backgroundImage, backgroundColor, titleClassName, subTitleClassName, }: IBanner) => react_jsx_runtime.JSX.Element;

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
}
declare const Button: FC<IButton>;

interface ICarousel {
    slides: IBanner[];
    interval?: number;
}
declare const Carousel: ({ slides, interval }: ICarousel) => react_jsx_runtime.JSX.Element;

interface ICheckbox {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}
declare const Checkbox: ({ label, checked, onChange }: ICheckbox) => react_jsx_runtime.JSX.Element;

interface IChip {
    label: string;
    onClear: () => void;
}
declare const Chip: ({ label, onClear }: IChip) => react_jsx_runtime.JSX.Element;

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
}
declare const Tooltip: ({ position, label, isVisible, toolTipWidth, toolTipClass, }: ITooltip) => react_jsx_runtime.JSX.Element;

interface IEllipsis {
    label: string;
    tooltipPosition?: TOOLTIP_POSITION;
    tooltipWidth?: string;
}
declare const Ellipsis: ({ label, tooltipPosition, tooltipWidth, }: IEllipsis) => react_jsx_runtime.JSX.Element;

interface IFileUploader {
    title: string;
    subTitle1?: string;
    subTitle2?: string;
    handleAttachment: (file: File) => void;
    accept?: string;
}
declare const FileUploader: ({ title, subTitle1, subTitle2, handleAttachment, accept, }: IFileUploader) => react_jsx_runtime.JSX.Element;

interface IFilter {
    children: (closeDropdown: () => void) => React.ReactNode;
}
declare const FilterDropdown: ({ children }: IFilter) => react_jsx_runtime.JSX.Element;

interface IInput {
    label: string;
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    inputClassName?: string;
    required?: boolean;
}
declare const Input: ({ label, value, onChange, disabled, placeholder, inputClassName, required, }: IInput) => react_jsx_runtime.JSX.Element;

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
}
declare const Modal: ({ title, children, onClear, size, }: IModal) => react_jsx_runtime.JSX.Element;

interface IMenuItem {
    title: string;
    icon?: ReactNode;
    route: string;
    isActive: boolean;
    isDivider: boolean;
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
}
declare const NavBar: ({ menuItems, logoShort, logoLong, avatarName, avatarEmail, avatarImage, avatarType, menuWidthClass, menuHeightClass, isCollapsed, menuBackgroundColor, }: INavBar) => react_jsx_runtime.JSX.Element;

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
}
declare const SelectDropdown: ({ options, label, placeholder, disabled, value, onChange, inputClassName, }: ISelectDropdown) => react_jsx_runtime.JSX.Element;

interface IPaging {
    total: number;
    page: number;
    size: number;
}
interface IPagination extends IPaging {
    options: ISelectDropdownOption[];
    onChange: (paging: IPaging) => void;
}
declare const Pagination: ({ total, page, size, options, onChange }: IPagination) => react_jsx_runtime.JSX.Element;

interface IRadioButton {
    label: string;
    value: string;
    selectedValue?: string;
    onChange?: (value: string) => void;
}
declare const RadioButton: ({ label, value, selectedValue, onChange, }: IRadioButton) => react_jsx_runtime.JSX.Element;

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
}
declare const Snackbar: ({ type, message, icon, }: ISnackBar) => react_jsx_runtime.JSX.Element;

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
}
type IState = ({
    type: STATE_TYPE;
    stateImage?: string;
} & IStateBase) | ({
    type?: undefined;
    stateImage: string;
} & IStateBase);
declare const State: ({ type, stateImage, title, subTitle, imageWidth, imageHeight, }: IState) => react_jsx_runtime.JSX.Element;

interface ITableColumn {
    header: string;
    render: (row?: any) => JSX.Element;
    headerClassName?: string;
}
interface ITable {
    columns: ITableColumn[];
    data: any[];
}
declare const Table: ({ columns, data }: ITable) => react_jsx_runtime.JSX.Element;

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
}
declare const Tag: ({ type, label }: ITag) => react_jsx_runtime.JSX.Element;

declare enum ORDER_STATUS {
    ORDER_PLACED = "Order placed",
    PRINTING_IN_PROGRESS = "Printing in progress",
    PACKAGING = "Packaging",
    DISPATCHED_TO_COURIER = "Dispatched to courier",
    DELIVERED = "Delivered",
    ORDER_CANCELLED = "Order cancelled",
    PENDING = "Pending"
}
interface ILog {
    title: ORDER_STATUS;
    date?: string;
    description?: string;
}
interface ITimeLine {
    logs: ILog[];
}
declare const TimeLine: ({ logs }: ITimeLine) => react_jsx_runtime.JSX.Element;

declare const Dashboard: () => react_jsx_runtime.JSX.Element;

declare const Orders: () => react_jsx_runtime.JSX.Element;

declare const Products: () => react_jsx_runtime.JSX.Element;

declare const Templates: () => react_jsx_runtime.JSX.Element;

declare const Covers: () => react_jsx_runtime.JSX.Element;

declare const Colors: () => react_jsx_runtime.JSX.Element;

declare const SignOut: () => react_jsx_runtime.JSX.Element;

declare const Filter: () => react_jsx_runtime.JSX.Element;

declare const ChevDown: () => react_jsx_runtime.JSX.Element;

declare const Cross: () => react_jsx_runtime.JSX.Element;

declare const OrderInfo: () => react_jsx_runtime.JSX.Element;

declare const ChevLeft: () => react_jsx_runtime.JSX.Element;

declare const ChevRight: () => react_jsx_runtime.JSX.Element;

declare const Check: () => react_jsx_runtime.JSX.Element;

declare const Circle: () => react_jsx_runtime.JSX.Element;

declare const Upload: () => react_jsx_runtime.JSX.Element;

declare const ArrowLeft: () => react_jsx_runtime.JSX.Element;

declare namespace index {
  export { ArrowLeft as ArrowLeftSVG, Check as CheckSVG, ChevDown as ChevDownSVG, ChevLeft as ChevLeftSVG, ChevRight as ChevRightSVG, Circle as CircleSVG, Colors as ColorsSVG, Covers as CoversSVG, Cross as CrossSVG, Dashboard as DashboardSVG, Filter as FilterSVG, OrderInfo as OrderInfoSVG, Orders as OrdersSVG, Products as ProductsSVG, SignOut as SignOutSVG, Templates as TemplatesSVG, Upload as UploadSVG };
}

export { Avatar as AVATAR_VARIANT, Avatar, BUTTON_VARIANTS, Banner, Button, Carousel, Checkbox, Chip, Ellipsis, FileUploader, FilterDropdown, type IButton, index as Icons, Input, Modal, NavBar, Pagination, RadioButton, SelectDropdown, Snackbar, State as States, Table, Tag, TimeLine, Tooltip };
