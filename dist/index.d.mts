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
declare const Avatar: FC<IAvatar>;

interface IBanner {
    title?: string;
    titleClassName?: string;
    subTitle?: string;
    subTitleClassName?: string;
    contentPlacement?: "left" | "right";
    backgroundImage?: string;
    backgroundColor?: string;
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
}
declare const Button: FC<IButton>;

interface ICarousel {
    slides: IBanner[];
    interval?: number;
}
declare const Carousel: FC<ICarousel>;

interface ICheckbox {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}
declare const Checkbox: FC<ICheckbox>;

interface IChip {
    label: string;
    onClear: () => void;
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
}
declare const Tooltip: FC<ITooltip>;

interface IEllipsis {
    label: string;
    tooltipPosition?: TOOLTIP_POSITION;
    tooltipWidth?: string;
}
declare const Ellipsis: FC<IEllipsis>;

interface IFileUploader {
    title: string;
    subTitle1?: string;
    subTitle2?: string;
    handleAttachment: (file: File) => void;
    accept?: string;
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
}
declare const FilterDropdown: FC<IFilter>;

interface IInput {
    label: string;
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    inputClassName?: string;
    required?: boolean;
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
}
declare const Modal: FC<IModal>;

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
}
declare const Pagination: FC<IPagination>;

interface IRadioButton {
    label: string;
    value: string;
    selectedValue?: string;
    onChange?: (value: string) => void;
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
}
interface ITable {
    columns: ITableColumn[];
    data: any[];
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
}
declare const Tag: FC<ITag>;

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
declare const TimeLine: FC<ITimeLine>;

declare const Dashboard: () => ReactNode;

declare const Orders: () => ReactNode;

declare const Products: () => ReactNode;

declare const Templates: () => ReactNode;

declare const Covers: () => ReactNode;

declare const Colors: () => ReactNode;

declare const SignOut: () => ReactNode;

declare const Filter: () => ReactNode;

declare const ChevDown: () => ReactNode;

declare const Cross: () => ReactNode;

declare const OrderInfo: () => ReactNode;

declare const ChevLeft: () => ReactNode;

declare const ChevRight: () => ReactNode;

declare const Check: () => ReactNode;

declare const Circle: () => ReactNode;

declare const Upload: () => ReactNode;

declare const ArrowLeft: () => ReactNode;

declare namespace index {
  export { ArrowLeft as ArrowLeftSVG, Check as CheckSVG, ChevDown as ChevDownSVG, ChevLeft as ChevLeftSVG, ChevRight as ChevRightSVG, Circle as CircleSVG, Colors as ColorsSVG, Covers as CoversSVG, Cross as CrossSVG, Dashboard as DashboardSVG, Filter as FilterSVG, OrderInfo as OrderInfoSVG, Orders as OrdersSVG, Products as ProductsSVG, SignOut as SignOutSVG, Templates as TemplatesSVG, Upload as UploadSVG };
}

export { AVATAR_VARIANT, Avatar, BUTTON_VARIANTS, Banner, Button, Carousel, Checkbox, Chip, Ellipsis, FileUploader, FilterDropdown, type IAvatar, type IBanner, type IButton, type ICarousel, type ICheckbox, type IChip, type IEllipsis, type IFileUploader, type IFilter, type IFilterCategory, type IFilterOption, type IInput, type ILog, type IMenuItem, type IModal, type INavBar, type IPagination, type IPaging, type IRadioButton, type ISelectDropdown, type ISelectDropdownOption, type ISnackBar, type IState, type IStateBase, type ITable, type ITableColumn, type ITag, type ITimeLine, type ITooltip, index as Icons, Input, MODAL_SIZE, Modal, NavBar, Pagination, RadioButton, SNACK_BAR_TYPE, STATE_TYPE, SelectDropdown, Snackbar, State as States, TAG_TYPE, TOOLTIP_POSITION, Table, Tag, TimeLine, Tooltip };
