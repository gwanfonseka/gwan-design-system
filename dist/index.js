"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AVATAR_VARIANT: () => avatar_default,
  Avatar: () => avatar_default,
  BUTTON_VARIANTS: () => BUTTON_VARIANTS,
  Banner: () => banner_default,
  Button: () => button_default,
  Carousel: () => carousel_default,
  Checkbox: () => checkbox_default,
  Chip: () => chip_default,
  Ellipsis: () => ellipsis_default,
  FileUploader: () => fileUploader_default,
  FilterDropdown: () => filterDropdown_default,
  Icons: () => icons_exports,
  Input: () => input_default,
  Modal: () => modal_default,
  NavBar: () => navBar_default,
  Pagination: () => pagination_default,
  RadioButton: () => radioButton_default,
  SelectDropdown: () => selectDropdown_default,
  Snackbar: () => snackBar_default,
  States: () => state_default,
  Table: () => table_default,
  Tag: () => tag_default,
  TimeLine: () => timeLine_default,
  Tooltip: () => tooltip_default
});
module.exports = __toCommonJS(index_exports);

// src/components/avatar/index.tsx
var import_image = __toESM(require("next/image"));
var import_react = require("react");

// src/components/tooltip/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Tooltip = ({
  position,
  label,
  isVisible = false,
  toolTipWidth = "w-60",
  toolTipClass = ""
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
      className: `bg-neutrola-800 text-white text-sm py-1 px-2 rounded-lg absolute z-50 
        ${isVisible ? "block" : "hidden"} ${getTooltipPosition(
        position
      )} ${toolTipWidth} ${toolTipClass}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: `absolute w-2 h-2 bg-neutrola-800 rotate-45 ${tipPosition(
              position
            )}`
          }
        )
      ]
    }
  );
};
var tooltip_default = Tooltip;

// src/components/avatar/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 60 + Math.random() * 20;
  const lightness = 75 + Math.random() * 10;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
var Avatar = ({ name, email, image, variant }) => {
  const [bgColor, setBgColor] = (0, import_react.useState)("transparent");
  const [isTooltipInitialVisible, setIsTooltipInitialVisible] = (0, import_react.useState)(false);
  const [isTooltipImageVisible, setIsTooltipImageVisible] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setBgColor(generatePastelColor());
  }, []);
  const generateInitials = (name2) => {
    const nameArray = name2.split(" ");
    return nameArray.length > 1 ? `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}` : nameArray[0].charAt(0);
  };
  const renderTooltip = (name2, email2, isVisible) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      tooltip_default,
      {
        position: "right" /* RIGHT */,
        label: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col", children: [
          name2,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-neutrola-300 text-xs", children: email2 })
        ] }),
        isVisible,
        toolTipWidth: "w-36"
      }
    );
  };
  const renderAvatarImage = () => {
    if (image) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          className: "relative",
          onMouseEnter: () => setIsTooltipImageVisible(true),
          onMouseLeave: () => setIsTooltipImageVisible(false),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_image.default,
              {
                className: "rounded-full border border-neutrola-400",
                src: image,
                alt: "profile",
                width: 60,
                height: 60
              }
            ),
            variant === "image-only" /* IMAGE_ONLY */ && renderTooltip(name, email, isTooltipImageVisible)
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: "size-[60px] flex items-center justify-center rounded-full font-semibold cursor-default relative",
        style: { backgroundColor: bgColor },
        onMouseEnter: () => setIsTooltipInitialVisible(true),
        onMouseLeave: () => setIsTooltipInitialVisible(false),
        children: [
          generateInitials(name),
          variant === "initials-only" /* INITIALS_ONLY */ && renderTooltip(name, email, isTooltipInitialVisible)
        ]
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [
    renderAvatarImage(),
    (variant === "image_with_full" /* IMAGE_WITH_FULL */ || variant === "initials_with_full" /* INITIALS_WITH_FULL */) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-base font-semibold", children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-sm text-neutrola-700", children: email })
    ] })
  ] });
};
var avatar_default = Avatar;

// src/components/banner/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Banner = ({
  title = "",
  subTitle = "",
  contentPlacement = "left",
  backgroundImage = "",
  backgroundColor = "",
  titleClassName = "",
  subTitleClassName = ""
}) => {
  const handleContentPlacement = () => {
    if (contentPlacement === "left") {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: titleClassName, children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: subTitleClassName, children: subTitle })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {})
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: titleClassName, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: subTitleClassName, children: subTitle })
      ] })
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      className: `w-full h-[484px] grid grid-cols-2 items-center px-16 ${backgroundColor} bg-no-repeat bg-cover bg-center`,
      style: backgroundImage !== "" ? { backgroundImage: `url(${backgroundImage})` } : {},
      children: handleContentPlacement()
    }
  );
};
var banner_default = Banner;

// src/components/button/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var BUTTON_VARIANTS = /* @__PURE__ */ ((BUTTON_VARIANTS2) => {
  BUTTON_VARIANTS2["PRIMARY"] = "primary";
  BUTTON_VARIANTS2["SECONDARY"] = "secondary";
  BUTTON_VARIANTS2["TERTIARY"] = "tertiary";
  return BUTTON_VARIANTS2;
})(BUTTON_VARIANTS || {});
var Button = ({
  variant = "primary" /* PRIMARY */,
  label,
  onClick,
  icon,
  type = "button",
  disabled = false
}) => {
  const getButtonVariant = (variant2) => {
    switch (variant2) {
      case "primary" /* PRIMARY */:
        return disabled ? "bg-neutrola-300 text-neutrola-800 cursor-not-allowed" : "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700";
      case "secondary" /* SECONDARY */:
        return disabled ? "bg-neutrola-100 text-neutrola-800 cursor-not-allowed" : "bg-neutrola-50 text-primary-700 hover:bg-primary-50 active:bg-primary-100";
      case "tertiary" /* TERTIARY */:
        return disabled ? "text-neutrola-300 border border-neutrola-300 cursor-not-allowed" : "bg-transparent text-primary-500 border border-primary-500 hover:bg-neutrola-50 active:bg-neutrola-100";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    {
      className: `${getButtonVariant(variant)} px-4 ${label ? "py-2" : "py-4"} rounded-lg`,
      type,
      onClick,
      disabled,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "size-5", children: icon }),
        label && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: label })
      ] })
    }
  );
};
var button_default = Button;

// src/components/carousel/index.tsx
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Carousel = ({ slides, interval = 3e3 }) => {
  const [currentIndex, setCurrentIndex] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "relative w-full h-[484px] overflow-hidden", children: slides.map(
    ({
      title,
      titleClassName,
      subTitle,
      subTitleClassName,
      backgroundImage,
      backgroundColor,
      contentPlacement
    }, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "div",
        {
          className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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

// src/components/checkbox/index.tsx
var import_react3 = require("react");

// src/components/icons/index.tsx
var icons_exports = {};
__export(icons_exports, {
  ArrowLeftSVG: () => ArrowLeft,
  CheckSVG: () => Check,
  ChevDownSVG: () => ChevDown,
  ChevLeftSVG: () => ChevLeft,
  ChevRightSVG: () => ChevRight,
  CircleSVG: () => Circle,
  ColorsSVG: () => Colors,
  CoversSVG: () => Covers,
  CrossSVG: () => Cross,
  DashboardSVG: () => Dashboard,
  FilterSVG: () => Filter,
  OrderInfoSVG: () => OrderInfo,
  OrdersSVG: () => Orders,
  ProductsSVG: () => Products,
  SignOutSVG: () => SignOut,
  TemplatesSVG: () => Templates,
  UploadSVG: () => Upload
});

// src/components/icons/dashboardSVG/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Dashboard = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_jsx_runtime7 = require("react/jsx-runtime");
var Orders = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { clipPath: "url(#clip0_897_101)", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 21.875V3.125C5 1.40125 3.5975 0 1.875 0H0V1.25H1.875C2.90875 1.25 3.75 2.09125 3.75 3.125V21.875C3.75 23.5987 5.1525 25 6.875 25H7.5V26.25C7.5 28.3175 9.1825 30 11.25 30C13.3175 30 15 28.3175 15 26.25V25H20V26.25C20 28.3175 21.6825 30 23.75 30C25.8175 30 27.5 28.3175 27.5 26.25V25H30V23.75H6.875C5.84125 23.75 5 22.9088 5 21.875ZM13.75 26.25C13.75 27.6287 12.6287 28.75 11.25 28.75C9.87125 28.75 8.75 27.6287 8.75 26.25V25H13.75V26.25ZM26.25 26.25C26.25 27.6287 25.1287 28.75 23.75 28.75C22.3713 28.75 21.25 27.6287 21.25 26.25V25H26.25V26.25ZM7.5 21.25H30V12.5H7.5V21.25ZM8.75 13.75H28.75V20H8.75V13.75ZM17.5 0H7.5V10H17.5V0ZM16.25 8.75H8.75V1.25H16.25V8.75ZM20 2.5V10H30V2.5H20ZM28.75 8.75H21.25V3.75H28.75V8.75Z",
        fill: "currentcolor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("clipPath", { id: "clip0_897_101", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("rect", { width: "30", height: "30", fill: "currentcolor" }) }) })
  ] });
};

// src/components/icons/productsSVG/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Products = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("g", { clipPath: "url(#clip0_897_103)", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.375 18.75H24.375V20H19.375V18.75ZM30 16.875V30H0V16.875C0 15.1512 1.40125 13.75 3.125 13.75H6.25V3.125C6.25 1.40125 7.65125 0 9.375 0H20.625C22.3487 0 23.75 1.40125 23.75 3.125V13.75H26.875C28.5987 13.75 30 15.1512 30 16.875ZM7.5 13.75H22.5V3.125C22.5 2.09125 21.6588 1.25 20.625 1.25H9.375C8.34125 1.25 7.5 2.09125 7.5 3.125V13.75ZM1.25 28.75H14.375V15H3.125C2.09125 15 1.25 15.8413 1.25 16.875V28.75ZM28.75 16.875C28.75 15.8413 27.9088 15 26.875 15H15.625V28.75H28.75V16.875ZM5.625 18.75V20H10.625V18.75H5.625ZM12.5 6.25H17.5V5H12.5V6.25Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("clipPath", { id: "clip0_897_103", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/templatesSVG/index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Templates = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "svg",
    {
      viewBox: "0 0 30 30",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("g", { clipPath: "url(#clip0_897_105)", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 15.0002H10C8.625 15.0002 7.5 16.1252 7.5 17.5002V22.5002C7.5 23.8752 8.625 25.0002 10 25.0002H20C21.375 25.0002 22.5 23.8752 22.5 22.5002V17.5002C22.5 16.1252 21.375 15.0002 20 15.0002ZM21.25 22.5002C21.25 23.1877 20.6875 23.7502 20 23.7502H10C9.3125 23.7502 8.75 23.1877 8.75 22.5002V17.5002C8.75 16.8127 9.3125 16.2502 10 16.2502H20C20.6875 16.2502 21.25 16.8127 21.25 17.5002V22.5002ZM7.5 10.6252C7.5 10.2752 7.775 10.0002 8.125 10.0002H13.125C13.475 10.0002 13.75 10.2752 13.75 10.6252C13.75 10.9752 13.475 11.2502 13.125 11.2502H8.125C7.775 11.2502 7.5 10.9752 7.5 10.6252ZM25.125 6.73774L20.775 2.38774C19.2375 0.850241 17.2 0.0127415 15.025 0.0127415H8.125C5.025 0.000241525 2.5 2.52524 2.5 5.62524V24.3752C2.5 27.4752 5.025 30.0002 8.125 30.0002H21.875C24.975 30.0002 27.5 27.4752 27.5 24.3752V12.4877C27.5 10.3127 26.65 8.27524 25.125 6.73774ZM24.2375 7.62524C24.925 8.31274 25.45 9.12524 25.7875 10.0002H19.375C18.3375 10.0002 17.5 9.16274 17.5 8.12524V1.71274C18.3875 2.05024 19.1875 2.57524 19.875 3.26274L24.225 7.61274L24.2375 7.62524ZM26.25 24.3752C26.25 26.7877 24.2875 28.7502 21.875 28.7502H8.125C5.7125 28.7502 3.75 26.7877 3.75 24.3752V5.62524C3.75 3.21274 5.7125 1.25024 8.125 1.25024H15.0125C15.425 1.25024 15.8375 1.28774 16.25 1.36274V8.12524C16.25 9.85024 17.65 11.2502 19.375 11.2502H26.1375C26.2125 11.6502 26.25 12.0627 26.25 12.4877V24.3752Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("clipPath", { id: "clip0_897_105", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
      ]
    }
  );
};

// src/components/icons/coversSVG/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Covers = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("g", { clipPath: "url(#clip0_897_107)", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M30 4.37504V21.8263C30 24.3425 28.3075 26.5713 25.8825 27.245L16.9825 29.7213C15.685 30.0813 14.3138 30.0825 13.0163 29.7213L4.11625 27.245C1.6925 26.57 -2.36592e-07 24.3425 -2.36592e-07 21.8263V5.62504C-0.0125002 4.81379 1.2625 4.81379 1.25 5.62504V21.8263C1.25 23.7825 2.56625 25.5163 4.4525 26.0413L13.3538 28.5175C14.4312 28.8175 15.57 28.8175 16.6488 28.5175L25.5487 26.04C27.435 25.5163 28.7512 23.7825 28.7512 21.825V4.37504C28.7387 3.56379 30.0125 3.56379 30 4.37504ZM3.75 19.8888V4.37504C3.75 2.99004 4.38375 1.71629 5.49 0.882541C6.59625 0.0487912 7.995 -0.212459 9.32625 0.167541L13.3575 1.32004C14.03 1.51129 14.5988 1.92004 14.9987 2.45504C15.3987 1.92004 15.9688 1.51129 16.64 1.32004L20.6712 0.167541C22.0037 -0.212459 23.4025 0.0475412 24.5075 0.882541C25.6138 1.71629 26.2475 2.99004 26.2475 4.37504V19.8888C26.2475 21.8313 24.9425 23.5613 23.075 24.0963L16.0637 26.1C15.3663 26.2988 14.6288 26.2988 13.9313 26.1L6.92125 24.0963C5.0525 23.5625 3.7475 21.8313 3.7475 19.8888H3.75ZM15.625 4.32504V24.9225C15.6575 24.915 22.7337 22.8938 22.7337 22.8938C24.0675 22.5125 25 21.2775 25 19.8888V4.37504C25 3.38504 24.5475 2.47629 23.7562 1.88004C22.9637 1.28129 21.9562 1.09879 21.0162 1.37004L16.985 2.52254C16.1838 2.75129 15.625 3.49254 15.625 4.32504ZM5 19.8888C5 21.2763 5.9325 22.5125 7.26625 22.8938C7.26625 22.8938 14.3425 24.915 14.375 24.9225V4.32504C14.375 3.49254 13.8162 2.75129 13.015 2.52254L8.98375 1.37004C7.0725 0.758791 4.93875 2.36129 5 4.37504V19.8888Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("clipPath", { id: "clip0_897_107", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/colorsSVG/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Colors = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("g", { clipPath: "url(#clip0_897_109)", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M26.25 5V3.125C26.25 1.40125 24.8475 0 23.125 0H3.125C1.4025 0 0 1.40125 0 3.125V8.125C0 9.84875 1.4025 11.25 3.125 11.25H23.125C24.8475 11.25 26.25 9.84875 26.25 8.125V6.25C27.6287 6.25 28.75 7.37125 28.75 8.75V11.25C28.75 12.6287 27.6287 13.75 26.25 13.75H16.875C14.4625 13.75 12.5 15.7125 12.5 18.125V18.8125C11.075 19.1025 10 20.365 10 21.875V26.875C10 28.5987 11.4025 30 13.125 30C14.8475 30 16.25 28.5987 16.25 26.875V21.875C16.25 20.365 15.175 19.1038 13.75 18.8125V18.125C13.75 16.4013 15.1525 15 16.875 15H26.25C28.3175 15 30 13.3175 30 11.25V8.75C30 6.6825 28.3175 5 26.25 5ZM25 8.125C25 9.15875 24.1588 10 23.125 10H3.125C2.09125 10 1.25 9.15875 1.25 8.125V3.125C1.25 2.09125 2.09125 1.25 3.125 1.25H23.125C24.1588 1.25 25 2.09125 25 3.125V8.125ZM15 21.875V26.875C15 27.9088 14.1587 28.75 13.125 28.75C12.0913 28.75 11.25 27.9088 11.25 26.875V21.875C11.25 20.8412 12.0913 20 13.125 20C14.1587 20 15 20.8412 15 21.875Z",
        fill: "currentcolor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("clipPath", { id: "clip0_897_109", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { width: "30", height: "30", fill: "currentcolor" }) }) })
  ] });
};

// src/components/icons/signOutSVG/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var SignOut = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("g", { clipPath: "url(#clip0_897_111)", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M30 15C30 15 30 15.0025 30 15.0037C29.9975 15.845 29.6675 16.6338 29.0675 17.2238L23.89 22.32C23.7687 22.44 23.61 22.5 23.4513 22.5C23.29 22.5 23.1288 22.4375 23.0063 22.3137C22.765 22.0688 22.7675 21.6725 23.0137 21.43L28.1912 16.3337C28.3962 16.1313 28.5425 15.8888 28.6362 15.6263H8.125C7.78 15.6263 7.5 15.3463 7.5 15.0013C7.5 14.6563 7.78 14.3763 8.125 14.3763H28.6375C28.5437 14.11 28.3975 13.865 28.19 13.6613L23.0137 8.57125C22.7675 8.33 22.7638 7.93375 23.0063 7.6875C23.2475 7.44 23.6437 7.4375 23.89 7.68L29.0662 12.77C29.6675 13.3625 30 14.1525 30 14.9975C30 14.9975 30 14.9987 30 15ZM14.375 18.75C14.03 18.75 13.75 19.03 13.75 19.375V24.375C13.75 26.7875 11.7875 28.75 9.375 28.75H5.625C3.2125 28.75 1.25 26.7875 1.25 24.375V5.625C1.25 3.2125 3.2125 1.25 5.625 1.25H9.375C11.7875 1.25 13.75 3.2125 13.75 5.625V10.625C13.75 10.97 14.03 11.25 14.375 11.25C14.72 11.25 15 10.97 15 10.625V5.625C15 2.52375 12.4762 0 9.375 0H5.625C2.52375 0 0 2.52375 0 5.625V24.375C0 27.4762 2.52375 30 5.625 30H9.375C12.4762 30 15 27.4762 15 24.375V19.375C15 19.03 14.72 18.75 14.375 18.75Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("clipPath", { id: "clip0_897_111", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/filterSVG/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var Filter = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("g", { clipPath: "url(#clip0_918_510)", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.4456 0H5.55342C3.13492 0 1.16675 1.96933 1.16675 4.38783C1.16675 5.4635 1.55991 6.4995 2.27508 7.30217L10.5001 16.5562V23.9178C10.5001 24.1232 10.6074 24.3133 10.7836 24.4183L16.6169 27.9183C16.7091 27.9743 16.8129 28.0012 16.9167 28.0012C17.0159 28.0012 17.1151 27.9767 17.2037 27.9265C17.3869 27.8227 17.5001 27.6278 17.5001 27.4178V16.5562L25.7263 7.30217C26.4403 6.4995 26.8334 5.4635 26.8334 4.38783C26.8334 1.96933 24.8641 0 22.4456 0ZM24.8524 6.5275L16.4792 15.946C16.3847 16.0533 16.3322 16.191 16.3322 16.3333V26.3865L11.6656 23.5865V16.3333C11.6656 16.191 11.6131 16.0533 11.5186 15.946L3.14658 6.5275C2.62158 5.93717 2.33341 5.17767 2.33341 4.38783C2.33341 2.61217 3.77775 1.16667 5.55342 1.16667H22.4456C24.2212 1.16667 25.6667 2.611 25.6667 4.38783C25.6667 5.17767 25.3774 5.93717 24.8524 6.5275Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("clipPath", { id: "clip0_918_510", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("rect", { width: "28", height: "28", rx: "8", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/chevDownSVG/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var ChevDown = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 20.0923C14.5 20.0923 14.0288 19.8973 13.6738 19.5436L7.07251 12.9423L7.95626 12.0586L14.5575 18.6598C14.7938 18.8961 15.205 18.8961 15.4413 18.6598L22.0425 12.0586L22.9263 12.9423L16.325 19.5436C15.9713 19.8973 15.5 20.0923 14.9988 20.0923H15Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/crossSVG/index.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var Cross = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-50 -50 600 600", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_jsx_runtime16 = require("react/jsx-runtime");
var OrderInfo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("g", { clipPath: "url(#clip0_907_32)", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.875 26.25H5.625C3.2125 26.25 1.25 24.2875 1.25 21.875V5.625C1.25 3.2125 3.2125 1.25 5.625 1.25H13.75V5.625C13.75 7.35 15.15 8.75 16.875 8.75H21.25V10.625C21.25 10.975 21.525 11.25 21.875 11.25C22.225 11.25 22.5 10.975 22.5 10.625C22.5 10.625 22.5125 8 22.5 7.95C22.3875 6.9625 21.925 6.0375 21.2125 5.3375L17.1625 1.2875C16.35 0.475 15.225 0 14.075 0H5.625C2.525 0 0 2.525 0 5.625V21.875C0 24.975 2.525 27.5 5.625 27.5H11.875C12.225 27.5 12.5 27.225 12.5 26.875C12.5 26.525 12.225 26.25 11.875 26.25ZM20.3375 6.2125C20.7 6.575 20.9625 7.0125 21.1125 7.5H16.875C15.8375 7.5 15 6.6625 15 5.625V1.3875C15.475 1.5375 15.925 1.8 16.2875 2.1625L20.3375 6.2125ZM21.875 13.75C17.4 13.75 13.75 17.4 13.75 21.875C13.75 26.35 17.4 30 21.875 30C26.35 30 30 26.35 30 21.875C30 17.4 26.35 13.75 21.875 13.75ZM21.875 28.75C18.0875 28.75 15 25.6625 15 21.875C15 18.0875 18.0875 15 21.875 15C25.6625 15 28.75 18.0875 28.75 21.875C28.75 25.6625 25.6625 28.75 21.875 28.75ZM23.125 18.75C23.125 19.4375 22.5625 20 21.875 20C21.1875 20 20.625 19.4375 20.625 18.75C20.625 18.0625 21.1875 17.5 21.875 17.5C22.5625 17.5 23.125 18.0625 23.125 18.75ZM22.5 21.875V25.625C22.5 25.975 22.225 26.25 21.875 26.25C21.525 26.25 21.25 25.975 21.25 25.625V21.875C21.25 21.525 21.525 21.25 21.875 21.25C22.225 21.25 22.5 21.525 22.5 21.875Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("clipPath", { id: "clip0_907_32", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("rect", { width: "30", height: "30", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/chevLeftSVG/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var ChevLeft = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_jsx_runtime18 = require("react/jsx-runtime");
var ChevRight = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.277 23.6916L12.3638 22.7784L19.1851 15.9571C19.3065 15.8344 19.3736 15.6729 19.3736 15.4999C19.3736 15.3268 19.3065 15.1653 19.1851 15.0426L12.3638 8.22131L13.277 7.30811L20.0983 14.1294C20.4638 14.4949 20.6653 14.9819 20.6653 15.4999C20.6653 16.0178 20.4638 16.5035 20.0983 16.8703L13.277 23.6916Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/checkSVG/index.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var Check = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M4.293 12.293a1 1 0 011.414 0L10 16.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z",
      clipRule: "evenodd",
      fill: "currentColor"
    }
  ) });
};

// src/components/icons/circleSVG/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var Circle = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-3 -3 30 30", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
var import_jsx_runtime21 = require("react/jsx-runtime");
var Upload = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("svg", { viewBox: "0 0 53 53", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("g", { clipPath: "url(#clip0_859_45)", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47.4792 26.5H40.8542C39.0279 26.5 37.5417 27.9862 37.5417 29.8125C37.5417 32.8578 35.0661 35.3333 32.0208 35.3333H20.9792C17.9339 35.3333 15.4583 32.8578 15.4583 29.8125C15.4583 27.9862 13.9721 26.5 12.1458 26.5H5.52083C2.47554 26.5 0 28.9755 0 32.0208V43.0625C0 48.5414 4.45862 53 9.9375 53H43.0625C48.5414 53 53 48.5414 53 43.0625V32.0208C53 28.9755 50.5245 26.5 47.4792 26.5ZM50.7917 43.0625C50.7917 47.3246 47.3246 50.7917 43.0625 50.7917H9.9375C5.67542 50.7917 2.20833 47.3246 2.20833 43.0625V32.0208C2.20833 30.1945 3.69454 28.7083 5.52083 28.7083H12.1458C12.7531 28.7083 13.25 29.2052 13.25 29.8125C13.25 34.0746 16.7171 37.5417 20.9792 37.5417H32.0208C36.2829 37.5417 39.75 34.0746 39.75 29.8125C39.75 29.2052 40.2469 28.7083 40.8542 28.7083H47.4792C49.3055 28.7083 50.7917 30.1945 50.7917 32.0208V43.0625ZM16.8849 9.80279C16.4543 9.37217 16.4543 8.67212 16.8849 8.2415L24.157 0.969458C24.6936 0.432833 25.3782 0.174458 26.0804 0.0839167C26.2107 0.0309167 26.3498 0 26.5 0C26.6502 0 26.7893 0.0309167 26.9196 0.0839167C27.6218 0.174458 28.3064 0.432833 28.843 0.969458L36.1151 8.2415C36.5457 8.67212 36.5457 9.37217 36.1151 9.80279C35.8987 10.0192 35.616 10.1252 35.3333 10.1252C35.0507 10.1252 34.768 10.017 34.5516 9.80279L27.6042 2.85537V23.1875C27.6042 23.797 27.1095 24.2917 26.5 24.2917C25.8905 24.2917 25.3958 23.797 25.3958 23.1875V2.85537L18.4484 9.80279C18.0178 10.2334 17.3155 10.2334 16.8849 9.80279Z",
        fill: "currentColor"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("clipPath", { id: "clip0_859_45", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("rect", { width: "53", height: "53", fill: "currentColor" }) }) })
  ] });
};

// src/components/icons/arrowLeftSVG/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var ArrowLeft = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("svg", { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.7501 14.3752H7.83136L13.6026 8.60396L12.7189 7.72021L6.82261 13.6165C6.06011 14.379 6.06011 15.6215 6.82261 16.384L12.7201 22.2815L13.6039 21.3977L7.83261 15.6265H23.7501V14.3765V14.3752Z",
      fill: "currentColor"
    }
  ) });
};

// src/components/checkbox/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var Checkbox = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = (0, import_react3.useState)(checked);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("label", { className: "flex items-center gap-2 cursor-pointer", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "input",
      {
        type: "checkbox",
        checked: isChecked,
        onChange: handleToggle,
        className: "hidden"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "div",
      {
        className: `w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all 
          ${isChecked ? "bg-primary-500 border-primary-600" : "bg-white border-neutrola-500"}
        `,
        children: isChecked && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "size-4 text-white", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Check, {}) })
      }
    ),
    label && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-black", children: label })
  ] });
};
var checkbox_default = Checkbox;

// src/components/chip/index.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var Chip = ({ label, onClear }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-row gap-2 items-center bg-neutrola-700 w-fit px-4 py-2 rounded-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "div",
      {
        className: "size-3 cursor-pointer text-neutral-200 hover:text-white",
        onClick: onClear,
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Cross, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-neutral-200 text-base font-semibold", children: label })
  ] });
};
var chip_default = Chip;

// src/components/ellipsis/index.tsx
var import_react4 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Ellipsis = ({
  label,
  tooltipPosition = "right" /* RIGHT */,
  tooltipWidth = "w-40"
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setIsTooltipVisible(true),
      onMouseLeave: () => setIsTooltipVisible(false),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-ellipsis w-32 overflow-hidden whitespace-nowrap", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
var import_react5 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var FileUploader = ({
  title,
  subTitle1 = "",
  subTitle2 = "",
  handleAttachment,
  accept = ".jpg,.jpeg,.png"
}) => {
  const fileInputRef = (0, import_react5.useRef)(null);
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleAttachment(files[0]);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex flex-row gap-4 items-start border border-dashed border-neutral-200 p-4 rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "div",
      {
        className: "bg-primary-500 hover:bg-primary-600 text-white px-6 py-8 rounded-lg cursor-pointer",
        onClick: () => {
          var _a;
          return (_a = fileInputRef.current) == null ? void 0 : _a.click();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "size-10", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Upload, {}) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "input",
      {
        type: "file",
        ref: fileInputRef,
        accept,
        className: "hidden",
        onChange: handleFileUpload
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-lg", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-sm text-neutrola-400", children: subTitle1 }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-sm text-neutrola-400", children: subTitle2 })
    ] })
  ] });
};
var fileUploader_default = FileUploader;

// src/components/filterDropdown/index.tsx
var import_react6 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var FilterDropdown = ({ children }) => {
  const [isChildrenVisible, setIsChildrenVisible] = (0, import_react6.useState)(false);
  const closeDropdown = () => setIsChildrenVisible(false);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      "div",
      {
        className: "flex flex-row gap-4 items-center w-fit border border-neutrola-300 hover:border-neutrola-400 group p-2 rounded-lg cursor-pointer",
        onClick: () => setIsChildrenVisible(!isChildrenVisible),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "size-5 text-neutrola-300 group-hover:text-neutrola-400", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Filter, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "text-neutrola-300 text-base group-hover:text-neutrola-400", children: "Filter" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "size-5 text-neutrola-300 group-hover:text-neutrola-400", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ChevDown, {}) })
        ]
      }
    ),
    isChildrenVisible && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "border border-neutrola-300 rounded-lg shadow-lg overflow-y-auto absolute top-full bg-white z-10", children: children(closeDropdown) })
  ] });
};
var filterDropdown_default = FilterDropdown;

// src/components/input/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var Input = ({
  label,
  value,
  onChange,
  disabled,
  placeholder,
  inputClassName = "",
  required = false
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex flex-col gap-1 relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("label", { htmlFor: label, className: "text-sm text-neutrola-600 mb-2", children: `${label}${required ? " *" : ""}` }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "input",
      {
        id: label,
        placeholder,
        value,
        onChange: (e) => onChange(e.target.value),
        disabled,
        className: `border border-neutrola-300 outline-none p-4 rounded-lg ${disabled ? "cursor-not-allowed" : "cursor-text"} text-sm w-full ${inputClassName}`,
        required
      }
    )
  ] });
};
var input_default = Input;

// src/components/modal/index.tsx
var import_react7 = require("react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var Modal = ({
  title,
  children,
  onClear,
  size = "w-[800px] h-96" /* MEDIUM */
}) => {
  const modalRef = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    var _a;
    (_a = modalRef.current) == null ? void 0 : _a.focus();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    "div",
    {
      ref: modalRef,
      tabIndex: -1,
      className: `bg-white p-4 ${size !== "w-full h-full" /* FULL */ && "rounded-lg"} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 ${size}`,
      onBlur: () => onClear(),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-row gap-4 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex-1 text-3xl", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "size-4 cursor-pointer", onClick: () => onClear(), children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Cross, {}) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex-1 flex justify-center items-center", children })
      ]
    }
  ) });
};
var modal_default = Modal;

// src/components/navBar/index.tsx
var import_image2 = __toESM(require("next/image"));
var import_react8 = require("react");
var import_navigation = require("next/navigation");
var import_jsx_runtime30 = require("react/jsx-runtime");
var NavBar = ({
  menuItems,
  logoShort,
  logoLong,
  avatarName,
  avatarEmail,
  avatarImage,
  avatarType,
  menuWidthClass = "w-[20rem]",
  menuHeightClass = "h-[100vh]",
  isCollapsed = false,
  menuBackgroundColor = "bg-primary-100"
}) => {
  const router = (0, import_navigation.useRouter)();
  const [isActiveMenuItem, setIsActiveMenuItem] = (0, import_react8.useState)("");
  const [isMenuCollapsed, setIsMenuCollapsed] = (0, import_react8.useState)(isCollapsed);
  const [isMenuItemsCollapsed, setIsMenuITemsCollapsed] = (0, import_react8.useState)(false);
  const [showTooltip, setShowTooltip] = (0, import_react8.useState)(null);
  const activeClass = "rounded-lg bg-white bg-opacity-35";
  const collapsedClass = "w-[6rem]";
  (0, import_react8.useEffect)(() => {
    var _a;
    if (menuItems.length > 0) {
      const active = menuItems.find((item) => item.isActive === true);
      setIsActiveMenuItem((_a = active == null ? void 0 : active.title) != null ? _a : menuItems[0].title);
    }
  }, []);
  (0, import_react8.useEffect)(() => {
    if (!isMenuCollapsed) {
      setTimeout(() => {
        setIsMenuITemsCollapsed(false);
      }, 200);
    } else {
      setIsMenuITemsCollapsed(true);
    }
  }, [isMenuCollapsed]);
  const handleClick = (menu) => {
    setIsActiveMenuItem(menu.title);
    router.push(menu.route);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      className: `transition-[width] duration-300 ease-in-out ${isMenuCollapsed ? collapsedClass : menuWidthClass} ${menuHeightClass}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
        "div",
        {
          className: `w-full h-full flex flex-col gap-4 p-4 ${menuBackgroundColor}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_image2.default, { src: logoShort, alt: "logo_short", width: 60, height: 60 }),
                !isMenuItemsCollapsed && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                  import_image2.default,
                  {
                    src: logoLong,
                    alt: "logo_long",
                    width: 200,
                    height: 48,
                    className: "transition-opacity duration-300"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                  avatar_default,
                  {
                    name: avatarName,
                    email: avatarEmail,
                    variant: isMenuItemsCollapsed ? "image-only" /* IMAGE_ONLY */ : avatarType,
                    image: avatarImage
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                  "span",
                  {
                    onClick: () => setIsMenuCollapsed(!isMenuCollapsed),
                    className: `cursor-pointer w-8 h-8 rounded-full ${menuBackgroundColor} border border-neutral-300 absolute -right-8 flex items-center justify-center text-black`,
                    children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "size-5", children: isMenuCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ChevRight, {}) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ChevLeft, {}) })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "border-neutral-300 border-b" }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex flex-col gap-1", children: menuItems.map((item, index) => {
              if (!item.isDivider) {
                return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
                  "div",
                  {
                    className: `flex flex-row gap-4 items-center p-4 rounded-lg hover:cursor-pointer hover:bg-white hover:bg-opacity-35 hover:rounded-lg ${isActiveMenuItem === item.title ? activeClass : ""}`,
                    onClick: () => handleClick(item),
                    onMouseEnter: () => setShowTooltip(index),
                    onMouseLeave: () => setShowTooltip(null),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "w-6 h-6 ml-1 relative", children: [
                        item.icon,
                        isMenuCollapsed && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                          tooltip_default,
                          {
                            position: "right" /* RIGHT */,
                            label: item.title,
                            isVisible: showTooltip === index,
                            toolTipWidth: "w-fit",
                            toolTipClass: "text-nowrap"
                          }
                        )
                      ] }),
                      !isMenuItemsCollapsed && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "text-nowrap", children: item.title })
                    ]
                  },
                  `menu_item_${index + 1}`
                );
              }
              return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                "div",
                {
                  className: "border-neutral-300 border-b my-3"
                },
                `menu_item_${index + 1}`
              );
            }) })
          ]
        }
      )
    }
  );
};
var navBar_default = NavBar;

// src/components/pagination/index.tsx
var import_react10 = require("react");

// src/components/selectDropdown/index.tsx
var import_react9 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
var SelectDropdown = ({
  options,
  label,
  placeholder = "",
  disabled = false,
  value,
  onChange,
  inputClassName = ""
}) => {
  const [dropdownValue, setDropdownValue] = (0, import_react9.useState)("");
  const [isOptionsVisible, setIsOptionsVisible] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    const option = options.find((opt) => opt.label === value);
    if (option) {
      setDropdownValue(option.label);
      onChange(option.label);
    } else {
      setDropdownValue("");
    }
  }, []);
  const handleMouseDown = (val) => {
    setDropdownValue(val);
    onChange(val);
    setIsOptionsVisible(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex flex-col gap-1 relative", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { htmlFor: label, className: "text-sm text-neutrola-600 mb-2", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "size-5 absolute inset-y-4 right-4 flex items-center text-neutrola-600 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ChevDown, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "input",
        {
          id: label,
          type: "text",
          className: `border border-neutrola-300 outline-none p-4 rounded-lg ${disabled ? "cursor-not-allowed" : "cursor-pointer"} text-sm w-full ${inputClassName}`,
          placeholder,
          onClick: () => setIsOptionsVisible(!isOptionsVisible),
          value: dropdownValue,
          onBlur: () => setIsOptionsVisible(false),
          readOnly: true,
          disabled
        }
      )
    ] }),
    isOptionsVisible && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "border border-neutrola-300 rounded-lg shadow-lg max-h-96 overflow-y-auto absolute min-w-full top-full bg-white z-10", children: options.map(({ label: label2, value: val }, index) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "div",
      {
        className: "p-4 cursor-pointer hover:bg-neutrola-50 text-sm",
        onMouseDown: () => handleMouseDown(label2),
        children: label2
      },
      `${label2}_${val}_${index + 1}`
    )) })
  ] });
};
var selectDropdown_default = SelectDropdown;

// src/components/pagination/index.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var Pagination = ({ total, page, size, options, onChange }) => {
  const [optionDropdown, setOptionDropdown] = (0, import_react10.useState)(size.toString());
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "bg-neutrola-50 flex flex-row gap-4 items-center px-4 py-2 rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex-1", children: [
      page,
      " of ",
      Math.ceil(total / size),
      " pages"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "w-20", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      selectDropdown_default,
      {
        options,
        value: optionDropdown,
        onChange: (option) => handlePageSize(option)
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { children: "items per page" }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex flex-row gap-4 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        button_default,
        {
          onClick: onLeft,
          icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ChevLeft, {}),
          variant: "tertiary" /* TERTIARY */,
          disabled: page === 1
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        button_default,
        {
          onClick: onRight,
          icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ChevRight, {}),
          variant: "tertiary" /* TERTIARY */,
          disabled: page === Math.ceil(total / size)
        }
      )
    ] })
  ] });
};
var pagination_default = Pagination;

// src/components/radioButton/index.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var RadioButton = ({
  label,
  value,
  selectedValue,
  onChange
}) => {
  const isChecked = selectedValue === value;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("label", { className: "flex items-center gap-2 cursor-pointer", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "div",
      {
        className: `w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all
            ${isChecked ? "border-primary-500 bg-primary-500" : "border-gray-400 bg-white"}
          `,
        onClick: () => onChange && onChange(value),
        children: isChecked && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "w-2.5 h-2.5 bg-white rounded-full" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-gray-700", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "input",
      {
        type: "radio",
        value,
        checked: isChecked,
        onChange: () => onChange && onChange(value),
        className: "hidden"
      }
    )
  ] });
};
var radioButton_default = RadioButton;

// src/components/snackBar/index.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var Snackbar = ({
  type = "default" /* DEFAULT */,
  message,
  icon
}) => {
  const getClassName = () => {
    switch (type) {
      case "success" /* SUCCESS */:
        return "bg-greenola-50 text-greenola-800 border-greenola-500";
      case "danger" /* DANGER */:
        return "bg-redola-50 text-redola-600 border-redola-500";
      case "warning" /* WARNING */:
        return "bg-yellowla-50 text-yellowla-800 border-yellowla-600";
      case "info" /* INFO */:
        return "bg-blueola-50 text-blueola-800 border-blueola-600";
      case "default" /* DEFAULT */:
      default:
        return "bg-neutrola-50 text-neutrola-800 border-neutrola-500";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    "div",
    {
      className: `${getClassName()} p-4 rounded-lg flex flex-row gap-4 items-center font-normal border`,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "size-5", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { children: message })
      ]
    }
  );
};
var snackBar_default = Snackbar;

// src/components/state/index.tsx
var import_image3 = __toESM(require("next/image"));
var import_jsx_runtime35 = require("react/jsx-runtime");
var State = ({
  type,
  stateImage,
  title,
  subTitle,
  imageWidth = 526,
  imageHeight = 526
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "w-full h-full flex flex-col gap-8 items-center justify-center", children: [
    stateImage ? /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      import_image3.default,
      {
        src: stateImage,
        alt: "state image",
        width: imageWidth,
        height: imageHeight
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      import_image3.default,
      {
        src: typeImage(),
        alt: "state image",
        width: imageWidth,
        height: imageHeight
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-3xl text-center font-semibold", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "w-[300px] text-center", children: subTitle })
    ] })
  ] });
};
var state_default = State;

// src/components/table/index.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
var Table = ({ columns, data }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "overflow-hidden rounded-lg border border-neutrola-300", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("tr", { className: "bg-neutrola-300 border border-neutrola-300", children: columns.map(({ header, headerClassName }, index) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "th",
      {
        className: `text-left px-4 py-4 ${headerClassName}`,
        children: header
      },
      `column_${index}`
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("tbody", { children: data.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "tr",
      {
        className: "bg-white hover:bg-neutrola-100",
        children: columns.map(({ render }, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("td", { className: "text-left px-4 py-4", children: render(row) }, `cell_${cellIndex}`))
      },
      `row_${rowIndex}`
    )) })
  ] }) });
};
var table_default = Table;

// src/components/tag/index.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var Tag = ({ type, label }) => {
  const getTagStyle = (type2) => {
    switch (type2) {
      case "success" /* SUCCESS */:
        return "bg-greenola-50 text-greenola-600";
      case "danger" /* DANGER */:
        return "bg-redola-50 text-redola-600";
      case "warning" /* WARNING */:
        return "bg-yellowla-50 text-yellowla-600";
      case "info" /* INFO */:
        return "bg-blueola-50 text-blueola-600";
      default:
        return "bg-neutrola-50 text-neutrola-600";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: `w-fit px-4 py-2 rounded-lg text-sm ${getTagStyle(type)}`, children: label });
};
var tag_default = Tag;

// src/components/timeLine/index.tsx
var import_react11 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var TimeLine = ({ logs }) => {
  const [steps, setSteps] = (0, import_react11.useState)([]);
  (0, import_react11.useEffect)(() => {
    if (logs[0].title !== "Order cancelled" /* ORDER_CANCELLED */ && logs[0].title !== "Delivered" /* DELIVERED */) {
      setSteps([
        {
          title: "Pending" /* PENDING */
        },
        ...logs
      ]);
    } else {
      setSteps(logs);
    }
  }, [logs]);
  const getIcon = (status) => {
    switch (status) {
      case "Order placed" /* ORDER_PLACED */:
      case "Printing in progress" /* PRINTING_IN_PROGRESS */:
      case "Packaging" /* PACKAGING */:
      case "Dispatched to courier" /* DISPATCHED_TO_COURIER */:
      case "Delivered" /* DELIVERED */:
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "size-5 bg-greenola-500 rounded-full p-1 text-white", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Check, {}) });
      case "Order cancelled" /* ORDER_CANCELLED */:
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "size-5 bg-redola-500 rounded-full p-1 text-white", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Cross, {}) });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "size-5 bg-neutrola-600 text-neutrola-200 rounded-full p-1", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Circle, {}) });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: steps.map(({ title, date, description }, index) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-row gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col items-center", children: [
      getIcon(title),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "w-0.5 h-full bg-neutrola-500" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "p",
        {
          className: `text-base font-semibold relative top-[-2px] ${title === "Pending" /* PENDING */ ? "pb-8" : ""}`,
          children: title
        }
      ),
      title && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-xs text-neutrola-700", children: date }),
      description && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "p-4 text-xs bg-neutrola-50 text-neutral-800 rounded-lg my-2", children: description })
    ] })
  ] }, `log_${index}`)) });
};
var timeLine_default = TimeLine;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AVATAR_VARIANT,
  Avatar,
  BUTTON_VARIANTS,
  Banner,
  Button,
  Carousel,
  Checkbox,
  Chip,
  Ellipsis,
  FileUploader,
  FilterDropdown,
  Icons,
  Input,
  Modal,
  NavBar,
  Pagination,
  RadioButton,
  SelectDropdown,
  Snackbar,
  States,
  Table,
  Tag,
  TimeLine,
  Tooltip
});
//# sourceMappingURL=index.js.map