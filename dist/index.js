"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ACCORDION_VARIANT: () => ACCORDION_VARIANT,
  ALERT_TYPE: () => ALERT_TYPE,
  ALERT_VARIANT: () => ALERT_VARIANT,
  AVATAR_LABEL_POSITION: () => AVATAR_LABEL_POSITION,
  AVATAR_SIZE: () => AVATAR_SIZE,
  AVATAR_VARIANT: () => AVATAR_VARIANT,
  Accordion: () => accordion_default,
  AddCircularFillSVG: () => AddCircularFill,
  AddCircularSVG: () => AddCircular,
  AddSVG: () => Add,
  AddSquaredSVG: () => AddSquared,
  Alert: () => alert_default,
  AlienFaceSVG: () => AlienFace,
  AlienUserSVG: () => AlienUser,
  AlignCenterSVG: () => AlignCenter,
  AlignJustifySVG: () => AlignJustify,
  AlignLeftSVG: () => AlignLeft,
  AlignRightSVG: () => AlignRight,
  ArrowLeftSVG: () => ArrowLeft,
  ArrowRightSVG: () => ArrowRight,
  AstronautSVG: () => Astronaut,
  AtSVG: () => At,
  Avatar: () => avatar_default,
  AvatarGroup: () => avatarGroup_default,
  BADGE_SIZE: () => BADGE_SIZE,
  BADGE_TYPE: () => BADGE_TYPE,
  BADGE_VARIANT: () => BADGE_VARIANT,
  BREADCRUMB_SEPARATOR: () => BREADCRUMB_SEPARATOR,
  BUTTON_EDGE_STYLE: () => BUTTON_EDGE_STYLE,
  BUTTON_SIZE: () => BUTTON_SIZE,
  BUTTON_VARIANTS: () => BUTTON_VARIANTS,
  Badge: () => badge_default,
  BagSVG: () => Bag,
  BalanceSVG: () => Balance,
  BalloonsSVG: () => Balloons,
  BanSVG: () => Ban,
  Banner: () => banner_default,
  BarcodeSVG: () => Barcode,
  BasketSVG: () => Basket,
  BatSVG: () => Bat,
  BatterySVG: () => Battery,
  BeeSVG: () => Bee,
  BellRingingSVG: () => BellRinging,
  BellSVG: () => Bell,
  BellSilentSVG: () => BellSilent,
  BinocularSVG: () => Binocular,
  BirdSVG: () => Bird,
  BoldSVG: () => Bold,
  BookmarkSVG: () => Bookmark,
  BoxFilledSVG: () => BoxFilled,
  BoxSVG: () => Box,
  BrainSVG: () => Brain,
  Breadcrumb: () => breadcrumb_default,
  BrightHigh: () => BrightHigh,
  BrightLowSVG: () => BrightLow,
  BucketSVG: () => Bucket,
  Button: () => button_default,
  CALLOUT_TYPE: () => CALLOUT_TYPE,
  CARD_PADDING: () => CARD_PADDING,
  CARD_VARIANT: () => CARD_VARIANT,
  CHECKBOX_EDGE_STYLE: () => CHECKBOX_EDGE_STYLE,
  CHECKBOX_SIZE: () => CHECKBOX_SIZE,
  CHIP_EDGE_STYLE: () => CHIP_EDGE_STYLE,
  CHIP_VARIANT: () => CHIP_VARIANT,
  CIRCULAR_PROGRESS_SIZE: () => CIRCULAR_PROGRESS_SIZE,
  CIRCULAR_PROGRESS_TYPE: () => CIRCULAR_PROGRESS_TYPE,
  CabinSVG: () => Cabin,
  CakeSVG: () => Cake,
  CalendarSVG: () => Calendar,
  Callout: () => callout_default,
  Card: () => card_default,
  Carousel: () => carousel_default,
  CartSVG: () => Cart,
  ChartSVG: () => Chart,
  CheckSVG: () => Check,
  Checkbox: () => checkbox_default,
  ChevDownSVG: () => ChevDown,
  ChevLeftSVG: () => ChevLeft,
  ChevRightSVG: () => ChevRight,
  ChevUpSVG: () => ChevUp,
  Chip: () => chip_default,
  CircleSVG: () => Circle,
  CircularProgress: () => circularProgress_default,
  CitySVG: () => City,
  ClockSVG: () => Clock,
  CloudRainSVG: () => CloudRain,
  CloudSVG: () => Cloud,
  CocktailSVG: () => Cocktail,
  CodeSVG: () => Code,
  CoinSVG: () => Coin,
  CoinsSVG: () => Coins,
  ColorPicker: () => colorPicker_default,
  ColorsSVG: () => Colors,
  CommandPalette: () => commandPalette_default,
  CompassSVG: () => Compass,
  ConnectionSVG: () => Connection,
  ContextMenu: () => contextMenu_default,
  ControllerSVG: () => Controller,
  CopySVG: () => Copy,
  CouponSVG: () => Coupon,
  CoversSVG: () => Covers,
  CowSVG: () => Cow,
  CrabSVG: () => Crab,
  CreditCardSVG: () => CreditCard,
  CropSVG: () => Crop,
  CrossSVG: () => Cross,
  CsvSVG: () => Csv,
  DATE_PICKER_FORMAT: () => DATE_PICKER_FORMAT,
  DIVIDER_ORIENTATION: () => DIVIDER_ORIENTATION,
  DIVIDER_VARIANT: () => DIVIDER_VARIANT,
  DRAWER_PLACEMENT: () => DRAWER_PLACEMENT,
  DRAWER_SIZE: () => DRAWER_SIZE,
  DROPDOWN_PLACEMENT: () => DROPDOWN_PLACEMENT,
  DashboardSVG: () => Dashboard,
  DatabaseSVG: () => Database,
  DatePicker: () => datePicker_default,
  DateRangePicker: () => dateRangePicker_default,
  DeskBellSVG: () => DeskBell,
  DiceSVG: () => Dice,
  Divider: () => divider_default,
  DolphinSVG: () => Dolphin,
  DoorOpnSVG: () => DoorOpen,
  DotFillSVG: () => DotFill,
  DownFolderSVG: () => DownFolder,
  DownloadSVG: () => Download,
  DragHandleSVG: () => DragHandle,
  Drawer: () => drawer_default,
  DropdownMenu: () => dropdownMenu_default,
  EarthSVG: () => Earth,
  EclipseHorizontalSVG: () => EclipseHorizontal,
  EclipseSVG: () => Eclipse,
  EditSVG: () => Edit,
  ElephantSVG: () => Elephant,
  Ellipsis: () => ellipsis_default,
  EyeOffSVG: () => EyeOff,
  EyeSVG: () => Eye,
  FORM_ELEMENT_EDGE_STYLE: () => FORM_ELEMENT_EDGE_STYLE,
  FORM_ELEMENT_SIZE: () => FORM_ELEMENT_SIZE,
  FenceSVG: () => Fence,
  FileUploader: () => fileUploader_default,
  FilterDropdown: () => filterDropdown_default,
  FilterSVG: () => Filter,
  FiltersSVG: () => Filters,
  FingerClickSVG: () => FingerClick,
  FlagSVG: () => Flag,
  FocusSVG: () => Focus,
  FoxSVG: () => Fox,
  GhostSVG: () => Ghost,
  GiftSVG: () => Gift,
  GithubSVG: () => Github,
  GlobeSVG: () => Globe,
  GridSVG: () => Grid,
  HandSVG: () => Hand,
  HashSVG: () => Hash,
  HeartSVG: () => Heart,
  HelicopterSVG: () => Helicopter,
  HelpSVG: () => Help,
  HospitalSVG: () => Hospital,
  ImageSVG: () => Image,
  InfoSVG: () => Info,
  Input: () => input_default,
  ItalicSVG: () => Italic,
  JoystickSVG: () => Joystick,
  KeySVG: () => Key,
  LIST_SIZE: () => LIST_SIZE,
  LIST_VARIANT: () => LIST_VARIANT,
  LayersSVG: () => Layers,
  LayoutSVG: () => Layout,
  LightSVG: () => Light,
  LineCircleSVG: () => LineCircle,
  LineSVG: () => Line,
  LineSquareSVG: () => LineSquare,
  LinkSVG: () => Link,
  LinkedinSVG: () => Linkedin,
  LionSVG: () => Lion,
  List: () => list_default,
  LobsterSVG: () => Lobster,
  LockSVG: () => Lock,
  MENU_BAR_ITEMS_ALIGN: () => MENU_BAR_ITEMS_ALIGN,
  MENU_BAR_VARIANT: () => MENU_BAR_VARIANT,
  MODAL_SIZE: () => MODAL_SIZE,
  MULTI_SELECT_SIZE: () => MULTI_SELECT_SIZE,
  MailOpenSVG: () => MailOpen,
  MailPlusSVG: () => MailPlus,
  MailSVG: () => Mail,
  MailsSVG: () => Mails,
  MapPinSVG: () => MapPin,
  MapSVG: () => Map,
  MasksSVG: () => Masks,
  MenuBar: () => menuBar_default,
  MenuSVG: () => Menu,
  MessageSVG: () => Message,
  MicMuteSVG: () => MicMute,
  MicSVG: () => Mic,
  MinusSVG: () => Minus,
  MobileSVG: () => Mobile,
  Modal: () => modal_default,
  MoneyBagSVG: () => MoneyBag,
  MoneySVG: () => Money,
  MonkeySVG: () => Monkey,
  MoonSVG: () => Moon,
  MultiSelect: () => multiSelect_default,
  NavBar: () => navBar_default,
  NavigationSVG: () => Navigation,
  NewTabSVG: () => NewTab,
  OTP_SIZE: () => OTP_SIZE,
  OfficePhoneSVG: () => OfficePhone,
  OrderInfoSVG: () => OrderInfo,
  OrdersSVG: () => Orders,
  OtpInput: () => otpInput_default,
  POPOVER_PLACEMENT: () => POPOVER_PLACEMENT,
  POPOVER_TRIGGER: () => POPOVER_TRIGGER,
  PROGRESS_BAR_SIZE: () => PROGRESS_BAR_SIZE,
  PROGRESS_BAR_TYPE: () => PROGRESS_BAR_TYPE,
  PackageSVG: () => Package,
  Pagination: () => pagination_default,
  PaperclipSVG: () => Paperclip,
  PdfSVG: () => Pdf,
  PercentageSVG: () => Percentage,
  PhoneCutSVG: () => PhoneCut,
  PhoneInSVG: () => PhoneIn,
  PhoneOutSVG: () => PhoneOut,
  PhoneSVG: () => Phone,
  PinSVG: () => Pin,
  PlaneSVG: () => Plane,
  Popover: () => popover_default,
  PrinterSVG: () => Printer,
  ProductsSVG: () => Products,
  ProgressBar: () => progressBar_default,
  QrCodeSVG: () => QrCode,
  QuoteSVG: () => Quote,
  RadioButton: () => radioButton_default,
  RadioSVG: () => Radio,
  ReceiptSVG: () => Receipt,
  RedoSVG: () => Redo,
  RefreshSVG: () => Refresh,
  RobotSVG: () => Robot,
  RocketSVG: () => Rocket,
  RotateCcwSVG: () => RotateCcw,
  RotateCwSVG: () => RotateCw,
  RouteSVG: () => Route,
  SKELETON_VARIANT: () => SKELETON_VARIANT,
  SLIDER_SIZE: () => SLIDER_SIZE,
  SNACK_BAR_TYPE: () => SNACK_BAR_TYPE,
  SPINNER_COLOR: () => SPINNER_COLOR,
  SPINNER_SIZE: () => SPINNER_SIZE,
  STATE_TYPE: () => STATE_TYPE,
  STAT_TREND: () => STAT_TREND,
  STEPPER_ORIENTATION: () => STEPPER_ORIENTATION,
  STEPPER_VARIANT: () => STEPPER_VARIANT,
  STEP_DIRECTION: () => STEP_DIRECTION,
  STEP_STATUS: () => STEP_STATUS,
  SWITCH_SIZE: () => SWITCH_SIZE,
  SaleSVG: () => Sale,
  ScanSVG: () => Scan,
  SearchInput: () => searchInput_default,
  SearchSVG: () => Search,
  SelectDropdown: () => selectDropdown_default,
  SendSVG: () => Send,
  SettingsSVG: () => Settings,
  SheepSVG: () => Sheep,
  ShieldSVG: () => Shield,
  ShippingSVG: () => Shipping,
  ShuttleSVG: () => Shuttle,
  SignInSVG: () => SignIn,
  SignOutSVG: () => SignOut,
  SignalSVG: () => Signal,
  SirenSVG: () => Siren,
  Skeleton: () => skeleton_default,
  Slider: () => slider_default,
  Snackbar: () => snackBar_default,
  SnakeSVG: () => Snake,
  SnowflakeSVG: () => Snowflake,
  SortSVG: () => Sort,
  Spinner: () => spinner_default,
  SpinnerIconSVG: () => Spinner,
  SquareFillSVG: () => SquareFill,
  StarRoundSVG: () => StarRound,
  StarSVG: () => Star,
  StarsSVG: () => Stars,
  StatCard: () => statCard_default,
  States: () => state_default,
  Stepper: () => stepper_default,
  StepsSVG: () => Steps,
  StoreSVG: () => Store,
  SuitcaseSVG: () => Suitcase,
  SunSVG: () => Sun,
  Switch: () => switch_default,
  TABS_VARIANT: () => TABS_VARIANT,
  TAG_EDGE_STYLE: () => TAG_EDGE_STYLE,
  TAG_TYPE: () => TAG_TYPE,
  TAG_VARIANT: () => TAG_VARIANT,
  TIME_FORMAT: () => TIME_FORMAT,
  TOOLTIP_POSITION: () => TOOLTIP_POSITION,
  Table: () => table_default,
  Tabs: () => tabs_default,
  Tag: () => tag_default,
  TagsSVG: () => Tags,
  TargetSVG: () => Target,
  TelephoneSVG: () => Telephone,
  TemplatesSVG: () => Templates,
  TerminalSVG: () => Terminal,
  TextArea: () => textarea_default,
  TextSVG: () => Text,
  ThoughtSVG: () => Thought,
  ThumbsUpSVG: () => ThumbsUp,
  TimeLine: () => timeLine_default,
  TimePicker: () => timePicker_default,
  ToDoSVG: () => ToDo,
  Tooltip: () => tooltip_default,
  TrashSVG: () => Trash,
  TruckSVG: () => Truck,
  TurtleSVG: () => Turtle,
  TwitterXSVG: () => TwitterX,
  UfoSVG: () => Ufo,
  UnderlineSVG: () => Underline,
  UndoSVG: () => Undo,
  UnlockSVG: () => Unlock,
  UpFolderSVG: () => UpFolder,
  UploadSVG: () => Upload,
  UserSVG: () => User,
  UsersSVG: () => Users,
  VanSVG: () => Van,
  VideoCamSVG: () => VideoCam,
  WalletSVG: () => Wallet,
  WarningSVG: () => Warning,
  WhaleSVG: () => Whale,
  WifiSVG: () => Wifi,
  ZoomInSVG: () => ZoomIn,
  ZoomOutSVG: () => ZoomOut
});
module.exports = __toCommonJS(index_exports);

// src/components/avatar/index.tsx
var import_react = require("react");

// src/components/tooltip/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var TOOLTIP_POSITION = /* @__PURE__ */ ((TOOLTIP_POSITION2) => {
  TOOLTIP_POSITION2["TOP"] = "top";
  TOOLTIP_POSITION2["BOTTOM"] = "bottom";
  TOOLTIP_POSITION2["LEFT"] = "left";
  TOOLTIP_POSITION2["RIGHT"] = "right";
  return TOOLTIP_POSITION2;
})(TOOLTIP_POSITION || {});
var Tooltip = ({
  position,
  label,
  isVisible = false,
  toolTipWidth = "w-60",
  toolTipClass = "",
  className = ""
}) => {
  const getTooltipPosition = (position2) => {
    switch (position2) {
      case "top" /* TOP */:
        return "mb-2 bottom-full left-1/2 -translate-x-1/2";
      case "bottom" /* BOTTOM */:
        return "mt-2 top-full left-1/2 -translate-x-1/2";
      case "left" /* LEFT */:
        return "mr-2 right-full top-1/2 -translate-y-1/2";
      case "right" /* RIGHT */:
        return "ml-2 left-full top-1/2 -translate-y-1/2";
      default:
        return "";
    }
  };
  const tipPosition = (position2) => {
    switch (position2) {
      case "top" /* TOP */:
        return "bottom-[-4px] left-1/2 -translate-x-1/2";
      case "bottom" /* BOTTOM */:
        return "top-[-4px] left-1/2 -translate-x-1/2";
      case "left" /* LEFT */:
        return "right-[-4px] top-1/2 -translate-y-1/2";
      case "right" /* RIGHT */:
        return "left-[-4px] top-1/2 -translate-y-1/2";
      default:
        return "";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: `bg-foreground text-background text-sm py-1 px-2 rounded-lg absolute z-50
        ${isVisible ? "block" : "hidden"} ${getTooltipPosition(position)}
        ${toolTipWidth} ${toolTipClass} ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: `absolute w-2 h-2 bg-foreground rotate-45 ${tipPosition(position)}`
          }
        )
      ]
    }
  );
};
var tooltip_default = Tooltip;

// src/components/avatar/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var AVATAR_VARIANT = /* @__PURE__ */ ((AVATAR_VARIANT2) => {
  AVATAR_VARIANT2["IMAGE_WITH_FULL"] = "image_with_full";
  AVATAR_VARIANT2["INITIALS_WITH_FULL"] = "initials_with_full";
  AVATAR_VARIANT2["IMAGE_ONLY"] = "image-only";
  AVATAR_VARIANT2["INITIALS_ONLY"] = "initials-only";
  return AVATAR_VARIANT2;
})(AVATAR_VARIANT || {});
var AVATAR_SIZE = /* @__PURE__ */ ((AVATAR_SIZE2) => {
  AVATAR_SIZE2["XS"] = "XS";
  AVATAR_SIZE2["SM"] = "SM";
  AVATAR_SIZE2["MD"] = "MD";
  AVATAR_SIZE2["LG"] = "LG";
  AVATAR_SIZE2["XL"] = "XL";
  return AVATAR_SIZE2;
})(AVATAR_SIZE || {});
var AVATAR_LABEL_POSITION = /* @__PURE__ */ ((AVATAR_LABEL_POSITION2) => {
  AVATAR_LABEL_POSITION2["LEFT"] = "LEFT";
  AVATAR_LABEL_POSITION2["RIGHT"] = "RIGHT";
  return AVATAR_LABEL_POSITION2;
})(AVATAR_LABEL_POSITION || {});
var sizeMap = {
  ["XS" /* XS */]: { avatar: "size-6", text: "text-xs", sub: "text-[10px]", initials: "text-xs" },
  ["SM" /* SM */]: { avatar: "size-8", text: "text-xs", sub: "text-[10px]", initials: "text-xs" },
  ["MD" /* MD */]: { avatar: "size-10", text: "text-sm", sub: "text-xs", initials: "text-xs" },
  ["LG" /* LG */]: { avatar: "size-14", text: "text-base", sub: "text-sm", initials: "text-sm" },
  ["XL" /* XL */]: { avatar: "size-18", text: "text-lg", sub: "text-sm", initials: "text-base" }
};
var generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, ${60 + Math.random() * 20}%, ${75 + Math.random() * 10}%)`;
};
var Avatar = ({
  name,
  email,
  image,
  variant,
  size = "LG" /* LG */,
  labelPosition = "RIGHT" /* RIGHT */,
  className = "",
  isLoading = false
}) => {
  const [bgColor, setBgColor] = (0, import_react.useState)("transparent");
  const [isTooltipInitialVisible, setIsTooltipInitialVisible] = (0, import_react.useState)(false);
  const [isTooltipImageVisible, setIsTooltipImageVisible] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setBgColor(generatePastelColor());
  }, []);
  const sizes = sizeMap[size];
  const tooltipPos = labelPosition === "LEFT" /* LEFT */ ? "left" /* LEFT */ : "right" /* RIGHT */;
  const generateInitials = (name2) => {
    const parts = name2.split(" ");
    return parts.length > 1 ? `${parts[0].charAt(0)}${parts[1].charAt(0)}` : parts[0].charAt(0);
  };
  const renderTooltip = (isVisible) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    tooltip_default,
    {
      position: tooltipPos,
      label: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col", children: [
        name,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "opacity-70 text-xs", children: email })
      ] }),
      isVisible,
      toolTipWidth: "w-36"
    }
  );
  const renderAvatarImage = () => {
    if (image && (variant === "image-only" /* IMAGE_ONLY */ || variant === "image_with_full" /* IMAGE_WITH_FULL */)) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          className: "relative",
          onMouseEnter: () => setIsTooltipImageVisible(true),
          onMouseLeave: () => setIsTooltipImageVisible(false),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "img",
              {
                className: `rounded-full border border-border ${sizes.avatar} object-cover`,
                src: image,
                alt: "profile"
              }
            ),
            variant === "image-only" /* IMAGE_ONLY */ && renderTooltip(isTooltipImageVisible)
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: `${sizes.avatar} ${sizes.initials} flex items-center justify-center rounded-full font-semibold cursor-default relative`,
        style: { backgroundColor: bgColor },
        onMouseEnter: () => setIsTooltipInitialVisible(true),
        onMouseLeave: () => setIsTooltipInitialVisible(false),
        children: [
          generateInitials(name),
          variant === "initials-only" /* INITIALS_ONLY */ && renderTooltip(isTooltipInitialVisible)
        ]
      }
    );
  };
  const showLabel = variant === "image_with_full" /* IMAGE_WITH_FULL */ || variant === "initials_with_full" /* INITIALS_WITH_FULL */;
  const label = showLabel && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `flex flex-col ${labelPosition === "LEFT" /* LEFT */ ? "items-end" : "items-start"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: `font-semibold text-foreground leading-tight ${sizes.text}`, children: name }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: `text-muted-fg ${sizes.sub}`, children: email })
  ] });
  if (isLoading) {
    const shimmerLabel = showLabel && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `flex flex-col gap-2 ${labelPosition === "LEFT" /* LEFT */ ? "items-end" : "items-start"}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-32 h-4 bg-surface-raised rounded-lg" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-24 h-3 bg-surface-raised rounded-lg" })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-row items-center gap-2 pl-1.25 animate-pulse", children: [
      labelPosition === "LEFT" /* LEFT */ && shimmerLabel,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `${sizes.avatar} rounded-full bg-surface-raised` }),
      labelPosition === "RIGHT" /* RIGHT */ && shimmerLabel
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `flex flex-row items-center gap-2 pl-1.25 ${className}`, children: [
    labelPosition === "LEFT" /* LEFT */ && label,
    renderAvatarImage(),
    labelPosition === "RIGHT" /* RIGHT */ && label
  ] });
};
var avatar_default = Avatar;

// src/components/callout/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var CALLOUT_TYPE = /* @__PURE__ */ ((CALLOUT_TYPE2) => {
  CALLOUT_TYPE2["INFO"] = "INFO";
  CALLOUT_TYPE2["WARNING"] = "WARNING";
  CALLOUT_TYPE2["TIP"] = "TIP";
  CALLOUT_TYPE2["DANGER"] = "DANGER";
  return CALLOUT_TYPE2;
})(CALLOUT_TYPE || {});
var InfoIcon = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "size-4 shrink-0 mt-0.5", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 7v4", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "5", r: "0.75", fill: "currentColor" })
] });
var WarningIcon = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "size-4 shrink-0 mt-0.5", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 2L14.5 13.5H1.5L8 2Z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 6.5v3", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "11", r: "0.75", fill: "currentColor" })
] });
var TipIcon = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "size-4 shrink-0 mt-0.5", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5.5 8.5l2 2 3-4", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
] });
var DangerIcon = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "size-4 shrink-0 mt-0.5", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5.5 5.5l5 5M10.5 5.5l-5 5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
] });
var config = {
  ["INFO" /* INFO */]: {
    border: "border-accent/50",
    bg: "bg-accent/10",
    text: "text-accent",
    label: "Note",
    icon: InfoIcon
  },
  ["WARNING" /* WARNING */]: {
    border: "border-warning/50",
    bg: "bg-warning-bg",
    text: "text-warning-fg",
    label: "Warning",
    icon: WarningIcon
  },
  ["TIP" /* TIP */]: {
    border: "border-success/50",
    bg: "bg-success-bg",
    text: "text-success-fg",
    label: "Tip",
    icon: TipIcon
  },
  ["DANGER" /* DANGER */]: {
    border: "border-danger/50",
    bg: "bg-danger-bg",
    text: "text-danger-fg",
    label: "Danger",
    icon: DangerIcon
  }
};
var Callout = ({
  type = "INFO" /* INFO */,
  title,
  children,
  className = ""
}) => {
  const { border, bg, text, label, icon: Icon } = config[type];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      className: `border-l-4 rounded-r-lg px-4 py-3 text-sm leading-relaxed ${border} ${bg} ${text} ${className}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-row gap-2 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-bold uppercase tracking-[0.15em] text-[10px]", children: title != null ? title : label }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children })
        ] })
      ] })
    }
  );
};
var callout_default = Callout;

// src/components/banner/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Banner = ({
  title = "",
  subTitle = "",
  contentPlacement = "left",
  backgroundImage = "",
  backgroundColor = "",
  titleClassName = "",
  subTitleClassName = "",
  className = ""
}) => {
  const handleContentPlacement = () => {
    if (contentPlacement === "left") {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: titleClassName, children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: subTitleClassName, children: subTitle })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {})
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "hidden md:block" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: titleClassName, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: subTitleClassName, children: subTitle })
      ] })
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: `w-full h-60 md:h-121 grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 ${backgroundColor} bg-no-repeat bg-cover bg-center ${className}`,
      style: backgroundImage !== "" ? { backgroundImage: `url(${backgroundImage})` } : {},
      children: handleContentPlacement()
    }
  );
};
var banner_default = Banner;

// src/components/button/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var BUTTON_VARIANTS = /* @__PURE__ */ ((BUTTON_VARIANTS2) => {
  BUTTON_VARIANTS2["PRIMARY"] = "primary";
  BUTTON_VARIANTS2["SECONDARY"] = "secondary";
  BUTTON_VARIANTS2["TERTIARY"] = "tertiary";
  return BUTTON_VARIANTS2;
})(BUTTON_VARIANTS || {});
var BUTTON_EDGE_STYLE = /* @__PURE__ */ ((BUTTON_EDGE_STYLE2) => {
  BUTTON_EDGE_STYLE2["ROUNDED"] = "rounded";
  BUTTON_EDGE_STYLE2["SQUARED"] = "squared";
  BUTTON_EDGE_STYLE2["PILL"] = "pill";
  return BUTTON_EDGE_STYLE2;
})(BUTTON_EDGE_STYLE || {});
var BUTTON_SIZE = /* @__PURE__ */ ((BUTTON_SIZE2) => {
  BUTTON_SIZE2["SM"] = "SM";
  BUTTON_SIZE2["MD"] = "MD";
  BUTTON_SIZE2["LG"] = "LG";
  return BUTTON_SIZE2;
})(BUTTON_SIZE || {});
var variantClass = (variant, disabled) => {
  switch (variant) {
    case "primary" /* PRIMARY */:
      return disabled ? "bg-primary-200 text-primary-500 cursor-not-allowed" : "bg-primary-500 text-primary-default-fg hover:bg-primary-600 active:bg-primary-700";
    case "secondary" /* SECONDARY */:
      return disabled ? "bg-surface text-muted-fg cursor-not-allowed" : "bg-primary-100 text-primary-800 cursor-pointer hover:bg-primary-200 active:bg-primary-300";
    case "tertiary" /* TERTIARY */:
      return disabled ? "text-muted-fg border border-border cursor-not-allowed" : "bg-transparent text-primary-500 border border-primary-500 cursor-pointer hover:bg-surface active:bg-surface-raised";
  }
};
var edgeClass = (edges) => {
  switch (edges) {
    case "squared" /* SQUARED */:
      return "rounded-none";
    case "pill" /* PILL */:
      return "rounded-full";
    default:
      return "rounded-lg";
  }
};
var sizeConfig = {
  ["SM" /* SM */]: { text: "text-xs", px: "px-3", py: "py-1.5", pyIcon: "p-1.5", icon: "size-3.5" },
  ["MD" /* MD */]: { text: "text-sm", px: "px-4", py: "py-2.5", pyIcon: "p-2.5", icon: "size-4" },
  ["LG" /* LG */]: { text: "text-base", px: "px-6", py: "py-3.5", pyIcon: "p-3.5", icon: "size-5" }
};
var Button = ({
  variant = "primary" /* PRIMARY */,
  label,
  onClick,
  leftIcon,
  rightIcon,
  type = "button",
  disabled = false,
  className = "",
  edges = "rounded" /* ROUNDED */,
  size = "MD" /* MD */
}) => {
  const s = sizeConfig[size];
  const padding = label ? `${s.py} ${s.px}` : s.pyIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "button",
    {
      type,
      onClick,
      disabled,
      className: `${variantClass(variant, disabled)} ${padding} ${s.text} ${edgeClass(edges)} ${className}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
        leftIcon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: s.icon, children: leftIcon }),
        label && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: label }),
        rightIcon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: s.icon, children: rightIcon })
      ] })
    }
  );
};
var button_default = Button;

// src/components/carousel/index.tsx
var import_react2 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Carousel = ({
  slides,
  interval = 3e3,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `relative w-full h-60 md:h-121 overflow-hidden ${className}`, children: slides.map(
    ({
      title,
      titleClassName,
      subTitle,
      subTitleClassName,
      backgroundImage,
      backgroundColor,
      contentPlacement
    }, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "div",
        {
          className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            banner_default,
            {
              title,
              titleClassName,
              subTitle,
              subTitleClassName,
              contentPlacement,
              backgroundImage,
              backgroundColor
            }
          )
        },
        index
      );
    }
  ) });
};
var carousel_default = Carousel;

// src/components/icons/dashboardSVG/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var Dashboard = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 1.25C6.72875 1.25 0 7.97875 0 16.25C0 21.14 2.435 25.77 6.51625 28.6362L6.6775 28.75H23.3225L23.4838 28.6362C27.565 25.77 30 21.14 30 16.25C30 7.97875 23.2712 1.25 15 1.25ZM22.925 27.5H7.075C3.4775 24.895 1.25 20.6012 1.25 16.25C1.25 8.66875 7.41875 2.5 15 2.5C22.5812 2.5 28.75 8.66875 28.75 16.25C28.75 20.6012 26.5225 24.895 22.925 27.5ZM22.4613 9.6725L21.5775 8.78875L16.2688 14.0975C15.8963 13.8775 15.4625 13.75 15 13.75C13.6213 13.75 12.5 14.8713 12.5 16.25C12.5 17.6287 13.6213 18.75 15 18.75C16.3787 18.75 17.5 17.6287 17.5 16.25C17.5 15.7875 17.3725 15.3537 17.1525 14.9812L22.4613 9.6725ZM15 17.5C14.31 17.5 13.75 16.94 13.75 16.25C13.75 15.56 14.31 15 15 15C15.69 15 16.25 15.56 16.25 16.25C16.25 16.94 15.69 17.5 15 17.5ZM8.8125 10.0625C5.40125 13.4738 5.40125 19.0263 8.8125 22.4375L7.92875 23.3212C4.03125 19.4225 4.03125 13.0775 7.92875 9.17875C11.0562 6.05125 15.7537 5.43875 19.5037 7.3275L18.5637 8.2675C15.35 6.83875 11.4462 7.43 8.8125 10.0612V10.0625ZM22.0712 23.3212L21.1875 22.4375C23.8188 19.805 24.4113 15.9012 22.9813 12.6863L23.9212 11.7463C25.8087 15.4963 25.1962 20.1937 22.0712 23.3212Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/ordersSVG/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Orders = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("g", { clipPath: "url(#clip0_897_101)", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 21.875V3.125C5 1.40125 3.5975 0 1.875 0H0V1.25H1.875C2.90875 1.25 3.75 2.09125 3.75 3.125V21.875C3.75 23.5987 5.1525 25 6.875 25H7.5V26.25C7.5 28.3175 9.1825 30 11.25 30C13.3175 30 15 28.3175 15 26.25V25H20V26.25C20 28.3175 21.6825 30 23.75 30C25.8175 30 27.5 28.3175 27.5 26.25V25H30V23.75H6.875C5.84125 23.75 5 22.9088 5 21.875ZM13.75 26.25C13.75 27.6287 12.6287 28.75 11.25 28.75C9.87125 28.75 8.75 27.6287 8.75 26.25V25H13.75V26.25ZM26.25 26.25C26.25 27.6287 25.1287 28.75 23.75 28.75C22.3713 28.75 21.25 27.6287 21.25 26.25V25H26.25V26.25ZM7.5 21.25H30V12.5H7.5V21.25ZM8.75 13.75H28.75V20H8.75V13.75ZM17.5 0H7.5V10H17.5V0ZM16.25 8.75H8.75V1.25H16.25V8.75ZM20 2.5V10H30V2.5H20ZM28.75 8.75H21.25V3.75H28.75V8.75Z",
        fill: "currentcolor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("clipPath", { id: "clip0_897_101", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { width: "30", height: "30", fill: "currentcolor" }) }) })
  ] });
};

// src/components/icons/productsSVG/index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Products = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("g", { clipPath: "url(#clip0_897_103)", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.375 18.75H24.375V20H19.375V18.75ZM30 16.875V30H0V16.875C0 15.1512 1.40125 13.75 3.125 13.75H6.25V3.125C6.25 1.40125 7.65125 0 9.375 0H20.625C22.3487 0 23.75 1.40125 23.75 3.125V13.75H26.875C28.5987 13.75 30 15.1512 30 16.875ZM7.5 13.75H22.5V3.125C22.5 2.09125 21.6588 1.25 20.625 1.25H9.375C8.34125 1.25 7.5 2.09125 7.5 3.125V13.75ZM1.25 28.75H14.375V15H3.125C2.09125 15 1.25 15.8413 1.25 16.875V28.75ZM28.75 16.875C28.75 15.8413 27.9088 15 26.875 15H15.625V28.75H28.75V16.875ZM5.625 18.75V20H10.625V18.75H5.625ZM12.5 6.25H17.5V5H12.5V6.25Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("clipPath", { id: "clip0_897_103", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/templatesSVG/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Templates = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("g", { clipPath: "url(#clip0_897_105)", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 15.0002H10C8.625 15.0002 7.5 16.1252 7.5 17.5002V22.5002C7.5 23.8752 8.625 25.0002 10 25.0002H20C21.375 25.0002 22.5 23.8752 22.5 22.5002V17.5002C22.5 16.1252 21.375 15.0002 20 15.0002ZM21.25 22.5002C21.25 23.1877 20.6875 23.7502 20 23.7502H10C9.3125 23.7502 8.75 23.1877 8.75 22.5002V17.5002C8.75 16.8127 9.3125 16.2502 10 16.2502H20C20.6875 16.2502 21.25 16.8127 21.25 17.5002V22.5002ZM7.5 10.6252C7.5 10.2752 7.775 10.0002 8.125 10.0002H13.125C13.475 10.0002 13.75 10.2752 13.75 10.6252C13.75 10.9752 13.475 11.2502 13.125 11.2502H8.125C7.775 11.2502 7.5 10.9752 7.5 10.6252ZM25.125 6.73774L20.775 2.38774C19.2375 0.850241 17.2 0.0127415 15.025 0.0127415H8.125C5.025 0.000241525 2.5 2.52524 2.5 5.62524V24.3752C2.5 27.4752 5.025 30.0002 8.125 30.0002H21.875C24.975 30.0002 27.5 27.4752 27.5 24.3752V12.4877C27.5 10.3127 26.65 8.27524 25.125 6.73774ZM24.2375 7.62524C24.925 8.31274 25.45 9.12524 25.7875 10.0002H19.375C18.3375 10.0002 17.5 9.16274 17.5 8.12524V1.71274C18.3875 2.05024 19.1875 2.57524 19.875 3.26274L24.225 7.61274L24.2375 7.62524ZM26.25 24.3752C26.25 26.7877 24.2875 28.7502 21.875 28.7502H8.125C5.7125 28.7502 3.75 26.7877 3.75 24.3752V5.62524C3.75 3.21274 5.7125 1.25024 8.125 1.25024H15.0125C15.425 1.25024 15.8375 1.28774 16.25 1.36274V8.12524C16.25 9.85024 17.65 11.2502 19.375 11.2502H26.1375C26.2125 11.6502 26.25 12.0627 26.25 12.4877V24.3752Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("clipPath", { id: "clip0_897_105", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/coversSVG/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Covers = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("g", { clipPath: "url(#clip0_897_107)", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M30 4.37504V21.8263C30 24.3425 28.3075 26.5713 25.8825 27.245L16.9825 29.7213C15.685 30.0813 14.3138 30.0825 13.0163 29.7213L4.11625 27.245C1.6925 26.57 -2.36592e-07 24.3425 -2.36592e-07 21.8263V5.62504C-0.0125002 4.81379 1.2625 4.81379 1.25 5.62504V21.8263C1.25 23.7825 2.56625 25.5163 4.4525 26.0413L13.3538 28.5175C14.4312 28.8175 15.57 28.8175 16.6488 28.5175L25.5487 26.04C27.435 25.5163 28.7512 23.7825 28.7512 21.825V4.37504C28.7387 3.56379 30.0125 3.56379 30 4.37504ZM3.75 19.8888V4.37504C3.75 2.99004 4.38375 1.71629 5.49 0.882541C6.59625 0.0487912 7.995 -0.212459 9.32625 0.167541L13.3575 1.32004C14.03 1.51129 14.5988 1.92004 14.9987 2.45504C15.3987 1.92004 15.9688 1.51129 16.64 1.32004L20.6712 0.167541C22.0037 -0.212459 23.4025 0.0475412 24.5075 0.882541C25.6138 1.71629 26.2475 2.99004 26.2475 4.37504V19.8888C26.2475 21.8313 24.9425 23.5613 23.075 24.0963L16.0637 26.1C15.3663 26.2988 14.6288 26.2988 13.9313 26.1L6.92125 24.0963C5.0525 23.5625 3.7475 21.8313 3.7475 19.8888H3.75ZM15.625 4.32504V24.9225C15.6575 24.915 22.7337 22.8938 22.7337 22.8938C24.0675 22.5125 25 21.2775 25 19.8888V4.37504C25 3.38504 24.5475 2.47629 23.7562 1.88004C22.9637 1.28129 21.9562 1.09879 21.0162 1.37004L16.985 2.52254C16.1838 2.75129 15.625 3.49254 15.625 4.32504ZM5 19.8888C5 21.2763 5.9325 22.5125 7.26625 22.8938C7.26625 22.8938 14.3425 24.915 14.375 24.9225V4.32504C14.375 3.49254 13.8162 2.75129 13.015 2.52254L8.98375 1.37004C7.0725 0.758791 4.93875 2.36129 5 4.37504V19.8888Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("clipPath", { id: "clip0_897_107", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/colorsSVG/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var Colors = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("g", { clipPath: "url(#clip0_897_109)", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M26.25 5V3.125C26.25 1.40125 24.8475 0 23.125 0H3.125C1.4025 0 0 1.40125 0 3.125V8.125C0 9.84875 1.4025 11.25 3.125 11.25H23.125C24.8475 11.25 26.25 9.84875 26.25 8.125V6.25C27.6287 6.25 28.75 7.37125 28.75 8.75V11.25C28.75 12.6287 27.6287 13.75 26.25 13.75H16.875C14.4625 13.75 12.5 15.7125 12.5 18.125V18.8125C11.075 19.1025 10 20.365 10 21.875V26.875C10 28.5987 11.4025 30 13.125 30C14.8475 30 16.25 28.5987 16.25 26.875V21.875C16.25 20.365 15.175 19.1038 13.75 18.8125V18.125C13.75 16.4013 15.1525 15 16.875 15H26.25C28.3175 15 30 13.3175 30 11.25V8.75C30 6.6825 28.3175 5 26.25 5ZM25 8.125C25 9.15875 24.1588 10 23.125 10H3.125C2.09125 10 1.25 9.15875 1.25 8.125V3.125C1.25 2.09125 2.09125 1.25 3.125 1.25H23.125C24.1588 1.25 25 2.09125 25 3.125V8.125ZM15 21.875V26.875C15 27.9088 14.1587 28.75 13.125 28.75C12.0913 28.75 11.25 27.9088 11.25 26.875V21.875C11.25 20.8412 12.0913 20 13.125 20C14.1587 20 15 20.8412 15 21.875Z",
        fill: "currentcolor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("clipPath", { id: "clip0_897_109", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("rect", { width: "30", height: "30", fill: "currentcolor" }) }) })
  ] });
};

// src/components/icons/signInSVG/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var SignIn = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-4 -4 30 30", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m.5,11.5h17.412c-.074-.214-.191-.412-.357-.576l-4.154-4.107c-.196-.194-.198-.511-.004-.707.194-.197.511-.199.707-.004l4.154,4.107c.479.474.743,1.106.742,1.781,0,.001,0,.003,0,.004,0,0,0,.001,0,.002,0,.002-.001.004-.001.006-.004.669-.268,1.297-.745,1.766l-4.15,4.084c-.097.096-.224.144-.351.144-.129,0-.258-.05-.356-.149-.194-.196-.191-.514.006-.707l4.15-4.084c.162-.16.278-.352.354-.56H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5ZM19.5,0H4.5C2.019,0,0,2.019,0,4.5v4c0,.276.224.5.5.5s.5-.224.5-.5v-4c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-4c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/signOutSVG/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var SignOut = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("svg", { viewBox: "-3 -3 35 35", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("g", { clipPath: "url(#clip0_897_111)", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M30 15C30 15 30 15.0025 30 15.0037C29.9975 15.845 29.6675 16.6338 29.0675 17.2238L23.89 22.32C23.7687 22.44 23.61 22.5 23.4513 22.5C23.29 22.5 23.1288 22.4375 23.0063 22.3137C22.765 22.0688 22.7675 21.6725 23.0137 21.43L28.1912 16.3337C28.3962 16.1313 28.5425 15.8888 28.6362 15.6263H8.125C7.78 15.6263 7.5 15.3463 7.5 15.0013C7.5 14.6563 7.78 14.3763 8.125 14.3763H28.6375C28.5437 14.11 28.3975 13.865 28.19 13.6613L23.0137 8.57125C22.7675 8.33 22.7638 7.93375 23.0063 7.6875C23.2475 7.44 23.6437 7.4375 23.89 7.68L29.0662 12.77C29.6675 13.3625 30 14.1525 30 14.9975C30 14.9975 30 14.9987 30 15ZM14.375 18.75C14.03 18.75 13.75 19.03 13.75 19.375V24.375C13.75 26.7875 11.7875 28.75 9.375 28.75H5.625C3.2125 28.75 1.25 26.7875 1.25 24.375V5.625C1.25 3.2125 3.2125 1.25 5.625 1.25H9.375C11.7875 1.25 13.75 3.2125 13.75 5.625V10.625C13.75 10.97 14.03 11.25 14.375 11.25C14.72 11.25 15 10.97 15 10.625V5.625C15 2.52375 12.4762 0 9.375 0H5.625C2.52375 0 0 2.52375 0 5.625V24.375C0 27.4762 2.52375 30 5.625 30H9.375C12.4762 30 15 27.4762 15 24.375V19.375C15 19.03 14.72 18.75 14.375 18.75Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("clipPath", { id: "clip0_897_111", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/filterSVG/index.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var Filter = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("g", { clipPath: "url(#clip0_918_510)", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.4456 0H5.55342C3.13492 0 1.16675 1.96933 1.16675 4.38783C1.16675 5.4635 1.55991 6.4995 2.27508 7.30217L10.5001 16.5562V23.9178C10.5001 24.1232 10.6074 24.3133 10.7836 24.4183L16.6169 27.9183C16.7091 27.9743 16.8129 28.0012 16.9167 28.0012C17.0159 28.0012 17.1151 27.9767 17.2037 27.9265C17.3869 27.8227 17.5001 27.6278 17.5001 27.4178V16.5562L25.7263 7.30217C26.4403 6.4995 26.8334 5.4635 26.8334 4.38783C26.8334 1.96933 24.8641 0 22.4456 0ZM24.8524 6.5275L16.4792 15.946C16.3847 16.0533 16.3322 16.191 16.3322 16.3333V26.3865L11.6656 23.5865V16.3333C11.6656 16.191 11.6131 16.0533 11.5186 15.946L3.14658 6.5275C2.62158 5.93717 2.33341 5.17767 2.33341 4.38783C2.33341 2.61217 3.77775 1.16667 5.55342 1.16667H22.4456C24.2212 1.16667 25.6667 2.611 25.6667 4.38783C25.6667 5.17767 25.3774 5.93717 24.8524 6.5275Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("clipPath", { id: "clip0_918_510", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("rect", { width: "28", height: "28", rx: "8", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/chevDownSVG/index.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var ChevDown = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 20.0923C14.5 20.0923 14.0288 19.8973 13.6738 19.5436L7.07251 12.9423L7.95626 12.0586L14.5575 18.6598C14.7938 18.8961 15.205 18.8961 15.4413 18.6598L22.0425 12.0586L22.9263 12.9423L16.325 19.5436C15.9713 19.8973 15.5 20.0923 14.9988 20.0923H15Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/addSVG/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var Add = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M24,12c0,.276-.224,.5-.5,.5H12.5v11c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V12.5H.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5H11.5V.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5V11.5h11c.276,0,.5,.224,.5,.5Z"
    }
  ) });
};

// src/components/icons/addSquaredSVG/index.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var AddSquared = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17,12c0,.276-.224,.5-.5,.5h-4v4c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-4H7.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4V7.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v4h4c.276,0,.5,.224,.5,.5Zm7-7.5v15c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h15c2.481,0,4.5,2.019,4.5,4.5Zm-1,0c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V4.5Z"
    }
  ) });
};

// src/components/icons/addCircularSVG/index.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var AddCircular = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm5-11c0,.276-.224.5-.5.5h-4v4c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-4h-4c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4v-4c0-.276.224-.5.5-.5s.5.224.5.5v4h4c.276,0,.5.224.5.5Z"
    }
  ) });
};

// src/components/icons/crossSVG/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var Cross = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-150 -150 800 800", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M286.161,255.867L505.745,36.283c8.185-8.474,7.951-21.98-0.523-30.165c-8.267-7.985-21.375-7.985-29.642,0   L255.995,225.702L36.411,6.118c-8.475-8.185-21.98-7.95-30.165,0.524c-7.985,8.267-7.985,21.374,0,29.641L225.83,255.867   L6.246,475.451c-8.328,8.331-8.328,21.835,0,30.165l0,0c8.331,8.328,21.835,8.328,30.165,0l219.584-219.584l219.584,219.584   c8.331,8.328,21.835,8.328,30.165,0l0,0c8.328-8.331,8.328-21.835,0-30.165L286.161,255.867z",
      fill: "currentColor"
    }
  ) }) });
};

// src/components/icons/orderInfoSVG/index.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var OrderInfo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("g", { clipPath: "url(#clip0_907_32)", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.875 26.25H5.625C3.2125 26.25 1.25 24.2875 1.25 21.875V5.625C1.25 3.2125 3.2125 1.25 5.625 1.25H13.75V5.625C13.75 7.35 15.15 8.75 16.875 8.75H21.25V10.625C21.25 10.975 21.525 11.25 21.875 11.25C22.225 11.25 22.5 10.975 22.5 10.625C22.5 10.625 22.5125 8 22.5 7.95C22.3875 6.9625 21.925 6.0375 21.2125 5.3375L17.1625 1.2875C16.35 0.475 15.225 0 14.075 0H5.625C2.525 0 0 2.525 0 5.625V21.875C0 24.975 2.525 27.5 5.625 27.5H11.875C12.225 27.5 12.5 27.225 12.5 26.875C12.5 26.525 12.225 26.25 11.875 26.25ZM20.3375 6.2125C20.7 6.575 20.9625 7.0125 21.1125 7.5H16.875C15.8375 7.5 15 6.6625 15 5.625V1.3875C15.475 1.5375 15.925 1.8 16.2875 2.1625L20.3375 6.2125ZM21.875 13.75C17.4 13.75 13.75 17.4 13.75 21.875C13.75 26.35 17.4 30 21.875 30C26.35 30 30 26.35 30 21.875C30 17.4 26.35 13.75 21.875 13.75ZM21.875 28.75C18.0875 28.75 15 25.6625 15 21.875C15 18.0875 18.0875 15 21.875 15C25.6625 15 28.75 18.0875 28.75 21.875C28.75 25.6625 25.6625 28.75 21.875 28.75ZM23.125 18.75C23.125 19.4375 22.5625 20 21.875 20C21.1875 20 20.625 19.4375 20.625 18.75C20.625 18.0625 21.1875 17.5 21.875 17.5C22.5625 17.5 23.125 18.0625 23.125 18.75ZM22.5 21.875V25.625C22.5 25.975 22.225 26.25 21.875 26.25C21.525 26.25 21.25 25.975 21.25 25.625V21.875C21.25 21.525 21.525 21.25 21.875 21.25C22.225 21.25 22.5 21.525 22.5 21.875Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("clipPath", { id: "clip0_907_32", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/chevLeftSVG/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var ChevLeft = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.6261 23.6916L10.8048 16.8703C10.4393 16.5048 10.2378 16.0178 10.2378 15.4999C10.2378 14.9819 10.4393 14.4962 10.8048 14.1294L17.6261 7.30811L18.5393 8.22131L11.718 15.0426C11.5966 15.1653 11.5295 15.3268 11.5295 15.4999C11.5295 15.6729 11.5966 15.8344 11.718 15.9571L18.5393 22.7784L17.6261 23.6916Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/chevRightSVG/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var ChevRight = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.277 23.6916L12.3638 22.7784L19.1851 15.9571C19.3065 15.8344 19.3736 15.6729 19.3736 15.4999C19.3736 15.3268 19.3065 15.1653 19.1851 15.0426L12.3638 8.22131L13.277 7.30811L20.0983 14.1294C20.4638 14.4949 20.6653 14.9819 20.6653 15.4999C20.6653 16.0178 20.4638 16.5035 20.0983 16.8703L13.277 23.6916Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/chevUpSVG/index.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var ChevUp = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m17.635,14.428l-5.281-5.281c-.189-.189-.518-.189-.707,0l-5.281,5.281-.707-.707,5.281-5.281c.566-.566,1.555-.566,2.121,0l5.281,5.281-.707.707Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/checkSVG/index.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var Check = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      viewBox: "0 0 256 256",
      stroke: "currentColor",
      strokeWidth: "4",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M103.99951,188.00012a3.98852,3.98852,0,0,1-2.82812-1.17139l-56-55.9956a3.99992,3.99992,0,0,1,5.65625-5.65723l53.17187,53.16748L213.17139,69.1759a3.99992,3.99992,0,0,1,5.65625,5.65723l-112,111.9956A3.98855,3.98855,0,0,1,103.99951,188.00012Z",
          fill: "currentColor"
        }
      )
    }
  );
};

// src/components/icons/circleSVG/index.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var Circle = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-3 -3 30 30", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-16c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/uploadSVG/index.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var Upload = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("svg", { viewBox: "0 0 53 53", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("g", { clipPath: "url(#clip0_859_45)", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47.4792 26.5H40.8542C39.0279 26.5 37.5417 27.9862 37.5417 29.8125C37.5417 32.8578 35.0661 35.3333 32.0208 35.3333H20.9792C17.9339 35.3333 15.4583 32.8578 15.4583 29.8125C15.4583 27.9862 13.9721 26.5 12.1458 26.5H5.52083C2.47554 26.5 0 28.9755 0 32.0208V43.0625C0 48.5414 4.45862 53 9.9375 53H43.0625C48.5414 53 53 48.5414 53 43.0625V32.0208C53 28.9755 50.5245 26.5 47.4792 26.5ZM50.7917 43.0625C50.7917 47.3246 47.3246 50.7917 43.0625 50.7917H9.9375C5.67542 50.7917 2.20833 47.3246 2.20833 43.0625V32.0208C2.20833 30.1945 3.69454 28.7083 5.52083 28.7083H12.1458C12.7531 28.7083 13.25 29.2052 13.25 29.8125C13.25 34.0746 16.7171 37.5417 20.9792 37.5417H32.0208C36.2829 37.5417 39.75 34.0746 39.75 29.8125C39.75 29.2052 40.2469 28.7083 40.8542 28.7083H47.4792C49.3055 28.7083 50.7917 30.1945 50.7917 32.0208V43.0625ZM16.8849 9.80279C16.4543 9.37217 16.4543 8.67212 16.8849 8.2415L24.157 0.969458C24.6936 0.432833 25.3782 0.174458 26.0804 0.0839167C26.2107 0.0309167 26.3498 0 26.5 0C26.6502 0 26.7893 0.0309167 26.9196 0.0839167C27.6218 0.174458 28.3064 0.432833 28.843 0.969458L36.1151 8.2415C36.5457 8.67212 36.5457 9.37217 36.1151 9.80279C35.8987 10.0192 35.616 10.1252 35.3333 10.1252C35.0507 10.1252 34.768 10.017 34.5516 9.80279L27.6042 2.85537V23.1875C27.6042 23.797 27.1095 24.2917 26.5 24.2917C25.8905 24.2917 25.3958 23.797 25.3958 23.1875V2.85537L18.4484 9.80279C18.0178 10.2334 17.3155 10.2334 16.8849 9.80279Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("clipPath", { id: "clip0_859_45", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("rect", { width: "53", height: "53", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/arrowLeftSVG/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var ArrowLeft = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.7501 14.3752H7.83136L13.6026 8.60396L12.7189 7.72021L6.82261 13.6165C6.06011 14.379 6.06011 15.6215 6.82261 16.384L12.7201 22.2815L13.6039 21.3977L7.83261 15.6265H23.7501V14.3765V14.3752Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/arrowRightSVG/index.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var ArrowRight = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/alienFaceSVG/index.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var AlienFace = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m12,0C6.486,0,2,4.389,2,9.783c0,5.222,4.73,10.534,7.55,13.235.687.658,1.568.987,2.45.987s1.763-.329,2.45-.987c2.82-2.701,7.55-8.013,7.55-13.235C22,4.389,17.514,0,12,0Zm1.759,22.296c-.986.944-2.531.944-3.518,0-2.704-2.591-7.241-7.663-7.241-12.513S7.038,1,12,1s9,3.94,9,8.783-4.537,9.922-7.241,12.513Zm-3.907-14.033c-.84-.841-2.208-1.088-3.207-1.147-.44-.031-.875.138-1.188.451-.313.313-.478.746-.451,1.188.059.999.306,2.367,1.147,3.208.84.84,2.299,1.091,3.299,1.15.41,0,.806-.163,1.097-.455.313-.313.477-.746.451-1.188-.06-1-.308-2.367-1.147-3.207Zm-.011,3.688c-.112.113-.259.168-.422.161-1.168-.07-2.077-.374-2.56-.856s-.787-1.392-.856-2.56c-.009-.159.047-.309.16-.421.104-.104.241-.161.388-.161,1.168.069,2.111.375,2.594.857s.787,1.392.856,2.56c.009.159-.047.309-.16.421Zm8.703-4.384c-.312-.313-.744-.482-1.188-.451-.999.059-2.367.307-3.207,1.147-.84.84-1.088,2.208-1.147,3.207-.026.442.138.875.451,1.188.292.292.687.455,1.098.455,1-.06,2.458-.311,3.298-1.15.841-.841,1.088-2.208,1.147-3.208.026-.442-.138-.875-.451-1.188Zm-.547,1.128c-.069,1.168-.374,2.077-.856,2.56s-1.392.787-2.559.856c-.169.003-.31-.048-.422-.161-.113-.113-.169-.262-.16-.421.07-1.168.374-2.077.856-2.56s1.426-.788,2.594-.857c.146,0,.283.057.388.161.113.113.169.262.16.421Z"
    }
  ) });
};

// src/components/icons/NewTabSVGG/index.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var NewTab = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M20,8.5v11c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V8.5c0-2.481,2.019-4.5,4.5-4.5H15.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v11c0,1.93,1.57,3.5,3.5,3.5H15.5c1.93,0,3.5-1.57,3.5-3.5V8.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5ZM21.5,0h-7c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h7c.231,0,.451,.053,.646,.147L8.146,15.146c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146L22.853,1.854c.094,.196,.147,.415,.147,.646v7c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V2.5c0-1.378-1.122-2.5-2.5-2.5Z"
    }
  ) });
};

// src/components/icons/percentageSVG/index.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var Percentage = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,24c-1.539,0-2.99-.676-3.982-1.854-.095-.113-.219-.165-.376-.155-1.528,.127-3.039-.417-4.127-1.505-1.088-1.088-1.637-2.592-1.505-4.127,.013-.147-.043-.281-.155-.375-1.179-.993-1.854-2.445-1.854-3.983s.676-2.99,1.854-3.982c.113-.095,.169-.229,.156-.376-.132-1.535,.417-3.039,1.505-4.127,1.087-1.087,2.584-1.638,4.127-1.505,.145,.012,.281-.042,.376-.155,.992-1.179,2.443-1.854,3.982-1.854s2.99,.676,3.982,1.854c.096,.113,.22,.165,.376,.155,1.521-.134,3.039,.417,4.127,1.505,1.088,1.088,1.637,2.592,1.505,4.127-.013,.147,.043,.281,.155,.375,1.179,.993,1.854,2.445,1.854,3.983s-.676,2.99-1.854,3.982c-.113,.095-.169,.229-.156,.376,.132,1.535-.417,3.039-1.505,4.127-1.087,1.087-2.582,1.64-4.127,1.505-.144-.008-.281,.043-.376,.155-.992,1.179-2.443,1.854-3.982,1.854Zm-4.314-3.012c.425,0,.819,.183,1.098,.514,.801,.952,1.974,1.498,3.217,1.498s2.416-.546,3.217-1.498c.306-.364,.757-.554,1.228-.508,1.241,.105,2.455-.337,3.334-1.216s1.322-2.094,1.216-3.335c-.04-.474,.145-.92,.509-1.226,.951-.802,1.497-1.975,1.497-3.217s-.546-2.416-1.498-3.218c-.363-.305-.548-.752-.508-1.226,.106-1.241-.337-2.456-1.216-3.335-.88-.879-2.103-1.323-3.334-1.216-.48,.04-.921-.144-1.228-.508-.801-.952-1.974-1.498-3.217-1.498s-2.416,.546-3.217,1.498c-.307,.364-.762,.547-1.228,.508-1.243-.107-2.455,.337-3.334,1.216-.879,.879-1.322,2.094-1.216,3.335,.04,.474-.145,.92-.509,1.226-.951,.802-1.497,1.975-1.497,3.217s.546,2.416,1.498,3.218c.363,.305,.548,.752,.508,1.226-.106,1.241,.337,2.456,1.216,3.335s2.099,1.318,3.334,1.216c.044-.004,.087-.006,.13-.006Zm1.314-12.988c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm6,6c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-5.084,2.277l5-7.5c.153-.23,.091-.54-.139-.693-.228-.152-.539-.091-.693,.139l-5,7.5c-.153,.23-.091,.54,.139,.693,.085,.057,.182,.084,.277,.084,.161,0,.319-.078,.416-.223Z"
    }
  ) });
};

// src/components/icons/balloonsSVG/index.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var Balloons = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m19.076,11.234c.46-.734.924-1.864.924-2.734,0-.276.224-.5.5-.5s.5.224.5.5c0,1.142-.58,2.473-1.076,3.266-.095.151-.258.234-.424.234-.091,0-.183-.024-.266-.076-.233-.146-.305-.455-.158-.689Zm-9.576-3.234c-.276,0-.5.224-.5.5,0,.87-.464,2-.924,2.734-.146.234-.075.543.158.689.083.052.175.076.266.076.166,0,.329-.083.424-.234.496-.793,1.076-2.124,1.076-3.266,0-.276-.224-.5-.5-.5Zm12.5,14c0,1.294-1.225,1.921-1.276,1.947-.072.036-.148.053-.224.053-.183,0-.359-.101-.447-.276-.123-.247-.023-.547.224-.671.005-.002.724-.382.724-1.053,0-.746-.646-1.16-1.712-1.752-.908-.505-1.938-1.078-2.217-2.158-.164-.636-.044-1.358.367-2.194-2.009-.515-3.65-2.887-4.436-5.597-1.003,3.524-3.413,6.695-6.243,6.702-.402.584-.742,1.195-.759,1.378,0,.566.678.926,1.712,1.409,1.072.501,2.288,1.07,2.288,2.323,0,1.186-1.225,1.812-1.276,1.838-.072.036-.148.053-.224.053-.183,0-.359-.101-.447-.276-.123-.247-.023-.547.224-.671.005-.002.724-.387.724-.943,0-.574-.678-.934-1.712-1.417-1.072-.501-2.288-1.07-2.288-2.323,0-.391.339-1.018.662-1.527C2.444,15.914,0,11.021,0,6.9,0,3.095,3.028,0,6.75,0c2.833,0,5.263,1.793,6.263,4.327.879-2.021,2.817-3.327,5.237-3.327,3.332,0,5.75,2.475,5.75,5.885,0,4.096-2.372,8.838-5.477,9.103-.441.764-.604,1.386-.484,1.852.172.665.932,1.087,1.735,1.534,1.043.58,2.226,1.238,2.226,2.626ZM12.5,6.9c0-3.253-2.579-5.9-5.75-5.9S1,3.646,1,6.9c0,4.096,2.653,9.1,5.75,9.1s5.75-5.004,5.75-9.1Zm5.75,8.1c2.631,0,4.75-4.439,4.75-8.115,0-2.876-1.953-4.885-4.75-4.885s-4.75,2.009-4.75,4.885c0,3.676,2.119,8.115,4.75,8.115Z"
    }
  ) });
};

// src/components/icons/toDoSVG/index.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var ToDo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h11c2.481,0,4.5,2.019,4.5,4.5v15c0,2.481-2.019,4.5-4.5,4.5ZM6.5,1c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5H6.5Zm11.5,4.5c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5ZM8.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Z"
    }
  ) });
};

// src/components/icons/basketSVG/index.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
var Basket = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.38,8.85c-.47-.54-1.16-.85-1.88-.85h-.56C20.44,3.48,16.6,0,12,0S3.56,3.48,3.06,8h-.56c-.72,0-1.41,.31-1.88,.85-.47,.54-.69,1.26-.6,1.98l1.12,8.4c.36,2.72,2.71,4.77,5.45,4.77h10.81c2.75,0,5.09-2.05,5.45-4.77l1.12-8.4c.09-.71-.12-1.44-.6-1.98ZM12,1c4.05,0,7.44,3.03,7.94,7H4.06c.49-3.97,3.88-7,7.94-7Zm10.99,9.7l-1.12,8.4c-.3,2.23-2.21,3.91-4.46,3.91H6.59c-2.25,0-4.16-1.68-4.46-3.91L1.01,10.7c-.06-.43,.07-.86,.36-1.19s.7-.51,1.13-.51H21.5c.43,0,.84,.19,1.13,.51s.42,.76,.36,1.19Z"
    }
  ) });
};

// src/components/icons/batSVG/index.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
var Bat = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m21.33,1.533c-.321-.454-.878-.642-1.415-.48-.552.167-.92.643-.938,1.214-.131,4.101-1.05,6.862-4.859,7.559.242-.385.383-.84.383-1.327v-3.151c0-.31-.375-.466-.595-.246l-1.049,1.049c-.267-.098-.556-.151-.857-.151s-.589.053-.857.151l-1.049-1.049c-.219-.219-.595-.064-.595.246v3.151c0,.487.141.942.383,1.327-3.809-.697-4.728-3.458-4.859-7.559-.019-.571-.387-1.048-.938-1.214-.536-.163-1.094.026-1.415.48C.864,4.071-.052,8.825.002,12.008c.013.747.219,2.857.341,4.048.043.421.334.773.741.897.401.122.823,0,1.093-.324.283-.339.815-.63,1.054-.63,1.283,0,1.796,2.099,2.042,3.107l.043.175c.082.331.337.593.665.684.328.089.681-.004.922-.247.438-.443,1.157-.719,1.348-.719h.002c.688.009,1.19.36,1.578,1.102.292,1.254.623,2.363.93,3.08.217.505.692.818,1.24.818s1.023-.313,1.24-.819c.298-.696.62-1.763.905-2.974.395-.814.912-1.198,1.626-1.207.205.012.91.299,1.327.719.24.242.593.337.92.247.328-.09.583-.351.667-.684l.041-.167c.246-1.011.759-3.115,2.094-3.115.221,0,.707.275,1.003.63.27.324.69.444,1.093.324.407-.125.698-.477.741-.897.098-.951.327-3.25.341-4.048.054-3.184-.862-7.937-2.668-10.475Zm-11.874,16.756c-.355-.186-.753-.283-1.191-.289-.585-.008-1.53.467-1.979,1.041l-.042-.171c-.283-1.158-.945-3.87-3.014-3.87-.624,0-1.416.504-1.894.955-.204-2-.326-3.444-.335-3.963-.044-2.591.697-7.368,2.482-9.879.101-.14.238-.125.312-.102.052.016.221.083.228.289.127,3.983.971,7.704,5.803,8.53-.457.742-.827,1.774-.827,3.17,0,1.227.183,2.777.456,4.289Zm2.544-11.289c.827,0,1.5.673,1.5,1.5,0,.793-.619,1.444-1.4,1.496-.067.003-.134.003-.201,0-.781-.052-1.4-.703-1.4-1.496,0-.827.673-1.5,1.5-1.5Zm.32,15.787c-.082.192-.251.213-.32.213s-.238-.021-.32-.212c-.677-1.578-1.68-5.963-1.68-8.788,0-1.456.465-2.423.952-3.036.333.024.682.036,1.048.036s.715-.012,1.048-.036c.486.613.952,1.58.952,3.036,0,2.824-1.003,7.209-1.68,8.787Zm10.678-10.795c-.009.527-.134,2.008-.407,3.999-.409-.492-1.149-.991-1.771-.991-2.046,0-2.816,2.678-3.122,3.91-.556-.505-1.404-.91-1.928-.91h-.013c-.449.006-.855.108-1.217.305.275-1.518.459-3.075.459-4.305,0-1.396-.37-2.428-.827-3.17,4.832-.826,5.676-4.547,5.803-8.53.007-.207.176-.273.228-.289.073-.022.212-.039.312.102,1.785,2.511,2.526,7.289,2.482,9.879Z"
    }
  ) });
};

// src/components/icons/batterySVG/index.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var Battery = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17.5,20H4.5c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5h13c2.312,0,4.223,1.753,4.473,4h.527c.827,0,1.5,.673,1.5,1.5v5c0,.827-.673,1.5-1.5,1.5h-.527c-.25,2.247-2.16,4-4.473,4ZM4.5,5c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5h13c1.93,0,3.5-1.57,3.5-3.5,0-.276,.224-.5,.5-.5h1c.275,0,.5-.224,.5-.5v-5c0-.276-.225-.5-.5-.5h-1c-.276,0-.5-.224-.5-.5,0-1.93-1.57-3.5-3.5-3.5H4.5Zm13,12H4.5c-.827,0-1.5-.673-1.5-1.5v-7c0-.827,.673-1.5,1.5-1.5h13c.827,0,1.5,.673,1.5,1.5v7c0,.827-.673,1.5-1.5,1.5ZM4.5,8c-.275,0-.5,.224-.5,.5v7c0,.276,.225,.5,.5,.5h13c.275,0,.5-.224,.5-.5v-7c0-.276-.225-.5-.5-.5H4.5Z"
    }
  ) });
};

// src/components/icons/beeSVG/index.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
var Bee = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m22.826,9.315c-1.252-1.223-4.477-2.047-8.653-2.259.509-.538.826-1.259.826-2.056,0-1.279-.808-2.365-1.937-2.796.331-.504,1.073-1.204,2.437-1.204.276,0,.5-.224.5-.5s-.224-.5-.5-.5c-2.061,0-3.093,1.242-3.465,2.004-.012,0-.023-.004-.035-.004s-.023.003-.035.004c-.372-.761-1.404-2.004-3.465-2.004-.276,0-.5.224-.5.5s.224.5.5.5c1.364,0,2.106.7,2.437,1.204-1.129.431-1.937,1.517-1.937,2.796,0,.797.318,1.518.826,2.056-4.176.212-7.401,1.036-8.653,2.259-.757.74-1.174,1.724-1.174,2.772s.417,2.031,1.174,2.771c.777.76,1.799,1.14,2.82,1.14s2.042-.38,2.819-1.14c.08-.078.171-.177.258-.268.349,3.22,1.962,6.873,3.166,8.515.417.569,1.06.896,1.763.896s1.346-.326,1.763-.896c1.204-1.643,2.816-5.295,3.166-8.516.087.092.178.19.258.268.777.76,1.799,1.14,2.819,1.14s2.043-.38,2.82-1.14c.757-.739,1.174-1.724,1.174-2.771s-.417-2.032-1.174-2.772Zm-8.066,9.685h-5.521c-.249-.64-.477-1.315-.669-2h6.858c-.192.685-.42,1.36-.669,2Zm-6.442-3c-.15-.68-.256-1.355-.298-2h7.958c-.042.645-.148,1.32-.298,2h-7.363Zm.115-3c.496-.618,1.023-1.301,1.553-2h4.026c.53.699,1.057,1.382,1.553,2h-7.133Zm2.307-3c.115-.153.231-.308.344-.458.321-.428.624-.831.915-1.215.291.384.594.787.915,1.215.113.151.229.305.344.458h-2.518Zm-.741-5c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm-3.886,9.143c-1.171,1.143-3.072,1.143-4.241,0-.562-.55-.873-1.28-.873-2.056s.311-1.506.873-2.057c1.154-1.127,4.746-1.912,9.11-2.018-.225.297-.459.609-.698.929-1.482,1.977-3.163,4.217-4.171,5.201Zm6.842,8.37c-.453.619-1.459.619-1.912,0-.429-.584-.922-1.473-1.387-2.513h4.685c-.464,1.04-.958,1.928-1.387,2.513Zm9.171-8.37c-1.169,1.143-3.07,1.143-4.241,0-1.008-.984-2.688-3.225-4.171-5.201-.239-.32-.474-.632-.698-.929,4.364.106,7.956.89,9.11,2.018.562.55.873,1.281.873,2.057s-.311,1.506-.873,2.056Z"
    }
  ) });
};

// src/components/icons/binocularSVG/index.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
var Binocular = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M20,5.051V2.5c0-1.378-1.122-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v2.5h-6V2.5c0-1.378-1.122-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v2.551C1.756,5.303,0,7.19,0,9.5v9.5c0,2.757,2.243,5,5,5s5-2.243,5-5v-5c0-1.103,.897-2,2-2s2,.897,2,2v5c0,2.757,2.243,5,5,5s5-2.243,5-5V9.5c0-2.31-1.756-4.197-4-4.449Zm-4-2.551c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5v2.5h-3V2.5ZM6.5,1c.827,0,1.5,.673,1.5,1.5v2.5h-3V2.5c0-.827,.673-1.5,1.5-1.5Zm-1.5,22c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm14,0c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm0-9c-1.641,0-3.088,.806-4,2.031v-2.031c0-1.654-1.346-3-3-3s-3,1.346-3,3v2.031c-.912-1.225-2.359-2.031-4-2.031s-3.088,.806-4,2.031v-6.531c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v6.531c-.912-1.225-2.359-2.031-4-2.031Z"
    }
  ) });
};

// src/components/icons/birdSVG/index.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
var Bird = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m19,5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm5,3l-2,.857v2.143c0,4.653-2.909,8.631-7,10.236v2.264c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.926c-.955.271-1.959.426-3,.426v1.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.551C4.402,21.442,0,16.728,0,11v-4.5c0-.276.224-.5.5-.5s.5.224.5.5c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-.5c0-3.309,2.691-6,6-6s6,2.691,6,6v.143l2,.857v1ZM1,11c0,2.252.758,4.326,2.019,6h1.981c2.757,0,5-2.243,5-5v-2.348c-.996,1.417-2.64,2.348-4.5,2.348s-3.504-.93-4.5-2.348v1.348Zm20-5c0-2.757-2.243-5-5-5s-5,2.243-5,5v6c0,3.309-2.691,6-6,6h-1.129c1.816,1.849,4.339,3,7.129,3,5.514,0,10-4.486,10-10v-5Z"
    }
  ) });
};

// src/components/icons/printerSVG/index.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
var Printer = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M19.5,8h-.5V3.5c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93,0-3.5,1.57-3.5,3.5v4.5h-.5c-2.481,0-4.5,2.019-4.5,4.5v7c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-7c0-2.481-2.019-4.5-4.5-4.5ZM6,3.5c0-1.378,1.122-2.5,2.5-2.5h7c1.379,0,2.5,1.122,2.5,2.5V13H6V3.5Zm-1.5,5.5h.5v4.5c0,.276,.224,.5,.5,.5h13c.276,0,.5-.224,.5-.5v-4.5h.5c1.93,0,3.5,1.57,3.5,3.5v5.5H1v-5.5c0-1.93,1.57-3.5,3.5-3.5Zm15,14H4.5c-1.93,0-3.5-1.57-3.5-3.5v-.5H23v.5c0,1.93-1.57,3.5-3.5,3.5Z"
    }
  ) });
};

// src/components/icons/boxFilledSVG/index.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
var BoxFilled = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.636,10.281l-1.197-2.236c-.439-.821-1.4-1.209-2.291-.92l-8.147,2.657L3.853,7.125c-.893-.29-1.852,.099-2.291,.92L.376,10.26c-.412,.685-.49,1.508-.213,2.258,.276,.75,.871,1.325,1.629,1.578l.21,.07-.006,3.621c0,1.941,1.235,3.658,3.077,4.272l4.862,1.621c.663,.221,1.359,.331,2.056,.331s1.393-.11,2.056-.331l4.866-1.622c1.843-.614,3.082-2.329,3.083-4.267v-3.625l.212-.071c.758-.253,1.353-.828,1.629-1.578,.277-.75,.199-1.573-.201-2.236ZM1.101,12.172c-.171-.464-.123-.973,.145-1.418l1.197-2.236c.164-.307,.48-.487,.813-.487,.095,0,.191,.015,.286,.046l7.719,2.517-1.972,3.635c-.387,.645-1.156,.931-1.867,.69l-5.313-1.771c-.469-.156-.836-.512-1.008-.975Zm10.384,10.816c-.419-.038-.833-.124-1.233-.258l-4.862-1.621c-1.433-.478-2.395-1.812-2.394-3.322l.005-3.288,4.104,1.368c.274,.091,.553,.135,.827,.135,.89,0,1.735-.463,2.225-1.279l1.334-2.457-.006,10.722Zm9.511-5.197c0,1.507-.965,2.84-2.399,3.317l-4.866,1.622c-.404,.135-.823,.221-1.246,.259l.006-10.758,1.362,2.51c.48,.802,1.323,1.261,2.212,1.261,.275,0,.555-.044,.829-.135l4.102-1.367v3.291Zm1.903-5.619c-.172,.463-.539,.818-1.008,.975l-5.313,1.771c-.715,.239-1.481-.047-1.856-.672l-1.982-3.653,7.719-2.517c.428-.141,.889,.048,1.1,.441l1.209,2.258c.256,.424,.304,.933,.133,1.396ZM4.759,5.851c-.193-.196-.191-.514,.006-.707L9.547,.437c.58-.582,1.532-.583,2.118,.003l1.885,1.885c.568-.508,1.515-.493,2.063,.055l2.754,2.753c.195,.195,.195,.512,0,.707-.195,.195-.512,.195-.707,0l-2.754-2.753c-.195-.195-.512-.195-.707,0l-4.349,4.27c-.098,.096-.225,.144-.351,.144-.13,0-.259-.05-.356-.149-.193-.197-.19-.514,.006-.707l3.686-3.619-1.878-1.878c-.195-.195-.512-.195-.707,0L5.466,5.856c-.098,.096-.224,.144-.351,.144-.129,0-.259-.05-.356-.149Z"
    }
  ) });
};

// src/components/icons/brainSVG/index.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var Brain = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M24,10.98c0-1.562-.799-3.022-2.105-3.887,.009-.097,.015-.195,.015-.294,0-1.953-1.275-3.515-2.995-3.744C18.574,1.325,17.041,.026,15.25,.026c-1.387,0-2.601,.758-3.25,1.881C11.351,.783,10.137,.026,8.75,.026,6.96,.026,5.428,1.324,5.087,3.052c-1.71,.219-2.996,1.786-2.996,3.746,0,.1,.006,.198,.015,.294-1.307,.865-2.105,2.325-2.105,3.887,0,.936,.281,1.832,.818,2.614-.537,.782-.818,1.678-.818,2.614,0,1.642,.871,3.155,2.288,4.002,.622,2.258,2.65,3.816,5.008,3.816,2.074,0,3.869-1.22,4.704-2.98,.836,1.76,2.63,2.98,4.704,2.98,2.357,0,4.386-1.558,5.008-3.816,1.417-.847,2.288-2.36,2.288-4.002,0-.936-.281-1.832-.818-2.614,.537-.782,.818-1.678,.818-2.614ZM7.296,23.026c-1.964,0-3.646-1.34-4.088-3.258-.032-.141-.124-.26-.251-.329-1.207-.646-1.957-1.885-1.957-3.231,0-.832,.287-1.627,.83-2.299,.148-.184,.148-.445,0-.629-.543-.672-.83-1.467-.83-2.299,0-1.316,.725-2.541,1.892-3.196,.186-.104,.285-.315,.247-.524-.027-.15-.048-.303-.048-.461,0-1.363,.901-2.772,2.435-2.772,.261,0,.479-.201,.498-.461,.11-1.423,1.309-2.539,2.727-2.539,1.517,0,2.75,1.233,2.75,2.75v4.724h-2.563c-.223-.862-1.007-1.5-1.937-1.5-1.103,0-2,.897-2,2s.897,2,2,2c.93,0,1.714-.638,1.937-1.5h2.563v6h-2.563c-.223-.862-1.007-1.5-1.937-1.5-1.103,0-2,.897-2,2s.897,2,2,2c.93,0,1.714-.638,1.937-1.5h2.563v2.321c0,2.318-1.886,4.205-4.204,4.205Zm.704-14.026c0,.551-.448,1-1,1s-1-.449-1-1,.448-1,1-1,1,.449,1,1Zm0,7c0,.551-.448,1-1,1s-1-.449-1-1,.448-1,1-1,1,.449,1,1Zm14.17-2.092c.543,.672,.83,1.467,.83,2.299,0,1.347-.75,2.585-1.957,3.231-.127,.068-.219,.188-.251,.329-.442,1.918-2.124,3.258-4.088,3.258-2.318,0-4.204-1.886-4.204-4.205v-4.821h2.5c1.379,0,2.5-1.122,2.5-2.5v-.563c.862-.223,1.5-1.006,1.5-1.937,0-1.103-.897-2-2-2s-2,.897-2,2c0,.93,.638,1.714,1.5,1.937v.563c0,.827-.673,1.5-1.5,1.5h-2.5V3.776c0-1.517,1.233-2.75,2.75-2.75,1.418,0,2.616,1.115,2.727,2.539,.02,.26,.263,.461,.523,.461,1.508,0,2.409,1.41,2.409,2.772,0,.158-.021,.311-.048,.461-.038,.209,.062,.42,.247,.524,1.167,.655,1.892,1.88,1.892,3.196,0,.832-.287,1.627-.83,2.299-.148,.184-.148,.445,0,.629Zm-5.17-3.908c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
    }
  ) });
};

// src/components/icons/brightLowSVG/index.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
var BrightLow = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm0-9c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm0-5c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm0,20c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM3,12c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm20,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm-4-6c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM5,20c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm0-14c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm15,13c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Z"
    }
  ) });
};

// src/components/icons/brightHighSVG/index.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
var BrightHigh = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm0-9c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm.5-3.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5V4.5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5Zm0,19v-4c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v4c0,.28,.22,.5,.5,.5s.5-.22,.5-.5ZM5,12c0-.28-.22-.5-.5-.5H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H4.5c.28,0,.5-.22,.5-.5Zm19,0c0-.28-.22-.5-.5-.5h-4c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h4c.28,0,.5-.22,.5-.5Zm-6.15-5.15l3-3c.2-.2,.2-.51,0-.71s-.51-.2-.71,0l-3,3c-.2,.2-.2,.51,0,.71,.1,.1,.23,.15,.35,.15s.26-.05,.35-.15ZM3.85,20.85l3-3c.2-.2,.2-.51,0-.71s-.51-.2-.71,0l-3,3c-.2,.2-.2,.51,0,.71,.1,.1,.23,.15,.35,.15s.26-.05,.35-.15ZM6.85,6.85c.2-.2,.2-.51,0-.71L3.85,3.15c-.2-.2-.51-.2-.71,0s-.2,.51,0,.71l3,3c.1,.1,.23,.15,.35,.15s.26-.05,.35-.15Zm14,14c.2-.2,.2-.51,0-.71l-3-3c-.2-.2-.51-.2-.71,0s-.2,.51,0,.71l3,3c.1,.1,.23,.15,.35,.15s.26-.05,.35-.15Z"
    }
  ) });
};

// src/components/icons/cabinSVG/index.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var Cabin = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,5c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.551,0-1-.448-1-1s.449-1,1-1,1,.448,1,1-.449,1-1,1Zm10.017-2.169l-1.017-.686V1.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v2.97L14.517,.771c-1.528-1.032-3.504-1.032-5.034,0L1.983,5.831c-1.242,.838-1.983,2.232-1.983,3.729v9.939c0,2.481,2.019,4.5,4.5,4.5h3c.827,0,1.5-.673,1.5-1.5V13.5c0-.827,.673-1.5,1.5-1.5h3c.827,0,1.5,.673,1.5,1.5v9c0,.827,.673,1.5,1.5,1.5h3c2.481,0,4.5-2.019,4.5-4.5V9.561c0-1.497-.741-2.892-1.983-3.729ZM8,22.5c0,.275-.224,.5-.5,.5h-3c-1.76,0-3.221-1.306-3.464-3h6.964v2.5Zm0-3.5H1v-3h7v3Zm0-5.5v1.5H1v-3h7.501c-.315,.418-.501,.938-.501,1.5Zm11.5,9.5h-3c-.276,0-.5-.225-.5-.5v-2.5h6.964c-.243,1.694-1.704,3-3.464,3Zm3.5-4h-7v-3h7v3Zm0-4h-7v-1.5c0-.562-.187-1.082-.501-1.5h7.501v3Zm0-4H1v-1.439c0-1.164,.577-2.249,1.542-2.901L10.042,1.599c1.189-.803,2.726-.803,3.915,0l7.5,5.061c.966,.652,1.542,1.737,1.542,2.901v1.439Z"
    }
  ) });
};

// src/components/icons/cakeSVG/index.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
var Cake = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m23.5,23h-1.5v-8.5c0-2.481-2.019-4.5-4.5-4.5h-5v-3.042c1.417-.239,2.5-1.474,2.5-2.958,0-.944-.637-2.125-1.892-3.509-.565-.624-1.65-.624-2.216,0-.812.896-1.892,2.233-1.892,3.509,0,1.484,1.083,2.719,2.5,2.958v3.042h-5c-2.481,0-4.5,2.019-4.5,4.5v2.768s0,.004,0,.006v5.726H.5c-.276,0-.5.224-.5.5s.224.5.5.5h23c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM10,4c0-1.037,1.229-2.392,1.632-2.837.096-.105.226-.163.368-.163s.272.058.367.163c1.053,1.161,1.633,2.168,1.633,2.837,0,1.103-.897,2-2,2s-2-.897-2-2Zm-3.5,7h11c1.93,0,3.5,1.57,3.5,3.5v2.402c-.242.064-.496.098-.75.098-1.267,0-2.25-.806-2.25-1.5,0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,.694-.983,1.5-2.25,1.5s-2.25-.806-2.25-1.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,.694-.983,1.5-2.25,1.5s-2.25-.806-2.25-1.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,.694-.983,1.5-2.25,1.5-.253,0-.508-.034-.75-.099v-2.401c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,6.928c.245.048.495.072.75.072,1.127,0,2.163-.495,2.75-1.208.587.713,1.623,1.208,2.75,1.208s2.164-.495,2.75-1.208c.586.713,1.624,1.208,2.75,1.208s2.163-.495,2.75-1.208c.587.713,1.623,1.208,2.75,1.208.255,0,.506-.024.75-.071v5.071H3v-5.072Z"
    }
  ) });
};

// src/components/icons/chartSVG/index.tsx
var import_jsx_runtime48 = require("react/jsx-runtime");
var Chart = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M24,23.5c0,.276-.224,.5-.5,.5H2.5c-1.378,0-2.5-1.122-2.5-2.5V.5C0,.224,.224,0,.5,0s.5,.224,.5,.5V21.5c0,.827,.673,1.5,1.5,1.5H23.5c.276,0,.5,.224,.5,.5Zm-2.5-18.5h-4c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h4c.231,0,.45,.053,.646,.146l-5.771,5.414c-.584,.585-1.536,.586-2.153-.029l-.954-.799c-.943-.944-2.597-.939-3.53-.005l-5.586,5.414c-.198,.192-.203,.509-.011,.707,.098,.101,.229,.152,.359,.152,.125,0,.251-.047,.348-.141l5.591-5.419c.566-.566,1.523-.596,2.153,.029l.954,.799c.974,.975,2.561,.975,3.524,.011l5.771-5.414,.011-.011c.094,.196,.147,.415,.147,.647v4c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V7.5c0-1.378-1.122-2.5-2.5-2.5Z"
    }
  ) });
};

// src/components/icons/citySVG/index.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
var City = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M16,13.5c0,.276-.224,.5-.5,.5h-1c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h1c.276,0,.5,.224,.5,.5Zm3.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-4,4h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm4,0h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM15.5,5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm4,0h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-4,4h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm4,0h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm4.5-4.5v15c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V8.852c0-1.216,.502-2.397,1.378-3.241l1.694-1.631c1.361-1.312,3.494-1.312,4.855,0l1.694,1.631c.135,.13,.262,.269,.378,.414v-1.524c0-2.481,2.019-4.5,4.5-4.5h5c2.481,0,4.5,2.019,4.5,4.5Zm-14,4.352c0-.946-.391-1.865-1.072-2.521l-1.694-1.631c-.486-.469-1.11-.703-1.734-.703s-1.248,.234-1.734,.703l-1.694,1.632c-.681,.656-1.072,1.575-1.072,2.521v10.648c0,1.93,1.57,3.5,3.5,3.5h5.5V8.852Zm13-4.352c0-1.93-1.57-3.5-3.5-3.5h-5c-1.93,0-3.5,1.57-3.5,3.5V23h8.5c1.93,0,3.5-1.57,3.5-3.5V4.5ZM6.5,13h-2c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm0-4h-2c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm0,8h-2c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
    }
  ) });
};

// src/components/icons/clockSVG/index.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
var Clock = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm-.235,11.924l4-2.5c.234-.146,.305-.455,.159-.688-.146-.235-.455-.307-.689-.159l-3.235,2.021V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v7c0,.182,.099,.35,.258,.438,.075,.042,.159,.062,.242,.062,.092,0,.184-.025,.265-.076Z"
    }
  ) });
};

// src/components/icons/codeSVG/index.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");
var Code = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M9,22c-.125,0-.25-.046-.347-.14L1.032,14.532c-1.372-1.372-1.372-3.592-.007-4.957L8.651,2.142c.198-.192,.515-.188,.707,.009,.193,.198,.189,.515-.009,.707L1.728,10.287c-.468,.468-.728,1.096-.728,1.764s.26,1.295,.732,1.768l7.614,7.321c.199,.191,.205,.508,.014,.707-.098,.102-.229,.153-.36,.153Zm6.349-.142l7.625-7.437c1.365-1.365,1.365-3.585-.007-4.957L15.347,2.14c-.2-.192-.515-.186-.707,.014-.191,.199-.185,.516,.014,.707l7.614,7.318c.975,.975,.975,2.561,.004,3.531l-7.621,7.432c-.198,.193-.202,.51-.009,.707,.098,.101,.228,.151,.358,.151,.126,0,.252-.047,.349-.142Z"
    }
  ) });
};

// src/components/icons/coinsSVG/index.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
var Coins = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17,0c-3.925,0-7,1.757-7,4v4.378c-.906-.24-1.919-.378-3-.378-3.925,0-7,1.757-7,4v8c0,2.243,3.075,4,7,4s7-1.757,7-4v-.385c.933,.248,1.955,.385,3,.385,3.925,0,7-1.757,7-4V4c0-2.243-3.075-4-7-4Zm6,12c0,1.626-2.748,3-6,3-1.061,0-2.086-.151-3-.424v-2.576c0-.131-.013-.26-.033-.387,.938,.253,1.968,.387,3.033,.387,2.581,0,4.787-.762,6-1.92v1.92ZM1,14.08c1.213,1.158,3.419,1.92,6,1.92s4.787-.762,6-1.92v1.92c0,1.626-2.748,3-6,3s-6-1.374-6-3v-1.92ZM17,1c3.252,0,6,1.374,6,3s-2.748,3-6,3-6-1.374-6-3,2.748-3,6-3Zm-6,5.08c1.213,1.158,3.419,1.92,6,1.92s4.787-.762,6-1.92v1.92c0,1.626-2.748,3-6,3-1.297,0-2.531-.213-3.576-.613-.518-.688-1.36-1.27-2.424-1.688v-2.619Zm-4,2.92c3.252,0,6,1.374,6,3s-2.748,3-6,3-6-1.374-6-3,2.748-3,6-3Zm0,14c-3.252,0-6-1.374-6-3v-1.92c1.213,1.158,3.419,1.92,6,1.92s4.787-.762,6-1.92v1.92c0,1.626-2.748,3-6,3Zm10-4c-1.057,0-2.086-.149-3-.422v-2.962c.932,.248,1.953,.383,3,.383,2.581,0,4.787-.762,6-1.92v1.92c0,1.626-2.748,3-6,3Z"
    }
  ) });
};

// src/components/icons/cowSVG/index.tsx
var import_jsx_runtime53 = require("react/jsx-runtime");
var Cow = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m23.818,2.441c-.189-.276-.502-.441-.837-.441h-1.45c.29-.419.469-.935.469-1.5,0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,.827-.577,1.5-1.286,1.5h-6.428c-.709,0-1.286-.673-1.286-1.5,0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,.565.179,1.081.469,1.5h-1.45c-.335,0-.647.165-.837.441-.193.282-.234.641-.111.961.364.941,1.363,1.598,2.43,1.598h.084l.368,2h-5.452c-1.093,0-2.082.407-2.862,1.057-.038.019-3.471,3.071-3.471,3.071-.206.184-.224.5-.04.706.099.11.236.167.373.167.119,0,.238-.042.333-.127l1.242-1.11c-.04.241-.075.485-.075.738v10c0,1.378,1.121,2.5,2.5,2.5,1.029,0,1.914-.626,2.297-1.516,2.809-.077,4.475-1.222,5.081-3.484h1.622c.275,0,.5.224.5.5v2c0,1.378,1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5v-5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5h-6c-.827,0-1.5.673-1.5,1.5v2c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-10c0-.09.02-.174.027-.263.729.482,1.582.763,2.473.763,2.31,0,4.197-1.756,4.449-4h2.186l.472,2.568c-.374.364-.608.87-.608,1.432,0,1.103.897,2,2,2h5c1.103,0,2-.897,2-2,0-.562-.234-1.068-.608-1.432l1.024-5.568h.084c1.066,0,2.065-.657,2.429-1.597.124-.32.083-.68-.11-.961ZM7.5,19h3.345c-.521,1.591-1.742,2.37-3.845,2.476v-1.976c0-.276.225-.5.5-.5Zm-2-8c-.826,0-1.609-.305-2.235-.828.524-1.273,1.775-2.172,3.235-2.172h2.449c-.245,1.692-1.691,3-3.449,3Zm13.5,2h-5c-.552,0-1-.449-1-1s.448-1,1-1h5c.552,0,1,.449,1,1s-.448,1-1,1Zm2.5-9h-.5c-.241,0-.448.172-.492.41l-1.04,5.651c-.151-.036-.306-.061-.468-.061h-5c-.162,0-.317.024-.468.061l-1.04-5.651c-.044-.237-.251-.41-.492-.41h-.5c-.642,0-1.285-.412-1.481-1l12.978.042c-.211.546-.854.958-1.496.958Zm-8,2c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm4,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"
    }
  ) });
};

// src/components/icons/crabSVG/index.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
var Crab = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m24,7.5s-.002-3.863-.017-4.01c-.086-.848-.497-1.61-1.156-2.148-.758-.618-2.086-1.054-3.065-1.31-.365-.097-.752.032-.988.328-.238.298-.275.692-.099,1.028.067.129.145.266.226.408.111.195.229.404.337.623-.371-.053-.711-.124-1.027-.214-.364-.105-.743.011-.987.303-.242.29-.291.696-.124,1.034l.221.462c.383.815.818,1.74,1.477,2.278.591.481,1.303.716,2.012.716.8,0,1.584-.317,2.191-.896v1.397c0,1.852-1.451,3.358-3.274,3.477-.695-2.39-2.657-3.369-4.772-3.748.018-.076.046-.148.046-.229,0-.552-.448-1-1-1s-1,.448-1,1c0,.008.005.015.005.023-.341-.015-.679-.023-1.005-.023s-.663.009-1.005.023c0-.008.005-.015.005-.023,0-.552-.448-1-1-1s-1,.448-1,1c0,.081.028.153.046.229-2.115.379-4.077,1.358-4.772,3.748-1.823-.119-3.274-1.625-3.274-3.477v-1.397c.607.58,1.391.896,2.191.896.708,0,1.421-.234,2.012-.716.659-.538,1.093-1.463,1.477-2.278l.221-.462c.167-.338.119-.744-.124-1.034-.244-.292-.625-.408-.987-.303-.316.09-.656.161-1.027.214.107-.219.226-.428.337-.623.081-.143.158-.279.226-.407.176-.337.139-.731-.099-1.029-.235-.295-.623-.425-.987-.328-.98.256-2.308.691-3.065,1.31C.513,1.88.103,2.643.017,3.489c-.015.147-.017,4.011-.017,4.011,0,2.334,1.792,4.235,4.068,4.456-.042.328-.068.672-.068,1.044,0,.32.047.657.112,1h-.369c-.935,0-1.813.364-2.475,1.025l-1.121,1.121c-.195.195-.195.512,0,.707.098.098.226.146.354.146s.256-.049.354-.146l1.121-1.121c.473-.473,1.101-.732,1.768-.732h.627c.333,1.03.847,2.075,1.379,3h-.506c-.935,0-1.813.364-2.475,1.025l-1.121,1.121c-.195.195-.195.512,0,.707.098.098.226.146.354.146s.256-.049.354-.146l1.121-1.121c.473-.473,1.101-.732,1.768-.732h1.118c.328.487.737.896,1.204,1.215l-2.448,2.963c-.178.211-.151.526.06.705.094.078.208.117.322.117.143,0,.284-.061.383-.178l2.625-3.115c.5.188,1.035.292,1.588.292h3.801c.556,0,1.093-.105,1.594-.295l2.627,3.117c.099.117.24.178.383.178.114,0,.228-.039.322-.117.211-.179.238-.494.06-.705l-2.449-2.967c.465-.318.871-.726,1.197-1.211h1.127c.667,0,1.295.26,1.768.732l1.121,1.121c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707l-1.121-1.121c-.662-.661-1.541-1.025-2.475-1.025h-.515c.532-.927,1.048-1.974,1.383-3h.632c.667,0,1.295.26,1.768.732l1.121,1.121c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707l-1.121-1.121c-.662-.661-1.541-1.025-2.475-1.025h-.371c.066-.343.114-.681.114-1,0-.372-.026-.716-.068-1.044,2.276-.221,4.068-2.123,4.068-4.456Zm-1.493-2.306c-.762.936-2.143,1.075-3.078.313-.483-.394-.866-1.209-1.205-1.928-.068-.146-.135-.288-.205-.389.576.157,1.213.258,1.946.308.163.016.318-.058.421-.183.103-.126.138-.293.095-.449-.167-.604-.469-1.137-.712-1.563-.075-.133-.147-.259-.262-.305,1.25.327,2.204.724,2.687,1.118.453.369.735.893.794,1.474s-.112,1.151-.481,1.604ZM1.011,3.591c.059-.581.341-1.104.794-1.474.482-.395,1.437-.791,2.634-1.191-.062.119-.134.245-.209.378-.243.427-.545.959-.712,1.563-.043.156-.008.323.095.449.102.125.255.197.421.183.722-.049,1.353-.148,1.922-.302-.059.123-.12.251-.181.383-.338.719-.721,1.534-1.204,1.928-.935.762-2.317.622-3.079-.313-.369-.452-.54-1.022-.481-1.604Zm13.839,4.64l-.759,1.708c-.294.662-.481,1.358-.57,2.066-.007,0-.013-.004-.021-.004h-3c-.007,0-.013.004-.02.004-.089-.705-.275-1.399-.568-2.059l-.762-1.714c.819-.153,1.762-.231,2.85-.231s2.031.078,2.85.231Zm-7.725,10.123c-.969-1.539-2.125-3.717-2.125-5.354,0-2.394.978-3.849,3.161-4.532l.837,1.883c.625,1.405.716,2.987.257,4.455l-1.374,4.396c-.29-.238-.549-.52-.757-.849Zm2.97,1.646c-.466,0-.917-.093-1.333-.264l1.447-4.63c.215-.688.32-1.397.328-2.105h2.926c.008.711.113,1.423.329,2.113l1.443,4.619c-.418.173-.871.268-1.34.268h-3.801Zm4.652-5.186c-.46-1.473-.369-3.06.258-4.47l.834-1.876c2.182.683,3.161,2.138,3.161,4.532,0,1.611-1.158,3.797-2.129,5.347-.207.33-.465.612-.754.851l-1.37-4.383Z"
    }
  ) });
};

// src/components/icons/diceSVG/index.tsx
var import_jsx_runtime55 = require("react/jsx-runtime");
var Dice = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M20.718,4.43L14.417,.666c-1.49-.889-3.344-.889-4.834,0L3.283,4.43c-1.408,.842-2.283,2.38-2.283,4.016v7.109c0,1.636,.875,3.174,2.283,4.016l6.3,3.764c.746,.444,1.581,.667,2.417,.667s1.672-.223,2.418-.667l6.3-3.765c1.407-.841,2.282-2.38,2.282-4.015v-7.109c0-1.635-.875-3.174-2.282-4.016ZM3.795,5.289L10.096,1.525c1.175-.703,2.635-.701,3.809,0l6.3,3.763c.412,.247,.767,.569,1.049,.943l-9.253,5.195L2.746,6.232c.282-.374,.636-.697,1.049-.943Zm0,13.422c-1.107-.661-1.795-1.871-1.795-3.156v-7.109c0-.465,.09-.919,.258-1.342l9.242,5.189v10.675c-.488-.067-.966-.231-1.404-.492l-6.3-3.764Zm18.205-3.156c0,1.285-.688,2.495-1.796,3.156l-6.299,3.764c-.439,.262-.917,.427-1.405,.493V12.292l9.242-5.189c.167,.423,.258,.877,.258,1.342v7.109Z"
    }
  ) });
};

// src/components/icons/dolphinSVG/index.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
var Dolphin = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m19,6c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm5,2.5c0,.827-.673,1.5-1.5,1.5h-5.899c-.466,0-.972.034-1.492.097-.101,1.158-.444,2.512-1.029,4.038-.195.507-.748.865-1.315.865-.491-.038-.96-.351-1.059-.81-.217-1.013-.499-1.834-.84-2.44-.53.416-1.026.913-1.455,1.534-.785,1.138-1.582,3.344-2.026,5.108,1.709.661,3.05,2.13,3.478,3.852.116.465-.009.955-.333,1.312-.266.293-.636.455-1.018.455-.067,0-.135-.005-.202-.016-2.083-.317-3.316-1.418-3.913-2.127-.59.712-1.817,1.812-3.922,2.127-.454.071-.908-.098-1.219-.439-.324-.356-.448-.847-.333-1.312.467-1.88,1.943-3.396,3.83-3.98-.382-1.656-.752-3.909-.752-5.764,0-2.193.343-4.04.921-5.596-.793-1.732-1.957-3.225-3.478-4.429C.019,2.141-.112,1.603.1,1.071.328.501,1-.064,1.77.006c2.319.214,4.41.794,6.238,1.705,1.853-1.188,3.987-1.711,5.992-1.711,5.017,0,7.749,3.443,7.983,7h.517c.827,0,1.5.673,1.5,1.5ZM4.433,5.721c.696-1.387,1.608-2.485,2.647-3.335-1.604-.725-3.408-1.2-5.403-1.384-.271-.018-.556.207-.649.44-.067.168,0,.221.036.249,1.394,1.104,2.532,2.489,3.369,4.03Zm9.648,4.552c-.808.181-1.623.476-2.395.924.392.694.76,1.669.998,2.784.013.016.093.032.21-.002.12-.038.219-.117.252-.203.508-1.324.814-2.493.935-3.503Zm8.919-1.774c0-.275-.224-.5-.5-.5h-1c-.276,0-.5-.224-.5-.5,0-3.23-2.404-6.5-7-6.5C6.18,1,3.718,8.692,4,12.5c.144,1.945.433,4.379.837,6.002.033.132.011.271-.061.386s-.187.196-.319.225c-1.722.369-3.155,1.725-3.564,3.373-.035.141.003.288.102.397.052.057.165.148.332.124,2.603-.39,3.584-2.16,3.625-2.235.087-.161.256-.264.44-.264h0c.183,0,.352.1.44.26.041.073,1.052,1.847,3.627,2.239.164.023.278-.066.331-.124.099-.108.137-.257.102-.396-.381-1.533-1.653-2.823-3.241-3.288-.253-.074-.406-.333-.347-.591.422-1.855,1.317-4.49,2.283-5.892,1.677-2.431,4.448-3.716,8.013-3.716h5.899c.276,0,.5-.225.5-.5Z"
    }
  ) });
};

// src/components/icons/doorOpenSVG/index.tsx
var import_jsx_runtime57 = require("react/jsx-runtime");
var DoorOpen = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.5,23h-3.5V5.5c0-1.93-1.57-3.5-3.5-3.5h-.837c-.218-.46-.538-.872-.944-1.205-.814-.667-1.873-.93-2.906-.726L7.617,.908c-2.096,.419-3.617,2.275-3.617,4.413V23H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM16.5,3c1.378,0,2.5,1.121,2.5,2.5V23h-3V3.501c0-.169-.012-.336-.036-.501h.536ZM5,5.321c0-1.663,1.183-3.106,2.813-3.433l4.196-.839c.735-.15,1.494,.041,2.076,.519,.581,.477,.915,1.181,.915,1.933V23H5V5.321Zm8,6.679c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"
    }
  ) });
};

// src/components/icons/cocktailSVG/index.tsx
var import_jsx_runtime58 = require("react/jsx-runtime");
var Cocktail = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.81,1.77c-.421-1.075-1.427-1.77-2.563-1.77H2.754C1.617,0,.611,.695,.19,1.77-.214,2.8,.03,3.898,.871,4.675l8.503,7.31c.616,.559,1.36,.888,2.126,.988v10.027H6.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h11c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-5V12.974c.765-.099,1.506-.425,2.116-.98l8.559-7.36c.795-.736,1.039-1.833,.635-2.864Zm-1.333,2.147l-8.522,7.328c-.548,.498-1.266,.748-1.954,.755-.69-.008-1.41-.261-1.964-.764L2.785,5h14.715c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H1.622l-.117-.101c-.494-.457-.638-1.117-.384-1.765,.27-.689,.911-1.134,1.633-1.134H21.246c.722,0,1.363,.445,1.633,1.134,.254,.648,.11,1.309-.402,1.783ZM12,12c-.011,0,.01,0,0,0h0Z"
    }
  ) });
};

// src/components/icons/elephantSVG/index.tsx
var import_jsx_runtime59 = require("react/jsx-runtime");
var Elephant = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m17,9c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm7,8.5v2.899c0,1.279-.902,2.383-2.099,2.569-.132.021-.264.03-.395.03-.593,0-1.165-.207-1.615-.593-.555-.476-.873-1.171-.872-1.908v-2.499h-2.495c-.275,0-.5.224-.5.5v2.002c0,1.377-1.121,2.498-2.498,2.498-.668,0-1.296-.26-1.768-.733-.473-.473-.731-1.102-.73-1.77l.004-1.996c0-.134-.052-.259-.146-.354-.094-.095-.22-.147-.354-.147h-5.024c-.275,0-.499.224-.5.499l-.004,2.008c-.002,1.375-1.123,2.493-2.498,2.493-1.385,0-2.506-1.121-2.506-2.498v-12.002C0,5.467,2.468,3,5.5,3h2.766c1.01-1.221,2.535-2,4.239-2,2.352,0,4.463,1.545,5.201,3.783,1.434.907,2.314,2.487,2.313,4.169v11.547c0,.445.19.863.522,1.148.332.284.757.403,1.205.333.715-.111,1.253-.791,1.253-1.581v-2.899c0-.276.224-.5.5-.5s.5.224.5.5Zm-4.98-.5v-7.998c0-1.464-.741-2.738-1.985-3.458-.111-.064-.193-.169-.229-.293-.556-1.915-2.324-3.251-4.3-3.251-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5c.276,0,.5.224.5.5s-.224.5-.5.5c-3.032,0-5.5-2.467-5.5-5.5,0-.901.222-1.749.607-2.5h-2.112c-2.481,0-4.5,2.019-4.5,4.5v12.002c0,.826.672,1.498,1.498,1.498.832,0,1.505-.671,1.506-1.495l.004-2.008c0-.826.675-1.497,1.5-1.497h5.024c.401,0,.778.156,1.062.44.283.284.439.661.438,1.062l-.004,1.996c0,.401.155.778.438,1.062.283.283.66.439,1.061.439.826,0,1.498-.672,1.498-1.498v-2.002c0-.827.673-1.5,1.5-1.5h2.495Z"
    }
  ) });
};

// src/components/icons/balanceSVG/index.tsx
var import_jsx_runtime60 = require("react/jsx-runtime");
var Balance = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.964,12.314l-.003-.006-.002-.005-3.493-8.732c-.382-.955-1.293-1.572-2.321-1.572h-5.646V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.5H5.854c-1.028,0-1.939,.617-2.321,1.572L.041,12.303l-.002,.005-.003,.006c-.024,.059-.036,1.101-.036,1.101,0,2.197,1.457,4.041,3.543,4.484,.314,.067,.634,.101,.95,.101h.008c2.48-.004,4.499-2.023,4.499-4.5,0,0-.012-1.126-.036-1.186l-.003-.006-.002-.005L5.283,3.112c.177-.073,.37-.112,.571-.112h5.646V23H4.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h15c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-7V3h5.646c.201,0,.395,.039,.571,.112l-3.676,9.191-.002,.005-.003,.006c-.024,.059-.036,1.186-.036,1.186,0,2.477,2.019,4.496,4.499,4.5h.008c.316,0,.636-.034,.949-.101,2.087-.444,3.544-2.288,3.544-4.484,0,0-.012-1.042-.036-1.101ZM4.499,17c-.283,.016-.5-.026-.748-.079-1.619-.344-2.751-1.786-2.751-3.506v-.415h7v.5c0,1.926-1.57,3.497-3.501,3.5Zm3.263-5H1.238S4.487,3.881,4.502,3.851l3.26,8.149ZM19.498,3.851c.015,.03,3.263,8.149,3.263,8.149h-6.523l3.26-8.149Zm.75,13.07c-.247,.053-.466,.097-.747,.079-1.931-.003-3.501-1.574-3.501-3.5v-.5h7v.415c0,1.72-1.132,3.162-2.752,3.506Z"
    }
  ) });
};

// src/components/icons/fenceSVG/index.tsx
var import_jsx_runtime61 = require("react/jsx-runtime");
var Fence = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.5,17h-.5V8h.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-.5V3c0-.461-.187-.911-.513-1.237l-1.25-1.25c-.683-.682-1.792-.682-2.475,0l-1.25,1.25c-.326,.326-.513,.776-.513,1.237V7h-2V3c0-.461-.187-.911-.513-1.237l-1.25-1.25c-.683-.682-1.792-.682-2.475,0l-1.25,1.25c-.326,.326-.513,.776-.513,1.237V7h-2V3c0-.461-.187-.911-.513-1.237l-1.25-1.25C4.555-.169,3.445-.169,2.763,.513L1.513,1.763c-.326,.326-.513,.776-.513,1.237V7H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h.5v9H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h.5v4c0,1.103,.897,2,2,2h2c1.103,0,2-.897,2-2v-4h2v4c0,1.103,.897,2,2,2h2c1.103,0,2-.897,2-2v-4h2v4c0,1.103,.897,2,2,2h2c1.103,0,2-.897,2-2v-4h.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-1.5,0h-4V8h4v9ZM18,3c0-.197,.08-.391,.22-.53l1.25-1.25c.146-.146,.338-.22,.53-.22s.384,.073,.53,.22l1.25,1.25c.14,.14,.22,.333,.22,.53V7h-4V3Zm-8,0c0-.197,.08-.391,.22-.53l1.25-1.25c.146-.146,.338-.22,.53-.22s.384,.073,.53,.22l1.25,1.25c.14,.14,.22,.333,.22,.53V7h-4V3Zm4,5v9h-4V8h4ZM2,3c0-.197,.08-.391,.22-.53l1.25-1.25c.146-.146,.338-.22,.53-.22s.384,.073,.53,.22l1.25,1.25c.14,.14,.22,.333,.22,.53V7H2V3Zm0,5H6v9H2V8Zm4,14c0,.552-.449,1-1,1H3c-.551,0-1-.448-1-1v-4H6v4Zm1-5V8h2v9h-2Zm7,5c0,.552-.449,1-1,1h-2c-.551,0-1-.448-1-1v-4h4v4Zm1-5V8h2v9h-2Zm7,5c0,.552-.449,1-1,1h-2c-.551,0-1-.448-1-1v-4h4v4Z"
    }
  ) });
};

// src/components/icons/csvSVG/index.tsx
var import_jsx_runtime62 = require("react/jsx-runtime");
var Csv = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m8.873,17.673c-.276.772-1.022,1.327-1.898,1.327-1.086,0-1.967-.881-1.967-1.967l-.008-2.066c0-1.086.881-1.967,1.967-1.967.879,0,1.628.559,1.901,1.336.112.319-.13.653-.468.658h-.004c-.21.003-.405-.123-.475-.322-.137-.395-.513-.672-.955-.672-.533,0-.967.434-.967.967l.008,2.063c0,.537.434.97.967.97.443,0,.821-.279.957-.666.069-.195.26-.319.466-.319.341,0,.59.337.475.658Zm3.927-2.12c-.463-.173-1.327-.54-1.327-.54-.143-.096-.21-.256-.188-.438.016-.108.092-.369.459-.481.758-.234,1.431.33,1.438.335.212.182.532.154.71-.061l.019-.023c.175-.21.148-.522-.06-.7l-.016-.014c-.013-.01-1.101-.931-2.385-.531-.637.193-1.088.701-1.177,1.325-.084.603.185,1.154.736,1.51.003,0,.687.309,1.435.59.185.069.786.329.706.788-.057.315-.41.648-.953.648-.514,0-1.008-.212-1.323-.565-.189-.211-.513-.227-.722-.035l-.01.01c-.204.188-.219.504-.034.71l.01.012c.514.575,1.272.906,2.079.906.982,0,1.806-.632,1.959-1.502.115-.651-.182-1.504-1.356-1.945Zm5.593-2.552c-.239,0-.445.168-.493.401l-.797,3.855-.918-3.869c-.054-.227-.257-.387-.49-.387-.328,0-.618.308-.537.626l1.204,4.78c.088.349.402.593.761.593.372,0,.693-.261.768-.625l.995-4.769c.065-.313-.173-.606-.493-.606Zm3.607-3.015v9.515c0,2.481-2.019,4.5-4.5,4.5H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h5.515c1.736,0,3.369.677,4.597,1.904l3.484,3.484c1.228,1.228,1.904,2.86,1.904,4.597Zm-8-3.485c0,.827.673,1.5,1.5,1.5h5.132c-.273-.706-.693-1.353-1.244-1.904l-3.484-3.484c-.551-.551-1.199-.971-1.904-1.244v5.132Zm7,3.485c0-.334-.03-.663-.088-.985h-5.412c-1.379,0-2.5-1.121-2.5-2.5V1.088c-.322-.058-.651-.088-.985-.088h-5.515c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5v-9.515Z"
    }
  ) });
};

// src/components/icons/editSVG/index.tsx
var import_jsx_runtime63 = require("react/jsx-runtime");
var Edit = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m4.5,1h5.515c.334,0,.663.03.985.088v5.412c0,1.378,1.122,2.5,2.5,2.5h5.411c.033.178.057.359.071.541.022.275.274.479.539.458.275-.022.48-.264.458-.539-.125-1.536-.793-2.981-1.883-4.07l-3.485-3.485c-1.228-1.228-2.86-1.904-4.596-1.904h-5.515C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h4c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-4c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5Zm12.889,5.096c.545.545.965,1.195,1.24,1.904h-5.129c-.827,0-1.5-.673-1.5-1.5V1.368c.706.273,1.353.692,1.904,1.243l3.485,3.485Zm5.878,5.636c-.943-.944-2.592-.944-3.535,0l-7.707,7.707c-.661.661-1.025,1.54-1.025,2.475v1.586c0,.276.224.5.5.5h1.586c.935,0,1.814-.364,2.475-1.025l7.707-7.707c.472-.472.732-1.1.732-1.768s-.26-1.296-.732-1.768Zm-.707,2.828l-7.707,7.707c-.472.472-1.1.732-1.768.732h-1.086v-1.086c0-.668.26-1.295.732-1.768l7.707-7.707c.566-.566,1.555-.566,2.121,0,.283.283.439.66.439,1.061s-.156.777-.439,1.061Z"
    }
  ) });
};

// src/components/icons/pdfSVG/index.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
var Pdf = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M20.1,5.39l-3.49-3.49c-1.23-1.23-2.86-1.9-4.6-1.9H6.5C4.02,0,2,2.02,2,4.5v15c0,2.48,2.02,4.5,4.5,4.5h11c2.48,0,4.5-2.02,4.5-4.5V9.99c0-1.74-.68-3.37-1.9-4.6Zm-.71,.71c.55,.55,.97,1.2,1.24,1.9h-5.13c-.83,0-1.5-.67-1.5-1.5V1.37c.71,.27,1.35,.69,1.9,1.24l3.49,3.49Zm1.61,13.4c0,1.93-1.57,3.5-3.5,3.5H6.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.51c.33,0,.66,.03,.99,.09V6.5c0,1.38,1.12,2.5,2.5,2.5h5.41c.06,.32,.09,.65,.09,.99v9.51ZM6.97,13h-.97c-.55,0-1,.45-1,1v4.5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5v-1.5h.97c1.11,0,2.01-.92,2.01-2.02s-.9-1.98-2.01-1.98Zm0,3h-.97v-2h.97c.56,0,1.01,.44,1.01,.98s-.46,1.02-1.01,1.02Zm5.03-3h0s-.51,0-1,0c-.55,0-1,.45-1,1v4c0,.55,.45,1,1,1,.48,0,.97,0,1,0h0c1.11,0,2-.89,2-1.98v-2.03c0-1.09-.89-1.98-2-1.98Zm1,4.02c0,.53-.43,.96-.96,.98h-1.04v-4h1.04c.53,.02,.96,.46,.96,.98v2.03Zm6-3.52c0,.28-.22,.5-.5,.5h-2.5v2s1.5,0,1.5,0c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-1.5v1.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-4.5c0-.55,.45-1,1-1h2.5c.28,0,.5,.22,.5,.5Z"
    }
  ) });
};

// src/components/icons/filtersSVG/index.tsx
var import_jsx_runtime65 = require("react/jsx-runtime");
var Filters = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M15.5,20c-.106,0-.212-.034-.3-.1l-4-3c-.126-.094-.2-.243-.2-.4v-3.301L3.869,5.667c-.564-.635-.869-1.437-.869-2.27,0-1.874,1.524-3.398,3.398-3.398h14.203c1.874,0,3.398,1.524,3.398,3.398,0,.833-.305,1.635-.858,2.258l-7.142,7.543v6.301c0,.189-.107,.362-.276,.447-.07,.035-.147,.053-.224,.053Zm-3.5-3.75l3,2.25v-5.5c0-.128,.049-.251,.137-.344l7.268-7.676c.381-.428,.596-.994,.596-1.582,0-1.322-1.076-2.398-2.398-2.398H6.398c-1.322,0-2.398,1.076-2.398,2.398,0,.588,.215,1.154,.606,1.594l7.257,7.665c.088,.093,.137,.216,.137,.344v3.25Zm.724,7.697c.169-.085,.276-.258,.276-.447v-3c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v2l-3-2.25v-3.25c0-.128-.049-.251-.137-.344L1.606,8.992c-.392-.44-.606-1.006-.606-1.594,0-.695,.302-1.356,.828-1.812,.208-.181,.23-.497,.05-.705-.183-.209-.497-.232-.706-.05-.744,.646-1.172,1.582-1.172,2.567,0,.833,.305,1.635,.869,2.27l7.131,7.532v3.301c0,.157,.074,.306,.2,.4l4,3c.088,.066,.193,.1,.3,.1,.076,0,.153-.018,.224-.053Z"
    }
  ) });
};

// src/components/icons/downFolderSVG/index.tsx
var import_jsx_runtime66 = require("react/jsx-runtime");
var DownFolder = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M19.5,3h-7.028c-.231,0-.464-.055-.671-.158l-3.156-1.578c-.345-.173-.732-.264-1.118-.264h-3.028C2.019,1,0,3.019,0,5.5v13c0,2.481,2.019,4.5,4.5,4.5h3c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-3c-1.93,0-3.5-1.57-3.5-3.5V8H23v10.5c0,1.93-1.57,3.5-3.5,3.5h-3c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h3c2.481,0,4.5-2.019,4.5-4.5V7.5c0-2.481-2.019-4.5-4.5-4.5ZM1,5.5c0-1.93,1.57-3.5,3.5-3.5h3.028c.231,0,.464,.055,.671,.158l3.156,1.578c.345,.173,.732,.264,1.118,.264h7.028c1.76,0,3.221,1.306,3.464,3H1v-1.5Zm14.912,14.35l-2.515,2.57c-.386,.386-.891,.579-1.396,.58h-.003c-.504,0-1.008-.192-1.392-.576l-2.519-2.574c-.193-.197-.189-.514,.008-.707,.198-.191,.515-.189,.707,.008l2.515,2.57c.056,.056,.117,.103,.183,.142V12.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v9.362c.066-.04,.129-.088,.187-.145l2.511-2.566c.193-.197,.51-.199,.707-.008,.197,.193,.201,.51,.008,.707Z"
    }
  ) });
};

// src/components/icons/upFolderSVG/index.tsx
var import_jsx_runtime67 = require("react/jsx-runtime");
var UpFolder = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M19.5,3h-7.028c-.231,0-.464-.055-.671-.158l-3.156-1.578c-.345-.173-.732-.264-1.118-.264h-3.028C2.019,1,0,3.019,0,5.5v13c0,2.481,2.019,4.5,4.5,4.5h4c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V8H23v10.5c0,1.93-1.57,3.5-3.5,3.5h-4c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h4c2.481,0,4.5-2.019,4.5-4.5V7.5c0-2.481-2.019-4.5-4.5-4.5ZM1,5.5c0-1.93,1.57-3.5,3.5-3.5h3.028c.231,0,.464,.055,.671,.158l3.156,1.578c.345,.173,.732,.264,1.118,.264h7.028c1.76,0,3.221,1.306,3.464,3H1v-1.5Zm11.683,7.78c-.056-.056-.117-.103-.183-.142v9.363c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V13.139c-.066,.04-.129,.088-.187,.146l-2.511,2.566c-.193,.198-.509,.201-.707,.008-.197-.193-.201-.51-.008-.707l2.515-2.57c.384-.384,.886-.577,1.388-.58h.018c.502,.002,1.003,.194,1.384,.576l2.519,2.574c.193,.197,.189,.514-.008,.707-.097,.095-.224,.143-.35,.143-.13,0-.259-.05-.357-.15l-2.515-2.57Z"
    }
  ) });
};

// src/components/icons/foxSVG/index.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
var Fox = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m23.105.344c-.545-.365-1.228-.438-1.825-.193-1.273.519-2.108,1.944-2.758,3.27-.229.468-.71.706-1.184.571-1.223-.35-3.467-.992-5.339-.992s-4.115.642-5.339.992c-.466.134-.954-.102-1.183-.571C4.829,2.095,3.994.67,2.72.151,2.12-.094,1.437-.021.892.344c-.559.375-.892,1-.892,1.67v7.938c0,2.803,1.092,5.439,3.075,7.422l5.002,5.001c1.048,1.048,2.441,1.625,3.923,1.625s2.876-.577,3.923-1.625l5.002-5.001c1.983-1.983,3.075-4.621,3.075-7.425V2.018c0-.671-.334-1.297-.895-1.674Zm-14.321,21.324l-5.002-5.001c-1.794-1.794-2.782-4.18-2.782-6.715v-.82c.659.177,1.786.551,3,1.269v.6s.47,2.763,3.613,2.979c.827,1.42,1.387,3.221,1.387,5.521v1.5c0,.351.072.683.183.996-.134-.107-.275-.204-.399-.328Zm5.216-.668c0,1.103-.897,2-2,2s-2-.897-2-2v-.271c.301-.238,1.039-.729,2-.729s1.7.491,2,.729v.271Zm9-11.051c0,2.538-.988,4.923-2.782,6.718l-5.002,5.001c-.123.123-.264.221-.399.328.111-.313.183-.645.183-.996v-1.5c0-2.3.56-4.101,1.387-5.521,3.143-.216,3.613-2.979,3.613-2.979v-.6c1.214-.719,2.341-1.092,3-1.269v.817Zm0-1.845c-1.809.466-9,2.893-9,11.431-.494-.273-1.178-.535-2-.535s-1.506.262-2,.535c0-8.538-7.191-10.965-9-11.431V2.014c0-.336.168-.65.45-.84.166-.111.351-.167.537-.167.12,0,.24.023.355.07.962.393,1.671,1.627,2.237,2.784.439.896,1.431,1.355,2.355,1.093,1.173-.336,3.333-.954,5.065-.954s3.893.618,5.065.954c.927.263,1.916-.197,2.355-1.093.566-1.156,1.274-2.392,2.236-2.784.296-.12.62-.084.891.098.283.19.452.506.452.844v6.085Z"
    }
  ) });
};

// src/components/icons/joystickSVG/index.tsx
var import_jsx_runtime69 = require("react/jsx-runtime");
var Joystick = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m22.355,5.378c-.776-1.467-2.297-2.378-3.97-2.378H5.615c-1.673,0-3.194.911-3.97,2.377-.75,1.418-1.645,3.715-1.645,6.601,0,5.526,2.019,10.022,4.5,10.022,1.628,0,2.603-2.146,3.133-3.946.183-.62.771-1.054,1.432-1.054h5.87c.661,0,1.25.434,1.432,1.054.53,1.8,1.504,3.946,3.133,3.946,2.481,0,4.5-4.496,4.5-10.022,0-2.886-.895-5.183-1.645-6.6Zm-2.855,15.622c-.766,0-1.578-1.207-2.174-3.229-.307-1.042-1.29-1.771-2.391-1.771h-5.87c-1.101,0-2.084.729-2.391,1.771-.596,2.022-1.408,3.229-2.174,3.229-1.652,0-3.5-3.858-3.5-9.022,0-2.681.832-4.814,1.529-6.133.603-1.138,1.785-1.845,3.086-1.845h12.77c1.301,0,2.484.707,3.086,1.845.697,1.318,1.529,3.452,1.529,6.133,0,5.164-1.848,9.022-3.5,9.022Zm-10.5-11.5c0,.276-.224.5-.5.5h-1.5v1.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.5h-1.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1.5v-1.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5h1.5c.276,0,.5.224.5.5Zm7-1.5c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm0,2c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-2,2c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"
    }
  ) });
};

// src/components/icons/ghostSVG/index.tsx
var import_jsx_runtime70 = require("react/jsx-runtime");
var Ghost = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m9,8c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Zm6-3c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1ZM12,0C6.486,0,2,4.486,2,10v13.5c0,.234.167.5.5.5.19,0,.369-.109.452-.287.482-1.024,1.573-1.713,2.714-1.713,1.104,0,2.149.666,2.727,1.737.087.162.256.263.44.263h0c.184,0,.353-.102.44-.264.575-1.071,1.619-1.736,2.726-1.736,1.095,0,2.213.708,2.719,1.723.086.174.259.281.462.277.195-.006.369-.125.445-.304.413-.967,1.577-1.696,2.707-1.696,1.256,0,2.273.87,2.723,1.731.107.204.338.308.562.254.224-.055.381-.255.381-.485v-13.5C22,4.486,17.514,0,12,0Zm9,22.069c-.687-.617-1.611-1.069-2.667-1.069-1.227,0-2.451.623-3.182,1.557-.766-.955-1.949-1.557-3.152-1.557-1.222,0-2.38.595-3.167,1.592-.789-.997-1.947-1.592-3.166-1.592-.984,0-1.939.385-2.667,1.027v-12.027C3,5.038,7.038,1,12,1s9,4.038,9,9v12.069Z"
    }
  ) });
};

// src/components/icons/imageSVG/index.tsx
var import_jsx_runtime71 = require("react/jsx-runtime");
var Image = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M15,4.43c0,.2,.12,.39,.31,.47l2.66,1.12,1.07,2.66c.08,.19,.26,.31,.46,.31s.39-.12,.46-.31l1.06-2.66,2.66-1.06c.19-.08,.31-.26,.31-.46s-.12-.39-.31-.46l-2.66-1.06-1.06-2.66c-.15-.38-.78-.38-.93,0l-1.06,2.65-2.65,1c-.19,.07-.32,.25-.32,.46Zm3.53-.6c.13-.05,.23-.15,.29-.28l.68-1.7,.68,1.7c.05,.13,.15,.23,.28,.28l1.7,.68-1.7,.68c-.13,.05-.23,.15-.28,.28l-.68,1.7-.68-1.7c-.05-.12-.15-.22-.27-.28l-1.71-.72,1.69-.64Zm-4.02,5.66l-.53-2.11c-.06-.22-.26-.38-.48-.38s-.43,.16-.48,.38l-.53,2.1-2.1,.48c-.22,.05-.38,.25-.39,.48,0,.23,.15,.43,.37,.49l2.12,.57,.53,2.11c.06,.22,.26,.38,.48,.38s.43-.16,.48-.38l.53-2.11,2.11-.53c.22-.06,.38-.26,.38-.48s-.16-.43-.38-.48l-2.11-.53Zm-.53,1.13c-.18,.04-.32,.18-.36,.36l-.12,.46-.12-.46c-.04-.18-.18-.31-.35-.36l-.47-.13,.41-.09c.18-.04,.38-.23,.42-.42l.1-.42,.12,.46c.04,.18,.18,.32,.36,.36l.46,.12-.46,.12Zm9.52-2.62c-.28,0-.5,.22-.5,.5v11c0,.09,0,.19-.01,.28l-2.9-2.9c-1.15-1.15-3.02-1.15-4.17,0l-.58,.58c-.74,.74-1.94,.74-2.68,0l-5.58-5.58c-1.15-1.15-3.02-1.15-4.17,0l-1.92,1.92V4.5c0-1.93,1.57-3.5,3.5-3.5H15.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5H4.5C2.02,0,0,2.02,0,4.5v15c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V8.5c0-.28-.22-.5-.5-.5Zm-4,15H4.5c-1.93,0-3.5-1.57-3.5-3.5v-4.29l2.62-2.62c.76-.76,2-.76,2.75,0l5.58,5.58c1.13,1.13,2.96,1.13,4.09,0l.58-.58c.76-.76,2-.76,2.75,0l3.33,3.33c-.54,1.23-1.77,2.09-3.2,2.09ZM7,5c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1,.45-1,1-1Z"
    }
  ) });
};

// src/components/icons/helicopterSVG/index.tsx
var import_jsx_runtime72 = require("react/jsx-runtime");
var Helicopter = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.5,20c-.276,0-.5,.224-.5,.5,0,.827-.673,1.5-1.5,1.5h-2.5v-4h.5c2.481,0,4.5-2.019,4.5-4.5,0-4.136-3.364-7.5-7.5-7.5h-1.5V3h7.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-7.5v-.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v.5H6.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h7.5v3H1v-1.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v2.237c0,1.555,1.044,2.938,2.539,3.365l4.461,1.274v1.123c0,2.513,1.694,4.638,4,5.292v4.208H6.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h15c1.379,0,2.5-1.122,2.5-2.5,0-.276-.224-.5-.5-.5Zm-7-13c3.416,0,6.225,2.649,6.481,6h-6.481c-.827,0-1.5-.673-1.5-1.5V7h1.5Zm-8.5,5.5v-1.5c0-.223-.148-.419-.363-.481l-4.824-1.378c-.982-.28-1.692-1.14-1.799-2.141H14v4.5c0,1.378,1.121,2.5,2.5,2.5h6.464c-.243,1.694-1.704,3-3.464,3h-7c-2.481,0-4.5-2.019-4.5-4.5Zm4,5.477c.165,.015,.331,.023,.5,.023h5.5v4h-6v-4.023Z"
    }
  ) });
};

// src/components/icons/hospitalSVG/index.tsx
var import_jsx_runtime73 = require("react/jsx-runtime");
var Hospital = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M16,12h-2v-2c0-1.103-.897-2-2-2s-2,.897-2,2v2h-2c-1.103,0-2,.897-2,2s.897,2,2,2h2v2c0,1.103,.897,2,2,2s2-.897,2-2v-2h2c1.103,0,2-.897,2-2s-.897-2-2-2Zm0,3h-2.5c-.276,0-.5,.224-.5,.5v2.5c0,.552-.448,1-1,1s-1-.448-1-1v-2.5c0-.276-.224-.5-.5-.5h-2.5c-.552,0-1-.448-1-1s.448-1,1-1h2.5c.276,0,.5-.224,.5-.5v-2.5c0-.552,.448-1,1-1s1,.448,1,1v2.5c0,.276,.224,.5,.5,.5h2.5c.552,0,1,.448,1,1s-.448,1-1,1Zm6.017-9.169l-1.017-.686V1.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v2.97L14.518,.771c-1.529-1.033-3.507-1.033-5.034,0L1.983,5.831c-1.242,.838-1.983,2.232-1.983,3.729v9.939c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V9.561c0-1.497-.741-2.892-1.983-3.729Zm.983,13.669c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V9.561c0-1.165,.576-2.249,1.542-2.901L10.043,1.599c.594-.401,1.275-.603,1.957-.603s1.363,.201,1.958,.603l7.5,5.061c.966,.652,1.542,1.736,1.542,2.901v9.939Z"
    }
  ) });
};

// src/components/icons/downloadSVG/index.tsx
var import_jsx_runtime74 = require("react/jsx-runtime");
var Download = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M21.5,12h-3c-.827,0-1.5,.673-1.5,1.5,0,1.379-1.121,2.5-2.5,2.5h-5c-1.379,0-2.5-1.121-2.5-2.5,0-.827-.673-1.5-1.5-1.5H2.5c-1.379,0-2.5,1.121-2.5,2.5v5c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,7.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-5c0-.827,.673-1.5,1.5-1.5h3c.275,0,.5,.225,.5,.5,0,1.93,1.57,3.5,3.5,3.5h5c1.93,0,3.5-1.57,3.5-3.5,0-.275,.225-.5,.5-.5h3c.827,0,1.5,.673,1.5,1.5v5ZM7.646,7.268c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l3.146,3.146V.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5V9.707l3.146-3.146c.195-.195,.512-.195,.707,0s.195,.512,0,.707l-3.293,3.293c-.257,.257-.589,.381-.925,.412-.044,.013-.087,.027-.135,.027s-.091-.015-.135-.027c-.337-.031-.668-.155-.925-.412l-3.293-3.293Z"
    }
  ) });
};

// src/components/icons/lightSVG/index.tsx
var import_jsx_runtime75 = require("react/jsx-runtime");
var Light = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m17.063,3.257l1.671-3c.133-.242.439-.328.68-.193.241.134.328.438.193.68l-1.671,3c-.091.164-.262.257-.437.257-.083,0-.166-.021-.243-.063-.241-.134-.328-.438-.193-.68Zm6.895,2.028c-.112-.253-.406-.366-.659-.257l-3,1.321c-.253.111-.368.407-.257.659.083.188.266.299.458.299.067,0,.136-.014.201-.042l3-1.321c.253-.111.368-.407.257-.659ZM6.063,3.743c.091.164.262.257.437.257.083,0,.166-.021.243-.063.241-.134.328-.438.193-.68L5.266.257c-.134-.242-.439-.327-.68-.193-.241.134-.328.438-.193.68l1.671,3Zm-2.362,2.606l-3-1.321c-.251-.108-.547.003-.659.257-.111.252.004.548.257.659l3,1.321c.065.028.134.042.201.042.192,0,.375-.111.458-.299.111-.252-.004-.548-.257-.659Zm16.299,5.65c0,2.583-1.259,5.02-3.368,6.519-.396.282-.632.736-.632,1.215v1.267c0,1.654-1.346,3-3,3h-2c-1.683,0-3-1.377-3-3.136v-1.132c0-.478-.239-.934-.64-1.219-2.456-1.752-3.71-4.706-3.273-7.711.513-3.521,3.457-6.36,7.003-6.752,2.307-.256,4.527.45,6.245,1.987,1.693,1.517,2.665,3.689,2.665,5.962Zm-5,9v-1h-6v.864c0,1.218.859,2.136,2,2.136h2c1.103,0,2-.897,2-2Zm4-9c0-1.988-.85-3.89-2.332-5.217-1.301-1.164-2.931-1.783-4.658-1.783-.268,0-.538.015-.811.045-3.1.342-5.675,2.824-6.122,5.902-.383,2.632.714,5.22,2.863,6.752.454.324.771.787.933,1.301h2.627v-5.051c-1.14-.232-2-1.242-2-2.449,0-.276.224-.5.5-.5s.5.224.5.5c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5c0-.276.224-.5.5-.5s.5.224.5.5c0,1.208-.86,2.217-2,2.449v5.051h2.626c.161-.513.475-.975.926-1.296,1.847-1.312,2.948-3.444,2.948-5.704Z"
    }
  ) });
};

// src/components/icons/lionSVG/index.tsx
var import_jsx_runtime76 = require("react/jsx-runtime");
var Lion = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m15,11c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-5-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm8.109-3.912c.47.825.891,1.65.891,2.672,0,2.01-.711,3.663-.97,4.198l.207.827c.233.933-.072,1.903-.797,2.534l-2.027,1.768c-.683.595-1.558.923-2.464.923h-1.898c-.906,0-1.781-.328-2.464-.923l-2.027-1.768c-.725-.631-1.03-1.602-.796-2.534l.207-.827c-.259-.535-.97-2.188-.97-4.198,0-1.021.421-1.847.891-2.672.547-.963,1.653-1.481,2.755-1.28.869.155,2.13.488,3.354,1.2,1.224-.712,2.485-1.045,3.354-1.2,1.098-.202,2.207.317,2.755,1.28Zm-.109,2.672c0-.778-.344-1.446-.76-2.178-.338-.595-1.024-.913-1.71-.79-.844.15-2.095.485-3.263,1.224-.163.104-.371.104-.534,0-1.167-.738-2.418-1.073-3.263-1.224-.098-.018-.195-.025-.292-.025-.582,0-1.128.306-1.418.815-.416.731-.76,1.399-.76,2.178,0,2.152.93,3.882.939,3.899.06.11.077.239.046.36l-.252,1.008c-.142.566.044,1.155.483,1.538l2.028,1.768c.501.437,1.143.677,1.807.677h.438l-.034-1.555-1.248-1.248c-.133-.133-.207-.312-.207-.5,0-.391.317-.707.707-.707h2.586c.391,0,.707.317.707.707,0,.188-.075.367-.207.5l-1.336,1.336.032,1.467h.46c.664,0,1.306-.24,1.807-.677l2.027-1.768c.44-.383.625-.972.484-1.538l-.252-1.008c-.031-.121-.014-.25.045-.359.01-.018.939-1.76.939-3.9Zm6,3.72v1.788c0,.479-.272.896-.71,1.088-.304.134-.631.134-.922.017-.594,2.184-1.096,3.609-1.289,4.026l-.647,1.87c-.215.477-.634.757-1.11.773-.47,0-.914-.233-1.141-.651l-.198-.592c-1.231.839-3.316,2.221-4.638,2.884-.421.21-.883.315-1.345.315s-.923-.105-1.344-.315c-1.321-.663-3.403-2.042-4.634-2.881l-.166.505c-.263.502-.69.743-1.177.735-.477-.017-.895-.297-1.093-.729l-.683-1.961c-.177-.374-.677-1.797-1.271-3.979-.289.117-.618.117-.922-.017-.438-.192-.71-.609-.71-1.088v-1.788c0-1.738.359-3.52,1.07-5.305-.353.021-.675-.117-.87-.392-.227-.319-.246-.738-.052-1.095C1.006,4.118,3.257,1.851,6.174.581c1.853-.808,3.961-.774,5.826.081,1.864-.856,3.973-.889,5.826-.081,2.94,1.279,5.186,3.571,6.029,5.159.19.359.167.779-.061,1.097-.197.272-.513.421-.844.388.697,1.77,1.05,3.532,1.05,5.255Zm-1,0c0-1.881-.457-3.823-1.359-5.772-.082-.176-.054-.383.07-.531.125-.148.325-.21.511-.162l.847.224c-.788-1.485-3.043-3.608-5.643-4.74-1.654-.718-3.55-.659-5.203.167-.141.07-.307.07-.447,0-1.652-.826-3.548-.885-5.203-.167C3.993,2.621,1.829,4.697,1.026,6.167l.777-.159c.185-.036.376.031.494.178.117.148.142.35.062.521-.902,1.949-1.359,3.892-1.359,5.772v1.788c0,.106.07.154.112.172.043.02.125.04.202-.033l.272-.249c.129-.119.312-.159.479-.111.168.05.298.184.342.354.684,2.62,1.252,4.215,1.42,4.577l.685,1.964c.043.089.167.104.209.103.051,0,.156-.016.219-.131l.337-1.056c.049-.15.166-.269.315-.318.052-.018.106-.026.16-.026.1,0,.2.03.284.089,1.026.709,3.575,2.439,5.065,3.188.562.281,1.232.281,1.793,0,1.49-.748,4.039-2.479,5.065-3.188.129-.091.293-.113.444-.062.149.05.267.168.315.318l.373,1.14c.03.039.143.061.192.046.046,0,.16-.019.218-.146l.649-1.873c.187-.409.755-2.004,1.439-4.624.044-.17.174-.304.342-.354.17-.048.351-.008.479.111l.271.249c.078.072.16.052.203.033.042-.018.112-.065.112-.172v-1.788Z"
    }
  ) });
};

// src/components/icons/lobsterSVG/index.tsx
var import_jsx_runtime77 = require("react/jsx-runtime");
var Lobster = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m18.5,10c1.292,0,2.423-.838,2.832-2.034,1.497-.167,2.668-1.426,2.668-2.966,0-.866-.437-3.395-.799-4.352-.144-.38-.498-.634-.902-.648-.399.011-.784.219-.955.592-.121.263-.229.584-.344.932-.115-.348-.223-.669-.344-.931-.171-.374-.536-.58-.955-.593-.404.015-.759.269-.902.647-.362.957-.799,3.486-.799,4.353,0,1.404.973,2.576,2.277,2.902-.334.656-1.012,1.098-1.777,1.098h-2.5v-2.275c0-.645-.248-1.717-.618-2.802.362-.15.618-.506.618-.923,0-.552-.448-1-1-1-.134,0-.261.028-.378.076-.235-.472-.483-.893-.731-1.202-.891-1.111-2.758-1.112-3.646,0-.253.315-.52.754-.778,1.256-.141-.076-.295-.13-.466-.13-.552,0-1,.448-1,1,0,.439.287.801.681.936-.399,1.075-.681,2.141-.681,2.789v2.275h-2.5c-.765,0-1.443-.442-1.777-1.098,1.305-.326,2.277-1.498,2.277-2.902,0-.866-.437-3.395-.799-4.352-.144-.38-.498-.634-.902-.648-.402.011-.784.219-.955.592-.121.263-.229.584-.344.932-.115-.348-.223-.669-.344-.931-.171-.374-.539-.58-.955-.593-.404.015-.759.269-.902.647-.362.957-.799,3.486-.799,4.353,0,1.541,1.172,2.799,2.668,2.966.409,1.196,1.54,2.034,2.832,2.034h2.5v2h-.843c-1.202,0-2.333.468-3.183,1.318l-.828.828c-.195.195-.195.512,0,.707s.512.195.707,0l.828-.828c.661-.661,1.54-1.025,2.476-1.025h.843v2h-.258c-.921,0-1.823.374-2.475,1.025l-1.121,1.121c-.195.195-.195.512,0,.707s.512.195.707,0l1.121-1.121c.466-.466,1.109-.732,1.768-.732h.258v2.858l-1.514,1.667c-.676.676-.643,1.583.086,2.312,1.097,1.098,3.506,1.874,5.428.319.776.628,1.632.876,2.448.876,1.205,0,2.325-.541,2.979-1.195.729-.729.762-1.636.103-2.294l-1.53-1.685v-2.858h.258c.658,0,1.302.267,1.768.732l1.121,1.121c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707l-1.121-1.121c-.651-.651-1.554-1.025-2.475-1.025h-.258v-2h.843c.936,0,1.814.364,2.476,1.025l.828.828c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707l-.828-.828c-.85-.851-1.98-1.318-3.183-1.318h-.843v-2h2.5Zm.5-5c0-.765.417-3.162.748-3.99.108.235.203.525.306.838.135.406.287.868.494,1.308.164.35.74.35.904,0,.207-.439.359-.901.494-1.308.103-.312.197-.603.316-.852l.003.006h0c.317.836.734,3.233.734,3.998,0,1.103-.897,2-2,2s-2-.897-2-2ZM1,5c0-.765.417-3.162.748-3.99.108.235.203.525.306.838.135.406.287.868.494,1.308.164.35.74.35.904,0,.207-.439.359-.901.494-1.308.103-.312.197-.603.316-.852l.003.006h0c.317.836.734,3.233.734,3.998,0,1.103-.897,2-2,2s-2-.897-2-2Zm8,1.725c0-1.066,1.086-4.055,2.024-5.226.509-.636,1.577-.634,2.086,0,.312.39,1.89,3.512,1.89,5.226v2.275h-6v-2.275Zm7.721,15.405c-.685.685-2.731,1.634-4.367,0-.098-.098-.226-.146-.354-.146s-.256.049-.354.146c-1.635,1.636-3.683.686-4.367,0-.491-.492-.207-.776-.069-.915l2.012-2.215h5.557l2.028,2.232c.121.121.405.405-.086.897Zm-1.721-4.13h-6v-2h6v2Zm0-3h-6v-2h6v2Zm0-3h-6v-2h6v2Z"
    }
  ) });
};

// src/components/icons/lockSVG/index.tsx
var import_jsx_runtime78 = require("react/jsx-runtime");
var Lock = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M19,8.276v-1.276c0-3.86-3.141-7-7-7S5,3.14,5,7v1.276c-1.742,.621-3,2.271-3,4.224v7c0,2.481,2.019,4.5,4.5,4.5h11c2.481,0,4.5-2.019,4.5-4.5v-7c0-1.953-1.258-3.602-3-4.224Zm-13-1.276c0-3.309,2.691-6,6-6s6,2.691,6,6v1.051c-.166-.019-.329-.051-.5-.051H6.5c-.171,0-.334,.032-.5,.051v-1.051Zm15,12.5c0,1.93-1.57,3.5-3.5,3.5H6.5c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5v7Zm-8.5-5v3c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-3c0-.276,.224-.5,.5-.5s.5,.224,.5,.5Z"
    }
  ) });
};

// src/components/icons/pinSVG/index.tsx
var import_jsx_runtime79 = require("react/jsx-runtime");
var Pin = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,3.14,2.425,5.724,5.5,5.979v11.521c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V11.979c3.075-.255,5.5-2.839,5.5-5.979Zm-6,5c-2.757,0-5-2.243-5-5S9.243,1,12,1s5,2.243,5,5-2.243,5-5,5Z"
    }
  ) });
};

// src/components/icons/mobileSVG/index.tsx
var import_jsx_runtime80 = require("react/jsx-runtime");
var Mobile = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M15.5,0h-7c-2.481,0-4.5,2.019-4.5,4.5v15c0,2.481,2.019,4.5,4.5,4.5h7c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm-.693,1l-.325,.974c-.205,.614-.777,1.026-1.423,1.026h-2.117c-.646,0-1.218-.412-1.423-1.026l-.325-.974h5.613Zm4.193,18.5c0,1.93-1.57,3.5-3.5,3.5h-7c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.81,1.387-3.287,3.151-3.465l.418,1.255c.341,1.022,1.294,1.709,2.372,1.709h2.117c1.078,0,2.031-.687,2.372-1.709l.418-1.255c1.764,.178,3.151,1.654,3.151,3.465v15Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M13.5,20h-3c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h3c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    )
  ] });
};

// src/components/icons/moneySVG/index.tsx
var import_jsx_runtime81 = require("react/jsx-runtime");
var Money = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M13.5,7c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm0,6c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5,2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5ZM20.5,3H6.5c-1.93,0-3.5,1.57-3.5,3.5V14.5c0,1.93,1.57,3.5,3.5,3.5h14c1.93,0,3.5-1.57,3.5-3.5V6.5c0-1.93-1.57-3.5-3.5-3.5Zm2.5,11.5c0,1.38-1.12,2.5-2.5,2.5H6.5c-1.38,0-2.5-1.12-2.5-2.5V6.5c0-1.38,1.12-2.5,2.5-2.5h14c1.38,0,2.5,1.12,2.5,2.5V14.5Zm-4,6c0,.28-.22,.5-.5,.5H4.5c-2.48,0-4.5-2.02-4.5-4.5V8.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v8c0,1.93,1.57,3.5,3.5,3.5h14c.28,0,.5,.22,.5,.5Z"
    }
  ) });
};

// src/components/icons/monkeySVG/index.tsx
var import_jsx_runtime82 = require("react/jsx-runtime");
var Monkey = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m15,6c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm4-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm5,1c0,.828-.672,1.5-1.5,1.5-.294,0-.565-.088-.797-.233-.332.975-.926,1.829-1.703,2.472v13.261h1.5c.276,0,.5.224.5.5s-.224.5-.5.5H7.5c-4.136,0-7.5-3.364-7.5-7.5V5.5C0,2.21,2.21,0,5.5,0c.276,0,.5.224.5.5s-.224.5-.5.5C2.724,1,1,2.724,1,5.5v11c0,2.316,1.222,4.348,3.05,5.499.216-2.635,1.478-10.84,8.546-12.63-.581-.586-1.028-1.304-1.3-2.102-.231.146-.503.233-.797.233-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5c.205,0,.4.042.578.116.425-2.613,2.692-4.616,5.422-4.616s4.997,2.003,5.422,4.616c.178-.074.373-.116.578-.116.828,0,1.5.672,1.5,1.5Zm-11.531-2.461c.506-.34,1.116-.539,1.781-.539.839,0,1.647.33,2.25.91.602-.581,1.411-.91,2.25-.91.664,0,1.274.198,1.78.537-.732-1.496-2.255-2.537-4.03-2.537s-3.299,1.042-4.031,2.539Zm6.531,19.461v-6c0-1.103-.897-2-2-2s-2,.897-2,2v6h4Zm0-12.607c-.751.385-1.599.607-2.5.607-1.071,0-2.069-.313-2.915-.845,0,0,0,0,0,0-7.387,1.254-8.424,9.743-8.566,12.35.765.318,1.603.495,2.482.495h6.5v-6c0-1.654,1.346-3,3-3,.771,0,1.468.301,2,.78v-4.388Zm1.937-4.265c-.061-1.201-.995-2.128-2.187-2.128-.629,0-1.233.268-1.658.736-.309.337-.877.335-1.182.001-.427-.469-1.031-.737-1.66-.737-1.196,0-2.133.936-2.185,2.148.317,2.173,2.175,3.852,4.435,3.852s4.128-1.69,4.437-3.872Z"
    }
  ) });
};

// src/components/icons/planeSVG/index.tsx
var import_jsx_runtime83 = require("react/jsx-runtime");
var Plane = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M10.471,24c-.806,0-1.537-.375-2.006-1.029-.47-.654-.591-1.467-.333-2.23l2.042-5.741H5.388l-1.228,1.872c-.464,.707-1.246,1.128-2.091,1.128-.676,0-1.306-.328-1.689-.877-.385-.55-.477-1.254-.246-1.885l1.129-3.23L.067,8.875c-.158-.809,.032-1.564,.484-2.108,.411-.494,.982-.766,1.608-.766,.842,0,1.621,.418,2.085,1.12l1.245,1.88h4.684l-2.039-5.733c-.261-.771-.14-1.583,.33-2.237,.469-.654,1.2-1.029,2.006-1.029,1.037,0,1.99,.565,2.487,1.476l4.307,7.524h3.602c1.531,0,2.861,1.075,3.093,2.5h0c.144,.881-.102,1.771-.673,2.443s-1.404,1.057-2.286,1.057h-3.735l-4.312,7.533c-.492,.902-1.445,1.467-2.482,1.467ZM5.118,14h5.765c.162,0,.314,.079,.408,.212s.117,.303,.062,.456l-2.277,6.401c-.15,.447-.078,.93,.201,1.319s.714,.612,1.193,.612c.671,0,1.288-.366,1.61-.956l4.46-7.793c.089-.155,.254-.251,.434-.251h4.025c.588,0,1.144-.257,1.524-.705,.387-.455,.546-1.035,.448-1.634h0c-.154-.947-1.06-1.661-2.106-1.661h-3.892c-.18,0-.345-.096-.434-.251L12.086,1.964c-.327-.598-.944-.964-1.615-.964-.479,0-.914,.223-1.193,.612s-.352,.873-.198,1.327l2.274,6.394c.055,.153,.031,.323-.062,.456s-.246,.212-.408,.212H5.222c-.168,0-.324-.084-.417-.224l-1.394-2.104c-.457-.69-1.533-.935-2.091-.266-.265,.318-.375,.767-.295,1.2l1.236,3.216c.042,.11,.044,.232,.005,.343l-1.191,3.41c-.122,.335-.076,.688,.124,.975s.516,.451,.865,.451c.512,0,.981-.253,1.26-.677l1.376-2.097c.093-.141,.249-.226,.418-.226Z"
    }
  ) });
};

// src/components/icons/radioSVG/index.tsx
var import_jsx_runtime84 = require("react/jsx-runtime");
var Radio = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m19.5,6H6.901L21.661.973c.261-.089.401-.373.312-.634-.088-.261-.373-.401-.634-.312L3.401,6.136c-1.952.492-3.401,2.262-3.401,4.364v9c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-9c0-2.481-2.019-4.5-4.5-4.5Zm3.5,13.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-9c0-1.425.856-2.653,2.081-3.199l.596-.203c.264-.064.54-.098.823-.098h15c1.93,0,3.5,1.57,3.5,3.5v9Zm-14-6c0,.276-.224.5-.5.5H3.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5c.276,0,.5.224.5.5Zm0,3c0,.276-.224.5-.5.5H3.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5c.276,0,.5.224.5.5Zm0,3c0,.276-.224.5-.5.5H3.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5c.276,0,.5.224.5.5Zm0-9c0,.276-.224.5-.5.5H3.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5c.276,0,.5.224.5.5Zm7-.5c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm0-6c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Z"
    }
  ) });
};

// src/components/icons/sheepSVG/index.tsx
var import_jsx_runtime85 = require("react/jsx-runtime");
var Sheep = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m22.541,14.007c-.264-.041-.53.137-.576.41-.121.718-.557,1.346-1.195,1.722-.483.286-.771.792-.77,1.362,0,.927-.498,1.783-1.271,2.181-.695.36-1.386.417-2.056.168-.474-.175-.991-.048-1.323.321-.791.881-2.187,1.08-3.186.432-.404-.261-.926-.261-1.33,0-.999.646-2.394.448-3.186-.432-.331-.368-.85-.495-1.323-.321-.667.248-1.358.192-2.056-.168-.772-.398-1.271-1.254-1.271-2.187,0-.563-.286-1.07-.77-1.356-.771-.454-1.23-1.253-1.23-2.139s.46-1.685,1.23-2.139c.483-.286.771-.792.77-1.362,0-.927.498-1.783,1.271-2.181.693-.359,1.383-.416,2.055-.169.469.173.992.049,1.325-.321.663-.739,1.754-1.019,2.68-.683.256.094.546-.041.64-.3.095-.26-.04-.546-.3-.641-1.304-.473-2.833-.081-3.763.954-.059.064-.147.084-.236.052-.93-.342-1.918-.266-2.859.219-1.102.568-1.812,1.773-1.812,3.079,0,.205-.104.389-.277.492-1.079.635-1.723,1.757-1.723,3s.644,2.365,1.723,3c.174.103.278.287.277.5,0,1.297.71,2.503,1.812,3.071.391.201.789.315,1.188.375v1.555c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-.867c1.065.494,2.366.463,3.378-.19.074-.049.17-.049.244,0,.564.364,1.213.557,1.878.557.944,0,1.843-.396,2.5-1.075v1.575c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-1.854c.063-.029.126-.044.188-.076,1.102-.568,1.812-1.773,1.812-3.079,0-.205.104-.389.277-.492.893-.526,1.503-1.407,1.674-2.417.046-.272-.138-.53-.41-.577Zm-15.541,8.493c0,.276-.225.5-.5.5s-.5-.224-.5-.5v-1.541c.226-.034.451-.088.672-.17.089-.034.177-.012.233.051.033.036.073.064.107.099-.003.021-.012,1.562-.012,1.562Zm11,0c0,.276-.225.5-.5.5s-.5-.224-.5-.5v-1.541c.331.05.666.036,1-.014v1.555Zm-1-15.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm3,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm3.458-3.518c-.706-.167-1.912-.402-3.277-.574-.21-.157-.435-.293-.671-.412.146-.77.453-1.496,1.989-1.496.276,0,.5-.224.5-.5s-.224-.5-.5-.5c-2.27,0-2.773,1.365-2.94,2.14-.342-.083-.693-.14-1.06-.14s-.719.056-1.06.14c-.166-.774-.669-2.14-2.94-2.14-.276,0-.5.224-.5.5s.224.5.5.5c1.536,0,1.843.726,1.989,1.496-.236.119-.461.254-.671.412-1.364.172-2.571.407-3.277.574-.475.113-.689.658-.431,1.072.407.653,1.148,1.104,1.955,1.298-.031.213-.065.426-.065.648v3.879c0,2.268,1.683,3.621,4.5,3.621s4.5-1.354,4.5-3.621v-3.879c0-.222-.034-.435-.065-.648.807-.194,1.548-.644,1.955-1.298.258-.414.044-.96-.431-1.072Zm-2.458,6.897c0,2.281-2.192,2.621-3.5,2.621s-3.5-.34-3.5-2.621v-3.879c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v3.879Z"
    }
  ) });
};

// src/components/icons/rocketSVG/index.tsx
var import_jsx_runtime86 = require("react/jsx-runtime");
var Rocket = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M15.5,6c-1.378,0-2.5,1.122-2.5,2.5s1.122,2.5,2.5,2.5,2.5-1.122,2.5-2.5-1.122-2.5-2.5-2.5Zm0,4c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5ZM24,2.544c0-1.403-1.142-2.544-2.559-2.544-5.16,.147-9.295,2.269-12.889,6.645-1.62,.019-3.237,.412-4.686,1.139-1.722,.865-3.09,2.169-3.661,3.488-.359,.83-.264,1.828,.247,2.605,.469,.713,1.2,1.122,2.006,1.122h2.541c1.326,0,2.335,.337,2.999,1.001,.683,.683,1.001,1.604,1.001,2.899v2.541c0,.824,.441,1.605,1.18,2.091,.473,.311,1.007,.47,1.535,.47,.347,0,.69-.068,1.012-.208,1.319-.57,2.624-1.938,3.488-3.661,.727-1.448,1.12-3.065,1.139-4.686,4.376-3.593,6.498-7.73,6.645-12.903ZM1.289,13.329c-.328-.5-.391-1.135-.165-1.66,.48-1.11,1.673-2.229,3.191-2.991,1.066-.535,2.233-.87,3.421-.987-.105,.141-.21,.284-.314,.43-1.603,2.235-2.861,4.969-3.262,5.879h-1.701c-.464,0-.89-.245-1.17-.671Zm14.034,6.355c-.763,1.519-1.881,2.711-2.991,3.191-.494,.215-1.107,.144-1.602-.18-.463-.305-.729-.762-.729-1.255v-1.693c.923-.382,3.649-1.571,5.879-3.171,.145-.104,.288-.209,.43-.314-.117,1.188-.452,2.355-.987,3.421Zm-.026-3.919c-1.873,1.343-4.178,2.412-5.3,2.897-.041-1.439-.465-2.543-1.29-3.369-.812-.812-1.972-1.245-3.45-1.29,.516-1.128,1.637-3.428,2.979-5.3C11.893,3.601,16.098,1.153,21.456,1c.852,0,1.544,.693,1.544,1.53-.153,5.372-2.601,9.577-7.704,13.235ZM1.732,18.732c-.604,.603-1.461,2.702-1.701,3.752-.096,.418,.029,.849,.332,1.152,.236,.236,.549,.363,.874,.363,.093,0,.186-.01,.279-.032,1.05-.24,3.148-1.097,3.752-1.701,.473-.472,.732-1.1,.732-1.768s-.26-1.296-.732-1.768c-.943-.944-2.592-.944-3.535,0Zm2.828,2.828c-.391,.391-2.223,1.194-3.268,1.433-.111,.025-.188-.029-.222-.064-.035-.035-.09-.11-.064-.222,.239-1.045,1.042-2.877,1.433-3.268,.283-.283,.66-.439,1.061-.439s.777,.156,1.061,.439,.439,.66,.439,1.061-.156,.777-.439,1.061Z"
    }
  ) });
};

// src/components/icons/moneyBagSVG/index.tsx
var import_jsx_runtime87 = require("react/jsx-runtime");
var MoneyBag = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M13.83,5.268c1.11-.592,2.461-1.581,3.06-3.087,.193-.486,.133-1.018-.166-1.458-.307-.453-.815-.724-1.36-.724h-6.728c-.544,0-1.053,.271-1.36,.724-.299,.44-.359,.972-.167,1.458,.599,1.506,1.95,2.495,3.06,3.087C5.238,6.62,1,13.094,1,18.25c0,3.17,2.58,5.75,5.75,5.75h10.5c3.17,0,5.75-2.58,5.75-5.75,0-5.156-4.238-11.63-9.17-12.982ZM8.039,1.812c-.094-.236,0-.432,.064-.526,.121-.179,.32-.285,.533-.285h6.728c.212,0,.412,.106,.533,.285,.064,.095,.158,.29,.064,.527-.788,1.982-3.337,2.952-3.961,3.163-.625-.21-3.169-1.174-3.96-3.164Zm9.211,21.188H6.75c-2.619,0-4.75-2.131-4.75-4.75,0-5.349,4.849-12.25,10-12.25s10,6.901,10,12.25c0,2.619-2.131,4.75-4.75,4.75Zm-1.25-5.626c0,1.448-1.178,2.626-2.626,2.626h-.874v1.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-1.5h-.926c-.979,0-1.891-.526-2.381-1.374-.139-.239-.057-.545,.182-.683,.239-.14,.544-.057,.683,.182,.312,.54,.894,.875,1.516,.875h2.8c.896,0,1.626-.729,1.626-1.626,0-.803-.575-1.478-1.368-1.605l-3.422-.55c-1.28-.206-2.209-1.296-2.209-2.593,0-1.448,1.178-2.626,2.626-2.626h.874v-1.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v1.5h.926c.978,0,1.891,.527,2.381,1.375,.139,.239,.057,.545-.182,.683-.241,.138-.544,.056-.683-.182-.312-.54-.894-.875-1.516-.875h-2.8c-.896,0-1.626,.729-1.626,1.626,0,.803,.575,1.478,1.368,1.605l3.422,.55c1.28,.206,2.209,1.296,2.209,2.593Z"
    }
  ) });
};

// src/components/icons/stepsSVG/index.tsx
var import_jsx_runtime88 = require("react/jsx-runtime");
var Steps = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17.944,2c-2.431,0-4.944,2.618-4.944,7,0,1.471,.707,2.98,1.456,4.58,.759,1.621,1.544,3.297,1.544,4.92v2c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-2c0-1.732,.275-2.987,.542-4.201,.235-1.072,.458-2.085,.458-3.299,0-8.748-5.436-9-6.056-9Zm4.056,16.5v2c0,1.378-1.121,2.5-2.5,2.5s-2.5-1.122-2.5-2.5v-2c0-.167-.007-.334-.02-.5h5.028c-.005,.163-.008,.329-.008,.5Zm.565-4.415c-.187,.854-.393,1.789-.497,2.915h-5.239c-.284-1.315-.884-2.595-1.469-3.845-.7-1.495-1.361-2.907-1.361-4.155,0-3.756,2.006-6,3.944-6,.518,0,5.056,.225,5.056,8,0,1.106-.211,2.067-.435,3.085ZM6.056,0C5.436,0,0,.252,0,9c0,1.214,.223,2.227,.458,3.299,.267,1.213,.542,2.468,.542,4.201v2c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-2c0-1.623,.785-3.299,1.544-4.92,.749-1.599,1.456-3.109,1.456-4.58C11,2.618,8.486,0,6.056,0Zm.944,16.5v2c0,1.378-1.121,2.5-2.5,2.5s-2.5-1.122-2.5-2.5v-2c0-.171-.003-.337-.008-.5H7.02c-.013,.166-.02,.333-.02,.5Zm1.639-5.345c-.585,1.25-1.185,2.53-1.469,3.845H1.931c-.104-1.126-.309-2.061-.497-2.915-.224-1.018-.435-1.979-.435-3.085C1,1.225,5.538,1,6.056,1c1.938,0,3.944,2.244,3.944,6,0,1.248-.661,2.66-1.361,4.155Z"
    }
  ) });
};

// src/components/icons/bucketSVG/index.tsx
var import_jsx_runtime89 = require("react/jsx-runtime");
var Bucket = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.38,8.853c-.475-.542-1.16-.853-1.88-.853h-.566C20.433,3.479,16.603,0,12,0S3.567,3.479,3.066,8h-.566c-.72,0-1.405,.311-1.88,.853S-.073,10.116,.021,10.831l1.12,8.396c.363,2.721,2.707,4.772,5.452,4.772h10.812c2.745,0,5.089-2.052,5.451-4.772l1.121-8.397c.095-.714-.124-1.436-.599-1.978ZM12,1c4.054,0,7.434,3.035,7.93,7H4.07c.495-3.965,3.876-7,7.93-7Zm10.986,9.698l-1.12,8.396c-.296,2.227-2.214,3.905-4.46,3.905H6.594c-2.246,0-4.164-1.679-4.461-3.905L1.014,10.699c-.058-.43,.073-.862,.358-1.188s.696-.512,1.128-.512H21.5c.432,0,.843,.187,1.128,.512s.416,.758,.358,1.187Zm-10.486,1.802v7c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-7c0-.276,.224-.5,.5-.5s.5,.224,.5,.5Zm5.5,0v7c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-7c0-.276,.224-.5,.5-.5s.5,.224,.5,.5Zm-11,0v7c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-7c0-.276,.224-.5,.5-.5s.5,.224,.5,.5Z"
    }
  ) });
};

// src/components/icons/vanSVG/index.tsx
var import_jsx_runtime90 = require("react/jsx-runtime");
var Van = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.439,10.133l-2.427-5.461c-.722-1.624-2.335-2.672-4.112-2.672H4.5C2.019,2,0,4.019,0,6.5V15.5c0,1.653,1.437,2.96,3,3.367v1.133c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h6v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1.036c1.694-.243,3-1.704,3-3.464v-2.727c0-.917-.188-1.805-.561-2.64Zm-3.341-5.055l2.187,4.921h-7.285V3h1.9c1.382,0,2.638,.816,3.198,2.079Zm-12.099,4.921V3h6v7h-6ZM4.5,3h2.5v7H1v-3.5c0-1.93,1.57-3.5,3.5-3.5Zm3.5,17c0,1.103-.897,2-2,2s-2-.897-2-2v-1h4v1Zm10,2c-1.103,0-2-.897-2-2v-1h4v1c0,1.103-.897,2-2,2Zm5-6.5c0,1.378-1.121,2.5-2.5,2.5H4c-1.359,0-3-1.115-3-2.5v-4.5H22.706c.195,.569,.294,1.164,.294,1.773v2.727Z"
    }
  ) });
};

// src/components/icons/signalSVG/index.tsx
var import_jsx_runtime91 = require("react/jsx-runtime");
var Signal = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m6,15v6c0,1.654-1.346,3-3,3s-3-1.346-3-3v-6c0-1.654,1.346-3,3-3s3,1.346,3,3ZM24,3v18c0,1.654-1.346,3-3,3s-3-1.346-3-3V3c0-1.654,1.346-3,3-3s3,1.346,3,3Zm-1,0c0-1.103-.897-2-2-2s-2,.897-2,2v18c0,1.103.897,2,2,2s2-.897,2-2V3Zm-11,3c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3s3-1.346,3-3v-12c0-1.654-1.346-3-3-3Z"
    }
  ) });
};

// src/components/icons/connectionSVG/index.tsx
var import_jsx_runtime92 = require("react/jsx-runtime");
var Connection = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,14c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Zm0-3c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm8.49,9.49c4.68-4.68,4.68-12.29,0-16.97-.2-.2-.51-.2-.71,0s-.2,.51,0,.71c4.29,4.29,4.29,11.27,0,15.56-.2,.2-.2,.51,0,.71,.1,.1,.23,.15,.35,.15s.26-.05,.35-.15Zm-3.54-3.54c2.73-2.73,2.73-7.17,0-9.9-.2-.2-.51-.2-.71,0s-.2,.51,0,.71c2.34,2.34,2.34,6.15,0,8.49-.2,.2-.2,.51,0,.71,.1,.1,.23,.15,.35,.15s.26-.05,.35-.15Zm-12.73,3.54c.2-.2,.2-.51,0-.71C-.07,15.49-.07,8.51,4.22,4.22c.2-.2,.2-.51,0-.71s-.51-.2-.71,0C-1.16,8.19-1.16,15.81,3.51,20.49c.1,.1,.23,.15,.35,.15s.26-.05,.35-.15Zm3.54-3.54c.2-.2,.2-.51,0-.71-2.34-2.34-2.34-6.15,0-8.49,.2-.2,.2-.51,0-.71s-.51-.2-.71,0c-1.32,1.32-2.05,3.08-2.05,4.95s.73,3.63,2.05,4.95c.1,.1,.23,.15,.35,.15s.26-.05,.35-.15Z"
    }
  ) });
};

// src/components/icons/sirenSVG/index.tsx
var import_jsx_runtime93 = require("react/jsx-runtime");
var Siren = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m20.604,6.429c-.196-.194-.198-.511-.004-.707l2.544-2.573c.193-.197.51-.198.707-.004.196.194.198.511.004.707l-2.544,2.573c-.098.099-.227.148-.355.148-.127,0-.254-.048-.352-.145Zm-3.726-2.729c.073.038.152.056.229.056.181,0,.355-.098.444-.27l1.419-2.737c.127-.245.031-.547-.214-.674-.244-.128-.547-.033-.674.214l-1.419,2.737c-.127.245-.031.547.214.674ZM2.613,6.348c.098.099.227.148.355.148.127,0,.254-.048.352-.145.196-.194.198-.511.004-.707L.855,3.148c-.194-.197-.51-.197-.707-.004-.196.194-.198.511-.004.707l2.469,2.497Zm3.834-2.862c.089.172.263.27.444.27.078,0,.156-.018.229-.056.245-.127.341-.429.214-.674L5.917.289c-.127-.246-.429-.34-.674-.214-.245.127-.341.429-.214.674l1.418,2.737Zm17.552,18.414c0,1.158-.942,2.1-2.1,2.1H2.1c-1.158,0-2.1-.942-2.1-2.1,0-1.599,1.301-2.9,2.9-2.9h.198l.895-8.948c.23-2.31,2.156-4.052,4.478-4.052h7.059c2.322,0,4.247,1.742,4.478,4.052l.895,8.948h.198c1.599,0,2.9,1.301,2.9,2.9Zm-19.897-2.9h15.793l-.885-8.848c-.179-1.797-1.676-3.152-3.482-3.152h-7.059c-1.806,0-3.303,1.355-3.482,3.152l-.885,8.848Zm18.897,2.9c0-1.048-.852-1.9-1.9-1.9H2.9c-1.048,0-1.9.852-1.9,1.9,0,.606.494,1.1,1.1,1.1h19.8c.606,0,1.1-.494,1.1-1.1Zm-11.5-11.9h-2.075c-.774,0-1.416.581-1.491,1.341l-.251,2.1c-.033.274.163.523.437.556.021.002.041.003.06.003.25,0,.466-.187.496-.44l.252-2.11c.025-.256.239-.45.497-.45h2.075c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Z"
    }
  ) });
};

// src/components/icons/snakeSVG/index.tsx
var import_jsx_runtime94 = require("react/jsx-runtime");
var Snake = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m18,4c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm6,17c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3s1.346-3,3-3h1.589l-1.181-1.419c-.575-.691-1.239-2.407-1.394-3.599-.074-.577.14-1.153.572-1.54.427-.381,1.015-.526,1.57-.392,1.061.26,2.874,1.015,3.768,1.691-.57-1.371-.926-2.81-.926-4.241,0-2.378,1.072-3.848,1.972-4.662,1.59-1.439,4.694-2.138,6.114-2.307.298-.036.581-.162.793-.354,1.777-1.607,4.489-1.545,6.175.141.145.145.572.577,1.098,1.112,1.123,1.142,1.122,2.999,0,4.141-.526.535-.953.967-1.098,1.112-1.648,1.648-4.327,1.739-6.097.209-.316-.273-.717-.406-1.099-.364-.898.099-1.858.406-1.858.973,0,.977,0,2.315,2.242,4.934,1.081,1.262,3.303,3.607,4.904,4.566h.854c1.654,0,3,1.346,3,3ZM8,8.5c0,2.745,1.444,5.558,3.165,7.756,0,0,1.041,1.242,1.543,1.744h5.721c-1.476-1.193-3.075-2.897-3.948-3.916-2.482-2.899-2.482-4.515-2.482-5.584,0-.5.268-1.694,2.75-1.967.661-.069,1.337.147,1.862.601,1.377,1.19,3.457,1.121,4.736-.159.144-.144.569-.574,1.092-1.106.743-.755.743-1.983,0-2.738-.523-.532-.948-.962-1.092-1.106-1.309-1.309-3.417-1.355-4.797-.106-.366.33-.843.545-1.346.605-1.523.181-4.26.877-5.562,2.055-.75.678-1.643,1.909-1.643,3.92Zm-2.13,9.5h5.459c-.301-.333-.6-.687-.892-1.057l-2.887-3.206c-.394-.473-2.389-1.41-3.631-1.714-.241-.059-.482.001-.666.166-.189.169-.279.412-.247.666.142,1.102.756,2.59,1.17,3.088l1.693,2.058Zm17.13,3c0-1.103-.897-2-2-2H3c-1.103,0-2,.897-2,2s.897,2,2,2h18c1.103,0,2-.897,2-2Z"
    }
  ) });
};

// src/components/icons/sortSVG/index.tsx
var import_jsx_runtime95 = require("react/jsx-runtime");
var Sort = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M11.854,18.561c.195,.195,.195,.512,0,.707l-4.293,4.293c-.283,.283-.66,.439-1.061,.439s-.777-.156-1.061-.439L1.146,19.268c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l4.146,4.146V.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5V22.707l4.146-4.146c.195-.195,.512-.195,.707,0ZM22.854,4.732L18.561,.439c-.566-.566-1.555-.566-2.121,0l-4.293,4.293c-.195,.195-.195,.512,0,.707s.512,.195,.707,0L17,1.293V23.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V1.293l4.146,4.146c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707Z"
    }
  ) });
};

// src/components/icons/shuttleSVG/index.tsx
var import_jsx_runtime96 = require("react/jsx-runtime");
var Shuttle = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M21.759,9.122c-1.321-.734-2.886-1.122-4.525-1.122h-3.459l-3.193-5.7c-.795-1.419-2.299-2.3-3.926-2.3h-1.156c-1.378,0-2.5,1.122-2.5,2.5v3c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V2.5c0-.827,.673-1.5,1.5-1.5h1.156c1.265,0,2.435,.686,3.054,1.789l2.919,5.211H2.5c-1.378,0-2.5,1.122-2.5,2.5v3c0,1.378,1.122,2.5,2.5,2.5H12.628l-2.919,5.21c-.619,1.104-1.789,1.79-3.054,1.79h-1.156c-.827,0-1.5-.673-1.5-1.5v-3c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v3c0,1.378,1.122,2.5,2.5,2.5h1.156c1.626,0,3.131-.881,3.926-2.301l3.193-5.699h3.459c1.64,0,3.204-.388,4.525-1.122,1.487-.827,2.241-1.795,2.241-2.878s-.754-2.052-2.241-2.878Zm-5.721,5.878H5v-6h11.038c.405,.237,1.962,1.262,1.962,3s-1.557,2.763-1.962,3ZM1,13.5v-3c0-.827,.673-1.5,1.5-1.5h1.5v6h-1.5c-.827,0-1.5-.673-1.5-1.5Zm20.272,.504c-1.053,.585-2.287,.921-3.592,.984,.658-.654,1.319-1.645,1.319-2.988s-.662-2.335-1.319-2.988c1.305,.063,2.539,.399,3.592,.984,.788,.438,1.728,1.142,1.728,2.004s-.939,1.566-1.728,2.004Z"
    }
  ) });
};

// src/components/icons/starsSVG/index.tsx
var import_jsx_runtime97 = require("react/jsx-runtime");
var Stars = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M19.333,2.94l1.27,.449,.423,1.269c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.419,1.257-1.256,.393c-.205,.064-.347,.252-.351,.468s.13,.409,.333,.48Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M23.686,19.036l-2.658-1.063-1.063-2.658c-.15-.38-.777-.38-.928,0l-1.062,2.653-2.651,1.003c-.191,.073-.319,.254-.323,.458s.117,.391,.306,.47l2.665,1.123,1.065,2.663c.075,.19,.26,.314,.464,.314s.389-.125,.464-.314l1.063-2.658,2.658-1.063c.19-.076,.314-.26,.314-.464s-.124-.388-.314-.464Zm-3.229,1.143c-.127,.051-.228,.152-.278,.279l-.679,1.696-.679-1.696c-.049-.124-.146-.223-.27-.275l-1.705-.719,1.688-.639c.131-.05,.235-.152,.287-.282l.679-1.696,.679,1.696c.051,.127,.151,.228,.278,.279l1.696,.679-1.696,.679Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M18.935,12.459c.647-.207,1.065-.78,1.065-1.459s-.418-1.252-1.077-1.463l-5.767-1.692-1.678-5.759c-.198-.65-.766-1.076-1.445-1.085-.666,.028-1.257,.402-1.479,1.063l-1.709,5.78-5.76,1.679c-.65,.198-1.076,.766-1.085,1.445-.009,.679,.402,1.257,1.063,1.479l5.782,1.709,1.696,5.78c.207,.647,.78,1.065,1.459,1.065s1.252-.418,1.463-1.077l1.693-5.767,5.767-1.692,.012-.004Zm-.3-.954l-6.022,1.768c-.164,.048-.291,.176-.339,.339l-1.766,6.018c-.11,.343-.416,.37-.507,.37-.091,0-.397-.027-.503-.358l-1.77-6.029c-.048-.163-.175-.291-.338-.339l-6.025-1.781c-.342-.114-.364-.421-.363-.512,.001-.091,.032-.397,.371-.5l6.017-1.753c.164-.047,.292-.175,.34-.338l1.781-6.025c.112-.334,.407-.363,.505-.363h.006c.091,.001,.397,.032,.5,.371l1.753,6.016c.048,.164,.175,.292,.339,.34l6.018,1.766c.344,.11,.37,.416,.37,.507,0,.091-.026,.394-.365,.505Z"
      }
    )
  ] });
};

// src/components/icons/terminalSVG/index.tsx
var import_jsx_runtime98 = require("react/jsx-runtime");
var Terminal = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M4.874,17.955c-.128,0-.256-.049-.354-.146-.195-.195-.195-.512,0-.707l4.041-4.041c.585-.585,.585-1.536,0-2.121L4.52,6.898c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l4.041,4.041c.975,.975,.975,2.561,0,3.535l-4.041,4.041c-.098,.098-.226,.146-.354,.146Zm19.126,1.545V4.5c0-2.481-2.019-4.5-4.5-4.5H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5ZM19.5,1c1.93,0,3.5,1.57,3.5,3.5v15c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15Zm.5,16.5c0-.276-.224-.5-.5-.5h-7c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h7c.276,0,.5-.224,.5-.5Z"
    }
  ) });
};

// src/components/icons/storeSVG/index.tsx
var import_jsx_runtime99 = require("react/jsx-runtime");
var Store = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime99.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M24,8.5c0-.041-.005-.082-.015-.121L21.985,.379c-.056-.223-.256-.379-.485-.379H2.5c-.229,0-.429,.156-.485,.379L.015,8.379c-.01,.04-.015,.08-.015,.121,0,.951,.382,1.815,1,2.447v9.553c0,1.93,1.57,3.5,3.5,3.5h7c1.93,0,3.5-1.57,3.5-3.5V11.662c.623-.297,1.146-.773,1.5-1.361,.613,1.017,1.728,1.699,3,1.699h1c.536,0,1.045-.122,1.5-.338v11.838c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V10.987c0-.013,0-.026-.002-.039,.619-.632,1.002-1.496,1.002-2.449Zm-12.5,14.5H4.5c-1.378,0-2.5-1.122-2.5-2.5v-2.5H14v2.5c0,1.378-1.122,2.5-2.5,2.5Zm2.5-6H2v-5.338c.455,.217,.964,.338,1.5,.338h1c1.272,0,2.387-.682,3-1.699,.613,1.017,1.728,1.699,3,1.699h3c.17,0,.337-.012,.5-.036v5.036Zm5.5-6c-1.379,0-2.5-1.122-2.5-2.5,0-.276-.224-.5-.5-.5s-.5,.224-.5,.5c0,1.378-1.121,2.5-2.5,2.5h-3c-1.378,0-2.5-1.122-2.5-2.5,0-.276-.224-.5-.5-.5s-.5,.224-.5,.5c0,1.378-1.122,2.5-2.5,2.5h-1c-.625,0-1.198-.231-1.637-.612-.019-.02-.039-.038-.06-.054-.48-.445-.786-1.074-.803-1.775L2.891,1H7v3.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V1h8v3.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V1h4.109l1.89,7.559c-.031,1.352-1.141,2.441-2.499,2.441h-1Z"
    }
  ) });
};

// src/components/icons/suitcaseSVG/index.tsx
var import_jsx_runtime100 = require("react/jsx-runtime");
var Suitcase = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M19.5,4h-1.551c-.252-2.244-2.139-4-4.449-4h-3c-2.31,0-4.197,1.756-4.449,4h-1.551C2.019,4,0,6.019,0,8.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V8.5c0-2.481-2.019-4.5-4.5-4.5ZM10.5,1h3c1.758,0,3.204,1.308,3.449,3H7.051c.245-1.692,1.691-3,3.449-3Zm12.5,18.5c0,1.93-1.57,3.5-3.5,3.5h-1.5V7.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v15.5H7V7.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v15.5h-1.5c-1.93,0-3.5-1.57-3.5-3.5V8.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v11Z"
    }
  ) });
};

// src/components/icons/tagsSVG/index.tsx
var import_jsx_runtime101 = require("react/jsx-runtime");
var Tags = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime101.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M21.68,9.108L13.204,.723C12.655,.173,11.869-.089,11.098,.013L4.209,.955c-.274,.038-.466,.29-.428,.563,.037,.273,.293,.461,.562,.428l6.889-.942c.46-.066,.934,.095,1.267,.427l8.476,8.385c1.356,1.356,1.363,3.569,.01,4.94l-.19,.199c-.209-.677-.58-1.314-1.114-1.848L11.204,4.723c-.549-.55-1.337-.812-2.106-.709l-6.889,.942c-.228,.031-.404,.213-.43,.44l-.765,6.916c-.083,.759,.179,1.503,.72,2.044l8.417,8.326c.85,.85,1.979,1.318,3.181,1.318h.014c1.208-.004,2.341-.479,3.189-1.339l3.167-3.208c.886-.898,1.317-2.081,1.292-3.257l.708-.743c1.732-1.754,1.724-4.6-.022-6.345Zm-2.688,9.643l-3.167,3.208c-.66,.669-1.542,1.039-2.481,1.042h-.011c-.935,0-1.812-.364-2.476-1.027L2.439,13.646c-.324-.324-.48-.77-.431-1.225l.722-6.528,6.502-.889c.462-.063,.934,.095,1.267,.427l8.476,8.385c1.356,1.356,1.363,3.569,.017,4.934ZM8,10c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"
    }
  ) });
};

// src/components/icons/masksSVG/index.tsx
var import_jsx_runtime102 = require("react/jsx-runtime");
var Masks = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m21.681,1.473c-1.698-.596-3.378-1.013-4.995-1.24C15.072.006,13.341-.056,11.539.049c-1.648.095-3.014,1.33-3.248,2.937l-.358,2.46c-.205.023-.412.049-.619.078-1.616.227-3.296.644-4.995,1.24C.762,7.31-.199,8.874.036,10.482l1.044,7.18c.459,3.158,4.838,5.206,7.408,6.146.354.129.721.193,1.083.193.64,0,1.267-.198,1.792-.581,1.258-.917,3.541-2.768,4.692-4.853.049-.089.068-.186.061-.28,2.598-1.023,6.379-2.994,6.804-5.917l1.044-7.181c.234-1.608-.726-3.172-2.284-3.718Zm-10.906,21.14c-.552.403-1.279.499-1.943.256-1.9-.695-6.363-2.607-6.762-5.35l-1.044-7.18c-.165-1.137.518-2.243,1.625-2.631,1.636-.574,3.252-.975,4.803-1.193.11-.016.221-.03.331-.044l-.538,3.696c-.057.391-.051.782.006,1.17-.451-.601-1.05-.952-1.667-.862-.754.109-1.3.838-1.504,1.794-.068.318.203.605.524.559l2.58-.369c.129-.018.235-.087.306-.181.269.759.71,1.497,1.241,2.191-.057.008-.115.018-.174.031-1.633.362-2.802,1.667-3.258,3.284-.136.482.411.867.828.588,1.482-.991,3.204-1.596,4.76-1.64.604.532,1.201.997,1.718,1.376.54.395,1.182.599,1.832.599.123,0,.247-.008.371-.023-1.134,1.674-2.971,3.151-4.036,3.929ZM22.975,5.047l-1.044,7.181c-.399,2.743-4.861,4.655-6.761,5.35-.665.244-1.402.141-1.971-.276-1.625-1.189-5.361-4.25-4.962-6.992l1.044-7.18c.166-1.139,1.14-2.014,2.316-2.083.548-.032,1.089-.047,1.622-.047,1.154,0,2.269.074,3.329.223,1.529.215,3.19.627,4.803,1.193,1.107.388,1.791,1.495,1.625,2.631Zm-4.144,6.243c-.996,1.336-2.537,2.134-4.181,1.902-1.643-.233-2.897-1.43-3.479-2.989-.181-.484.355-.922.806-.669,2.115,1.187,3.908,1.442,6.271.893.501-.116.89.451.583.863Zm.916-4.192c.068.317-.203.605-.524.559l-2.58-.369c-.321-.046-.5-.398-.346-.683.464-.861,1.191-1.41,1.947-1.301.754.109,1.3.838,1.504,1.794Zm-8.33-1.19c.464-.861,1.191-1.41,1.947-1.301.754.109,1.3.838,1.504,1.794.068.318-.203.605-.524.559l-2.58-.369c-.321-.046-.5-.398-.346-.683Z"
    }
  ) });
};

// src/components/icons/trashSVG/index.tsx
var import_jsx_runtime103 = require("react/jsx-runtime");
var Trash = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M22,4h-5V2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H2v1h2V21.5c0,1.378,1.121,2.5,2.5,2.5h11c1.379,0,2.5-1.122,2.5-2.5V5h2v-1ZM8,2c0-.551,.448-1,1-1h6c.552,0,1,.449,1,1v2H8V2Zm11,19.5c0,.827-.673,1.5-1.5,1.5H6.5c-.827,0-1.5-.673-1.5-1.5V5h14V21.5Zm-9-3.5h-1V10h1v8Zm5,0h-1V10h1v8Z"
    }
  ) });
};

// src/components/icons/turtleSVG/index.tsx
var import_jsx_runtime104 = require("react/jsx-runtime");
var Turtle = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m21.987,10.756c-.107-1.435-.661-2.915-1.577-4.259.036.001.072.003.108.003.807,0,1.564-.313,2.134-.884,1.13-1.129,1.955-3.788.738-5.006-1.22-1.217-3.876-.391-5.006.738-.616.616-.909,1.435-.88,2.244-1.337-.909-2.808-1.457-4.252-1.57-.471-.526-2.047-2.023-4.752-2.023h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c1.553,0,2.658.573,3.328,1.073-1.571.222-3.073.94-4.288,2.154-1.456,1.455-2.928,4.117-3.776,6.78-1.425.079-3.764.875-3.764,3.493,0,.276.224.5.5.5s.5-.224.5-.5c0-1.832,1.599-2.321,2.464-2.452-.687,2.683-.609,4.917.21,6.47-.452.741-.925,1.616-1.135,2.178-.179.479.287.944.765.765.561-.21,1.436-.683,2.177-1.134.851.449,1.906.675,3.127.675,1.008,0,2.13-.155,3.343-.466-.131.865-.62,2.464-2.452,2.464-.276,0-.5.224-.5.5s.224.5.5.5c2.618,0,3.414-2.339,3.493-3.764,2.663-.848,5.326-2.321,6.78-3.776,1.211-1.211,1.959-2.693,2.17-4.265.496.672,1.056,1.77,1.056,3.305v2c0,.276.224.5.5.5s.5-.224.5-.5v-2c0-2.69-1.479-4.263-2.013-4.744Zm-2.896-8.701c.61-.61,1.74-1.052,2.615-1.052.406,0,.758.095.977.313.688.689.155,2.698-.738,3.592-.762.762-2.092.762-2.854,0-.787-.787-.787-2.066,0-2.854Zm1.781,7.944h-4.752l-2.12-2.12V3.137c1.543.319,3.089,1.185,4.384,2.48s2.171,2.85,2.488,4.384Zm-10.492-.62l2.923-.783,2.14,2.14-.775,2.891c-.007.006-.014.012-.021.019s-.013.014-.019.021l-2.891.775-2.14-2.14.783-2.923Zm1.684,10.092c-.021.006-.042.011-.063.017v-4.081l2.918-.782,2.461,2.461c-1.496.978-3.427,1.858-5.316,2.385Zm-3.816-14.538c1.248-1.248,2.828-1.934,4.453-1.934h.028c.09,0,.181.004.271.008v4.634l-2.879.772-2.621-2.621c.247-.321.498-.61.747-.859Zm-1.334,1.687l2.5,2.5-.772,2.879h-4.131c.006-.021.011-.042.017-.063.527-1.889,1.407-3.82,2.385-5.316Zm-1.769,12.235c-1.118-1.118-1.423-3.219-.875-5.855h4.61l2.12,2.12v4.611c-2.637.548-4.738.244-5.855-.875Zm13.922-3.103c-.249.249-.539.5-.859.747l-2.581-2.581.782-2.918h4.591c0,.007,0,.014.001.021.073,1.732-.614,3.413-1.934,4.732Z"
    }
  ) });
};

// src/components/icons/ufoSVG/index.tsx
var import_jsx_runtime105 = require("react/jsx-runtime");
var Ufo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime105.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m18.918,11.33s.002,0,.003,0c-.005.007-.012.014-.003,0Zm-.918,2.67c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-12,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm18,.558c0,3.052-5.271,5.442-12,5.442S0,17.609,0,14.558c0-1.764,1.727-3.23,5-4.25v-.308c0-3.859,3.14-7,7-7s7,3.141,7,7v.308c3.273,1.02,5,2.486,5,4.25Zm-18-3.746c.466.312,2.12,1.188,6,1.188s5.526-.872,6-1.189v-.811c0-3.309-2.691-6-6-6s-6,2.691-6,6v.812Zm17,3.746c0-1.234-1.443-2.37-4.08-3.227.005-.006.009-.013-.003,0-.065.065-1.715,1.67-6.918,1.67s-6.982-1.749-6.918-1.67c-2.638.857-4.082,1.994-4.082,3.228,0,2.146,4.42,4.442,11,4.442s11-2.297,11-4.442Zm-17.918-3.228c.019.028.022.027,0,0h0Zm6.918,3.67c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"
    }
  ) });
};

// src/components/icons/unlockSVG/index.tsx
var import_jsx_runtime106 = require("react/jsx-runtime");
var Unlock = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime106.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M17.5,8H6.5c-.171,0-.334,.032-.5,.051v-1.051c0-3.309,2.691-6,6-6,2.245,0,4.285,1.238,5.324,3.231,.127,.246,.431,.339,.675,.212,.244-.127,.34-.43,.212-.674-1.212-2.325-3.592-3.769-6.211-3.769-3.859,0-7,3.14-7,7v1.276c-1.742,.621-3,2.271-3,4.224v7c0,2.481,2.019,4.5,4.5,4.5h11c2.481,0,4.5-2.019,4.5-4.5v-7c0-2.481-2.019-4.5-4.5-4.5Zm3.5,11.5c0,1.93-1.57,3.5-3.5,3.5H6.5c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5v7Zm-8.5-5v3c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-3c0-.276,.224-.5,.5-.5s.5,.224,.5,.5Z"
    }
  ) });
};

// src/components/icons/coinSVG/index.tsx
var import_jsx_runtime107 = require("react/jsx-runtime");
var Coin = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime107.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm4-8.626c0,1.448-1.178,2.626-2.626,2.626h-.874v1.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-1.5h-.926c-.979,0-1.893-.526-2.382-1.375-.139-.239-.057-.545,.183-.683,.238-.14,.544-.057,.683,.183,.312,.54,.894,.875,1.517,.875h2.8c.896,0,1.626-.729,1.626-1.626,0-.803-.575-1.478-1.368-1.605l-3.422-.55c-1.28-.206-2.21-1.296-2.21-2.593,0-1.448,1.178-2.626,2.626-2.626h.874v-1.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v1.5h.926c.979,0,1.892,.527,2.382,1.375,.139,.239,.057,.545-.183,.683-.236,.136-.545,.057-.683-.183-.312-.54-.894-.875-1.517-.875h-2.8c-.896,0-1.626,.729-1.626,1.626,0,.803,.575,1.478,1.368,1.605l3.422,.55c1.28,.206,2.21,1.297,2.21,2.593Z"
    }
  ) });
};

// src/components/icons/alienUserSVG/index.tsx
var import_jsx_runtime108 = require("react/jsx-runtime");
var AlienUser = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m10.049,6.951c-.71-.709-1.861-.908-2.701-.949-.362-.016-.717.117-.973.373s-.392.61-.373.972c.041.841.24,1.992.949,2.702.71.709,1.926.91,2.766.951.34,0,.667-.135.908-.375.256-.256.392-.61.373-.972-.041-.841-.24-1.992-.949-2.702Zm-.131,2.967c-.034.032-.092.076-.216.082-.939-.047-1.666-.281-2.044-.658-.377-.378-.611-1.104-.658-2.045-.005-.109.05-.182.082-.215.032-.031.099-.082.199-.082.939.047,1.683.281,2.061.658.377.378.611,1.104.658,2.045.005.109-.05.182-.082.215Zm7.707-3.543c-.256-.255-.606-.389-.972-.373-.841.041-1.992.24-2.702.949-.709.71-.908,1.861-.949,2.701-.019.362.117.717.373.973.241.24.568.375.907.375.841-.041,2.057-.242,2.767-.951.709-.71.908-1.861.949-2.701.019-.362-.117-.717-.373-.973Zm-.625.923c-.047.939-.281,1.666-.658,2.044-.378.377-1.104.611-2.045.658-.089-.005-.181-.049-.215-.082-.032-.033-.087-.105-.082-.216.047-.939.281-1.666.658-2.044.378-.377,1.12-.611,2.061-.658.101,0,.167.051.199.082.032.033.087.105.082.215h0Zm-7.283,3.703c.021,0-.021,0,0,0h0Zm4.565,0c.021,0-.021,0,0,0h0Zm2.463,4.404c1.703-2.163,3.255-4.87,3.255-7.553,0-4.329-3.589-7.852-8-7.852S4,3.522,4,7.852c0,2.683,1.552,5.39,3.255,7.553-2.603,1.363-4.255,4.062-4.255,7.033v1.062c0,.276.224.5.5.5s.5-.224.5-.5v-1.062c0-2.667,1.522-5.082,3.904-6.241.738.865,1.47,1.617,2.088,2.211.563.541,1.285.812,2.008.812s1.444-.271,2.008-.812c.617-.593,1.35-1.346,2.088-2.211,2.382,1.158,3.904,3.573,3.904,6.241v1.062c0,.276.224.5.5.5s.5-.224.5-.5v-1.062c0-2.972-1.651-5.671-4.255-7.033Zm-3.431,2.282c-.736.709-1.893.709-2.629,0-2.123-2.041-5.686-6.032-5.686-9.835,0-3.778,3.141-6.852,7-6.852s7,3.073,7,6.852c0,3.803-3.563,7.794-5.686,9.835Z"
    }
  ) });
};

// src/components/icons/astronautSVG/index.tsx
var import_jsx_runtime109 = require("react/jsx-runtime");
var Astronaut = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime109.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m15.814,15.031c1.62-.882,2.902-2.308,3.602-4.031h.584c.552,0,1-.448,1-1v-4c0-.552-.448-1-1-1h-.584c-1.189-2.929-4.065-5-7.416-5s-6.227,2.071-7.416,5h-.584c-.552,0-1,.448-1,1v4c0,.552.448,1,1,1h.584c.699,1.723,1.982,3.149,3.602,4.031-3.465.327-6.186,3.253-6.186,6.802v1.667c0,.276.224.5.5.5s.5-.224.5-.5v-1.667c0-3.217,2.616-5.833,5.833-5.833h6.334c3.217,0,5.833,2.616,5.833,5.833v1.667c0,.276.224.5.5.5s.5-.224.5-.5v-1.667c0-3.549-2.721-6.475-6.186-6.802Zm-10.814-7.031c0-3.859,3.141-7,7-7s7,3.141,7,7-3.141,7-7,7-7-3.141-7-7Zm13,13.5v2c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-.827-.673-1.5-1.5-1.5h-7c-.827,0-1.5.673-1.5,1.5v2c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-1.379,1.121-2.5,2.5-2.5h7c1.379,0,2.5,1.121,2.5,2.5Zm-.5-14c0-.604-.477-1.5-1.5-1.5h-7.899c-1.03,0-1.601.887-1.601,1.5,0,3.032,2.468,5.5,5.5,5.5s5.5-2.468,5.5-5.5Zm-10,0c0-.088.158-.5.601-.5h7.899c.447,0,.5.495.5.5,0,2.481-2.019,4.5-4.5,4.5s-4.5-2.019-4.5-4.5Z"
    }
  ) });
};

// src/components/icons/robotSVG/index.tsx
var import_jsx_runtime110 = require("react/jsx-runtime");
var Robot = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m21,22.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-2.481-2.019-4.5-4.5-4.5h-7c-2.481,0-4.5,2.019-4.5,4.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-3.032,2.467-5.5,5.5-5.5h7c3.033,0,5.5,2.468,5.5,5.5Zm1-15v3c0,.827-.673,1.5-1.5,1.5h-.536c-.243,1.694-1.704,3-3.464,3H7.5c-1.76,0-3.221-1.306-3.464-3h-.536c-.827,0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5,1.5-1.5h.5v-.5c0-1.93,1.57-3.5,3.5-3.5h4V.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5h4c1.93,0,3.5,1.57,3.5,3.5v.5h.5c.827,0,1.5.673,1.5,1.5ZM3.5,11h.5v-4h-.5c-.276,0-.5.225-.5.5v3c0,.275.224.5.5.5Zm15.5.5v-6c0-1.379-1.122-2.5-2.5-2.5H7.5c-1.378,0-2.5,1.121-2.5,2.5v6c0,1.379,1.122,2.5,2.5,2.5h9c1.378,0,2.5-1.121,2.5-2.5Zm2-4c0-.275-.224-.5-.5-.5h-.5v4h.5c.276,0,.5-.225.5-.5v-3Zm-10,1.5c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm-1,0c0-.552-.449-1-1-1s-1,.448-1,1,.449,1,1,1,1-.448,1-1Zm7,0c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm-1,0c0-.552-.449-1-1-1s-1,.448-1,1,.449,1,1,1,1-.448,1-1Z"
    }
  ) });
};

// src/components/icons/videoCamSVG/index.tsx
var import_jsx_runtime111 = require("react/jsx-runtime");
var VideoCam = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime111.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M24,7.64v8.666c0,.635-.353,1.206-.92,1.489-.238,.119-.493,.177-.747,.177-.353,0-.702-.113-.997-.334l-2.336-2.327v.19c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5H14.5c2.481,0,4.5,2.019,4.5,4.5v.157l2.281-2.301c.563-.428,1.23-.489,1.799-.205,.568,.284,.92,.854,.92,1.489Zm-6,.86c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5H14.5c1.93,0,3.5-1.57,3.5-3.5v-7Zm5-.86c0-.257-.138-.48-.368-.595-.23-.115-.491-.091-.697,.062l-2.936,2.97v3.821l2.989,2.986c.152,.108,.412,.133,.643,.017,.23-.115,.368-.337,.368-.595V7.64Z"
    }
  ) });
};

// src/components/icons/walletSVG/index.tsx
var import_jsx_runtime112 = require("react/jsx-runtime");
var Wallet = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime112.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M21.5,6H4.5c-1.146,0-2.221-.567-2.872-1.499,.634-.907,1.685-1.501,2.872-1.501H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H4.5C2.015,2,0,4.015,0,6.5v11c0,2.485,2.015,4.5,4.5,4.5H21.5c1.381,0,2.5-1.119,2.5-2.5V8.5c0-1.381-1.119-2.5-2.5-2.5Zm1.5,13.5c0,.827-.673,1.5-1.5,1.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-.348,.051-.684,.146-1.001,.846,.942,2.064,1.501,3.354,1.501H21.5c.827,0,1.5,.673,1.5,1.5v11Zm-2-5.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"
    }
  ) });
};

// src/components/icons/whaleSVG/index.tsx
var import_jsx_runtime113 = require("react/jsx-runtime");
var Whale = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m15.508,8h-1.008c-2.949,0-6.206,1.77-8.49,3.319.027-1.362.144-2.513.389-3.983l.424-1.478c2.12-.536,3.813-2.318,4.171-4.432.062-.364-.051-.729-.308-1.002-.26-.276-.636-.417-1.01-.376-2.276.243-3.573,1.372-4.189,2.105C4.877,1.409,3.591.255,1.333.007.961-.037.583.105.322.381.063.656-.05,1.023.012,1.391c.3,1.756,1.479,3.3,3.073,4.082l-.228.346C.988,8.662,0,11.987,0,15.432c0,4.717,3.838,8.555,8.555,8.555h9.945c3.032,0,5.5-2.467,5.5-5.5v-1.988c0-4.683-3.81-8.495-8.492-8.499Zm7.492,10.487c0,2.481-2.019,4.5-4.5,4.5h-9.945c-4.166,0-7.555-3.389-7.555-7.555,0-3.25.932-6.384,2.693-9.064l.558-.848c.084-.129.104-.289.056-.435-.049-.146-.162-.261-.308-.312-1.549-.545-2.727-1.939-3.001-3.549-.013-.075.026-.13.052-.156.02-.021.072-.068.151-.068.008,0,.015,0,.022.001,2.767.303,3.771,2.174,3.811,2.251.085.166.256.271.441.272.002,0,.004,0,.006,0,.185,0,.354-.103.441-.266.042-.078,1.053-1.916,3.859-2.216.088-.011.153.044.175.067.024.025.062.078.05.15-.306,1.811-1.818,3.326-3.678,3.685-.185.036-.334.172-.386.353l-.519,1.818c-.304,1.798-.422,3.168-.422,4.884,0,.01,0,.02,0,.03-1.132.832-1.867,1.482-1.952,1.558-.206.184-.224.5-.04.706s.499.223.706.04c.06-.053,6.033-5.334,10.782-5.334h1.008c4.131.004,7.492,3.368,7.492,7.499v1.988Zm-6-.487c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"
    }
  ) });
};

// src/components/icons/wifiSVG/index.tsx
var import_jsx_runtime114 = require("react/jsx-runtime");
var Wifi = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime114.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,21c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Zm0-3c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm6.81-4.12c.21-.18,.23-.5,.05-.71-.16-.18-.32-.37-.5-.54-1.7-1.7-3.96-2.64-6.36-2.64s-4.66,.94-6.36,2.64c-.17,.17-.34,.35-.5,.54-.18,.21-.16,.53,.05,.71,.21,.18,.53,.16,.71-.05,.14-.17,.29-.33,.44-.48,1.51-1.51,3.52-2.34,5.66-2.34s4.15,.83,5.66,2.34c.16,.16,.3,.32,.44,.48,.1,.12,.24,.17,.38,.17,.12,0,.23-.04,.33-.12Zm5.03-4.9c.21-.19,.22-.5,.04-.71-.18-.2-.37-.39-.56-.59-3.02-3.02-7.04-4.69-11.31-4.69S3.71,4.66,.69,7.69c-.19,.19-.38,.39-.56,.59-.19,.21-.17,.52,.04,.71,.21,.18,.52,.17,.71-.04,.17-.19,.34-.37,.52-.55,2.83-2.83,6.6-4.39,10.61-4.39s7.77,1.56,10.61,4.39c.18,.18,.35,.36,.52,.55,.1,.11,.23,.17,.37,.17,.12,0,.24-.04,.33-.13Z"
    }
  ) });
};

// src/components/icons/dotFillSVG/index.tsx
var import_jsx_runtime115 = require("react/jsx-runtime");
var DotFill = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/squareFillSVG/index.tsx
var import_jsx_runtime116 = require("react/jsx-runtime");
var SquareFill = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime116.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.5,19h-5c-2.48,0-4.5-2.02-4.5-4.5v-5c0-2.48,2.02-4.5,4.5-4.5h5c2.48,0,4.5,2.02,4.5,4.5v5c0,2.48-2.02,4.5-4.5,4.5Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/eclipseSVG/index.tsx
var import_jsx_runtime117 = require("react/jsx-runtime");
var Eclipse = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    }
  ) });
};

// src/components/icons/copySVG/index.tsx
var import_jsx_runtime118 = require("react/jsx-runtime");
var Copy = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime118.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m16,18.5v1c0,2.481-2.019,4.5-4.5,4.5h-7c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5h1c.276,0,.5.224.5.5s-.224.5-.5.5h-1c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5h7c1.93,0,3.5-1.57,3.5-3.5v-1c0-.276.224-.5.5-.5s.5.224.5.5Zm8-14v7c0,2.481-2.019,4.5-4.5,4.5h-7c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5h7c2.481,0,4.5,2.019,4.5,4.5Zm-1,0c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5h7c1.93,0,3.5-1.57,3.5-3.5v-7Z"
    }
  ) });
};

// src/components/icons/bellSVG/index.tsx
var import_jsx_runtime119 = require("react/jsx-runtime");
var Bell = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M22.859,13.662l-1.898-6.836C19.844,2.807,16.151,0,11.979,0,7.577,0,3.835,3.002,2.885,7.28l-1.766,6.635c-.331,1.487,.026,3.023,.98,4.215,.955,1.188,2.376,1.87,3.9,1.87h1.122c.47,2.305,2.48,4,4.878,4s4.408-1.695,4.878-4h1.164c1.576,0,3.027-.72,3.981-1.975,.954-1.254,1.258-2.844,.836-4.363Zm-10.859,9.338c-1.849,0-3.414-1.258-3.861-3h7.723c-.448,1.742-2.012,3-3.861,3Zm9.227-5.58c-.763,1.004-1.924,1.58-3.185,1.58H6c-1.22,0-2.357-.546-3.12-1.496-.764-.952-1.049-2.182-.789-3.352l1.766-6.636C4.709,3.68,8.049,1,11.979,1c3.724,0,7.021,2.506,8.017,6.094l1.898,6.836c.338,1.216,.094,2.487-.668,3.49Z"
    }
  ) });
};

// src/components/icons/bellRingingSVG/index.tsx
var import_jsx_runtime120 = require("react/jsx-runtime");
var BellRinging = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime120.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m.212,4.908c-.226-.159-.279-.471-.12-.696C1.552,2.143,4.009.729,7.396.011c.267-.051.535.114.593.386.058.27-.115.535-.386.593-3.133.664-5.385,1.942-6.695,3.799-.097.139-.252.212-.408.212-.1,0-.2-.029-.288-.092Zm20.677,10.269l-3.959,6.447c-.803,1.308-2.138,2.16-3.663,2.341-.2.023-.398.035-.597.035-1.242,0-2.424-.475-3.349-1.322-.804.805-1.923,1.322-3.061,1.322s-2.208-.443-3.012-1.248c-.805-.804-1.248-1.874-1.248-3.012s.494-2.241,1.298-3.045l-1.812-1.809C.402,13.804-.117,12.312.06,10.791c.178-1.521,1.027-2.855,2.332-3.66l6.064-3.742c3.365-2.136,7.647-1.767,10.597.851l2.094-2.094c.195-.195.512-.195.707,0s.195.512,0,.707l-2.091,2.091c2.515,2.795,2.993,6.933,1.126,10.232Zm-12.269,6.831l-4.631-4.624c-.616.615-.989,1.485-.989,2.356s.339,1.689.955,2.305c1.23,1.232,3.434,1.196,4.665-.037Zm11.408-7.339c1.716-3.032,1.188-6.889-1.291-9.364-1.522-1.52-3.516-2.304-5.531-2.304-1.45,0-2.911.405-4.218,1.235l-6.07,3.746c-1.043.643-1.723,1.709-1.864,2.924-.141,1.215.274,2.407,1.141,3.272l7.667,7.655c.869.867,2.071,1.284,3.288,1.138,1.22-.144,2.287-.826,2.93-1.871l3.949-6.432Zm3.586,1.344c-.27-.062-.538.106-.601.374-.759,3.268-2.001,5.46-3.797,6.702-.228.157-.284.469-.127.695.097.141.253.216.411.216.099,0,.197-.028.284-.089,2.01-1.391,3.385-3.777,4.203-7.298.062-.27-.105-.538-.374-.601Z"
    }
  ) });
};

// src/components/icons/bellSilentSVG/index.tsx
var import_jsx_runtime121 = require("react/jsx-runtime");
var BellSilent = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime121.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m23.854,23.146l-3.564-3.564c.69-.314,1.291-.795,1.763-1.416.884-1.165,1.167-2.641.776-4.048l-2.048-7.444c-1.092-3.93-4.704-6.674-8.782-6.674-2.998,0-5.752,1.429-7.448,3.843L.854.146C.658-.049.342-.049.146.146S-.049.658.146.854l23,23c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707ZM11.999,1c3.631,0,6.846,2.443,7.818,5.941l2.048,7.444c.307,1.105.084,2.263-.609,3.177-.449.591-1.047,1.021-1.735,1.251L5.27,4.563c1.499-2.234,4-3.563,6.729-3.563Zm4.001,18H5.642c-1.11,0-2.145-.497-2.84-1.363-.694-.865-.955-1.983-.721-3.043l1.99-7.215c.073-.266-.083-.542-.349-.615-.263-.071-.542.083-.615.349l-1.996,7.24c-.306,1.382.026,2.807.911,3.909.885,1.104,2.204,1.738,3.62,1.738h1.931c.217,2.242,2.111,4,4.409,4,2.449,0,4.519-2.061,4.519-4.5,0-.276-.224-.5-.5-.5Zm-4.019,4c-1.746,0-3.191-1.311-3.403-3h6.884c-.252,1.67-1.744,3-3.481,3Z"
    }
  ) });
};

// src/components/icons/deskBellSVG/index.tsx
var import_jsx_runtime122 = require("react/jsx-runtime");
var DeskBell = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime122.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.5,21H12.5v-2h8.26c1.235,0,2.24-.999,2.24-2.227v-.357c0-3.033-1.224-5.851-3.446-7.936-1.946-1.825-4.415-2.853-7.054-2.969V3h2c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2v2.512c-.077,.003-.154,.007-.231,.012C5.511,5.893,1,10.835,1,16.773c0,1.228,1.005,2.227,2.24,2.227H11.5v2H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM2,16.773c0-5.413,4.1-9.916,9.333-10.252,.221-.014,.441-.021,.659-.022h.017c2.568,0,4.983,.95,6.861,2.711,2.018,1.893,3.13,4.452,3.13,7.206v.357c0,.676-.556,1.227-1.24,1.227H3.24c-.684,0-1.24-.55-1.24-1.227Z"
    }
  ) });
};

// src/components/icons/searchSVG/index.tsx
var import_jsx_runtime123 = require("react/jsx-runtime");
var Search = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime123.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.854,23.146l-6.449-6.449c1.607-1.775,2.596-4.12,2.596-6.697C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.577,0,4.922-.988,6.697-2.596l6.449,6.449c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707ZM1,10C1,5.038,5.038,1,10,1s9,4.038,9,9-4.037,9-9,9S1,14.962,1,10Z"
    }
  ) });
};

// src/components/icons/settingsSVG/index.tsx
var import_jsx_runtime124 = require("react/jsx-runtime");
var Settings = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime124.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M21.234,14.174l-.445-.274c.14-.64,.211-1.277,.211-1.899s-.071-1.26-.211-1.899l.445-.274c.682-.421,1.16-1.082,1.344-1.862,.185-.779,.054-1.585-.367-2.267-.869-1.407-2.72-1.845-4.128-.978l-.445,.275c-.801-.647-1.685-1.145-2.638-1.481v-.514c0-1.654-1.346-3-3-3s-3,1.346-3,3v.514c-.953,.337-1.837,.834-2.638,1.481l-.445-.275c-1.409-.867-3.26-.43-4.128,.978-.421,.682-.551,1.487-.367,2.267,.185,.78,.662,1.441,1.344,1.862l.445,.274c-.14,.64-.211,1.277-.211,1.899s.071,1.26,.211,1.899l-.445,.274c-.682,.421-1.16,1.082-1.344,1.862-.185,.779-.054,1.585,.367,2.267,.868,1.407,2.721,1.845,4.128,.978l.445-.275c.801,.647,1.685,1.145,2.638,1.481v.514c0,1.654,1.346,3,3,3s3-1.346,3-3v-.514c.953-.337,1.837-.834,2.638-1.481l.445,.275c1.41,.867,3.26,.43,4.128-.978,.421-.682,.551-1.487,.367-2.267-.185-.78-.662-1.441-1.344-1.862Zm.126,3.604c-.58,.938-1.815,1.232-2.752,.651l-.753-.465c-.187-.114-.427-.095-.592,.05-.862,.756-1.841,1.305-2.91,1.634-.21,.064-.353,.258-.353,.478v.875c0,1.103-.897,2-2,2s-2-.897-2-2v-.875c0-.22-.143-.413-.353-.478-1.069-.329-2.048-.878-2.91-1.634-.094-.082-.211-.124-.33-.124-.091,0-.182,.024-.263,.074l-.753,.465c-.938,.581-2.173,.287-2.752-.651-.28-.454-.367-.991-.244-1.511,.123-.521,.441-.961,.896-1.241l.753-.465c.187-.115,.276-.339,.221-.552-.176-.679-.265-1.354-.265-2.009s.089-1.33,.265-2.009c.055-.213-.035-.437-.221-.552l-.753-.465c-.455-.28-.772-.721-.896-1.241-.123-.52-.036-1.057,.244-1.511,.58-.939,1.814-1.232,2.752-.651l.753,.465c.187,.114,.426,.095,.592-.05,.862-.756,1.841-1.305,2.91-1.634,.21-.064,.353-.258,.353-.478v-.875c0-1.103,.897-2,2-2s2,.897,2,2v.875c0,.22,.143,.413,.353,.478,1.069,.329,2.048,.878,2.91,1.634,.166,.145,.406,.164,.592,.05l.753-.465c.938-.581,2.172-.288,2.752,.651,.28,.454,.367,.991,.244,1.511-.123,.521-.441,.961-.896,1.241l-.753,.465c-.187,.115-.276,.339-.221,.552,.176,.679,.265,1.354,.265,2.009s-.089,1.33-.265,2.009c-.055,.213,.035,.437,.221,.552l.753,.465c.455,.28,.772,.721,.896,1.241,.123,.52,.036,1.057-.244,1.511ZM12,8c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"
    }
  ) });
};

// src/components/icons/menuSVG/index.tsx
var import_jsx_runtime125 = require("react/jsx-runtime");
var Menu = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime125.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm1 6a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z"
    }
  ) });
};

// src/components/icons/userSVG/index.tsx
var import_jsx_runtime126 = require("react/jsx-runtime");
var User = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime126.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,12c3.309,0,6-2.691,6-6S15.309,0,12,0,6,2.691,6,6s2.691,6,6,6Zm0-11c2.757,0,5,2.243,5,5s-2.243,5-5,5-5-2.243-5-5S9.243,1,12,1Zm9,22v.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-.5c0-4.411-3.589-8-8-8s-8,3.589-8,8v.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-.5c0-4.962,4.038-9,9-9s9,4.038,9,9Z"
    }
  ) });
};

// src/components/icons/usersSVG/index.tsx
var import_jsx_runtime127 = require("react/jsx-runtime");
var Users = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime127.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m7.5,13c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5Zm0-8c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5Zm7.5,17.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-3.584-2.916-6.5-6.5-6.5s-6.5,2.916-6.5,6.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5Zm9-4.637v.637c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-.637c0-3.233-2.63-5.863-5.863-5.863-1.357,0-2.485.307-3.351.91-.228.158-.539.103-.696-.124s-.103-.538.124-.696c1.037-.724,2.357-1.09,3.923-1.09,3.784,0,6.863,3.079,6.863,6.863Zm-6.5-8.863c2.481,0,4.5-2.019,4.5-4.5S19.981,0,17.5,0s-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5Zm0-8c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5Z"
    }
  ) });
};

// src/components/icons/starSVG/index.tsx
var import_jsx_runtime128 = require("react/jsx-runtime");
var Star = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime128.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M24.062,9.033H14.849L12,.156l-2.849,8.877H-.062l7.46,5.453-2.864,8.863,7.467-5.488,7.467,5.488-2.864-8.863,7.46-5.453Zm-6.5,11.676l-5.562-4.089-5.562,4.089,2.134-6.604L3,10.033h6.881l2.119-6.605,2.12,6.605h6.88l-5.571,4.072,2.134,6.604Z"
    }
  ) });
};

// src/components/icons/starRoundSVG/index.tsx
var import_jsx_runtime129 = require("react/jsx-runtime");
var StarRound = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime129.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.855,8.951c-.387-1.185-1.441-1.951-2.688-1.951h-4.807l-1.668-5.037c-.383-1.193-1.44-1.963-2.693-1.963s-2.31,.771-2.691,1.959l-1.67,5.041H2.833c-1.246,0-2.302,.766-2.689,1.951-.387,1.184,.013,2.425,1.019,3.161l4.041,2.954-1.535,4.749c-.385,1.191,.022,2.433,1.038,3.164,.996,.719,2.333,.713,3.33-.016l3.963-2.914,3.963,2.914c.509,.373,1.093,.559,1.677,.559,.575,0,1.15-.181,1.653-.543,1.015-.73,1.422-1.973,1.037-3.164l-1.534-4.749,4.04-2.954c1.006-.735,1.405-1.975,1.019-3.161Zm-1.608,2.353l-4.332,3.167c-.175,.127-.247,.352-.181,.558l1.646,5.093c.248,.771-.015,1.573-.67,2.045-.656,.472-1.501,.467-2.154-.01l-4.259-3.131c-.177-.13-.416-.13-.593,0l-4.259,3.131c-.645,.471-1.509,.475-2.153,.011-.656-.473-.919-1.275-.671-2.045l1.646-5.093c.066-.206-.006-.43-.181-.558L1.754,11.304c-.65-.476-.909-1.278-.659-2.043,.25-.766,.933-1.261,1.739-1.261h5.167c.215,0,.407-.138,.475-.343l1.785-5.388c.248-.771,.931-1.269,1.741-1.269s1.494,.498,1.743,1.273l1.782,5.384c.067,.205,.259,.343,.475,.343h5.168c.805,0,1.486,.495,1.736,1.261s-.008,1.568-.657,2.042Z"
    }
  ) });
};

// src/components/icons/mailSVG/index.tsx
var import_jsx_runtime130 = require("react/jsx-runtime");
var Mail = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime130.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M19.5,2H4.5C2.019,2,0,4.019,0,6.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM4.5,3h15c1.084,0,2.043,.506,2.686,1.283l-7.691,7.692c-.662,.661-1.557,1.025-2.497,1.025-.914-.017-1.826-.36-2.492-1.025L1.814,4.283c.643-.777,1.601-1.283,2.686-1.283Zm18.5,14.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-.477,.097-.931,.271-1.346l7.528,7.528c.851,.851,1.98,1.318,3.177,1.318s2.375-.467,3.226-1.318l7.528-7.528c.174,.415,.271,.869,.271,1.346v11Z"
    }
  ) });
};

// src/components/icons/mailsSVG/index.tsx
var import_jsx_runtime131 = require("react/jsx-runtime");
var Mails = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime131.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M19.5,2H7.5c-2.49,0-4.5,2.01-4.5,4.5V15.5c0,2.49,2.01,4.5,4.5,4.5h12c2.49,0,4.5-2.01,4.5-4.5V6.5c0-2.49-2.01-4.5-4.5-4.5Zm0,1c.95,0,1.82,.38,2.45,1l-5.97,5.97c-1.37,1.37-3.58,1.37-4.95,0L5.05,4c.63-.62,1.5-1,2.45-1h12Zm3.5,12.5c0,1.93-1.57,3.5-3.5,3.5H7.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-.62,.16-1.19,.44-1.7l5.88,5.88c.88,.88,2.03,1.32,3.18,1.32s2.3-.44,3.18-1.32l5.88-5.88c.28,.5,.44,1.08,.44,1.7V15.5Zm-5,7c0,.28-.22,.5-.5,.5H4.5c-2.48,0-4.5-2.02-4.5-4.5V7.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v11c0,1.93,1.57,3.5,3.5,3.5h13c.28,0,.5,.22,.5,.5Z"
    }
  ) });
};

// src/components/icons/mailOpenSVG/index.tsx
var import_jsx_runtime132 = require("react/jsx-runtime");
var MailOpen = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime132.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m22.623,9.26l-1.623-1.564V3.5c0-1.93-1.57-3.5-3.5-3.5H6.5c-1.93,0-3.5,1.57-3.5,3.5v4.196l-1.623,1.564c-.875.844-1.377,2.024-1.377,3.24v7c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-7c0-1.216-.502-2.396-1.377-3.24Zm-.693.721c.092.089.165.194.247.292l-1.177,1.177v-2.365l.93.896ZM4,3.5c0-1.379,1.121-2.5,2.5-2.5h11c1.379,0,2.5,1.121,2.5,2.5v8.949l-5.525,5.525c-1.322,1.322-3.627,1.322-4.949,0l-5.525-5.525V3.5Zm-1,5.585v2.365l-1.177-1.177c.081-.098.154-.203.247-.292l.93-.896Zm20,10.415c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-7c0-.469.097-.932.277-1.359l7.541,7.541c.85.851,1.979,1.318,3.182,1.318s2.332-.468,3.182-1.318l7.541-7.541c.18.427.277.89.277,1.359v7ZM6.659,8.163c-.202-.188-.214-.504-.025-.707.189-.201.505-.213.707-.025l2.278,2.117c.597.597,1.549.598,2.134.013l4.746-4.575c.198-.189.515-.186.707.014.191.198.186.515-.014.707l-4.739,4.568c-.482.483-1.12.725-1.759.725s-1.281-.243-1.77-.731l-2.266-2.104Z"
    }
  ) });
};

// src/components/icons/mailPlusSVG/index.tsx
var import_jsx_runtime133 = require("react/jsx-runtime");
var MailPlus = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m15,4.5c0-.276.224-.5.5-.5h3.5V.5c0-.276.224-.5.5-.5s.5.224.5.5v3.5h3.5c.276,0,.5.224.5.5s-.224.5-.5.5h-3.5v3.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-3.5h-3.5c-.276,0-.5-.224-.5-.5Zm8.5,2.5c-.276,0-.5.224-.5.5v12c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V7.863l7.818,7.819c.877.877,2.03,1.316,3.183,1.316s2.303-.438,3.179-1.313l3.877-3.829c.196-.194.198-.511.004-.708-.195-.195-.511-.198-.708-.004l-3.879,3.831c-1.365,1.364-3.586,1.364-4.95,0L1.125,6.574c.407-1.482,1.766-2.574,3.375-2.574h8c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H4.5C2.019,3,0,5.019,0,7.5v12c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V7.5c0-.276-.224-.5-.5-.5Z"
    }
  ) });
};

// src/components/icons/atSVG/index.tsx
var import_jsx_runtime134 = require("react/jsx-runtime");
var At = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime134.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12c2.447,0,4.793-.722,6.783-2.088.228-.156.286-.467.129-.695-.156-.229-.466-.286-.695-.129-1.823,1.251-3.973,1.912-6.217,1.912-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v2.5c0,1.378-1.122,2.5-2.5,2.5s-2.5-1.122-2.5-2.5v-2.5c0-3.309-2.691-6-6-6s-6,2.691-6,6,2.691,6,6,6c2.131,0,4.006-1.117,5.071-2.796.327,1.594,1.74,2.796,3.429,2.796,1.93,0,3.5-1.57,3.5-3.5v-2.5C24,5.383,18.617,0,12,0Zm0,17c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Z"
    }
  ) });
};

// src/components/icons/phoneSVG/index.tsx
var import_jsx_runtime135 = require("react/jsx-runtime");
var Phone = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m23.5,11c-.276,0-.5-.224-.5-.5,0-5.238-4.262-9.5-9.5-9.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c5.79,0,10.5,4.71,10.5,10.5,0,.276-.224.5-.5.5Zm-3.5-.5c0-3.584-2.916-6.5-6.5-6.5-.276,0-.5.224-.5.5s.224.5.5.5c3.033,0,5.5,2.467,5.5,5.5,0,.276.224.5.5.5s.5-.224.5-.5Zm2.234,11.771l.978-1.125c.508-.508.788-1.184.788-1.902s-.28-1.395-.837-1.945l-2.446-1.873c-1.048-1.048-2.753-1.049-3.803-.003l-1.532,1.494c-3.68-1.499-6.678-4.5-8.294-8.303l1.488-1.525c1.049-1.049,1.049-2.756.043-3.756l-1.959-2.543c-1.017-1.017-2.813-.993-3.78-.023l-1.174,1.024C.605,2.886,0,4.373,0,5.976c0,7.749,10.275,18.024,18.024,18.024,1.603,0,3.089-.605,4.21-1.729ZM5.909,1.446l1.959,2.543c.659.659.659,1.732-.004,2.396l-1.722,1.766c-.138.142-.18.352-.106.536,1.729,4.305,5.113,7.688,9.286,9.28.182.07.388.027.527-.108l1.766-1.722s.003-.003.004-.005c.639-.64,1.704-.681,2.44.043l2.446,1.873c.659.659.659,1.731-.023,2.416l-.979,1.125c-.908.91-2.144,1.411-3.479,1.411C10.864,23,1,13.136,1,5.976c0-1.335.501-2.571,1.387-3.456l1.175-1.025c.336-.336.779-.5,1.215-.5.419,0,.831.152,1.133.452Z"
    }
  ) });
};

// src/components/icons/phoneCutSVG/index.tsx
var import_jsx_runtime136 = require("react/jsx-runtime");
var PhoneCut = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime136.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m23.854.146c-.195-.195-.512-.195-.707,0l-13.081,13.081c-1.245-1.339-2.245-2.888-2.977-4.615l1.488-1.525c1.049-1.049,1.049-2.756.043-3.756l-1.959-2.543c-1.048-1.049-2.755-1.048-3.78-.023l-1.174,1.024C.605,2.886,0,4.373,0,5.976c0,3.524,2.154,7.808,5.783,11.534L.146,23.146c-.195.195-.195.512,0,.707.098.098.226.146.354.146s.256-.049.354-.146L23.854.854c.195-.195.195-.512,0-.707ZM1,5.976c0-1.335.501-2.571,1.387-3.456l1.175-1.025c.659-.66,1.73-.66,2.348-.049l1.959,2.543c.319.319.495.744.495,1.196s-.176.876-.5,1.2l-1.722,1.766c-.138.142-.18.352-.106.536.792,1.973,1.908,3.737,3.321,5.25l-2.866,2.866C3.045,13.263,1,9.243,1,5.976Zm22.163,11.322c1.098,1.092,1.098,2.799.049,3.848l-.978,1.125c-1.121,1.124-2.607,1.729-4.21,1.729-3.015,0-6.742-1.683-10.228-4.617-.211-.178-.238-.493-.06-.705.177-.21.492-.239.705-.061,3.308,2.785,6.801,4.383,9.583,4.383,1.335,0,2.571-.501,3.479-1.411l.979-1.125c.683-.685.683-1.757.023-2.416l-2.446-1.873c-.708-.702-1.781-.703-2.44-.043l-1.77,1.727c-.14.136-.346.179-.527.108-1.103-.421-2.251-1.075-3.615-2.062-.224-.162-.274-.475-.112-.698.161-.224.474-.274.698-.112,1.167.844,2.159,1.429,3.091,1.82l1.533-1.495c1.045-1.046,2.752-1.045,3.801.005l2.446,1.873Z"
    }
  ) });
};

// src/components/icons/phoneInSVG/index.tsx
var import_jsx_runtime137 = require("react/jsx-runtime");
var PhoneIn = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m15,7V2.5c0-.276.224-.5.5-.5s.5.224.5.5v4.5c0,.097.014.191.04.28L23.146.147c.195-.196.512-.196.707-.001.196.195.196.512.002.708l-7.091,7.119c.076.018.155.028.236.028h4.5c.276,0,.5.224.5.5s-.224.5-.5.5h-4.5c-1.103,0-2-.897-2-2Zm8.163,10.298c.557.551.837,1.227.837,1.945s-.28,1.395-.788,1.902l-.978,1.125c-1.121,1.124-2.608,1.729-4.211,1.729C10.275,24,0,13.725,0,5.976c0-1.603.605-3.09,1.705-4.187l1.174-1.024c.967-.97,2.763-.993,3.78.023l1.959,2.543c1.006,1,1.006,2.707-.043,3.756l-1.488,1.525c1.617,3.803,4.614,6.804,8.295,8.303l1.532-1.494c1.047-1.047,2.753-1.046,3.802.003l2.446,1.873Zm-.658.75l-2.446-1.873c-.736-.725-1.801-.682-2.439-.043,0,.002-1.771,1.727-1.771,1.727-.139.136-.344.18-.527.108-4.172-1.593-7.557-4.975-9.285-9.28-.074-.184-.032-.394.106-.536l1.722-1.766c.664-.664.664-1.736.004-2.396l-1.959-2.543c-.302-.299-.714-.452-1.133-.452-.436,0-.879.165-1.215.5l-1.175,1.025c-.886.885-1.387,2.121-1.387,3.456,0,7.16,9.864,17.024,17.023,17.024,1.335,0,2.571-.501,3.48-1.411l.978-1.125c.683-.685.683-1.757.023-2.416Z"
    }
  ) });
};

// src/components/icons/phoneOutSVG/index.tsx
var import_jsx_runtime138 = require("react/jsx-runtime");
var PhoneOut = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime138.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m24,2v4.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5V2c0-.089-.012-.176-.034-.259l-7.112,7.112c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l7.112-7.112c-.083-.022-.169-.034-.259-.034h-4.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4.5c1.103,0,2,.897,2,2Zm-.837,15.298c1.098,1.092,1.098,2.799.049,3.848l-.978,1.125c-1.121,1.124-2.608,1.729-4.211,1.729C10.275,24,0,13.725,0,5.976c0-1.603.605-3.089,1.704-4.187l1.176-1.024c.965-.97,2.764-.993,3.779.023l1.959,2.543c1.006,1,1.006,2.707-.043,3.756l-1.487,1.525c1.617,3.803,4.614,6.804,8.295,8.303l1.532-1.494c1.017-1.014,2.787-1.013,3.802.003l2.446,1.873Zm-.658.75l-2.446-1.873c-.736-.725-1.801-.682-2.439-.043,0,.002-1.771,1.727-1.771,1.727-.139.136-.343.18-.527.108-4.172-1.593-7.556-4.975-9.285-9.28-.074-.184-.032-.394.105-.536l1.722-1.766c.664-.664.664-1.736.005-2.396l-1.959-2.543c-.302-.299-.714-.452-1.133-.452-.436,0-.879.165-1.215.5l-1.176,1.025c-.885.885-1.386,2.121-1.386,3.456,0,7.16,9.864,17.024,17.023,17.024,1.335,0,2.571-.501,3.48-1.411l.978-1.125c.683-.685.683-1.757.023-2.416Z"
    }
  ) });
};

// src/components/icons/telephoneSVG/index.tsx
var import_jsx_runtime139 = require("react/jsx-runtime");
var Telephone = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m24,7.035c0-1.333-.534-2.603-1.506-3.575C17.885-1.149,6.115-1.149,1.506,3.46.534,4.432,0,5.702,0,7.034v3.009l4.154-.036-2.629,4.817c-.998,1.831-1.525,3.901-1.525,5.986v3.19h24v-3.19c0-2.085-.527-4.155-1.526-5.986l-2.632-4.824h4.158v-2.965Zm-2.404,8.268c.919,1.685,1.404,3.589,1.404,5.507v2.19H1v-2.19c0-1.918.485-3.823,1.403-5.507l2.894-5.305h.009s1.322-2.573,1.322-2.573c.503-.289,2.658-1.425,5.371-1.425s4.868,1.136,5.371,1.425l1.324,2.575h.008l2.892,5.303Zm1.404-6.303h-3.695l-1.172-2.281s-2.74-1.719-6.133-1.719-6.133,1.719-6.133,1.719l-1.174,2.283-3.693.032v-2c0-1.065.43-2.083,1.213-2.867,2.104-2.104,5.945-3.156,9.787-3.156s7.684,1.052,9.787,3.156c.783.783,1.214,1.801,1.213,2.867v1.966Zm-11,0c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm0,11c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm0-7c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
    }
  ) });
};

// src/components/icons/officePhoneSVG/index.tsx
var import_jsx_runtime140 = require("react/jsx-runtime");
var OfficePhone = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M19.5,2H6.649C6.085,.822,4.891,0,3.5,0,1.57,0,0,1.57,0,3.5V19.5c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5Zm3.449,4h-6.449c-.827,0-1.5-.673-1.5-1.5v-1.5h4.5c1.758,0,3.204,1.308,3.449,3ZM1,3.5c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v13c0,1.379-1.121,2.5-2.5,2.5s-2.5-1.121-2.5-2.5V3.5ZM19.5,23H4.5c-1.93,0-3.5-1.57-3.5-3.5v-.558c.636,.651,1.52,1.058,2.5,1.058,1.93,0,3.5-1.57,3.5-3.5V3.5c0-.171-.027-.335-.051-.5h7.051v1.5c0,1.379,1.121,2.5,2.5,2.5h6.5v12.5c0,1.93-1.57,3.5-3.5,3.5Zm-3.5-12c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm8,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-4,4c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm8,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-4,4c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm8,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"
    }
  ) });
};

// src/components/icons/refreshSVG/index.tsx
var import_jsx_runtime141 = require("react/jsx-runtime");
var Refresh = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M1.01,11.521c-.011,.269-.233,.479-.499,.479h-.022c-.276-.013-.49-.245-.478-.521C.287,5.042,5.553,0,12,0c4.04,0,7.789,2.066,10,5.414V.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5V5.5c0,.827-.673,1.5-1.5,1.5h-5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4.692C19.169,2.909,15.718,1,12,1,6.09,1,1.263,5.621,1.01,11.521Zm22.5,.479c-.322-.015-.51,.203-.521,.479-.252,5.9-5.079,10.521-10.989,10.521-3.718,0-7.169-1.909-9.192-5H7.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H2.5c-.827,0-1.5,.673-1.5,1.5v5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-4.914c2.211,3.347,5.96,5.414,10,5.414,6.447,0,11.714-5.042,11.989-11.479,.012-.276-.203-.509-.479-.521Z"
    }
  ) });
};

// src/components/icons/calendarSVG/index.tsx
var import_jsx_runtime142 = require("react/jsx-runtime");
var Calendar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime142.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M10.5,13h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M14.5,13h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M18.5,13h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M10.5,18h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M6.5,13h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M6.5,18h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M14.5,18h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M18.5,18h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M19.5,2h-1.5V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.5H7V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.5h-1.5C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm15,20H4.5c-1.93,0-3.5-1.57-3.5-3.5V9H23v10.5c0,1.93-1.57,3.5-3.5,3.5Z"
      }
    )
  ] });
};

// src/components/icons/infoSVG/index.tsx
var import_jsx_runtime143 = require("react/jsx-runtime");
var Info = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime143.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m13,10.5v8.5h-1v-8.5c0-.276-.224-.5-.5-.5h-1.5v-1h1.5c.827,0,1.5.673,1.5,1.5Zm-1-5.5c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm12,7c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z"
    }
  ) });
};

// src/components/icons/helpSVG/index.tsx
var import_jsx_runtime144 = require("react/jsx-runtime");
var Help = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime144.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m15.893,8.064c.408,1.784-.382,3.569-1.965,4.441-.894.493-1.428,1.326-1.428,2.227v.268h-1v-.268c0-1.271.728-2.431,1.946-3.103,1.188-.655,1.78-1.998,1.473-3.343-.245-1.074-1.131-1.96-2.205-2.205-.921-.21-1.863-.002-2.582.572-.719.573-1.131,1.429-1.131,2.347h-1c0-1.224.549-2.365,1.508-3.128.958-.765,2.207-1.044,3.428-.765,1.462.333,2.624,1.495,2.957,2.957Zm-3.893,8.936c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm12-5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z"
    }
  ) });
};

// src/components/icons/keySVG/index.tsx
var import_jsx_runtime145 = require("react/jsx-runtime");
var Key = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime145.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m21.5,0h-.758c-.922,0-1.823.374-2.475,1.025l-9.271,9.271c-1.282-.386-2.591-.397-3.893-.032C2.363,11.034.327,13.444.038,16.261c-.218,2.119.516,4.192,2.013,5.689,1.322,1.323,3.097,2.049,4.954,2.049.243,0,.488-.013.733-.038,2.818-.289,5.229-2.325,5.997-5.066.365-1.302.354-2.609-.031-3.893l2.003-2.003c.187-.186.293-.444.293-.707v-2.093c0-.11.09-.2.2-.2h1.6c.662,0,1.2-.539,1.2-1.2v-1.6c0-.11.09-.2.2-.2h2.093c.267,0,.519-.104.707-.293l.975-.975c.661-.662,1.025-1.541,1.025-2.475v-.757c0-1.378-1.121-2.5-2.5-2.5Zm1.5,3.257c0,.667-.26,1.295-.732,1.768l-.975.975h-2.093c-.662,0-1.2.539-1.2,1.2v1.6c0,.11-.09.2-.2.2h-1.6c-.662,0-1.2.539-1.2,1.2v2.093l-2.22,2.219c-.136.136-.182.336-.119.518.412,1.183.449,2.392.111,3.596-.658,2.349-2.723,4.094-5.136,4.341-1.82.188-3.597-.442-4.879-1.724-1.283-1.282-1.912-3.061-1.726-4.879.248-2.413,1.993-4.478,4.342-5.137.543-.152,1.086-.228,1.628-.228.661,0,1.318.113,1.968.339.182.062.382.016.518-.119L18.975,1.732c.465-.465,1.109-.732,1.768-.732h.758c.827,0,1.5.673,1.5,1.5v.757ZM7,18c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"
    }
  ) });
};

// src/components/icons/shieldSVG/index.tsx
var import_jsx_runtime146 = require("react/jsx-runtime");
var Shield = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime146.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M11.98,23.986l-.626-.313c-2.194-1.097-9.354-5.189-9.354-11.8V5.135c0-1.08,.688-2.034,1.713-2.373L12,.014l8.287,2.748c1.024,.34,1.713,1.294,1.713,2.373v6.738c0,7.499-7.172,10.968-9.37,11.852l-.65,.261Zm.02-22.918L4.028,3.711c-.615,.204-1.028,.776-1.028,1.424v6.738c0,6.038,6.736,9.874,8.801,10.906l.224,.112,.232-.093c2.051-.825,8.743-4.052,8.743-10.924V5.134c0-.647-.413-1.22-1.027-1.424L12,1.067Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M10.501,15c-.384,0-.769-.146-1.062-.439l-3.288-3.202,.697-.717,3.293,3.207c.201,.2,.518,.199,.712,.005l6.295-6.209,.703,.712-6.293,6.207c-.291,.291-.674,.437-1.057,.437Z"
      }
    )
  ] });
};

// src/components/icons/githubSVG/index.tsx
var import_jsx_runtime147 = require("react/jsx-runtime");
var Github = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime147.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime147.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
    }
  ) });
};

// src/components/icons/linkedinSVG/index.tsx
var import_jsx_runtime148 = require("react/jsx-runtime");
var Linkedin = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime148.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
    }
  ) });
};

// src/components/icons/twitterXSVG/index.tsx
var import_jsx_runtime149 = require("react/jsx-runtime");
var TwitterX = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime149.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime149.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
    }
  ) });
};

// src/components/icons/databaseSVG/index.tsx
var import_jsx_runtime150 = require("react/jsx-runtime");
var Database = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime150.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M24,23.5c0,.276-.224,.5-.5,.5h-2.5c-.551,0-1-.449-1-1v-6.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v6.5h2.5c.276,0,.5,.224,.5,.5Zm-12.626-3.971c-.31-.117-1.189-.466-1.523-.67-.325-.231-.477-.568-.428-.948,.053-.399,.316-.723,.687-.845,.561-.184,1.121-.009,1.768,.553,.208,.181,.523,.158,.706-.05,.181-.208,.158-.524-.05-.706-.915-.792-1.835-1.045-2.736-.747-.739,.244-1.262,.881-1.366,1.666-.096,.743,.218,1.45,.88,1.917,.492,.305,1.587,.721,1.699,.763,1.052,.425,1.013,1.204,.976,1.431-.104,.641-.669,1.105-1.342,1.105-.525,0-1.348-.368-1.761-.787-.194-.197-.51-.199-.707-.005-.197,.194-.199,.51-.005,.707,.526,.533,1.595,1.085,2.473,1.085,1.166,0,2.146-.818,2.33-1.945,.131-.812-.206-1.959-1.599-2.523Zm7.626-1.037v3c0,.51-.155,.984-.419,1.38l.273,.274c.464,.453-.258,1.172-.709,.705l-.273-.274c-.395,.26-.865,.414-1.373,.414-1.378,0-2.5-1.122-2.5-2.5v-3c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5Zm-1.151,3.644c.094-.196,.151-.413,.151-.644v-3c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5v3c0,.827,.673,1.5,1.5,1.5,.23,0,.446-.056,.641-.149l-.496-.498c-.195-.196-.194-.512,.002-.707,.194-.196,.512-.193,.707,.002l.494,.497Zm-11.859,1.172c-.054,.273-.325,.446-.589,.391-3.281-.665-5.401-2.313-5.401-4.2V4.5C0,1.977,3.733,0,8.5,0s8.5,1.977,8.5,4.5V14c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-2.351c-1.419,1.411-4.213,2.351-7.5,2.351s-6.081-.94-7.5-2.351v2.851c0,1.369,1.848,2.662,4.599,3.219,.64,.12,.431,1.119-.198,.98-1.948-.394-3.472-1.141-4.401-2.073v2.874c0,1.369,1.848,2.662,4.599,3.219,.271,.055,.446,.319,.391,.589ZM1,4.5c0,1.897,3.435,3.5,7.5,3.5s7.5-1.603,7.5-3.5-3.435-3.5-7.5-3.5S1,2.603,1,4.5Zm0,2.149v2.851c0,1.897,3.435,3.5,7.5,3.5s7.5-1.603,7.5-3.5v-2.851c-1.419,1.411-4.213,2.351-7.5,2.351s-6.081-.94-7.5-2.351Z"
    }
  ) });
};

// src/components/icons/bookmarkSVG/index.tsx
var import_jsx_runtime151 = require("react/jsx-runtime");
var Bookmark = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime151.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M20.5,0H3.5C2.122,0,1,1.121,1,2.5V23.996L12,13.053l11,10.943V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,21.59L12,11.643,2,21.59V2.5c0-.827,.673-1.5,1.5-1.5H20.5c.827,0,1.5,.673,1.5,1.5V21.59Z"
    }
  ) });
};

// src/components/icons/controllerSVG/index.tsx
var import_jsx_runtime152 = require("react/jsx-runtime");
var Controller = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime152.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M.5,4H3.551c.245,1.692,1.691,3,3.449,3s3.204-1.308,3.449-3h13.051c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H10.449c-.245-1.692-1.691-3-3.449-3S3.796,1.308,3.551,3H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5ZM7,1c1.378,0,2.5,1.121,2.5,2.5s-1.122,2.5-2.5,2.5-2.5-1.121-2.5-2.5,1.122-2.5,2.5-2.5ZM23.5,11.5h-3.051c-.245-1.692-1.691-3-3.449-3s-3.204,1.308-3.449,3H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H13.551c.245,1.692,1.691,3,3.449,3s3.204-1.308,3.449-3h3.051c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-6.5,3c-1.378,0-2.5-1.121-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.122,2.5-2.5,2.5Zm6.5,5.5H10.449c-.245-1.692-1.691-3-3.449-3s-3.204,1.308-3.449,3H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H3.551c.245,1.692,1.691,3,3.449,3s3.204-1.308,3.449-3h13.051c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-16.5,3c-1.378,0-2.5-1.121-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.122,2.5-2.5,2.5Z"
    }
  ) });
};

// src/components/icons/banSVG/index.tsx
var import_jsx_runtime153 = require("react/jsx-runtime");
var Ban = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime153.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime153.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0ZM1,12C1,5.935,5.935,1,12,1c2.853,0,5.447,1.101,7.404,2.889L3.889,19.404c-1.788-1.957-2.889-4.551-2.889-7.404Zm11,11c-2.853,0-5.447-1.101-7.404-2.889L20.111,4.596c1.788,1.957,2.889,4.551,2.889,7.404,0,6.065-4.935,11-11,11Z"
    }
  ) });
};

// src/components/icons/cloudSVG/index.tsx
var import_jsx_runtime154 = require("react/jsx-runtime");
var Cloud = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime154.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime154.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M15.748,23H5.726C2.757,23,.25,20.787,.019,17.962c-.145-1.773,.578-3.517,1.935-4.662,.51-.43,.708-1.072,.507-1.636-.511-1.432-.597-2.994-.248-4.518,.715-3.118,3.325-5.546,6.495-6.044,3.898-.607,7.625,1.638,8.871,5.348,.156,.462,.513,.817,.979,.974,3.543,1.195,5.766,4.638,5.404,8.373-.392,4.04-3.999,7.204-8.214,7.204ZM9.979,2.002c-.369,0-.742,.029-1.117,.088-2.77,.435-5.051,2.557-5.675,5.28-.306,1.337-.232,2.706,.215,3.958,.343,.961,.028,2.036-.804,2.736-1.126,.951-1.703,2.343-1.583,3.816,.189,2.311,2.258,4.12,4.71,4.12H15.748c3.705,0,6.876-2.768,7.218-6.3,.316-3.27-1.627-6.284-4.728-7.329-.766-.257-1.352-.842-1.607-1.603-.972-2.89-3.667-4.766-6.652-4.766Z"
    }
  ) });
};

// src/components/icons/creditCardSVG/index.tsx
var import_jsx_runtime155 = require("react/jsx-runtime");
var CreditCard = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime155.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime155.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m19.5,3H4.5C2.019,3,0,5.019,0,7.5v9c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V7.5c0-2.481-2.019-4.5-4.5-4.5ZM1,8h22v2H1v-2Zm3.5-4h15c1.758,0,3.204,1.308,3.449,3H1.051c.245-1.692,1.691-3,3.449-3Zm15,16H4.5c-1.93,0-3.5-1.57-3.5-3.5v-5.5h22v5.5c0,1.93-1.57,3.5-3.5,3.5Zm-14.5-6c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.551,0-1-.448-1-1s.449-1,1-1,1,.448,1,1-.449,1-1,1Z"
    }
  ) });
};

// src/components/icons/dragHandleSVG/index.tsx
var import_jsx_runtime156 = require("react/jsx-runtime");
var DragHandle = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime156.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime156.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M9 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM9 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM9 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    }
  ) });
};

// src/components/icons/giftSVG/index.tsx
var import_jsx_runtime157 = require("react/jsx-runtime");
var Gift = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime157.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m20.5,7h-3.613c1.832-.879,3.113-2.355,3.113-4.5,0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,3.063-3.271,4.189-5.839,4.442.779-.963,1.839-2.532,1.839-3.942,0-1.654-1.346-3-3-3s-3,1.346-3,3c0,1.41,1.059,2.978,1.839,3.942-2.568-.252-5.839-1.379-5.839-4.442,0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,2.145,1.281,3.621,3.113,4.5h-3.613c-1.93,0-3.5,1.57-3.5,3.5v1c0,.827.673,1.5,1.5,1.5h.5v6.5c0,2.481,2.019,4.5,4.5,4.5h11c2.481,0,4.5-2.019,4.5-4.5v-6.5h.5c.827,0,1.5-.673,1.5-1.5v-1c0-1.93-1.57-3.5-3.5-3.5ZM12,1c1.103,0,2,.897,2,2,0,1.248-1.23,2.899-2,3.768-.77-.869-2-2.52-2-3.768,0-1.103.897-2,2-2ZM1,11.5v-1c0-1.378,1.122-2.5,2.5-2.5h8v4H1.5c-.276,0-.5-.224-.5-.5Zm2,8v-6.5h8.5v10h-5c-1.93,0-3.5-1.57-3.5-3.5Zm18,0c0,1.93-1.57,3.5-3.5,3.5h-5v-10h8.5v6.5Zm2-8c0,.276-.224.5-.5.5h-10v-4h8c1.378,0,2.5,1.122,2.5,2.5v1Z"
    }
  ) });
};

// src/components/icons/linkSVG/index.tsx
var import_jsx_runtime158 = require("react/jsx-runtime");
var Link = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime158.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime158.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M1.753,13.765L7.781,7.754c2.336-2.335,6.135-2.335,8.47,0,.769,.769,1.259,1.702,1.522,2.684l-.838,.838c-.148-1.03-.6-2.024-1.39-2.815-1.945-1.945-5.11-1.945-7.056,0L2.46,14.473c-.942,.942-1.461,2.198-1.461,3.536s.519,2.594,1.461,3.536c1.945,1.947,5.11,1.945,7.056,0l.003,.003,1.595-1.595c.288,.031,.579,.05,.873,.05,.173,0,.344-.014,.515-.025l-2.278,2.278c-.012,.012-.028,.017-.041,.027-1.163,1.144-2.678,1.72-4.197,1.72-1.533,0-3.067-.584-4.234-1.751C.622,21.121,0,19.614,0,18.009c0-1.605,.623-3.112,1.754-4.244Zm10.235,4.232c1.534,0,3.067-.583,4.234-1.751l6.028-6.011c2.34-2.34,2.34-6.147,0-8.486-2.322-2.322-6.09-2.331-8.429-.033-.014,.011-.031,.016-.044,.029l-2.277,2.278c.171-.011,.342-.025,.515-.025,.294,0,.585,.019,.873,.05l1.595-1.595,.004,.004c1.944-1.944,5.109-1.945,7.055,0,1.95,1.95,1.95,5.122,0,7.072l-6.028,6.011c-1.946,1.945-5.11,1.945-7.055,0h0c-.791-.791-1.243-1.785-1.39-2.815l-.838,.838c.263,.982,.753,1.915,1.522,2.684h0c1.167,1.168,2.701,1.751,4.235,1.751Z"
    }
  ) });
};

// src/components/icons/messageSVG/index.tsx
var import_jsx_runtime159 = require("react/jsx-runtime");
var Message = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime159.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime159.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m13,10c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm4-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-10,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1ZM24,3.5v13c0,1.93-1.57,3.5-3.5,3.5h-3.532l-3.985,3.295c-.275.245-.626.368-.978.368-.356,0-.716-.126-1.001-.379l-3.898-3.284h-3.605c-1.93,0-3.5-1.57-3.5-3.5V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-1,0c0-1.378-1.121-2.5-2.5-2.5H3.5c-1.379,0-2.5,1.122-2.5,2.5v13c0,1.378,1.121,2.5,2.5,2.5h3.788c.118,0,.232.042.322.118l4.048,3.41c.199.178.485.176.674.008l4.138-3.421c.09-.074.202-.115.318-.115h3.712c1.379,0,2.5-1.122,2.5-2.5V3.5Z"
    }
  ) });
};

// src/components/icons/micSVG/index.tsx
var import_jsx_runtime160 = require("react/jsx-runtime");
var Mic = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime160.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime160.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M24,13c0,6.065-4.935,11-11,11h-2C5.114,24,.287,19.398,.013,13.523c-.014-.275,.2-.51,.476-.522,.267-.039,.511,.2,.522,.476,.251,5.34,4.639,9.523,9.989,9.523h2c5.514,0,10-4.486,10-10,0-.276,.224-.5,.5-.5s.5,.224,.5,.5Zm-20-1v-4C4,3.589,7.589,0,12,0s8,3.589,8,8v4c0,4.411-3.589,8-8,8s-8-3.589-8-8Zm1.295-6h4.705c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H5.08c-.047,.328-.08,.66-.08,1v1.5h5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H5v1.5c0,.34,.033,.672,.08,1h4.92c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H5.295c.863,2.887,3.541,5,6.705,5s5.842-2.113,6.705-5h-4.705c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4.92c.047-.328,.08-.66,.08-1v-1.5h-5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h5v-1.5c0-.34-.033-.672-.08-1h-4.92c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4.705c-.863-2.888-3.541-5-6.705-5S6.158,3.112,5.295,6Z"
    }
  ) });
};

// src/components/icons/micMuteSVG/index.tsx
var import_jsx_runtime161 = require("react/jsx-runtime");
var MicMute = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime161.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime161.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m20.977,20.27c1.95-2.126,3.023-4.879,3.023-7.77,0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,2.625-.969,5.125-2.731,7.062l-2.27-2.27c1.145-1.296,1.832-2.914,1.973-4.629.018-.051.028-4.663.028-4.663C20,3.589,16.411,0,12,0c-2.97,0-5.676,1.642-7.059,4.234L.854.146C.658-.049.342-.049.146.146S-.049.658.146.854l23,23c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707l-2.876-2.876ZM12,1c3.86,0,7,3.14,7,7h-3.5c-.276,0-.5.224-.5.5s.224.5.5.5h3.5v3h-3.5c-.276,0-.5.224-.5.5s.224.5.5.5h3.429c-.19,1.323-.754,2.564-1.638,3.583L5.684,4.977c1.162-2.424,3.614-3.977,6.316-3.977Zm-7,7.5v3.5h3.5c.276,0,.5.224.5.5s-.224.5-.5.5h-3.428c.487,3.388,3.408,6,6.928,6,.974,0,1.916-.196,2.8-.582.254-.112.548.005.658.258.111.253-.005.548-.258.658-1.011.442-2.088.666-3.2.666-4.411,0-8-3.589-8-8v-3.5c0-.276.224-.5.5-.5s.5.224.5.5Zm13.48,13.248c.139.238.059.544-.179.684-1.752,1.026-3.759,1.568-5.801,1.568h-1C5.159,24,0,18.841,0,12.5c0-.276.224-.5.5-.5s.5.224.5.5c0,5.79,4.71,10.5,10.5,10.5h1c1.865,0,3.697-.495,5.296-1.432.237-.139.544-.06.684.179Z"
    }
  ) });
};

// src/components/icons/eclipseHorizontalSVG/index.tsx
var import_jsx_runtime162 = require("react/jsx-runtime");
var EclipseHorizontal = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime162.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime162.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM19 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
    }
  ) });
};

// src/components/icons/paperclipSVG/index.tsx
var import_jsx_runtime163 = require("react/jsx-runtime");
var Paperclip = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime163.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime163.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M11.5,24c-3.58,0-6.5-2.92-6.5-6.5V4.5C5,2.02,7.02,0,9.5,0s4.5,2.02,4.5,4.5v13c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5V5.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v12c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5V4.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v13c0,3.03,2.47,5.5,5.5,5.5s5.5-2.47,5.5-5.5V3.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v14c0,3.58-2.92,6.5-6.5,6.5Z"
    }
  ) });
};

// src/components/icons/receiptSVG/index.tsx
var import_jsx_runtime164 = require("react/jsx-runtime");
var Receipt = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime164.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime164.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m18.509-.013H5.491C4.118-.013,3,1.109,3,2.487v21.502l3.671-2.526,2.67,1.833,2.666-1.831,2.665,1.833,2.663-1.833,3.665,2.523V2.487C21,1.109,19.883-.013,18.509-.013Zm1.491,22.1l-2.665-1.834-2.663,1.833-2.665-1.833-2.666,1.832-2.671-1.834-2.67,1.837V2.487c0-.827.669-1.5,1.491-1.5h13.018c.822,0,1.491.673,1.491,1.5v19.6ZM7,7h10v1H7v-1Zm0,3h10v1H7v-1Zm0,3h7v1h-7v-1Z"
    }
  ) });
};

// src/components/icons/sendSVG/index.tsx
var import_jsx_runtime165 = require("react/jsx-runtime");
var Send = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime165.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime165.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M1.454,6.651c-.689,.197-1.208,.728-1.388,1.422-.18,.693,.016,1.41,.522,1.915l3.412,3.408v6.586h6.594l3.435,3.43c.384,.383,.886,.587,1.408,.587,.169,0,.341-.021,.511-.066,.694-.18,1.225-.695,1.417-1.375L24,.004,1.454,6.651Zm-.159,2.629c-.253-.253-.351-.61-.261-.956,.09-.347,.35-.613,.699-.713L21.513,1.78,5,18.293v-5.311l-3.706-3.702Zm15.11,13.001c-.096,.338-.361,.594-.708,.684-.348,.09-.706-.008-.96-.262l-3.728-3.722H5.725L22.23,2.477l-5.826,19.805Z"
    }
  ) });
};

// src/components/icons/spinnerSVG/index.tsx
var import_jsx_runtime166 = require("react/jsx-runtime");
var Spinner = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime166.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime166.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "m12.5.5v3c0,.276-.224.5-.5.5s-.5-.224-.5-.5V.5c0-.276.224-.5.5-.5s.5.224.5.5Zm-.5,19.5c-.276,0-.5.224-.5.5v3c0,.276.224.5.5.5s.5-.224.5-.5v-3c0-.276-.224-.5-.5-.5ZM4,12c0-.276-.224-.5-.5-.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5h3c.276,0,.5-.224.5-.5Zm19.5-.5h-3c-.276,0-.5.224-.5.5s.224.5.5.5h3c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM4.426,15.889l-2.584,1.524c-.238.141-.317.447-.177.685.094.158.26.246.431.246.087,0,.174-.022.254-.069l2.584-1.524c.238-.141.317-.447.177-.685-.142-.239-.447-.316-.685-.177Zm14.895-7.708c.087,0,.174-.022.254-.069l2.584-1.524c.238-.141.317-.447.177-.685-.142-.238-.447-.316-.685-.177l-2.584,1.524c-.238.141-.317.447-.177.685.094.158.26.246.431.246Zm2.838,9.232l-2.584-1.524c-.238-.139-.543-.062-.685.177-.141.237-.062.544.177.685l2.584,1.524c.08.047.167.069.254.069.171,0,.337-.088.431-.246.141-.237.062-.544-.177-.685ZM4.934,7.25l-2.584-1.524c-.237-.14-.544-.062-.685.177-.141.237-.062.544.177.685l2.584,1.524c.08.047.167.069.254.069.171,0,.337-.088.431-.246.141-.237.062-.544-.177-.685Zm1.653-5.408c-.142-.239-.448-.316-.685-.177-.238.141-.317.447-.177.685l1.524,2.584c.094.158.26.246.431.246.087,0,.174-.022.254-.069.238-.141.317-.447.177-.685l-1.524-2.584Zm10.163,17.225c-.142-.239-.447-.316-.685-.177-.238.141-.317.447-.177.685l1.524,2.584c.094.158.26.246.431.246.087,0,.174-.022.254-.069.238-.141.317-.447.177-.685l-1.524-2.584Zm-8.815-.177c-.237-.139-.544-.062-.685.177l-1.524,2.584c-.141.237-.062.544.177.685.08.047.167.069.254.069.171,0,.337-.088.431-.246l1.524-2.584c.141-.237.062-.544-.177-.685ZM18.098,1.665c-.237-.139-.543-.062-.685.177l-1.524,2.584c-.141.237-.062.544.177.685.08.047.167.069.254.069.171,0,.337-.088.431-.246l1.524-2.584c.141-.237.062-.544-.177-.685Z"
    }
  ) });
};

// src/components/icons/thoughtSVG/index.tsx
var import_jsx_runtime167 = require("react/jsx-runtime");
var Thought = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime167.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime167.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M3,22c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm2.5-4c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm18.499-7.917c-.039,2.979-2.391,5.562-5.354,5.882-.51,.057-1.028,.046-1.538-.032-.309-.042-.622,.056-.838,.274-1.136,1.156-2.652,1.793-4.27,1.793-1.95,0-3.786-.957-4.909-2.56-.142-.201-.358-.44-.591-.44-1.747,0-3.387-.684-4.617-1.924C.653,11.835-.016,10.189,0,8.442,.028,5.151,2.612,2.335,5.882,2.028c.595-.054,1.188-.03,1.764,.073,.305,.054,.604-.041,.819-.252,1.221-1.192,2.831-1.85,4.535-1.85,2.492,0,4.795,1.457,5.867,3.713,.109,.229,.325,.404,.579,.467,2.72,.674,4.592,3.102,4.553,5.903Zm-4.793-4.933c-.541-.134-1.006-.511-1.242-1.008-.907-1.909-2.855-3.143-4.964-3.143-1.441,0-2.804,.556-3.836,1.564-.445,.437-1.079,.636-1.693,.521-.319-.058-.646-.086-.974-.086-.173,0-.348,.008-.522,.024-2.765,.259-4.95,2.643-4.975,5.426-.013,1.479,.553,2.872,1.594,3.922,1.04,1.05,2.428,1.628,3.906,1.628,.365,0,.906,.15,1.409,.866,.937,1.336,2.466,2.134,4.091,2.134,1.347,0,2.609-.53,3.557-1.494,.438-.447,1.068-.66,1.7-.562,.427,.064,.857,.073,1.28,.026,2.47-.267,4.429-2.42,4.462-4.901,.032-2.335-1.527-4.357-3.793-4.919Z"
    }
  ) });
};

// src/components/icons/warningSVG/index.tsx
var import_jsx_runtime168 = require("react/jsx-runtime");
var Warning = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime168.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime168.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M11.5,14.5V6.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V14.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5Zm.5,2.5c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm11.61,3.07c-.64,1.23-1.99,1.93-3.71,1.93H4.1c-1.71,0-3.07-.7-3.71-1.93-.65-1.24-.47-2.87,.48-4.24L9.3,2.43c.62-.9,1.63-1.43,2.7-1.43s2.08,.53,2.69,1.41l8.44,13.43c.95,1.37,1.13,2.99,.48,4.23Zm-1.31-3.67s0-.01-.01-.02L13.86,2.96c-.42-.61-1.1-.96-1.86-.96s-1.44,.36-1.87,.98L1.71,16.38c-.75,1.08-.91,2.31-.43,3.23,.47,.9,1.47,1.39,2.82,1.39h15.81c1.35,0,2.35-.49,2.82-1.39,.48-.91,.32-2.14-.42-3.21Z"
    }
  ) });
};

// src/components/icons/hashSVG/index.tsx
var import_jsx_runtime169 = require("react/jsx-runtime");
var Hash = () => /* @__PURE__ */ (0, import_jsx_runtime169.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime169.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m23.5,7h-5.382l.877-6.433c.037-.273-.154-.525-.428-.563-.276-.039-.526.154-.563.428l-.896,6.567h-8.854l.877-6.433c.037-.273-.154-.525-.428-.563-.272-.039-.525.154-.563.428l-.896,6.567H1.5c-.276,0-.5.224-.5.5s.224.5.5.5h5.609l-1.091,8H.5c-.276,0-.5.224-.5.5s.224.5.5.5h5.382l-.877,6.433c-.037.273.154.525.428.563.023.003.045.004.068.004.246,0,.461-.182.495-.433l.896-6.567h8.854l-.877,6.433c-.037.273.154.525.428.563.023.003.045.004.068.004.246,0,.461-.182.495-.433l.896-6.567h5.745c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-5.609l1.091-8h5.518c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-7.618,9H7.027l1.091-8h8.854l-1.091,8Z"
  }
) });

// src/components/icons/globeSVG/index.tsx
var import_jsx_runtime170 = require("react/jsx-runtime");
var Globe = () => /* @__PURE__ */ (0, import_jsx_runtime170.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime170.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M12.039,.002s0,0,0,0c-.013,0-.026-.002-.039-.002-.005,0-.009,0-.014,0-.002,0-.003,0-.005,0C5.373,.011,0,5.39,0,12s5.383,12,12,12,12-5.383,12-12S18.638,.023,12.039,.002Zm9.747,6.998h-4.814c-1.067-2.669-2.712-4.781-3.731-5.925,3.734,.421,6.901,2.719,8.546,5.925Zm-4.786,5c0,1.407-.292,2.753-.731,4H7.731c-.439-1.247-.731-2.593-.731-4s.292-2.754,.73-4h8.539c.439,1.247,.731,2.593,.731,4Zm-1.122,5c-1.229,2.838-3.116,4.99-3.878,5.788-.762-.798-2.649-2.95-3.878-5.788h7.755ZM8.121,7c1.229-2.841,3.117-4.992,3.879-5.789,.762,.798,2.649,2.95,3.878,5.789h-7.757ZM10.757,1.075c-1.025,1.15-2.668,3.264-3.73,5.925H2.214C3.859,3.795,7.024,1.498,10.757,1.075ZM1.764,8H6.668c-.403,1.247-.668,2.589-.668,4s.265,2.752,.669,4H1.764c-.487-1.242-.764-2.588-.764-4s.277-2.758,.764-4Zm.45,9H7.029c1.067,2.669,2.712,4.781,3.731,5.925-3.734-.421-6.901-2.719-8.546-5.925Zm11.026,5.925c1.019-1.144,2.664-3.257,3.731-5.925h4.814c-1.645,3.206-4.812,5.504-8.546,5.925Zm8.996-6.925h-4.905c.404-1.248,.669-2.589,.669-4s-.265-2.752-.669-4h4.905c.487,1.242,.764,2.588,.764,4s-.277,2.758-.764,4Z"
  }
) });

// src/components/icons/flagSVG/index.tsx
var import_jsx_runtime171 = require("react/jsx-runtime");
var Flag = () => /* @__PURE__ */ (0, import_jsx_runtime171.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime171.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m15,4v-1.5c0-1.378-1.122-2.5-2.5-2.5H0v24h1v-11h10v1.5c0,1.378,1.122,2.5,2.5,2.5h10.5V4h-9ZM1,1h11.5c.827,0,1.5.673,1.5,1.5v9.5H1V1Zm22,15h-9.5c-.827,0-1.5-.673-1.5-1.5v-1.5h3V5h8v11Z"
  }
) });

// src/components/icons/heartSVG/index.tsx
var import_jsx_runtime172 = require("react/jsx-runtime");
var Heart = () => /* @__PURE__ */ (0, import_jsx_runtime172.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime172.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M17.75,1c-2.504,0-4.777,1.851-5.75,4.354-.973-2.504-3.246-4.354-5.75-4.354C2.804,1,0,3.804,0,7.25c0,6.76,9.754,14.07,11.709,15.466l.291,.208,.291-.208c1.956-1.396,11.709-8.707,11.709-15.466,0-3.446-2.804-6.25-6.25-6.25Zm-5.75,20.693C6.859,17.958,1,12.022,1,7.25,1,4.355,3.355,2,6.25,2c2.748,0,5.25,2.86,5.25,6h1c0-3.14,2.502-6,5.25-6,2.895,0,5.25,2.355,5.25,5.25,0,4.772-5.859,10.708-11,14.443Z"
  }
) });

// src/components/icons/thumbsUpSVG/index.tsx
var import_jsx_runtime173 = require("react/jsx-runtime");
var ThumbsUp = () => /* @__PURE__ */ (0, import_jsx_runtime173.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_runtime173.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M22.773,8.721h0c-.95-1.093-2.325-1.721-3.773-1.721h-4.87l.809-2.833c.57-3.009-3.887-4.446-5.152-1.602l-2.801,4.435h-2.485C2.019,7,0,9.019,0,11.5v6c0,2.481,2.019,4.5,4.5,4.5h13.795c2.477,0,4.605-1.849,4.951-4.302l.705-5c.202-1.435-.228-2.885-1.178-3.978ZM1,17.5v-6c0-1.93,1.57-3.5,3.5-3.5h2.512l-.011,13h-2.5c-1.93,0-3.5-1.57-3.5-3.5Zm21.961-4.941l-.705,5c-.277,1.962-1.979,3.441-3.961,3.441H8l.012-13.754,2.645-4.192c.772-1.868,3.601-.985,3.308,.895l-.979,3.414c-.043,.151-.014,.313,.081,.438,.095,.125,.242,.199,.399,.199h5.533c2.36-.054,4.344,2.228,3.961,4.559Z"
      }
    )
  }
);

// src/components/icons/eyeSVG/index.tsx
var import_jsx_runtime174 = require("react/jsx-runtime");
var Eye = () => /* @__PURE__ */ (0, import_jsx_runtime174.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime174.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.312,9.733c-1.684-2.515-5.394-6.733-11.312-6.733S2.373,7.219,.688,9.733c-.922,1.377-.922,3.156,0,4.533,1.684,2.515,5.394,6.733,11.312,6.733s9.627-4.219,11.312-6.733c.922-1.377,.922-3.156,0-4.533Zm-.831,3.977c-1.573,2.349-5.027,6.29-10.48,6.29S3.093,16.059,1.52,13.71c-.696-1.039-.696-2.381,0-3.42,1.573-2.349,5.027-6.29,10.48-6.29s8.907,3.941,10.48,6.29c.696,1.039,.696,2.381,0,3.42ZM12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"
  }
) });

// src/components/icons/eyeOffSVG/index.tsx
var import_jsx_runtime175 = require("react/jsx-runtime");
var EyeOff = () => /* @__PURE__ */ (0, import_jsx_runtime175.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime175.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.312,9.733c-.839-1.252-2.18-2.926-4.046-4.292l3.588-3.588c.195-.195,.195-.512,0-.707s-.512-.195-.707,0l-3.725,3.725c-1.743-1.089-3.877-1.872-6.421-1.872C6.082,3,2.373,7.219,.688,9.733c-.922,1.377-.922,3.156,0,4.533,.839,1.252,2.18,2.926,4.046,4.292l-3.588,3.588c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l3.725-3.725c1.743,1.089,3.877,1.872,6.421,1.872,5.918,0,9.627-4.219,11.312-6.733,.922-1.377,.922-3.156,0-4.533ZM1.52,13.71c-.696-1.039-.696-2.381,0-3.42,1.573-2.349,5.027-6.29,10.48-6.29,2.23,0,4.12,.664,5.689,1.604l-2.543,2.543c-.862-.705-1.948-1.146-3.146-1.146-2.757,0-5,2.243-5,5,0,1.198,.441,2.284,1.146,3.146l-2.692,2.692c-1.818-1.297-3.126-2.922-3.935-4.129Zm7.334,.73c-.527-.677-.853-1.517-.853-2.44,0-2.206,1.794-4,4-4,.922,0,1.762,.327,2.44,.853l-5.587,5.587Zm6.294-4.88c.527,.677,.853,1.517,.853,2.44,0,2.206-1.794,4-4,4-.922,0-1.762-.327-2.44-.853l5.587-5.587Zm7.334,4.15c-1.573,2.349-5.027,6.29-10.48,6.29-2.23,0-4.12-.664-5.689-1.604l2.543-2.543c.862,.705,1.948,1.146,3.146,1.146,2.757,0,5-2.243,5-5,0-1.198-.441-2.284-1.146-3.146l2.692-2.692c1.818,1.297,3.126,2.922,3.935,4.129,.696,1.039,.696,2.381,0,3.42Z"
  }
) });

// src/components/icons/layersSVG/index.tsx
var import_jsx_runtime176 = require("react/jsx-runtime");
var Layers = () => /* @__PURE__ */ (0, import_jsx_runtime176.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime176.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M.981,10.198l8.952,5.243c.638,.374,1.352,.561,2.066,.561s1.429-.187,2.066-.56l8.952-5.243c.614-.36,.981-.995,.981-1.698s-.367-1.338-.981-1.698L14.066,1.56c-1.275-.748-2.857-.747-4.133,0L.981,6.802c-.614,.36-.981,.995-.981,1.698s.367,1.338,.981,1.698Zm.506-2.532L10.439,2.422c.481-.282,1.021-.423,1.561-.423s1.079,.141,1.561,.423l8.952,5.243c.306,.178,.487,.49,.487,.834s-.182,.656-.487,.834l-8.952,5.244c-.963,.563-2.158,.564-3.121,0L1.487,9.334c-.306-.178-.487-.49-.487-.834s.182-.656,.487-.834Zm22.444,5.352c.14,.239,.059,.545-.18,.684l-9.956,5.803c-.552,.331-1.173,.497-1.794,.497s-1.247-.167-1.803-.5L.248,13.701c-.238-.139-.319-.445-.18-.684,.139-.239,.445-.318,.684-.18l9.956,5.803c.799,.479,1.784,.48,2.579,.003l9.961-5.807c.237-.138,.544-.059,.684,.18Zm0,4.001c.14,.239,.059,.545-.18,.684l-9.956,5.803c-.552,.331-1.173,.497-1.794,.497s-1.247-.167-1.803-.5L.248,17.703c-.238-.139-.319-.445-.18-.684,.139-.239,.445-.319,.684-.18l9.956,5.803c.799,.479,1.784,.48,2.579,.003l9.961-5.807c.237-.139,.544-.059,.684,.18Z"
  }
) });

// src/components/icons/gridSVG/index.tsx
var import_jsx_runtime177 = require("react/jsx-runtime");
var Grid = () => /* @__PURE__ */ (0, import_jsx_runtime177.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime177.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M4.5,17.5H2c-1.103,0-2,.897-2,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2v-2.5c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1H2c-.551,0-1-.448-1-1v-2.5c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5Zm16.5-4.5h-2.5c-1.103,0-2,.897-2,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2v-2.5c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1h-2.5c-.551,0-1-.448-1-1v-2.5c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5ZM4.5,8.75H2c-1.103,0-2,.897-2,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2v-2.5c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1H2c-.551,0-1-.448-1-1v-2.5c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5Zm16.5-4.5h-2.5c-1.103,0-2,.897-2,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2v-2.5c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1h-2.5c-.551,0-1-.448-1-1v-2.5c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5ZM4.5,0H2C.897,0,0,.897,0,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2V2c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1H2c-.551,0-1-.448-1-1V2c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5Zm7.75,13h-2.5c-1.103,0-2,.897-2,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2v-2.5c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1h-2.5c-.551,0-1-.448-1-1v-2.5c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5Zm-1-13.25h-2.5c-1.103,0-2,.897-2,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2v-2.5c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1h-2.5c-.551,0-1-.448-1-1v-2.5c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5ZM13.25,0h-2.5c-1.103,0-2,.897-2,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2V2c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1h-2.5c-.551,0-1-.448-1-1V2c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5ZM22,0h-2.5c-1.103,0-2,.897-2,2v2.5c0,1.103,.897,2,2,2h2.5c1.103,0,2-.897,2-2V2c0-1.103-.897-2-2-2Zm1,4.5c0,.552-.449,1-1,1h-2.5c-.551,0-1-.448-1-1V2c0-.552,.449-1,1-1h2.5c.551,0,1,.448,1,1v2.5Z"
  }
) });

// src/components/icons/layoutSVG/index.tsx
var import_jsx_runtime178 = require("react/jsx-runtime");
var Layout = () => /* @__PURE__ */ (0, import_jsx_runtime178.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime178.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M3,11H12c1.654,0,3-1.346,3-3V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v5c0,1.654,1.346,3,3,3ZM1,3C1,1.897,1.897,1,3,1H12c1.103,0,2,.897,2,2v5c0,1.103-.897,2-2,2H3c-1.103,0-2-.897-2-2V3ZM21,0h-1c-1.654,0-3,1.346-3,3v5c0,1.654,1.346,3,3,3h1c1.654,0,3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm2,8c0,1.103-.897,2-2,2h-1c-1.103,0-2-.897-2-2V3c0-1.103,.897-2,2-2h1c1.103,0,2,.897,2,2v5ZM4,13h-1c-1.654,0-3,1.346-3,3v5c0,1.654,1.346,3,3,3h1c1.654,0,3-1.346,3-3v-5c0-1.654-1.346-3-3-3Zm2,8c0,1.103-.897,2-2,2h-1c-1.103,0-2-.897-2-2v-5c0-1.103,.897-2,2-2h1c1.103,0,2,.897,2,2v5Zm15-8H12c-1.654,0-3,1.346-3,3v5c0,1.654,1.346,3,3,3h9c1.654,0,3-1.346,3-3v-5c0-1.654-1.346-3-3-3Zm2,8c0,1.103-.897,2-2,2H12c-1.103,0-2-.897-2-2v-5c0-1.103,.897-2,2-2h9c1.103,0,2,.897,2,2v5Z"
  }
) });

// src/components/icons/minusSVG/index.tsx
var import_jsx_runtime179 = require("react/jsx-runtime");
var Minus = () => /* @__PURE__ */ (0, import_jsx_runtime179.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime179.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M5 11h14v2H5V11z"
  }
) });

// src/components/icons/addCircularFillSVG/index.tsx
var import_jsx_runtime180 = require("react/jsx-runtime");
var AddCircularFill = () => /* @__PURE__ */ (0, import_jsx_runtime180.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime180.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm4 13h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"
  }
) });

// src/components/icons/boldSVG/index.tsx
var import_jsx_runtime181 = require("react/jsx-runtime");
var Bold = () => /* @__PURE__ */ (0, import_jsx_runtime181.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime181.jsx)(
  "path",
  {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
  }
) });

// src/components/icons/italicSVG/index.tsx
var import_jsx_runtime182 = require("react/jsx-runtime");
var Italic = () => /* @__PURE__ */ (0, import_jsx_runtime182.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_runtime182.jsx)(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
      }
    )
  }
);

// src/components/icons/underlineSVG/index.tsx
var import_jsx_runtime183 = require("react/jsx-runtime");
var Underline = () => /* @__PURE__ */ (0, import_jsx_runtime183.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime183.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M4,12V0h1V12c0,3.86,3.14,7,7,7s7-3.14,7-7V0h1V12c0,4.411-3.589,8-8,8s-8-3.589-8-8ZM0,23v1H24v-1H0Z"
  }
) });

// src/components/icons/alignLeftSVG/index.tsx
var import_jsx_runtime184 = require("react/jsx-runtime");
var AlignLeft = () => /* @__PURE__ */ (0, import_jsx_runtime184.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime184.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M0,4.5c0-.276,.224-.5,.5-.5H23.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H.5c-.276,0-.5-.224-.5-.5Zm.5,5.5H15.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm23,4H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-8,5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H15.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
  }
) });

// src/components/icons/alignCenterSVG/index.tsx
var import_jsx_runtime185 = require("react/jsx-runtime");
var AlignCenter = () => /* @__PURE__ */ (0, import_jsx_runtime185.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime185.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M24,4v1H0v-1H24ZM4,9v1H20v-1H4ZM0,15H24v-1H0v1Zm4,5H20v-1H4v1Z"
  }
) });

// src/components/icons/alignRightSVG/index.tsx
var import_jsx_runtime186 = require("react/jsx-runtime");
var AlignRight = () => /* @__PURE__ */ (0, import_jsx_runtime186.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime186.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    transform: "scale(-1 1) translate(-24 0)",
    d: "M0,4.5c0-.276,.224-.5,.5-.5H23.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H.5c-.276,0-.5-.224-.5-.5Zm.5,5.5H15.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm23,4H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-8,5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H15.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
  }
) });

// src/components/icons/alignJustifySVG/index.tsx
var import_jsx_runtime187 = require("react/jsx-runtime");
var AlignJustify = () => /* @__PURE__ */ (0, import_jsx_runtime187.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime187.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M0,4.5c0-.276,.224-.5,.5-.5H23.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H.5c-.276,0-.5-.224-.5-.5Zm23.5,4.5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm0,5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm0,5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
  }
) });

// src/components/icons/textSVG/index.tsx
var import_jsx_runtime188 = require("react/jsx-runtime");
var Text = () => /* @__PURE__ */ (0, import_jsx_runtime188.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime188.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M24,7.5v9c0,2.481-2.019,4.5-4.5,4.5H10.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h9c1.93,0,3.5-1.57,3.5-3.5V7.5c0-1.93-1.57-3.5-3.5-3.5H10.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h9c2.481,0,4.5,2.019,4.5,4.5ZM5,20.5c0-.276-.224-.5-.5-.5-1.93,0-3.5-1.57-3.5-3.5V7.5c0-1.93,1.57-3.5,3.5-3.5,.276,0,.5-.224,.5-.5s-.224-.5-.5-.5C2.019,3,0,5.019,0,7.5v9c0,2.481,2.019,4.5,4.5,4.5,.276,0,.5-.224,.5-.5Zm11.5-3.5c.276,0,.5-.224,.5-.5V8h3.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H12.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h3.5v8.5c0,.276,.224,.5,.5,.5Zm-6,6h-1c-.827,0-1.5-.673-1.5-1.5V2.5c0-.827,.673-1.5,1.5-1.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.821,0-1.544,.403-2,1.015-.456-.613-1.179-1.015-2-1.015h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.827,0,1.5,.673,1.5,1.5V21.5c0,.827-.673,1.5-1.5,1.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.821,0,1.544-.403,2-1.015,.456,.613,1.179,1.015,2,1.015h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
  }
) });

// src/components/icons/quoteSVG/index.tsx
var import_jsx_runtime189 = require("react/jsx-runtime");
var Quote = () => /* @__PURE__ */ (0, import_jsx_runtime189.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime189.jsx)("path", { d: "M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" }) });

// src/components/icons/moonSVG/index.tsx
var import_jsx_runtime190 = require("react/jsx-runtime");
var Moon = () => /* @__PURE__ */ (0, import_jsx_runtime190.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ (0, import_jsx_runtime190.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M12,12c0-3.146,1.446-5.925,4.421-8.494,.47-.405,.679-1.014,.562-1.628-.118-.614-.538-1.101-1.124-1.303C14.22,.01,12.008-.153,10.083,.152,4.827,.987,.613,5.432,.066,10.723c-.657,6.352,3.744,12.117,10.017,13.125,.656,.105,1.321,.15,1.999,.153,1.362,0,2.701-.204,3.777-.576,.585-.202,1.005-.689,1.124-1.303,.118-.614-.092-1.223-.562-1.628-2.975-2.569-4.421-5.347-4.421-8.494Zm3.533,10.479c-.975,.336-2.197,.521-3.453,.521-.62-.005-1.235-.043-1.839-.14C4.491,21.937,.458,16.65,1.061,10.826,1.562,5.978,5.423,1.904,10.24,1.14c.597-.095,1.223-.141,1.847-.141,1.23,0,2.456,.179,3.446,.521,.243,.084,.418,.288,.467,.546,.05,.259-.037,.514-.232,.683-3.208,2.77-4.768,5.796-4.768,9.25s1.56,6.48,4.768,9.25c.195,.169,.282,.424,.232,.683-.049,.258-.224,.462-.467,.546Z"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime190.jsx)(
    "circle",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      cx: "17",
      cy: "15",
      r: "1"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime190.jsx)(
    "circle",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      cx: "23",
      cy: "19",
      r: "1"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime190.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      d: "M23.658,8.974c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474l-1.263-.421-.421-1.263c-.136-.408-.812-.408-.948,0l-.419,1.257-1.256,.393c-.205,.064-.347,.252-.351,.468s.13,.409,.333,.48l1.27,.449,.423,1.269c.068,.204,.259,.342,.474,.342s.406-.138,.474-.342l.421-1.263,1.263-.421Z"
    }
  )
] });

// src/components/icons/undoSVG/index.tsx
var import_jsx_runtime191 = require("react/jsx-runtime");
var Undo = () => /* @__PURE__ */ (0, import_jsx_runtime191.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime191.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m24,11.501v7.999c0,2.481-2.019,4.5-4.5,4.5H2.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h17c1.93,0,3.5-1.57,3.5-3.5v-7.999c0-.935-.364-1.814-1.025-2.475s-1.54-1.025-2.475-1.025h0l-18.401.004c.072.204.179.398.342.561l4.596,4.596c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146L.732,9.273C.249,8.789.006,8.155.003,7.519c0-.005-.003-.009-.003-.014,0-.005.003-.009.003-.014.003-.636.246-1.271.73-1.754L5.329,1.141c.195-.195.512-.195.707,0s.195.512,0,.707L1.439,6.444c-.163.163-.269.357-.342.561l18.401-.004h0c1.202,0,2.332.468,3.182,1.318.851.85,1.318,1.98,1.318,3.182Z"
  }
) });

// src/components/icons/redoSVG/index.tsx
var import_jsx_runtime192 = require("react/jsx-runtime");
var Redo = () => /* @__PURE__ */ (0, import_jsx_runtime192.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime192.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m22.561,8.566c.163-.163.269-.357.342-.561l-18.401-.004h0c-.935,0-1.813.364-2.475,1.025s-1.025,1.54-1.025,2.475v7.999c0,1.93,1.57,3.5,3.5,3.5h17c.276,0,.5.224.5.5s-.224.5-.5.5H4.5c-2.481,0-4.5-2.019-4.5-4.5v-7.999c0-1.202.468-2.333,1.318-3.182.85-.85,1.979-1.318,3.182-1.318h0l18.401.004c-.072-.204-.179-.398-.342-.561l-4.596-4.596c-.195-.195-.195-.512,0-.707s.512-.195.707,0l4.596,4.596c.484.484.726,1.119.73,1.755,0,.005.003.009.003.014,0,.005-.003.009-.003.014-.004.635-.246,1.27-.73,1.754l-4.596,4.596c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l4.596-4.596Z"
  }
) });

// src/components/icons/lineSVG/index.tsx
var import_jsx_runtime193 = require("react/jsx-runtime");
var Line = () => /* @__PURE__ */ (0, import_jsx_runtime193.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime193.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.5,24c-.13,0-.26-.05-.35-.15L.15,.85C-.05,.66-.05,.34,.15,.15S.66-.05,.85,.15L23.85,23.15c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"
  }
) });

// src/components/icons/lineCircleSVG/index.tsx
var import_jsx_runtime194 = require("react/jsx-runtime");
var LineCircle = () => /* @__PURE__ */ (0, import_jsx_runtime194.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime194.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-23C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Z"
  }
) });

// src/components/icons/lineSquareSVG/index.tsx
var import_jsx_runtime195 = require("react/jsx-runtime");
var LineSquare = () => /* @__PURE__ */ (0, import_jsx_runtime195.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime195.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m24,24H0V0h24v24Zm-23-1h22V1H1v22Z"
  }
) });

// src/components/icons/fingerClickSVG/index.tsx
var import_jsx_runtime196 = require("react/jsx-runtime");
var FingerClick = () => /* @__PURE__ */ (0, import_jsx_runtime196.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime196.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m23 22.5v1c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-1.637-.995-3.027-2.596-3.627l-6.086-2.408c-.19-.075-.316-.26-.316-.465v-5.393c0-.789-.535-1.471-1.245-1.586-.448-.073-.886.046-1.227.336-.336.286-.529.702-.529 1.143v9.424c0 .42-.235.795-.614.978-.379.182-.818.133-1.147-.128l-1.688-1.344c-.007-.006-.01-.014-.017-.02-.004-.004-.01-.004-.014-.008-.606-.562-1.553-.529-2.115.073-.565.604-.534 1.557.064 2.118l1.633 1.551c.325.309.107.856-.342.856-.127 0-.249-.048-.341-.135l-1.64-1.548c-1-.937-1.048-2.518-.106-3.524.928-.994 2.482-1.054 3.49-.149.003.002.007.003.01.005l1.688 1.344.138-.067v-9.426c0-.734.321-1.429.881-1.905s1.305-.677 2.035-.562c1.188.194 2.084 1.3 2.084 2.573v5.053l5.762 2.28c1.993.747 3.236 2.496 3.236 4.56zm-11.5-17.5c.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4c0 .276.224.5.5.5zm4.243 1.757c.128 0 .256-.049.354-.146l2.829-2.829c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-2.829 2.829c-.195.195-.195.512 0 .707.098.098.226.146.354.146zm-8.839-.146c.195.195.512.195.707 0s.195-.512 0-.707l-2.829-2.829c-.195-.195-.512-.195-.707 0s-.195.512 0 .707zm10.096 3.889c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5zm-11 0c0-.276-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5z"
  }
) });

// src/components/icons/handSVG/index.tsx
var import_jsx_runtime197 = require("react/jsx-runtime");
var Hand = () => /* @__PURE__ */ (0, import_jsx_runtime197.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime197.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m22.119,3.595c-.56-.477-1.301-.679-2.035-.562-.403.065-.772.236-1.084.482v-.016c0-1.378-1.122-2.5-2.5-2.5-.635,0-1.215.238-1.656.63-.354-.951-1.271-1.63-2.344-1.63-1.378,0-2.5,1.122-2.5,2.5v.017c-.312-.246-.681-.417-1.084-.483-.732-.116-1.475.085-2.035.562-.56.476-.881,1.17-.881,1.905v10.601l-1.796-1.428c-1.006-.94-2.588-.888-3.529.119s-.889,2.593.111,3.53l3.354,3.234c2.304,2.221,5.334,3.444,8.534,3.444h2.352c4.397,0,7.974-3.577,7.974-7.974V5.5c0-.734-.321-1.429-.881-1.905Zm-.119,12.431c0,3.846-3.128,6.974-6.974,6.974h-2.352c-2.939,0-5.724-1.124-7.84-3.164l-3.359-3.239c-.604-.566-.635-1.519-.07-2.123.273-.292.644-.46,1.043-.474.409-.007.781.129,1.103.428l3.449,2.746V4.5c0-.44.193-.857.529-1.143.341-.29.778-.408,1.227-.336.709.115,1.245.797,1.245,1.586v6.393h1V2.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v8.5h1V3.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v7.5h1v-5.393c0-.789.535-1.471,1.244-1.586.451-.074.886.046,1.227.336.336.286.529.703.529,1.143v10.526Z"
  }
) });

// src/components/icons/zoomInSVG/index.tsx
var import_jsx_runtime198 = require("react/jsx-runtime");
var ZoomIn = () => /* @__PURE__ */ (0, import_jsx_runtime198.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime198.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M14,10c0,.276-.224,.5-.5,.5h-3v3c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-3h-3c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3v-3c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v3h3c.276,0,.5,.224,.5,.5Zm9.854,13.854c-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146l-6.449-6.449c-1.775,1.607-4.12,2.596-6.697,2.596C4.486,20,0,15.514,0,10S4.486,0,10,0s10,4.486,10,10c0,2.577-.989,4.922-2.596,6.697l6.449,6.449c.195,.195,.195,.512,0,.707Zm-4.854-13.854C19,5.038,14.963,1,10,1S1,5.038,1,10s4.037,9,9,9,9-4.038,9-9Z"
  }
) });

// src/components/icons/zoomOutSVG/index.tsx
var import_jsx_runtime199 = require("react/jsx-runtime");
var ZoomOut = () => /* @__PURE__ */ (0, import_jsx_runtime199.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime199.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M14,10c0,.276-.224,.5-.5,.5H6.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h7c.276,0,.5,.224,.5,.5Zm9.854,13.854c-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146l-6.449-6.449c-1.775,1.607-4.12,2.596-6.697,2.596C4.486,20,0,15.514,0,10S4.486,0,10,0s10,4.486,10,10c0,2.577-.988,4.922-2.596,6.697l6.449,6.449c.195,.195,.195,.512,0,.707Zm-13.854-4.854c4.962,0,9-4.038,9-9S14.962,1,10,1,1,5.038,1,10s4.038,9,9,9Z"
  }
) });

// src/components/icons/rotateCwSVG/index.tsx
var import_jsx_runtime200 = require("react/jsx-runtime");
var RotateCw = () => /* @__PURE__ */ (0, import_jsx_runtime200.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime200.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.989,12.521c-.275,6.437-5.542,11.479-11.989,11.479C5.383,24,0,18.617,0,12S5.383,0,12,0c4.04,0,7.789,2.066,10,5.414V.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5V5.5c0,.827-.673,1.5-1.5,1.5h-5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4.692C19.169,2.909,15.718,1,12,1,5.935,1,1,5.935,1,12s4.935,11,11,11c5.91,0,10.737-4.621,10.99-10.521,.012-.275,.246-.477,.521-.479,.276,.013,.49,.245,.478,.521Z"
  }
) });

// src/components/icons/rotateCcwSVG/index.tsx
var import_jsx_runtime201 = require("react/jsx-runtime");
var RotateCcw = () => /* @__PURE__ */ (0, import_jsx_runtime201.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime201.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M24,12c0,6.617-5.383,12-12,12C5.553,24,.287,18.958,.011,12.521c-.012-.276,.202-.509,.478-.521,.271,.011,.509,.202,.521,.479,.252,5.9,5.08,10.521,10.99,10.521,6.065,0,11-4.935,11-11S18.065,1,12,1c-3.751,0-7.159,1.87-9.202,5H7.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H2.5c-.827,0-1.5-.673-1.5-1.5V.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5V5.399C4.232,2.019,7.931,0,12,0c6.617,0,12,5.383,12,12Z"
  }
) });

// src/components/icons/cropSVG/index.tsx
var import_jsx_runtime202 = require("react/jsx-runtime");
var Crop = () => /* @__PURE__ */ (0, import_jsx_runtime202.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime202.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M24,19h-4V6.5c0-1.379-1.122-2.5-2.5-2.5H5V0h-1V4H0v1H4v12.5c0,1.379,1.122,2.5,2.5,2.5h12.5v4h1v-4h4v-1Zm-17.5,0c-.827,0-1.5-.673-1.5-1.5V5h12.5c.827,0,1.5,.673,1.5,1.5v12.5H6.5Z"
  }
) });

// src/components/icons/focusSVG/index.tsx
var import_jsx_runtime203 = require("react/jsx-runtime");
var Focus = () => /* @__PURE__ */ (0, import_jsx_runtime203.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime203.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m1 7h-1v-4.5c0-1.378 1.122-2.5 2.5-2.5h4.5v1h-4.5c-.827 0-1.5.673-1.5 1.5zm0 14.5v-4.5h-1v4.5c0 1.379 1.122 2.5 2.5 2.5h4.5v-1h-4.5c-.827 0-1.5-.673-1.5-1.5zm22 0c0 .827-.673 1.5-1.5 1.5h-4.5v1h4.5c1.378 0 2.5-1.121 2.5-2.5v-4.5h-1zm-1.5-21.5h-4.5v1h4.5c.827 0 1.5.673 1.5 1.5v4.5h1v-4.5c0-1.378-1.122-2.5-2.5-2.5zm-4.5 12.5v-1h-4.5v-4.5h-1v4.5h-4.5v1h4.5v4.5h1v-4.5z"
  }
) });

// src/components/icons/scanSVG/index.tsx
var import_jsx_runtime204 = require("react/jsx-runtime");
var Scan = () => /* @__PURE__ */ (0, import_jsx_runtime204.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime204.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "m0,11h24v1H0v-1ZM1,2.5c0-.827.673-1.5,1.5-1.5h4.5V0H2.5C1.122,0,0,1.122,0,2.5v4.5h1V2.5Zm0,19v-4.5H0v4.5c0,1.378,1.122,2.5,2.5,2.5h4.5v-1H2.5c-.827,0-1.5-.673-1.5-1.5Zm22,0c0,.827-.673,1.5-1.5,1.5h-4.5v1h4.5c1.378,0,2.5-1.122,2.5-2.5v-4.5h-1v4.5ZM21.5,0h-4.5v1h4.5c.827,0,1.5.673,1.5,1.5v4.5h1V2.5c0-1.378-1.122-2.5-2.5-2.5Z"
  }
) });

// src/components/icons/targetSVG/index.tsx
var import_jsx_runtime205 = require("react/jsx-runtime");
var Target = () => /* @__PURE__ */ (0, import_jsx_runtime205.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime205.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.72,9.39c.19,.85,.28,1.73,.28,2.61,0,6.62-5.38,12-12,12S0,18.62,0,12,5.38,0,12,0c.88,0,1.76,.1,2.61,.28,.27,.06,.44,.33,.38,.6-.06,.27-.33,.44-.6,.38-.78-.17-1.59-.26-2.39-.26C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11c0-.81-.09-1.61-.26-2.39-.06-.27,.11-.54,.38-.6,.27-.06,.54,.11,.6,.38ZM13.4,5.14c.27,.05,.53-.12,.59-.39,.05-.27-.12-.53-.39-.59-.52-.11-1.06-.16-1.6-.16-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8c0-.54-.05-1.08-.16-1.6-.05-.27-.32-.44-.59-.39-.27,.06-.45,.32-.39,.59,.09,.46,.14,.93,.14,1.4,0,3.86-3.14,7-7,7s-7-3.14-7-7,3.14-7,7-7c.47,0,.94,.05,1.4,.14Zm-1.83,3.89c.27-.04,.46-.29,.42-.57s-.29-.47-.57-.42c-1.96,.28-3.43,1.98-3.43,3.96,0,2.21,1.79,4,4,4,1.98,0,3.68-1.47,3.96-3.43,.04-.27-.15-.53-.42-.57-.27-.04-.53,.15-.57,.42-.21,1.47-1.49,2.57-2.97,2.57-1.65,0-3-1.35-3-3,0-1.48,1.1-2.76,2.57-2.97Zm4.43-1.74v-2.96c0-.67,.26-1.3,.73-1.77L19.15,.15c.14-.14,.36-.19,.54-.11,.19,.08,.31,.26,.31,.46v3.5h3.5c.2,0,.38,.12,.46,.31,.08,.19,.03,.4-.11,.54l-2.41,2.41c-.47,.47-1.1,.73-1.77,.73h-2.96l-4.35,4.35c-.1,.1-.23,.15-.35,.15s-.26-.05-.35-.15c-.2-.2-.2-.51,0-.71l4.35-4.35Zm1-.29h2.67c.4,0,.78-.16,1.06-.44l1.56-1.56h-2.79c-.28,0-.5-.22-.5-.5V1.71l-1.56,1.56c-.28,.28-.44,.66-.44,1.06v2.67Z"
  }
) });

// src/components/icons/sunSVG/index.tsx
var import_jsx_runtime206 = require("react/jsx-runtime");
var Sun = () => /* @__PURE__ */ (0, import_jsx_runtime206.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime206.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4ZM12,3.5c.276,0,.5-.224,.5-.5V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v2.5c0,.276,.224,.5,.5,.5Zm0,17c-.276,0-.5,.224-.5,.5v2.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-2.5c0-.276-.224-.5-.5-.5ZM3.5,12c0-.276-.224-.5-.5-.5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5c.276,0,.5-.224,.5-.5Zm20,0c0-.276-.224-.5-.5-.5h-2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5c.276,0,.5-.224,.5-.5ZM5.636,5.636c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l1.768,1.768c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707l-1.768-1.768ZM17.657,17.657c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l1.768,1.768c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707l-1.768-1.768ZM6.343,18.364l-1.768,1.768c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l1.768-1.768c.195-.195,.195-.512,0-.707s-.512-.195-.707,0ZM18.364,6.343l1.768-1.768c.195-.195,.195-.512,0-.707s-.512-.195-.707,0l-1.768,1.768c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146Z"
  }
) });

// src/components/icons/cloudRainSVG/index.tsx
var import_jsx_runtime207 = require("react/jsx-runtime");
var CloudRain = () => /* @__PURE__ */ (0, import_jsx_runtime207.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime207.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M15.748,18H5.726C2.757,18,.25,15.787,.019,12.962c-.145-1.773,.578-3.517,1.935-4.662,.51-.43,.708-1.072,.507-1.636-.511-1.432-.597-2.994-.248-4.518C2.928-.972,5.538-1.4,8.708-.902c3.898,.607,6.508,3.035,7.223,6.153,.156,.462,.513,.817,.979,.974,3.543,1.195,5.766,4.638,5.404,8.373-.392,4.04-3.999,7.204-8.214,7.204H5.726C2.757,21.804,.25,19.591,.019,16.766ZM9.979,2.002c-.369,0-.742,.029-1.117,.088C6.091,2.525,3.81,4.647,3.186,7.37c-.306,1.337-.232,2.706,.215,3.958,.343,.961,.028,2.036-.804,2.736-1.126,.951-1.703,2.343-1.583,3.816,.189,2.311,2.258,4.12,4.71,4.12h10.022c3.705,0,6.876-2.768,7.218-6.3,.316-3.27-1.627-6.284-4.728-7.329-.766-.257-1.352-.842-1.607-1.603-.972-2.89-3.667-4.766-6.652-4.766ZM7.5,21c-.276,0-.5,.224-.5,.5v1c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1c0-.276-.224-.5-.5-.5Zm4,2c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1Zm3.5-2c-.276,0-.5,.224-.5,.5v1c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1c0-.276-.224-.5-.5-.5Z"
  }
) });

// src/components/icons/snowflakeSVG/index.tsx
var import_jsx_runtime208 = require("react/jsx-runtime");
var Snowflake = () => /* @__PURE__ */ (0, import_jsx_runtime208.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime208.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M12.5,0c-.276,0-.5,.224-.5,.5v4.793l-1.646-1.646c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l2,2c.195,.195,.512,.195,.707,0l2-2c.195-.195,.195-.512,0-.707s-.512-.195-.707,0l-1.646,1.646V.5c0-.276-.224-.5-.5-.5Zm0,24c.276,0,.5-.224,.5-.5v-4.793l1.646,1.646c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707l-2-2c-.195-.195-.512-.195-.707,0l-2,2c-.195,.195-.195,.512,0,.707s.512,.195,.707,0l1.646-1.646v4.793c0,.276,.224,.5,.5,.5Zm11.5-11.5c0,.276-.224,.5-.5,.5h-4.793l1.646,1.646c.195,.195,.195,.512,0,.707-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146l-2-2c-.195-.195-.195-.512,0-.707l2-2c.195-.195,.512-.195,.707,0s.195,.512,0,.707l-1.646,1.646h4.793c.276,0,.5,.224,.5,.5Zm-24,0c0-.276,.224-.5,.5-.5h4.793l-1.646-1.646c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l2,2c.195,.195,.195,.512,0,.707l-2,2c-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l1.646-1.646H.5c-.276,0-.5,.224-.5,.5Zm17.657-8.864l-3.389,3.389-.608,2.268,2.268-.608,3.389-3.389c.195-.195,.195-.512,0-.707s-.512-.195-.707,0l-2.975,2.975-1.168,.312,.312-1.168,2.975-2.975c.195-.195,.195-.512,0-.707s-.512-.195-.707,0Zm-10.314,0c.195-.195,.195-.512,0-.707s-.512-.195-.707,0L3.257,6.722c-.195,.195-.195,.512,0,.707s.512,.195,.707,0l2.975-2.975,.312,1.168-1.168-.312-2.975,2.975c-.195,.195-.195,.512,0,.707s.512,.195,.707,0l3.389-3.389,2.268-.608-.608-2.268Zm8.046,12.728c-.195-.195-.512-.195-.707,0l-2.975,2.975-.312-1.168,1.168,.312,2.975-2.975c.195-.195,.195-.512,0-.707s-.512-.195-.707,0l-3.389,3.389-.608,2.268,2.268-.608,3.389-3.389c.195-.195,.195-.512,0-.707Zm-9.778,0c-.195,.195-.195,.512,0,.707l3.389,3.389,2.268,.608-.608-2.268-3.389-3.389c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l2.975,2.975-1.168-.312,.312-1.168-2.975-2.975c-.195-.195-.512-.195-.707,0Zm3.889-4.364c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Z"
  }
) });

// src/components/icons/mapSVG/index.tsx
var import_jsx_runtime209 = require("react/jsx-runtime");
var Map = () => /* @__PURE__ */ (0, import_jsx_runtime209.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime209.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.485,.075c-.166-.1-.371-.1-.537,0l-6.448,3.869L9.453,.075c-.083-.05-.178-.075-.274-.075s-.191,.025-.274,.075L.705,4.575c-.166,.1-.267,.279-.267,.472l-.438,18c-.001,.144,.055,.282,.157,.382,.102,.1,.239,.152,.38,.146l6.961-.321,6.724,1.721c.069,.018,.141,.025,.212,.025,.069,0,.139-.008,.206-.024l8.662-2.121c.268-.065,.437-.327,.438-.602V.547c0-.193-.1-.372-.267-.472ZM1,5.469L8.479,1.115l-.055,5.515-7.376,2.768-.049-3.929ZM7.498,22.503l-6.449,.298,.049-7.802,6.449-2.419,.049,7.501-.098,2.421Zm0-11.421l-6.498,2.439,.049-3.951,6.449-2.419v3.931Zm1-.521V5.066l6.502,3.851v15.983l-6.502-1.665v-12.674Zm13,11.939l-5.5,1.347V8.962l-.049-8.015,5.549,3.329v18.224Z"
  }
) });

// src/components/icons/mapPinSVG/index.tsx
var import_jsx_runtime210 = require("react/jsx-runtime");
var MapPin = () => /* @__PURE__ */ (0, import_jsx_runtime210.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime210.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M12,0C7.589,0,4,3.589,4,8c0,5.535,7.082,14.631,7.384,15.017,.095,.119,.239,.188,.392,.191,.003,0,.007,0,.01,0,.15,0,.293-.064,.394-.177,.312-.344,7.82-8.703,7.82-15.031C20,3.589,16.411,0,12,0Zm.172,22.009C10.74,20.111,5,12.188,5,8c0-3.86,3.14-7,7-7s7,3.14,7,7c0,5.165-5.73,12.763-6.828,14.009ZM12,5c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"
  }
) });

// src/components/icons/compassSVG/index.tsx
var import_jsx_runtime211 = require("react/jsx-runtime");
var Compass = () => /* @__PURE__ */ (0, import_jsx_runtime211.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime211.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23C5.935,23,1,18.065,1,12S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm5.447-15.894l-5,2.5c-.08,.04-.148,.099-.203,.172l-3,4c-.109,.145-.132,.339-.06,.506,.071,.167,.229,.278,.408,.289l.009,.001,1.899-.114-1.723,3.446c-.091,.181-.063,.399,.071,.552,.089,.101,.214,.158,.344,.161,.075,0,.152-.018,.222-.055l5-2.5c.08-.04,.148-.099,.203-.172l3-4c.109-.145,.132-.339,.06-.506-.071-.167-.231-.285-.417-.29l-1.899,.114,1.723-3.446c.091-.181,.063-.399-.071-.552-.135-.153-.345-.203-.567-.107Zm-3.189,8.421l-3.506,1.753,1.341-2.683,3.506-1.753-1.341,2.683Zm3.285-4.38l-1.796,2.394-3.468,1.734,1.796-2.394,3.468-1.734Z"
  }
) });

// src/components/icons/navigationSVG/index.tsx
var import_jsx_runtime212 = require("react/jsx-runtime");
var Navigation = () => /* @__PURE__ */ (0, import_jsx_runtime212.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime212.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.929,.437C23.772,.149,23.454-.027,23.12,.004L.62,2.504c-.315,.034-.578,.248-.668,.547s.008,.62,.25,.815l9.132,7.306-1.327,12.263c-.034,.315,.128,.62,.408,.771,.116,.062,.242,.092,.368,.092,.179,0,.356-.062,.496-.184l14.5-12.5c.226-.194,.32-.503,.234-.793L23.929,.437ZM9.936,21.682l1.234-11.41c.034-.313-.126-.616-.401-.766L2.373,3.199l20.039-2.227,.948,6.313-13.423,14.398Zm11.438-12.259l-10.62,11.392L11.86,10.459l9.514-10.207,.84,5.594-1.028,3.577,.188-.2Z"
  }
) });

// src/components/icons/routeSVG/index.tsx
var import_jsx_runtime213 = require("react/jsx-runtime");
var Route = () => /* @__PURE__ */ (0, import_jsx_runtime213.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime213.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M21,14c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2ZM3,7c1.654,0,3-1.346,3-3S4.654,1,3,1,0,2.346,0,4s1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2ZM20.5,8H8.5c-.276,0-.5,.224-.5,.5v7c0,2.206-1.794,4-4,4h-3c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h3c2.757,0,5-2.243,5-5v-7h11.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM17,0c-.276,0-.5,.224-.5,.5v4h-9c-2.757,0-5,2.243-5,5v3.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-3.5c0-2.206,1.794-4,4-4h9v4c0,.276,.224,.5,.5,.5,.085,0,.17-.022,.246-.066l4-2.333c.157-.091,.254-.261,.254-.434s-.097-.342-.254-.434l-4-2.333c-.076-.044-.161-.066-.246-.066Z"
  }
) });

// src/components/icons/earthSVG/index.tsx
var import_jsx_runtime214 = require("react/jsx-runtime");
var Earth = () => /* @__PURE__ */ (0, import_jsx_runtime214.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime214.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm10.951,11.5h-3.451c-.109-2.749-.854-5.343-2.131-7.48,2.978,1.37,5.115,4.174,5.582,7.48ZM16.5,12c0,2.774-.714,5.367-1.94,7.45-.191-.038-.374-.095-.56-.147V14c0-.276-.224-.5-.5-.5h-3c-.276,0-.5,.224-.5,.5v5.296c-.174,.051-.348,.102-.517,.138-1.224-2.083-1.933-4.673-1.933-7.434,0-2.774,.714-5.367,1.94-7.45,.191,.038,.374,.095,.56,.147V10c0,.276,.224,.5,.5,.5h3c.276,0,.5-.224,.5-.5v-5.296c.174-.051,.348-.102,.517-.138,1.224,2.083,1.933,4.673,1.933,7.434Zm-5,6.904v-4.404h2v4.404c-.332,.048-.664,.096-1,.096s-.668-.048-1-.096Zm0-14.808V9.5h-2v-4.404c.332-.048,.664-.096,1-.096s.668,.048,1,.096ZM8.631,4.02c-1.277,2.137-2.022,4.731-2.131,7.48H3.049c.467-3.306,2.604-6.11,5.582-7.48Zm-5.582,8.48h3.451c.109,2.749,.854,5.343,2.131,7.48-2.978-1.37-5.115-4.174-5.582-7.48Zm10.32,7.48c1.277-2.137,2.022-4.731,2.131-7.48h3.451c-.467,3.306-2.604,6.11-5.582,7.48Z"
  }
) });

// src/components/icons/packageSVG/index.tsx
var import_jsx_runtime215 = require("react/jsx-runtime");
var Package = () => /* @__PURE__ */ (0, import_jsx_runtime215.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime215.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.435,5.875l-11-5.5c-.276-.138-.594-.138-.87,0L.565,5.875c-.346,.173-.565,.528-.565,.917v10.418c0,.389,.219,.744,.565,.917l11,5.5c.138,.069,.287,.104,.435,.104s.297-.034,.435-.104l11-5.5c.346-.173,.565-.528,.565-.917V6.792c0-.389-.219-.744-.565-.917ZM12,1.388l9.438,4.719-3.162,1.581-9.438-4.719,3.162-1.581ZM12,10.826l-9.438-4.719,3.691-1.845,9.438,4.719-3.691,1.845ZM1,7.618l10,5v9.764l-10-5V7.618Zm11,14.764v-9.764l4-2v2.882c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-3.074l5-2.5v9.696l-10,5Z"
  }
) });

// src/components/icons/boxSVG/index.tsx
var import_jsx_runtime216 = require("react/jsx-runtime");
var Box = () => /* @__PURE__ */ (0, import_jsx_runtime216.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime216.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M21.5,4H2.5C1.122,4,0,5.122,0,6.5v11c0,1.378,1.122,2.5,2.5,2.5H21.5c1.378,0,2.5-1.122,2.5-2.5V6.5c0-1.378-1.122-2.5-2.5-2.5ZM2.5,5H21.5c.827,0,1.5,.673,1.5,1.5v1.5H1v-1.5c0-.827,.673-1.5,1.5-1.5Zm19,14H2.5c-.827,0-1.5-.673-1.5-1.5V9H23v8.5c0,.827-.673,1.5-1.5,1.5ZM9.5,12h5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Z"
  }
) });

// src/components/icons/bagSVG/index.tsx
var import_jsx_runtime217 = require("react/jsx-runtime");
var Bag = () => /* @__PURE__ */ (0, import_jsx_runtime217.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime217.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M20.894,7.553l-1.789-3.578c-.329-.658-.997-1.064-1.737-1.064H6.632c-.74,0-1.408,.406-1.737,1.065L3.106,7.553c-.069,.138-.106,.291-.106,.447v12c0,1.378,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.122,2.5-2.5V8c0-.156-.037-.309-.106-.447ZM5.764,4.789c.11-.22,.332-.355,.579-.355H17.659c.247,0,.469,.135,.578,.354l1.466,2.932-15.421-.001,1.483-2.93ZM19,20H5c-.827,0-1.5-.673-1.5-1.5v-11.5l16,.001v11.499c0,.827-.673,1.5-1.5,1.5Zm-7-11c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"
  }
) });

// src/components/icons/cartSVG/index.tsx
var import_jsx_runtime218 = require("react/jsx-runtime");
var Cart = () => /* @__PURE__ */ (0, import_jsx_runtime218.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime218.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.928,5.166c-.182-.228-.457-.166-.457-.166H4.438l-.515-2.576C3.795,1.603,3.081,1,2.245,1H.5C.224,1,0,1.224,0,1.5s.224,.5,.5,.5h1.745c.418,0,.777,.292,.853,.687l2.832,14.154c-.493,.326-.93,.928-.93,1.659,0,1.103,.897,2,2,2s2-.897,2-2c0-.276-.064-.536-.171-.773h7.341c-.107,.237-.171,.497-.171,.773,0,1.103,.897,2,2,2s2-.897,2-2c0-1.103-.897-2-2-2H5.837l-.3-1.5H19.5c.712,0,1.338-.506,1.476-1.204l1.995-9.975c.059-.297-.022-.449-.043-.475ZM7,19.5c0,.551-.449,1-1,1s-1-.449-1-1,.449-1,1-1,1,.449,1,1Zm12,0c0,.551-.449,1-1,1s-1-.449-1-1,.449-1,1-1,1,.449,1,1Zm1.005-10.5l-1.795,8.976c-.046,.232-.262,.524-.71,.524H5.337l-1.7-8.5H20.005Z"
  }
) });

// src/components/icons/truckSVG/index.tsx
var import_jsx_runtime219 = require("react/jsx-runtime");
var Truck = () => /* @__PURE__ */ (0, import_jsx_runtime219.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime219.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M23.707,10.293l-3-3c-.188-.188-.442-.293-.707-.293h-3V5.5c0-.827-.673-1.5-1.5-1.5H1.5c-.827,0-1.5,.673-1.5,1.5v11c0,.827,.673,1.5,1.5,1.5h.535c.233,1.14,1.241,2,2.465,2s2.232-.86,2.465-2h7.07c.233,1.14,1.241,2,2.465,2s2.232-.86,2.465-2h1.535c.827,0,1.5-.673,1.5-1.5v-6c0-.265-.105-.52-.293-.707ZM4.5,19c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Zm11,0c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5ZM1,16.5v-11c0-.276,.224-.5,.5-.5H15.5c.276,0,.5,.224,.5,.5v11c0,.276-.224,.5-.5,.5h-1.035c-.233-1.14-1.241-2-2.465-2s-2.232,.86-2.465,2H6.965c-.233-1.14-1.241-2-2.465-2s-2.232,.86-2.465,2h-.535c-.276,0-.5-.224-.5-.5Zm15,1.5h-.535c-.233-1.14-1.241-2-2.465-2s-2.232,.86-2.465,2h-.535v-8h3v3c0,.276,.224,.5,.5,.5h3.792c.101,.187,.208,.379,.208,.577v1.423c0,.276-.224,.5-.5,.5Zm1-2v-1.423c0-.509-.209-1.001-.586-1.37l-2.621-2.504,.207-.703h3.293l2.707,2.707v3.293h-3Z"
  }
) });

// src/components/icons/shippingSVG/index.tsx
var import_jsx_runtime220 = require("react/jsx-runtime");
var Shipping = () => /* @__PURE__ */ (0, import_jsx_runtime220.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime220.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M22.5,7h-3.5v-2.5c0-.827-.673-1.5-1.5-1.5H1.5c-.827,0-1.5,.673-1.5,1.5v11c0,.827,.673,1.5,1.5,1.5h.535c.233,1.14,1.241,2,2.465,2s2.232-.86,2.465-2h7.07c.233,1.14,1.241,2,2.465,2s2.232-.86,2.465-2h1.535c.827,0,1.5-.673,1.5-1.5v-1.5h.535c.233,1.14,1.241,2,2.465,2s2.232-.86,2.465-2h.535c.276,0,.5-.224,.5-.5v-5c0-.827-.673-1.5-1.5-1.5ZM4.5,19c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Zm11,0c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Zm5,0c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Zm3-2.5h-.535c-.233-1.14-1.241-2-2.465-2s-2.232,.86-2.465,2h-.535v-1.5c0-.276,.224-.5,.5-.5h5.5v2Zm0-3h-5.5c-.827,0-1.5,.673-1.5,1.5v.5h-1v-7h3.5c.276,0,.5,.224,.5,.5v6.5h-1v-.5c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5v.5H1v-11c0-.276,.224-.5,.5-.5H17.5c.276,0,.5,.224,.5,.5v6h-1.5v-5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v5h-5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h13.5Z"
  }
) });

// src/components/icons/couponSVG/index.tsx
var import_jsx_runtime221 = require("react/jsx-runtime");
var Coupon = () => /* @__PURE__ */ (0, import_jsx_runtime221.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime221.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M22.5,9c.827,0,1.5-.673,1.5-1.5v-3c0-.827-.673-1.5-1.5-1.5H1.5c-.827,0-1.5,.673-1.5,1.5v3c0,.827,.673,1.5,1.5,1.5,.827,0,1.5,.673,1.5,1.5s-.673,1.5-1.5,1.5c-.827,0-1.5,.673-1.5,1.5v3c0,.827,.673,1.5,1.5,1.5H22.5c.827,0,1.5-.673,1.5-1.5v-3c0-.827-.673-1.5-1.5-1.5-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5ZM1,7.5v-3c0-.276,.224-.5,.5-.5H22.5c.276,0,.5,.224,.5,.5v3c0,.827-.673,1.5-1.5,1.5-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5c.276,0,.5,.224,.5,.5v3c0,.276-.224,.5-.5,.5H1.5c-.276,0-.5-.224-.5-.5v-3c0-.276,.224-.5,.5-.5,1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5c-.276,0-.5-.224-.5-.5ZM8,14c.276,0,.5-.224,.5-.5v-3c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v3c0,.276,.224,.5,.5,.5Zm0-5c.276,0,.5-.224,.5-.5v-1c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1c0,.276,.224,.5,.5,.5Zm2.5,0h5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm5,3h-5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"
  }
) });

// src/components/icons/saleSVG/index.tsx
var import_jsx_runtime222 = require("react/jsx-runtime");
var Sale = () => /* @__PURE__ */ (0, import_jsx_runtime222.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime222.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M21.707,11.293l-9-9c-.188-.188-.442-.293-.707-.293H3c-.827,0-1.5,.673-1.5,1.5v9c0,.265,.105,.52,.293,.707l9,9c.188,.188,.442,.293,.707,.293s.52-.105,.707-.293l9-9c.391-.391,.391-1.023,0-1.414ZM12,21.586L3.5,13.086V3.5c0-.276,.224-.5,.5-.5h9.086l8.5,8.5-9.586,9.586ZM6.5,5c-.827,0-1.5,.673-1.5,1.5s.673,1.5,1.5,1.5,1.5-.673,1.5-1.5-.673-1.5-1.5-1.5Zm4.793,4.793c-.391,.391-.391,1.023,0,1.414l1,1c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414l-1-1c-.391-.391-1.023-.391-1.414,0Zm2,3c-.391,.391-.391,1.023,0,1.414l1,1c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414l-1-1c-.391-.391-1.023-.391-1.414,0Z"
  }
) });

// src/components/icons/barcodeSVG/index.tsx
var import_jsx_runtime223 = require("react/jsx-runtime");
var Barcode = () => /* @__PURE__ */ (0, import_jsx_runtime223.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime223.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M2,4.5C2,3.122,3.122,2,4.5,2h2c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-2c-.827,0-1.5,.673-1.5,1.5v2c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-2Zm17.5-2.5h2c1.378,0,2.5,1.122,2.5,2.5v2c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-2c0-.827-.673-1.5-1.5-1.5h-2c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5ZM2.5,17c.276,0,.5,.224,.5,.5v2c0,.827,.673,1.5,1.5,1.5h2c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-2c-1.378,0-2.5-1.122-2.5-2.5v-2c0-.276,.224-.5,.5-.5Zm19,0c.276,0,.5,.224,.5,.5v2c0,1.378-1.122,2.5-2.5,2.5h-2c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h2c.827,0,1.5-.673,1.5-1.5v-2c0-.276,.224-.5,.5-.5ZM5,7.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v9c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.5Zm2.5-.5c.276,0,.5,.224,.5,.5v9c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.5c0-.276,.224-.5,.5-.5Zm2,.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v9c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.5Zm3-.5c.276,0,.5,.224,.5,.5v9c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.5c0-.276,.224-.5,.5-.5Zm2,.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v9c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.5Zm3-.5c.276,0,.5,.224,.5,.5v9c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.5c0-.276,.224-.5,.5-.5Zm2,.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v9c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.5Z"
  }
) });

// src/components/icons/qrCodeSVG/index.tsx
var import_jsx_runtime224 = require("react/jsx-runtime");
var QrCode = () => /* @__PURE__ */ (0, import_jsx_runtime224.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime224.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M9,0H2C.897,0,0,.897,0,2v7c0,1.103,.897,2,2,2h7c1.103,0,2-.897,2-2V2c0-1.103-.897-2-2-2ZM2,9V2h7l.001,7H2Zm-2,13c0,1.103,.897,2,2,2h7c1.103,0,2-.897,2-2v-7c0-1.103-.897-2-2-2H2c-1.103,0-2,.897-2,2v7Zm2,0v-7h7l.001,7H2Zm12-22v7c0,1.103,.897,2,2,2h7c1.103,0,2-.897,2-2V2c0-1.103-.897-2-2-2h-7c-1.103,0-2,.897-2,2Zm9,0v7h-7V2h7ZM3,3h5v5H3V3Zm0,11h5v5H3v-5Zm14-11h-5v5h5V3Zm-3,12v-1h-2v-1h-1v2h-1v1h1v1h-1v2h2v-1h1v2h1v-2h1v-1h-1v-1h1v-1h-1Zm1,3v-1h1v-1h2v-1h-1v-1h-1v1h-1v-1h-1v2h-1v1h1v1h1Zm3-1v-1h-1v-1h-1v3h2v-1Zm0,2h-2v1h2v-1Z"
  }
) });

// src/components/checkbox/index.tsx
var import_jsx_runtime225 = require("react/jsx-runtime");
var CHECKBOX_SIZE = /* @__PURE__ */ ((CHECKBOX_SIZE2) => {
  CHECKBOX_SIZE2["SMALL"] = "small";
  CHECKBOX_SIZE2["MEDIUM"] = "medium";
  CHECKBOX_SIZE2["LARGE"] = "large";
  return CHECKBOX_SIZE2;
})(CHECKBOX_SIZE || {});
var CHECKBOX_EDGE_STYLE = /* @__PURE__ */ ((CHECKBOX_EDGE_STYLE2) => {
  CHECKBOX_EDGE_STYLE2["ROUNDED"] = "rounded";
  CHECKBOX_EDGE_STYLE2["SQUARED"] = "squared";
  return CHECKBOX_EDGE_STYLE2;
})(CHECKBOX_EDGE_STYLE || {});
var sizeMap2 = {
  ["small" /* SMALL */]: { box: "size-4", icon: "size-3" },
  ["medium" /* MEDIUM */]: { box: "size-5", icon: "size-4" },
  ["large" /* LARGE */]: { box: "size-6", icon: "size-5" }
};
var edgeMap = {
  ["rounded" /* ROUNDED */]: "rounded-sm",
  ["squared" /* SQUARED */]: "rounded-none"
};
var Checkbox = ({
  label,
  checked = false,
  onChange,
  className = "",
  disabled = false,
  size = "medium" /* MEDIUM */,
  edges = "rounded" /* ROUNDED */
}) => {
  const { box, icon } = sizeMap2[size];
  const edgeStyle = edgeMap[edges];
  const inputId = `gwan-checkbox-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return /* @__PURE__ */ (0, import_jsx_runtime225.jsxs)(
    "label",
    {
      htmlFor: inputId,
      className: `flex items-center gap-2 cursor-pointer ${className} ${disabled ? "cursor-not-allowed opacity-50" : ""}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime225.jsx)(
          "input",
          {
            id: inputId,
            type: "checkbox",
            checked,
            onChange: () => !disabled && onChange(!checked),
            disabled,
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime225.jsx)(
          "div",
          {
            "aria-hidden": "true",
            className: `${box} ${edgeStyle} flex items-center justify-center border transition-all
          ${checked ? "bg-primary-default border-primary-default" : "bg-surface border-border hover:border-primary-default"}
          ${disabled ? "bg-surface-raised border-border" : ""}`,
            children: checked && /* @__PURE__ */ (0, import_jsx_runtime225.jsx)("div", { className: `${icon} text-primary-default-fg`, children: /* @__PURE__ */ (0, import_jsx_runtime225.jsx)(Check, {}) })
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime225.jsx)("span", { className: "text-foreground", children: label })
      ]
    }
  );
};
var checkbox_default = Checkbox;

// src/components/chip/index.tsx
var import_jsx_runtime226 = require("react/jsx-runtime");
var CHIP_VARIANT = /* @__PURE__ */ ((CHIP_VARIANT2) => {
  CHIP_VARIANT2["SOLID"] = "solid";
  CHIP_VARIANT2["OUTLINE"] = "outline";
  return CHIP_VARIANT2;
})(CHIP_VARIANT || {});
var CHIP_EDGE_STYLE = /* @__PURE__ */ ((CHIP_EDGE_STYLE2) => {
  CHIP_EDGE_STYLE2["ROUNDED"] = "rounded";
  CHIP_EDGE_STYLE2["SQUARED"] = "squared";
  CHIP_EDGE_STYLE2["PILL"] = "pill";
  return CHIP_EDGE_STYLE2;
})(CHIP_EDGE_STYLE || {});
var Chip = ({
  label,
  onClear,
  className = "",
  variant = "solid" /* SOLID */,
  edges = "rounded" /* ROUNDED */
}) => {
  const getChipStyle = (variant2) => {
    switch (variant2) {
      case "outline" /* OUTLINE */:
        return "bg-transparent border border-neutral-700 text-neutral-700 hover:text-neutral-900";
      case "solid" /* SOLID */:
      default:
        return "bg-neutral-300 text-neutral-800 hover:text-neutral-900";
    }
  };
  const getEdgesStyle = (edges2) => {
    switch (edges2) {
      case "squared" /* SQUARED */:
        return "rounded-none";
      case "pill" /* PILL */:
        return "rounded-full";
      default:
        return "rounded-lg";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime226.jsxs)(
    "div",
    {
      className: `flex flex-row gap-2 items-center ${getChipStyle(variant)} w-fit px-4 py-2 ${getEdgesStyle(edges)} ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime226.jsx)("div", { className: "size-4 cursor-pointer", onClick: onClear, children: /* @__PURE__ */ (0, import_jsx_runtime226.jsx)(Cross, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime226.jsx)("p", { className: "text-base", children: label })
      ]
    }
  );
};
var chip_default = Chip;

// src/components/ellipsis/index.tsx
var import_react3 = require("react");
var import_jsx_runtime227 = require("react/jsx-runtime");
var Ellipsis = ({
  label,
  labelMaxWidth = "w-32",
  tooltipPosition = "right" /* RIGHT */,
  tooltipWidth = "w-40",
  className = ""
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime227.jsxs)(
    "div",
    {
      className: `relative inline-block ${className}`,
      onMouseEnter: () => setIsTooltipVisible(true),
      onMouseLeave: () => setIsTooltipVisible(false),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime227.jsx)(
          "p",
          {
            className: `text-ellipsis ${labelMaxWidth} overflow-hidden whitespace-nowrap`,
            children: label
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime227.jsx)(
          tooltip_default,
          {
            label,
            position: tooltipPosition,
            isVisible: isTooltipVisible,
            toolTipWidth: tooltipWidth
          }
        )
      ]
    }
  );
};
var ellipsis_default = Ellipsis;

// src/components/fileUploader/index.tsx
var import_react4 = require("react");
var import_jsx_runtime228 = require("react/jsx-runtime");
var FileUploader = ({
  title,
  subTitle1 = "",
  subTitle2 = "",
  handleAttachment,
  accept = ".jpg,.jpeg,.png",
  className = ""
}) => {
  const fileInputRef = (0, import_react4.useRef)(null);
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleAttachment(files[0]);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime228.jsxs)(
    "div",
    {
      className: `flex flex-row gap-4 items-start border border-dashed border-border p-4 rounded-lg ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime228.jsx)(
          "div",
          {
            className: "bg-primary-500 hover:bg-primary-600 text-primary-default-fg px-6 py-8 rounded-lg cursor-pointer",
            onClick: () => {
              var _a;
              return (_a = fileInputRef.current) == null ? void 0 : _a.click();
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime228.jsx)("div", { className: "size-10", children: /* @__PURE__ */ (0, import_jsx_runtime228.jsx)(Upload, {}) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime228.jsx)(
          "input",
          {
            type: "file",
            ref: fileInputRef,
            accept,
            className: "hidden",
            onChange: handleFileUpload
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime228.jsxs)("div", { className: "flex-1 flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime228.jsx)("p", { className: "text-lg text-foreground", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime228.jsx)("p", { className: "text-sm text-muted-fg", children: subTitle1 }),
          /* @__PURE__ */ (0, import_jsx_runtime228.jsx)("p", { className: "text-sm text-muted-fg", children: subTitle2 })
        ] })
      ]
    }
  );
};
var fileUploader_default = FileUploader;

// src/components/filterDropdown/index.tsx
var import_react5 = require("react");
var import_jsx_runtime229 = require("react/jsx-runtime");
var FilterDropdown = ({ children, className = "" }) => {
  const [isChildrenVisible, setIsChildrenVisible] = (0, import_react5.useState)(false);
  const closeDropdown = () => setIsChildrenVisible(false);
  return /* @__PURE__ */ (0, import_jsx_runtime229.jsxs)("div", { className: `relative ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime229.jsxs)(
      "div",
      {
        className: "flex flex-row gap-2.5 items-center w-fit border border-border bg-surface px-3 py-2.5 rounded cursor-pointer hover:border-primary-500 transition-colors duration-200",
        onClick: () => setIsChildrenVisible(!isChildrenVisible),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime229.jsx)("div", { className: "size-5 text-muted-fg", children: /* @__PURE__ */ (0, import_jsx_runtime229.jsx)(Filter, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime229.jsx)("p", { className: "text-foreground text-sm", children: "Filter" }),
          /* @__PURE__ */ (0, import_jsx_runtime229.jsx)("div", { className: "size-5 text-muted-fg", children: /* @__PURE__ */ (0, import_jsx_runtime229.jsx)(ChevDown, {}) })
        ]
      }
    ),
    isChildrenVisible && /* @__PURE__ */ (0, import_jsx_runtime229.jsx)("div", { className: "border border-border rounded shadow-lg overflow-y-auto absolute top-full mt-1 bg-surface z-10", children: children(closeDropdown) })
  ] });
};
var filterDropdown_default = FilterDropdown;

// src/components/input/index.tsx
var import_jsx_runtime230 = require("react/jsx-runtime");
var FORM_ELEMENT_EDGE_STYLE = /* @__PURE__ */ ((FORM_ELEMENT_EDGE_STYLE2) => {
  FORM_ELEMENT_EDGE_STYLE2["ROUNDED"] = "rounded";
  FORM_ELEMENT_EDGE_STYLE2["SQUARED"] = "squared";
  return FORM_ELEMENT_EDGE_STYLE2;
})(FORM_ELEMENT_EDGE_STYLE || {});
var FORM_ELEMENT_SIZE = /* @__PURE__ */ ((FORM_ELEMENT_SIZE2) => {
  FORM_ELEMENT_SIZE2["SM"] = "SM";
  FORM_ELEMENT_SIZE2["MD"] = "MD";
  return FORM_ELEMENT_SIZE2;
})(FORM_ELEMENT_SIZE || {});
var Input = (_a) => {
  var _b = _a, {
    label,
    value,
    disabled,
    placeholder = "",
    inputClassName = "",
    required = false,
    className = "",
    type = "text",
    onClear,
    isError = false,
    errorMessage,
    edges = "rounded" /* ROUNDED */,
    size = "MD" /* MD */,
    min,
    max,
    step,
    id: idProp,
    onKeyDown,
    onPaste
  } = _b, rest = __objRest(_b, [
    "label",
    "value",
    "disabled",
    "placeholder",
    "inputClassName",
    "required",
    "className",
    "type",
    "onClear",
    "isError",
    "errorMessage",
    "edges",
    "size",
    "min",
    "max",
    "step",
    "id",
    "onKeyDown",
    "onPaste"
  ]);
  const isSM = size === "SM" /* SM */;
  const inputId = idProp != null ? idProp : label ? `gwan-input-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : void 0;
  const errorId = inputId ? `${inputId}-error` : void 0;
  const sizeClass3 = isSM ? "py-1.5 text-xs" : "py-2.5 text-sm";
  const plClass = isSM ? "pl-2.5" : "pl-3";
  const prClass = onClear ? isSM ? "pr-7" : "pr-8" : isSM ? "pr-2.5" : "pr-3";
  const clearSize = isSM ? "size-2.5" : "size-3";
  const handleKeyDown = (e) => {
    if (type === "number") {
      const blocked = ["e", "E", "+"];
      if (min !== void 0 && min >= 0) blocked.push("-");
      if (blocked.includes(e.key)) e.preventDefault();
    }
    onKeyDown == null ? void 0 : onKeyDown(e);
  };
  const handlePaste = (e) => {
    if (type === "number") {
      const paste = e.clipboardData.getData("text");
      const pattern = min !== void 0 && min >= 0 ? /[eE+\-]/ : /[eE+]/;
      if (pattern.test(paste)) e.preventDefault();
    }
    onPaste == null ? void 0 : onPaste(e);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime230.jsxs)("div", { className: `flex flex-col relative ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime230.jsx)(
      "label",
      {
        htmlFor: inputId,
        className: `text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"} mb-1`,
        children: `${label}${required ? " *" : ""}`
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime230.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime230.jsx)(
        "input",
        __spreadValues({
          id: inputId,
          "aria-invalid": isError || void 0,
          "aria-describedby": isError && errorMessage && errorId ? errorId : void 0,
          "aria-required": required || void 0,
          placeholder,
          value,
          disabled,
          className: `bg-surface text-foreground border ${isError ? "border-danger focus:border-danger" : "border-border hover:border-primary-default focus:border-primary-default"} outline-none ${sizeClass3} ${plClass} ${prClass} ${edges === "rounded" /* ROUNDED */ && "rounded"} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-text"} w-full placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 transition-colors duration-200 ${type === "number" ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" : ""} ${inputClassName}`,
          required,
          type,
          min,
          max,
          step,
          onKeyDown: handleKeyDown,
          onPaste: handlePaste
        }, rest)
      ),
      onClear && value && /* @__PURE__ */ (0, import_jsx_runtime230.jsx)(
        "div",
        {
          className: `${clearSize} absolute right-3 top-1/2 -translate-y-1/2 text-muted-fg hover:text-foreground cursor-pointer`,
          onClick: onClear,
          children: /* @__PURE__ */ (0, import_jsx_runtime230.jsx)(Cross, {})
        }
      )
    ] }),
    isError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime230.jsx)("p", { id: errorId, role: "alert", className: "text-danger text-xs mt-1", children: errorMessage })
  ] });
};
var input_default = Input;

// src/components/textarea/index.tsx
var import_jsx_runtime231 = require("react/jsx-runtime");
var TextArea = (_a) => {
  var _b = _a, {
    label,
    value,
    disabled,
    placeholder = "",
    inputClassName = "",
    required = false,
    className = "",
    onClear,
    isError = false,
    errorMessage,
    edges = "rounded" /* ROUNDED */,
    id
  } = _b, rest = __objRest(_b, [
    "label",
    "value",
    "disabled",
    "placeholder",
    "inputClassName",
    "required",
    "className",
    "onClear",
    "isError",
    "errorMessage",
    "edges",
    "id"
  ]);
  const textareaId = id || (label ? `gwan-textarea-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-textarea");
  const errorId = `${textareaId}-error`;
  return /* @__PURE__ */ (0, import_jsx_runtime231.jsxs)("div", { className: `flex flex-col relative ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime231.jsx)(
      "label",
      {
        htmlFor: textareaId,
        className: `text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"} mb-1`,
        children: `${label}${required ? " *" : ""}`
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime231.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime231.jsx)(
        "textarea",
        __spreadValues({
          id: textareaId,
          placeholder,
          value,
          disabled,
          className: `bg-surface text-foreground border ${isError ? "border-danger focus:border-danger" : "border-border hover:border-primary-500 focus:border-primary-500"} outline-none py-2.5 pl-3 ${onClear ? "pr-8" : "pr-3"} ${edges === "rounded" /* ROUNDED */ && "rounded"} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-text"} text-sm w-full placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 transition-colors duration-200 resize-none ${inputClassName}`,
          required,
          "aria-invalid": isError || void 0,
          "aria-describedby": isError && errorMessage ? errorId : void 0,
          "aria-required": required || void 0
        }, rest)
      ),
      onClear && value && /* @__PURE__ */ (0, import_jsx_runtime231.jsx)(
        "div",
        {
          className: "size-3 absolute right-3 top-1/2 -translate-y-1/2 text-muted-fg hover:text-foreground cursor-pointer",
          onClick: onClear,
          children: /* @__PURE__ */ (0, import_jsx_runtime231.jsx)(Cross, {})
        }
      )
    ] }),
    isError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime231.jsx)("p", { id: errorId, role: "alert", className: "text-danger text-xs mt-1", children: errorMessage })
  ] });
};
var textarea_default = TextArea;

// src/components/modal/index.tsx
var import_react6 = require("react");
var import_jsx_runtime232 = require("react/jsx-runtime");
var MODAL_SIZE = /* @__PURE__ */ ((MODAL_SIZE2) => {
  MODAL_SIZE2["SMALL"] = "w-[calc(100vw-2rem)] sm:w-[600px]";
  MODAL_SIZE2["MEDIUM"] = "w-[calc(100vw-2rem)] sm:w-[800px]";
  MODAL_SIZE2["LARGE"] = "w-[calc(100vw-2rem)] sm:w-[950px]";
  MODAL_SIZE2["FULL"] = "w-full h-full";
  return MODAL_SIZE2;
})(MODAL_SIZE || {});
var FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
var Modal = ({
  title,
  children,
  onClear,
  size = "w-[calc(100vw-2rem)] sm:w-[600px]" /* SMALL */,
  className = ""
}) => {
  const modalRef = (0, import_react6.useRef)(null);
  const previousFocus = (0, import_react6.useRef)(null);
  const titleId = "gwan-modal-title";
  (0, import_react6.useEffect)(() => {
    var _a, _b;
    previousFocus.current = document.activeElement;
    const focusable = (_a = modalRef.current) == null ? void 0 : _a.querySelectorAll(FOCUSABLE);
    if (focusable == null ? void 0 : focusable.length) {
      focusable[0].focus();
    } else {
      (_b = modalRef.current) == null ? void 0 : _b.focus();
    }
    return () => {
      var _a2;
      (_a2 = previousFocus.current) == null ? void 0 : _a2.focus();
    };
  }, []);
  (0, import_react6.useEffect)(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClear();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClear]);
  const handleKeyDown = (e) => {
    var _a, _b;
    if (e.key !== "Tab") return;
    const focusable = Array.from(
      (_b = (_a = modalRef.current) == null ? void 0 : _a.querySelectorAll(FOCUSABLE)) != null ? _b : []
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime232.jsx)(
    "div",
    {
      className: `fixed inset-0 flex items-center justify-center bg-black/40 ${className}`,
      onMouseDown: onClear,
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime232.jsxs)(
        "div",
        {
          ref: modalRef,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": titleId,
          tabIndex: -1,
          onKeyDown: handleKeyDown,
          className: `bg-surface border border-border p-4 ${size !== "w-full h-full" /* FULL */ && "rounded-lg"} absolute flex flex-col gap-4 max-h-[90vh] ${size}`,
          onMouseDown: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime232.jsxs)("div", { className: "flex flex-row gap-4 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime232.jsx)("h2", { id: titleId, className: "flex-1 text-3xl text-foreground", children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime232.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": "Close dialog",
                  className: "size-4 cursor-pointer text-muted-fg hover:text-foreground",
                  onClick: onClear,
                  children: /* @__PURE__ */ (0, import_jsx_runtime232.jsx)(Cross, {})
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime232.jsx)("div", { className: "w-full h-full overflow-auto", children })
          ]
        }
      )
    }
  );
};
var modal_default = Modal;

// src/components/navBar/index.tsx
var import_react7 = require("react");
var import_react_dom = require("react-dom");
var import_jsx_runtime233 = require("react/jsx-runtime");
var NavBar = ({
  menuItems,
  logoShort,
  logoLong,
  logoShortWidth = 60,
  logoShortHeight = 60,
  logoLongWidth = "60%",
  isAvatarVisible = true,
  avatarName = "",
  avatarEmail = "",
  avatarImage = "",
  avatarType = "image_with_full" /* IMAGE_WITH_FULL */,
  menuWidthClass = "w-[20rem]",
  menuHeightClass = "h-[100vh]",
  isCollapsed = false,
  menuBackgroundColor = "bg-primary-100",
  className = "",
  menuItemTextClass = "",
  isLoading = false,
  onNavigate,
  tooltipPortalTarget = null
}) => {
  const [isActiveMenuItem, setIsActiveMenuItem] = (0, import_react7.useState)("");
  const [isActiveSubMenuItem, setIsActiveSubMenuItem] = (0, import_react7.useState)("");
  const [isMenuCollapsed, setIsMenuCollapsed] = (0, import_react7.useState)(isCollapsed);
  const [isMenuItemsCollapsed, setIsMenuITemsCollapsed] = (0, import_react7.useState)(isCollapsed);
  const [fixedTooltip, setFixedTooltip] = (0, import_react7.useState)(null);
  const activeClass = "rounded-lg bg-white/35";
  const collapsedClass = "w-[6rem]";
  (0, import_react7.useEffect)(() => {
    var _a;
    if (menuItems.length > 0) {
      const active = menuItems.find((item) => item.isActive === true);
      setIsActiveMenuItem((_a = active == null ? void 0 : active.title) != null ? _a : menuItems[0].title);
    }
  }, []);
  (0, import_react7.useEffect)(() => {
    if (!isMenuCollapsed) {
      setTimeout(() => {
        setIsMenuITemsCollapsed(false);
      }, 200);
    } else {
      setIsMenuITemsCollapsed(true);
    }
  }, [isMenuCollapsed]);
  const handleClick = (menu) => {
    const { hasChildren, title, onClick, route } = menu;
    setIsActiveMenuItem(title);
    if (hasChildren) {
      return;
    }
    if (onClick) {
      setIsActiveSubMenuItem("");
      onClick();
    }
    onNavigate == null ? void 0 : onNavigate(route);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime233.jsxs)(
    "div",
    {
      className: `transition-[width] duration-300 ease-in-out ${isMenuCollapsed ? collapsedClass : menuWidthClass} ${menuHeightClass} ${className}`,
      children: [
        fixedTooltip && (0, import_react_dom.createPortal)(
          /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
            "div",
            {
              className: "fixed z-9999 pointer-events-none w-0 h-0",
              style: { top: fixedTooltip.y, left: fixedTooltip.x },
              children: /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                tooltip_default,
                {
                  position: "right" /* RIGHT */,
                  label: fixedTooltip.label,
                  isVisible: true,
                  toolTipWidth: "w-fit",
                  toolTipClass: "text-nowrap"
                }
              )
            }
          ),
          tooltipPortalTarget != null ? tooltipPortalTarget : document.body
        ),
        /* @__PURE__ */ (0, import_jsx_runtime233.jsxs)(
          "div",
          {
            className: `w-full h-full flex flex-col gap-4 p-4 ${menuBackgroundColor}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime233.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                  "img",
                  {
                    src: logoShort,
                    alt: "logo_short",
                    width: logoShortWidth,
                    height: logoShortHeight
                  }
                ),
                !isMenuItemsCollapsed && /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                  "img",
                  {
                    src: logoLong,
                    alt: "logo_long",
                    width: logoLongWidth,
                    className: "transition-opacity duration-300"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime233.jsxs)("div", { className: "relative flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("div", { className: "flex-1 border-white/20 border-b" }),
                /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                  "span",
                  {
                    onClick: () => setIsMenuCollapsed(!isMenuCollapsed),
                    className: `cursor-pointer w-8 h-8 rounded-full ${menuBackgroundColor} border border-white/30 absolute -right-8 flex items-center justify-center text-foreground`,
                    children: /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("div", { className: "size-5", children: isMenuCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(ChevRight, {}) : /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(ChevLeft, {}) })
                  }
                )
              ] }),
              !isLoading ? /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("div", { className: "flex-1 min-h-0 overflow-y-auto flex flex-col gap-1 scrollbar-thin", children: menuItems.map((item, index) => {
                var _a;
                if (!item.isDivider) {
                  return /* @__PURE__ */ (0, import_jsx_runtime233.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime233.jsxs)(
                      "div",
                      {
                        className: `flex flex-row gap-4 items-center p-4 rounded-lg hover:cursor-pointer hover:bg-white/35 hover:rounded-lg ${isActiveMenuItem === item.title ? activeClass : ""}`,
                        onClick: () => handleClick(item),
                        onMouseEnter: (e) => isMenuCollapsed && setFixedTooltip({
                          label: item.title,
                          x: e.currentTarget.getBoundingClientRect().right,
                          y: e.currentTarget.getBoundingClientRect().top + e.currentTarget.getBoundingClientRect().height / 2
                        }),
                        onMouseLeave: () => setFixedTooltip(null),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                            "div",
                            {
                              className: `w-6 h-6 ml-1 relative ${menuItemTextClass}`,
                              children: item.icon
                            }
                          ),
                          !isMenuItemsCollapsed && /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                            "span",
                            {
                              className: `text-nowrap flex-1 ${menuItemTextClass}`,
                              children: item.title
                            }
                          ),
                          item.hasChildren && !isMenuItemsCollapsed && /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                            "div",
                            {
                              className: `size-5 transform transition-transform duration-300 ${isActiveMenuItem === item.title && item.hasChildren ? "rotate-180" : ""}`,
                              children: /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(ChevDown, {})
                            }
                          )
                        ]
                      }
                    ),
                    isActiveMenuItem === item.title && item.hasChildren && /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("div", { className: "flex flex-col gap-1 bg-white/15 pt-3 relative -top-2", children: (_a = item.children) == null ? void 0 : _a.map((subItem, subIndex) => /* @__PURE__ */ (0, import_jsx_runtime233.jsxs)(
                      "div",
                      {
                        className: `flex flex-row gap-4 items-center p-4 h-14 rounded-lg hover:cursor-pointer hover:bg-white/35 hover:rounded-lg ${isActiveSubMenuItem === subItem.title ? activeClass : ""}`,
                        onClick: () => {
                          setIsActiveSubMenuItem(subItem.title);
                          onNavigate == null ? void 0 : onNavigate(subItem.route);
                        },
                        onMouseEnter: (e) => isMenuCollapsed && setFixedTooltip({
                          label: subItem.title,
                          x: e.currentTarget.getBoundingClientRect().right,
                          y: e.currentTarget.getBoundingClientRect().top + e.currentTarget.getBoundingClientRect().height / 2
                        }),
                        onMouseLeave: () => setFixedTooltip(null),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("div", { className: "size-6 ml-1 mt-1 relative text-muted-fg", children: /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(DotFill, {}) }),
                          !isMenuItemsCollapsed && /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                            "span",
                            {
                              className: `text-nowrap flex-1 ${menuItemTextClass}`,
                              children: subItem.title
                            }
                          )
                        ]
                      },
                      `sub_menu_item_${subIndex + 1}`
                    )) })
                  ] }, `menu_item_${index + 1}`);
                }
                return /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                  "div",
                  {
                    className: "border-white/20 border-b my-3"
                  },
                  `menu_item_${index + 1}`
                );
              }) }) : /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                NavBarShimmer,
                {
                  isMenuItemsCollapsed,
                  className: "flex-1 overflow-y-auto"
                }
              ),
              isAvatarVisible && /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("div", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(
                avatar_default,
                {
                  name: avatarName,
                  email: avatarEmail,
                  variant: isMenuItemsCollapsed ? "image-only" /* IMAGE_ONLY */ : avatarType,
                  image: avatarImage,
                  isLoading
                }
              ) })
            ]
          }
        )
      ]
    }
  );
};
var NavBarShimmer = ({
  isMenuItemsCollapsed,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("div", { className: `flex flex-col gap-2 animate-pulse ${className}`, children: [...Array(5)].map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime233.jsxs)(
    "div",
    {
      className: "flex flex-row gap-4 items-center p-4 rounded-lg bg-white/20",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("div", { className: "w-6 h-6 ml-1 bg-white/30" }),
        !isMenuItemsCollapsed && /* @__PURE__ */ (0, import_jsx_runtime233.jsx)("span", { className: "w-full h-4 bg-white/30 rounded" })
      ]
    },
    index
  )) });
};
var navBar_default = NavBar;

// src/components/pagination/index.tsx
var import_react9 = require("react");

// src/components/selectDropdown/index.tsx
var import_react8 = require("react");
var import_jsx_runtime234 = require("react/jsx-runtime");
var SelectDropdown = ({
  options,
  label,
  placeholder = "",
  disabled = false,
  value,
  onChange,
  inputClassName = "",
  className = "",
  isError = false,
  errorMessage,
  required = false,
  edges = "rounded" /* ROUNDED */,
  size = "MD" /* MD */
}) => {
  const [dropdownValue, setDropdownValue] = (0, import_react8.useState)("");
  const [isOptionsVisible, setIsOptionsVisible] = (0, import_react8.useState)(false);
  const [openUpward, setOpenUpward] = (0, import_react8.useState)(false);
  const [highlightedIndex, setHighlightedIndex] = (0, import_react8.useState)(-1);
  const containerRef = (0, import_react8.useRef)(null);
  const listRef = (0, import_react8.useRef)(null);
  const isSM = size === "SM" /* SM */;
  const sizeClass3 = isSM ? "py-1.5 pl-2.5 pr-8 text-xs" : "py-2.5 pl-3 pr-9 text-sm";
  const chevSize = isSM ? "size-3.5" : "size-4";
  const inputId = label ? `gwan-select-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-select";
  const listboxId = `${inputId}-listbox`;
  const errorId = `${inputId}-error`;
  (0, import_react8.useEffect)(() => {
    const option = options.find((opt) => {
      var _a;
      return ((_a = opt.value) != null ? _a : opt.label) === value;
    });
    setDropdownValue(option ? option.label : value);
  }, [value, options]);
  (0, import_react8.useEffect)(() => {
    if (isOptionsVisible && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const dropdownHeight = Math.min(options.length * 56, 384);
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setOpenUpward(spaceBelow < dropdownHeight && spaceAbove > spaceBelow);
    }
  }, [isOptionsVisible, options.length]);
  (0, import_react8.useEffect)(() => {
    if (isOptionsVisible) {
      const idx = options.findIndex((o) => {
        var _a;
        return ((_a = o.value) != null ? _a : o.label) === value;
      });
      setHighlightedIndex(idx);
    } else {
      setHighlightedIndex(-1);
    }
  }, [isOptionsVisible, options, value]);
  (0, import_react8.useEffect)(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightedIndex];
      item == null ? void 0 : item.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);
  const handleSelect = (option) => {
    var _a;
    const actualValue = (_a = option.value) != null ? _a : option.label;
    setDropdownValue(option.label);
    onChange(actualValue);
    setIsOptionsVisible(false);
  };
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (!isOptionsVisible) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setIsOptionsVisible(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (highlightedIndex >= 0) handleSelect(options[highlightedIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOptionsVisible(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime234.jsxs)("div", { className: `flex flex-col ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime234.jsxs)("div", { ref: containerRef, className: "flex flex-col relative", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime234.jsx)(
        "label",
        {
          htmlFor: inputId,
          className: `text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"} mb-1`,
          children: `${label}${required ? " *" : ""}`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime234.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime234.jsx)("div", { className: `${chevSize} absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-muted-fg pointer-events-none`, children: /* @__PURE__ */ (0, import_jsx_runtime234.jsx)(ChevDown, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime234.jsx)(
          "input",
          {
            id: inputId,
            type: "text",
            role: "combobox",
            "aria-expanded": isOptionsVisible,
            "aria-haspopup": "listbox",
            "aria-controls": listboxId,
            "aria-activedescendant": isOptionsVisible && highlightedIndex >= 0 ? `${listboxId}-opt-${highlightedIndex}` : void 0,
            "aria-invalid": isError || void 0,
            "aria-describedby": isError && errorMessage ? errorId : void 0,
            "aria-required": required || void 0,
            className: `bg-surface text-foreground border outline-none ${sizeClass3} ${edges === "rounded" /* ROUNDED */ && "rounded"} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${isError ? "border-danger focus:border-danger" : "border-border hover:border-primary-default focus:border-primary-default"} w-full placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 transition-colors duration-200 ${inputClassName}`,
            placeholder,
            onClick: () => !disabled && setIsOptionsVisible((v) => !v),
            onKeyDown: handleKeyDown,
            onBlur: () => setIsOptionsVisible(false),
            value: dropdownValue,
            readOnly: true,
            disabled,
            required
          }
        )
      ] }),
      isOptionsVisible && /* @__PURE__ */ (0, import_jsx_runtime234.jsx)(
        "div",
        {
          ref: listRef,
          id: listboxId,
          role: "listbox",
          "aria-label": label,
          className: `border border-border ${edges === "rounded" /* ROUNDED */ && "rounded"} shadow-lg max-h-96 overflow-y-auto absolute min-w-full bg-surface z-10 ${openUpward ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: options.map(({ label: optLabel, value: optVal }, index) => /* @__PURE__ */ (0, import_jsx_runtime234.jsx)(
            "div",
            {
              id: `${listboxId}-opt-${index}`,
              role: "option",
              "aria-selected": (optVal != null ? optVal : optLabel) === value,
              className: `px-3 py-2.5 cursor-pointer text-sm text-foreground transition-colors ${highlightedIndex === index ? "bg-surface-raised" : "hover:bg-surface-raised"}`,
              onMouseDown: () => handleSelect({ label: optLabel, value: optVal }),
              onMouseEnter: () => setHighlightedIndex(index),
              children: optLabel
            },
            `${optLabel}_${optVal}_${index}`
          ))
        }
      )
    ] }),
    isError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime234.jsx)("p", { id: errorId, role: "alert", className: "text-danger text-xs mt-1", children: errorMessage })
  ] });
};
var selectDropdown_default = SelectDropdown;

// src/components/pagination/index.tsx
var import_jsx_runtime235 = require("react/jsx-runtime");
var Pagination = ({
  total,
  page,
  size,
  options,
  onChange,
  className = ""
}) => {
  const [optionDropdown, setOptionDropdown] = (0, import_react9.useState)(size.toString());
  const onLeft = () => {
    if (page > 1) {
      onChange({ total, page: page - 1, size });
    }
  };
  const onRight = () => {
    if (page < Math.ceil(total / size)) {
      onChange({ total, page: page + 1, size });
    }
  };
  const handlePageSize = (size2) => {
    setOptionDropdown(size2);
    onChange({ total, page: 1, size: parseInt(size2) });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime235.jsxs)(
    "div",
    {
      className: `bg-surface border border-border flex flex-row flex-wrap gap-3 items-center p-3 rounded-lg ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime235.jsxs)("div", { className: "flex-1 text-foreground hidden sm:block", children: [
          page,
          " of ",
          Math.ceil(total / size),
          " pages"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime235.jsxs)("div", { className: "flex flex-row gap-2 items-center sm:w-auto sm:order-0 flex-1 sm:flex-initial", children: [
          /* @__PURE__ */ (0, import_jsx_runtime235.jsx)("div", { className: "w-20", children: /* @__PURE__ */ (0, import_jsx_runtime235.jsx)(
            selectDropdown_default,
            {
              options,
              value: optionDropdown,
              onChange: (option) => handlePageSize(option),
              className: ""
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime235.jsx)("div", { className: "text-muted-fg text-sm", children: "items per page" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime235.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime235.jsx)(
            button_default,
            {
              onClick: onLeft,
              leftIcon: /* @__PURE__ */ (0, import_jsx_runtime235.jsx)(ChevLeft, {}),
              variant: "tertiary" /* TERTIARY */,
              disabled: page === 1,
              className: "py-2!"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime235.jsx)(
            button_default,
            {
              onClick: onRight,
              leftIcon: /* @__PURE__ */ (0, import_jsx_runtime235.jsx)(ChevRight, {}),
              variant: "tertiary" /* TERTIARY */,
              disabled: page === Math.ceil(total / size),
              className: "py-2!"
            }
          )
        ] })
      ]
    }
  );
};
var pagination_default = Pagination;

// src/components/radioButton/index.tsx
var import_jsx_runtime236 = require("react/jsx-runtime");
var RadioButton = ({
  label,
  value,
  selectedValue,
  onChange,
  name,
  className = "",
  disabled = false
}) => {
  const isChecked = selectedValue === value;
  const inputId = `gwan-radio-${name != null ? name : "group"}-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return /* @__PURE__ */ (0, import_jsx_runtime236.jsxs)(
    "label",
    {
      htmlFor: inputId,
      className: `flex items-center gap-2 cursor-pointer ${className} ${disabled ? "cursor-not-allowed opacity-50" : ""}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime236.jsx)(
          "input",
          {
            id: inputId,
            type: "radio",
            name,
            value,
            checked: isChecked,
            disabled,
            onChange: () => !disabled && onChange && onChange(value),
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime236.jsx)(
          "div",
          {
            "aria-hidden": "true",
            className: `w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all
          ${isChecked ? "border-primary-default bg-primary-default" : "border-border bg-surface hover:border-primary-default"}
          ${disabled ? "bg-surface-raised border-border" : ""}`,
            children: isChecked && /* @__PURE__ */ (0, import_jsx_runtime236.jsx)("div", { className: "w-2.5 h-2.5 bg-primary-default-fg rounded-full" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime236.jsx)("span", { className: "text-foreground", children: label })
      ]
    }
  );
};
var radioButton_default = RadioButton;

// src/components/snackBar/index.tsx
var import_jsx_runtime237 = require("react/jsx-runtime");
var SNACK_BAR_TYPE = /* @__PURE__ */ ((SNACK_BAR_TYPE2) => {
  SNACK_BAR_TYPE2["DEFAULT"] = "default";
  SNACK_BAR_TYPE2["SUCCESS"] = "success";
  SNACK_BAR_TYPE2["DANGER"] = "danger";
  SNACK_BAR_TYPE2["WARNING"] = "warning";
  SNACK_BAR_TYPE2["INFO"] = "info";
  return SNACK_BAR_TYPE2;
})(SNACK_BAR_TYPE || {});
var Snackbar = ({
  type = "default" /* DEFAULT */,
  message,
  icon,
  className = ""
}) => {
  const getClassName = () => {
    switch (type) {
      case "success" /* SUCCESS */:
        return "bg-success-bg text-success-fg border-success";
      case "danger" /* DANGER */:
        return "bg-danger-bg text-danger-fg border-danger";
      case "warning" /* WARNING */:
        return "bg-warning-bg text-warning-fg border-warning";
      case "info" /* INFO */:
        return "bg-accent/10 text-accent border-accent";
      case "default" /* DEFAULT */:
      default:
        return "bg-surface text-foreground border-border";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime237.jsxs)(
    "div",
    {
      className: `${getClassName()} p-4 rounded-lg flex flex-row gap-4 items-center font-normal border ${className}`,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime237.jsx)("div", { className: "size-5", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime237.jsx)("div", { children: message })
      ]
    }
  );
};
var snackBar_default = Snackbar;

// src/components/state/index.tsx
var import_jsx_runtime238 = require("react/jsx-runtime");
var STATE_TYPE = /* @__PURE__ */ ((STATE_TYPE2) => {
  STATE_TYPE2["EMPTY"] = "EMPTY";
  STATE_TYPE2["SUCCESS"] = "SUCCESS";
  STATE_TYPE2["ERROR"] = "ERROR";
  STATE_TYPE2["LOADING"] = "LOADING";
  return STATE_TYPE2;
})(STATE_TYPE || {});
var State = ({
  type,
  stateImage,
  title,
  subTitle,
  imageWidth = 526,
  imageHeight = 526,
  className = ""
}) => {
  const typeImage = () => {
    switch (type) {
      case "EMPTY" /* EMPTY */:
        return "/images/empty.png";
      case "SUCCESS" /* SUCCESS */:
        return "/images/success.png";
      case "ERROR" /* ERROR */:
        return "/images/empty.png";
      case "LOADING" /* LOADING */:
        return "/images/empty.png";
      default:
        return "/images/empty.png";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime238.jsxs)(
    "div",
    {
      className: `w-full h-full flex flex-col gap-8 items-center justify-center ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime238.jsx)(
          "img",
          {
            src: stateImage != null ? stateImage : typeImage(),
            alt: "state image",
            width: imageWidth,
            height: imageHeight
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime238.jsxs)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime238.jsx)("p", { className: "text-3xl text-center font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime238.jsx)("p", { className: "w-[300px] text-center", children: subTitle })
        ] })
      ]
    }
  );
};
var state_default = State;

// src/components/table/index.tsx
var import_jsx_runtime239 = require("react/jsx-runtime");
var Table = ({
  columns,
  data,
  className = "",
  striped = false,
  bordered = false
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime239.jsx)("div", { className: `overflow-x-auto rounded-lg border border-border ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime239.jsx)("div", { className: "min-w-max", children: /* @__PURE__ */ (0, import_jsx_runtime239.jsxs)("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ (0, import_jsx_runtime239.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime239.jsx)("tr", { className: "bg-surface-raised border-b border-border", children: columns.map(({ header, headerClassName }, index) => /* @__PURE__ */ (0, import_jsx_runtime239.jsx)(
      "th",
      {
        className: `text-left px-4 py-4 text-foreground ${headerClassName}`,
        children: header
      },
      `column_${index}`
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime239.jsx)("tbody", { children: data.map((row, rowIndex) => {
      const stripedClass = striped && rowIndex % 2 === 1 ? "bg-surface" : "bg-background";
      const borderClass = bordered && rowIndex !== data.length - 1 ? "border-b border-border-subtle" : "";
      return /* @__PURE__ */ (0, import_jsx_runtime239.jsx)(
        "tr",
        {
          className: `hover:bg-surface-raised transition-colors duration-100 ${stripedClass} ${borderClass}`,
          children: columns.map(({ render, cellClassName }, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime239.jsx)(
            "td",
            {
              className: `text-left px-4 py-4 text-foreground ${cellClassName}`,
              children: render(row)
            },
            `cell_${cellIndex}`
          ))
        },
        `row_${rowIndex}`
      );
    }) })
  ] }) }) });
};
var table_default = Table;

// src/components/tag/index.tsx
var import_jsx_runtime240 = require("react/jsx-runtime");
var TAG_TYPE = /* @__PURE__ */ ((TAG_TYPE2) => {
  TAG_TYPE2["DEFAULT"] = "default";
  TAG_TYPE2["SUCCESS"] = "success";
  TAG_TYPE2["DANGER"] = "danger";
  TAG_TYPE2["WARNING"] = "warning";
  TAG_TYPE2["INFO"] = "info";
  return TAG_TYPE2;
})(TAG_TYPE || {});
var TAG_VARIANT = /* @__PURE__ */ ((TAG_VARIANT2) => {
  TAG_VARIANT2["SOLID"] = "solid";
  TAG_VARIANT2["OUTLINE"] = "outline";
  return TAG_VARIANT2;
})(TAG_VARIANT || {});
var TAG_EDGE_STYLE = /* @__PURE__ */ ((TAG_EDGE_STYLE2) => {
  TAG_EDGE_STYLE2["ROUNDED"] = "rounded";
  TAG_EDGE_STYLE2["SQUARED"] = "squared";
  TAG_EDGE_STYLE2["PILL"] = "pill";
  return TAG_EDGE_STYLE2;
})(TAG_EDGE_STYLE || {});
var Tag = ({
  type,
  label,
  variant = "solid" /* SOLID */,
  edges = "rounded" /* ROUNDED */,
  className = ""
}) => {
  const getTagStyle = (type2) => {
    switch (type2) {
      case "success" /* SUCCESS */:
        return `${variant === "solid" /* SOLID */ ? "bg-success-bg" : "bg-transparent border border-success"} text-success-fg`;
      case "danger" /* DANGER */:
        return `${variant === "solid" /* SOLID */ ? "bg-danger-bg" : "bg-transparent border border-danger"} text-danger-fg`;
      case "warning" /* WARNING */:
        return `${variant === "solid" /* SOLID */ ? "bg-warning-bg" : "bg-transparent border border-warning"} text-warning-fg`;
      case "info" /* INFO */:
        return `${variant === "solid" /* SOLID */ ? "bg-accent/10" : "bg-transparent border border-accent"} text-accent`;
      default:
        return `${variant === "solid" /* SOLID */ ? "bg-surface-raised" : "bg-transparent border border-border"} text-foreground`;
    }
  };
  const getEdgesStyle = (edges2) => {
    switch (edges2) {
      case "squared" /* SQUARED */:
        return "rounded-none";
      case "pill" /* PILL */:
        return "rounded-full";
      default:
        return "rounded-lg";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime240.jsx)(
    "div",
    {
      className: `w-fit px-4 py-2 text-sm ${getTagStyle(type)} ${getEdgesStyle(edges)} ${className}`,
      children: label
    }
  );
};
var tag_default = Tag;

// src/components/timeLine/index.tsx
var import_react10 = require("react");
var import_jsx_runtime241 = require("react/jsx-runtime");
var STEP_DIRECTION = /* @__PURE__ */ ((STEP_DIRECTION2) => {
  STEP_DIRECTION2["UPWARD"] = "upward";
  STEP_DIRECTION2["DOWNWARD"] = "downward";
  return STEP_DIRECTION2;
})(STEP_DIRECTION || {});
var TimeLine = ({
  logs,
  className = "",
  direction = "downward" /* DOWNWARD */
}) => {
  const [steps, setSteps] = (0, import_react10.useState)([]);
  (0, import_react10.useEffect)(() => {
    if (logs[logs.length - 1].status !== "Failed" /* FAILED */ && logs[logs.length - 1].status !== "Finished" /* FINISHED */) {
      const updatedLogs = direction === "downward" /* DOWNWARD */ ? [...logs, { title: "Pending", status: "Pending" }].reverse() : [...logs, { title: "Pending", status: "Pending" }];
      setSteps([...updatedLogs]);
    } else {
      const updatedLogs = direction === "downward" /* DOWNWARD */ ? [...logs].reverse() : [...logs];
      setSteps([...updatedLogs]);
    }
  }, [logs, direction]);
  const getIcon = (status) => {
    switch (status) {
      case "Success" /* SUCCESS */:
      case "Finished" /* FINISHED */:
        return /* @__PURE__ */ (0, import_jsx_runtime241.jsx)("div", { className: "size-4 bg-success rounded-full text-success-fg", children: /* @__PURE__ */ (0, import_jsx_runtime241.jsx)(Circle, {}) });
      case "Failed" /* FAILED */:
        return /* @__PURE__ */ (0, import_jsx_runtime241.jsx)("div", { className: "size-4 bg-danger rounded-full text-danger-fg", children: /* @__PURE__ */ (0, import_jsx_runtime241.jsx)(Circle, {}) });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime241.jsx)("div", { className: "size-4 bg-surface-raised text-muted-fg rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime241.jsx)(Circle, {}) });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime241.jsx)("div", { className, children: steps.map(
    ({ title, placeholderBottom, placeholderRight, description, status }, index) => /* @__PURE__ */ (0, import_jsx_runtime241.jsxs)("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime241.jsxs)("div", { className: "flex flex-col items-center", children: [
        getIcon(status),
        /* @__PURE__ */ (0, import_jsx_runtime241.jsx)("div", { className: "w-0.5 h-full bg-border-subtle" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime241.jsxs)("div", { className: "flex flex-col flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime241.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime241.jsx)(
            "p",
            {
              className: `text-base font-semibold text-foreground relative -top-0.5 ${status === "Pending" ? "pb-8" : ""}`,
              children: title
            }
          ),
          placeholderRight && /* @__PURE__ */ (0, import_jsx_runtime241.jsx)("p", { className: "text-xs text-muted-fg italic", children: placeholderRight })
        ] }),
        placeholderBottom && /* @__PURE__ */ (0, import_jsx_runtime241.jsx)("p", { className: "text-sm text-foreground", children: placeholderBottom }),
        description && /* @__PURE__ */ (0, import_jsx_runtime241.jsx)("p", { className: "p-4 text-xs bg-surface-overlay text-foreground rounded-lg my-2 max-w-80", children: description })
      ] })
    ] }, `log_${index}`)
  ) });
};
var timeLine_default = TimeLine;

// src/components/badge/index.tsx
var import_jsx_runtime242 = require("react/jsx-runtime");
var BADGE_TYPE = /* @__PURE__ */ ((BADGE_TYPE2) => {
  BADGE_TYPE2["DEFAULT"] = "default";
  BADGE_TYPE2["SUCCESS"] = "success";
  BADGE_TYPE2["DANGER"] = "danger";
  BADGE_TYPE2["WARNING"] = "warning";
  BADGE_TYPE2["INFO"] = "info";
  return BADGE_TYPE2;
})(BADGE_TYPE || {});
var BADGE_VARIANT = /* @__PURE__ */ ((BADGE_VARIANT2) => {
  BADGE_VARIANT2["SOLID"] = "solid";
  BADGE_VARIANT2["OUTLINE"] = "outline";
  return BADGE_VARIANT2;
})(BADGE_VARIANT || {});
var BADGE_SIZE = /* @__PURE__ */ ((BADGE_SIZE2) => {
  BADGE_SIZE2["SMALL"] = "small";
  BADGE_SIZE2["MEDIUM"] = "medium";
  return BADGE_SIZE2;
})(BADGE_SIZE || {});
var Badge = ({
  type = "default" /* DEFAULT */,
  variant = "solid" /* SOLID */,
  size = "medium" /* MEDIUM */,
  label,
  dot = false,
  className = ""
}) => {
  const getTypeStyle = () => {
    switch (type) {
      case "success" /* SUCCESS */:
        return variant === "solid" /* SOLID */ ? "bg-success-bg text-success-fg" : "bg-transparent border border-success text-success-fg";
      case "danger" /* DANGER */:
        return variant === "solid" /* SOLID */ ? "bg-danger-bg text-danger-fg" : "bg-transparent border border-danger text-danger-fg";
      case "warning" /* WARNING */:
        return variant === "solid" /* SOLID */ ? "bg-warning-bg text-warning-fg" : "bg-transparent border border-warning text-warning-fg";
      case "info" /* INFO */:
        return variant === "solid" /* SOLID */ ? "bg-accent/10 text-accent" : "bg-transparent border border-accent text-accent";
      default:
        return variant === "solid" /* SOLID */ ? "bg-surface-raised text-foreground" : "bg-transparent border border-border text-foreground";
    }
  };
  const getDotColor = () => {
    switch (type) {
      case "success" /* SUCCESS */:
        return "bg-success";
      case "danger" /* DANGER */:
        return "bg-danger";
      case "warning" /* WARNING */:
        return "bg-warning";
      case "info" /* INFO */:
        return "bg-accent";
      default:
        return "bg-muted-fg";
    }
  };
  const sizeStyle = size === "small" /* SMALL */ ? "px-1.5 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs";
  if (dot && !label) {
    const dotSize = size === "small" /* SMALL */ ? "w-2 h-2" : "w-2.5 h-2.5";
    return /* @__PURE__ */ (0, import_jsx_runtime242.jsx)("span", { className: `inline-block rounded-full ${dotSize} ${getDotColor()} ${className}` });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime242.jsxs)(
    "span",
    {
      className: `inline-flex items-center gap-1.5 w-fit font-semibold rounded-full ${sizeStyle} ${getTypeStyle()} ${className}`,
      children: [
        dot && /* @__PURE__ */ (0, import_jsx_runtime242.jsx)("span", { className: `inline-block w-1.5 h-1.5 rounded-full ${getDotColor()}` }),
        label
      ]
    }
  );
};
var badge_default = Badge;

// src/components/switch/index.tsx
var import_jsx_runtime243 = require("react/jsx-runtime");
var SWITCH_SIZE = /* @__PURE__ */ ((SWITCH_SIZE2) => {
  SWITCH_SIZE2["SMALL"] = "small";
  SWITCH_SIZE2["MEDIUM"] = "medium";
  SWITCH_SIZE2["LARGE"] = "large";
  return SWITCH_SIZE2;
})(SWITCH_SIZE || {});
var Switch = ({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = "medium" /* MEDIUM */,
  className = ""
}) => {
  const trackSize = {
    ["small" /* SMALL */]: "w-8 h-4",
    ["medium" /* MEDIUM */]: "w-11 h-6",
    ["large" /* LARGE */]: "w-14 h-7"
  }[size];
  const thumbSize = {
    ["small" /* SMALL */]: "w-3 h-3",
    ["medium" /* MEDIUM */]: "w-4 h-4",
    ["large" /* LARGE */]: "w-5 h-5"
  }[size];
  const thumbTranslate = {
    ["small" /* SMALL */]: checked ? "translate-x-4.5" : "translate-x-0.5",
    ["medium" /* MEDIUM */]: checked ? "translate-x-6" : "translate-x-1",
    ["large" /* LARGE */]: checked ? "translate-x-8" : "translate-x-1"
  }[size];
  const trackColor = disabled ? "bg-border cursor-not-allowed" : checked ? "bg-primary-500 cursor-pointer" : "bg-surface-raised border border-border cursor-pointer";
  return /* @__PURE__ */ (0, import_jsx_runtime243.jsxs)(
    "label",
    {
      className: `inline-flex items-start gap-3 ${disabled ? "opacity-50" : ""} ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime243.jsx)(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": checked,
            disabled,
            onClick: () => !disabled && onChange(!checked),
            className: `relative shrink-0 inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none ${trackSize} ${trackColor}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime243.jsx)(
              "span",
              {
                className: `inline-block bg-white rounded-full shadow-sm transition-transform duration-200 ${thumbSize} ${thumbTranslate}`
              }
            )
          }
        ),
        (label || description) && /* @__PURE__ */ (0, import_jsx_runtime243.jsxs)("div", { className: "flex flex-col", children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime243.jsx)("span", { className: "text-sm font-medium text-foreground leading-tight", children: label }),
          description && /* @__PURE__ */ (0, import_jsx_runtime243.jsx)("span", { className: "text-xs text-muted-fg mt-0.5", children: description })
        ] })
      ]
    }
  );
};
var switch_default = Switch;

// src/components/tabs/index.tsx
var import_jsx_runtime244 = require("react/jsx-runtime");
var TABS_VARIANT = /* @__PURE__ */ ((TABS_VARIANT2) => {
  TABS_VARIANT2["UNDERLINE"] = "underline";
  TABS_VARIANT2["PILL"] = "pill";
  TABS_VARIANT2["BOXED"] = "boxed";
  return TABS_VARIANT2;
})(TABS_VARIANT || {});
var Tabs = ({
  items,
  activeKey,
  onChange,
  variant = "underline" /* UNDERLINE */,
  className = ""
}) => {
  var _a, _b;
  const active = activeKey != null ? activeKey : (_a = items[0]) == null ? void 0 : _a.key;
  const getTabStyle = (key, disabled) => {
    const isActive = active === key;
    if (disabled) return "opacity-40 cursor-not-allowed";
    if (variant === "underline" /* UNDERLINE */) {
      return isActive ? "text-foreground border-b-2 border-primary-500" : "text-muted-fg border-b-2 border-transparent hover:text-foreground hover:border-border transition-colors duration-200 cursor-pointer";
    }
    if (variant === "pill" /* PILL */) {
      return isActive ? "bg-primary-500 text-primary-default-fg rounded-full cursor-default" : "text-muted-fg hover:text-foreground hover:bg-surface-raised rounded-full transition-colors duration-200 cursor-pointer";
    }
    if (variant === "boxed" /* BOXED */) {
      return isActive ? "bg-surface text-foreground border border-border rounded-md shadow-sm cursor-default" : "text-muted-fg hover:text-foreground transition-colors duration-200 cursor-pointer rounded-md";
    }
    return "";
  };
  const getTrackStyle = () => {
    if (variant === "underline" /* UNDERLINE */)
      return "border-b border-border gap-0";
    if (variant === "pill" /* PILL */)
      return "bg-surface-raised rounded-full p-1 gap-1";
    if (variant === "boxed" /* BOXED */)
      return "bg-surface-raised rounded-lg p-1 gap-1";
    return "";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime244.jsxs)("div", { className: `flex flex-col gap-4 ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime244.jsx)("div", { className: `flex flex-row flex-wrap ${getTrackStyle()}`, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime244.jsx)(
      "button",
      {
        type: "button",
        disabled: item.disabled,
        onClick: () => !item.disabled && (onChange == null ? void 0 : onChange(item.key)),
        className: `px-4 py-2 text-sm font-medium whitespace-nowrap ${getTabStyle(item.key, item.disabled)}`,
        children: item.label
      },
      item.key
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime244.jsx)("div", { children: (_b = items.find((item) => item.key === active)) == null ? void 0 : _b.content })
  ] });
};
var tabs_default = Tabs;

// src/components/accordion/index.tsx
var import_react11 = require("react");
var import_jsx_runtime245 = require("react/jsx-runtime");
var ACCORDION_VARIANT = /* @__PURE__ */ ((ACCORDION_VARIANT2) => {
  ACCORDION_VARIANT2["DEFAULT"] = "default";
  ACCORDION_VARIANT2["BORDERED"] = "bordered";
  ACCORDION_VARIANT2["FLUSH"] = "flush";
  return ACCORDION_VARIANT2;
})(ACCORDION_VARIANT || {});
var ChevronIcon = ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime245.jsx)(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    className: `w-4 h-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`,
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime245.jsx)("path", { d: "M4 6l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  }
);
var Accordion = ({
  items,
  defaultOpenKey,
  allowMultiple = false,
  variant = "default" /* DEFAULT */,
  className = ""
}) => {
  const [openKeys, setOpenKeys] = (0, import_react11.useState)(
    defaultOpenKey ? /* @__PURE__ */ new Set([defaultOpenKey]) : /* @__PURE__ */ new Set()
  );
  const toggle = (key) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        if (!allowMultiple) next.clear();
        next.add(key);
      }
      return next;
    });
  };
  const wrapperStyle = variant === "bordered" /* BORDERED */ ? "border border-border rounded-lg overflow-hidden divide-y divide-border" : variant === "flush" /* FLUSH */ ? "divide-y divide-border" : "flex flex-col gap-2";
  const itemStyle = (isOpen, disabled) => {
    if (variant === "default" /* DEFAULT */) {
      return `rounded-lg border ${isOpen ? "border-primary-500/30 bg-surface" : "border-border bg-surface"} ${disabled ? "opacity-50" : ""}`;
    }
    return disabled ? "opacity-50" : "";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime245.jsx)("div", { className: `${wrapperStyle} ${className}`, children: items.map((item) => {
    const isOpen = openKeys.has(item.key);
    return /* @__PURE__ */ (0, import_jsx_runtime245.jsxs)("div", { className: itemStyle(isOpen, item.disabled), children: [
      /* @__PURE__ */ (0, import_jsx_runtime245.jsxs)(
        "button",
        {
          type: "button",
          disabled: item.disabled,
          onClick: () => !item.disabled && toggle(item.key),
          className: `w-full flex items-center justify-between px-4 py-3.5 text-left text-sm font-medium text-foreground ${item.disabled ? "cursor-not-allowed" : "cursor-pointer hover:text-primary-500 transition-colors duration-200"}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime245.jsx)("span", { children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime245.jsx)(ChevronIcon, { open: isOpen })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ (0, import_jsx_runtime245.jsx)("div", { className: "px-4 pb-4 text-sm text-muted-fg leading-relaxed", children: item.content })
    ] }, item.key);
  }) });
};
var accordion_default = Accordion;

// src/components/skeleton/index.tsx
var import_jsx_runtime246 = require("react/jsx-runtime");
var SKELETON_VARIANT = /* @__PURE__ */ ((SKELETON_VARIANT2) => {
  SKELETON_VARIANT2["TEXT"] = "text";
  SKELETON_VARIANT2["CIRCLE"] = "circle";
  SKELETON_VARIANT2["RECT"] = "rect";
  return SKELETON_VARIANT2;
})(SKELETON_VARIANT || {});
var Skeleton = ({
  variant = "rect" /* RECT */,
  width,
  height,
  lines = 1,
  className = ""
}) => {
  var _a, _b, _c, _d;
  const base = "animate-pulse bg-surface-raised rounded";
  const style = {
    width: width !== void 0 ? typeof width === "number" ? `${width}px` : width : void 0,
    height: height !== void 0 ? typeof height === "number" ? `${height}px` : height : void 0
  };
  if (variant === "circle" /* CIRCLE */) {
    const size = (_a = width != null ? width : height) != null ? _a : 40;
    const px = typeof size === "number" ? `${size}px` : size;
    return /* @__PURE__ */ (0, import_jsx_runtime246.jsx)(
      "div",
      {
        className: `${base} rounded-full ${className}`,
        style: { width: px, height: px }
      }
    );
  }
  if (variant === "text" /* TEXT */) {
    if (lines === 1) {
      return /* @__PURE__ */ (0, import_jsx_runtime246.jsx)(
        "div",
        {
          className: `${base} h-4 ${className}`,
          style: { width: (_b = style.width) != null ? _b : "100%" }
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime246.jsx)("div", { className: `flex flex-col gap-2 ${className}`, children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime246.jsx)(
      "div",
      {
        className: `${base} h-4`,
        style: { width: i === lines - 1 ? "70%" : "100%" }
      },
      i
    )) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime246.jsx)(
    "div",
    {
      className: `${base} ${className}`,
      style: {
        width: (_c = style.width) != null ? _c : "100%",
        height: (_d = style.height) != null ? _d : "1rem"
      }
    }
  );
};
var skeleton_default = Skeleton;

// src/components/progressBar/index.tsx
var import_jsx_runtime247 = require("react/jsx-runtime");
var PROGRESS_BAR_TYPE = /* @__PURE__ */ ((PROGRESS_BAR_TYPE2) => {
  PROGRESS_BAR_TYPE2["DEFAULT"] = "default";
  PROGRESS_BAR_TYPE2["SUCCESS"] = "success";
  PROGRESS_BAR_TYPE2["DANGER"] = "danger";
  PROGRESS_BAR_TYPE2["WARNING"] = "warning";
  PROGRESS_BAR_TYPE2["INFO"] = "info";
  return PROGRESS_BAR_TYPE2;
})(PROGRESS_BAR_TYPE || {});
var PROGRESS_BAR_SIZE = /* @__PURE__ */ ((PROGRESS_BAR_SIZE2) => {
  PROGRESS_BAR_SIZE2["SMALL"] = "small";
  PROGRESS_BAR_SIZE2["MEDIUM"] = "medium";
  PROGRESS_BAR_SIZE2["LARGE"] = "large";
  return PROGRESS_BAR_SIZE2;
})(PROGRESS_BAR_SIZE || {});
var ProgressBar = ({
  value,
  max = 100,
  type = "default" /* DEFAULT */,
  size = "medium" /* MEDIUM */,
  label,
  showValue = false,
  striped = false,
  animated = false,
  className = ""
}) => {
  const percent = Math.min(Math.max(value / max * 100, 0), 100);
  const trackColor = "bg-surface-raised";
  const fillColor = {
    ["success" /* SUCCESS */]: "bg-success",
    ["danger" /* DANGER */]: "bg-danger",
    ["warning" /* WARNING */]: "bg-warning",
    ["info" /* INFO */]: "bg-accent",
    ["default" /* DEFAULT */]: "bg-primary-500"
  }[type];
  const trackHeight2 = {
    ["small" /* SMALL */]: "h-1.5",
    ["medium" /* MEDIUM */]: "h-3",
    ["large" /* LARGE */]: "h-5"
  }[size];
  const stripedClass = striped ? "bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(255,255,255,0.15)_6px,rgba(255,255,255,0.15)_12px)]" : "";
  const animatedClass = animated && striped ? "animate-[progress-stripe_1s_linear_infinite]" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime247.jsxs)("div", { className: `flex flex-col gap-1.5 ${className}`, children: [
    (label || showValue) && /* @__PURE__ */ (0, import_jsx_runtime247.jsxs)("div", { className: "flex items-center justify-between", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime247.jsx)("span", { className: "text-xs font-medium text-foreground", children: label }),
      showValue && /* @__PURE__ */ (0, import_jsx_runtime247.jsxs)("span", { className: "text-xs text-muted-fg", children: [
        Math.round(percent),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime247.jsx)("div", { className: `w-full ${trackHeight2} ${trackColor} rounded-full overflow-hidden`, children: /* @__PURE__ */ (0, import_jsx_runtime247.jsx)(
      "div",
      {
        className: `h-full ${fillColor} ${stripedClass} ${animatedClass} rounded-full transition-[width] duration-500 ease-out`,
        style: { width: `${percent}%` },
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemin": 0,
        "aria-valuemax": max
      }
    ) })
  ] });
};
var progressBar_default = ProgressBar;

// src/components/breadcrumb/index.tsx
var import_jsx_runtime248 = require("react/jsx-runtime");
var BREADCRUMB_SEPARATOR = /* @__PURE__ */ ((BREADCRUMB_SEPARATOR2) => {
  BREADCRUMB_SEPARATOR2["SLASH"] = "slash";
  BREADCRUMB_SEPARATOR2["CHEVRON"] = "chevron";
  BREADCRUMB_SEPARATOR2["DOT"] = "dot";
  return BREADCRUMB_SEPARATOR2;
})(BREADCRUMB_SEPARATOR || {});
var Separator = ({ type }) => {
  if (type === "chevron" /* CHEVRON */) {
    return /* @__PURE__ */ (0, import_jsx_runtime248.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-3 h-3 text-muted-fg", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime248.jsx)("path", { d: "M6 4l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
  }
  if (type === "dot" /* DOT */) {
    return /* @__PURE__ */ (0, import_jsx_runtime248.jsx)("span", { className: "w-1 h-1 rounded-full bg-muted-fg" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime248.jsx)("span", { className: "text-muted-fg text-sm", children: "/" });
};
var Breadcrumb = ({
  items,
  separator = "chevron" /* CHEVRON */,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime248.jsx)("nav", { "aria-label": "breadcrumb", className, children: /* @__PURE__ */ (0, import_jsx_runtime248.jsx)("ol", { className: "flex flex-row flex-wrap items-center gap-1.5", children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime248.jsxs)("li", { className: "flex items-center gap-1.5", children: [
      item.href && !isLast ? /* @__PURE__ */ (0, import_jsx_runtime248.jsxs)(
        "a",
        {
          href: item.href,
          className: "flex items-center gap-1 text-sm text-muted-fg hover:text-foreground transition-colors duration-200",
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime248.jsx)("span", { className: "w-4 h-4", children: item.icon }),
            item.label
          ]
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime248.jsxs)(
        "span",
        {
          className: `flex items-center gap-1 text-sm ${isLast ? "text-foreground font-medium" : "text-muted-fg"}`,
          "aria-current": isLast ? "page" : void 0,
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime248.jsx)("span", { className: "w-4 h-4", children: item.icon }),
            item.label
          ]
        }
      ),
      !isLast && /* @__PURE__ */ (0, import_jsx_runtime248.jsx)(Separator, { type: separator })
    ] }, index);
  }) }) });
};
var breadcrumb_default = Breadcrumb;

// src/components/drawer/index.tsx
var import_react12 = require("react");
var import_jsx_runtime249 = require("react/jsx-runtime");
var DRAWER_PLACEMENT = /* @__PURE__ */ ((DRAWER_PLACEMENT2) => {
  DRAWER_PLACEMENT2["LEFT"] = "left";
  DRAWER_PLACEMENT2["RIGHT"] = "right";
  DRAWER_PLACEMENT2["TOP"] = "top";
  DRAWER_PLACEMENT2["BOTTOM"] = "bottom";
  return DRAWER_PLACEMENT2;
})(DRAWER_PLACEMENT || {});
var DRAWER_SIZE = /* @__PURE__ */ ((DRAWER_SIZE2) => {
  DRAWER_SIZE2["SMALL"] = "small";
  DRAWER_SIZE2["MEDIUM"] = "medium";
  DRAWER_SIZE2["LARGE"] = "large";
  DRAWER_SIZE2["FULL"] = "full";
  return DRAWER_SIZE2;
})(DRAWER_SIZE || {});
var Drawer = ({
  open,
  onClose,
  title,
  children,
  placement = "right" /* RIGHT */,
  size = "medium" /* MEDIUM */,
  showOverlay = true,
  className = ""
}) => {
  (0, import_react12.useEffect)(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const isHorizontal = placement === "left" /* LEFT */ || placement === "right" /* RIGHT */;
  const sizeClass3 = isHorizontal ? {
    ["small" /* SMALL */]: "w-64",
    ["medium" /* MEDIUM */]: "w-80",
    ["large" /* LARGE */]: "w-[480px]",
    ["full" /* FULL */]: "w-full"
  }[size] : {
    ["small" /* SMALL */]: "h-48",
    ["medium" /* MEDIUM */]: "h-72",
    ["large" /* LARGE */]: "h-[480px]",
    ["full" /* FULL */]: "h-full"
  }[size];
  const placementBase = {
    ["left" /* LEFT */]: `top-0 left-0 h-full ${sizeClass3}`,
    ["right" /* RIGHT */]: `top-0 right-0 h-full ${sizeClass3}`,
    ["top" /* TOP */]: `top-0 left-0 w-full ${sizeClass3}`,
    ["bottom" /* BOTTOM */]: `bottom-0 left-0 w-full ${sizeClass3}`
  };
  const translateHidden = {
    ["left" /* LEFT */]: "-translate-x-full",
    ["right" /* RIGHT */]: "translate-x-full",
    ["top" /* TOP */]: "-translate-y-full",
    ["bottom" /* BOTTOM */]: "translate-y-full"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime249.jsxs)(import_jsx_runtime249.Fragment, { children: [
    showOverlay && /* @__PURE__ */ (0, import_jsx_runtime249.jsx)(
      "div",
      {
        className: `fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: onClose
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime249.jsxs)(
      "div",
      {
        className: `fixed z-50 bg-surface border-border shadow-xl flex flex-col transition-transform duration-300 ease-in-out
          ${placementBase[placement]}
          ${placement === "left" /* LEFT */ || placement === "top" /* TOP */ ? "border-r border-b" : "border-l border-t"}
          ${open ? "translate-x-0 translate-y-0" : translateHidden[placement]}
          ${className}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime249.jsxs)("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border shrink-0", children: [
            title ? /* @__PURE__ */ (0, import_jsx_runtime249.jsx)("p", { className: "text-sm font-semibold text-foreground", children: title }) : /* @__PURE__ */ (0, import_jsx_runtime249.jsx)("span", {}),
            /* @__PURE__ */ (0, import_jsx_runtime249.jsx)(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "p-1 rounded text-muted-fg hover:text-foreground hover:bg-surface-raised transition-colors duration-200",
                "aria-label": "Close drawer",
                children: /* @__PURE__ */ (0, import_jsx_runtime249.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime249.jsx)("path", { d: "M3 3l10 10M13 3L3 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime249.jsx)("div", { className: "flex-1 overflow-y-auto p-5", children })
        ]
      }
    )
  ] });
};
var drawer_default = Drawer;

// src/components/popover/index.tsx
var import_react13 = require("react");
var import_jsx_runtime250 = require("react/jsx-runtime");
var POPOVER_PLACEMENT = /* @__PURE__ */ ((POPOVER_PLACEMENT2) => {
  POPOVER_PLACEMENT2["TOP"] = "top";
  POPOVER_PLACEMENT2["BOTTOM"] = "bottom";
  POPOVER_PLACEMENT2["LEFT"] = "left";
  POPOVER_PLACEMENT2["RIGHT"] = "right";
  return POPOVER_PLACEMENT2;
})(POPOVER_PLACEMENT || {});
var POPOVER_TRIGGER = /* @__PURE__ */ ((POPOVER_TRIGGER2) => {
  POPOVER_TRIGGER2["CLICK"] = "click";
  POPOVER_TRIGGER2["HOVER"] = "hover";
  return POPOVER_TRIGGER2;
})(POPOVER_TRIGGER || {});
var Popover = ({
  trigger,
  content,
  placement = "bottom" /* BOTTOM */,
  triggerOn = "click" /* CLICK */,
  title,
  className = ""
}) => {
  const [open, setOpen] = (0, import_react13.useState)(false);
  const ref = (0, import_react13.useRef)(null);
  (0, import_react13.useEffect)(() => {
    if (triggerOn !== "click" /* CLICK */) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [triggerOn]);
  const placementClass2 = {
    ["top" /* TOP */]: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    ["bottom" /* BOTTOM */]: "top-full left-1/2 -translate-x-1/2 mt-2",
    ["left" /* LEFT */]: "right-full top-1/2 -translate-y-1/2 mr-2",
    ["right" /* RIGHT */]: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  const hoverProps = triggerOn === "hover" /* HOVER */ ? {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  } : {};
  return /* @__PURE__ */ (0, import_jsx_runtime250.jsxs)("div", __spreadProps(__spreadValues({ className: `relative inline-flex ${className}`, ref }, hoverProps), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime250.jsx)(
      "div",
      {
        onClick: triggerOn === "click" /* CLICK */ ? () => setOpen((v) => !v) : void 0,
        className: triggerOn === "click" /* CLICK */ ? "cursor-pointer" : "",
        children: trigger
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime250.jsxs)(
      "div",
      {
        className: `absolute z-50 w-64 bg-surface border border-border rounded-lg shadow-lg p-3 ${placementClass2[placement]}`,
        children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime250.jsx)("p", { className: "text-xs font-semibold text-foreground mb-2 pb-2 border-b border-border", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime250.jsx)("div", { className: "text-sm text-muted-fg", children: content })
        ]
      }
    )
  ] }));
};
var popover_default = Popover;

// src/components/alert/index.tsx
var import_react14 = require("react");
var import_jsx_runtime251 = require("react/jsx-runtime");
var ALERT_TYPE = /* @__PURE__ */ ((ALERT_TYPE2) => {
  ALERT_TYPE2["INFO"] = "info";
  ALERT_TYPE2["SUCCESS"] = "success";
  ALERT_TYPE2["WARNING"] = "warning";
  ALERT_TYPE2["DANGER"] = "danger";
  return ALERT_TYPE2;
})(ALERT_TYPE || {});
var ALERT_VARIANT = /* @__PURE__ */ ((ALERT_VARIANT2) => {
  ALERT_VARIANT2["SOLID"] = "solid";
  ALERT_VARIANT2["OUTLINE"] = "outline";
  ALERT_VARIANT2["SUBTLE"] = "subtle";
  return ALERT_VARIANT2;
})(ALERT_VARIANT || {});
var defaultIcons = {
  ["info" /* INFO */]: /* @__PURE__ */ (0, import_jsx_runtime251.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("circle", { cx: "8", cy: "8", r: "6", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("path", { d: "M8 7v4M8 5v.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
  ] }),
  ["success" /* SUCCESS */]: /* @__PURE__ */ (0, import_jsx_runtime251.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("circle", { cx: "8", cy: "8", r: "6", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("path", { d: "M5 8l2.5 2.5L11 5.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
  ] }),
  ["warning" /* WARNING */]: /* @__PURE__ */ (0, import_jsx_runtime251.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("path", { d: "M8 2L1.5 13h13L8 2z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("path", { d: "M8 6v3.5M8 11v.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
  ] }),
  ["danger" /* DANGER */]: /* @__PURE__ */ (0, import_jsx_runtime251.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("circle", { cx: "8", cy: "8", r: "6", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("path", { d: "M5.5 5.5l5 5M10.5 5.5l-5 5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
  ] })
};
var Alert = ({
  type = "info" /* INFO */,
  variant = "subtle" /* SUBTLE */,
  title,
  message,
  dismissible = false,
  onDismiss,
  icon,
  className = ""
}) => {
  const [dismissed, setDismissed] = (0, import_react14.useState)(false);
  const handleDismiss = () => {
    setDismissed(true);
    onDismiss == null ? void 0 : onDismiss();
  };
  if (dismissed) return null;
  const colorMap = {
    ["info" /* INFO */]: {
      solid: "bg-accent text-white border-accent",
      outline: "border border-accent text-accent bg-transparent",
      subtle: "bg-accent/10 border border-accent/20 text-accent",
      icon: "text-accent"
    },
    ["success" /* SUCCESS */]: {
      solid: "bg-success text-white border-success",
      outline: "border border-success text-success-fg bg-transparent",
      subtle: "bg-success-bg border border-success/20 text-success-fg",
      icon: "text-success"
    },
    ["warning" /* WARNING */]: {
      solid: "bg-warning text-white border-warning",
      outline: "border border-warning text-warning-fg bg-transparent",
      subtle: "bg-warning-bg border border-warning/20 text-warning-fg",
      icon: "text-warning"
    },
    ["danger" /* DANGER */]: {
      solid: "bg-danger text-white border-danger",
      outline: "border border-danger text-danger-fg bg-transparent",
      subtle: "bg-danger-bg border border-danger/20 text-danger-fg",
      icon: "text-danger"
    }
  };
  const colors = colorMap[type];
  const containerClass = colors[variant];
  const iconColor = variant === "solid" /* SOLID */ ? "text-white" : colors.icon;
  return /* @__PURE__ */ (0, import_jsx_runtime251.jsxs)("div", { className: `flex items-start gap-3 rounded-lg p-4 ${containerClass} ${className}`, role: "alert", children: [
    /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("div", { className: `shrink-0 mt-0.5 ${iconColor}`, children: icon != null ? icon : defaultIcons[type] }),
    /* @__PURE__ */ (0, import_jsx_runtime251.jsxs)("div", { className: "flex-1 min-w-0", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("p", { className: "text-sm font-semibold mb-0.5", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("div", { className: "text-sm", children: message })
    ] }),
    dismissible && /* @__PURE__ */ (0, import_jsx_runtime251.jsx)(
      "button",
      {
        type: "button",
        onClick: handleDismiss,
        className: `shrink-0 p-0.5 rounded hover:opacity-70 transition-opacity ${iconColor}`,
        "aria-label": "Dismiss",
        children: /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime251.jsx)("path", { d: "M3 3l10 10M13 3L3 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
      }
    )
  ] });
};
var alert_default = Alert;

// src/components/stepper/index.tsx
var import_jsx_runtime252 = require("react/jsx-runtime");
var STEPPER_ORIENTATION = /* @__PURE__ */ ((STEPPER_ORIENTATION2) => {
  STEPPER_ORIENTATION2["HORIZONTAL"] = "horizontal";
  STEPPER_ORIENTATION2["VERTICAL"] = "vertical";
  return STEPPER_ORIENTATION2;
})(STEPPER_ORIENTATION || {});
var STEPPER_VARIANT = /* @__PURE__ */ ((STEPPER_VARIANT2) => {
  STEPPER_VARIANT2["DEFAULT"] = "default";
  STEPPER_VARIANT2["MINIMAL"] = "minimal";
  return STEPPER_VARIANT2;
})(STEPPER_VARIANT || {});
var STEP_STATUS = /* @__PURE__ */ ((STEP_STATUS2) => {
  STEP_STATUS2["COMPLETE"] = "complete";
  STEP_STATUS2["ACTIVE"] = "active";
  STEP_STATUS2["PENDING"] = "pending";
  STEP_STATUS2["ERROR"] = "error";
  return STEP_STATUS2;
})(STEP_STATUS || {});
var StepIcon = ({ status, index }) => {
  const base = "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-200";
  if (status === "complete" /* COMPLETE */) {
    return /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `${base} bg-primary-500 text-white`, children: /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("path", { d: "M3 8l3.5 3.5L13 4.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
  }
  if (status === "error" /* ERROR */) {
    return /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `${base} bg-danger text-white`, children: /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("path", { d: "M5 5l6 6M11 5l-6 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) });
  }
  if (status === "active" /* ACTIVE */) {
    return /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `${base} border-2 border-primary-500 bg-primary-500/10 text-primary-500`, children: index + 1 });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `${base} border-2 border-border bg-transparent text-muted-fg`, children: index + 1 });
};
var Stepper = ({
  steps,
  activeKey,
  orientation = "horizontal" /* HORIZONTAL */,
  variant = "default" /* DEFAULT */,
  className = ""
}) => {
  const getStatus = (step, index) => {
    if (step.status) return step.status;
    const activeIndex = steps.findIndex((s) => s.key === activeKey);
    if (index < activeIndex) return "complete" /* COMPLETE */;
    if (index === activeIndex) return "active" /* ACTIVE */;
    return "pending" /* PENDING */;
  };
  if (orientation === "vertical" /* VERTICAL */) {
    return /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `flex flex-col ${className}`, children: steps.map((step, index) => {
      const status = getStatus(step, index);
      const isLast = index === steps.length - 1;
      return /* @__PURE__ */ (0, import_jsx_runtime252.jsxs)("div", { className: "flex flex-row gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime252.jsxs)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime252.jsx)(StepIcon, { status, index }),
          !isLast && /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `w-0.5 flex-1 my-1 ${status === "complete" /* COMPLETE */ ? "bg-primary-500" : "bg-border"}` })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime252.jsxs)("div", { className: `pb-6 ${isLast ? "" : ""}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("p", { className: `text-sm font-semibold mt-1 ${status === "active" /* ACTIVE */ ? "text-foreground" : status === "complete" /* COMPLETE */ ? "text-foreground" : "text-muted-fg"}`, children: step.title }),
          step.description && /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("p", { className: "text-xs text-muted-fg mt-0.5", children: step.description }),
          status === "active" /* ACTIVE */ && step.content && /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: "mt-3", children: step.content })
        ] })
      ] }, step.key);
    }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `flex flex-row items-start ${className}`, children: steps.map((step, index) => {
    const status = getStatus(step, index);
    const isLast = index === steps.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: "flex flex-1 items-start", children: /* @__PURE__ */ (0, import_jsx_runtime252.jsxs)("div", { className: "flex flex-col items-center flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime252.jsxs)("div", { className: "flex flex-row items-center w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `${index > 0 ? "flex-1 h-0.5 mr-2" : "hidden"} ${status === "complete" /* COMPLETE */ || status === "active" /* ACTIVE */ ? "bg-primary-500" : "bg-border"}` }),
        /* @__PURE__ */ (0, import_jsx_runtime252.jsx)(StepIcon, { status, index }),
        /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("div", { className: `${!isLast ? "flex-1 h-0.5 ml-2" : "hidden"} ${status === "complete" /* COMPLETE */ ? "bg-primary-500" : "bg-border"}` })
      ] }),
      variant === "default" /* DEFAULT */ && /* @__PURE__ */ (0, import_jsx_runtime252.jsxs)("div", { className: "text-center mt-2 px-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("p", { className: `text-xs font-semibold ${status === "active" /* ACTIVE */ ? "text-foreground" : status === "complete" /* COMPLETE */ ? "text-foreground" : "text-muted-fg"}`, children: step.title }),
        step.description && /* @__PURE__ */ (0, import_jsx_runtime252.jsx)("p", { className: "text-[10px] text-muted-fg mt-0.5 hidden sm:block", children: step.description })
      ] })
    ] }) }, step.key);
  }) });
};
var stepper_default = Stepper;

// src/components/datePicker/index.tsx
var import_react15 = require("react");
var import_jsx_runtime253 = require("react/jsx-runtime");
var DATE_PICKER_FORMAT = /* @__PURE__ */ ((DATE_PICKER_FORMAT2) => {
  DATE_PICKER_FORMAT2["DD_MMM_YYYY"] = "DD MMM YYYY";
  DATE_PICKER_FORMAT2["DD_MM_YYYY"] = "DD-MM-YYYY";
  DATE_PICKER_FORMAT2["MM_DD_YYYY"] = "MM-DD-YYYY";
  DATE_PICKER_FORMAT2["YYYY_MM_DD"] = "YYYY-MM-DD";
  DATE_PICKER_FORMAT2["DD_MM_YYYY_SLASH"] = "DD/MM/YYYY";
  DATE_PICKER_FORMAT2["MM_DD_YYYY_SLASH"] = "MM/DD/YYYY";
  DATE_PICKER_FORMAT2["DD_MMM_YYYY_TIME"] = "DD MMM YYYY HH:mm";
  DATE_PICKER_FORMAT2["DD_MM_YYYY_TIME"] = "DD-MM-YYYY HH:mm";
  DATE_PICKER_FORMAT2["MM_DD_YYYY_TIME"] = "MM-DD-YYYY HH:mm";
  DATE_PICKER_FORMAT2["YYYY_MM_DD_TIME"] = "YYYY-MM-DD HH:mm";
  DATE_PICKER_FORMAT2["DD_MM_YYYY_SLASH_TIME"] = "DD/MM/YYYY HH:mm";
  DATE_PICKER_FORMAT2["MM_DD_YYYY_SLASH_TIME"] = "MM/DD/YYYY HH:mm";
  DATE_PICKER_FORMAT2["DD_MMM_YYYY_TIME_12"] = "DD MMM YYYY hh:mm A";
  DATE_PICKER_FORMAT2["DD_MM_YYYY_TIME_12"] = "DD-MM-YYYY hh:mm A";
  DATE_PICKER_FORMAT2["MM_DD_YYYY_TIME_12"] = "MM-DD-YYYY hh:mm A";
  DATE_PICKER_FORMAT2["YYYY_MM_DD_TIME_12"] = "YYYY-MM-DD hh:mm A";
  DATE_PICKER_FORMAT2["DD_MM_YYYY_SLASH_TIME_12"] = "DD/MM/YYYY hh:mm A";
  DATE_PICKER_FORMAT2["MM_DD_YYYY_SLASH_TIME_12"] = "MM/DD/YYYY hh:mm A";
  return DATE_PICKER_FORMAT2;
})(DATE_PICKER_FORMAT || {});
var DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var isSameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
var isOutOfRange = (date, min, max) => {
  if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
  if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
  return false;
};
var hasTimeTokens = (format) => format.includes("HH") || format.includes("hh");
var is12hFormat = (format) => format.includes("hh");
var formatDisplay = (date, format, timePicker) => {
  const rawH = date.getHours();
  const rawM = date.getMinutes();
  const h24 = rawH.toString().padStart(2, "0");
  const h12 = (rawH % 12 || 12).toString().padStart(2, "0");
  const ampm = rawH < 12 ? "AM" : "PM";
  const m = rawM.toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const monthNum = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const monthShort = MONTHS_SHORT[date.getMonth()];
  let result = format.replace("A", ampm).replace("YYYY", year).replace("MMM", monthShort).replace("MM", monthNum).replace("DD", day).replace("HH", h24).replace("hh", h12).replace("mm", m);
  if (timePicker && !hasTimeTokens(format)) {
    result += ` ${h24}:${m}`;
  }
  return result;
};
var timeInputClass = "w-10 text-center text-sm bg-surface border border-border rounded px-1 py-0.5 text-foreground outline-none focus:border-primary-default transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";
var DatePicker = ({
  value,
  onChange,
  label,
  placeholder = "Select date",
  minDate,
  maxDate,
  disabled = false,
  size = "MD" /* MD */,
  format = "DD MMM YYYY" /* DD_MMM_YYYY */,
  timePicker = false,
  isError = false,
  errorMessage,
  className = ""
}) => {
  const isSM = size === "SM" /* SM */;
  const sizeClass3 = isSM ? "px-2.5 py-1.5 text-xs" : "px-3 py-2.5 text-sm";
  const iconSize = isSM ? "w-3.5 h-3.5" : "w-4 h-4";
  const minWidth = isSM ? "min-w-[160px]" : "min-w-[200px]";
  const [open, setOpen] = (0, import_react15.useState)(false);
  const [viewDate, setViewDate] = (0, import_react15.useState)(value != null ? value : /* @__PURE__ */ new Date());
  const [hours, setHours] = (0, import_react15.useState)(() => value ? value.getHours() : (/* @__PURE__ */ new Date()).getHours());
  const [minutes, setMinutes] = (0, import_react15.useState)(() => value ? value.getMinutes() : (/* @__PURE__ */ new Date()).getMinutes());
  const ref = (0, import_react15.useRef)(null);
  const use12h = is12hFormat(format);
  const isPM = hours >= 12;
  (0, import_react15.useEffect)(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  (0, import_react15.useEffect)(() => {
    if (value) {
      setViewDate(value);
      setHours(value.getHours());
      setMinutes(value.getMinutes());
    }
  }, [value]);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = /* @__PURE__ */ new Date();
  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));
  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1))
  ];
  const applyTime = (h, m) => {
    if (!value) return;
    const d = new Date(value);
    d.setHours(h, m, 0, 0);
    onChange(d);
  };
  const pickDate = (date) => {
    const d = new Date(date);
    if (timePicker) {
      d.setHours(hours, minutes, 0, 0);
    } else if (hasTimeTokens(format)) {
      const now = /* @__PURE__ */ new Date();
      d.setHours(now.getHours(), now.getMinutes(), 0, 0);
      setHours(now.getHours());
      setMinutes(now.getMinutes());
    }
    onChange(d);
    if (!timePicker) setOpen(false);
  };
  const handleHours24 = (raw) => {
    const h = Math.max(0, Math.min(23, Number(raw) || 0));
    setHours(h);
    applyTime(h, minutes);
  };
  const handleHours12 = (raw) => {
    const h12 = Math.max(1, Math.min(12, Number(raw) || 1));
    const h24 = isPM ? h12 === 12 ? 12 : h12 + 12 : h12 === 12 ? 0 : h12;
    setHours(h24);
    applyTime(h24, minutes);
  };
  const toggleAmPm = () => {
    const h = isPM ? hours - 12 : hours + 12;
    setHours(h);
    applyTime(h, minutes);
  };
  const handleMinutes = (raw) => {
    const m = Math.max(0, Math.min(59, Number(raw) || 0));
    setMinutes(m);
    applyTime(hours, m);
  };
  const displayHours = use12h ? (hours % 12 || 12).toString().padStart(2, "0") : hours.toString().padStart(2, "0");
  return /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)("div", { className: `relative inline-flex flex-col gap-1 ${className}`, ref, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("label", { className: `text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"}`, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)(
      "button",
      {
        type: "button",
        disabled,
        onClick: () => !disabled && setOpen((v) => !v),
        className: `flex items-center justify-between gap-2 ${sizeClass3} ${minWidth} border rounded transition-colors duration-200 ${disabled ? "border-border bg-surface-raised text-muted-fg cursor-not-allowed opacity-60" : isError ? "border-danger bg-surface text-foreground hover:border-danger focus:outline-none focus:border-danger cursor-pointer" : "border-border bg-surface text-foreground hover:border-primary-default focus:outline-none focus:border-primary-default cursor-pointer"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("span", { className: value ? "text-foreground" : "text-muted-fg/60", children: value ? formatDisplay(value, format, timePicker) : placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", className: `${iconSize} text-muted-fg shrink-0`, xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("rect", { x: "1", y: "3", width: "14", height: "12", rx: "2", stroke: "currentColor", strokeWidth: "1.3" }),
            /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("path", { d: "M5 1v2M11 1v2M1 7h14", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
          ] })
        ]
      }
    ),
    isError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("p", { role: "alert", className: "text-danger text-xs mt-1", children: errorMessage }),
    open && /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)("div", { className: "absolute top-full mt-1.5 left-0 z-50 bg-surface border border-border rounded-lg shadow-lg p-3 w-64", children: [
      /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("button", { type: "button", onClick: prevMonth, className: "p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("path", { d: "M10 4L6 8l4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)("span", { className: "text-sm font-semibold text-foreground", children: [
          MONTHS[month],
          " ",
          year
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("button", { type: "button", onClick: nextMonth, className: "p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("path", { d: "M6 4l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("div", { className: "grid grid-cols-7 mb-1", children: DAYS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("div", { className: "text-center text-[10px] font-bold text-muted-fg py-1", children: d }, d)) }),
      /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("div", { className: "grid grid-cols-7 gap-y-0.5", children: cells.map((date, i) => {
        if (!date) return /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("div", {}, `empty-${i}`);
        const isSelected = value ? isSameDay(date, value) : false;
        const isToday = isSameDay(date, today);
        const isDis = isOutOfRange(date, minDate, maxDate);
        return /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(
          "button",
          {
            type: "button",
            disabled: isDis,
            onClick: () => pickDate(date),
            className: `text-xs w-8 h-8 mx-auto flex items-center justify-center rounded-full transition-colors duration-150 ${isDis ? "text-muted-fg/30 cursor-not-allowed" : isSelected ? "bg-primary-default text-primary-default-fg font-semibold" : isToday ? "border border-primary-default text-primary-default font-semibold hover:bg-primary-default/10" : "text-foreground hover:bg-surface-raised cursor-pointer"}`,
            children: date.getDate()
          },
          i
        );
      }) }),
      value && !timePicker && /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange(null);
            setOpen(false);
          },
          className: "mt-2 w-full text-xs text-muted-fg hover:text-foreground text-center py-1 hover:bg-surface-raised rounded transition-colors",
          children: "Clear selection"
        }
      ),
      timePicker && /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)("div", { className: "mt-2 pt-2 border-t border-border", children: [
        /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("span", { className: "text-xs text-muted-fg font-medium", children: "Time" }),
          /* @__PURE__ */ (0, import_jsx_runtime253.jsxs)("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(
              "input",
              {
                type: "number",
                min: use12h ? 1 : 0,
                max: use12h ? 12 : 23,
                value: displayHours,
                onChange: (e) => use12h ? handleHours12(e.target.value) : handleHours24(e.target.value),
                className: timeInputClass
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime253.jsx)("span", { className: "text-sm font-bold text-muted-fg", children: ":" }),
            /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(
              "input",
              {
                type: "number",
                min: 0,
                max: 59,
                value: minutes.toString().padStart(2, "0"),
                onChange: (e) => handleMinutes(e.target.value),
                className: timeInputClass
              }
            ),
            use12h && /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(
              "button",
              {
                type: "button",
                onClick: toggleAmPm,
                className: "text-xs font-semibold px-1.5 py-0.5 rounded border border-border text-foreground hover:bg-surface-raised transition-colors min-w-8.5",
                children: isPM ? "PM" : "AM"
              }
            )
          ] })
        ] }),
        value && /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(
          "button",
          {
            type: "button",
            onClick: () => onChange(null),
            className: "w-full text-xs text-muted-fg hover:text-foreground text-center py-1 hover:bg-surface-raised rounded transition-colors mb-1",
            children: "Clear selection"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setOpen(false),
            className: "w-full text-xs font-semibold text-primary-default hover:opacity-70 text-center py-1.5 bg-primary-default/10 hover:bg-primary-default/20 rounded transition-colors",
            children: "Done"
          }
        )
      ] })
    ] })
  ] });
};
var datePicker_default = DatePicker;

// src/components/commandPalette/index.tsx
var import_react16 = require("react");
var import_jsx_runtime254 = require("react/jsx-runtime");
var CommandPalette = ({
  open,
  onClose,
  items,
  placeholder = "Type a command or search...",
  emptyMessage = "No results found."
}) => {
  const [query, setQuery] = (0, import_react16.useState)("");
  const [activeIndex, setActiveIndex] = (0, import_react16.useState)(0);
  const inputRef = (0, import_react16.useRef)(null);
  const listRef = (0, import_react16.useRef)(null);
  (0, import_react16.useEffect)(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.focus();
      }, 50);
    }
  }, [open]);
  (0, import_react16.useEffect)(() => {
    const handler = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[activeIndex]) {
          filtered[activeIndex].onSelect();
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  });
  const filtered = query.trim() ? items.filter(
    (item) => {
      var _a, _b;
      return item.label.toLowerCase().includes(query.toLowerCase()) || ((_a = item.description) == null ? void 0 : _a.toLowerCase().includes(query.toLowerCase())) || ((_b = item.group) == null ? void 0 : _b.toLowerCase().includes(query.toLowerCase()));
    }
  ) : items;
  const grouped = filtered.reduce((acc, item) => {
    var _a;
    const g = (_a = item.group) != null ? _a : "";
    if (!acc[g]) acc[g] = [];
    acc[g].push(item);
    return acc;
  }, {});
  let flatIndex = 0;
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("div", { className: "fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("div", { className: "absolute inset-0 bg-black/50", onClick: onClose }),
    /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("div", { className: "relative w-full max-w-lg bg-surface border border-border rounded-xl shadow-2xl overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-border", children: [
        /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4 text-muted-fg shrink-0", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("circle", { cx: "7", cy: "7", r: "4.5", stroke: "currentColor", strokeWidth: "1.4" }),
          /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("path", { d: "M10.5 10.5l3 3", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime254.jsx)(
          "input",
          {
            ref: inputRef,
            type: "text",
            value: query,
            onChange: (e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            },
            placeholder,
            className: "flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 focus:outline-none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("kbd", { className: "hidden sm:inline-flex items-center px-1.5 py-0.5 rounded border border-border text-[10px] text-muted-fg font-mono", children: "ESC" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("div", { ref: listRef, className: "overflow-y-auto max-h-80 py-2", children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("p", { className: "px-4 py-6 text-center text-sm text-muted-fg", children: emptyMessage }) : Object.entries(grouped).map(([group, groupItems]) => /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("div", { children: [
        group && /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("p", { className: "px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase text-muted-fg/60", children: group }),
        groupItems.map((item) => {
          const idx = flatIndex++;
          const isActive = activeIndex === idx;
          return /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)(
            "button",
            {
              type: "button",
              onClick: () => {
                item.onSelect();
                onClose();
              },
              onMouseEnter: () => setActiveIndex(idx),
              className: `w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100 ${isActive ? "bg-primary-500/10" : "hover:bg-surface-raised"}`,
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("span", { className: "w-5 h-5 text-muted-fg shrink-0", children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("p", { className: "text-sm font-medium text-foreground truncate", children: item.label }),
                  item.description && /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("p", { className: "text-xs text-muted-fg truncate", children: item.description })
                ] }),
                item.shortcut && /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("div", { className: "flex gap-1 shrink-0", children: item.shortcut.map((k) => /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("kbd", { className: "px-1.5 py-0.5 text-[10px] rounded border border-border text-muted-fg font-mono", children: k }, k)) })
              ]
            },
            item.id
          );
        })
      ] }, group)) }),
      /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("div", { className: "flex items-center gap-4 px-4 py-2 border-t border-border", children: [
        /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("span", { className: "flex items-center gap-1 text-[10px] text-muted-fg/60", children: [
          /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("kbd", { className: "px-1 py-0.5 rounded border border-border font-mono text-[9px]", children: "\u2191\u2193" }),
          " navigate"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime254.jsxs)("span", { className: "flex items-center gap-1 text-[10px] text-muted-fg/60", children: [
          /* @__PURE__ */ (0, import_jsx_runtime254.jsx)("kbd", { className: "px-1 py-0.5 rounded border border-border font-mono text-[9px]", children: "\u21B5" }),
          " select"
        ] })
      ] })
    ] })
  ] });
};
var commandPalette_default = CommandPalette;

// src/components/colorPicker/index.tsx
var import_react17 = require("react");
var import_jsx_runtime255 = require("react/jsx-runtime");
var DEFAULT_PRESETS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#64748b",
  "#1e293b",
  "#ffffff",
  "#000000"
];
var isValidHex = (v) => /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(v);
var ColorPicker = ({
  value = "#3b82f6",
  onChange,
  label,
  presets = DEFAULT_PRESETS,
  disabled = false,
  size = "MD" /* MD */,
  className = ""
}) => {
  const isSM = size === "SM" /* SM */;
  const sizeClass3 = isSM ? "px-2.5 py-1.5 gap-2 text-xs" : "px-3 py-2.5 gap-2.5 text-sm";
  const swatchSize = isSM ? "w-4 h-4" : "w-5 h-5";
  const chevSize = isSM ? "w-3 h-3" : "w-3.5 h-3.5";
  const [open, setOpen] = (0, import_react17.useState)(false);
  const [inputVal, setInputVal] = (0, import_react17.useState)(value);
  const ref = (0, import_react17.useRef)(null);
  (0, import_react17.useEffect)(() => {
    setInputVal(value);
  }, [value]);
  (0, import_react17.useEffect)(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const handleInputChange = (v) => {
    setInputVal(v);
    if (isValidHex(v)) onChange(v);
  };
  const handleNativeChange = (v) => {
    setInputVal(v);
    onChange(v);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime255.jsxs)("div", { className: `relative inline-flex flex-col gap-1 ${className}`, ref, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime255.jsx)("span", { className: "text-xs font-semibold text-muted-fg", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime255.jsxs)(
      "button",
      {
        type: "button",
        disabled,
        onClick: () => !disabled && setOpen((v) => !v),
        className: `flex items-center ${sizeClass3} border rounded transition-colors duration-200 ${disabled ? "border-border bg-surface-raised opacity-60 cursor-not-allowed" : "border-border bg-surface hover:border-primary-500 cursor-pointer focus:outline-none"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime255.jsx)(
            "span",
            {
              className: `${swatchSize} rounded border border-border/60 shrink-0`,
              style: { backgroundColor: value }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime255.jsx)("span", { className: "text-foreground font-mono text-xs", children: value.toUpperCase() }),
          /* @__PURE__ */ (0, import_jsx_runtime255.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: `${chevSize} text-muted-fg`, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime255.jsx)("path", { d: "M4 6l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime255.jsxs)("div", { className: "absolute top-full mt-1.5 left-0 z-50 bg-surface border border-border rounded-lg shadow-lg p-4 w-56", children: [
      /* @__PURE__ */ (0, import_jsx_runtime255.jsxs)("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime255.jsxs)("div", { className: "relative w-10 h-10 rounded overflow-hidden border border-border shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime255.jsx)("div", { className: "w-full h-full", style: { backgroundColor: value } }),
          /* @__PURE__ */ (0, import_jsx_runtime255.jsx)(
            "input",
            {
              type: "color",
              value,
              onChange: (e) => handleNativeChange(e.target.value),
              className: "absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime255.jsxs)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime255.jsx)("p", { className: "text-[10px] text-muted-fg mb-1 font-semibold", children: "HEX" }),
          /* @__PURE__ */ (0, import_jsx_runtime255.jsx)(
            "input",
            {
              type: "text",
              value: inputVal,
              onChange: (e) => handleInputChange(e.target.value),
              maxLength: 7,
              className: "w-full text-xs font-mono text-foreground bg-surface-raised border border-border rounded px-2 py-1 focus:outline-none focus:border-primary-500",
              placeholder: "#000000"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime255.jsx)("p", { className: "text-[10px] font-bold tracking-widest uppercase text-muted-fg/60 mb-2", children: "Presets" }),
      /* @__PURE__ */ (0, import_jsx_runtime255.jsx)("div", { className: "grid grid-cols-6 gap-1.5", children: presets.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime255.jsx)(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange(preset);
            setInputVal(preset);
          },
          className: "w-7 h-7 rounded border-2 transition-transform hover:scale-110",
          style: {
            backgroundColor: preset,
            borderColor: value === preset ? "#adc09e" : "transparent"
          },
          title: preset
        },
        preset
      )) })
    ] })
  ] });
};
var colorPicker_default = ColorPicker;

// src/components/menuBar/index.tsx
var import_react18 = require("react");
var import_jsx_runtime256 = require("react/jsx-runtime");
var MENU_BAR_VARIANT = /* @__PURE__ */ ((MENU_BAR_VARIANT2) => {
  MENU_BAR_VARIANT2["DEFAULT"] = "DEFAULT";
  MENU_BAR_VARIANT2["BORDERED"] = "BORDERED";
  MENU_BAR_VARIANT2["ELEVATED"] = "ELEVATED";
  MENU_BAR_VARIANT2["TRANSPARENT"] = "TRANSPARENT";
  return MENU_BAR_VARIANT2;
})(MENU_BAR_VARIANT || {});
var MENU_BAR_ITEMS_ALIGN = /* @__PURE__ */ ((MENU_BAR_ITEMS_ALIGN2) => {
  MENU_BAR_ITEMS_ALIGN2["LEFT"] = "LEFT";
  MENU_BAR_ITEMS_ALIGN2["CENTER"] = "CENTER";
  MENU_BAR_ITEMS_ALIGN2["RIGHT"] = "RIGHT";
  return MENU_BAR_ITEMS_ALIGN2;
})(MENU_BAR_ITEMS_ALIGN || {});
var variantClass2 = {
  ["DEFAULT" /* DEFAULT */]: "bg-surface border-b border-border",
  ["BORDERED" /* BORDERED */]: "bg-surface border border-border rounded-lg",
  ["ELEVATED" /* ELEVATED */]: "bg-surface shadow-md",
  ["TRANSPARENT" /* TRANSPARENT */]: "bg-transparent"
};
var MORE_BTN_WIDTH = 88;
var MenuBar = ({
  menuItems,
  logoShort,
  logoLong,
  logoShortWidth = 36,
  logoShortHeight = 36,
  isAvatarVisible = false,
  avatarName = "",
  avatarEmail = "",
  avatarImage = "",
  avatarType = "image_with_full" /* IMAGE_WITH_FULL */,
  avatarSize = "SM" /* SM */,
  avatarLabelPosition = "RIGHT" /* RIGHT */,
  sticky = false,
  variant = "DEFAULT" /* DEFAULT */,
  itemsAlign = "LEFT" /* LEFT */,
  className = "",
  menuItemTextClass = "",
  isLoading = false,
  onNavigate,
  rightSlot
}) => {
  const [activeItem, setActiveItem] = (0, import_react18.useState)("");
  const [openDropdown, setOpenDropdown] = (0, import_react18.useState)(null);
  const [mobileOpen, setMobileOpen] = (0, import_react18.useState)(false);
  const [visibleCount, setVisibleCount] = (0, import_react18.useState)(menuItems.length);
  const navRef = (0, import_react18.useRef)(null);
  const itemsContainerRef = (0, import_react18.useRef)(null);
  const itemRefs = (0, import_react18.useRef)([]);
  itemRefs.current = itemRefs.current.slice(0, menuItems.length);
  (0, import_react18.useEffect)(() => {
    var _a;
    const active = menuItems.find((i) => i.isActive);
    setActiveItem((_a = active == null ? void 0 : active.title) != null ? _a : "");
  }, [menuItems]);
  (0, import_react18.useEffect)(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  (0, import_react18.useEffect)(() => {
    const calculate = () => {
      var _a, _b;
      const container = itemsContainerRef.current;
      if (!container) return;
      const available = container.offsetWidth;
      const items = itemRefs.current;
      let used = 0;
      let count = 0;
      for (let i = 0; i < items.length; i++) {
        const w = (_b = (_a = items[i]) == null ? void 0 : _a.offsetWidth) != null ? _b : 0;
        const isLast = i === items.length - 1;
        const threshold = isLast ? available : available - MORE_BTN_WIDTH;
        if (used + w <= threshold) {
          used += w;
          count++;
        } else {
          break;
        }
      }
      setVisibleCount(count);
    };
    const observer = new ResizeObserver(calculate);
    if (itemsContainerRef.current) observer.observe(itemsContainerRef.current);
    calculate();
    return () => observer.disconnect();
  }, [menuItems]);
  const handleItemClick = (item) => {
    var _a;
    if (item.isDivider) return;
    setActiveItem(item.title);
    if (item.hasChildren) {
      setOpenDropdown(openDropdown === item.title ? null : item.title);
      return;
    }
    setOpenDropdown(null);
    setMobileOpen(false);
    (_a = item.onClick) == null ? void 0 : _a.call(item);
    onNavigate == null ? void 0 : onNavigate(item.route);
  };
  const handleSubItemClick = (sub) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    onNavigate == null ? void 0 : onNavigate(sub.route);
  };
  const activeItemStyle = "text-primary-default";
  const inactiveItemStyle = "text-muted-fg hover:text-foreground";
  const stableText = (title, isActive) => /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { style: isActive ? { textShadow: "0 0 0.45px currentColor, 0 0 0.45px currentColor" } : {}, children: title });
  const alignClass = {
    ["LEFT" /* LEFT */]: "justify-start",
    ["CENTER" /* CENTER */]: "justify-center",
    ["RIGHT" /* RIGHT */]: "justify-end"
  };
  const visibleItems = menuItems.slice(0, visibleCount);
  const overflowItems = menuItems.slice(visibleCount).filter((i) => !i.isDivider);
  const hasOverflow = overflowItems.length > 0;
  const renderItemButton = (item, isOverflow = false) => {
    var _a, _b;
    const isActive = activeItem === item.title;
    return /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)(import_jsx_runtime256.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)(
        "button",
        {
          onClick: () => handleItemClick(item),
          className: `w-full flex flex-row items-center gap-1.5 px-3 py-2 rounded text-sm transition-colors duration-150 cursor-pointer ${isOverflow ? "text-left" : ""} ${isActive ? activeItemStyle : inactiveItemStyle} ${menuItemTextClass}`,
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { className: "size-4 shrink-0", children: item.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { className: isOverflow ? "flex-1" : "", children: stableText(item.title, isActive) }),
            item.hasChildren && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
              "span",
              {
                className: `size-3.5 shrink-0 transition-transform duration-200 ${openDropdown === item.title ? "rotate-180" : ""}`,
                children: /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(ChevDown, {})
              }
            )
          ]
        }
      ),
      item.hasChildren && openDropdown === item.title && !isOverflow && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "absolute top-full left-0 mt-1 min-w-44 bg-surface border border-border rounded shadow-lg z-50 py-1", children: (_a = item.children) == null ? void 0 : _a.map((sub, i) => /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
        "button",
        {
          onClick: () => handleSubItemClick(sub),
          className: `w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 cursor-pointer ${sub.isActive ? "text-primary-default font-medium bg-primary-default/5" : "text-muted-fg hover:text-foreground hover:bg-surface-raised"}`,
          children: sub.title
        },
        i
      )) }),
      item.hasChildren && openDropdown === item.title && isOverflow && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "ml-3 flex flex-col border-l border-border pl-2 mb-1", children: (_b = item.children) == null ? void 0 : _b.map((sub, i) => /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
        "button",
        {
          onClick: () => handleSubItemClick(sub),
          className: `w-full text-left px-3 py-2 text-sm rounded transition-colors duration-150 cursor-pointer ${sub.isActive ? "text-primary-default font-medium" : "text-muted-fg hover:text-foreground hover:bg-surface-raised"}`,
          children: sub.title
        },
        i
      )) })
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)(
    "nav",
    {
      ref: navRef,
      className: `w-full z-50 ${sticky ? "sticky top-0" : ""} ${variantClass2[variant]} ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)("div", { className: "px-4 h-14 flex items-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
              "img",
              {
                src: logoShort,
                alt: "logo",
                width: logoShortWidth,
                height: logoShortHeight
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
              "img",
              {
                src: logoLong,
                alt: "logo",
                className: "hidden sm:block h-6 w-auto"
              }
            )
          ] }),
          !isLoading ? /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)(
            "div",
            {
              ref: itemsContainerRef,
              className: `hidden md:flex items-center flex-1 min-w-0 ${alignClass[itemsAlign]}`,
              children: [
                visibleItems.map((item, index) => {
                  if (item.isDivider) {
                    return /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
                      "div",
                      {
                        ref: (el) => {
                          itemRefs.current[index] = el;
                        },
                        className: "w-px h-5 bg-border mx-1 shrink-0"
                      },
                      index
                    );
                  }
                  return /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
                    "div",
                    {
                      ref: (el) => {
                        itemRefs.current[index] = el;
                      },
                      className: "relative shrink-0",
                      children: renderItemButton(item)
                    },
                    index
                  );
                }),
                menuItems.slice(visibleCount).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
                  "div",
                  {
                    ref: (el) => {
                      itemRefs.current[visibleCount + index] = el;
                    },
                    className: "invisible pointer-events-none absolute shrink-0",
                    "aria-hidden": true,
                    children: item.isDivider ? /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "w-px h-5 mx-1" }) : /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)(
                      "button",
                      {
                        className: `flex items-center gap-1.5 px-3 py-2 text-sm ${menuItemTextClass}`,
                        children: [
                          item.icon && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { className: "size-4", children: item.icon }),
                          /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { children: item.title }),
                          item.hasChildren && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { className: "size-3.5", children: /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(ChevDown, {}) })
                        ]
                      }
                    )
                  },
                  `measure-${visibleCount + index}`
                )),
                hasOverflow && /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)("div", { className: "relative shrink-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)(
                    "button",
                    {
                      onClick: () => setOpenDropdown(
                        openDropdown === "__more__" ? null : "__more__"
                      ),
                      className: `flex items-center gap-1 px-3 py-2 rounded text-sm transition-colors duration-150 cursor-pointer ${openDropdown === "__more__" ? activeItemStyle : inactiveItemStyle}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { children: "More" }),
                        /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
                          "span",
                          {
                            className: `size-3.5 transition-transform duration-200 ${openDropdown === "__more__" ? "rotate-180" : ""}`,
                            children: /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(ChevDown, {})
                          }
                        )
                      ]
                    }
                  ),
                  openDropdown === "__more__" && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "absolute top-full right-0 mt-1 min-w-48 bg-surface border border-border rounded shadow-lg z-50 py-1", children: overflowItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "px-1", children: renderItemButton(item, true) }, i)) })
                ] })
              ]
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(MenuBarShimmer, {}),
          /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)("div", { className: "ml-auto flex items-center gap-3 shrink-0", children: [
            rightSlot,
            isAvatarVisible && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
              avatar_default,
              {
                name: avatarName,
                email: avatarEmail,
                variant: avatarType != null ? avatarType : "image-only" /* IMAGE_ONLY */,
                image: avatarImage != null ? avatarImage : "",
                size: avatarSize,
                labelPosition: avatarLabelPosition
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
              "button",
              {
                className: "md:hidden size-8 flex items-center justify-center text-muted-fg hover:text-foreground cursor-pointer",
                onClick: () => setMobileOpen(!mobileOpen),
                children: /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { className: "size-5", children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(Cross, {}) : /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(Menu, {}) })
              }
            )
          ] })
        ] }),
        mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "md:hidden border-t border-border bg-surface px-4 py-2 flex flex-col gap-1", children: menuItems.map((item, index) => {
          var _a;
          if (item.isDivider) {
            return /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "border-b border-border my-1" }, index);
          }
          const isActive = activeItem === item.title;
          return /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime256.jsxs)(
              "button",
              {
                onClick: () => handleItemClick(item),
                className: `w-full flex items-center gap-2 px-3 py-2.5 rounded text-sm transition-colors duration-150 cursor-pointer ${isActive ? activeItemStyle : inactiveItemStyle} ${menuItemTextClass}`,
                children: [
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { className: "size-4", children: item.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("span", { className: "flex-1 text-left", children: stableText(item.title, isActive) }),
                  item.hasChildren && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
                    "span",
                    {
                      className: `size-3.5 transition-transform duration-200 ${openDropdown === item.title ? "rotate-180" : ""}`,
                      children: /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(ChevDown, {})
                    }
                  )
                ]
              }
            ),
            item.hasChildren && openDropdown === item.title && /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "ml-4 flex flex-col gap-0.5 mt-0.5 mb-1", children: (_a = item.children) == null ? void 0 : _a.map((sub, i) => /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(
              "button",
              {
                onClick: () => handleSubItemClick(sub),
                className: `w-full text-left px-3 py-2 text-sm rounded transition-colors duration-150 cursor-pointer ${sub.isActive ? "text-primary-default font-medium" : "text-muted-fg hover:text-foreground hover:bg-surface-raised"}`,
                children: sub.title
              },
              i
            )) })
          ] }, index);
        }) })
      ]
    }
  );
};
var MenuBarShimmer = () => /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "flex items-center gap-2 flex-1 animate-pulse", children: [...Array(4)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime256.jsx)("div", { className: "h-4 w-16 bg-surface-raised rounded" }, i)) });
var menuBar_default = MenuBar;

// src/components/card/index.tsx
var import_jsx_runtime257 = require("react/jsx-runtime");
var CARD_VARIANT = /* @__PURE__ */ ((CARD_VARIANT2) => {
  CARD_VARIANT2["DEFAULT"] = "DEFAULT";
  CARD_VARIANT2["BORDERED"] = "BORDERED";
  CARD_VARIANT2["ELEVATED"] = "ELEVATED";
  CARD_VARIANT2["FLAT"] = "FLAT";
  return CARD_VARIANT2;
})(CARD_VARIANT || {});
var CARD_PADDING = /* @__PURE__ */ ((CARD_PADDING2) => {
  CARD_PADDING2["NONE"] = "NONE";
  CARD_PADDING2["SM"] = "SM";
  CARD_PADDING2["MD"] = "MD";
  CARD_PADDING2["LG"] = "LG";
  return CARD_PADDING2;
})(CARD_PADDING || {});
var variantClass3 = {
  ["DEFAULT" /* DEFAULT */]: "bg-surface border border-border rounded-xl",
  ["BORDERED" /* BORDERED */]: "bg-surface border-2 border-border rounded-xl",
  ["ELEVATED" /* ELEVATED */]: "bg-surface dark:bg-surface-raised rounded-xl shadow-md dark:shadow-[0_4px_8px_rgba(0,0,0,0.3)] ring-1 ring-border/30 dark:ring-border",
  ["FLAT" /* FLAT */]: "bg-surface-raised rounded-xl"
};
var paddingClass = {
  ["NONE" /* NONE */]: "",
  ["SM" /* SM */]: "p-3",
  ["MD" /* MD */]: "p-5",
  ["LG" /* LG */]: "p-8"
};
var Card = ({
  children,
  variant = "DEFAULT" /* DEFAULT */,
  padding = "MD" /* MD */,
  header,
  footer,
  className = ""
}) => {
  const hasSlots = header || footer;
  if (hasSlots) {
    return /* @__PURE__ */ (0, import_jsx_runtime257.jsxs)("div", { className: `${variantClass3[variant]} overflow-hidden ${className}`, children: [
      header && /* @__PURE__ */ (0, import_jsx_runtime257.jsx)("div", { className: `border-b border-border ${paddingClass[padding]}`, children: header }),
      /* @__PURE__ */ (0, import_jsx_runtime257.jsx)("div", { className: paddingClass[padding], children }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime257.jsx)("div", { className: `border-t border-border ${paddingClass[padding]}`, children: footer })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime257.jsx)("div", { className: `${variantClass3[variant]} ${paddingClass[padding]} ${className}`, children });
};
var card_default = Card;

// src/components/divider/index.tsx
var import_jsx_runtime258 = require("react/jsx-runtime");
var DIVIDER_ORIENTATION = /* @__PURE__ */ ((DIVIDER_ORIENTATION2) => {
  DIVIDER_ORIENTATION2["HORIZONTAL"] = "HORIZONTAL";
  DIVIDER_ORIENTATION2["VERTICAL"] = "VERTICAL";
  return DIVIDER_ORIENTATION2;
})(DIVIDER_ORIENTATION || {});
var DIVIDER_VARIANT = /* @__PURE__ */ ((DIVIDER_VARIANT2) => {
  DIVIDER_VARIANT2["SOLID"] = "SOLID";
  DIVIDER_VARIANT2["DASHED"] = "DASHED";
  DIVIDER_VARIANT2["DOTTED"] = "DOTTED";
  return DIVIDER_VARIANT2;
})(DIVIDER_VARIANT || {});
var borderStyle = {
  ["SOLID" /* SOLID */]: "border-solid",
  ["DASHED" /* DASHED */]: "border-dashed",
  ["DOTTED" /* DOTTED */]: "border-dotted"
};
var Divider = ({
  orientation = "HORIZONTAL" /* HORIZONTAL */,
  variant = "SOLID" /* SOLID */,
  label,
  className = ""
}) => {
  if (orientation === "VERTICAL" /* VERTICAL */) {
    return /* @__PURE__ */ (0, import_jsx_runtime258.jsx)(
      "div",
      {
        className: `self-stretch w-px border-l border-border ${borderStyle[variant]} ${className}`
      }
    );
  }
  if (label) {
    return /* @__PURE__ */ (0, import_jsx_runtime258.jsxs)("div", { className: `flex items-center gap-3 ${className}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime258.jsx)("div", { className: `flex-1 border-t border-border ${borderStyle[variant]}` }),
      /* @__PURE__ */ (0, import_jsx_runtime258.jsx)("span", { className: "text-xs text-muted-fg whitespace-nowrap", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime258.jsx)("div", { className: `flex-1 border-t border-border ${borderStyle[variant]}` })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime258.jsx)(
    "div",
    {
      className: `w-full border-t border-border ${borderStyle[variant]} ${className}`
    }
  );
};
var divider_default = Divider;

// src/components/spinner/index.tsx
var import_jsx_runtime259 = require("react/jsx-runtime");
var SPINNER_SIZE = /* @__PURE__ */ ((SPINNER_SIZE2) => {
  SPINNER_SIZE2["XS"] = "XS";
  SPINNER_SIZE2["SM"] = "SM";
  SPINNER_SIZE2["MD"] = "MD";
  SPINNER_SIZE2["LG"] = "LG";
  SPINNER_SIZE2["XL"] = "XL";
  return SPINNER_SIZE2;
})(SPINNER_SIZE || {});
var SPINNER_COLOR = /* @__PURE__ */ ((SPINNER_COLOR2) => {
  SPINNER_COLOR2["DEFAULT"] = "DEFAULT";
  SPINNER_COLOR2["PRIMARY"] = "PRIMARY";
  SPINNER_COLOR2["SUCCESS"] = "SUCCESS";
  SPINNER_COLOR2["DANGER"] = "DANGER";
  SPINNER_COLOR2["WARNING"] = "WARNING";
  return SPINNER_COLOR2;
})(SPINNER_COLOR || {});
var sizeClass = {
  ["XS" /* XS */]: "size-3 border-[1.5px]",
  ["SM" /* SM */]: "size-4 border-2",
  ["MD" /* MD */]: "size-6 border-2",
  ["LG" /* LG */]: "size-9 border-[3px]",
  ["XL" /* XL */]: "size-12 border-[3px]"
};
var colorClass = {
  ["DEFAULT" /* DEFAULT */]: "border-border border-t-foreground",
  ["PRIMARY" /* PRIMARY */]: "border-primary-100 border-t-primary-default",
  ["SUCCESS" /* SUCCESS */]: "border-success-bg border-t-success",
  ["DANGER" /* DANGER */]: "border-danger-bg border-t-danger",
  ["WARNING" /* WARNING */]: "border-warning-bg border-t-warning"
};
var Spinner2 = ({
  size = "MD" /* MD */,
  color = "DEFAULT" /* DEFAULT */,
  className = ""
}) => /* @__PURE__ */ (0, import_jsx_runtime259.jsx)(
  "div",
  {
    role: "status",
    "aria-label": "Loading",
    className: `rounded-full animate-spin ${sizeClass[size]} ${colorClass[color]} ${className}`
  }
);
var spinner_default = Spinner2;

// src/components/statCard/index.tsx
var import_jsx_runtime260 = require("react/jsx-runtime");
var STAT_TREND = /* @__PURE__ */ ((STAT_TREND2) => {
  STAT_TREND2["UP"] = "UP";
  STAT_TREND2["DOWN"] = "DOWN";
  STAT_TREND2["NEUTRAL"] = "NEUTRAL";
  return STAT_TREND2;
})(STAT_TREND || {});
var trendConfig = {
  ["UP" /* UP */]: { color: "text-success", arrow: "\u2191" },
  ["DOWN" /* DOWN */]: { color: "text-danger", arrow: "\u2193" },
  ["NEUTRAL" /* NEUTRAL */]: { color: "text-muted-fg", arrow: "\u2192" }
};
var StatCard = ({
  label,
  value,
  trend,
  trendLabel,
  icon,
  className = ""
}) => {
  const trendCfg = trend ? trendConfig[trend] : null;
  return /* @__PURE__ */ (0, import_jsx_runtime260.jsxs)("div", { className: `bg-surface border border-border rounded-xl p-5 flex flex-col gap-3 ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime260.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime260.jsx)("p", { className: "text-sm text-muted-fg", children: label }),
      icon && /* @__PURE__ */ (0, import_jsx_runtime260.jsx)("span", { className: "size-5 text-muted-fg shrink-0", children: icon })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime260.jsx)("p", { className: "text-2xl font-bold text-foreground leading-none", children: value }),
    trendCfg && trendLabel && /* @__PURE__ */ (0, import_jsx_runtime260.jsxs)("p", { className: `text-xs font-medium ${trendCfg.color}`, children: [
      trendCfg.arrow,
      " ",
      trendLabel
    ] })
  ] });
};
var statCard_default = StatCard;

// src/components/avatarGroup/index.tsx
var import_react19 = require("react");
var import_jsx_runtime261 = require("react/jsx-runtime");
var sizeClass2 = {
  ["XS" /* XS */]: "size-6 text-[10px]",
  ["SM" /* SM */]: "size-8 text-xs",
  ["MD" /* MD */]: "size-10 text-xs",
  ["LG" /* LG */]: "size-14 text-sm",
  ["XL" /* XL */]: "size-18 text-base"
};
var offsetClass = {
  ["XS" /* XS */]: "-ml-2",
  ["SM" /* SM */]: "-ml-3",
  ["MD" /* MD */]: "-ml-3",
  ["LG" /* LG */]: "-ml-4",
  ["XL" /* XL */]: "-ml-5"
};
var AvatarGroup = ({
  items,
  max = 4,
  size = "SM" /* SM */,
  overflowTooltipPosition = "top" /* TOP */,
  className = ""
}) => {
  const [tooltipVisible, setTooltipVisible] = (0, import_react19.useState)(false);
  const visible = items.slice(0, max);
  const overflowItems = items.slice(max);
  const overflow = overflowItems.length;
  return /* @__PURE__ */ (0, import_jsx_runtime261.jsxs)("div", { className: `flex items-center ${className}`, children: [
    visible.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime261.jsx)(
      "div",
      {
        className: `${i > 0 ? offsetClass[size] : ""} ring-2 ring-surface rounded-full shrink-0`,
        children: /* @__PURE__ */ (0, import_jsx_runtime261.jsx)(
          avatar_default,
          {
            name: item.name,
            email: item.email,
            image: item.image,
            variant: item.image ? "image-only" /* IMAGE_ONLY */ : "initials-only" /* INITIALS_ONLY */,
            size
          }
        )
      },
      i
    )),
    overflow > 0 && /* @__PURE__ */ (0, import_jsx_runtime261.jsxs)(
      "div",
      {
        className: `relative ${offsetClass[size]} ring-2 ring-surface rounded-full shrink-0`,
        onMouseEnter: () => setTooltipVisible(true),
        onMouseLeave: () => setTooltipVisible(false),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime261.jsxs)(
            "div",
            {
              className: `${sizeClass2[size]} flex items-center justify-center rounded-full bg-surface-raised border border-border font-semibold text-muted-fg cursor-default`,
              children: [
                "+",
                overflow
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime261.jsx)(
            tooltip_default,
            {
              position: overflowTooltipPosition,
              isVisible: tooltipVisible,
              toolTipWidth: "w-auto",
              label: /* @__PURE__ */ (0, import_jsx_runtime261.jsx)("div", { className: "flex flex-col gap-0.5", children: overflowItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime261.jsx)("span", { className: "whitespace-nowrap", children: item.name }, i)) })
            }
          )
        ]
      }
    )
  ] });
};
var avatarGroup_default = AvatarGroup;

// src/components/circularProgress/index.tsx
var import_jsx_runtime262 = require("react/jsx-runtime");
var CIRCULAR_PROGRESS_SIZE = /* @__PURE__ */ ((CIRCULAR_PROGRESS_SIZE2) => {
  CIRCULAR_PROGRESS_SIZE2["SM"] = "SM";
  CIRCULAR_PROGRESS_SIZE2["MD"] = "MD";
  CIRCULAR_PROGRESS_SIZE2["LG"] = "LG";
  return CIRCULAR_PROGRESS_SIZE2;
})(CIRCULAR_PROGRESS_SIZE || {});
var CIRCULAR_PROGRESS_TYPE = /* @__PURE__ */ ((CIRCULAR_PROGRESS_TYPE2) => {
  CIRCULAR_PROGRESS_TYPE2["DEFAULT"] = "DEFAULT";
  CIRCULAR_PROGRESS_TYPE2["SUCCESS"] = "SUCCESS";
  CIRCULAR_PROGRESS_TYPE2["DANGER"] = "DANGER";
  CIRCULAR_PROGRESS_TYPE2["WARNING"] = "WARNING";
  return CIRCULAR_PROGRESS_TYPE2;
})(CIRCULAR_PROGRESS_TYPE || {});
var sizeConfig2 = {
  ["SM" /* SM */]: { px: 48, stroke: 4, text: "text-[10px]" },
  ["MD" /* MD */]: { px: 72, stroke: 6, text: "text-xs" },
  ["LG" /* LG */]: { px: 100, stroke: 8, text: "text-sm" }
};
var typeConfig = {
  ["DEFAULT" /* DEFAULT */]: { track: "stroke-border", fill: "stroke-primary-default" },
  ["SUCCESS" /* SUCCESS */]: { track: "stroke-success-bg", fill: "stroke-success" },
  ["DANGER" /* DANGER */]: { track: "stroke-danger-bg", fill: "stroke-danger" },
  ["WARNING" /* WARNING */]: { track: "stroke-warning-bg", fill: "stroke-warning" }
};
var CircularProgress = ({
  value,
  size = "MD" /* MD */,
  type = "DEFAULT" /* DEFAULT */,
  showLabel = true,
  className = ""
}) => {
  const clamped = Math.min(100, Math.max(0, value));
  const { px, stroke, text } = sizeConfig2[size];
  const { track, fill } = typeConfig[type];
  const radius = (px - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - clamped / 100 * circumference;
  const center = px / 2;
  return /* @__PURE__ */ (0, import_jsx_runtime262.jsxs)("div", { className: `relative inline-flex items-center justify-center ${className}`, style: { width: px, height: px }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime262.jsxs)("svg", { width: px, height: px, className: "-rotate-90", children: [
      /* @__PURE__ */ (0, import_jsx_runtime262.jsx)(
        "circle",
        {
          cx: center,
          cy: center,
          r: radius,
          fill: "none",
          strokeWidth: stroke,
          className: track
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime262.jsx)(
        "circle",
        {
          cx: center,
          cy: center,
          r: radius,
          fill: "none",
          strokeWidth: stroke,
          strokeDasharray: circumference,
          strokeDashoffset: offset,
          strokeLinecap: "round",
          className: `${fill} transition-all duration-500`
        }
      )
    ] }),
    showLabel && /* @__PURE__ */ (0, import_jsx_runtime262.jsxs)("span", { className: `absolute font-semibold text-foreground ${text}`, children: [
      clamped,
      "%"
    ] })
  ] });
};
var circularProgress_default = CircularProgress;

// src/components/dropdownMenu/index.tsx
var import_react20 = require("react");
var import_jsx_runtime263 = require("react/jsx-runtime");
var DROPDOWN_PLACEMENT = /* @__PURE__ */ ((DROPDOWN_PLACEMENT2) => {
  DROPDOWN_PLACEMENT2["BOTTOM_LEFT"] = "BOTTOM_LEFT";
  DROPDOWN_PLACEMENT2["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
  DROPDOWN_PLACEMENT2["TOP_LEFT"] = "TOP_LEFT";
  DROPDOWN_PLACEMENT2["TOP_RIGHT"] = "TOP_RIGHT";
  return DROPDOWN_PLACEMENT2;
})(DROPDOWN_PLACEMENT || {});
var placementClass = {
  ["BOTTOM_LEFT" /* BOTTOM_LEFT */]: "top-full left-0 mt-1",
  ["BOTTOM_RIGHT" /* BOTTOM_RIGHT */]: "top-full right-0 mt-1",
  ["TOP_LEFT" /* TOP_LEFT */]: "bottom-full left-0 mb-1",
  ["TOP_RIGHT" /* TOP_RIGHT */]: "bottom-full right-0 mb-1"
};
var DropdownMenu = ({
  trigger,
  items,
  placement = "BOTTOM_LEFT" /* BOTTOM_LEFT */,
  className = ""
}) => {
  const [open, setOpen] = (0, import_react20.useState)(false);
  const ref = (0, import_react20.useRef)(null);
  (0, import_react20.useEffect)(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime263.jsxs)("div", { className: `relative inline-flex ${className}`, ref, children: [
    /* @__PURE__ */ (0, import_jsx_runtime263.jsx)("div", { onClick: () => setOpen((v) => !v), className: "cursor-pointer", children: trigger }),
    open && /* @__PURE__ */ (0, import_jsx_runtime263.jsx)(
      "div",
      {
        className: `absolute z-50 min-w-44 bg-surface border border-border rounded-lg shadow-lg py-1 ${placementClass[placement]}`,
        children: items.map((item, i) => {
          if (item.isDivider) {
            return /* @__PURE__ */ (0, import_jsx_runtime263.jsx)("div", { className: "my-1 border-t border-border" }, i);
          }
          return /* @__PURE__ */ (0, import_jsx_runtime263.jsxs)(
            "button",
            {
              disabled: item.disabled,
              onClick: () => {
                var _a;
                if (!item.disabled) {
                  (_a = item.onClick) == null ? void 0 : _a.call(item);
                  setOpen(false);
                }
              },
              className: `w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors
                  ${item.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                  ${item.destructive ? "text-danger hover:bg-danger-bg" : "text-foreground hover:bg-surface-raised"}`,
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime263.jsx)("span", { className: "size-4 flex items-center justify-center shrink-0 [&>svg]:size-4", children: item.icon }),
                item.label
              ]
            },
            i
          );
        })
      }
    )
  ] });
};
var dropdownMenu_default = DropdownMenu;

// src/components/contextMenu/index.tsx
var import_react21 = require("react");
var import_jsx_runtime264 = require("react/jsx-runtime");
var ContextMenu = ({ children, items, className = "" }) => {
  const [open, setOpen] = (0, import_react21.useState)(false);
  const [pos, setPos] = (0, import_react21.useState)({ x: 0, y: 0 });
  const wrapRef = (0, import_react21.useRef)(null);
  const menuRef = (0, import_react21.useRef)(null);
  (0, import_react21.useEffect)(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const handleContextMenu = (e) => {
    var _a, _b, _c;
    e.preventDefault();
    const rect = (_a = wrapRef.current) == null ? void 0 : _a.getBoundingClientRect();
    setPos({ x: e.clientX - ((_b = rect == null ? void 0 : rect.left) != null ? _b : 0), y: e.clientY - ((_c = rect == null ? void 0 : rect.top) != null ? _c : 0) });
    setOpen(true);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime264.jsxs)("div", { ref: wrapRef, onContextMenu: handleContextMenu, className: `relative ${className}`, children: [
    children,
    open && /* @__PURE__ */ (0, import_jsx_runtime264.jsx)(
      "div",
      {
        ref: menuRef,
        style: { top: pos.y, left: pos.x },
        className: "absolute z-50 min-w-44 bg-surface border border-border rounded-lg shadow-lg py-1",
        children: items.map((item, i) => {
          if (item.isDivider) {
            return /* @__PURE__ */ (0, import_jsx_runtime264.jsx)("div", { className: "my-1 border-t border-border" }, i);
          }
          return /* @__PURE__ */ (0, import_jsx_runtime264.jsxs)(
            "button",
            {
              disabled: item.disabled,
              onClick: () => {
                var _a;
                if (!item.disabled) {
                  (_a = item.onClick) == null ? void 0 : _a.call(item);
                  setOpen(false);
                }
              },
              className: `w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors
                  ${item.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                  ${item.destructive ? "text-danger hover:bg-danger-bg" : "text-foreground hover:bg-surface-raised"}`,
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime264.jsx)("span", { className: "size-4 flex items-center justify-center shrink-0 [&>svg]:size-4", children: item.icon }),
                item.label
              ]
            },
            i
          );
        })
      }
    )
  ] });
};
var contextMenu_default = ContextMenu;

// src/components/multiSelect/index.tsx
var import_react22 = require("react");
var import_jsx_runtime265 = require("react/jsx-runtime");
var MULTI_SELECT_SIZE = /* @__PURE__ */ ((MULTI_SELECT_SIZE2) => {
  MULTI_SELECT_SIZE2["SM"] = "SM";
  MULTI_SELECT_SIZE2["MD"] = "MD";
  return MULTI_SELECT_SIZE2;
})(MULTI_SELECT_SIZE || {});
var sizeConfig3 = {
  ["SM" /* SM */]: { trigger: "py-1.5 px-2.5 min-h-[32px] text-xs", chip: "text-[11px] px-2 py-0.5" },
  ["MD" /* MD */]: { trigger: "py-2.5 px-3 min-h-[40px] text-sm", chip: "text-xs px-2.5 py-1" }
};
var MultiSelect = ({
  options,
  value,
  onChange,
  label,
  placeholder = "Select options\u2026",
  disabled = false,
  size = "MD" /* MD */,
  className = "",
  isError = false,
  errorMessage,
  required = false
}) => {
  const [open, setOpen] = (0, import_react22.useState)(false);
  const [search, setSearch] = (0, import_react22.useState)("");
  const [highlightedIndex, setHighlightedIndex] = (0, import_react22.useState)(-1);
  const ref = (0, import_react22.useRef)(null);
  const searchRef = (0, import_react22.useRef)(null);
  const listRef = (0, import_react22.useRef)(null);
  const s = sizeConfig3[size];
  const triggerId = label ? `gwan-multiselect-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-multiselect";
  const listboxId = `${triggerId}-listbox`;
  const errorId = `${triggerId}-error`;
  (0, import_react22.useEffect)(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  (0, import_react22.useEffect)(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightedIndex];
      item == null ? void 0 : item.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);
  const filtered = options.filter(
    (o) => o.label.toLowerCase().includes(search.toLowerCase())
  );
  const selectedOptions = options.filter((o) => value.includes(o.value));
  const toggle = (val) => {
    onChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val]);
  };
  const removeChip = (val, e) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== val));
  };
  const openDropdown = () => {
    if (disabled) return;
    setOpen(true);
    setHighlightedIndex(-1);
    setTimeout(() => {
      var _a;
      return (_a = searchRef.current) == null ? void 0 : _a.focus();
    }, 0);
  };
  const handleTriggerKeyDown = (e) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDropdown();
    }
    if (e.key === "Escape" && open) {
      e.preventDefault();
      setOpen(false);
    }
  };
  const handleSearchKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0) toggle(filtered[highlightedIndex].value);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      setSearch("");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)("div", { className: `flex flex-col ${className}`, ref, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)(
      "label",
      {
        id: `${triggerId}-label`,
        className: `text-xs font-semibold mb-1 ${isError ? "text-danger" : "text-muted-fg"}`,
        children: [
          label,
          required && " *"
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)(
      "div",
      {
        id: triggerId,
        role: "combobox",
        "aria-expanded": open,
        "aria-haspopup": "listbox",
        "aria-controls": listboxId,
        "aria-labelledby": label ? `${triggerId}-label` : void 0,
        "aria-invalid": isError || void 0,
        "aria-describedby": isError && errorMessage ? errorId : void 0,
        "aria-required": required || void 0,
        tabIndex: disabled ? -1 : 0,
        onClick: openDropdown,
        onKeyDown: handleTriggerKeyDown,
        className: `relative flex flex-wrap items-center gap-1.5 bg-surface border rounded cursor-pointer transition-colors duration-200 pr-8 ${s.trigger}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${isError ? "border-danger" : open ? "border-primary-default" : "border-border hover:border-primary-default"}`,
        children: [
          selectedOptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("span", { className: "text-muted-fg", children: placeholder }) : selectedOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)(
            "span",
            {
              className: `inline-flex items-center gap-1 bg-primary-default/10 text-primary-default rounded font-medium ${s.chip}`,
              children: [
                o.label,
                !disabled && /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(
                  "span",
                  {
                    role: "button",
                    "aria-label": `Remove ${o.label}`,
                    className: "size-3 flex items-center cursor-pointer hover:text-danger transition-colors",
                    onClick: (e) => removeChip(o.value, e),
                    children: /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(Cross, {})
                  }
                )
              ]
            },
            o.value
          )),
          /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("span", { className: "size-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-fg pointer-events-none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(ChevDown, {}) })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)(
      "div",
      {
        id: listboxId,
        role: "listbox",
        "aria-multiselectable": "true",
        "aria-label": label,
        className: "absolute top-1 left-0 right-0 z-50 bg-surface border border-border rounded shadow-lg overflow-hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)("div", { className: "flex items-center gap-2 px-3 py-2 border-b border-border", children: [
            /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("span", { className: "size-3.5 text-muted-fg shrink-0", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(Search, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(
              "input",
              {
                ref: searchRef,
                autoFocus: true,
                value: search,
                onChange: (e) => {
                  setSearch(e.target.value);
                  setHighlightedIndex(-1);
                },
                onKeyDown: handleSearchKeyDown,
                placeholder: "Search\u2026",
                "aria-label": "Search options",
                className: "flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40"
              }
            ),
            search && /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(
              "span",
              {
                className: "size-3 text-muted-fg cursor-pointer hover:text-foreground",
                onClick: () => setSearch(""),
                "aria-label": "Clear search",
                children: /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(Cross, {})
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("div", { ref: listRef, className: "max-h-52 overflow-y-auto", children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("p", { className: "px-3 py-4 text-sm text-muted-fg text-center", children: "No options found" }) : filtered.map((o, index) => {
            const selected = value.includes(o.value);
            return /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)(
              "div",
              {
                role: "option",
                "aria-selected": selected,
                onClick: () => toggle(o.value),
                className: `flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors duration-150 ${highlightedIndex === index ? "bg-surface-raised" : "hover:bg-surface-raised"}`,
                onMouseEnter: () => setHighlightedIndex(index),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: `size-4 rounded border flex items-center justify-center shrink-0 transition-colors duration-150
                          ${selected ? "bg-primary-default border-primary-default text-primary-default-fg" : "border-border bg-surface"}`,
                      children: selected && /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("span", { className: "size-3", children: /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(Check, {}) })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("span", { className: "text-sm text-foreground", children: o.label })
                ]
              },
              o.value
            );
          }) }),
          value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)("div", { className: "border-t border-border px-3 py-2 flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime265.jsxs)("span", { className: "text-xs text-muted-fg", children: [
              value.length,
              " selected"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(
              "button",
              {
                type: "button",
                onClick: () => onChange([]),
                className: "text-xs font-semibold text-danger hover:opacity-70 transition-opacity",
                children: "Clear all"
              }
            )
          ] })
        ]
      }
    ) }),
    isError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime265.jsx)("p", { id: errorId, role: "alert", className: "text-danger text-xs mt-1", children: errorMessage })
  ] });
};
var multiSelect_default = MultiSelect;

// src/components/searchInput/index.tsx
var import_react23 = require("react");
var import_jsx_runtime266 = require("react/jsx-runtime");
var SearchInput = ({
  value,
  onChange,
  onSearch,
  debounce = 300,
  placeholder = "Search\u2026",
  disabled = false,
  isLoading = false,
  label,
  size = "MD" /* MD */,
  className = ""
}) => {
  const isSM = size === "SM" /* SM */;
  const timerRef = (0, import_react23.useRef)(void 0);
  (0, import_react23.useEffect)(() => () => clearTimeout(timerRef.current), []);
  const handleChange = (0, import_react23.useCallback)(
    (e) => {
      const val = e.target.value;
      onChange(val);
      if (onSearch) {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => onSearch(val), debounce);
      }
    },
    [onChange, onSearch, debounce]
  );
  const handleClear = (0, import_react23.useCallback)(() => {
    onChange("");
    onSearch == null ? void 0 : onSearch("");
    clearTimeout(timerRef.current);
  }, [onChange, onSearch]);
  const inputId = label ? `gwan-search-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-search";
  const hasRightSlot = isLoading || !!value;
  const sizeClass3 = isSM ? "py-1.5 text-xs" : "py-2.5 text-sm";
  const plClass = isSM ? "pl-8" : "pl-9";
  const prClass = hasRightSlot ? isSM ? "pr-7" : "pr-9" : isSM ? "pr-2.5" : "pr-3";
  const iconSize = isSM ? "size-3.5" : "size-4";
  const clearSize = isSM ? "size-3" : "size-3.5";
  return /* @__PURE__ */ (0, import_jsx_runtime266.jsxs)("div", { className: `flex flex-col ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime266.jsx)("label", { htmlFor: inputId, className: "text-xs font-semibold text-muted-fg mb-1", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime266.jsxs)("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime266.jsx)("span", { className: `${iconSize} absolute left-3 text-muted-fg pointer-events-none`, children: /* @__PURE__ */ (0, import_jsx_runtime266.jsx)(Search, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime266.jsx)(
        "input",
        {
          id: inputId,
          value,
          onChange: handleChange,
          placeholder,
          disabled,
          "aria-busy": isLoading || void 0,
          className: `w-full bg-surface text-foreground border border-border rounded ${plClass} ${prClass} ${sizeClass3} outline-none placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 transition-colors duration-200 hover:border-primary-default focus:border-primary-default ${disabled ? "opacity-50 cursor-not-allowed" : ""}`
        }
      ),
      isLoading ? /* @__PURE__ */ (0, import_jsx_runtime266.jsx)("span", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime266.jsx)(spinner_default, { size: "XS" /* XS */, color: "DEFAULT" /* DEFAULT */ }) }) : value ? /* @__PURE__ */ (0, import_jsx_runtime266.jsx)(
        "span",
        {
          onClick: handleClear,
          className: `${clearSize} absolute right-3 top-1/2 -translate-y-1/2 text-muted-fg hover:text-foreground cursor-pointer transition-colors`,
          children: /* @__PURE__ */ (0, import_jsx_runtime266.jsx)(Cross, {})
        }
      ) : null
    ] })
  ] });
};
var searchInput_default = SearchInput;

// src/components/slider/index.tsx
var import_react24 = require("react");
var import_jsx_runtime267 = require("react/jsx-runtime");
var SLIDER_SIZE = /* @__PURE__ */ ((SLIDER_SIZE2) => {
  SLIDER_SIZE2["SM"] = "SM";
  SLIDER_SIZE2["MD"] = "MD";
  SLIDER_SIZE2["LG"] = "LG";
  return SLIDER_SIZE2;
})(SLIDER_SIZE || {});
var wrapperHeight = {
  ["SM" /* SM */]: "h-4",
  ["MD" /* MD */]: "h-5",
  ["LG" /* LG */]: "h-6"
};
var trackHeight = {
  ["SM" /* SM */]: "h-1",
  ["MD" /* MD */]: "h-1.5",
  ["LG" /* LG */]: "h-2"
};
var thumbClass = {
  ["SM" /* SM */]: [
    "[&::-webkit-slider-thumb]:size-3.5",
    "[&::-moz-range-thumb]:size-3.5"
  ].join(" "),
  ["MD" /* MD */]: [
    "[&::-webkit-slider-thumb]:size-4",
    "[&::-moz-range-thumb]:size-4"
  ].join(" "),
  ["LG" /* LG */]: [
    "[&::-webkit-slider-thumb]:size-5",
    "[&::-moz-range-thumb]:size-5"
  ].join(" ")
};
var baseInputClass = [
  "absolute inset-0 w-full h-full",
  "appearance-none bg-transparent cursor-pointer",
  "[&::-webkit-slider-runnable-track]:appearance-none",
  "[&::-webkit-slider-runnable-track]:bg-transparent",
  "[&::-moz-range-track]:bg-transparent",
  "[&::-webkit-slider-thumb]:appearance-none",
  "[&::-webkit-slider-thumb]:rounded-full",
  "[&::-webkit-slider-thumb]:bg-primary-default",
  "[&::-webkit-slider-thumb]:border-2",
  "[&::-webkit-slider-thumb]:border-surface",
  "[&::-webkit-slider-thumb]:shadow-sm",
  "[&::-webkit-slider-thumb]:transition-transform",
  "[&::-webkit-slider-thumb]:duration-100",
  "[&:focus::-webkit-slider-thumb]:scale-110",
  "[&::-moz-range-thumb]:appearance-none",
  "[&::-moz-range-thumb]:rounded-full",
  "[&::-moz-range-thumb]:bg-primary-default",
  "[&::-moz-range-thumb]:border-2",
  "[&::-moz-range-thumb]:border-surface",
  "[&::-moz-range-thumb]:shadow-sm",
  "disabled:cursor-not-allowed",
  "disabled:[&::-webkit-slider-thumb]:opacity-50",
  "outline-none"
].join(" ");
var Slider = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  showTooltip = false,
  disabled = false,
  size = "MD" /* MD */,
  label,
  className = ""
}) => {
  const isRange = Array.isArray(value);
  const [activeThumb, setActiveThumb] = (0, import_react24.useState)(0);
  const toPercent = (v) => (v - min) / (max - min) * 100;
  const low = isRange ? value[0] : value;
  const high = isRange ? value[1] : value;
  const fillLeft = isRange ? toPercent(low) : 0;
  const fillWidth = toPercent(high) - fillLeft;
  const handleSingle = (e) => {
    onChange(Number(e.target.value));
  };
  const handleLow = (e) => {
    const v = Math.min(Number(e.target.value), high - step);
    onChange([v, high]);
  };
  const handleHigh = (e) => {
    const v = Math.max(Number(e.target.value), low + step);
    onChange([low, v]);
  };
  const inputClass = `${baseInputClass} ${thumbClass[size]}`;
  return /* @__PURE__ */ (0, import_jsx_runtime267.jsxs)("div", { className: `flex flex-col gap-2.5 ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime267.jsx)("label", { className: "text-xs font-semibold text-muted-fg", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime267.jsxs)("div", { className: `relative flex items-center ${wrapperHeight[size]} ${disabled ? "opacity-50" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime267.jsx)("div", { className: `absolute inset-x-0 top-1/2 -translate-y-1/2 ${trackHeight[size]} bg-border rounded-full pointer-events-none` }),
      /* @__PURE__ */ (0, import_jsx_runtime267.jsx)(
        "div",
        {
          className: `absolute top-1/2 -translate-y-1/2 ${trackHeight[size]} bg-primary-default rounded-full pointer-events-none`,
          style: { left: `${fillLeft}%`, width: `${fillWidth}%` }
        }
      ),
      isRange ? /* @__PURE__ */ (0, import_jsx_runtime267.jsxs)(import_jsx_runtime267.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime267.jsx)(
          "input",
          {
            type: "range",
            min,
            max,
            step,
            value: low,
            onChange: handleLow,
            disabled,
            "aria-label": "Minimum value",
            "aria-valuemin": min,
            "aria-valuemax": max,
            "aria-valuenow": low,
            onMouseDown: () => setActiveThumb(0),
            onTouchStart: () => setActiveThumb(0),
            className: inputClass,
            style: { zIndex: activeThumb === 0 ? 20 : 10 }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime267.jsx)(
          "input",
          {
            type: "range",
            min,
            max,
            step,
            value: high,
            onChange: handleHigh,
            disabled,
            "aria-label": "Maximum value",
            "aria-valuemin": min,
            "aria-valuemax": max,
            "aria-valuenow": high,
            onMouseDown: () => setActiveThumb(1),
            onTouchStart: () => setActiveThumb(1),
            className: inputClass,
            style: { zIndex: activeThumb === 1 ? 20 : 10 }
          }
        )
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime267.jsx)(
        "input",
        {
          type: "range",
          min,
          max,
          step,
          value,
          onChange: handleSingle,
          disabled,
          "aria-valuemin": min,
          "aria-valuemax": max,
          "aria-valuenow": value,
          className: `${inputClass} z-10`
        }
      )
    ] }),
    showTooltip && /* @__PURE__ */ (0, import_jsx_runtime267.jsxs)("div", { className: "flex justify-between items-center text-xs select-none", children: [
      /* @__PURE__ */ (0, import_jsx_runtime267.jsx)("span", { className: "text-muted-fg", children: min }),
      /* @__PURE__ */ (0, import_jsx_runtime267.jsx)("span", { className: "text-foreground font-semibold", children: isRange ? `${low} \u2013 ${high}` : String(value) }),
      /* @__PURE__ */ (0, import_jsx_runtime267.jsx)("span", { className: "text-muted-fg", children: max })
    ] })
  ] });
};
var slider_default = Slider;

// src/components/otpInput/index.tsx
var import_react25 = require("react");
var import_jsx_runtime268 = require("react/jsx-runtime");
var OTP_SIZE = /* @__PURE__ */ ((OTP_SIZE2) => {
  OTP_SIZE2["SM"] = "SM";
  OTP_SIZE2["MD"] = "MD";
  OTP_SIZE2["LG"] = "LG";
  return OTP_SIZE2;
})(OTP_SIZE || {});
var sizeMap3 = {
  ["SM" /* SM */]: { cell: "w-9 h-10", text: "text-sm" },
  ["MD" /* MD */]: { cell: "w-11 h-12", text: "text-base" },
  ["LG" /* LG */]: { cell: "w-13 h-14", text: "text-lg" }
};
var OtpInput = ({
  value,
  onChange,
  length = 6,
  mask = false,
  disabled = false,
  isError = false,
  errorMessage,
  size = "MD" /* MD */,
  label,
  className = "",
  onComplete
}) => {
  const inputRefs = (0, import_react25.useRef)([]);
  const digits = Array.from({ length }, (_, i) => {
    var _a;
    return (_a = value[i]) != null ? _a : "";
  });
  const { cell, text } = sizeMap3[size];
  const focusAt = (index) => {
    const el = inputRefs.current[index];
    if (el) {
      el.focus();
      el.select();
    }
  };
  const update = (index, char) => {
    const next = digits.map((d, i) => i === index ? char : d);
    const joined = next.join("");
    onChange(joined);
    if (char && joined.length === length) onComplete == null ? void 0 : onComplete(joined);
    if (char && index < length - 1) focusAt(index + 1);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (digits[index]) {
        update(index, "");
      } else if (index > 0) {
        update(index - 1, "");
        focusAt(index - 1);
      }
      e.preventDefault();
    } else if (e.key === "ArrowLeft" && index > 0) {
      focusAt(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      focusAt(index + 1);
    }
  };
  const handlePaste = (e, index) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length - index);
    if (!pasted) return;
    const next = digits.map((d, i) => {
      const pi = i - index;
      return pi >= 0 && pi < pasted.length ? pasted[pi] : d;
    });
    const joined = next.join("");
    onChange(joined);
    const lastFilled = Math.min(index + pasted.length, length - 1);
    focusAt(lastFilled);
    if (joined.replace(/\s/g, "").length === length) onComplete == null ? void 0 : onComplete(joined);
  };
  const borderClass = isError ? "border-danger focus:border-danger" : "border-border hover:border-primary-default focus:border-primary-default";
  return /* @__PURE__ */ (0, import_jsx_runtime268.jsxs)("div", { className: `flex flex-col gap-1 ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime268.jsx)("label", { className: `text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"}`, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime268.jsx)("div", { className: "flex gap-2", children: digits.map((digit, i) => /* @__PURE__ */ (0, import_jsx_runtime268.jsx)(
      "input",
      {
        ref: (el) => {
          inputRefs.current[i] = el;
        },
        type: mask ? "password" : "text",
        inputMode: "numeric",
        maxLength: 1,
        value: digit,
        disabled,
        "aria-label": `Digit ${i + 1} of ${length}`,
        className: `${cell} ${text} text-center font-semibold bg-surface text-foreground border rounded outline-none transition-colors duration-200 ${borderClass} ${disabled ? "cursor-not-allowed opacity-50" : ""}`,
        onChange: (e) => {
          const char = e.target.value.replace(/\D/g, "").slice(-1);
          update(i, char);
        },
        onKeyDown: (e) => handleKeyDown(e, i),
        onPaste: (e) => handlePaste(e, i),
        onFocus: (e) => e.target.select()
      },
      i
    )) }),
    isError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime268.jsx)("p", { role: "alert", className: "text-danger text-xs mt-0.5", children: errorMessage })
  ] });
};
var otpInput_default = OtpInput;

// src/components/timePicker/index.tsx
var import_react26 = require("react");
var import_jsx_runtime269 = require("react/jsx-runtime");
var TIME_FORMAT = /* @__PURE__ */ ((TIME_FORMAT2) => {
  TIME_FORMAT2["H12"] = "12h";
  TIME_FORMAT2["H24"] = "24h";
  return TIME_FORMAT2;
})(TIME_FORMAT || {});
var pad = (n) => String(n).padStart(2, "0");
var TimePicker = ({
  value,
  onChange,
  label,
  placeholder = "Select time",
  format = "12h" /* H12 */,
  withSeconds = false,
  disabled = false,
  isError = false,
  errorMessage,
  size = "MD" /* MD */,
  className = ""
}) => {
  const is12h = format === "12h" /* H12 */;
  const isSM = size === "SM" /* SM */;
  const parseValue = (v) => {
    var _a, _b, _c;
    if (!v) return { h: 12, m: 0, s: 0, period: "AM" };
    const parts = v.split(":");
    let h = parseInt((_a = parts[0]) != null ? _a : "12", 10);
    const m = parseInt((_b = parts[1]) != null ? _b : "0", 10);
    const s = parseInt((_c = parts[2]) != null ? _c : "0", 10);
    let period2 = "AM";
    if (is12h) {
      period2 = h >= 12 ? "PM" : "AM";
      if (h === 0) h = 12;
      else if (h > 12) h -= 12;
    }
    return { h, m, s, period: period2 };
  };
  const { h: initH, m: initM, s: initS, period: initP } = parseValue(value);
  const [hours, setHours] = (0, import_react26.useState)(initH);
  const [minutes, setMinutes] = (0, import_react26.useState)(initM);
  const [seconds, setSeconds] = (0, import_react26.useState)(initS);
  const [period, setPeriod] = (0, import_react26.useState)(initP);
  const [open, setOpen] = (0, import_react26.useState)(false);
  const ref = (0, import_react26.useRef)(null);
  const hourOptions = is12h ? Array.from({ length: 12 }, (_, i) => i + 1) : Array.from({ length: 24 }, (_, i) => i);
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i);
  const secondOptions = Array.from({ length: 60 }, (_, i) => i);
  const emitChange = (h, m, s, p) => {
    let h24 = h;
    if (is12h) {
      if (p === "AM" && h === 12) h24 = 0;
      else if (p === "PM" && h !== 12) h24 = h + 12;
    }
    const time = withSeconds ? `${pad(h24)}:${pad(m)}:${pad(s)}` : `${pad(h24)}:${pad(m)}`;
    onChange(time);
  };
  const handleHour = (h) => {
    setHours(h);
    emitChange(h, minutes, seconds, period);
  };
  const handleMinute = (m) => {
    setMinutes(m);
    emitChange(hours, m, seconds, period);
  };
  const handleSecond = (s) => {
    setSeconds(s);
    emitChange(hours, minutes, s, period);
  };
  const handlePeriod = (p) => {
    setPeriod(p);
    emitChange(hours, minutes, seconds, p);
  };
  const displayHour = is12h ? hours : hours;
  const displayValue = value ? is12h ? `${pad(displayHour)}:${pad(minutes)}${withSeconds ? `:${pad(seconds)}` : ""} ${period}` : `${pad(hours)}:${pad(minutes)}${withSeconds ? `:${pad(seconds)}` : ""}` : "";
  (0, import_react26.useEffect)(() => {
    const { h, m, s, period: p } = parseValue(value);
    setHours(h);
    setMinutes(m);
    setSeconds(s);
    setPeriod(p);
  }, [value]);
  (0, import_react26.useEffect)(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);
  const scrollToActive = (colRef, activeIdx) => {
    if (colRef.current) {
      const item = colRef.current.querySelectorAll("button")[activeIdx];
      item == null ? void 0 : item.scrollIntoView({ block: "center" });
    }
  };
  const hourColRef = (0, import_react26.useRef)(null);
  const minColRef = (0, import_react26.useRef)(null);
  const secColRef = (0, import_react26.useRef)(null);
  (0, import_react26.useEffect)(() => {
    if (open) {
      const hIdx = is12h ? hourOptions.indexOf(hours) : hours;
      scrollToActive(hourColRef, hIdx >= 0 ? hIdx : 0);
      scrollToActive(minColRef, minutes);
      if (withSeconds) scrollToActive(secColRef, seconds);
    }
  }, [open]);
  const triggerHeight = isSM ? "py-1.5 text-xs" : "py-2.5 text-sm";
  const borderClass = isError ? "border-danger" : "border-border hover:border-primary-default focus:border-primary-default";
  const Column = ({
    options,
    active,
    onSelect,
    colRef,
    format: fmt
  }) => /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(
    "div",
    {
      ref: colRef,
      className: "flex flex-col overflow-y-auto h-48 scrollbar-hide snap-y snap-mandatory",
      style: { scrollbarWidth: "none" },
      children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onSelect(opt),
          className: `snap-center px-3 py-1.5 text-sm font-medium rounded transition-colors duration-150 shrink-0 ${opt === active ? "bg-primary-default text-primary-default-fg" : "text-foreground hover:bg-surface-raised"}`,
          children: fmt ? fmt(opt) : pad(opt)
        },
        opt
      ))
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime269.jsxs)("div", { ref, className: `flex flex-col gap-1 relative ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime269.jsx)("label", { className: `text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"}`, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(
      "button",
      {
        type: "button",
        disabled,
        onClick: () => !disabled && setOpen((v) => !v),
        className: `w-full text-left bg-surface border rounded ${borderClass} ${triggerHeight} px-3 outline-none transition-colors duration-200 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${open ? isError ? "border-danger" : "border-primary-default" : ""}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime269.jsx)("span", { className: displayValue ? "text-foreground" : "text-muted-fg/60", children: displayValue || placeholder })
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime269.jsxs)("div", { className: "absolute top-full mt-1 z-50 bg-surface border border-border rounded-lg shadow-lg p-2 flex gap-1 left-0 min-w-[160px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(
        Column,
        {
          options: hourOptions,
          active: hours,
          onSelect: handleHour,
          colRef: hourColRef,
          format: (v) => pad(v)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime269.jsx)("div", { className: "flex items-center justify-center text-muted-fg font-bold text-sm px-0.5", children: ":" }),
      /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(
        Column,
        {
          options: minuteOptions,
          active: minutes,
          onSelect: handleMinute,
          colRef: minColRef
        }
      ),
      withSeconds && /* @__PURE__ */ (0, import_jsx_runtime269.jsxs)(import_jsx_runtime269.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime269.jsx)("div", { className: "flex items-center justify-center text-muted-fg font-bold text-sm px-0.5", children: ":" }),
        /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(
          Column,
          {
            options: secondOptions,
            active: seconds,
            onSelect: handleSecond,
            colRef: secColRef
          }
        )
      ] }),
      is12h && /* @__PURE__ */ (0, import_jsx_runtime269.jsx)("div", { className: "flex flex-col gap-1 justify-center pl-1", children: ["AM", "PM"].map((p) => /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(
        "button",
        {
          type: "button",
          onClick: () => handlePeriod(p),
          className: `px-2 py-1.5 text-xs font-semibold rounded transition-colors duration-150 ${period === p ? "bg-primary-default text-primary-default-fg" : "text-foreground hover:bg-surface-raised"}`,
          children: p
        },
        p
      )) })
    ] }),
    isError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime269.jsx)("p", { role: "alert", className: "text-danger text-xs mt-0.5", children: errorMessage })
  ] });
};
var timePicker_default = TimePicker;

// src/components/dateRangePicker/index.tsx
var import_react27 = require("react");
var import_jsx_runtime270 = require("react/jsx-runtime");
var DAYS2 = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTHS2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var MONTHS_SHORT2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var isSameDay2 = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
var isOutOfRange2 = (date, min, max) => {
  if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
  if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
  return false;
};
var formatDate = (date, format) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const mmm = MONTHS_SHORT2[date.getMonth()];
  return format.replace("YYYY", year).replace("MMM", mmm).replace("MM", month).replace("DD", day).replace(/\s*HH:mm|\s*hh:mm A/, "");
};
var CalendarMonth = ({ viewDate, startDate, endDate, hoverDate, minDate, maxDate, onPrev, onNext, onSelect, onHover, hidePrev, hideNext }) => {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = /* @__PURE__ */ new Date();
  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1))
  ];
  const rangeEnd = hoverDate && startDate && !endDate ? hoverDate : endDate;
  return /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)("div", { className: "flex flex-col gap-2 min-w-[220px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(
        "button",
        {
          type: "button",
          onClick: onPrev,
          className: `p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors ${hidePrev ? "invisible" : ""}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("path", { d: "M10 4L6 8l4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)("span", { className: "text-sm font-semibold text-foreground", children: [
        MONTHS2[month],
        " ",
        year
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(
        "button",
        {
          type: "button",
          onClick: onNext,
          className: `p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors ${hideNext ? "invisible" : ""}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("path", { d: "M6 4l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("div", { className: "grid grid-cols-7", children: DAYS2.map((d) => /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("div", { className: "text-center text-[10px] font-bold text-muted-fg py-1", children: d }, d)) }),
    /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("div", { className: "grid grid-cols-7 gap-y-0.5", children: cells.map((date, i) => {
      if (!date) return /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("div", {}, `e-${i}`);
      const isDis = isOutOfRange2(date, minDate, maxDate);
      const isStart = startDate ? isSameDay2(date, startDate) : false;
      const isEnd = rangeEnd ? isSameDay2(date, rangeEnd) : false;
      const isToday = isSameDay2(date, today);
      const inRange = startDate && rangeEnd && date > startDate && date < rangeEnd;
      return /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(
        "button",
        {
          type: "button",
          disabled: isDis,
          onClick: () => onSelect(date),
          onMouseEnter: () => onHover(date),
          onMouseLeave: () => onHover(null),
          className: `text-xs w-8 h-8 mx-auto flex items-center justify-center rounded-full transition-colors duration-100 ${isDis ? "text-muted-fg/30 cursor-not-allowed" : isStart || isEnd ? "bg-primary-default text-primary-default-fg font-semibold" : inRange ? "bg-primary-default/15 text-foreground rounded-none" : isToday ? "border border-primary-default text-primary-default font-semibold hover:bg-primary-default/10" : "text-foreground hover:bg-surface-raised cursor-pointer"}`,
          children: date.getDate()
        },
        i
      );
    }) })
  ] });
};
var DateRangePicker = ({
  startDate,
  endDate,
  onChange,
  label,
  startPlaceholder = "Start date",
  endPlaceholder = "End date",
  minDate,
  maxDate,
  disabled = false,
  size = "MD" /* MD */,
  format = "DD MMM YYYY" /* DD_MMM_YYYY */,
  isError = false,
  errorMessage,
  className = ""
}) => {
  const isSM = size === "SM" /* SM */;
  const sizeClass3 = isSM ? "px-2.5 py-1.5 text-xs" : "px-3 py-2.5 text-sm";
  const iconSize = isSM ? "w-3.5 h-3.5" : "w-4 h-4";
  const [open, setOpen] = (0, import_react27.useState)(false);
  const [leftView, setLeftView] = (0, import_react27.useState)(() => startDate != null ? startDate : /* @__PURE__ */ new Date());
  const [hover, setHover] = (0, import_react27.useState)(null);
  const ref = (0, import_react27.useRef)(null);
  const rightView = new Date(leftView.getFullYear(), leftView.getMonth() + 1, 1);
  (0, import_react27.useEffect)(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const handleSelect = (date) => {
    if (!startDate || startDate && endDate) {
      onChange({ startDate: date, endDate: null });
    } else {
      if (date < startDate) {
        onChange({ startDate: date, endDate: startDate });
      } else {
        onChange({ startDate, endDate: date });
        setOpen(false);
      }
    }
  };
  const prevMonth = () => setLeftView(new Date(leftView.getFullYear(), leftView.getMonth() - 1, 1));
  const nextMonth = () => setLeftView(new Date(leftView.getFullYear(), leftView.getMonth() + 1, 1));
  const borderClass = isError ? "border-danger hover:border-danger focus:border-danger" : "border-border hover:border-primary-default focus:border-primary-default";
  const displayValue = () => {
    if (startDate && endDate) return `${formatDate(startDate, format)} \u2192 ${formatDate(endDate, format)}`;
    if (startDate) return `${formatDate(startDate, format)} \u2192 ${endPlaceholder}`;
    return `${startPlaceholder} \u2192 ${endPlaceholder}`;
  };
  const hasValue = !!(startDate || endDate);
  return /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)("div", { ref, className: `relative inline-flex flex-col gap-1 ${className}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("label", { className: `text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"}`, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)(
      "button",
      {
        type: "button",
        disabled,
        onClick: () => !disabled && setOpen((v) => !v),
        className: `flex items-center justify-between gap-2 ${sizeClass3} border rounded transition-colors duration-200 ${disabled ? "border-border bg-surface-raised text-muted-fg cursor-not-allowed opacity-60" : `bg-surface text-foreground cursor-pointer ${borderClass}`} ${open && !isError ? "border-primary-default" : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("span", { className: hasValue ? "text-foreground" : "text-muted-fg/60", children: displayValue() }),
          /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", className: `${iconSize} text-muted-fg shrink-0`, xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("rect", { x: "1", y: "3", width: "14", height: "12", rx: "2", stroke: "currentColor", strokeWidth: "1.3" }),
            /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("path", { d: "M5 1v2M11 1v2M1 7h14", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
          ] })
        ]
      }
    ),
    isError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime270.jsx)("p", { role: "alert", className: "text-danger text-xs mt-1", children: errorMessage }),
    open && /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)("div", { className: "absolute top-full mt-1.5 left-0 z-50 bg-surface border border-border rounded-lg shadow-lg p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)("div", { className: "flex gap-6 flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(
          CalendarMonth,
          {
            viewDate: leftView,
            startDate,
            endDate,
            hoverDate: hover,
            minDate,
            maxDate,
            onPrev: prevMonth,
            onNext: nextMonth,
            onSelect: handleSelect,
            onHover: setHover,
            hideNext: true
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(
          CalendarMonth,
          {
            viewDate: rightView,
            startDate,
            endDate,
            hoverDate: hover,
            minDate,
            maxDate,
            onPrev: prevMonth,
            onNext: nextMonth,
            onSelect: handleSelect,
            onHover: setHover,
            hidePrev: true
          }
        )
      ] }),
      hasValue && /* @__PURE__ */ (0, import_jsx_runtime270.jsxs)("div", { className: "mt-3 pt-3 border-t border-border flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(
          "button",
          {
            type: "button",
            onClick: () => {
              onChange({ startDate: null, endDate: null });
            },
            className: "text-xs text-muted-fg hover:text-foreground py-1 px-2 hover:bg-surface-raised rounded transition-colors",
            children: "Clear"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setOpen(false),
            className: "text-xs font-semibold text-primary-default py-1 px-3 bg-primary-default/10 hover:bg-primary-default/20 rounded transition-colors",
            children: "Done"
          }
        )
      ] })
    ] })
  ] });
};
var dateRangePicker_default = DateRangePicker;

// src/components/list/index.tsx
var import_jsx_runtime271 = require("react/jsx-runtime");
var LIST_VARIANT = /* @__PURE__ */ ((LIST_VARIANT2) => {
  LIST_VARIANT2["DEFAULT"] = "default";
  LIST_VARIANT2["BORDERED"] = "bordered";
  LIST_VARIANT2["FLUSH"] = "flush";
  LIST_VARIANT2["CARD"] = "card";
  return LIST_VARIANT2;
})(LIST_VARIANT || {});
var LIST_SIZE = /* @__PURE__ */ ((LIST_SIZE2) => {
  LIST_SIZE2["SM"] = "SM";
  LIST_SIZE2["MD"] = "MD";
  LIST_SIZE2["LG"] = "LG";
  return LIST_SIZE2;
})(LIST_SIZE || {});
var paddingMap = {
  ["SM" /* SM */]: "px-3 py-2",
  ["MD" /* MD */]: "px-4 py-3",
  ["LG" /* LG */]: "px-5 py-4"
};
var titleSizeMap = {
  ["SM" /* SM */]: "text-xs",
  ["MD" /* MD */]: "text-sm",
  ["LG" /* LG */]: "text-base"
};
var descSizeMap = {
  ["SM" /* SM */]: "text-[11px]",
  ["MD" /* MD */]: "text-xs",
  ["LG" /* LG */]: "text-sm"
};
var iconSizeMap = {
  ["SM" /* SM */]: "w-4 h-4",
  ["MD" /* MD */]: "w-5 h-5",
  ["LG" /* LG */]: "w-6 h-6"
};
var List = ({
  items,
  variant = "default" /* DEFAULT */,
  size = "MD" /* MD */,
  className = ""
}) => {
  const padding = paddingMap[size];
  const titleSize = titleSizeMap[size];
  const descSize = descSizeMap[size];
  const iconSize = iconSizeMap[size];
  const isCard = variant === "card" /* CARD */;
  const isBordered = variant === "bordered" /* BORDERED */;
  const isFlush = variant === "flush" /* FLUSH */;
  const wrapperClass = isCard ? `rounded-lg border border-border overflow-hidden bg-surface ${className}` : isBordered ? `rounded-lg border border-border overflow-hidden ${className}` : `${className}`;
  return /* @__PURE__ */ (0, import_jsx_runtime271.jsx)("ul", { className: wrapperClass, role: "list", children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    const isClickable = !!item.onClick && !item.disabled;
    const dividerClass = !isLast ? isFlush ? "border-b border-border" : isCard || isBordered ? "border-b border-border" : "border-b border-border" : "";
    const itemClass = [
      "flex items-center gap-3",
      padding,
      titleSize,
      dividerClass,
      isClickable ? "cursor-pointer hover:bg-surface-raised transition-colors duration-150" : isFlush || variant === "default" /* DEFAULT */ ? "" : "",
      item.disabled ? "opacity-50 cursor-not-allowed" : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime271.jsxs)(
      "li",
      {
        className: itemClass,
        onClick: isClickable ? item.onClick : void 0,
        role: isClickable ? "button" : void 0,
        tabIndex: isClickable ? 0 : void 0,
        onKeyDown: isClickable ? (e) => {
          var _a;
          if (e.key === "Enter" || e.key === " ") (_a = item.onClick) == null ? void 0 : _a.call(item);
        } : void 0,
        children: [
          item.icon && /* @__PURE__ */ (0, import_jsx_runtime271.jsx)("span", { className: `${iconSize} text-muted-fg shrink-0 flex items-center justify-center`, children: item.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime271.jsxs)("span", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime271.jsx)("span", { className: `block font-medium text-foreground truncate`, children: item.title }),
            item.description && /* @__PURE__ */ (0, import_jsx_runtime271.jsx)("span", { className: `block ${descSize} text-muted-fg truncate`, children: item.description })
          ] }),
          item.rightSlot && /* @__PURE__ */ (0, import_jsx_runtime271.jsx)("span", { className: "shrink-0 text-muted-fg", children: item.rightSlot })
        ]
      },
      item.key
    );
  }) });
};
var list_default = List;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACCORDION_VARIANT,
  ALERT_TYPE,
  ALERT_VARIANT,
  AVATAR_LABEL_POSITION,
  AVATAR_SIZE,
  AVATAR_VARIANT,
  Accordion,
  AddCircularFillSVG,
  AddCircularSVG,
  AddSVG,
  AddSquaredSVG,
  Alert,
  AlienFaceSVG,
  AlienUserSVG,
  AlignCenterSVG,
  AlignJustifySVG,
  AlignLeftSVG,
  AlignRightSVG,
  ArrowLeftSVG,
  ArrowRightSVG,
  AstronautSVG,
  AtSVG,
  Avatar,
  AvatarGroup,
  BADGE_SIZE,
  BADGE_TYPE,
  BADGE_VARIANT,
  BREADCRUMB_SEPARATOR,
  BUTTON_EDGE_STYLE,
  BUTTON_SIZE,
  BUTTON_VARIANTS,
  Badge,
  BagSVG,
  BalanceSVG,
  BalloonsSVG,
  BanSVG,
  Banner,
  BarcodeSVG,
  BasketSVG,
  BatSVG,
  BatterySVG,
  BeeSVG,
  BellRingingSVG,
  BellSVG,
  BellSilentSVG,
  BinocularSVG,
  BirdSVG,
  BoldSVG,
  BookmarkSVG,
  BoxFilledSVG,
  BoxSVG,
  BrainSVG,
  Breadcrumb,
  BrightHigh,
  BrightLowSVG,
  BucketSVG,
  Button,
  CALLOUT_TYPE,
  CARD_PADDING,
  CARD_VARIANT,
  CHECKBOX_EDGE_STYLE,
  CHECKBOX_SIZE,
  CHIP_EDGE_STYLE,
  CHIP_VARIANT,
  CIRCULAR_PROGRESS_SIZE,
  CIRCULAR_PROGRESS_TYPE,
  CabinSVG,
  CakeSVG,
  CalendarSVG,
  Callout,
  Card,
  Carousel,
  CartSVG,
  ChartSVG,
  CheckSVG,
  Checkbox,
  ChevDownSVG,
  ChevLeftSVG,
  ChevRightSVG,
  ChevUpSVG,
  Chip,
  CircleSVG,
  CircularProgress,
  CitySVG,
  ClockSVG,
  CloudRainSVG,
  CloudSVG,
  CocktailSVG,
  CodeSVG,
  CoinSVG,
  CoinsSVG,
  ColorPicker,
  ColorsSVG,
  CommandPalette,
  CompassSVG,
  ConnectionSVG,
  ContextMenu,
  ControllerSVG,
  CopySVG,
  CouponSVG,
  CoversSVG,
  CowSVG,
  CrabSVG,
  CreditCardSVG,
  CropSVG,
  CrossSVG,
  CsvSVG,
  DATE_PICKER_FORMAT,
  DIVIDER_ORIENTATION,
  DIVIDER_VARIANT,
  DRAWER_PLACEMENT,
  DRAWER_SIZE,
  DROPDOWN_PLACEMENT,
  DashboardSVG,
  DatabaseSVG,
  DatePicker,
  DateRangePicker,
  DeskBellSVG,
  DiceSVG,
  Divider,
  DolphinSVG,
  DoorOpnSVG,
  DotFillSVG,
  DownFolderSVG,
  DownloadSVG,
  DragHandleSVG,
  Drawer,
  DropdownMenu,
  EarthSVG,
  EclipseHorizontalSVG,
  EclipseSVG,
  EditSVG,
  ElephantSVG,
  Ellipsis,
  EyeOffSVG,
  EyeSVG,
  FORM_ELEMENT_EDGE_STYLE,
  FORM_ELEMENT_SIZE,
  FenceSVG,
  FileUploader,
  FilterDropdown,
  FilterSVG,
  FiltersSVG,
  FingerClickSVG,
  FlagSVG,
  FocusSVG,
  FoxSVG,
  GhostSVG,
  GiftSVG,
  GithubSVG,
  GlobeSVG,
  GridSVG,
  HandSVG,
  HashSVG,
  HeartSVG,
  HelicopterSVG,
  HelpSVG,
  HospitalSVG,
  ImageSVG,
  InfoSVG,
  Input,
  ItalicSVG,
  JoystickSVG,
  KeySVG,
  LIST_SIZE,
  LIST_VARIANT,
  LayersSVG,
  LayoutSVG,
  LightSVG,
  LineCircleSVG,
  LineSVG,
  LineSquareSVG,
  LinkSVG,
  LinkedinSVG,
  LionSVG,
  List,
  LobsterSVG,
  LockSVG,
  MENU_BAR_ITEMS_ALIGN,
  MENU_BAR_VARIANT,
  MODAL_SIZE,
  MULTI_SELECT_SIZE,
  MailOpenSVG,
  MailPlusSVG,
  MailSVG,
  MailsSVG,
  MapPinSVG,
  MapSVG,
  MasksSVG,
  MenuBar,
  MenuSVG,
  MessageSVG,
  MicMuteSVG,
  MicSVG,
  MinusSVG,
  MobileSVG,
  Modal,
  MoneyBagSVG,
  MoneySVG,
  MonkeySVG,
  MoonSVG,
  MultiSelect,
  NavBar,
  NavigationSVG,
  NewTabSVG,
  OTP_SIZE,
  OfficePhoneSVG,
  OrderInfoSVG,
  OrdersSVG,
  OtpInput,
  POPOVER_PLACEMENT,
  POPOVER_TRIGGER,
  PROGRESS_BAR_SIZE,
  PROGRESS_BAR_TYPE,
  PackageSVG,
  Pagination,
  PaperclipSVG,
  PdfSVG,
  PercentageSVG,
  PhoneCutSVG,
  PhoneInSVG,
  PhoneOutSVG,
  PhoneSVG,
  PinSVG,
  PlaneSVG,
  Popover,
  PrinterSVG,
  ProductsSVG,
  ProgressBar,
  QrCodeSVG,
  QuoteSVG,
  RadioButton,
  RadioSVG,
  ReceiptSVG,
  RedoSVG,
  RefreshSVG,
  RobotSVG,
  RocketSVG,
  RotateCcwSVG,
  RotateCwSVG,
  RouteSVG,
  SKELETON_VARIANT,
  SLIDER_SIZE,
  SNACK_BAR_TYPE,
  SPINNER_COLOR,
  SPINNER_SIZE,
  STATE_TYPE,
  STAT_TREND,
  STEPPER_ORIENTATION,
  STEPPER_VARIANT,
  STEP_DIRECTION,
  STEP_STATUS,
  SWITCH_SIZE,
  SaleSVG,
  ScanSVG,
  SearchInput,
  SearchSVG,
  SelectDropdown,
  SendSVG,
  SettingsSVG,
  SheepSVG,
  ShieldSVG,
  ShippingSVG,
  ShuttleSVG,
  SignInSVG,
  SignOutSVG,
  SignalSVG,
  SirenSVG,
  Skeleton,
  Slider,
  Snackbar,
  SnakeSVG,
  SnowflakeSVG,
  SortSVG,
  Spinner,
  SpinnerIconSVG,
  SquareFillSVG,
  StarRoundSVG,
  StarSVG,
  StarsSVG,
  StatCard,
  States,
  Stepper,
  StepsSVG,
  StoreSVG,
  SuitcaseSVG,
  SunSVG,
  Switch,
  TABS_VARIANT,
  TAG_EDGE_STYLE,
  TAG_TYPE,
  TAG_VARIANT,
  TIME_FORMAT,
  TOOLTIP_POSITION,
  Table,
  Tabs,
  Tag,
  TagsSVG,
  TargetSVG,
  TelephoneSVG,
  TemplatesSVG,
  TerminalSVG,
  TextArea,
  TextSVG,
  ThoughtSVG,
  ThumbsUpSVG,
  TimeLine,
  TimePicker,
  ToDoSVG,
  Tooltip,
  TrashSVG,
  TruckSVG,
  TurtleSVG,
  TwitterXSVG,
  UfoSVG,
  UnderlineSVG,
  UndoSVG,
  UnlockSVG,
  UpFolderSVG,
  UploadSVG,
  UserSVG,
  UsersSVG,
  VanSVG,
  VideoCamSVG,
  WalletSVG,
  WarningSVG,
  WhaleSVG,
  WifiSVG,
  ZoomInSVG,
  ZoomOutSVG
});
//# sourceMappingURL=index.js.map