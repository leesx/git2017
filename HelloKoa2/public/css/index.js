import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "badge": {
        "verticalAlign": "baseline",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "display": "inline-block",
        "paddingTop": 2,
        "paddingRight": 9,
        "paddingBottom": 2,
        "paddingLeft": 9,
        "fontSize": 11.84,
        "fontWeight": "700",
        "lineHeight": 14,
        "color": "#fff",
        "whiteSpace": "nowrap",
        "backgroundColor": "#999",
        "WebkitBorderRadius": 9,
        "MozBorderRadius": 9,
        "borderRadius": 9
    },
    "label": {
        "verticalAlign": "baseline",
        "cursor": "pointer",
        "fontSize": 11.84,
        "fontWeight": "700",
        "lineHeight": 14,
        "display": "inline-block",
        "marginBottom": 5,
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#fff",
        "whiteSpace": "nowrap",
        "backgroundColor": "#999",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "sub": {
        "verticalAlign": "baseline",
        "position": "relative",
        "fontSize": "75%",
        "lineHeight": 0,
        "bottom": -0.25
    },
    "sup": {
        "verticalAlign": "baseline",
        "position": "relative",
        "fontSize": "75%",
        "lineHeight": 0,
        "top": -0.5
    },
    "clearfix:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "container-fluid:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "container:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "dl-horizontal:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "row-fluid:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "row:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "btn-group>btnactive": {
        "zIndex": 2
    },
    "btn-group>btn:active": {
        "zIndex": 2
    },
    "btn-group>btn:focus": {
        "zIndex": 2
    },
    "btn-group>btn:hover": {
        "zIndex": 2
    },
    "input-append uneditable-input:focus": {
        "zIndex": 2
    },
    "input-append input:focus": {
        "zIndex": 2
    },
    "input-append select:focus": {
        "zIndex": 2
    },
    "input-prepend uneditable-input:focus": {
        "zIndex": 2
    },
    "input-prepend input:focus": {
        "zIndex": 2
    },
    "input-prepend select:focus": {
        "zIndex": 2
    },
    "dropdown": {
        "position": "relative"
    },
    "dropup": {
        "position": "relative"
    },
    "breadcrumb": {
        "listStyle": "none",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "#f5f5f5",
        "borderRadius": 4,
        "boxShadow": "none",
        "border": "none",
        "background": "0 0"
    },
    "carousel-indicators": {
        "listStyle": "none",
        "position": "absolute",
        "top": 15,
        "right": 15,
        "zIndex": 5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "dropdown-menu": {
        "listStyle": "none",
        "MozBackgroundClip": "padding",
        "position": "absolute",
        "top": "100%",
        "left": 0,
        "zIndex": 1000,
        "display": "none",
        "float": "left",
        "minWidth": 160,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "#fff",
        "border": "1px solid rgba(0,0,0,.2)",
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6,
        "WebkitBoxShadow": "0 5px 10px rgba(0,0,0,.2)",
        "MozBoxShadow": "0 5px 10px rgba(0,0,0,.2)",
        "boxShadow": "0 5px 10px rgba(0,0,0,.2)",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box"
    },
    "media-list": {
        "listStyle": "none",
        "marginLeft": 0
    },
    "nav": {
        "listStyle": "none",
        "display": "block",
        "marginBottom": 20,
        "marginLeft": 0
    },
    "pager": {
        "listStyle": "none",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "textAlign": "center"
    },
    "thumbnails": {
        "listStyle": "none",
        "marginLeft": -20
    },
    "clearfix:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "hide-text": {
        "font": "0/0 a",
        "color": "transparent",
        "textShadow": "none",
        "backgroundColor": "transparent",
        "border": 0
    },
    "img-polaroid": {
        "backgroundColor": "#fff",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "border": "1px solid rgba(0,0,0,.2)",
        "WebkitBoxShadow": "0 1px 3px rgba(0,0,0,.1)",
        "MozBoxShadow": "0 1px 3px rgba(0,0,0,.1)",
        "boxShadow": "0 1px 3px rgba(0,0,0,.1)"
    },
    "body": {
        "backgroundColor": "#e1e1e1",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "\"Helvetica Neue\",\"Luxi Sans\",\"DejaVu Sans\",Tahoma,\"Hiragino Sans GB\",STHeiti,sans-serif!important",
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#333",
        "wordBreak": "break-word"
    },
    "select": {
        "backgroundColor": "#fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontSize": 14,
        "verticalAlign": "middle",
        "cursor": "pointer",
        "fontFamily": "\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontWeight": "400",
        "lineHeight": 30,
        "display": "inline-block",
        "height": 30,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "color": "#555",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "width": 220,
        "border": "1px solid #ccc"
    },
    "input-block-level": {
        "display": "block",
        "width": "100%",
        "minHeight": 30,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block"
    },
    "footer": {
        "display": "block",
        "position": "relative",
        "clear": "both",
        "background": "#fff"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block"
    },
    "canvas": {
        "display": "inline-block"
    },
    "video": {
        "display": "inline-block"
    },
    "audio:not([controls])": {
        "display": "none"
    },
    "html": {
        "fontSize": "100%",
        "WebkitTextSizeAdjust": "100%",
        "MsTextSizeAdjust": "100%"
    },
    "a:focus": {
        "outline": "-webkit-focus-ring-color auto 5px",
        "outlineOffset": -2,
        "color": "#005580",
        "textDecoration": "underline"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0,
        "color": "#005580",
        "textDecoration": "underline"
    },
    "img": {
        "width": "auto\\9",
        "height": "auto",
        "maxWidth": "100%",
        "verticalAlign": "middle",
        "border": 0,
        "MsInterpolationMode": "bicubic"
    },
    "map_canvas img": {
        "maxWidth": "none"
    },
    "google-maps img": {
        "maxWidth": "none"
    },
    "button": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "verticalAlign": "middle",
        "cursor": "pointer",
        "WebkitAppearance": "button",
        "fontFamily": "\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontWeight": "400",
        "lineHeight": 20
    },
    "input": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "verticalAlign": "middle",
        "fontFamily": "\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontWeight": "400",
        "lineHeight": 20,
        "width": 206,
        "wordBreak": "break-word",
        "background": "hsla(0,0%,0%,0)",
        "boxShadow": "0 0 2px rgba(60,60,60,.5)"
    },
    "textarea": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "verticalAlign": "middle",
        "overflow": "auto",
        "fontFamily": "\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontWeight": "400",
        "lineHeight": 20,
        "display": "inline-block",
        "height": "auto",
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "color": "#555",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "width": 206,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "0 0 2px rgba(60,60,60,.5)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "wordBreak": "break-word",
        "background": "hsla(0,0%,0%,0)"
    },
    "button::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "input::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "html input[type=button]": {
        "cursor": "pointer",
        "WebkitAppearance": "button"
    },
    "input[type=reset]": {
        "cursor": "pointer",
        "WebkitAppearance": "button",
        "width": "auto"
    },
    "input[type=submit]": {
        "cursor": "pointer",
        "WebkitAppearance": "button",
        "width": "auto"
    },
    "input[type=button]": {
        "cursor": "pointer",
        "width": "auto"
    },
    "input[type=radio]": {
        "cursor": "pointer",
        "marginTop": "1px\\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal",
        "width": "auto"
    },
    "input[type=checkbox]": {
        "cursor": "pointer",
        "marginTop": "1px\\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal",
        "width": "auto"
    },
    "input[type=search]": {
        "WebkitBoxSizing": "content-box",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "WebkitAppearance": "textfield",
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "btn-block": {
        "WebkitBoxSizing": "border-box",
        "width": "100%",
        "display": "block",
        "paddingRight": 0,
        "paddingLeft": 0,
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "progress bar": {
        "WebkitBoxSizing": "border-box",
        "backgroundRepeat": "repeat-x",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "float": "left",
        "width": 0,
        "height": "100%",
        "fontSize": 12,
        "color": "#fff",
        "textAlign": "center",
        "backgroundColor": "#0e90d2",
        "backgroundImage": "linear-gradient(to bottom,#149bdf,#0480be)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf', endColorstr='#ff0480be', GradientType=0)",
        "WebkitBoxShadow": "inset 0 -1px 0 rgba(0,0,0,.15)",
        "MozBoxShadow": "inset 0 -1px 0 rgba(0,0,0,.15)",
        "boxShadow": "inset 0 -1px 0 rgba(0,0,0,.15)",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "WebkitTransition": "width .6s ease",
        "MozTransition": "width .6s ease",
        "OTransition": "width .6s ease",
        "transition": "width .6s ease"
    },
    "input[type=search]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=search]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "popover": {
        "MozBackgroundClip": "padding",
        "display": "none",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1010,
        "maxWidth": 276,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "textAlign": "left",
        "whiteSpace": "normal",
        "backgroundColor": "#fff",
        "border": "1px solid rgba(0,0,0,.2)",
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6,
        "WebkitBoxShadow": "0 5px 10px rgba(0,0,0,.2)",
        "MozBoxShadow": "0 5px 10px rgba(0,0,0,.2)",
        "boxShadow": "0 5px 10px rgba(0,0,0,.2)",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box"
    },
    "row-fluid:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "row:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "a": {
        "color": "#08c",
        "textDecoration": "none"
    },
    "img-rounded": {
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6
    },
    "img-circle": {
        "WebkitBorderRadius": 500,
        "MozBorderRadius": 500,
        "borderRadius": 500
    },
    "row": {
        "marginLeft": -20
    },
    "[class*=span]": {
        "float": "left",
        "minHeight": 1,
        "marginLeft": 20
    },
    "container": {
        "width": 940,
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "navbar-fixed-bottom container": {
        "width": 940
    },
    "navbar-fixed-top container": {
        "width": 940
    },
    "navbar-static-top container": {
        "width": 940
    },
    "span12": {
        "width": 940
    },
    "span11": {
        "width": 860
    },
    "span10": {
        "width": 780
    },
    "span9": {
        "width": 700
    },
    "span8": {
        "width": 620
    },
    "span7": {
        "width": 540
    },
    "span6": {
        "width": 460
    },
    "span5": {
        "width": 380
    },
    "span4": {
        "width": 300
    },
    "span3": {
        "width": 220
    },
    "span2": {
        "width": 140
    },
    "span1": {
        "width": 60
    },
    "row-fluid": {
        "width": "100%"
    },
    "row-fluid span12": {
        "width": "100%"
    },
    "offset12": {
        "marginLeft": 980
    },
    "offset11": {
        "marginLeft": 900
    },
    "offset10": {
        "marginLeft": 820
    },
    "offset9": {
        "marginLeft": 740
    },
    "offset8": {
        "marginLeft": 660
    },
    "offset7": {
        "marginLeft": 580
    },
    "offset6": {
        "marginLeft": 500
    },
    "offset5": {
        "marginLeft": 420
    },
    "offset4": {
        "marginLeft": 340
    },
    "offset3": {
        "marginLeft": 260
    },
    "offset2": {
        "marginLeft": 180
    },
    "offset1": {
        "marginLeft": 100
    },
    "row-fluid [class*=span]": {
        "display": "block",
        "float": "left",
        "width": "100%",
        "minHeight": 30,
        "marginLeft": "2.127659574468085%",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "row-fluid [class*=span]:first-child": {
        "marginLeft": 0
    },
    "row-fluid controls-row [class*=span]+[class*=span]": {
        "marginLeft": "2.127659574468085%"
    },
    "row-fluid span11": {
        "width": "91.48936170212765%"
    },
    "row-fluid span10": {
        "width": "82.97872340425532%"
    },
    "row-fluid span9": {
        "width": "74.46808510638297%"
    },
    "row-fluid span8": {
        "width": "65.95744680851064%"
    },
    "row-fluid span7": {
        "width": "57.44680851063829%"
    },
    "row-fluid span6": {
        "width": "48.93617021276595%"
    },
    "row-fluid span5": {
        "width": "40.42553191489362%"
    },
    "row-fluid span4": {
        "width": "31.914893617021278%"
    },
    "row-fluid span3": {
        "width": "23.404255319148934%"
    },
    "row-fluid span2": {
        "width": "14.893617021276595%"
    },
    "row-fluid span1": {
        "width": "6.382978723404255%"
    },
    "row-fluid offset12": {
        "marginLeft": "104.25531914893617%"
    },
    "row-fluid offset12:first-child": {
        "marginLeft": "102.12765957446808%"
    },
    "row-fluid offset11": {
        "marginLeft": "95.74468085106382%"
    },
    "row-fluid offset11:first-child": {
        "marginLeft": "93.61702127659574%"
    },
    "row-fluid offset10": {
        "marginLeft": "87.23404255319149%"
    },
    "row-fluid offset10:first-child": {
        "marginLeft": "85.1063829787234%"
    },
    "row-fluid offset9": {
        "marginLeft": "78.72340425531914%"
    },
    "row-fluid offset9:first-child": {
        "marginLeft": "76.59574468085106%"
    },
    "row-fluid offset8": {
        "marginLeft": "70.2127659574468%"
    },
    "row-fluid offset8:first-child": {
        "marginLeft": "68.08510638297872%"
    },
    "row-fluid offset7": {
        "marginLeft": "61.70212765957446%"
    },
    "row-fluid offset7:first-child": {
        "marginLeft": "59.574468085106375%"
    },
    "row-fluid offset6": {
        "marginLeft": "53.191489361702125%"
    },
    "row-fluid offset6:first-child": {
        "marginLeft": "51.063829787234035%"
    },
    "row-fluid offset5": {
        "marginLeft": "44.68085106382979%"
    },
    "row-fluid offset5:first-child": {
        "marginLeft": "42.5531914893617%"
    },
    "row-fluid offset4": {
        "marginLeft": "36.170212765957444%"
    },
    "row-fluid offset4:first-child": {
        "marginLeft": "34.04255319148936%"
    },
    "row-fluid offset3": {
        "marginLeft": "27.659574468085104%"
    },
    "row-fluid offset3:first-child": {
        "marginLeft": "25.53191489361702%"
    },
    "row-fluid offset2": {
        "marginLeft": "19.148936170212764%"
    },
    "row-fluid offset2:first-child": {
        "marginLeft": "17.02127659574468%"
    },
    "row-fluid offset1": {
        "marginLeft": "10.638297872340425%"
    },
    "row-fluid offset1:first-child": {
        "marginLeft": "8.51063829787234%"
    },
    "row-fluid [class*=span]hide": {
        "display": "none"
    },
    "[class*=span]hide": {
        "display": "none"
    },
    "container-fluid:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "container:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "row-fluid [class*=span]pull-right": {
        "float": "right"
    },
    "[class*=span]pull-right": {
        "float": "right"
    },
    "container-fluid": {
        "paddingRight": 20,
        "paddingLeft": 20
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontSize": 14,
        "wordBreak": "break-word"
    },
    "lead": {
        "marginBottom": 20,
        "fontSize": 21,
        "fontWeight": "200",
        "lineHeight": 30
    },
    "dd": {
        "lineHeight": 20,
        "marginLeft": 10
    },
    "dt": {
        "lineHeight": 20,
        "fontWeight": "700"
    },
    "li": {
        "lineHeight": 20
    },
    "small": {
        "fontSize": "85%"
    },
    "strong": {
        "fontWeight": "700"
    },
    "em": {
        "fontStyle": "italic"
    },
    "address": {
        "fontStyle": "normal",
        "marginBottom": 20,
        "lineHeight": 20,
        "display": "block"
    },
    "cite": {
        "fontStyle": "normal"
    },
    "muted": {
        "color": "#999"
    },
    "amuted:focus": {
        "color": "grey"
    },
    "amuted:hover": {
        "color": "grey"
    },
    "text-warning": {
        "color": "#c09853"
    },
    "atext-warning:focus": {
        "color": "#a47e3c"
    },
    "atext-warning:hover": {
        "color": "#a47e3c"
    },
    "text-error": {
        "color": "#b94a48"
    },
    "atext-error:focus": {
        "color": "#953b39"
    },
    "atext-error:hover": {
        "color": "#953b39"
    },
    "text-info": {
        "color": "#3a87ad"
    },
    "atext-info:focus": {
        "color": "#2d6987"
    },
    "atext-info:hover": {
        "color": "#2d6987"
    },
    "text-success": {
        "color": "#468847"
    },
    "atext-success:focus": {
        "color": "#356635"
    },
    "atext-success:hover": {
        "color": "#356635"
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "h1": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "700",
        "lineHeight": 40,
        "color": "inherit",
        "textRendering": "optimizelegibility",
        "fontSize": 38.5
    },
    "h2": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "700",
        "lineHeight": 40,
        "color": "inherit",
        "textRendering": "optimizelegibility",
        "fontSize": 31.5
    },
    "h3": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "700",
        "lineHeight": 40,
        "color": "inherit",
        "textRendering": "optimizelegibility",
        "fontSize": 24.5
    },
    "h4": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "700",
        "lineHeight": 20,
        "color": "inherit",
        "textRendering": "optimizelegibility",
        "fontSize": 17.5
    },
    "h5": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "700",
        "lineHeight": 20,
        "color": "inherit",
        "textRendering": "optimizelegibility",
        "fontSize": 14
    },
    "h6": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "700",
        "lineHeight": 20,
        "color": "inherit",
        "textRendering": "optimizelegibility",
        "fontSize": 11.9
    },
    "h1 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#999",
        "fontSize": 24.5
    },
    "h2 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#999",
        "fontSize": 17.5
    },
    "h3 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#999",
        "fontSize": 14
    },
    "h4 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#999",
        "fontSize": 14
    },
    "h5 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#999"
    },
    "h6 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#999"
    },
    "page-header": {
        "paddingBottom": 9,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "blockquote p": {
        "marginBottom": 0,
        "fontSize": 17.5,
        "fontWeight": "300",
        "lineHeight": 1.25
    },
    "ol ol": {
        "marginBottom": 0
    },
    "ol ul": {
        "marginBottom": 0
    },
    "ul ol": {
        "marginBottom": 0
    },
    "ul ul": {
        "marginBottom": 0
    },
    "dl": {
        "marginBottom": 20
    },
    "legend": {
        "marginBottom": 20,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "display": "block",
        "width": "100%",
        "fontSize": 21,
        "lineHeight": 40,
        "color": "#333",
        "borderBottom": "1px solid #e5e5e5"
    },
    "preprettyprint": {
        "marginBottom": 20,
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "border": "1px solid #888"
    },
    "ol": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 25
    },
    "ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 25
    },
    "olinline": {
        "marginLeft": 0,
        "listStyle": "none"
    },
    "olunstyled": {
        "marginLeft": 0,
        "listStyle": "none"
    },
    "ulinline": {
        "marginLeft": 0,
        "listStyle": "none"
    },
    "ulunstyled": {
        "marginLeft": 0,
        "listStyle": "none"
    },
    "olinline>li": {
        "display": "inline-block",
        "paddingRight": 5,
        "paddingLeft": 5
    },
    "ulinline>li": {
        "display": "inline-block",
        "paddingRight": 5,
        "paddingLeft": 5
    },
    "dl-horizontal:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "blockquote small": {
        "lineHeight": 20,
        "display": "block",
        "color": "#999"
    },
    "pre": {
        "lineHeight": 22,
        "display": "block",
        "whiteSpace": "pre-wrap",
        "paddingTop": 9.5,
        "paddingRight": 9.5,
        "paddingBottom": 9.5,
        "paddingLeft": 9.5,
        "fontFamily": "Monaco,Menlo,Consolas,\"Courier New\",monospace",
        "fontSize": 13,
        "color": "#333",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "backgroundColor": "#f5f5f5",
        "border": "1px dashed #ccc",
        "background": "#fee9cc"
    },
    "dl-horizontal dt": {
        "float": "left",
        "width": 160,
        "overflow": "hidden",
        "clear": "left",
        "textAlign": "right",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "controls-row:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "dropdown-menu>li>a": {
        "clear": "both",
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "fontWeight": "400",
        "lineHeight": 20,
        "color": "#333",
        "whiteSpace": "nowrap"
    },
    "form-actions:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "form-horizontal control-group:after": {
        "clear": "both",
        "display": "none",
        "lineHeight": 0,
        "content": ""
    },
    "modal-footer:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "nav-pills:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "nav-tabs:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "navbar-form:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "navbar-inner:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "pager:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "thumbnails:after": {
        "clear": "both",
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "pre code": {
        "whiteSpace": "pre-wrap",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "color": "inherit",
        "backgroundColor": "transparent"
    },
    "dl-horizontal dd": {
        "marginLeft": 180
    },
    "hr": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "border": 0,
        "borderTop": "1px solid #eee",
        "borderBottom": "1px solid #fff"
    },
    "abbr[data-original-title]": {
        "cursor": "help",
        "borderBottom": "1px dotted #999"
    },
    "abbr[title]": {
        "cursor": "help",
        "borderBottom": "1px dotted #999"
    },
    "abbrinitialism": {
        "fontSize": "90%",
        "textTransform": "uppercase"
    },
    "blockquote": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "borderLeft": "5px solid #eee"
    },
    "blockquote small:before": {
        "content": "'\\2014 \\00A0'"
    },
    "blockquotepull-right": {
        "float": "right",
        "paddingRight": 15,
        "paddingLeft": 0,
        "borderRight": "5px solid #eee",
        "borderLeft": 0
    },
    "blockquotepull-right p": {
        "textAlign": "right"
    },
    "blockquotepull-right small": {
        "textAlign": "right"
    },
    "blockquotepull-right small:before": {
        "content": "''"
    },
    "blockquotepull-right small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquote:after": {
        "content": ""
    },
    "blockquote:before": {
        "content": ""
    },
    "q:after": {
        "content": ""
    },
    "q:before": {
        "content": ""
    },
    "code": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "Monaco,Menlo,Consolas,\"Courier New\",monospace",
        "fontSize": 12,
        "color": "#d14",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3,
        "whiteSpace": "nowrap",
        "backgroundColor": "#f7f7f9",
        "border": "none"
    },
    "navbar-search search-query": {
        "fontFamily": "\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "paddingTop": 4,
        "paddingRight": 14,
        "paddingBottom": 4,
        "paddingLeft": 14,
        "marginBottom": 0,
        "fontSize": 13,
        "fontWeight": "400",
        "lineHeight": 1,
        "WebkitBorderRadius": 15,
        "MozBorderRadius": 15,
        "borderRadius": 15
    },
    "fieldset": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "pre-scrollable": {
        "maxHeight": 340,
        "overflowY": "scroll"
    },
    "form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "legend small": {
        "fontSize": 15,
        "color": "#999"
    },
    "uneditable-input": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#999",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "width": 206,
        "backgroundColor": "#fcfcfc",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0,0,0,.025)",
        "MozBoxShadow": "inset 0 1px 2px rgba(0,0,0,.025)",
        "boxShadow": "inset 0 1px 2px rgba(0,0,0,.025)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "cursor": "not-allowed",
        "borderColor": "#ccc",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "marginLeft": 0,
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=text]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=password]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=datetime]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=datetime-local]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=date]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=month]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=time]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=week]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=number]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=email]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=url]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=tel]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "input[type=color]": {
        "display": "inline-block",
        "height": 20,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "marginBottom": 10,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#555",
        "verticalAlign": "middle",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border linear .2s,box-shadow linear .2s",
        "MozTransition": "border linear .2s,box-shadow linear .2s",
        "OTransition": "border linear .2s,box-shadow linear .2s",
        "transition": "border linear .2s,box-shadow linear .2s",
        "background": "hsla(0,0%,0%,0)"
    },
    "controls-row checkbox[class*=span]": {
        "paddingTop": 5
    },
    "controls-row radio[class*=span]": {
        "paddingTop": 5
    },
    "controls>checkbox:first-child": {
        "paddingTop": 5
    },
    "controls>radio:first-child": {
        "paddingTop": 5
    },
    "uneditable-input:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=text]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=password]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=datetime]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=datetime-local]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=date]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=month]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=time]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=week]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=number]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=email]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=url]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=tel]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=color]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "input[type=search]:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)"
    },
    "textarea:focus": {
        "borderColor": "rgba(82,168,236,.8)",
        "outline": "dotted thin\\9",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)",
        "boxShadow": "0 0 2px rgba(60,60,60,.5)"
    },
    "input[type=file]": {
        "width": "auto",
        "height": 30,
        "lineHeight": 30
    },
    "input[type=image]": {
        "width": "auto"
    },
    "select[multiple]": {
        "height": "auto"
    },
    "select[size]": {
        "height": "auto"
    },
    "input[type=file]:focus": {
        "outline": "-webkit-focus-ring-color auto 5px",
        "outlineOffset": -2
    },
    "input[type=radio]:focus": {
        "outline": "-webkit-focus-ring-color auto 5px",
        "outlineOffset": -2
    },
    "input[type=checkbox]:focus": {
        "outline": "-webkit-focus-ring-color auto 5px",
        "outlineOffset": -2
    },
    "select:focus": {
        "outline": "-webkit-focus-ring-color auto 5px",
        "outlineOffset": -2
    },
    "uneditable-textarea": {
        "color": "#999",
        "cursor": "not-allowed",
        "backgroundColor": "#fcfcfc",
        "borderColor": "#ccc",
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0,0,0,.025)",
        "MozBoxShadow": "inset 0 1px 2px rgba(0,0,0,.025)",
        "boxShadow": "inset 0 1px 2px rgba(0,0,0,.025)",
        "width": "auto",
        "height": "auto"
    },
    "input:-moz-placeholder": {
        "color": "#999"
    },
    "textarea:-moz-placeholder": {
        "color": "#999"
    },
    "input:-ms-input-placeholder": {
        "color": "#999"
    },
    "textarea:-ms-input-placeholder": {
        "color": "#999"
    },
    "input::-webkit-input-placeholder": {
        "color": "#999"
    },
    "textarea::-webkit-input-placeholder": {
        "color": "#999"
    },
    "checkbox": {
        "minHeight": 20,
        "paddingLeft": 20
    },
    "radio": {
        "minHeight": 20,
        "paddingLeft": 20
    },
    "checkbox input[type=checkbox]": {
        "float": "left",
        "marginLeft": -20
    },
    "radio input[type=radio]": {
        "float": "left",
        "marginLeft": -20
    },
    "checkboxinline": {
        "display": "inline-block",
        "paddingTop": 5,
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "radioinline": {
        "display": "inline-block",
        "paddingTop": 5,
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "checkboxinline+checkboxinline": {
        "marginLeft": 10
    },
    "radioinline+radioinline": {
        "marginLeft": 10
    },
    "input-mini": {
        "width": 60
    },
    "input-small": {
        "width": 90
    },
    "input-medium": {
        "width": 150
    },
    "input-large": {
        "width": 210
    },
    "input-xlarge": {
        "width": 270
    },
    "input-xxlarge": {
        "width": 530
    },
    "row-fluid uneditable-input[class*=span]": {
        "float": "none",
        "marginLeft": 0,
        "display": "inline-block"
    },
    "row-fluid input[class*=span]": {
        "float": "none",
        "marginLeft": 0,
        "display": "inline-block"
    },
    "row-fluid select[class*=span]": {
        "float": "none",
        "marginLeft": 0,
        "display": "inline-block"
    },
    "row-fluid textarea[class*=span]": {
        "float": "none",
        "marginLeft": 0,
        "display": "inline-block"
    },
    "uneditable-input[class*=span]": {
        "float": "none",
        "marginLeft": 0
    },
    "input[class*=span]": {
        "float": "none",
        "marginLeft": 0
    },
    "select[class*=span]": {
        "float": "none",
        "marginLeft": 0
    },
    "textarea[class*=span]": {
        "float": "none",
        "marginLeft": 0
    },
    "input-append uneditable-input[class*=span]": {
        "display": "inline-block"
    },
    "input-append input[class*=span]": {
        "display": "inline-block"
    },
    "input-prepend uneditable-input[class*=span]": {
        "display": "inline-block"
    },
    "input-prepend input[class*=span]": {
        "display": "inline-block"
    },
    "row-fluid input-append [class*=span]": {
        "display": "inline-block"
    },
    "row-fluid input-prepend [class*=span]": {
        "display": "inline-block"
    },
    "controls-row:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "form-actions:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "controls-row [class*=span]+[class*=span]": {
        "marginLeft": 20
    },
    "uneditable-inputspan12": {
        "width": 926
    },
    "inputspan12": {
        "width": 926
    },
    "textareaspan12": {
        "width": 926
    },
    "uneditable-inputspan11": {
        "width": 846
    },
    "inputspan11": {
        "width": 846
    },
    "textareaspan11": {
        "width": 846
    },
    "uneditable-inputspan10": {
        "width": 766
    },
    "inputspan10": {
        "width": 766
    },
    "textareaspan10": {
        "width": 766
    },
    "uneditable-inputspan9": {
        "width": 686
    },
    "inputspan9": {
        "width": 686
    },
    "textareaspan9": {
        "width": 686
    },
    "uneditable-inputspan8": {
        "width": 606
    },
    "inputspan8": {
        "width": 606
    },
    "textareaspan8": {
        "width": 606
    },
    "uneditable-inputspan7": {
        "width": 526
    },
    "inputspan7": {
        "width": 526
    },
    "textareaspan7": {
        "width": 526
    },
    "uneditable-inputspan6": {
        "width": 446
    },
    "inputspan6": {
        "width": 446
    },
    "textareaspan6": {
        "width": 446
    },
    "uneditable-inputspan5": {
        "width": 366
    },
    "inputspan5": {
        "width": 366
    },
    "textareaspan5": {
        "width": 366
    },
    "uneditable-inputspan4": {
        "width": 286
    },
    "inputspan4": {
        "width": 286
    },
    "textareaspan4": {
        "width": 286
    },
    "uneditable-inputspan3": {
        "width": 206
    },
    "inputspan3": {
        "width": 206
    },
    "textareaspan3": {
        "width": 206
    },
    "uneditable-inputspan2": {
        "width": 126
    },
    "inputspan2": {
        "width": 126
    },
    "textareaspan2": {
        "width": 126
    },
    "uneditable-inputspan1": {
        "width": 46
    },
    "inputspan1": {
        "width": 46
    },
    "textareaspan1": {
        "width": 46
    },
    "controls-row [class*=span]": {
        "float": "left"
    },
    "row-fluid controls-row [class*=span]": {
        "float": "left"
    },
    "input[disabled]": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "input[readonly]": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "select[disabled]": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "select[readonly]": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "textarea[disabled]": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "textarea[readonly]": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "input[type=radio][disabled]": {
        "backgroundColor": "transparent"
    },
    "input[type=radio][readonly]": {
        "backgroundColor": "transparent"
    },
    "input[type=checkbox][disabled]": {
        "backgroundColor": "transparent"
    },
    "input[type=checkbox][readonly]": {
        "backgroundColor": "transparent"
    },
    "control-groupwarning checkbox": {
        "color": "#c09853"
    },
    "control-groupwarning control-label": {
        "color": "#c09853"
    },
    "control-groupwarning help-block": {
        "color": "#c09853"
    },
    "control-groupwarning help-inline": {
        "color": "#c09853"
    },
    "control-groupwarning radio": {
        "color": "#c09853"
    },
    "control-groupwarning input": {
        "color": "#c09853",
        "borderColor": "#c09853",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupwarning select": {
        "color": "#c09853",
        "borderColor": "#c09853",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupwarning textarea": {
        "color": "#c09853",
        "borderColor": "#c09853",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupwarning input:focus": {
        "borderColor": "#a47e3c",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e"
    },
    "control-groupwarning select:focus": {
        "borderColor": "#a47e3c",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e"
    },
    "control-groupwarning textarea:focus": {
        "borderColor": "#a47e3c",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #dbc59e"
    },
    "control-groupwarning input-append add-on": {
        "color": "#c09853",
        "backgroundColor": "#fcf8e3",
        "borderColor": "#c09853"
    },
    "control-groupwarning input-prepend add-on": {
        "color": "#c09853",
        "backgroundColor": "#fcf8e3",
        "borderColor": "#c09853"
    },
    "control-grouperror checkbox": {
        "color": "#b94a48"
    },
    "control-grouperror control-label": {
        "color": "#b94a48"
    },
    "control-grouperror help-block": {
        "color": "#b94a48"
    },
    "control-grouperror help-inline": {
        "color": "#b94a48"
    },
    "control-grouperror radio": {
        "color": "#b94a48"
    },
    "control-grouperror input": {
        "color": "#b94a48",
        "borderColor": "#b94a48",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-grouperror select": {
        "color": "#b94a48",
        "borderColor": "#b94a48",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-grouperror textarea": {
        "color": "#b94a48",
        "borderColor": "#b94a48",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-grouperror input:focus": {
        "borderColor": "#953b39",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392"
    },
    "control-grouperror select:focus": {
        "borderColor": "#953b39",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392"
    },
    "control-grouperror textarea:focus": {
        "borderColor": "#953b39",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #d59392"
    },
    "control-grouperror input-append add-on": {
        "color": "#b94a48",
        "backgroundColor": "#f2dede",
        "borderColor": "#b94a48"
    },
    "control-grouperror input-prepend add-on": {
        "color": "#b94a48",
        "backgroundColor": "#f2dede",
        "borderColor": "#b94a48"
    },
    "control-groupsuccess checkbox": {
        "color": "#468847"
    },
    "control-groupsuccess control-label": {
        "color": "#468847"
    },
    "control-groupsuccess help-block": {
        "color": "#468847"
    },
    "control-groupsuccess help-inline": {
        "color": "#468847"
    },
    "control-groupsuccess radio": {
        "color": "#468847"
    },
    "control-groupsuccess input": {
        "color": "#468847",
        "borderColor": "#468847",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupsuccess select": {
        "color": "#468847",
        "borderColor": "#468847",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupsuccess textarea": {
        "color": "#468847",
        "borderColor": "#468847",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupsuccess input:focus": {
        "borderColor": "#356635",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b"
    },
    "control-groupsuccess select:focus": {
        "borderColor": "#356635",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b"
    },
    "control-groupsuccess textarea:focus": {
        "borderColor": "#356635",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7aba7b"
    },
    "control-groupsuccess input-append add-on": {
        "color": "#468847",
        "backgroundColor": "#dff0d8",
        "borderColor": "#468847"
    },
    "control-groupsuccess input-prepend add-on": {
        "color": "#468847",
        "backgroundColor": "#dff0d8",
        "borderColor": "#468847"
    },
    "control-groupinfo checkbox": {
        "color": "#3a87ad"
    },
    "control-groupinfo control-label": {
        "color": "#3a87ad"
    },
    "control-groupinfo help-block": {
        "color": "#3a87ad"
    },
    "control-groupinfo help-inline": {
        "color": "#3a87ad"
    },
    "control-groupinfo radio": {
        "color": "#3a87ad"
    },
    "control-groupinfo input": {
        "color": "#3a87ad",
        "borderColor": "#3a87ad",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupinfo select": {
        "color": "#3a87ad",
        "borderColor": "#3a87ad",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupinfo textarea": {
        "color": "#3a87ad",
        "borderColor": "#3a87ad",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "control-groupinfo input:focus": {
        "borderColor": "#2d6987",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3"
    },
    "control-groupinfo select:focus": {
        "borderColor": "#2d6987",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3"
    },
    "control-groupinfo textarea:focus": {
        "borderColor": "#2d6987",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #7ab5d3"
    },
    "control-groupinfo input-append add-on": {
        "color": "#3a87ad",
        "backgroundColor": "#d9edf7",
        "borderColor": "#3a87ad"
    },
    "control-groupinfo input-prepend add-on": {
        "color": "#3a87ad",
        "backgroundColor": "#d9edf7",
        "borderColor": "#3a87ad"
    },
    "input:focus:invalid": {
        "color": "#b94a48",
        "borderColor": "#ee5f5b"
    },
    "select:focus:invalid": {
        "color": "#b94a48",
        "borderColor": "#ee5f5b"
    },
    "textarea:focus:invalid": {
        "color": "#b94a48",
        "borderColor": "#ee5f5b"
    },
    "input:focus:invalid:focus": {
        "borderColor": "#e9322d",
        "WebkitBoxShadow": "0 0 6px #f8b9b7",
        "MozBoxShadow": "0 0 6px #f8b9b7",
        "boxShadow": "0 0 6px #f8b9b7"
    },
    "select:focus:invalid:focus": {
        "borderColor": "#e9322d",
        "WebkitBoxShadow": "0 0 6px #f8b9b7",
        "MozBoxShadow": "0 0 6px #f8b9b7",
        "boxShadow": "0 0 6px #f8b9b7"
    },
    "textarea:focus:invalid:focus": {
        "borderColor": "#e9322d",
        "WebkitBoxShadow": "0 0 6px #f8b9b7",
        "MozBoxShadow": "0 0 6px #f8b9b7",
        "boxShadow": "0 0 6px #f8b9b7"
    },
    "form-actions": {
        "paddingTop": 19,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginTop": 20,
        "marginBottom": 20,
        "backgroundColor": "#fff",
        "borderTop": "none",
        "maxHeight": 40
    },
    "help-block": {
        "color": "#595959",
        "display": "block",
        "marginBottom": 10
    },
    "help-inline": {
        "color": "#595959",
        "display": "inline-block",
        "paddingLeft": 5,
        "verticalAlign": "middle"
    },
    "input-append": {
        "display": "inline-block",
        "marginBottom": 10,
        "fontSize": 0,
        "whiteSpace": "nowrap",
        "verticalAlign": "middle"
    },
    "input-prepend": {
        "display": "inline-block",
        "marginBottom": 10,
        "fontSize": 0,
        "whiteSpace": "nowrap",
        "verticalAlign": "middle"
    },
    "input-append dropdown-menu": {
        "fontSize": 14
    },
    "input-append popover": {
        "fontSize": 14
    },
    "input-append uneditable-input": {
        "fontSize": 14,
        "position": "relative",
        "marginBottom": 0,
        "verticalAlign": "top",
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "input-append input": {
        "fontSize": 14,
        "position": "relative",
        "marginBottom": 0,
        "verticalAlign": "top",
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "input-append select": {
        "fontSize": 14,
        "position": "relative",
        "marginBottom": 0,
        "verticalAlign": "top",
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "input-prepend dropdown-menu": {
        "fontSize": 14
    },
    "input-prepend popover": {
        "fontSize": 14
    },
    "input-prepend uneditable-input": {
        "fontSize": 14,
        "position": "relative",
        "marginBottom": 0,
        "verticalAlign": "top",
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-prepend input": {
        "fontSize": 14,
        "position": "relative",
        "marginBottom": 0,
        "verticalAlign": "top",
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-prepend select": {
        "fontSize": 14,
        "position": "relative",
        "marginBottom": 0,
        "verticalAlign": "top",
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-append add-on": {
        "display": "inline-block",
        "width": "auto",
        "height": 20,
        "minWidth": 16,
        "paddingTop": 4,
        "paddingRight": 5,
        "paddingBottom": 4,
        "paddingLeft": 5,
        "fontSize": 14,
        "fontWeight": "400",
        "lineHeight": 20,
        "textAlign": "center",
        "textShadow": "0 1px 0 #fff",
        "backgroundColor": "#eee",
        "border": "1px solid #ccc",
        "verticalAlign": "top",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "marginLeft": -1
    },
    "input-prepend add-on": {
        "display": "inline-block",
        "width": "auto",
        "height": 20,
        "minWidth": 16,
        "paddingTop": 4,
        "paddingRight": 5,
        "paddingBottom": 4,
        "paddingLeft": 5,
        "fontSize": 14,
        "fontWeight": "400",
        "lineHeight": 20,
        "textAlign": "center",
        "textShadow": "0 1px 0 #fff",
        "backgroundColor": "#eee",
        "border": "1px solid #ccc",
        "verticalAlign": "top",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "marginRight": -1
    },
    "input-append btn": {
        "verticalAlign": "top",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "marginLeft": -1
    },
    "input-append btn-group>dropdown-toggle": {
        "verticalAlign": "top",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "input-prepend btn": {
        "verticalAlign": "top",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "marginRight": -1
    },
    "input-prepend btn-group>dropdown-toggle": {
        "verticalAlign": "top",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "input-append active": {
        "backgroundColor": "#a9dba9",
        "borderColor": "#46a546"
    },
    "input-prepend active": {
        "backgroundColor": "#a9dba9",
        "borderColor": "#46a546"
    },
    "input-prepend add-on:first-child": {
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "input-prepend btn:first-child": {
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "input-append uneditable-input+btn-group btn:last-child": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-append input+btn-group btn:last-child": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-append select+btn-group btn:last-child": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-append btn-group": {
        "marginLeft": -1
    },
    "input-append add-on:last-child": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-append btn-group:last-child>dropdown-toggle": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-append btn:last-child": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-prependinput-append uneditable-input": {
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "input-prependinput-append input": {
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "input-prependinput-append select": {
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "input-prependinput-append uneditable-input+btn-group btn": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-prependinput-append input+btn-group btn": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-prependinput-append select+btn-group btn": {
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-prependinput-append add-on:first-child": {
        "marginRight": -1,
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "input-prependinput-append btn:first-child": {
        "marginRight": -1,
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "input-prependinput-append add-on:last-child": {
        "marginLeft": -1,
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-prependinput-append btn:last-child": {
        "marginLeft": -1,
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "input-prependinput-append btn-group:first-child": {
        "marginLeft": 0
    },
    "inputsearch-query": {
        "paddingRight": "4px\\9",
        "paddingLeft": "4px\\9",
        "marginBottom": 0,
        "WebkitBorderRadius": 15,
        "MozBorderRadius": 15,
        "borderRadius": 15
    },
    "form-search input-append search-query": {
        "WebkitBorderRadius": "14px 0 0 14px",
        "MozBorderRadius": "14px 0 0 14px",
        "borderRadius": "14px 0 0 14px"
    },
    "form-search input-append btn": {
        "WebkitBorderRadius": "0 14px 14px 0",
        "MozBorderRadius": "0 14px 14px 0",
        "borderRadius": "0 14px 14px 0"
    },
    "form-search input-prepend search-query": {
        "WebkitBorderRadius": "0 14px 14px 0",
        "MozBorderRadius": "0 14px 14px 0",
        "borderRadius": "0 14px 14px 0"
    },
    "form-search input-prepend btn": {
        "WebkitBorderRadius": "14px 0 0 14px",
        "MozBorderRadius": "14px 0 0 14px",
        "borderRadius": "14px 0 0 14px"
    },
    "form-horizontal help-inline": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-horizontal input-append": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-horizontal input-prepend": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-horizontal uneditable-input": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-horizontal input": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-horizontal select": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-horizontal textarea": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline help-inline": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline input-append": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline input-prepend": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline uneditable-input": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline input": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline select": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline textarea": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search help-inline": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search input-append": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search input-prepend": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search uneditable-input": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search input": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search select": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search textarea": {
        "display": "inline-block",
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-horizontal hide": {
        "display": "none"
    },
    "form-inline hide": {
        "display": "none"
    },
    "form-search hide": {
        "display": "none"
    },
    "form-inline btn-group": {
        "display": "inline-block"
    },
    "form-inline label": {
        "display": "inline-block"
    },
    "form-search btn-group": {
        "display": "inline-block"
    },
    "form-search label": {
        "display": "inline-block"
    },
    "form-inline checkbox": {
        "paddingLeft": 0,
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline radio": {
        "paddingLeft": 0,
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search checkbox": {
        "paddingLeft": 0,
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-search radio": {
        "paddingLeft": 0,
        "marginBottom": 0,
        "verticalAlign": "middle"
    },
    "form-inline checkbox input[type=checkbox]": {
        "float": "left",
        "marginRight": 3,
        "marginLeft": 0
    },
    "form-inline radio input[type=radio]": {
        "float": "left",
        "marginRight": 3,
        "marginLeft": 0
    },
    "form-search checkbox input[type=checkbox]": {
        "float": "left",
        "marginRight": 3,
        "marginLeft": 0
    },
    "form-search radio input[type=radio]": {
        "float": "left",
        "marginRight": 3,
        "marginLeft": 0
    },
    "control-group": {
        "marginBottom": 10
    },
    "legend+control-group": {
        "marginTop": 20,
        "WebkitMarginTopCollapse": "separate"
    },
    "form-horizontal control-group": {
        "marginBottom": 20
    },
    "form-horizontal control-group:before": {
        "display": "none",
        "lineHeight": 0,
        "content": ""
    },
    "form-horizontal control-label": {
        "float": "left",
        "width": 160,
        "paddingTop": 5,
        "textAlign": "right"
    },
    "form-horizontal controls": {
        "marginLeft": 180
    },
    "form-horizontal help-block": {
        "marginBottom": 0
    },
    "form-horizontal input-append+help-block": {
        "marginTop": 10
    },
    "form-horizontal input-prepend+help-block": {
        "marginTop": 10
    },
    "form-horizontal uneditable-input+help-block": {
        "marginTop": 10
    },
    "form-horizontal input+help-block": {
        "marginTop": 10
    },
    "form-horizontal select+help-block": {
        "marginTop": 10
    },
    "form-horizontal textarea+help-block": {
        "marginTop": 10
    },
    "form-horizontal form-actions": {
        "paddingLeft": 180
    },
    "table": {
        "maxWidth": "100%",
        "backgroundColor": "transparent",
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "width": "100%",
        "marginBottom": 20
    },
    "table td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 20,
        "textAlign": "left",
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 20,
        "textAlign": "left",
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd",
        "fontWeight": "700"
    },
    "btn": {
        "textAlign": "center",
        "display": "inline-block",
        "backgroundRepeat": "repeat-x",
        "paddingTop": 3,
        "paddingRight": 14,
        "paddingBottom": 3,
        "paddingLeft": 14,
        "marginBottom": 0,
        "fontSize": 14,
        "lineHeight": 20,
        "color": "#333",
        "textShadow": "0 1px 1px rgba(255,255,255,.75)",
        "verticalAlign": "middle",
        "cursor": "pointer",
        "backgroundColor": "#f5f5f5",
        "backgroundImage": "linear-gradient(to bottom,#fff,#e6e6e6)",
        "border": "1px solid #ccc",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "borderBottomColor": "#b3b3b3",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)",
        "MozBoxShadow": "inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)"
    },
    "pagination-centered": {
        "textAlign": "center"
    },
    "table thead th": {
        "verticalAlign": "bottom"
    },
    "table caption+thead tr:first-child td": {
        "borderTop": 0
    },
    "table caption+thead tr:first-child th": {
        "borderTop": 0
    },
    "table colgroup+thead tr:first-child td": {
        "borderTop": 0
    },
    "table colgroup+thead tr:first-child th": {
        "borderTop": 0
    },
    "table thead:first-child tr:first-child td": {
        "borderTop": 0
    },
    "table thead:first-child tr:first-child th": {
        "borderTop": 0
    },
    "table tbody+tbody": {
        "borderTop": "2px solid #ddd"
    },
    "table table": {
        "backgroundColor": "#fff"
    },
    "table-condensed td": {
        "paddingTop": 4,
        "paddingRight": 5,
        "paddingBottom": 4,
        "paddingLeft": 5
    },
    "table-condensed th": {
        "paddingTop": 4,
        "paddingRight": 5,
        "paddingBottom": 4,
        "paddingLeft": 5
    },
    "table-bordered": {
        "border": "1px solid #ddd",
        "borderCollapse": "separate",
        "borderLeft": 0,
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4
    },
    "table-bordered td": {
        "borderLeft": "1px solid #ddd"
    },
    "table-bordered th": {
        "borderLeft": "1px solid #ddd"
    },
    "table-bordered caption+tbody tr:first-child td": {
        "borderTop": 0
    },
    "table-bordered caption+tbody tr:first-child th": {
        "borderTop": 0
    },
    "table-bordered caption+thead tr:first-child th": {
        "borderTop": 0
    },
    "table-bordered colgroup+tbody tr:first-child td": {
        "borderTop": 0
    },
    "table-bordered colgroup+tbody tr:first-child th": {
        "borderTop": 0
    },
    "table-bordered colgroup+thead tr:first-child th": {
        "borderTop": 0
    },
    "table-bordered tbody:first-child tr:first-child td": {
        "borderTop": 0
    },
    "table-bordered tbody:first-child tr:first-child th": {
        "borderTop": 0
    },
    "table-bordered thead:first-child tr:first-child th": {
        "borderTop": 0
    },
    "table-bordered tbody:first-child tr:first-child>td:first-child": {
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusTopleft": 4
    },
    "table-bordered tbody:first-child tr:first-child>th:first-child": {
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusTopleft": 4
    },
    "table-bordered thead:first-child tr:first-child>th:first-child": {
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusTopleft": 4
    },
    "table-bordered tbody:first-child tr:first-child>td:last-child": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "MozBorderRadiusTopright": 4
    },
    "table-bordered tbody:first-child tr:first-child>th:last-child": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "MozBorderRadiusTopright": 4
    },
    "table-bordered thead:first-child tr:first-child>th:last-child": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "MozBorderRadiusTopright": 4
    },
    "table-bordered tbody:last-child tr:last-child>td:first-child": {
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "MozBorderRadiusBottomleft": 4
    },
    "table-bordered tbody:last-child tr:last-child>th:first-child": {
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "MozBorderRadiusBottomleft": 4
    },
    "table-bordered tfoot:last-child tr:last-child>td:first-child": {
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "MozBorderRadiusBottomleft": 4
    },
    "table-bordered tfoot:last-child tr:last-child>th:first-child": {
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "MozBorderRadiusBottomleft": 4
    },
    "table-bordered thead:last-child tr:last-child>th:first-child": {
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "MozBorderRadiusBottomleft": 4
    },
    "table-bordered tbody:last-child tr:last-child>td:last-child": {
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusBottomright": 4
    },
    "table-bordered tbody:last-child tr:last-child>th:last-child": {
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusBottomright": 4
    },
    "table-bordered tfoot:last-child tr:last-child>td:last-child": {
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusBottomright": 4
    },
    "table-bordered tfoot:last-child tr:last-child>th:last-child": {
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusBottomright": 4
    },
    "table-bordered thead:last-child tr:last-child>th:last-child": {
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusBottomright": 4
    },
    "table-bordered tfoot+tbody:last-child tr:last-child td:first-child": {
        "WebkitBorderBottomLeftRadius": 0,
        "borderBottomLeftRadius": 0,
        "MozBorderRadiusBottomleft": 0
    },
    "table-bordered tfoot+tbody:last-child tr:last-child td:last-child": {
        "WebkitBorderBottomRightRadius": 0,
        "borderBottomRightRadius": 0,
        "MozBorderRadiusBottomright": 0
    },
    "table-bordered caption+tbody tr:first-child td:first-child": {
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusTopleft": 4
    },
    "table-bordered caption+thead tr:first-child th:first-child": {
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusTopleft": 4
    },
    "table-bordered colgroup+tbody tr:first-child td:first-child": {
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusTopleft": 4
    },
    "table-bordered colgroup+thead tr:first-child th:first-child": {
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusTopleft": 4
    },
    "table-bordered caption+tbody tr:first-child td:last-child": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "MozBorderRadiusTopright": 4
    },
    "table-bordered caption+thead tr:first-child th:last-child": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "MozBorderRadiusTopright": 4
    },
    "table-bordered colgroup+tbody tr:first-child td:last-child": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "MozBorderRadiusTopright": 4
    },
    "table-bordered colgroup+thead tr:first-child th:last-child": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "MozBorderRadiusTopright": 4
    },
    "table-striped tbody>tr:nth-child(odd)>td": {
        "backgroundColor": "#f9f9f9"
    },
    "table-striped tbody>tr:nth-child(odd)>th": {
        "backgroundColor": "#f9f9f9"
    },
    "table-hover tbody tr:hover>td": {
        "backgroundColor": "#f5f5f5"
    },
    "table-hover tbody tr:hover>th": {
        "backgroundColor": "#f5f5f5"
    },
    "row-fluid table td[class*=span]": {
        "display": "table-cell",
        "float": "none",
        "marginLeft": 0
    },
    "row-fluid table th[class*=span]": {
        "display": "table-cell",
        "float": "none",
        "marginLeft": 0
    },
    "table td[class*=span]": {
        "display": "table-cell",
        "float": "none",
        "marginLeft": 0
    },
    "table th[class*=span]": {
        "display": "table-cell",
        "float": "none",
        "marginLeft": 0
    },
    "table tdspan1": {
        "float": "none",
        "width": 44,
        "marginLeft": 0
    },
    "table thspan1": {
        "float": "none",
        "width": 44,
        "marginLeft": 0
    },
    "table tdspan2": {
        "float": "none",
        "width": 124,
        "marginLeft": 0
    },
    "table thspan2": {
        "float": "none",
        "width": 124,
        "marginLeft": 0
    },
    "table tdspan3": {
        "float": "none",
        "width": 204,
        "marginLeft": 0
    },
    "table thspan3": {
        "float": "none",
        "width": 204,
        "marginLeft": 0
    },
    "table tdspan4": {
        "float": "none",
        "width": 284,
        "marginLeft": 0
    },
    "table thspan4": {
        "float": "none",
        "width": 284,
        "marginLeft": 0
    },
    "table tdspan5": {
        "float": "none",
        "width": 364,
        "marginLeft": 0
    },
    "table thspan5": {
        "float": "none",
        "width": 364,
        "marginLeft": 0
    },
    "table tdspan6": {
        "float": "none",
        "width": 444,
        "marginLeft": 0
    },
    "table thspan6": {
        "float": "none",
        "width": 444,
        "marginLeft": 0
    },
    "table tdspan7": {
        "float": "none",
        "width": 524,
        "marginLeft": 0
    },
    "table thspan7": {
        "float": "none",
        "width": 524,
        "marginLeft": 0
    },
    "table tdspan8": {
        "float": "none",
        "width": 604,
        "marginLeft": 0
    },
    "table thspan8": {
        "float": "none",
        "width": 604,
        "marginLeft": 0
    },
    "table tdspan9": {
        "float": "none",
        "width": 684,
        "marginLeft": 0
    },
    "table thspan9": {
        "float": "none",
        "width": 684,
        "marginLeft": 0
    },
    "table tdspan10": {
        "float": "none",
        "width": 764,
        "marginLeft": 0
    },
    "table thspan10": {
        "float": "none",
        "width": 764,
        "marginLeft": 0
    },
    "table tdspan11": {
        "float": "none",
        "width": 844,
        "marginLeft": 0
    },
    "table thspan11": {
        "float": "none",
        "width": 844,
        "marginLeft": 0
    },
    "table tdspan12": {
        "float": "none",
        "width": 924,
        "marginLeft": 0
    },
    "table thspan12": {
        "float": "none",
        "width": 924,
        "marginLeft": 0
    },
    "table tbody trsuccess>td": {
        "backgroundColor": "#dff0d8"
    },
    "table tbody trerror>td": {
        "backgroundColor": "#f2dede"
    },
    "table tbody trwarning>td": {
        "backgroundColor": "#fcf8e3"
    },
    "table tbody trinfo>td": {
        "backgroundColor": "#d9edf7"
    },
    "table-hover tbody trsuccess:hover>td": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover tbody trerror:hover>td": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover tbody trwarning:hover>td": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover tbody trinfo:hover>td": {
        "backgroundColor": "#c4e3f3"
    },
    "[class*=\" icon-\"]": {
        "display": "inline-block",
        "width": 14,
        "height": 14,
        "marginTop": 1,
        "lineHeight": 14,
        "verticalAlign": "text-top",
        "backgroundImage": "url(/public/img/glyphicons-halflings.73aebe0a.hashed.png)",
        "backgroundPosition": "14px 14px",
        "backgroundRepeat": "no-repeat"
    },
    "[class^=icon-]": {
        "display": "inline-block",
        "width": 14,
        "height": 14,
        "marginTop": 1,
        "lineHeight": 14,
        "verticalAlign": "text-top",
        "backgroundImage": "url(/public/img/glyphicons-halflings.73aebe0a.hashed.png)",
        "backgroundPosition": "14px 14px",
        "backgroundRepeat": "no-repeat"
    },
    "dropdown-menu>active>a>[class*=\" icon-\"]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-menu>active>a>[class^=icon-]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-menu>li>a:focus>[class*=\" icon-\"]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-menu>li>a:focus>[class^=icon-]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-menu>li>a:hover>[class*=\" icon-\"]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-menu>li>a:hover>[class^=icon-]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-submenu:focus>a>[class*=\" icon-\"]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-submenu:focus>a>[class^=icon-]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-submenu:hover>a>[class*=\" icon-\"]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "dropdown-submenu:hover>a>[class^=icon-]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "icon-white": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "nav-list>active>a>[class*=\" icon-\"]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "nav-list>active>a>[class^=icon-]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "nav-pills>active>a>[class*=\" icon-\"]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "nav-pills>active>a>[class^=icon-]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "navbar-inverse nav>active>a>[class*=\" icon-\"]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "navbar-inverse nav>active>a>[class^=icon-]": {
        "backgroundImage": "url(/public/img/glyphicons-halflings-white.f56470fd.hashed.png)"
    },
    "icon-glass": {
        "backgroundPosition": "0 0"
    },
    "icon-music": {
        "backgroundPosition": "-24px 0"
    },
    "icon-search": {
        "backgroundPosition": "-48px 0"
    },
    "icon-envelope": {
        "backgroundPosition": "-72px 0"
    },
    "icon-heart": {
        "backgroundPosition": "-96px 0"
    },
    "icon-star": {
        "backgroundPosition": "-120px 0"
    },
    "icon-star-empty": {
        "backgroundPosition": "-144px 0"
    },
    "icon-user": {
        "backgroundPosition": "-168px 0"
    },
    "icon-film": {
        "backgroundPosition": "-192px 0"
    },
    "icon-th-large": {
        "backgroundPosition": "-216px 0"
    },
    "icon-th": {
        "backgroundPosition": "-240px 0"
    },
    "icon-th-list": {
        "backgroundPosition": "-264px 0"
    },
    "icon-ok": {
        "backgroundPosition": "-288px 0"
    },
    "icon-remove": {
        "backgroundPosition": "-312px 0"
    },
    "icon-zoom-in": {
        "backgroundPosition": "-336px 0"
    },
    "icon-zoom-out": {
        "backgroundPosition": "-360px 0"
    },
    "icon-off": {
        "backgroundPosition": "-384px 0"
    },
    "icon-signal": {
        "backgroundPosition": "-408px 0"
    },
    "icon-cog": {
        "backgroundPosition": "-432px 0"
    },
    "icon-trash": {
        "backgroundPosition": "-456px 0"
    },
    "icon-home": {
        "backgroundPosition": "0 -24px"
    },
    "icon-file": {
        "backgroundPosition": "-24px -24px"
    },
    "icon-time": {
        "backgroundPosition": "-48px -24px"
    },
    "icon-road": {
        "backgroundPosition": "-72px -24px"
    },
    "icon-download-alt": {
        "backgroundPosition": "-96px -24px"
    },
    "icon-download": {
        "backgroundPosition": "-120px -24px"
    },
    "icon-upload": {
        "backgroundPosition": "-144px -24px"
    },
    "icon-inbox": {
        "backgroundPosition": "-168px -24px"
    },
    "icon-play-circle": {
        "backgroundPosition": "-192px -24px"
    },
    "icon-repeat": {
        "backgroundPosition": "-216px -24px"
    },
    "icon-refresh": {
        "backgroundPosition": "-240px -24px"
    },
    "icon-list-alt": {
        "backgroundPosition": "-264px -24px"
    },
    "icon-lock": {
        "backgroundPosition": "-287px -24px"
    },
    "icon-flag": {
        "backgroundPosition": "-312px -24px"
    },
    "icon-headphones": {
        "backgroundPosition": "-336px -24px"
    },
    "icon-volume-off": {
        "backgroundPosition": "-360px -24px"
    },
    "icon-volume-down": {
        "backgroundPosition": "-384px -24px"
    },
    "icon-volume-up": {
        "backgroundPosition": "-408px -24px"
    },
    "icon-qrcode": {
        "backgroundPosition": "-432px -24px"
    },
    "icon-barcode": {
        "backgroundPosition": "-456px -24px"
    },
    "icon-tag": {
        "backgroundPosition": "0 -48px"
    },
    "icon-tags": {
        "backgroundPosition": "-25px -48px"
    },
    "icon-book": {
        "backgroundPosition": "-48px -48px"
    },
    "icon-bookmark": {
        "backgroundPosition": "-72px -48px"
    },
    "icon-print": {
        "backgroundPosition": "-96px -48px"
    },
    "icon-camera": {
        "backgroundPosition": "-120px -48px"
    },
    "icon-font": {
        "backgroundPosition": "-144px -48px"
    },
    "icon-bold": {
        "backgroundPosition": "-167px -48px"
    },
    "icon-italic": {
        "backgroundPosition": "-192px -48px"
    },
    "icon-text-height": {
        "backgroundPosition": "-216px -48px"
    },
    "icon-text-width": {
        "backgroundPosition": "-240px -48px"
    },
    "icon-align-left": {
        "backgroundPosition": "-264px -48px"
    },
    "icon-align-center": {
        "backgroundPosition": "-288px -48px"
    },
    "icon-align-right": {
        "backgroundPosition": "-312px -48px"
    },
    "icon-align-justify": {
        "backgroundPosition": "-336px -48px"
    },
    "icon-list": {
        "backgroundPosition": "-360px -48px"
    },
    "icon-indent-left": {
        "backgroundPosition": "-384px -48px"
    },
    "icon-indent-right": {
        "backgroundPosition": "-408px -48px"
    },
    "icon-facetime-video": {
        "backgroundPosition": "-432px -48px"
    },
    "icon-picture": {
        "backgroundPosition": "-456px -48px"
    },
    "icon-pencil": {
        "backgroundPosition": "0 -72px"
    },
    "icon-map-marker": {
        "backgroundPosition": "-24px -72px"
    },
    "icon-adjust": {
        "backgroundPosition": "-48px -72px"
    },
    "icon-tint": {
        "backgroundPosition": "-72px -72px"
    },
    "icon-edit": {
        "backgroundPosition": "-96px -72px"
    },
    "icon-share": {
        "backgroundPosition": "-120px -72px"
    },
    "icon-check": {
        "backgroundPosition": "-144px -72px"
    },
    "icon-move": {
        "backgroundPosition": "-168px -72px"
    },
    "icon-step-backward": {
        "backgroundPosition": "-192px -72px"
    },
    "icon-fast-backward": {
        "backgroundPosition": "-216px -72px"
    },
    "icon-backward": {
        "backgroundPosition": "-240px -72px"
    },
    "icon-play": {
        "backgroundPosition": "-264px -72px"
    },
    "icon-pause": {
        "backgroundPosition": "-288px -72px"
    },
    "icon-stop": {
        "backgroundPosition": "-312px -72px"
    },
    "icon-forward": {
        "backgroundPosition": "-336px -72px"
    },
    "icon-fast-forward": {
        "backgroundPosition": "-360px -72px"
    },
    "icon-step-forward": {
        "backgroundPosition": "-384px -72px"
    },
    "icon-eject": {
        "backgroundPosition": "-408px -72px"
    },
    "icon-chevron-left": {
        "backgroundPosition": "-432px -72px"
    },
    "icon-chevron-right": {
        "backgroundPosition": "-456px -72px"
    },
    "icon-plus-sign": {
        "backgroundPosition": "0 -96px"
    },
    "icon-minus-sign": {
        "backgroundPosition": "-24px -96px"
    },
    "icon-remove-sign": {
        "backgroundPosition": "-48px -96px"
    },
    "icon-ok-sign": {
        "backgroundPosition": "-72px -96px"
    },
    "icon-question-sign": {
        "backgroundPosition": "-96px -96px"
    },
    "icon-info-sign": {
        "backgroundPosition": "-120px -96px"
    },
    "icon-screenshot": {
        "backgroundPosition": "-144px -96px"
    },
    "icon-remove-circle": {
        "backgroundPosition": "-168px -96px"
    },
    "icon-ok-circle": {
        "backgroundPosition": "-192px -96px"
    },
    "icon-ban-circle": {
        "backgroundPosition": "-216px -96px"
    },
    "icon-arrow-left": {
        "backgroundPosition": "-240px -96px"
    },
    "icon-arrow-right": {
        "backgroundPosition": "-264px -96px"
    },
    "icon-arrow-up": {
        "backgroundPosition": "-289px -96px"
    },
    "icon-arrow-down": {
        "backgroundPosition": "-312px -96px"
    },
    "icon-share-alt": {
        "backgroundPosition": "-336px -96px"
    },
    "icon-resize-full": {
        "backgroundPosition": "-360px -96px"
    },
    "icon-resize-small": {
        "backgroundPosition": "-384px -96px"
    },
    "icon-plus": {
        "backgroundPosition": "-408px -96px"
    },
    "icon-minus": {
        "backgroundPosition": "-433px -96px"
    },
    "icon-asterisk": {
        "backgroundPosition": "-456px -96px"
    },
    "icon-exclamation-sign": {
        "backgroundPosition": "0 -120px"
    },
    "icon-gift": {
        "backgroundPosition": "-24px -120px"
    },
    "icon-leaf": {
        "backgroundPosition": "-48px -120px"
    },
    "icon-fire": {
        "backgroundPosition": "-72px -120px"
    },
    "icon-eye-open": {
        "backgroundPosition": "-96px -120px"
    },
    "icon-eye-close": {
        "backgroundPosition": "-120px -120px"
    },
    "icon-warning-sign": {
        "backgroundPosition": "-144px -120px"
    },
    "icon-plane": {
        "backgroundPosition": "-168px -120px"
    },
    "icon-calendar": {
        "backgroundPosition": "-192px -120px"
    },
    "icon-random": {
        "width": 16,
        "backgroundPosition": "-216px -120px"
    },
    "icon-comment": {
        "backgroundPosition": "-240px -120px"
    },
    "icon-magnet": {
        "backgroundPosition": "-264px -120px"
    },
    "icon-chevron-up": {
        "backgroundPosition": "-288px -120px"
    },
    "icon-chevron-down": {
        "backgroundPosition": "-313px -119px"
    },
    "icon-retweet": {
        "backgroundPosition": "-336px -120px"
    },
    "icon-shopping-cart": {
        "backgroundPosition": "-360px -120px"
    },
    "icon-folder-close": {
        "width": 16,
        "backgroundPosition": "-384px -120px"
    },
    "icon-folder-open": {
        "width": 16,
        "backgroundPosition": "-408px -120px"
    },
    "icon-resize-vertical": {
        "backgroundPosition": "-432px -119px"
    },
    "icon-resize-horizontal": {
        "backgroundPosition": "-456px -118px"
    },
    "icon-hdd": {
        "backgroundPosition": "0 -144px"
    },
    "icon-bullhorn": {
        "backgroundPosition": "-24px -144px"
    },
    "icon-bell": {
        "backgroundPosition": "-48px -144px"
    },
    "icon-certificate": {
        "backgroundPosition": "-72px -144px"
    },
    "icon-thumbs-up": {
        "backgroundPosition": "-96px -144px"
    },
    "icon-thumbs-down": {
        "backgroundPosition": "-120px -144px"
    },
    "icon-hand-right": {
        "backgroundPosition": "-144px -144px"
    },
    "icon-hand-left": {
        "backgroundPosition": "-168px -144px"
    },
    "icon-hand-up": {
        "backgroundPosition": "-192px -144px"
    },
    "icon-hand-down": {
        "backgroundPosition": "-216px -144px"
    },
    "icon-circle-arrow-right": {
        "backgroundPosition": "-240px -144px"
    },
    "icon-circle-arrow-left": {
        "backgroundPosition": "-264px -144px"
    },
    "icon-circle-arrow-up": {
        "backgroundPosition": "-288px -144px"
    },
    "icon-circle-arrow-down": {
        "backgroundPosition": "-312px -144px"
    },
    "icon-globe": {
        "backgroundPosition": "-336px -144px"
    },
    "icon-wrench": {
        "backgroundPosition": "-360px -144px"
    },
    "icon-tasks": {
        "backgroundPosition": "-384px -144px"
    },
    "icon-filter": {
        "backgroundPosition": "-408px -144px"
    },
    "icon-briefcase": {
        "backgroundPosition": "-432px -144px"
    },
    "icon-fullscreen": {
        "backgroundPosition": "-456px -144px"
    },
    "dropdown-toggle:active": {
        "outline": 0
    },
    "open dropdown-toggle": {
        "outline": 0
    },
    "caret": {
        "display": "inline-block",
        "width": 0,
        "height": 0,
        "verticalAlign": "top",
        "borderTop": "4px solid #000",
        "borderRight": "4px solid transparent",
        "borderLeft": "4px solid transparent",
        "content": ""
    },
    "dropdown caret": {
        "marginTop": 8,
        "marginLeft": 2
    },
    "alert close": {
        "position": "relative",
        "top": -2,
        "right": -21,
        "lineHeight": 20
    },
    "btn-group": {
        "position": "relative",
        "display": "inline-block",
        "fontSize": 0,
        "whiteSpace": "nowrap",
        "verticalAlign": "middle"
    },
    "btn-group>btn": {
        "position": "relative",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "fontSize": 14
    },
    "collapse": {
        "position": "relative",
        "height": 0,
        "overflow": "hidden",
        "WebkitTransition": "height .35s ease",
        "MozTransition": "height .35s ease",
        "OTransition": "height .35s ease",
        "transition": "height .35s ease"
    },
    "dropdown-submenu": {
        "position": "relative"
    },
    "navbar-search": {
        "position": "relative",
        "float": "left",
        "marginTop": 5,
        "marginBottom": 0
    },
    "dropdown-menupull-right": {
        "right": 0,
        "left": "auto"
    },
    "pull-right>dropdown-menu": {
        "right": 0,
        "left": "auto"
    },
    "dropdown-submenu:hover>dropdown-menu": {
        "display": "block"
    },
    "open>dropdown-menu": {
        "display": "block"
    },
    "dropdown-menu divider": {
        "height": 1,
        "marginTop": 9,
        "marginRight": 1,
        "marginBottom": 9,
        "marginLeft": 1,
        "overflow": "hidden",
        "backgroundColor": "#e5e5e5",
        "borderBottom": "1px solid #fff"
    },
    "close": {
        "fontWeight": "700",
        "lineHeight": 20,
        "float": "right",
        "fontSize": 20,
        "color": "#000",
        "textShadow": "0 1px 0 #fff",
        "opacity": 0.2,
        "filter": "alpha(opacity=20)"
    },
    "nav-header": {
        "fontWeight": "700",
        "lineHeight": 20,
        "textShadow": "0 1px 0 rgba(255,255,255,.5)",
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 15,
        "paddingBottom": 3,
        "paddingLeft": 15,
        "fontSize": 11,
        "color": "#999",
        "textTransform": "uppercase"
    },
    "dropdown-menu>active>a": {
        "color": "#fff",
        "backgroundColor": "#0081c2",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)",
        "textDecoration": "none",
        "backgroundImage": "linear-gradient(to bottom,#08c,#0077b3)",
        "outline": 0
    },
    "dropdown-menu>active>a:focus": {
        "color": "#fff",
        "backgroundColor": "#0081c2",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)",
        "textDecoration": "none",
        "backgroundImage": "linear-gradient(to bottom,#08c,#0077b3)",
        "outline": 0
    },
    "dropdown-menu>active>a:hover": {
        "color": "#fff",
        "backgroundColor": "#0081c2",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)",
        "textDecoration": "none",
        "backgroundImage": "linear-gradient(to bottom,#08c,#0077b3)",
        "outline": 0
    },
    "dropdown-menu>li>a:focus": {
        "color": "#fff",
        "backgroundColor": "#0081c2",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)",
        "textDecoration": "none",
        "backgroundImage": "linear-gradient(to bottom,#08c,#0077b3)"
    },
    "dropdown-menu>li>a:hover": {
        "color": "#fff",
        "backgroundColor": "#0081c2",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)",
        "textDecoration": "none",
        "backgroundImage": "linear-gradient(to bottom,#08c,#0077b3)"
    },
    "dropdown-submenu:focus>a": {
        "color": "#fff",
        "backgroundColor": "#0081c2",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)",
        "textDecoration": "none",
        "backgroundImage": "linear-gradient(to bottom,#08c,#0077b3)"
    },
    "dropdown-submenu:hover>a": {
        "color": "#fff",
        "backgroundColor": "#0081c2",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0)",
        "textDecoration": "none",
        "backgroundImage": "linear-gradient(to bottom,#08c,#0077b3)"
    },
    "dropdown-menu>disabled>a": {
        "color": "#999"
    },
    "dropdown-menu>disabled>a:focus": {
        "color": "#999",
        "textDecoration": "none",
        "cursor": "default",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "dropdown-menu>disabled>a:hover": {
        "color": "#999",
        "textDecoration": "none",
        "cursor": "default",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "dropup caret": {
        "borderTop": 0,
        "borderBottom": "4px solid #000",
        "content": ""
    },
    "navbar-fixed-bottom dropdown caret": {
        "borderTop": 0,
        "borderBottom": "4px solid #000",
        "content": ""
    },
    "dropup dropdown-menu": {
        "top": "auto",
        "bottom": "100%",
        "marginBottom": 1
    },
    "navbar-fixed-bottom dropdown dropdown-menu": {
        "top": "auto",
        "bottom": "100%",
        "marginBottom": 1
    },
    "dropdown-submenu>dropdown-menu": {
        "top": 0,
        "left": "100%",
        "marginTop": -6,
        "marginLeft": -1,
        "WebkitBorderRadius": "0 6px 6px",
        "MozBorderRadius": "0 6px 6px",
        "borderRadius": "0 6px 6px"
    },
    "dropup dropdown-submenu>dropdown-menu": {
        "top": "auto",
        "bottom": 0,
        "marginTop": 0,
        "marginBottom": -2,
        "WebkitBorderRadius": "5px 5px 5px 0",
        "MozBorderRadius": "5px 5px 5px 0",
        "borderRadius": "5px 5px 5px 0"
    },
    "dropdown-submenu>a:after": {
        "display": "block",
        "float": "right",
        "width": 0,
        "height": 0,
        "marginTop": 5,
        "marginRight": -10,
        "borderColor": "transparent transparent transparent #ccc",
        "borderStyle": "solid",
        "borderWidth": "5px 0 5px 5px",
        "content": " "
    },
    "btn-group-vertical": {
        "display": "inline-block"
    },
    "input[type=button]btn-block": {
        "width": "100%"
    },
    "input[type=reset]btn-block": {
        "width": "100%"
    },
    "input[type=submit]btn-block": {
        "width": "100%"
    },
    "dropdown-submenu:hover>a:after": {
        "borderLeftColor": "#fff"
    },
    "dropdown-submenupull-left": {
        "float": "none"
    },
    "dropdown-submenupull-left>dropdown-menu": {
        "left": "-100%",
        "marginLeft": 10,
        "WebkitBorderRadius": "6px 0 6px 6px",
        "MozBorderRadius": "6px 0 6px 6px",
        "borderRadius": "6px 0 6px 6px"
    },
    "btn-group+btn-group": {
        "marginLeft": 5
    },
    "btn-toolbar>btn+btn": {
        "marginLeft": 5
    },
    "btn-toolbar>btn+btn-group": {
        "marginLeft": 5
    },
    "btn-toolbar>btn-group+btn": {
        "marginLeft": 5
    },
    "typeahead": {
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "zIndex": 1051,
        "marginTop": 2,
        "borderRadius": 4
    },
    "dropdown dropdown-menu nav-header": {
        "paddingRight": 20,
        "paddingLeft": 20
    },
    "well": {
        "minHeight": 20,
        "paddingTop": 19,
        "paddingRight": 19,
        "paddingBottom": 19,
        "paddingLeft": 19,
        "marginBottom": 20,
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #e3e3e3",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.05)",
        "MozBoxShadow": "inset 0 1px 1px rgba(0,0,0,.05)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.05)"
    },
    "well blockquote": {
        "borderColor": "rgba(0,0,0,.15)"
    },
    "well-large": {
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 24,
        "paddingLeft": 24,
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6
    },
    "btn-small": {
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "paddingTop": 2,
        "paddingRight": 10,
        "paddingBottom": 2,
        "paddingLeft": 10,
        "fontSize": 11.9,
        "borderRadius": 3
    },
    "well-small": {
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "borderRadius": 3
    },
    "fade": {
        "opacity": 0,
        "WebkitTransition": "opacity .15s linear",
        "MozTransition": "opacity .15s linear",
        "OTransition": "opacity .15s linear",
        "transition": "opacity .15s linear"
    },
    "fadein": {
        "opacity": 1
    },
    "collapsein": {
        "height": "auto"
    },
    "close:focus": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.4,
        "filter": "alpha(opacity=40)"
    },
    "close:hover": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.4,
        "filter": "alpha(opacity=40)"
    },
    "buttonclose": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "cursor": "pointer",
        "background": "0 0",
        "border": 0,
        "WebkitAppearance": "none"
    },
    "btn-danger": {
        "backgroundRepeat": "repeat-x",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "color": "#fff",
        "backgroundColor": "#da4f49",
        "backgroundImage": "linear-gradient(to bottom,#ee5f5b,#bd362f)",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "btn-info": {
        "backgroundRepeat": "repeat-x",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "color": "#fff!important",
        "backgroundColor": "#49afcd",
        "backgroundImage": "linear-gradient(to bottom,#5bc0de,#2f96b4)",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "btn-inverse": {
        "backgroundRepeat": "repeat-x",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "color": "#fff",
        "backgroundColor": "#363636",
        "backgroundImage": "linear-gradient(to bottom,#444,#222)",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "btn-primary": {
        "backgroundRepeat": "repeat-x",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "color": "#fff",
        "backgroundColor": "#006dcc",
        "backgroundImage": "linear-gradient(to bottom,#08c,#04c)",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "btn-success": {
        "backgroundRepeat": "repeat-x",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "color": "#fff",
        "backgroundColor": "#5bb75b",
        "backgroundImage": "linear-gradient(to bottom,#62c462,#51a351)",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "btn-warning": {
        "backgroundRepeat": "repeat-x",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "color": "#fff",
        "backgroundColor": "#faa732",
        "backgroundImage": "linear-gradient(to bottom,#fbb450,#f89406)",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "navbar-inner": {
        "backgroundRepeat": "repeat-x",
        "minHeight": 40,
        "paddingRight": 5,
        "paddingLeft": 5,
        "backgroundColor": "#fafafa",
        "backgroundImage": "linear-gradient(to bottom,#fff,#f2f2f2)",
        "border": "none",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 0,
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff2f2f2', GradientType=0)",
        "WebkitBoxShadow": "0 1px 4px rgba(0,0,0,.065)",
        "MozBoxShadow": "0 1px 4px rgba(0,0,0,.065)",
        "boxShadow": "none",
        "background": "0 0",
        "width": "90%",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "paddingTop": 5,
        "paddingBottom": 5
    },
    "navbar-inverse btn-navbar": {
        "backgroundRepeat": "repeat-x",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "backgroundColor": "#0e0e0e",
        "backgroundImage": "linear-gradient(to bottom,#151515,#040404)",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)"
    },
    "navbar-inverse navbar-inner": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#1b1b1b",
        "backgroundImage": "linear-gradient(to bottom,#222,#111)",
        "borderColor": "#252525",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff222222', endColorstr='#ff111111', GradientType=0)"
    },
    "progress": {
        "backgroundRepeat": "repeat-x",
        "marginBottom": 20,
        "height": 20,
        "overflow": "hidden",
        "backgroundColor": "#f7f7f7",
        "backgroundImage": "linear-gradient(to bottom,#f5f5f5,#f9f9f9)",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#fff9f9f9', GradientType=0)",
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0,0,0,.1)",
        "MozBoxShadow": "inset 0 1px 2px rgba(0,0,0,.1)",
        "boxShadow": "inset 0 1px 2px rgba(0,0,0,.1)"
    },
    "progress bar-danger": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#dd514c",
        "backgroundImage": "linear-gradient(to bottom,#ee5f5b,#c43c35)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b', endColorstr='#ffc43c35', GradientType=0)"
    },
    "progress bar-info": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#4bb1cf",
        "backgroundImage": "linear-gradient(to bottom,#5bc0de,#339bb9)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff339bb9', GradientType=0)"
    },
    "progress bar-success": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#5eb95e",
        "backgroundImage": "linear-gradient(to bottom,#62c462,#57a957)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff62c462', endColorstr='#ff57a957', GradientType=0)"
    },
    "progress bar-warning": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#faa732",
        "backgroundImage": "linear-gradient(to bottom,#fbb450,#f89406)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffbb450', endColorstr='#fff89406', GradientType=0)"
    },
    "progress-danger bar": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#dd514c",
        "backgroundImage": "linear-gradient(to bottom,#ee5f5b,#c43c35)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b', endColorstr='#ffc43c35', GradientType=0)"
    },
    "progress-info bar": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#4bb1cf",
        "backgroundImage": "linear-gradient(to bottom,#5bc0de,#339bb9)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff339bb9', GradientType=0)"
    },
    "progress-success bar": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#5eb95e",
        "backgroundImage": "linear-gradient(to bottom,#62c462,#57a957)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff62c462', endColorstr='#ff57a957', GradientType=0)"
    },
    "progress-warning bar": {
        "backgroundRepeat": "repeat-x",
        "backgroundColor": "#faa732",
        "backgroundImage": "linear-gradient(to bottom,#fbb450,#f89406)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffbb450', endColorstr='#fff89406', GradientType=0)"
    },
    "navbar btn-navbar": {
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)",
        "display": "none",
        "float": "right",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "marginRight": 5,
        "marginLeft": 5,
        "color": "#fff",
        "backgroundColor": "#ededed",
        "backgroundImage": "linear-gradient(to bottom,#f2f2f2,#e5e5e5)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075)",
        "MozBoxShadow": "inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075)",
        "boxShadow": "inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075)"
    },
    "btnactive": {
        "color": "#333",
        "backgroundColor": "#ccc\\9",
        "backgroundImage": "none",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)",
        "MozBoxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)",
        "boxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)"
    },
    "btndisabled": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "cursor": "default",
        "backgroundImage": "none",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "MozBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn:active": {
        "color": "#333",
        "backgroundColor": "#ccc\\9",
        "backgroundImage": "none",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)",
        "MozBoxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)",
        "boxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)"
    },
    "btn:focus": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "textDecoration": "none",
        "backgroundPosition": "0 -15px",
        "WebkitTransition": "background-position .1s linear",
        "MozTransition": "background-position .1s linear",
        "OTransition": "background-position .1s linear",
        "transition": "background-position .1s linear",
        "outline": "-webkit-focus-ring-color auto 5px",
        "outlineOffset": -2
    },
    "btn:hover": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "textDecoration": "none",
        "backgroundPosition": "0 -15px",
        "WebkitTransition": "background-position .1s linear",
        "MozTransition": "background-position .1s linear",
        "OTransition": "background-position .1s linear",
        "transition": "background-position .1s linear"
    },
    "btn[disabled]": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "cursor": "default",
        "backgroundImage": "none",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "MozBoxShadow": "none",
        "boxShadow": "none"
    },
    "accordion-toggle": {
        "cursor": "pointer"
    },
    "btn-link": {
        "cursor": "pointer",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "WebkitBoxShadow": "none",
        "MozBoxShadow": "none",
        "boxShadow": "none",
        "color": "#08c",
        "borderColor": "transparent",
        "borderRadius": 0
    },
    "nav>dropdownactive>a:focus": {
        "cursor": "pointer"
    },
    "nav>dropdownactive>a:hover": {
        "cursor": "pointer"
    },
    "btn-large": {
        "paddingTop": 11,
        "paddingRight": 19,
        "paddingBottom": 11,
        "paddingLeft": 19,
        "fontSize": 17.5,
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6
    },
    "btn-large [class*=\" icon-\"]": {
        "marginTop": 4
    },
    "btn-large [class^=icon-]": {
        "marginTop": 4
    },
    "btn-small [class*=\" icon-\"]": {
        "marginTop": 0
    },
    "btn-small [class^=icon-]": {
        "marginTop": 0
    },
    "btn-mini [class*=\" icon-\"]": {
        "marginTop": -1
    },
    "btn-mini [class^=icon-]": {
        "marginTop": -1
    },
    "btn-mini": {
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6,
        "fontSize": 10.5,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "btn-block+btn-block": {
        "marginTop": 5
    },
    "btn-primaryactive": {
        "color": "#fff",
        "backgroundColor": "#039\\9"
    },
    "btn-primarydisabled": {
        "color": "#fff",
        "backgroundColor": "#04c"
    },
    "btn-primary:active": {
        "color": "#fff",
        "backgroundColor": "#039\\9"
    },
    "btn-primary:focus": {
        "color": "#fff",
        "backgroundColor": "#04c"
    },
    "btn-primary:hover": {
        "color": "#fff",
        "backgroundColor": "#04c"
    },
    "btn-primary[disabled]": {
        "color": "#fff",
        "backgroundColor": "#04c"
    },
    "btn-warningactive": {
        "color": "#fff",
        "backgroundColor": "#c67605\\9"
    },
    "btn-warningdisabled": {
        "color": "#fff",
        "backgroundColor": "#f89406"
    },
    "btn-warning:active": {
        "color": "#fff",
        "backgroundColor": "#c67605\\9"
    },
    "btn-warning:focus": {
        "color": "#fff",
        "backgroundColor": "#f89406"
    },
    "btn-warning:hover": {
        "color": "#fff",
        "backgroundColor": "#f89406"
    },
    "btn-warning[disabled]": {
        "color": "#fff",
        "backgroundColor": "#f89406"
    },
    "btn-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#942a25\\9"
    },
    "btn-dangerdisabled": {
        "color": "#fff",
        "backgroundColor": "#bd362f"
    },
    "btn-danger:active": {
        "color": "#fff",
        "backgroundColor": "#942a25\\9"
    },
    "btn-danger:focus": {
        "color": "#fff",
        "backgroundColor": "#bd362f"
    },
    "btn-danger:hover": {
        "color": "#fff",
        "backgroundColor": "#bd362f"
    },
    "btn-danger[disabled]": {
        "color": "#fff",
        "backgroundColor": "#bd362f"
    },
    "btn-successactive": {
        "color": "#fff",
        "backgroundColor": "#408140\\9"
    },
    "btn-successdisabled": {
        "color": "#fff",
        "backgroundColor": "#51a351"
    },
    "btn-success:active": {
        "color": "#fff",
        "backgroundColor": "#408140\\9"
    },
    "btn-success:focus": {
        "color": "#fff",
        "backgroundColor": "#51a351"
    },
    "btn-success:hover": {
        "color": "#fff",
        "backgroundColor": "#51a351"
    },
    "btn-success[disabled]": {
        "color": "#fff",
        "backgroundColor": "#51a351"
    },
    "btn-infoactive": {
        "color": "#fff",
        "backgroundColor": "#24748c\\9"
    },
    "btn-infodisabled": {
        "color": "#fff",
        "backgroundColor": "#2f96b4"
    },
    "btn-info:active": {
        "color": "#fff",
        "backgroundColor": "#24748c\\9"
    },
    "btn-info:focus": {
        "color": "#fff",
        "backgroundColor": "#2f96b4"
    },
    "btn-info:hover": {
        "color": "#fff",
        "backgroundColor": "#2f96b4"
    },
    "btn-info[disabled]": {
        "color": "#fff",
        "backgroundColor": "#2f96b4"
    },
    "alert": {
        "textShadow": "0 1px 0 rgba(255,255,255,.5)",
        "paddingTop": 8,
        "paddingRight": 35,
        "paddingBottom": 8,
        "paddingLeft": 14,
        "marginBottom": 20,
        "backgroundColor": "#fcf8e3",
        "border": "1px solid #fbeed5",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 0,
        "color": "#c09853"
    },
    "nav-list nav-header": {
        "textShadow": "0 1px 0 rgba(255,255,255,.5)",
        "marginRight": -15,
        "marginLeft": -15
    },
    "nav-list>li>a": {
        "textShadow": "0 1px 0 rgba(255,255,255,.5)",
        "marginRight": -15,
        "marginLeft": -15,
        "paddingTop": 3,
        "paddingRight": 15,
        "paddingBottom": 3,
        "paddingLeft": 15
    },
    "btn-inverseactive": {
        "color": "#fff",
        "backgroundColor": "#080808\\9"
    },
    "btn-inversedisabled": {
        "color": "#fff",
        "backgroundColor": "#222"
    },
    "btn-inverse:active": {
        "color": "#fff",
        "backgroundColor": "#080808\\9"
    },
    "btn-inverse:focus": {
        "color": "#fff",
        "backgroundColor": "#222"
    },
    "btn-inverse:hover": {
        "color": "#fff",
        "backgroundColor": "#222"
    },
    "btn-inverse[disabled]": {
        "color": "#fff",
        "backgroundColor": "#222"
    },
    "buttonbtn::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "input[type=submit]btn::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "btn-link:active": {
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "WebkitBoxShadow": "none",
        "MozBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-link[disabled]": {
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "WebkitBoxShadow": "none",
        "MozBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-link:focus": {
        "color": "#005580",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link:hover": {
        "color": "#005580",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link[disabled]:focus": {
        "color": "#333",
        "textDecoration": "none"
    },
    "btn-link[disabled]:hover": {
        "color": "#333",
        "textDecoration": "none"
    },
    "btn-toolbar": {
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 0
    },
    "btn-group>btn+btn": {
        "marginLeft": -1
    },
    "btn-group>dropdown-menu": {
        "fontSize": 14
    },
    "btn-group>popover": {
        "fontSize": 14
    },
    "btn-group>btn-mini": {
        "fontSize": 10.5
    },
    "btn-group>btn-small": {
        "fontSize": 11.9
    },
    "btn-group>btn-large": {
        "fontSize": 17.5
    },
    "btn-group>btn:first-child": {
        "marginLeft": 0,
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusBottomleft": 4,
        "MozBorderRadiusTopleft": 4
    },
    "btn-group>btn:last-child": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusTopright": 4,
        "MozBorderRadiusBottomright": 4
    },
    "btn-group>dropdown-toggle": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusTopright": 4,
        "MozBorderRadiusBottomright": 4
    },
    "btn-group>btnlarge:first-child": {
        "marginLeft": 0,
        "WebkitBorderBottomLeftRadius": 6,
        "borderBottomLeftRadius": 6,
        "WebkitBorderTopLeftRadius": 6,
        "borderTopLeftRadius": 6,
        "MozBorderRadiusBottomleft": 6,
        "MozBorderRadiusTopleft": 6
    },
    "btn-group>btnlarge:last-child": {
        "WebkitBorderTopRightRadius": 6,
        "borderTopRightRadius": 6,
        "WebkitBorderBottomRightRadius": 6,
        "borderBottomRightRadius": 6,
        "MozBorderRadiusTopright": 6,
        "MozBorderRadiusBottomright": 6
    },
    "btn-group>largedropdown-toggle": {
        "WebkitBorderTopRightRadius": 6,
        "borderTopRightRadius": 6,
        "WebkitBorderBottomRightRadius": 6,
        "borderBottomRightRadius": 6,
        "MozBorderRadiusTopright": 6,
        "MozBorderRadiusBottomright": 6
    },
    "btn-group dropdown-toggle:active": {
        "outline": 0
    },
    "btn-groupopen dropdown-toggle": {
        "outline": 0,
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)",
        "MozBoxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)",
        "boxShadow": "inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)"
    },
    "btn-group>btn+dropdown-toggle": {
        "paddingRight": 8,
        "paddingLeft": 8,
        "WebkitBoxShadow": "inset 1px 0 0 rgba(255,255,255,.125),inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)",
        "MozBoxShadow": "inset 1px 0 0 rgba(255,255,255,.125),inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)",
        "boxShadow": "inset 1px 0 0 rgba(255,255,255,.125),inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)"
    },
    "btn-group>btn-mini+dropdown-toggle": {
        "paddingRight": 5,
        "paddingLeft": 5
    },
    "btn-group>btn-large+dropdown-toggle": {
        "paddingRight": 12,
        "paddingLeft": 12
    },
    "btn-groupopen btndropdown-toggle": {
        "backgroundColor": "#e6e6e6"
    },
    "btn-groupopen btn-primarydropdown-toggle": {
        "backgroundColor": "#04c"
    },
    "btn-groupopen btn-warningdropdown-toggle": {
        "backgroundColor": "#f89406"
    },
    "btn-groupopen btn-dangerdropdown-toggle": {
        "backgroundColor": "#bd362f"
    },
    "btn-groupopen btn-successdropdown-toggle": {
        "backgroundColor": "#51a351"
    },
    "btn-groupopen btn-infodropdown-toggle": {
        "backgroundColor": "#2f96b4"
    },
    "btn-groupopen btn-inversedropdown-toggle": {
        "backgroundColor": "#222"
    },
    "btn caret": {
        "marginTop": 8,
        "marginLeft": 0
    },
    "btn-large caret": {
        "marginTop": 6,
        "borderTopWidth": 5,
        "borderRightWidth": 5,
        "borderLeftWidth": 5
    },
    "btn-mini caret": {
        "marginTop": 8
    },
    "btn-small caret": {
        "marginTop": 8
    },
    "dropup btn-large caret": {
        "borderBottomWidth": 5
    },
    "btn-danger caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "btn-info caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "btn-inverse caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "btn-primary caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "btn-success caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "btn-warning caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "nav>li>a": {
        "display": "block"
    },
    "btn-group-vertical>btn": {
        "display": "block",
        "float": "none",
        "maxWidth": "100%",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "btn-group-vertical>btn+btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn:first-child": {
        "WebkitBorderRadius": "4px 4px 0 0",
        "MozBorderRadius": "4px 4px 0 0",
        "borderRadius": "4px 4px 0 0"
    },
    "btn-group-vertical>btn:last-child": {
        "WebkitBorderRadius": "0 0 4px 4px",
        "MozBorderRadius": "0 0 4px 4px",
        "borderRadius": "0 0 4px 4px"
    },
    "btn-group-vertical>btn-large:first-child": {
        "WebkitBorderRadius": "6px 6px 0 0",
        "MozBorderRadius": "6px 6px 0 0",
        "borderRadius": "6px 6px 0 0"
    },
    "btn-group-vertical>btn-large:last-child": {
        "WebkitBorderRadius": "0 0 6px 6px",
        "MozBorderRadius": "0 0 6px 6px",
        "borderRadius": "0 0 6px 6px"
    },
    "alert h4": {
        "color": "#c09853",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "alert-success": {
        "color": "#468847",
        "backgroundColor": "#dff0d8",
        "borderColor": "#d6e9c6"
    },
    "alert-success h4": {
        "color": "#468847"
    },
    "alert-danger": {
        "color": "#b94a48",
        "backgroundColor": "#f2dede",
        "borderColor": "#eed3d7"
    },
    "alert-error": {
        "color": "#b94a48",
        "backgroundColor": "#f2dede",
        "borderColor": "#eed3d7"
    },
    "alert-danger h4": {
        "color": "#b94a48"
    },
    "alert-error h4": {
        "color": "#b94a48"
    },
    "alert-info": {
        "color": "#3a87ad",
        "backgroundColor": "#d9edf7",
        "borderColor": "#bce8f1"
    },
    "alert-info h4": {
        "color": "#3a87ad"
    },
    "alert-block": {
        "paddingTop": 14,
        "paddingBottom": 14
    },
    "alert-block>p": {
        "marginBottom": 0
    },
    "alert-block>ul": {
        "marginBottom": 0
    },
    "alert-block p+p": {
        "marginTop": 5
    },
    "nav>li>a:focus": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "nav>li>a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "nav>li>a>img": {
        "maxWidth": "none"
    },
    "nav>pull-right": {
        "float": "right"
    },
    "nav li+nav-header": {
        "marginTop": 9
    },
    "nav-list": {
        "paddingRight": 15,
        "paddingLeft": 15,
        "marginBottom": 0
    },
    "nav-pills>li>a": {
        "paddingTop": 2,
        "paddingBottom": 2,
        "paddingRight": 10,
        "paddingLeft": 10,
        "marginRight": 2,
        "lineHeight": 22,
        "marginTop": 2,
        "marginBottom": 2,
        "WebkitBorderRadius": 5,
        "MozBorderRadius": 5,
        "borderRadius": 5
    },
    "nav-tabs>li>a": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "paddingRight": 12,
        "paddingLeft": 12,
        "marginRight": 2,
        "lineHeight": 20,
        "border": "1px solid transparent",
        "WebkitBorderRadius": "4px 4px 0 0",
        "MozBorderRadius": "4px 4px 0 0",
        "borderRadius": "4px 4px 0 0"
    },
    "nav-list>active>a": {
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0,0,0,.2)",
        "backgroundColor": "#08c"
    },
    "nav-list>active>a:focus": {
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0,0,0,.2)",
        "backgroundColor": "#08c"
    },
    "nav-list>active>a:hover": {
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0,0,0,.2)",
        "backgroundColor": "#08c"
    },
    "nav-list [class*=\" icon-\"]": {
        "marginRight": 2
    },
    "nav-list [class^=icon-]": {
        "marginRight": 2
    },
    "nav-list divider": {
        "height": 1,
        "marginTop": 9,
        "marginRight": 1,
        "marginBottom": 9,
        "marginLeft": 1,
        "overflow": "hidden",
        "backgroundColor": "#e5e5e5",
        "borderBottom": "1px solid #fff"
    },
    "nav-pills:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "nav-tabs:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "nav-pills>li": {
        "float": "left"
    },
    "nav-tabs>li": {
        "float": "left",
        "marginBottom": -1
    },
    "nav-stacked>li": {
        "float": "none"
    },
    "tabs-left>nav-tabs>li": {
        "float": "none"
    },
    "tabs-right>nav-tabs>li": {
        "float": "none"
    },
    "nav-tabs": {
        "borderBottom": "1px solid #ddd"
    },
    "nav-tabs>li>a:focus": {
        "borderColor": "#eee #eee #ddd"
    },
    "nav-tabs>li>a:hover": {
        "borderColor": "#eee #eee #ddd"
    },
    "nav-tabs>active>a": {
        "color": "#555",
        "cursor": "default",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent"
    },
    "nav-tabs>active>a:focus": {
        "color": "#555",
        "cursor": "default",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent"
    },
    "nav-tabs>active>a:hover": {
        "color": "#555",
        "cursor": "default",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent"
    },
    "nav-pills>active>a": {
        "color": "#fff",
        "backgroundColor": "#08c"
    },
    "nav-pills>active>a:focus": {
        "color": "#fff",
        "backgroundColor": "#08c"
    },
    "nav-pills>active>a:hover": {
        "color": "#fff",
        "backgroundColor": "#08c"
    },
    "nav-stacked>li>a": {
        "marginRight": 0
    },
    "nav-tabsnav-stacked": {
        "borderBottom": 0
    },
    "nav-tabsnav-stacked>li>a": {
        "border": "1px solid #ddd",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "nav-tabsnav-stacked>li:first-child>a": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusTopright": 4,
        "MozBorderRadiusTopleft": 4
    },
    "nav-tabsnav-stacked>li:last-child>a": {
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "MozBorderRadiusBottomright": 4,
        "MozBorderRadiusBottomleft": 4
    },
    "nav-tabsnav-stacked>li>a:focus": {
        "zIndex": 2,
        "borderColor": "#ddd"
    },
    "nav-tabsnav-stacked>li>a:hover": {
        "zIndex": 2,
        "borderColor": "#ddd"
    },
    "nav-pillsnav-stacked>li>a": {
        "marginBottom": 3
    },
    "nav-pillsnav-stacked>li:last-child>a": {
        "marginBottom": 1
    },
    "nav-tabs dropdown-menu": {
        "WebkitBorderRadius": "0 0 6px 6px",
        "MozBorderRadius": "0 0 6px 6px",
        "borderRadius": "0 0 6px 6px"
    },
    "nav-pills dropdown-menu": {
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6
    },
    "nav dropdown-toggle caret": {
        "marginTop": 6,
        "borderTopColor": "#08c",
        "borderBottomColor": "#08c"
    },
    "nav dropdown-toggle:focus caret": {
        "borderTopColor": "#005580",
        "borderBottomColor": "#005580"
    },
    "nav dropdown-toggle:hover caret": {
        "borderTopColor": "#005580",
        "borderBottomColor": "#005580"
    },
    "nav-tabs dropdown-toggle caret": {
        "marginTop": 8
    },
    "nav active dropdown-toggle caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "nav-tabs active dropdown-toggle caret": {
        "borderTopColor": "#555",
        "borderBottomColor": "#555"
    },
    "nav-pills open dropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#999",
        "borderColor": "#999"
    },
    "nav-tabs open dropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#999",
        "borderColor": "#999"
    },
    "nav>lidropdownopenactive>a:focus": {
        "color": "#fff",
        "backgroundColor": "#999",
        "borderColor": "#999"
    },
    "nav>lidropdownopenactive>a:hover": {
        "color": "#fff",
        "backgroundColor": "#999",
        "borderColor": "#999"
    },
    "nav lidropdownopen caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "nav lidropdownopen a:focus caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "nav lidropdownopen a:hover caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "nav lidropdownopenactive caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "tabs-stacked open>a:focus": {
        "borderColor": "#999"
    },
    "tabs-stacked open>a:hover": {
        "borderColor": "#999"
    },
    "tabbable:after": {
        "display": "table",
        "lineHeight": 0,
        "content": "",
        "clear": "both"
    },
    "tabbable:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "tab-content": {
        "overflow": "auto"
    },
    "tabs-below>nav-tabs": {
        "borderBottom": 0,
        "borderTop": "1px solid #ddd"
    },
    "tabs-left>nav-tabs": {
        "borderBottom": 0,
        "float": "left",
        "marginRight": 19,
        "borderRight": "1px solid #ddd"
    },
    "tabs-right>nav-tabs": {
        "borderBottom": 0,
        "float": "right",
        "marginLeft": 19,
        "borderLeft": "1px solid #ddd"
    },
    "pill-content>pill-pane": {
        "display": "none"
    },
    "tab-content>tab-pane": {
        "display": "none"
    },
    "pill-content>active": {
        "display": "block"
    },
    "tab-content>active": {
        "display": "block"
    },
    "tabs-below>nav-tabs>li": {
        "marginTop": -1,
        "marginBottom": 0
    },
    "tabs-below>nav-tabs>li>a": {
        "WebkitBorderRadius": "0 0 4px 4px",
        "MozBorderRadius": "0 0 4px 4px",
        "borderRadius": "0 0 4px 4px"
    },
    "tabs-below>nav-tabs>li>a:focus": {
        "borderTopColor": "#ddd",
        "borderBottomColor": "transparent"
    },
    "tabs-below>nav-tabs>li>a:hover": {
        "borderTopColor": "#ddd",
        "borderBottomColor": "transparent"
    },
    "tabs-below>nav-tabs>active>a": {
        "borderColor": "transparent #ddd #ddd"
    },
    "tabs-below>nav-tabs>active>a:focus": {
        "borderColor": "transparent #ddd #ddd"
    },
    "tabs-below>nav-tabs>active>a:hover": {
        "borderColor": "transparent #ddd #ddd"
    },
    "tabs-left>nav-tabs>li>a": {
        "minWidth": 74,
        "marginRight": -1,
        "marginBottom": 3,
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "tabs-right>nav-tabs>li>a": {
        "minWidth": 74,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": -1,
        "WebkitBorderRadius": "0 4px 4px 0",
        "MozBorderRadius": "0 4px 4px 0",
        "borderRadius": "0 4px 4px 0"
    },
    "tabs-left>nav-tabs>li>a:focus": {
        "borderColor": "#eee #ddd #eee #eee"
    },
    "tabs-left>nav-tabs>li>a:hover": {
        "borderColor": "#eee #ddd #eee #eee"
    },
    "tabs-left>nav-tabs active>a": {
        "borderColor": "#ddd transparent #ddd #ddd"
    },
    "tabs-left>nav-tabs active>a:focus": {
        "borderColor": "#ddd transparent #ddd #ddd"
    },
    "tabs-left>nav-tabs active>a:hover": {
        "borderColor": "#ddd transparent #ddd #ddd"
    },
    "tabs-right>nav-tabs>li>a:focus": {
        "borderColor": "#eee #eee #eee #ddd"
    },
    "tabs-right>nav-tabs>li>a:hover": {
        "borderColor": "#eee #eee #eee #ddd"
    },
    "tabs-right>nav-tabs active>a": {
        "borderColor": "#ddd #ddd #ddd transparent"
    },
    "tabs-right>nav-tabs active>a:focus": {
        "borderColor": "#ddd #ddd #ddd transparent"
    },
    "tabs-right>nav-tabs active>a:hover": {
        "borderColor": "#ddd #ddd #ddd transparent"
    },
    "nav>disabled>a": {
        "color": "#999"
    },
    "nav>disabled>a:focus": {
        "textDecoration": "none",
        "cursor": "default",
        "backgroundColor": "transparent"
    },
    "nav>disabled>a:hover": {
        "textDecoration": "none",
        "cursor": "default",
        "backgroundColor": "transparent"
    },
    "navbar": {
        "marginBottom": 0,
        "overflow": "visible",
        "zIndex": 9,
        "width": "100%",
        "position": "relative",
        "background": "#444",
        "fontSize": 13
    },
    "navbar-inner:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "navbar container": {
        "width": "100%",
        "minWidth": 960,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxWidth": 1400
    },
    "nav-collapsecollapse": {
        "height": "auto",
        "overflow": "visible"
    },
    "navbar brand": {
        "display": "block",
        "float": "left",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "marginLeft": -20,
        "fontSize": 20,
        "fontWeight": "200",
        "color": "#777",
        "textShadow": "0 1px 0 #fff",
        "width": 120,
        "height": 28
    },
    "navbar brand:focus": {
        "textDecoration": "none"
    },
    "navbar brand:hover": {
        "textDecoration": "none"
    },
    "navbar-text": {
        "marginBottom": 0,
        "lineHeight": 40,
        "color": "#777"
    },
    "navbar-link": {
        "color": "#777"
    },
    "navbar-link:focus": {
        "color": "#333"
    },
    "navbar-link:hover": {
        "color": "#333"
    },
    "navbar divider-vertical": {
        "height": 40,
        "marginTop": 0,
        "marginRight": 9,
        "marginBottom": 0,
        "marginLeft": 9,
        "borderRight": "1px solid #fff",
        "borderLeft": "1px solid #f2f2f2"
    },
    "navbar btn": {
        "marginTop": 5
    },
    "navbar btn-group": {
        "marginTop": 5
    },
    "navbar btn-group btn": {
        "marginTop": 0
    },
    "navbar input-append btn": {
        "marginTop": 0
    },
    "navbar input-append btn-group": {
        "marginTop": 0
    },
    "navbar input-prepend btn": {
        "marginTop": 0
    },
    "navbar input-prepend btn-group": {
        "marginTop": 0
    },
    "navbar-form": {
        "marginBottom": 0
    },
    "navbar-form:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "navbar-form checkbox": {
        "marginTop": 5
    },
    "navbar-form radio": {
        "marginTop": 5
    },
    "navbar-form input": {
        "marginTop": 5,
        "display": "inline-block",
        "marginBottom": 0
    },
    "navbar-form select": {
        "marginTop": 5,
        "display": "inline-block",
        "marginBottom": 0
    },
    "navbar-form btn": {
        "display": "inline-block",
        "marginBottom": 0
    },
    "navbar-form input[type=image]": {
        "marginTop": 3
    },
    "navbar-form input[type=radio]": {
        "marginTop": 3
    },
    "navbar-form input[type=checkbox]": {
        "marginTop": 3
    },
    "navbar-form input-append": {
        "marginTop": 5,
        "whiteSpace": "nowrap"
    },
    "navbar-form input-prepend": {
        "marginTop": 5,
        "whiteSpace": "nowrap"
    },
    "navbar-form input-append input": {
        "marginTop": 0
    },
    "navbar-form input-prepend input": {
        "marginTop": 0
    },
    "navbar-static-top": {
        "position": "static",
        "marginBottom": 0
    },
    "navbar-static-top navbar-inner": {
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "borderWidth": "0 0 1px",
        "WebkitBoxShadow": "0 1px 10px rgba(0,0,0,.1)",
        "MozBoxShadow": "0 1px 10px rgba(0,0,0,.1)",
        "boxShadow": "0 1px 10px rgba(0,0,0,.1)"
    },
    "navbar-fixed-bottom": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "marginBottom": 0,
        "bottom": 0
    },
    "navbar-fixed-top": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "marginBottom": 0,
        "top": 0
    },
    "navbar-fixed-top navbar-inner": {
        "borderWidth": "0 0 1px",
        "WebkitBoxShadow": "0 1px 10px rgba(0,0,0,.1)",
        "MozBoxShadow": "0 1px 10px rgba(0,0,0,.1)",
        "boxShadow": "0 1px 10px rgba(0,0,0,.1)",
        "paddingRight": 0,
        "paddingLeft": 0,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "navbar-fixed-bottom navbar-inner": {
        "borderWidth": "1px 0 0",
        "WebkitBoxShadow": "0 -1px 10px rgba(0,0,0,.1)",
        "MozBoxShadow": "0 -1px 10px rgba(0,0,0,.1)",
        "boxShadow": "0 -1px 10px rgba(0,0,0,.1)",
        "paddingRight": 0,
        "paddingLeft": 0,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "navbar nav": {
        "position": "relative",
        "left": 0,
        "display": "block",
        "float": "left",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "popover-title:empty": {
        "display": "none"
    },
    "navbar navpull-right": {
        "float": "right",
        "marginRight": 0
    },
    "navbar nav>li": {
        "float": "left"
    },
    "navbar nav>li>a": {
        "float": "none",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "color": "#ccc",
        "textDecoration": "none",
        "textShadow": "none"
    },
    "navbar nav dropdown-toggle caret": {
        "marginTop": 8
    },
    "navbar nav>li>a:focus": {
        "color": "#3f82c4",
        "textDecoration": "none",
        "backgroundColor": "transparent"
    },
    "navbar nav>li>a:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "backgroundColor": "transparent"
    },
    "navbar nav>active>a": {
        "color": "#555",
        "textDecoration": "none",
        "backgroundColor": "#e5e5e5",
        "WebkitBoxShadow": "inset 0 3px 8px rgba(0,0,0,.125)",
        "MozBoxShadow": "inset 0 3px 8px rgba(0,0,0,.125)",
        "boxShadow": "inset 0 3px 8px rgba(0,0,0,.125)"
    },
    "navbar nav>active>a:focus": {
        "color": "#555",
        "textDecoration": "none",
        "backgroundColor": "#e5e5e5",
        "WebkitBoxShadow": "inset 0 3px 8px rgba(0,0,0,.125)",
        "MozBoxShadow": "inset 0 3px 8px rgba(0,0,0,.125)",
        "boxShadow": "inset 0 3px 8px rgba(0,0,0,.125)"
    },
    "navbar nav>active>a:hover": {
        "color": "#555",
        "textDecoration": "none",
        "backgroundColor": "#e5e5e5",
        "WebkitBoxShadow": "inset 0 3px 8px rgba(0,0,0,.125)",
        "MozBoxShadow": "inset 0 3px 8px rgba(0,0,0,.125)",
        "boxShadow": "inset 0 3px 8px rgba(0,0,0,.125)"
    },
    "navbar btn-navbaractive": {
        "color": "#fff",
        "backgroundColor": "#ccc\\9"
    },
    "navbar btn-navbardisabled": {
        "color": "#fff",
        "backgroundColor": "#e5e5e5"
    },
    "navbar btn-navbar:active": {
        "color": "#fff",
        "backgroundColor": "#ccc\\9"
    },
    "navbar btn-navbar:focus": {
        "color": "#fff",
        "backgroundColor": "#e5e5e5"
    },
    "navbar btn-navbar:hover": {
        "color": "#fff",
        "backgroundColor": "#e5e5e5"
    },
    "navbar btn-navbar[disabled]": {
        "color": "#fff",
        "backgroundColor": "#e5e5e5"
    },
    "navbar btn-navbar icon-bar": {
        "display": "block",
        "width": 18,
        "height": 2,
        "backgroundColor": "#f5f5f5",
        "WebkitBorderRadius": 1,
        "MozBorderRadius": 1,
        "borderRadius": 1,
        "WebkitBoxShadow": "0 1px 0 rgba(0,0,0,.25)",
        "MozBoxShadow": "0 1px 0 rgba(0,0,0,.25)",
        "boxShadow": "0 1px 0 rgba(0,0,0,.25)"
    },
    "btn-navbar icon-bar+icon-bar": {
        "marginTop": 3
    },
    "navbar nav>li>dropdown-menu:before": {
        "position": "absolute",
        "top": -7,
        "left": 9,
        "display": "inline-block",
        "borderRight": "7px solid transparent",
        "borderBottom": "7px solid #ccc",
        "borderLeft": "7px solid transparent",
        "borderBottomColor": "rgba(0,0,0,.2)",
        "content": "''"
    },
    "navbar nav>li>dropdown-menu:after": {
        "position": "absolute",
        "top": -6,
        "left": 10,
        "display": "inline-block",
        "borderRight": "6px solid transparent",
        "borderBottom": "6px solid #fff",
        "borderLeft": "6px solid transparent",
        "content": "''"
    },
    "navbar-fixed-bottom nav>li>dropdown-menu:before": {
        "top": "auto",
        "bottom": -7,
        "borderTop": "7px solid #ccc",
        "borderBottom": 0,
        "borderTopColor": "rgba(0,0,0,.2)"
    },
    "navbar-fixed-bottom nav>li>dropdown-menu:after": {
        "top": "auto",
        "bottom": -6,
        "borderTop": "6px solid #fff",
        "borderBottom": 0
    },
    "navbar nav lidropdown>a:focus caret": {
        "borderTopColor": "#333",
        "borderBottomColor": "#333"
    },
    "navbar nav lidropdown>a:hover caret": {
        "borderTopColor": "#333",
        "borderBottomColor": "#333"
    },
    "navbar nav lidropdownactive>dropdown-toggle": {
        "color": "#555",
        "backgroundColor": "#e5e5e5"
    },
    "navbar nav lidropdownopenactive>dropdown-toggle": {
        "color": "#555",
        "backgroundColor": "#e5e5e5"
    },
    "navbar nav lidropdownopen>dropdown-toggle": {
        "color": "#555",
        "backgroundColor": "#e5e5e5"
    },
    "navbar nav lidropdown>dropdown-toggle caret": {
        "borderTopColor": "#777",
        "borderBottomColor": "#777"
    },
    "navbar nav lidropdownactive>dropdown-toggle caret": {
        "borderTopColor": "#555",
        "borderBottomColor": "#555"
    },
    "navbar nav lidropdownopenactive>dropdown-toggle caret": {
        "borderTopColor": "#555",
        "borderBottomColor": "#555"
    },
    "navbar nav lidropdownopen>dropdown-toggle caret": {
        "borderTopColor": "#555",
        "borderBottomColor": "#555"
    },
    "navbar nav>li>dropdown-menupull-right": {
        "right": 0,
        "left": "auto"
    },
    "navbar pull-right>li>dropdown-menu": {
        "right": 0,
        "left": "auto"
    },
    "navbar nav>li>dropdown-menupull-right:before": {
        "right": 12,
        "left": "auto"
    },
    "navbar pull-right>li>dropdown-menu:before": {
        "right": 12,
        "left": "auto"
    },
    "navbar nav>li>dropdown-menupull-right:after": {
        "right": 13,
        "left": "auto"
    },
    "navbar pull-right>li>dropdown-menu:after": {
        "right": 13,
        "left": "auto"
    },
    "navbar nav>li>dropdown-menupull-right dropdown-menu": {
        "right": "100%",
        "left": "auto",
        "marginRight": -1,
        "marginLeft": 0,
        "WebkitBorderRadius": "6px 0 6px 6px",
        "MozBorderRadius": "6px 0 6px 6px",
        "borderRadius": "6px 0 6px 6px"
    },
    "navbar pull-right>li>dropdown-menu dropdown-menu": {
        "right": "100%",
        "left": "auto",
        "marginRight": -1,
        "marginLeft": 0,
        "WebkitBorderRadius": "6px 0 6px 6px",
        "MozBorderRadius": "6px 0 6px 6px",
        "borderRadius": "6px 0 6px 6px"
    },
    "navbar-inverse brand": {
        "color": "#999",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)"
    },
    "navbar-inverse nav>li>a": {
        "color": "#999",
        "textShadow": "0 -1px 0 rgba(0,0,0,.25)"
    },
    "navbar-inverse brand:focus": {
        "color": "#fff"
    },
    "navbar-inverse brand:hover": {
        "color": "#fff"
    },
    "navbar-inverse nav>li>a:focus": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse nav>li>a:hover": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-text": {
        "color": "#999"
    },
    "navbar-inverse nav active>a": {
        "color": "#fff",
        "backgroundColor": "#111"
    },
    "navbar-inverse nav active>a:focus": {
        "color": "#fff",
        "backgroundColor": "#111"
    },
    "navbar-inverse nav active>a:hover": {
        "color": "#fff",
        "backgroundColor": "#111"
    },
    "navbar-inverse navbar-link": {
        "color": "#999"
    },
    "navbar-inverse navbar-link:focus": {
        "color": "#fff"
    },
    "navbar-inverse navbar-link:hover": {
        "color": "#fff"
    },
    "navbar-inverse divider-vertical": {
        "borderRightColor": "#222",
        "borderLeftColor": "#111"
    },
    "navbar-inverse nav lidropdownactive>dropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#111"
    },
    "navbar-inverse nav lidropdownopenactive>dropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#111"
    },
    "navbar-inverse nav lidropdownopen>dropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#111"
    },
    "navbar-inverse nav lidropdown>a:focus caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "navbar-inverse nav lidropdown>a:hover caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "navbar-inverse nav lidropdown>dropdown-toggle caret": {
        "borderTopColor": "#999",
        "borderBottomColor": "#999"
    },
    "navbar-inverse nav lidropdownactive>dropdown-toggle caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "navbar-inverse nav lidropdownopenactive>dropdown-toggle caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "navbar-inverse nav lidropdownopen>dropdown-toggle caret": {
        "borderTopColor": "#fff",
        "borderBottomColor": "#fff"
    },
    "navbar-inverse navbar-search search-query": {
        "color": "#fff",
        "backgroundColor": "#515151",
        "borderColor": "#111",
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15)",
        "MozBoxShadow": "inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15)",
        "boxShadow": "inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15)",
        "WebkitTransition": "none",
        "MozTransition": "none",
        "OTransition": "none",
        "transition": "none"
    },
    "navbar-inverse navbar-search search-query:-moz-placeholder": {
        "color": "#ccc"
    },
    "navbar-inverse navbar-search search-query:-ms-input-placeholder": {
        "color": "#ccc"
    },
    "navbar-inverse navbar-search search-query::-webkit-input-placeholder": {
        "color": "#ccc"
    },
    "navbar-inverse navbar-search search-queryfocused": {
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "color": "#333",
        "textShadow": "0 1px 0 #fff",
        "backgroundColor": "#fff",
        "border": 0,
        "outline": 0,
        "WebkitBoxShadow": "0 0 3px rgba(0,0,0,.15)",
        "MozBoxShadow": "0 0 3px rgba(0,0,0,.15)",
        "boxShadow": "0 0 3px rgba(0,0,0,.15)"
    },
    "navbar-inverse navbar-search search-query:focus": {
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "color": "#333",
        "textShadow": "0 1px 0 #fff",
        "backgroundColor": "#fff",
        "border": 0,
        "outline": 0,
        "WebkitBoxShadow": "0 0 3px rgba(0,0,0,.15)",
        "MozBoxShadow": "0 0 3px rgba(0,0,0,.15)",
        "boxShadow": "0 0 3px rgba(0,0,0,.15)"
    },
    "navbar-inverse btn-navbaractive": {
        "color": "#fff",
        "backgroundColor": "#000\\9"
    },
    "navbar-inverse btn-navbardisabled": {
        "color": "#fff",
        "backgroundColor": "#040404"
    },
    "navbar-inverse btn-navbar:active": {
        "color": "#fff",
        "backgroundColor": "#000\\9"
    },
    "navbar-inverse btn-navbar:focus": {
        "color": "#fff",
        "backgroundColor": "#040404"
    },
    "navbar-inverse btn-navbar:hover": {
        "color": "#fff",
        "backgroundColor": "#040404"
    },
    "navbar-inverse btn-navbar[disabled]": {
        "color": "#fff",
        "backgroundColor": "#040404"
    },
    "breadcrumb>li": {
        "display": "inline-block",
        "textShadow": "none"
    },
    "breadcrumb>li>divider": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "color": "#ccc"
    },
    "breadcrumb>active": {
        "color": "#999"
    },
    "pagination": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "height": 40
    },
    "modal-footer": {
        "marginBottom": 0,
        "paddingTop": 14,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textAlign": "right",
        "backgroundColor": "#f5f5f5",
        "borderTop": "1px solid #ddd",
        "WebkitBorderRadius": "0 0 6px 6px",
        "MozBorderRadius": "0 0 6px 6px",
        "borderRadius": "0 0 6px 6px",
        "WebkitBoxShadow": "inset 0 1px 0 #fff",
        "MozBoxShadow": "inset 0 1px 0 #fff",
        "boxShadow": "inset 0 1px 0 #fff"
    },
    "modal-form": {
        "marginBottom": 0
    },
    "pagination ul": {
        "marginBottom": 0,
        "display": "inline-block",
        "marginLeft": 0,
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "WebkitBoxShadow": "0 1px 2px rgba(0,0,0,.05)",
        "MozBoxShadow": "0 1px 2px rgba(0,0,0,.05)",
        "boxShadow": "none"
    },
    "pagination ul>li": {
        "display": "inline"
    },
    "pagination ul>li>a": {
        "float": "left",
        "paddingTop": 4,
        "paddingRight": 12,
        "paddingBottom": 4,
        "paddingLeft": 12,
        "lineHeight": 20,
        "textDecoration": "none",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderLeftWidth": 0
    },
    "pagination ul>li>span": {
        "float": "left",
        "paddingTop": 4,
        "paddingRight": 12,
        "paddingBottom": 4,
        "paddingLeft": 12,
        "lineHeight": 20,
        "textDecoration": "none",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderLeftWidth": 0
    },
    "pagination ul>active>a": {
        "backgroundColor": "#f5f5f5",
        "color": "#999",
        "cursor": "default"
    },
    "pagination ul>active>span": {
        "backgroundColor": "#f5f5f5",
        "color": "#999",
        "cursor": "default"
    },
    "pagination ul>li>a:focus": {
        "backgroundColor": "#f5f5f5"
    },
    "pagination ul>li>a:hover": {
        "backgroundColor": "#f5f5f5"
    },
    "pagination ul>disabled>a": {
        "color": "#999",
        "cursor": "default",
        "backgroundColor": "transparent"
    },
    "pagination ul>disabled>a:focus": {
        "color": "#999",
        "cursor": "default",
        "backgroundColor": "transparent"
    },
    "pagination ul>disabled>a:hover": {
        "color": "#999",
        "cursor": "default",
        "backgroundColor": "transparent"
    },
    "pagination ul>disabled>span": {
        "color": "#999",
        "cursor": "default",
        "backgroundColor": "transparent"
    },
    "pagination ul>li:first-child>a": {
        "borderLeftWidth": 1,
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusBottomleft": 4,
        "MozBorderRadiusTopleft": 4
    },
    "pagination ul>li:first-child>span": {
        "borderLeftWidth": 1,
        "WebkitBorderBottomLeftRadius": 4,
        "borderBottomLeftRadius": 4,
        "WebkitBorderTopLeftRadius": 4,
        "borderTopLeftRadius": 4,
        "MozBorderRadiusBottomleft": 4,
        "MozBorderRadiusTopleft": 4
    },
    "pagination ul>li:last-child>a": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusTopright": 4,
        "MozBorderRadiusBottomright": 4
    },
    "pagination ul>li:last-child>span": {
        "WebkitBorderTopRightRadius": 4,
        "borderTopRightRadius": 4,
        "WebkitBorderBottomRightRadius": 4,
        "borderBottomRightRadius": 4,
        "MozBorderRadiusTopright": 4,
        "MozBorderRadiusBottomright": 4
    },
    "pagination-right": {
        "textAlign": "right"
    },
    "pagination-large ul>li>a": {
        "paddingTop": 11,
        "paddingRight": 19,
        "paddingBottom": 11,
        "paddingLeft": 19,
        "fontSize": 17.5
    },
    "pagination-large ul>li>span": {
        "paddingTop": 11,
        "paddingRight": 19,
        "paddingBottom": 11,
        "paddingLeft": 19,
        "fontSize": 17.5
    },
    "pagination-large ul>li:first-child>a": {
        "WebkitBorderBottomLeftRadius": 6,
        "borderBottomLeftRadius": 6,
        "WebkitBorderTopLeftRadius": 6,
        "borderTopLeftRadius": 6,
        "MozBorderRadiusBottomleft": 6,
        "MozBorderRadiusTopleft": 6
    },
    "pagination-large ul>li:first-child>span": {
        "WebkitBorderBottomLeftRadius": 6,
        "borderBottomLeftRadius": 6,
        "WebkitBorderTopLeftRadius": 6,
        "borderTopLeftRadius": 6,
        "MozBorderRadiusBottomleft": 6,
        "MozBorderRadiusTopleft": 6
    },
    "pagination-large ul>li:last-child>a": {
        "WebkitBorderTopRightRadius": 6,
        "borderTopRightRadius": 6,
        "WebkitBorderBottomRightRadius": 6,
        "borderBottomRightRadius": 6,
        "MozBorderRadiusTopright": 6,
        "MozBorderRadiusBottomright": 6
    },
    "pagination-large ul>li:last-child>span": {
        "WebkitBorderTopRightRadius": 6,
        "borderTopRightRadius": 6,
        "WebkitBorderBottomRightRadius": 6,
        "borderBottomRightRadius": 6,
        "MozBorderRadiusTopright": 6,
        "MozBorderRadiusBottomright": 6
    },
    "pagination-mini ul>li:first-child>a": {
        "WebkitBorderBottomLeftRadius": 3,
        "borderBottomLeftRadius": 3,
        "WebkitBorderTopLeftRadius": 3,
        "borderTopLeftRadius": 3,
        "MozBorderRadiusBottomleft": 3,
        "MozBorderRadiusTopleft": 3
    },
    "pagination-mini ul>li:first-child>span": {
        "WebkitBorderBottomLeftRadius": 3,
        "borderBottomLeftRadius": 3,
        "WebkitBorderTopLeftRadius": 3,
        "borderTopLeftRadius": 3,
        "MozBorderRadiusBottomleft": 3,
        "MozBorderRadiusTopleft": 3
    },
    "pagination-small ul>li:first-child>a": {
        "WebkitBorderBottomLeftRadius": 3,
        "borderBottomLeftRadius": 3,
        "WebkitBorderTopLeftRadius": 3,
        "borderTopLeftRadius": 3,
        "MozBorderRadiusBottomleft": 3,
        "MozBorderRadiusTopleft": 3
    },
    "pagination-small ul>li:first-child>span": {
        "WebkitBorderBottomLeftRadius": 3,
        "borderBottomLeftRadius": 3,
        "WebkitBorderTopLeftRadius": 3,
        "borderTopLeftRadius": 3,
        "MozBorderRadiusBottomleft": 3,
        "MozBorderRadiusTopleft": 3
    },
    "pagination-mini ul>li:last-child>a": {
        "WebkitBorderTopRightRadius": 3,
        "borderTopRightRadius": 3,
        "WebkitBorderBottomRightRadius": 3,
        "borderBottomRightRadius": 3,
        "MozBorderRadiusTopright": 3,
        "MozBorderRadiusBottomright": 3
    },
    "pagination-mini ul>li:last-child>span": {
        "WebkitBorderTopRightRadius": 3,
        "borderTopRightRadius": 3,
        "WebkitBorderBottomRightRadius": 3,
        "borderBottomRightRadius": 3,
        "MozBorderRadiusTopright": 3,
        "MozBorderRadiusBottomright": 3
    },
    "pagination-small ul>li:last-child>a": {
        "WebkitBorderTopRightRadius": 3,
        "borderTopRightRadius": 3,
        "WebkitBorderBottomRightRadius": 3,
        "borderBottomRightRadius": 3,
        "MozBorderRadiusTopright": 3,
        "MozBorderRadiusBottomright": 3
    },
    "pagination-small ul>li:last-child>span": {
        "WebkitBorderTopRightRadius": 3,
        "borderTopRightRadius": 3,
        "WebkitBorderBottomRightRadius": 3,
        "borderBottomRightRadius": 3,
        "MozBorderRadiusTopright": 3,
        "MozBorderRadiusBottomright": 3
    },
    "pagination-small ul>li>a": {
        "paddingTop": 2,
        "paddingRight": 10,
        "paddingBottom": 2,
        "paddingLeft": 10,
        "fontSize": 11.9
    },
    "pagination-small ul>li>span": {
        "paddingTop": 2,
        "paddingRight": 10,
        "paddingBottom": 2,
        "paddingLeft": 10,
        "fontSize": 11.9
    },
    "pagination-mini ul>li>a": {
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6,
        "fontSize": 10.5
    },
    "pagination-mini ul>li>span": {
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6,
        "fontSize": 10.5
    },
    "pager:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "pager li": {
        "display": "inline"
    },
    "pager li>a": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "WebkitBorderRadius": 15,
        "MozBorderRadius": 15,
        "borderRadius": 15
    },
    "pager li>span": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "WebkitBorderRadius": 15,
        "MozBorderRadius": 15,
        "borderRadius": 15
    },
    "pager li>a:focus": {
        "textDecoration": "none",
        "backgroundColor": "#f5f5f5"
    },
    "pager li>a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#f5f5f5"
    },
    "pager next>a": {
        "float": "right"
    },
    "pager next>span": {
        "float": "right"
    },
    "pager previous>a": {
        "float": "left"
    },
    "pager previous>span": {
        "float": "left"
    },
    "pager disabled>a": {
        "color": "#999",
        "cursor": "default",
        "backgroundColor": "#fff"
    },
    "pager disabled>a:focus": {
        "color": "#999",
        "cursor": "default",
        "backgroundColor": "#fff"
    },
    "pager disabled>a:hover": {
        "color": "#999",
        "cursor": "default",
        "backgroundColor": "#fff"
    },
    "pager disabled>span": {
        "color": "#999",
        "cursor": "default",
        "backgroundColor": "#fff"
    },
    "modal-backdrop": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1040,
        "backgroundColor": "#000",
        "opacity": 0.8,
        "filter": "alpha(opacity=80)"
    },
    "modal-backdropfade": {
        "opacity": 0
    },
    "modal-backdropfadein": {
        "opacity": 0.8,
        "filter": "alpha(opacity=80)"
    },
    "modal": {
        "position": "fixed",
        "top": "10%",
        "left": "50%",
        "zIndex": 1050,
        "width": 560,
        "marginLeft": -280,
        "backgroundColor": "#fff",
        "border": "1px solid rgba(0,0,0,.3)",
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6,
        "outline": 0,
        "WebkitBoxShadow": "0 3px 7px rgba(0,0,0,.3)",
        "MozBoxShadow": "0 3px 7px rgba(0,0,0,.3)",
        "boxShadow": "0 3px 7px rgba(0,0,0,.3)",
        "WebkitBackgroundClip": "padding-box",
        "MozBackgroundClip": "padding-box",
        "backgroundClip": "padding-box"
    },
    "modalfade": {
        "top": "-25%",
        "WebkitTransition": "opacity .3s linear,top .3s ease-out",
        "MozTransition": "opacity .3s linear,top .3s ease-out",
        "OTransition": "opacity .3s linear,top .3s ease-out",
        "transition": "opacity .3s linear,top .3s ease-out"
    },
    "modalfadein": {
        "top": "10%"
    },
    "modal-header": {
        "paddingTop": 9,
        "paddingRight": 15,
        "paddingBottom": 9,
        "paddingLeft": 15,
        "borderBottom": "1px solid #eee"
    },
    "modal-header close": {
        "marginTop": 2
    },
    "modal-header h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 30
    },
    "modal-body": {
        "position": "relative",
        "maxHeight": 400,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "overflowY": "auto"
    },
    "tooltip": {
        "position": "absolute",
        "zIndex": 1030,
        "display": "block",
        "fontSize": 11,
        "lineHeight": 1.4,
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "visibility": "visible"
    },
    "tooltip-arrow": {
        "position": "absolute",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid"
    },
    "modal-footer:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "modal-footer btn+btn": {
        "marginBottom": 0,
        "marginLeft": 5
    },
    "modal-footer btn-group btn+btn": {
        "marginLeft": -1
    },
    "modal-footer btn-block+btn-block": {
        "marginLeft": 0
    },
    "tooltipin": {
        "opacity": 0.8,
        "filter": "alpha(opacity=80)"
    },
    "tooltiptop": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": -3
    },
    "tooltipright": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "marginLeft": 3
    },
    "tooltipbottom": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": 3
    },
    "tooltipleft": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "marginLeft": -3
    },
    "tooltip-inner": {
        "maxWidth": 200,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "color": "#fff",
        "textAlign": "center",
        "textDecoration": "none",
        "backgroundColor": "#000",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4
    },
    "tooltiptop tooltip-arrow": {
        "bottom": 0,
        "left": "50%",
        "marginLeft": -5,
        "borderTopColor": "#000",
        "borderWidth": "5px 5px 0"
    },
    "tooltipright tooltip-arrow": {
        "top": "50%",
        "left": 0,
        "marginTop": -5,
        "borderRightColor": "#000",
        "borderWidth": "5px 5px 5px 0"
    },
    "tooltipleft tooltip-arrow": {
        "top": "50%",
        "right": 0,
        "marginTop": -5,
        "borderLeftColor": "#000",
        "borderWidth": "5px 0 5px 5px"
    },
    "tooltipbottom tooltip-arrow": {
        "top": 0,
        "left": "50%",
        "marginLeft": -5,
        "borderBottomColor": "#000",
        "borderWidth": "0 5px 5px"
    },
    "popovertop": {
        "marginTop": -10
    },
    "popoverright": {
        "marginLeft": 10
    },
    "popoverbottom": {
        "marginTop": 10
    },
    "popoverleft": {
        "marginLeft": -10
    },
    "popover-title": {
        "paddingTop": 8,
        "paddingRight": 14,
        "paddingBottom": 8,
        "paddingLeft": 14,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "fontWeight": "400",
        "lineHeight": 18,
        "backgroundColor": "#f7f7f7",
        "borderBottom": "1px solid #ebebeb",
        "WebkitBorderRadius": "5px 5px 0 0",
        "MozBorderRadius": "5px 5px 0 0",
        "borderRadius": "5px 5px 0 0"
    },
    "popover-content": {
        "paddingTop": 9,
        "paddingRight": 14,
        "paddingBottom": 9,
        "paddingLeft": 14
    },
    "popover arrow": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 11
    },
    "popover arrow:after": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 10,
        "content": ""
    },
    "popovertop arrow": {
        "bottom": -11,
        "left": "50%",
        "marginLeft": -11,
        "borderTopColor": "rgba(0,0,0,.25)",
        "borderBottomWidth": 0
    },
    "popovertop arrow:after": {
        "bottom": 1,
        "marginLeft": -10,
        "borderTopColor": "#fff",
        "borderBottomWidth": 0
    },
    "popoverright arrow": {
        "top": "50%",
        "left": -11,
        "marginTop": -11,
        "borderRightColor": "rgba(0,0,0,.25)",
        "borderLeftWidth": 0
    },
    "popoverright arrow:after": {
        "bottom": -10,
        "left": 1,
        "borderRightColor": "#fff",
        "borderLeftWidth": 0
    },
    "popoverbottom arrow": {
        "top": -11,
        "left": "50%",
        "marginLeft": -11,
        "borderBottomColor": "rgba(0,0,0,.25)",
        "borderTopWidth": 0
    },
    "popoverbottom arrow:after": {
        "top": 1,
        "marginLeft": -10,
        "borderBottomColor": "#fff",
        "borderTopWidth": 0
    },
    "popoverleft arrow": {
        "top": "50%",
        "right": -11,
        "marginTop": -11,
        "borderLeftColor": "rgba(0,0,0,.25)",
        "borderRightWidth": 0
    },
    "popoverleft arrow:after": {
        "right": 1,
        "bottom": -10,
        "borderLeftColor": "#fff",
        "borderRightWidth": 0
    },
    "thumbnails:before": {
        "display": "table",
        "lineHeight": 0,
        "content": ""
    },
    "media-object": {
        "display": "block"
    },
    "thumbnail": {
        "display": "block",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "lineHeight": 20,
        "border": "1px solid #ddd",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "WebkitBoxShadow": "0 1px 3px rgba(0,0,0,.055)",
        "MozBoxShadow": "0 1px 3px rgba(0,0,0,.055)",
        "boxShadow": "0 1px 3px rgba(0,0,0,.055)",
        "WebkitTransition": "all .2s ease-in-out",
        "MozTransition": "all .2s ease-in-out",
        "OTransition": "all .2s ease-in-out",
        "transition": "all .2s ease-in-out"
    },
    "row-fluid thumbnails": {
        "marginLeft": 0
    },
    "thumbnails>li": {
        "float": "left",
        "marginBottom": 20,
        "marginLeft": 20
    },
    "athumbnail:focus": {
        "borderColor": "#08c",
        "WebkitBoxShadow": "0 1px 4px rgba(0,105,214,.25)",
        "MozBoxShadow": "0 1px 4px rgba(0,105,214,.25)",
        "boxShadow": "0 1px 4px rgba(0,105,214,.25)"
    },
    "athumbnail:hover": {
        "borderColor": "#08c",
        "WebkitBoxShadow": "0 1px 4px rgba(0,105,214,.25)",
        "MozBoxShadow": "0 1px 4px rgba(0,105,214,.25)",
        "boxShadow": "0 1px 4px rgba(0,105,214,.25)"
    },
    "thumbnail>img": {
        "display": "block",
        "maxWidth": "100%",
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "thumbnail caption": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "color": "#555"
    },
    "media": {
        "overflow": "hidden",
        "zoom": 1,
        "marginTop": 15
    },
    "media-body": {
        "overflow": "hidden",
        "zoom": 1
    },
    "media media": {
        "marginTop": 15
    },
    "media:first-child": {
        "marginTop": 0
    },
    "media-heading": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "accordion": {
        "marginBottom": 20
    },
    "media>pull-left": {
        "marginRight": 10
    },
    "media>pull-right": {
        "marginLeft": 10
    },
    "badge:empty": {
        "display": "none"
    },
    "label:empty": {
        "display": "none"
    },
    "abadge:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "abadge:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "alabel:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "alabel:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "badge-important": {
        "backgroundColor": "#b94a48"
    },
    "label-important": {
        "backgroundColor": "#b94a48"
    },
    "badge-important[href]": {
        "backgroundColor": "#953b39"
    },
    "label-important[href]": {
        "backgroundColor": "#953b39"
    },
    "badge-warning": {
        "backgroundColor": "#f89406"
    },
    "label-warning": {
        "backgroundColor": "#f89406"
    },
    "badge-warning[href]": {
        "backgroundColor": "#c67605"
    },
    "label-warning[href]": {
        "backgroundColor": "#c67605"
    },
    "badge-success": {
        "backgroundColor": "#468847"
    },
    "label-success": {
        "backgroundColor": "#468847"
    },
    "badge-success[href]": {
        "backgroundColor": "#356635"
    },
    "label-success[href]": {
        "backgroundColor": "#356635"
    },
    "badge-info": {
        "backgroundColor": "#3a87ad"
    },
    "label-info": {
        "backgroundColor": "#3a87ad"
    },
    "badge-info[href]": {
        "backgroundColor": "#2d6987"
    },
    "label-info[href]": {
        "backgroundColor": "#2d6987"
    },
    "badge-inverse": {
        "backgroundColor": "#333"
    },
    "label-inverse": {
        "backgroundColor": "#333"
    },
    "badge-inverse[href]": {
        "backgroundColor": "#1a1a1a"
    },
    "label-inverse[href]": {
        "backgroundColor": "#1a1a1a"
    },
    "btn badge": {
        "position": "relative",
        "top": -1
    },
    "btn label": {
        "position": "relative",
        "top": -1
    },
    "btn-mini badge": {
        "top": 0
    },
    "btn-mini label": {
        "top": 0
    },
    "progress bar+bar": {
        "WebkitBoxShadow": "inset 1px 0 0 rgba(0,0,0,.15),inset 0 -1px 0 rgba(0,0,0,.15)",
        "MozBoxShadow": "inset 1px 0 0 rgba(0,0,0,.15),inset 0 -1px 0 rgba(0,0,0,.15)",
        "boxShadow": "inset 1px 0 0 rgba(0,0,0,.15),inset 0 -1px 0 rgba(0,0,0,.15)"
    },
    "progress-striped bar": {
        "backgroundColor": "#149bdf",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
        "WebkitBackgroundSize": "40px 40px",
        "MozBackgroundSize": "40px 40px",
        "OBackgroundSize": "40px 40px",
        "backgroundSize": "40px 40px"
    },
    "progressactive bar": {
        "WebkitAnimation": "progress-bar-stripes 2s linear infinite",
        "MozAnimation": "progress-bar-stripes 2s linear infinite",
        "MsAnimation": "progress-bar-stripes 2s linear infinite",
        "OAnimation": "progress-bar-stripes 2s linear infinite",
        "animation": "progress-bar-stripes 2s linear infinite"
    },
    "progress-dangerprogress-striped bar": {
        "backgroundColor": "#ee5f5b",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
    },
    "progress-striped bar-danger": {
        "backgroundColor": "#ee5f5b",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
    },
    "progress-striped bar-success": {
        "backgroundColor": "#62c462",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
    },
    "progress-successprogress-striped bar": {
        "backgroundColor": "#62c462",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
    },
    "progress-infoprogress-striped bar": {
        "backgroundColor": "#5bc0de",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
    },
    "progress-striped bar-info": {
        "backgroundColor": "#5bc0de",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
    },
    "progress-striped bar-warning": {
        "backgroundColor": "#fbb450",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
    },
    "progress-warningprogress-striped bar": {
        "backgroundColor": "#fbb450",
        "backgroundImage": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
    },
    "accordion-group": {
        "marginBottom": 2,
        "border": "1px solid #e5e5e5",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4
    },
    "accordion-heading": {
        "borderBottom": 0
    },
    "accordion-heading accordion-toggle": {
        "display": "block",
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15
    },
    "accordion-inner": {
        "paddingTop": 9,
        "paddingRight": 15,
        "paddingBottom": 9,
        "paddingLeft": 15,
        "borderTop": "1px solid #e5e5e5"
    },
    "carousel": {
        "position": "relative",
        "marginBottom": 20,
        "lineHeight": 1
    },
    "carousel-inner": {
        "position": "relative",
        "width": "100%",
        "overflow": "hidden"
    },
    "carousel-inner>item": {
        "position": "relative",
        "display": "none",
        "WebkitTransition": ".6s ease-in-out left",
        "MozTransition": ".6s ease-in-out left",
        "OTransition": ".6s ease-in-out left",
        "transition": ".6s ease-in-out left"
    },
    "carousel-inner>item>a>img": {
        "display": "block",
        "lineHeight": 1
    },
    "carousel-inner>item>img": {
        "display": "block",
        "lineHeight": 1
    },
    "carousel-inner>active": {
        "display": "block",
        "left": 0
    },
    "carousel-inner>next": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "100%"
    },
    "carousel-inner>prev": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "-100%"
    },
    "carousel-inner>nextleft": {
        "left": 0
    },
    "carousel-inner>prevright": {
        "left": 0
    },
    "carousel-inner>activeleft": {
        "left": "-100%"
    },
    "carousel-inner>activeright": {
        "left": "100%"
    },
    "carousel-control": {
        "position": "absolute",
        "top": "40%",
        "left": 15,
        "width": 40,
        "height": 40,
        "marginTop": -20,
        "fontSize": 60,
        "fontWeight": "100",
        "lineHeight": 30,
        "color": "#fff",
        "textAlign": "center",
        "background": "#222",
        "border": "3px solid #fff",
        "WebkitBorderRadius": 23,
        "MozBorderRadius": 23,
        "borderRadius": 23,
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "carousel-controlright": {
        "right": 15,
        "left": "auto"
    },
    "carousel-control:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "carousel-control:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "carousel-indicators li": {
        "display": "block",
        "float": "left",
        "width": 10,
        "height": 10,
        "marginLeft": 5,
        "textIndent": -999,
        "backgroundColor": "rgba(255,255,255,.25)",
        "borderRadius": 5
    },
    "carousel-indicators active": {
        "backgroundColor": "#fff"
    },
    "carousel-caption": {
        "position": "absolute",
        "right": 0,
        "bottom": 0,
        "left": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "background": "rgba(0,0,0,.75)"
    },
    "carousel-caption h4": {
        "lineHeight": 20,
        "color": "#fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "carousel-caption p": {
        "lineHeight": 20,
        "color": "#fff",
        "marginBottom": 0
    },
    "hero-unit": {
        "paddingTop": 60,
        "paddingRight": 60,
        "paddingBottom": 60,
        "paddingLeft": 60,
        "marginBottom": 30,
        "fontSize": 18,
        "fontWeight": "200",
        "lineHeight": 30,
        "color": "inherit",
        "backgroundColor": "#eee",
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6
    },
    "hero-unit h1": {
        "marginBottom": 0,
        "fontSize": 60,
        "lineHeight": 1,
        "letterSpacing": -1,
        "color": "inherit"
    },
    "hero-unit li": {
        "lineHeight": 30
    },
    "pull-right": {
        "float": "right"
    },
    "pull-left": {
        "float": "left"
    },
    "hide": {
        "display": "none"
    },
    "show": {
        "display": "block"
    },
    "invisible": {
        "visibility": "hidden"
    },
    "affix": {
        "position": "fixed"
    },
    "p code": {
        "background": "0 0",
        "color": "#7f7f7f",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1,
        "paddingTop": 1,
        "paddingRight": 4,
        "paddingBottom": 1,
        "paddingLeft": 4,
        "borderRadius": 1
    },
    "div preprettyprint": {
        "fontSize": 14,
        "borderRadius": 0,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "border": "none",
        "marginTop": 20,
        "marginRight": -10,
        "marginBottom": 20,
        "marginLeft": -10,
        "borderWidth": "1px 0",
        "background": "#f7f7f7",
        "OTabSize": 4,
        "MozTabSize": 4,
        "tabSize": 4
    },
    "main": {
        "position": "relative",
        "width": "90%",
        "maxWidth": 1400,
        "minWidth": 960,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "minHeight": 400
    },
    "bold": {
        "fontWeight": "700"
    },
    "tag a": {
        "fontWeight": "700",
        "color": "#fff",
        "textDecoration": "none"
    },
    "content changes": {
        "overflow": "hidden",
        "fontSize": 12,
        "color": "#838383"
    },
    "cell": {
        "overflow": "hidden",
        "position": "relative",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 14
    },
    "unstyled li div": {
        "overflow": "hidden"
    },
    "user_name": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "maxWidth": 120,
        "whiteSpace": "nowrap",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "adark": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "color": "#666",
        "textDecoration": "none"
    },
    "atopic_title": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "maxWidth": "70%",
        "OTextOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "display": "inline-block",
        "verticalAlign": "middle",
        "fontSize": 16,
        "lineHeight": 30
    },
    "panel inner unstyled li div": {
        "textOverflow": "ellipsis"
    },
    "topic_title_wrapper": {
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "tabbable ul": {
        "maxHeight": 40
    },
    "topic_list": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "topic_list cell:hover": {
        "background": "#f5f5f5"
    },
    "content": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginRight": 305
    },
    "sidebar": {
        "width": 290,
        "fontSize": 14,
        "float": "right",
        "marginBottom": 20
    },
    "content topic_full_title": {
        "fontSize": 22,
        "fontWeight": "700",
        "marginTop": 8,
        "marginRight": 0,
        "marginBottom": 8,
        "marginLeft": 0,
        "display": "inline-block",
        "verticalAlign": "bottom",
        "width": "75%",
        "lineHeight": "130%"
    },
    "content changes span:before": {
        "content": "•"
    },
    "content changes a": {
        "color": "inherit"
    },
    "content action": {
        "float": "right",
        "marginTop": 8
    },
    "content share": {
        "textAlign": "right"
    },
    "manage_topic a": {
        "textDecoration": "none",
        "marginRight": 0.5
    },
    "sidebar panel": {
        "fontSize": 13
    },
    "sidebar header": {
        "color": "#51585c",
        "borderRadius": "3px 3px 0 0"
    },
    "sidebar topic_title": {
        "maxWidth": 270,
        "fontSize": 14
    },
    "footerfix-bottom": {
        "position": "fixed",
        "bottom": 0,
        "width": "100%"
    },
    "footer_main": {
        "width": "90%",
        "maxWidth": 1400,
        "minWidth": 960,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "color": "#e2e2e2",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "fontSize": 13,
        "lineHeight": 2
    },
    "footer_main col_fade a": {
        "verticalAlign": "bottom"
    },
    "footer_main col_fade p": {
        "lineHeight": 20,
        "verticalAlign": "bottom"
    },
    "panel inner": {
        "lineHeight": 2,
        "backgroundColor": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderRadius": "0 0 3px 3px"
    },
    "panel inner li": {
        "lineHeight": 2
    },
    "mark_all_messages_btn": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "forgot_password": {
        "marginLeft": 1
    },
    "col_fade": {
        "color": "#ababab"
    },
    "header col_fade": {
        "color": "#444"
    },
    "adark:active": {
        "color": "#666",
        "textDecoration": "none"
    },
    "adark:link": {
        "color": "#666",
        "textDecoration": "none"
    },
    "adark:visited": {
        "color": "#666",
        "textDecoration": "none"
    },
    "adark:hover": {
        "color": "#385f8a"
    },
    "alight:active": {
        "color": "#005580",
        "textDecoration": "none"
    },
    "alight:link": {
        "color": "#005580",
        "textDecoration": "none"
    },
    "alight:visited": {
        "color": "#005580",
        "textDecoration": "none"
    },
    "alight:hover": {
        "color": "gray",
        "textDecoration": "none"
    },
    "panel": {
        "marginBottom": 13
    },
    "breadcrumb a": {
        "color": "#80bd01"
    },
    "panel header": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "#f6f6f6",
        "borderRadius": "3px 3px 0 0"
    },
    "panel headertopic_header": {
        "backgroundColor": "#fff"
    },
    "panel moon": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "panel moon_tags": {
        "paddingLeft": 10
    },
    "panel innerpost": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderTop": "1px solid #e5e5e5"
    },
    "panel innerreply": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderTop": "1px solid #e5e5e5"
    },
    "panel innertopic": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderTop": "1px solid #e5e5e5"
    },
    "panel inneruserinfo": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderTop": "1px solid #e5e5e5"
    },
    "panel inner a": {
        "color": "#778087"
    },
    "panel inner>formform-horizontal": {
        "marginTop": 40
    },
    "panel innerno-padding": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "panel>cell:last-child": {
        "boxShadow": "none"
    },
    "panel cell": {
        "paddingRight": 10,
        "background": "#fff",
        "borderTop": "1px solid #f0f0f0"
    },
    "panel cell:nth-child(1)": {
        "borderTop": "none"
    },
    "cell reply_count": {
        "width": 70,
        "display": "inline-block",
        "textAlign": "center"
    },
    "cell count_of_replies": {
        "color": "#9e78c0"
    },
    "cell count_seperator": {
        "marginTop": 0,
        "marginRight": -3,
        "marginBottom": 0,
        "marginLeft": -3,
        "fontSize": 10
    },
    "cell count_of_visits": {
        "fontSize": 10,
        "color": "#b4b4b4"
    },
    "cell cell": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "cellmessage": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "cellmore": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "cell[message_id]": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "cell:last-child": {
        "borderBottom": "none"
    },
    "cellmessage a": {
        "maxWidth": 460,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "cell[message_id] a": {
        "maxWidth": 460,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "last_time": {
        "fontSize": 11,
        "display": "inline-block",
        "marginLeft": 20,
        "color": "#777"
    },
    "last_time last_active_time": {
        "textAlign": "right",
        "minWidth": 50,
        "display": "inline-block",
        "whiteSpace": "nowrap"
    },
    "alast_time": {
        "textDecoration": "none"
    },
    "last_time user_small_avatar": {
        "height": 18,
        "width": 18,
        "verticalAlign": "middle",
        "marginRight": 0.5,
        "borderRadius": 3
    },
    "board a": {
        "color": "#404040"
    },
    "board a:hover": {
        "textDecoration": "none"
    },
    "big": {
        "fontSize": 14
    },
    "messages_count": {
        "WebkitBorderRadius": 8,
        "MozBorderRadius": 8,
        "OBorderRadius": 8,
        "borderRadius": 8,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "backgroundColor": "#80bd01",
        "color": "#fff",
        "marginRight": 0.5
    },
    "tag_selectable": {
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0,
        "display": "inline-block",
        "cursor": "pointer",
        "borderRadius": 3,
        "paddingTop": 3,
        "paddingRight": 5,
        "paddingBottom": 3,
        "paddingLeft": 5,
        "border": "1px solid #ccc"
    },
    "atag_big": {
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "borderRadius": 3,
        "paddingTop": 2,
        "paddingRight": 5,
        "paddingBottom": 2,
        "paddingLeft": 5,
        "marginTop": 0,
        "marginRight": 8,
        "marginBottom": 5,
        "marginLeft": 0,
        "display": "inline-block",
        "textDecoration": "none"
    },
    "edit_tag": {
        "marginLeft": 8
    },
    "tag a:hover": {
        "color": "#ccc"
    },
    "tag_in_topic": {
        "OBorderRadius": 3,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0,
        "display": "inline-block",
        "cursor": "pointer",
        "fontSize": 14,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3,
        "paddingTop": 1,
        "paddingRight": 3,
        "paddingBottom": 1,
        "paddingLeft": 3,
        "background": "#bfbfbf"
    },
    "tag_in_abstract": {
        "fontSize": 14,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "color": "#fff",
        "paddingTop": 1,
        "paddingRight": 2,
        "paddingBottom": 1,
        "paddingLeft": 2,
        "fontWeight": "700",
        "background": "#c8cfe0",
        "textDecoration": "none",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "OBorderRadius": 3,
        "borderRadius": 3
    },
    "tag_select": {
        "color": "#09f"
    },
    "tag_in_topic a": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "tag_in_topic a:hover": {
        "color": "#09f"
    },
    "tag_highlight": {
        "color": "#fff",
        "paddingTop": 1,
        "paddingRight": 2,
        "paddingBottom": 1,
        "paddingLeft": 2,
        "fontWeight": "700",
        "fontSize": 14,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "tag_in_abstract:hover": {
        "background": "#a7b3cd"
    },
    "tag_with_num": {
        "marginRight": 10,
        "display": "inline-block"
    },
    "tag_num": {
        "fontSize": 11,
        "marginLeft": -10
    },
    "user_avatar img": {
        "width": 30,
        "height": 30,
        "borderRadius": 3
    },
    "user_big_avatar img": {
        "width": 40,
        "height": 40,
        "borderRadius": 3
    },
    "auser_avatar:hover": {
        "textDecoration": "none"
    },
    "user_card user_avatar": {
        "verticalAlign": "middle",
        "marginRight": 0.5
    },
    "user_card user_avatar img": {
        "width": 48,
        "height": 48
    },
    "user_card user_name": {
        "fontSize": 16
    },
    "user_big_avatar": {
        "float": "left",
        "marginRight": 10
    },
    "fa": {
        "color": "#000",
        "opacity": 0.4,
        "display": "inline-block",
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": "inherit",
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "fa:hover": {
        "color": "#000",
        "opacity": 0.6
    },
    "user": {
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "borderRadius": 3,
        "WebkitBoxShadow": "0 2px 2px rgba(0,0,0,.15)",
        "MozBoxShadow": "0 2px 2px rgba(0,0,0,.15)",
        "OBoxShadow": "0 2px 2px rgba(0,0,0,.15)",
        "boxShadow": "0 2px 2px rgba(0,0,0,.15)",
        "width": 200,
        "height": 80,
        "border": "1px dashed #e2e2e2",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginRight": 20,
        "marginBottom": 20,
        "display": "inline-block"
    },
    "user user_avatar": {
        "width": 32,
        "height": 32
    },
    "user user_name": {
        "fontSize": 14,
        "marginLeft": 1
    },
    "reply_author": {
        "fontSize": 12,
        "fontWeight": "700"
    },
    "reply_by_author": {
        "color": "#fff",
        "backgroundColor": "#6ba44e",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "fontSize": 12
    },
    "reply_time": {
        "fontSize": 11
    },
    "cell anchor": {
        "position": "absolute",
        "top": -5
    },
    "author_content user_avatar": {
        "display": "inline-block",
        "float": "left"
    },
    "user_info": {
        "marginLeft": 10,
        "display": "inline-block"
    },
    "user_action": {
        "float": "right",
        "marginLeft": 20,
        "fontSize": 15
    },
    "user_action a": {
        "textDecoration": "none"
    },
    "user_action up-count": {
        "color": "gray"
    },
    "reply_content": {
        "paddingLeft": 50,
        "color": "#333"
    },
    "reply_editor": {
        "height": 200
    },
    "cellreply_highlight": {
        "backgroundColor": "#f4fcf0"
    },
    "reply2_at_btn": {
        "opacity": 0.4,
        "cursor": "pointer"
    },
    "reply2_btn": {
        "opacity": 0.4,
        "cursor": "pointer"
    },
    "reply2_at_btn:hover": {
        "opacity": 0.6
    },
    "reply2_btn:hover": {
        "opacity": 0.6
    },
    "reply2_area": {
        "marginLeft": 42
    },
    "reply2_form": {
        "display": "none",
        "marginTop": 2
    },
    "submit_control": {
        "height": 48,
        "lineHeight": 48
    },
    "topic_list atopic_title": {
        "color": "#333"
    },
    "topic_list atopic_title:visited": {
        "color": "#888"
    },
    "put_good": {
        "background": "#80bd01",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "borderRadius": 3,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "color": "#fff",
        "fontSize": 12
    },
    "put_top": {
        "background": "#80bd01",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "borderRadius": 3,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "color": "#fff",
        "fontSize": 12
    },
    "imgunread": {
        "opacity": 0.1,
        "cursor": "pointer"
    },
    "board": {
        "marginTop": 10,
        "width": "80%"
    },
    "tags_select": {
        "border": "1px dashed #ccc",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "user_profile": {
        "marginTop": 20,
        "clear": "left"
    },
    "backtotop": {
        "width": 24,
        "color": "gray",
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 5,
        "display": "none",
        "position": "fixed",
        "cursor": "pointer",
        "textAlign": "center",
        "zIndex": 20,
        "backgroundColor": "#fff",
        "borderRadius": "12px 0 0 12px"
    },
    "markdown-text p": {
        "whiteSpace": "-o-pre-wrap",
        "wordWrap": "break-word",
        "lineHeight": 2,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "preview p": {
        "whiteSpace": "-o-pre-wrap",
        "wordWrap": "break-word",
        "lineHeight": 1.7,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "fontSize": 15,
        "overflow": "auto"
    },
    "markdown-text>:last-child": {
        "marginBottom": 1
    },
    "preview>:last-child": {
        "marginBottom": 1
    },
    "textareatitle": {
        "marginBottom": 1,
        "width": "98%",
        "border": "none",
        "resize": "none",
        "height": 20
    },
    "markdown-text>:first-child": {
        "marginTop": 0
    },
    "preview>:first-child": {
        "marginTop": 0
    },
    "markdown-text li": {
        "fontSize": 14,
        "lineHeight": 2
    },
    "preview li": {
        "fontSize": 14,
        "lineHeight": 2
    },
    "markdown-text li code": {
        "color": "#000",
        "backgroundColor": "#fcfafa",
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6
    },
    "markdown-text p code": {
        "color": "#000",
        "backgroundColor": "#fcfafa",
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6
    },
    "preview li code": {
        "color": "#000",
        "backgroundColor": "#fcfafa",
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6
    },
    "preview p code": {
        "color": "#000",
        "backgroundColor": "#fcfafa",
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6
    },
    "markdown-text img": {
        "cursor": "pointer"
    },
    "markdown-text h1 code": {
        "fontSize": "inherit",
        "color": "inherit"
    },
    "markdown-text h2 code": {
        "fontSize": "inherit",
        "color": "inherit"
    },
    "markdown-text h3 code": {
        "fontSize": "inherit",
        "color": "inherit"
    },
    "markdown-text h4 code": {
        "fontSize": "inherit",
        "color": "inherit"
    },
    "markdown-text h5 code": {
        "fontSize": "inherit",
        "color": "inherit"
    },
    "markdown-text h6 code": {
        "fontSize": "inherit",
        "color": "inherit"
    },
    "panel markdown-text a": {
        "color": "#08c"
    },
    "preview": {
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "fontSize": 15,
        "minHeight": 200,
        "wordBreak": "break-all"
    },
    "preview p>img": {
        "display": "block",
        "boxShadow": "0 0 4px rgba(0,0,0,.6)"
    },
    "markdown_editor markdown_in_editor": {
        "display": "none"
    },
    "markdown_editor markdown_in_preview": {
        "display": "none"
    },
    "markdown_editorin_editor markdown_in_editor": {
        "display": "block"
    },
    "markdown_editorin_preview markdown_in_preview": {
        "display": "block"
    },
    "editor_buttons": {
        "marginTop": 10
    },
    "editor_buttons>button": {
        "verticalAlign": "baseline"
    },
    "navbar navbar-search": {
        "marginTop": 6
    },
    "navbar search-query": {
        "WebkitBoxShadow": "none",
        "MozBoxShadow": "none",
        "background": "url(/public/images/search.e53b380a.hashed.png) 4px 4px no-repeat #888",
        "paddingTop": 3,
        "paddingRight": 5,
        "paddingBottom": 3,
        "paddingLeft": 22,
        "color": "#666",
        "border": 0,
        "marginTop": 2,
        "transition": "all .5s"
    },
    "span-common": {
        "boxShadow": "none",
        "fontSize": 14,
        "display": "inline-block",
        "float": "none",
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "border": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "transition": "all .2s ease-in-out",
        "cursor": "pointer",
        "letterSpacing": 2,
        "borderRadius": 3,
        "lineHeight": 2,
        "verticalAlign": "middle",
        "backgroundColor": "#e5e5e5"
    },
    "navbar search-queryfocused": {
        "backgroundColor": "#fff"
    },
    "navbar search-query:focus": {
        "backgroundColor": "#fff"
    },
    "navbar search-query:hover": {
        "backgroundColor": "#fff"
    },
    "navbar nav divider-vertical": {
        "backgroundColor": "#2b3741",
        "borderRight": "1px solid #2f3b46"
    },
    "nav-pills": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "pagination a": {
        "lineHeight": 30,
        "color": "#f6f6f6"
    },
    "pagination liactive a": {
        "color": "#80bd01"
    },
    "topic_content": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10
    },
    "preview h1": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "preview h2": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "preview h3": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "preview h4": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "preview h5": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "preview h6": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "reply_area h1": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "reply_area h2": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "reply_area h3": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "reply_area h4": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "reply_area h5": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "reply_area h6": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "topic_content h1": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee",
        "fontSize": 32.5
    },
    "topic_content h2": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee",
        "fontSize": 26
    },
    "topic_content h3": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "topic_content h4": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "topic_content h5": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "topic_content h6": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "reply_content p": {
        "fontSize": 15,
        "lineHeight": 1.7,
        "overflow": "auto"
    },
    "reply_form p": {
        "fontSize": 15,
        "lineHeight": 1.7,
        "overflow": "auto"
    },
    "topic_content p": {
        "fontSize": 15,
        "lineHeight": 1.7,
        "overflow": "auto"
    },
    "index_notify": {
        "fontSize": 14
    },
    "main reply_content p acontent_img": {
        "color": "#666",
        "boxShadow": "0 1px 2px rgba(140,140,140,.6)",
        "display": "inline-block",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "main topic_content p acontent_img": {
        "color": "#666",
        "boxShadow": "0 1px 2px rgba(140,140,140,.6)",
        "display": "inline-block",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "main p acontent_img": {
        "maxWidth": "100%"
    },
    "div[class$=content]>blockquote>p": {
        "fontSize": 14,
        "lineHeight": 18
    },
    "sidebar inner ol": {
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 0,
        "listStyle": "none"
    },
    "top_score": {
        "color": "gray",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "marginRight": 10
    },
    "div[class$=part]": {
        "display": "inline-block"
    },
    "click_part": {
        "width": 80
    },
    "reply_part": {
        "width": 300
    },
    "input:focus": {
        "boxShadow": "0 0 2px rgba(60,60,60,.5)"
    },
    "textareaeditor": {
        "width": "98%",
        "lineHeight": 2,
        "height": 200,
        "resize": "vertical",
        "fontSize": 15,
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "border": "none"
    },
    "create_topic_form textareaeditor": {
        "height": 400
    },
    "edit_reply_form textareaeditor": {
        "height": 400
    },
    "create_topic_form preview": {
        "minHeight": 400
    },
    "edit_reply_form preview": {
        "minHeight": 400
    },
    "marked_icon": {
        "float": "right"
    },
    "reply_content table": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "font": "inherit"
    },
    "topic_content table": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "font": "inherit"
    },
    "reply_content table tr": {
        "borderTop": "1px solid #ccc",
        "backgroundColor": "#fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "topic_content table tr": {
        "borderTop": "1px solid #ccc",
        "backgroundColor": "#fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "reply_content table tr:nth-child(2n)": {
        "backgroundColor": "#f8f8f8"
    },
    "topic_content table tr:nth-child(2n)": {
        "backgroundColor": "#f8f8f8"
    },
    "reply_content table tr th": {
        "fontWeight": "700",
        "border": "1px solid #ccc",
        "textAlign": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 6,
        "paddingRight": 13,
        "paddingBottom": 6,
        "paddingLeft": 13
    },
    "topic_content table tr th": {
        "fontWeight": "700",
        "border": "1px solid #ccc",
        "textAlign": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 6,
        "paddingRight": 13,
        "paddingBottom": 6,
        "paddingLeft": 13
    },
    "reply_content table tr td": {
        "border": "1px solid #ccc",
        "textAlign": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 6,
        "paddingRight": 13,
        "paddingBottom": 6,
        "paddingLeft": 13
    },
    "topic_content table tr td": {
        "border": "1px solid #ccc",
        "textAlign": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 6,
        "paddingRight": 13,
        "paddingBottom": 6,
        "paddingLeft": 13
    },
    "preview-modal": {
        "textAlign": "center",
        "width": "98%",
        "marginLeft": "-49%",
        "top": "2%",
        "maxHeight": "96%",
        "overflowY": "scroll",
        "display": "none"
    },
    "cnode-app-download": {
        "textAlign": "center"
    },
    "reply_content table tr td>:first-child": {
        "marginTop": 0
    },
    "reply_content table tr th>:first-child": {
        "marginTop": 0
    },
    "topic_content table tr td>:first-child": {
        "marginTop": 0
    },
    "topic_content table tr th>:first-child": {
        "marginTop": 0
    },
    "reply_content table tr td>:last-child": {
        "marginBottom": 0
    },
    "reply_content table tr th>:last-child": {
        "marginBottom": 0
    },
    "topic_content table tr td>:last-child": {
        "marginBottom": 0
    },
    "topic_content table tr th>:last-child": {
        "marginBottom": 0
    },
    "span-primary": {
        "border": "none",
        "display": "inline-block",
        "float": "none",
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "transition": "all .2s ease-in-out",
        "letterSpacing": 2,
        "boxShadow": "none",
        "lineHeight": 2,
        "verticalAlign": "middle",
        "color": "#fff",
        "cursor": "pointer",
        "borderRadius": 3,
        "backgroundColor": "#08c"
    },
    "span-success": {
        "border": "none",
        "display": "inline-block",
        "float": "none",
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "transition": "all .2s ease-in-out",
        "letterSpacing": 2,
        "boxShadow": "none",
        "lineHeight": 2,
        "verticalAlign": "middle",
        "color": "#fff",
        "cursor": "pointer",
        "borderRadius": 3,
        "backgroundColor": "#80bd01"
    },
    "span-common:hover": {
        "backgroundColor": "#909090",
        "color": "#fff"
    },
    "span-success:hover": {
        "color": "#fff",
        "backgroundColor": "#6ba44e"
    },
    "span-primary:hover": {
        "color": "#fff",
        "backgroundColor": "#05c"
    },
    "span-info": {
        "display": "inline-block",
        "float": "none",
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "border": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "transition": "all .2s ease-in-out",
        "cursor": "pointer",
        "letterSpacing": 2,
        "boxShadow": "none",
        "borderRadius": 3,
        "lineHeight": 2,
        "verticalAlign": "middle",
        "color": "#fff",
        "backgroundColor": "#5bc0de"
    },
    "span-info:hover": {
        "color": "#fff",
        "backgroundColor": "#2f96b4"
    },
    "signature": {
        "fontStyle": "italic"
    },
    "topic-tab": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10,
        "color": "#80bd01"
    },
    "topic-tabcurrent-tab": {
        "backgroundColor": "#80bd01",
        "color": "#fff",
        "paddingTop": 3,
        "paddingRight": 4,
        "paddingBottom": 3,
        "paddingLeft": 4,
        "borderRadius": 3
    },
    "topic-tab:hover": {
        "textDecoration": "none"
    },
    "topiclist-tab": {
        "backgroundColor": "#e5e5e5",
        "color": "#999",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "borderRadius": 3,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "fontSize": 12
    },
    "up_btn": {
        "cursor": "pointer",
        "opacity": 0.4
    },
    "up_btnuped": {
        "opacity": 1
    },
    "reply CodeMirror": {
        "height": 160
    },
    "reply2_area CodeMirror": {
        "height": 160
    },
    "reply CodeMirror:-webkit-full-screen": {
        "height": "100%"
    },
    "reply2_area CodeMirror:-webkit-full-screen": {
        "height": "100%"
    },
    "reply CodeMirror:-moz-full-screen": {
        "height": "100%"
    },
    "reply2_area CodeMirror:-moz-full-screen": {
        "height": "100%"
    },
    "reply CodeMirror:fullscreen": {
        "height": "100%"
    },
    "reply2_area CodeMirror:fullscreen": {
        "height": "100%"
    },
    "sep10": {
        "height": 10
    },
    "replies_history": {
        "position": "absolute",
        "border": "1px solid #aaa",
        "backgroundColor": "#FcFcFc",
        "boxShadow": "2px 2px 6px #aaa",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "minWidth": 130,
        "maxWidth": 300
    },
    "replies_history inner_content": {
        "overflowY": "auto",
        "maxHeight": 400
    },
    "replies_history inner_content::-webkit-scrollbar": {
        "width": 6,
        "backgroundColor": "#F5F5F5"
    },
    "replies_history inner_content::-webkit-scrollbar-track": {
        "WebkitBoxShadow": "inset 0 0 6px rgba(0,0,0,.3)",
        "backgroundColor": "#F5F5F5"
    },
    "replies_history inner_content::-webkit-scrollbar-thumb": {
        "backgroundColor": "#999"
    },
    "replies_history item": {
        "borderTop": "1px solid #ddd",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "replies_history item img": {
        "width": 30,
        "height": 30,
        "marginRight": 10
    },
    "replies_history item scroll_to_original": {
        "cursor": "pointer",
        "visibility": "hidden",
        "fontSize": 1.2,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "replies_history item:hover scroll_to_original": {
        "visibility": "visible"
    },
    "replies_history title": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "100%",
        "textAlign": "center"
    },
    "replies_history title with": {
        "fontWeight": "700",
        "color": "#08c"
    },
    "replies_history anchor": {
        "width": 0,
        "height": 0,
        "borderRight": "10px solid #aaa",
        "borderTop": "6px solid transparent",
        "borderBottom": "6px solid transparent",
        "borderLeft": 0,
        "position": "absolute",
        "top": 12,
        "left": -10
    },
    "friendship-community img": {
        "width": 150
    },
    "access_token": {
        "width": 200,
        "height": 200
    },
    "preview-modal img": {
        "boxShadow": "0 0 10px 5px grey",
        "cursor": "pointer"
    },
    "about-friend-links img": {
        "width": 250,
        "height": 60
    },
    "sponsor_outlink:hover": {
        "textDecoration": "none"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "sidebar-mask": {
        "backgroundColor": "#333",
        "width": "100%",
        "height": "100%",
        "filter": "alpha(opacity=60)",
        "opacity": 0.6,
        "zIndex": 99,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "display": "none"
    },
    "atwho-view": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "display": "none",
        "marginTop": 18,
        "background": "#fff",
        "color": "#000",
        "border": "1px solid #DDD",
        "borderRadius": 3,
        "boxShadow": "0 0 5px rgba(0,0,0,.1)",
        "minWidth": 120,
        "zIndex": "11110!important"
    },
    "atwho-view cur": {
        "background": "#36F",
        "color": "#fff"
    },
    "atwho-view cur small": {
        "color": "#fff"
    },
    "atwho-view strong": {
        "color": "#36F"
    },
    "atwho-view cur strong": {
        "color": "#fff",
        "font": 700
    },
    "atwho-view ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "atwho-view ul li": {
        "display": "block",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "borderBottom": "1px solid #DDD",
        "cursor": "pointer"
    },
    "atwho-view small": {
        "fontSize": "smaller",
        "color": "#777",
        "fontWeight": "400"
    },
    "[data-icon]:before": {
        "fontFamily": "icomoon",
        "content": "attr(data-icon)",
        "speak": "none",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-bold": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-code": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-contract": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-fullscreen": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-image": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-info": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-italic": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-link": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-music": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-ordered-list": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-play": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-preview": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-question": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-quote": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-redo": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-undo": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-unordered-list": {
        "fontFamily": "icomoon",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased"
    },
    "eicon-bold:before": {
        "content": "\\e000"
    },
    "eicon-italic:before": {
        "content": "\\e001"
    },
    "eicon-quote:before": {
        "content": "\\e003"
    },
    "eicon-unordered-list:before": {
        "content": "\\e004"
    },
    "eicon-ordered-list:before": {
        "content": "\\e005"
    },
    "eicon-link:before": {
        "content": "\\e006"
    },
    "eicon-image:before": {
        "content": "\\e007"
    },
    "eicon-play:before": {
        "content": "\\e008"
    },
    "eicon-music:before": {
        "content": "\\e009"
    },
    "eicon-contract:before": {
        "content": "\\e00a"
    },
    "eicon-fullscreen:before": {
        "content": "\\e00b"
    },
    "eicon-question:before": {
        "content": "\\e00c"
    },
    "eicon-info:before": {
        "content": "\\e00d"
    },
    "eicon-undo:before": {
        "content": "\\e00e"
    },
    "eicon-redo:before": {
        "content": "\\e00f"
    },
    "eicon-code:before": {
        "content": "\\e011"
    },
    "eicon-preview:before": {
        "content": "\\e002"
    },
    "CodeMirror-scroll": {
        "overflow": "auto",
        "marginBottom": -30,
        "marginRight": -30,
        "paddingBottom": 30,
        "paddingRight": 30,
        "height": "100%",
        "outline": 0,
        "position": "relative"
    },
    "CodeMirror-lines": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "cursor": "text"
    },
    "CodeMirror pre": {
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "MozBorderRadius": 0,
        "WebkitBorderRadius": 0,
        "OBorderRadius": 0,
        "borderRadius": 0,
        "borderWidth": 0,
        "background": "0 0",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "whiteSpace": "pre-wrap",
        "wordWrap": "normal",
        "lineHeight": "inherit",
        "color": "inherit",
        "zIndex": 2,
        "position": "relative",
        "overflow": "visible"
    },
    "CodeMirror-scrollbar-filler": {
        "backgroundColor": "#fff",
        "position": "absolute",
        "zIndex": 6,
        "display": "none",
        "right": 0,
        "bottom": 0
    },
    "CodeMirror divCodeMirror-cursor": {
        "borderLeft": "1px solid #000",
        "zIndex": 3,
        "position": "absolute",
        "visibility": "hidden",
        "borderRight": "none",
        "width": 0
    },
    "CodeMirror divCodeMirror-secondarycursor": {
        "borderLeft": "1px solid silver"
    },
    "CodeMirrorcm-keymap-fat-cursor divCodeMirror-cursor": {
        "width": "auto",
        "border": 0,
        "background": "#7e7",
        "zIndex": 1
    },
    "cm-s-paper cm-keyword": {
        "color": "#555"
    },
    "cm-s-paper cm-atom": {
        "color": "#7f8c8d"
    },
    "cm-s-paper cm-number": {
        "color": "#7f8c8d"
    },
    "cm-s-paper cm-def": {
        "color": "#00f"
    },
    "cm-s-paper cm-variable": {
        "color": "#000"
    },
    "cm-s-paper cm-variable-2": {
        "color": "#555"
    },
    "cm-s-paper cm-variable-3": {
        "color": "#085"
    },
    "cm-s-paper cm-operator": {
        "color": "#000"
    },
    "cm-s-paper cm-property": {
        "color": "#000"
    },
    "cm-s-paper cm-comment": {
        "color": "#959595"
    },
    "cm-s-paper cm-string": {
        "color": "#7f8c8d"
    },
    "cm-s-paper cm-string-2": {
        "color": "#f50"
    },
    "cm-s-paper cm-meta": {
        "color": "#555"
    },
    "cm-s-paper cm-error": {
        "color": "red"
    },
    "cm-s-paper cm-builtin": {
        "color": "#555"
    },
    "cm-s-paper cm-qualifier": {
        "color": "#555"
    },
    "cm-s-paper cm-bracket": {
        "color": "#997"
    },
    "cm-s-paper cm-attribute": {
        "color": "#7f8c8d"
    },
    "cm-s-paper cm-tag": {
        "color": "#7f8c8d"
    },
    "cm-s-paper cm-header": {
        "color": "#000"
    },
    "cm-s-paper cm-quote": {
        "color": "#888"
    },
    "cm-s-paper cm-hr": {
        "color": "#999"
    },
    "cm-s-paper cm-link": {
        "color": "#7f8c8d"
    },
    "cm-negative": {
        "color": "#d44"
    },
    "cm-positive": {
        "color": "#292"
    },
    "cm-header": {
        "fontWeight": "700"
    },
    "cm-strong": {
        "fontWeight": "700"
    },
    "cm-em": {
        "fontStyle": "italic"
    },
    "cm-link": {
        "textDecoration": "underline"
    },
    "cm-invalidchar": {
        "color": "red"
    },
    "divCodeMirror spanCodeMirror-matchingbracket": {
        "color": "#0f0"
    },
    "divCodeMirror spanCodeMirror-nonmatchingbracket": {
        "color": "#f22"
    },
    "CodeMirror": {
        "position": "relative",
        "overflow": "hidden",
        "height": 450
    },
    "CodeMirror-sizer": {
        "position": "relative",
        "minWidth": "100px!important"
    },
    "CodeMirror-hscrollbar": {
        "position": "absolute",
        "zIndex": 6,
        "display": "none",
        "bottom": 0,
        "left": 0,
        "overflowY": "hidden",
        "overflowX": "scroll"
    },
    "CodeMirror-vscrollbar": {
        "position": "absolute",
        "zIndex": 6,
        "display": "none",
        "right": 0,
        "top": 0,
        "overflowX": "hidden",
        "overflowY": "scroll"
    },
    "CodeMirror-wrap pre": {
        "wordWrap": "break-word",
        "whiteSpace": "pre-wrap",
        "wordBreak": "normal"
    },
    "CodeMirror-linebackground": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "zIndex": 0
    },
    "CodeMirror-linewidget": {
        "position": "relative",
        "zIndex": 2,
        "overflow": "auto"
    },
    "CodeMirror-widget": {
        "display": "inline-block"
    },
    "CodeMirror-wrap CodeMirror-scroll": {
        "overflowX": "hidden"
    },
    "CodeMirror-measure": {
        "position": "absolute",
        "width": "100%",
        "height": 0,
        "overflow": "hidden",
        "visibility": "hidden"
    },
    "CodeMirror-measure pre": {
        "position": "static"
    },
    "CodeMirror-focused divCodeMirror-cursor": {
        "visibility": "visible"
    },
    "CodeMirror-selected": {
        "background": "#d9d9d9"
    },
    "CodeMirror-focused CodeMirror-selected": {
        "background": "#BDC3C7"
    },
    "cm-searching": {
        "background": "rgba(255,255,0,.4)"
    },
    ":-webkit-full-screen": {
        "background": "#f9f9f5",
        "paddingTop": 0.5,
        "paddingRight": 1,
        "paddingBottom": 0.5,
        "paddingLeft": 1,
        "width": "100%",
        "height": "100%"
    },
    ":-moz-full-screen": {
        "paddingTop": 0.5,
        "paddingRight": 1,
        "paddingBottom": 0.5,
        "paddingLeft": 1,
        "background": "#f9f9f5",
        "width": "100%",
        "height": "100%"
    },
    "editor-wrapper": {
        "font": "16px/1.62 \"Helvetica Neue\",\"Xin Gothic\",\"Hiragino Sans GB\",\"WenQuanYi Micro Hei\",\"Microsoft YaHei\",sans-serif",
        "color": "#2c3e50"
    },
    "editor-wrapper inputtitle": {
        "font": "18px \"Helvetica Neue\",\"Xin Gothic\",\"Hiragino Sans GB\",\"WenQuanYi Micro Hei\",\"Microsoft YaHei\",sans-serif",
        "background": "0 0",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "width": "100%",
        "border": "none",
        "outline": 0,
        "opacity": 0.6
    },
    "editor-toolbar": {
        "position": "relative",
        "opacity": 0.6,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "OUserSelect": "none",
        "userSelect": "none"
    },
    "editor-toolbar:after": {
        "display": "block",
        "content": "' '",
        "height": 1,
        "backgroundColor": "#bdc3c7",
        "background": "linear-gradient(45deg,#f9f9f9,#bdc3c7,#f9f9f9)",
        "marginTop": 8
    },
    "editor-toolbar:before": {
        "display": "block",
        "content": "' '",
        "height": 1,
        "backgroundColor": "#bdc3c7",
        "background": "linear-gradient(45deg,#f9f9f9,#bdc3c7,#f9f9f9)",
        "marginBottom": 8
    },
    "editor-toolbar:hover": {
        "opacity": 0.8
    },
    "editor-wrapper inputtitle:focus": {
        "opacity": 0.8
    },
    "editor-wrapper inputtitle:hover": {
        "opacity": 0.8
    },
    "editor-toolbar a": {
        "display": "inline-block",
        "textAlign": "center",
        "textDecoration": "none!important",
        "color": "#2c3e50!important",
        "width": 24,
        "height": 24,
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "border": "1px solid transparent",
        "borderRadius": 3,
        "cursor": "pointer"
    },
    "editor-toolbar aactive": {
        "background": "#fcfcfc",
        "borderColor": "#95a5a6"
    },
    "editor-toolbar a:hover": {
        "background": "#fcfcfc",
        "borderColor": "#95a5a6"
    },
    "editor-toolbar a:before": {
        "lineHeight": 24
    },
    "editor-toolbar iseparator": {
        "display": "inline-block",
        "width": 0,
        "borderLeft": "1px solid #d9d9d9",
        "borderRight": "1px solid #fff",
        "color": "transparent",
        "textIndent": -10,
        "marginTop": 0,
        "marginRight": 6,
        "marginBottom": 0,
        "marginLeft": 6
    },
    "editor-toolbar aeicon-fullscreen": {
        "position": "absolute",
        "right": 0
    },
    "editor-statusbar": {
        "borderTop": "1px solid #ece9e9",
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10,
        "fontSize": 12,
        "color": "#959694",
        "textAlign": "right"
    },
    "editor-statusbar span": {
        "display": "inline-block",
        "minWidth": 4,
        "marginLeft": 1
    },
    "editor-statusbar lines:before": {
        "content": "'lines: '"
    },
    "editor-statusbar words:before": {
        "content": "'words: '"
    },
    "editor-preview": {
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "left": "100%",
        "background": "#f9f9f5",
        "zIndex": 9999,
        "overflow": "auto",
        "WebkitTransition": "left .2s ease",
        "MozTransition": "left .2s ease",
        "MsTransition": "left .2s ease",
        "transition": "left .2s ease"
    },
    "editor-preview-active": {
        "left": 0
    },
    "editor-preview>p": {
        "marginTop": 0
    },
    "webuploader-container": {
        "position": "relative"
    },
    "webuploader-element-invisible": {
        "position": "absolute!important",
        "clip": "rect(1px,1px,1px,1px)"
    },
    "webuploader-pick": {
        "position": "relative",
        "display": "inline-block",
        "cursor": "pointer",
        "background": "#00b7ee",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "color": "#fff",
        "textAlign": "center",
        "borderRadius": 3,
        "overflow": "hidden"
    },
    "webuploader-pick-hover": {
        "background": "#00a2d4"
    },
    "webuploader-pick-disable": {
        "opacity": 0.6,
        "pointerEvents": "none"
    },
    "pln": {
        "color": "#000"
    },
    "ollinenums": {
        "marginTop": 0,
        "marginBottom": 0
    },
    "liL0": {
        "listStyleType": "none"
    },
    "liL1": {
        "listStyleType": "none",
        "background": "#eee"
    },
    "liL2": {
        "listStyleType": "none"
    },
    "liL3": {
        "listStyleType": "none",
        "background": "#eee"
    },
    "liL5": {
        "listStyleType": "none",
        "background": "#eee"
    },
    "liL6": {
        "listStyleType": "none"
    },
    "liL7": {
        "listStyleType": "none",
        "background": "#eee"
    },
    "liL8": {
        "listStyleType": "none"
    },
    "liL9": {
        "background": "#eee"
    },
    "fa-stack": {
        "display": "inline-block",
        "position": "relative",
        "width": 2,
        "height": 2,
        "lineHeight": 2,
        "verticalAlign": "middle"
    },
    "fa-fw": {
        "textAlign": "center",
        "width": 1.28571429
    },
    "fa-li": {
        "textAlign": "center",
        "position": "absolute",
        "left": -2.14285714,
        "width": 2.14285714,
        "top": 0.14285714
    },
    "fa-lg": {
        "fontSize": 1.33333333,
        "lineHeight": 0.75,
        "verticalAlign": "-15%"
    },
    "fa-2x": {
        "fontSize": 2
    },
    "fa-3x": {
        "fontSize": 3
    },
    "fa-4x": {
        "fontSize": 4
    },
    "fa-5x": {
        "fontSize": 5
    },
    "fa-ul": {
        "paddingLeft": 0,
        "marginLeft": 2.14285714,
        "listStyleType": "none"
    },
    "fa-ul>li": {
        "position": "relative"
    },
    "fa-lifa-lg": {
        "left": -1.85714286
    },
    "fa-border": {
        "paddingTop": 0.2,
        "paddingRight": 0.25,
        "paddingBottom": 0.15,
        "paddingLeft": 0.25,
        "border": ".08em solid #eee",
        "borderRadius": 0.1
    },
    "fapull-left": {
        "marginRight": 0.3
    },
    "fapull-right": {
        "marginLeft": 0.3
    },
    "fa-spin": {
        "WebkitAnimation": "fa-spin 2s infinite linear",
        "animation": "fa-spin 2s infinite linear"
    },
    "fa-rotate-90": {
        "filter": "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)",
        "WebkitTransform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "transform": "rotate(90deg)"
    },
    "fa-rotate-180": {
        "filter": "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)",
        "WebkitTransform": "rotate(180deg)",
        "MsTransform": "rotate(180deg)",
        "transform": "rotate(180deg)"
    },
    "fa-rotate-270": {
        "filter": "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)",
        "WebkitTransform": "rotate(270deg)",
        "MsTransform": "rotate(270deg)",
        "transform": "rotate(270deg)"
    },
    "fa-flip-horizontal": {
        "filter": "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)",
        "WebkitTransform": "scale(-1,1)",
        "MsTransform": "scale(-1,1)",
        "transform": "scale(-1,1)"
    },
    "fa-flip-vertical": {
        "filter": "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)",
        "WebkitTransform": "scale(1,-1)",
        "MsTransform": "scale(1,-1)",
        "transform": "scale(1,-1)"
    },
    ":root fa-flip-horizontal": {
        "filter": "none"
    },
    ":root fa-flip-vertical": {
        "filter": "none"
    },
    ":root fa-rotate-180": {
        "filter": "none"
    },
    ":root fa-rotate-270": {
        "filter": "none"
    },
    ":root fa-rotate-90": {
        "filter": "none"
    },
    "fa-stack-1x": {
        "position": "absolute",
        "left": 0,
        "width": "100%",
        "textAlign": "center",
        "lineHeight": "inherit"
    },
    "fa-stack-2x": {
        "position": "absolute",
        "left": 0,
        "width": "100%",
        "textAlign": "center",
        "fontSize": 2
    },
    "fa-inverse": {
        "color": "#fff"
    },
    "fa-glass:before": {
        "content": "\\f000"
    },
    "fa-music:before": {
        "content": "\\f001"
    },
    "fa-search:before": {
        "content": "\\f002"
    },
    "fa-envelope-o:before": {
        "content": "\\f003"
    },
    "fa-heart:before": {
        "content": "\\f004"
    },
    "fa-star:before": {
        "content": "\\f005"
    },
    "fa-star-o:before": {
        "content": "\\f006"
    },
    "fa-user:before": {
        "content": "\\f007"
    },
    "fa-film:before": {
        "content": "\\f008"
    },
    "fa-th-large:before": {
        "content": "\\f009"
    },
    "fa-th:before": {
        "content": "\\f00a"
    },
    "fa-th-list:before": {
        "content": "\\f00b"
    },
    "fa-check:before": {
        "content": "\\f00c"
    },
    "fa-close:before": {
        "content": "\\f00d"
    },
    "fa-remove:before": {
        "content": "\\f00d"
    },
    "fa-times:before": {
        "content": "\\f00d"
    },
    "fa-search-plus:before": {
        "content": "\\f00e"
    },
    "fa-search-minus:before": {
        "content": "\\f010"
    },
    "fa-power-off:before": {
        "content": "\\f011"
    },
    "fa-signal:before": {
        "content": "\\f012"
    },
    "fa-cog:before": {
        "content": "\\f013"
    },
    "fa-gear:before": {
        "content": "\\f013"
    },
    "fa-trash-o:before": {
        "content": "\\f014"
    },
    "fa-home:before": {
        "content": "\\f015"
    },
    "fa-file-o:before": {
        "content": "\\f016"
    },
    "fa-clock-o:before": {
        "content": "\\f017"
    },
    "fa-road:before": {
        "content": "\\f018"
    },
    "fa-download:before": {
        "content": "\\f019"
    },
    "fa-arrow-circle-o-down:before": {
        "content": "\\f01a"
    },
    "fa-arrow-circle-o-up:before": {
        "content": "\\f01b"
    },
    "fa-inbox:before": {
        "content": "\\f01c"
    },
    "fa-play-circle-o:before": {
        "content": "\\f01d"
    },
    "fa-repeat:before": {
        "content": "\\f01e"
    },
    "fa-rotate-right:before": {
        "content": "\\f01e"
    },
    "fa-refresh:before": {
        "content": "\\f021"
    },
    "fa-list-alt:before": {
        "content": "\\f022"
    },
    "fa-lock:before": {
        "content": "\\f023"
    },
    "fa-flag:before": {
        "content": "\\f024"
    },
    "fa-headphones:before": {
        "content": "\\f025"
    },
    "fa-volume-off:before": {
        "content": "\\f026"
    },
    "fa-volume-down:before": {
        "content": "\\f027"
    },
    "fa-volume-up:before": {
        "content": "\\f028"
    },
    "fa-qrcode:before": {
        "content": "\\f029"
    },
    "fa-barcode:before": {
        "content": "\\f02a"
    },
    "fa-tag:before": {
        "content": "\\f02b"
    },
    "fa-tags:before": {
        "content": "\\f02c"
    },
    "fa-book:before": {
        "content": "\\f02d"
    },
    "fa-bookmark:before": {
        "content": "\\f02e"
    },
    "fa-print:before": {
        "content": "\\f02f"
    },
    "fa-camera:before": {
        "content": "\\f030"
    },
    "fa-font:before": {
        "content": "\\f031"
    },
    "fa-bold:before": {
        "content": "\\f032"
    },
    "fa-italic:before": {
        "content": "\\f033"
    },
    "fa-text-height:before": {
        "content": "\\f034"
    },
    "fa-text-width:before": {
        "content": "\\f035"
    },
    "fa-align-left:before": {
        "content": "\\f036"
    },
    "fa-align-center:before": {
        "content": "\\f037"
    },
    "fa-align-right:before": {
        "content": "\\f038"
    },
    "fa-align-justify:before": {
        "content": "\\f039"
    },
    "fa-list:before": {
        "content": "\\f03a"
    },
    "fa-dedent:before": {
        "content": "\\f03b"
    },
    "fa-outdent:before": {
        "content": "\\f03b"
    },
    "fa-indent:before": {
        "content": "\\f03c"
    },
    "fa-video-camera:before": {
        "content": "\\f03d"
    },
    "fa-image:before": {
        "content": "\\f03e"
    },
    "fa-photo:before": {
        "content": "\\f03e"
    },
    "fa-picture-o:before": {
        "content": "\\f03e"
    },
    "fa-pencil:before": {
        "content": "\\f040"
    },
    "fa-map-marker:before": {
        "content": "\\f041"
    },
    "fa-adjust:before": {
        "content": "\\f042"
    },
    "fa-tint:before": {
        "content": "\\f043"
    },
    "fa-edit:before": {
        "content": "\\f044"
    },
    "fa-pencil-square-o:before": {
        "content": "\\f044"
    },
    "fa-share-square-o:before": {
        "content": "\\f045"
    },
    "fa-check-square-o:before": {
        "content": "\\f046"
    },
    "fa-arrows:before": {
        "content": "\\f047"
    },
    "fa-step-backward:before": {
        "content": "\\f048"
    },
    "fa-fast-backward:before": {
        "content": "\\f049"
    },
    "fa-backward:before": {
        "content": "\\f04a"
    },
    "fa-play:before": {
        "content": "\\f04b"
    },
    "fa-pause:before": {
        "content": "\\f04c"
    },
    "fa-stop:before": {
        "content": "\\f04d"
    },
    "fa-forward:before": {
        "content": "\\f04e"
    },
    "fa-fast-forward:before": {
        "content": "\\f050"
    },
    "fa-step-forward:before": {
        "content": "\\f051"
    },
    "fa-eject:before": {
        "content": "\\f052"
    },
    "fa-chevron-left:before": {
        "content": "\\f053"
    },
    "fa-chevron-right:before": {
        "content": "\\f054"
    },
    "fa-plus-circle:before": {
        "content": "\\f055"
    },
    "fa-minus-circle:before": {
        "content": "\\f056"
    },
    "fa-times-circle:before": {
        "content": "\\f057"
    },
    "fa-check-circle:before": {
        "content": "\\f058"
    },
    "fa-question-circle:before": {
        "content": "\\f059"
    },
    "fa-info-circle:before": {
        "content": "\\f05a"
    },
    "fa-crosshairs:before": {
        "content": "\\f05b"
    },
    "fa-times-circle-o:before": {
        "content": "\\f05c"
    },
    "fa-check-circle-o:before": {
        "content": "\\f05d"
    },
    "fa-ban:before": {
        "content": "\\f05e"
    },
    "fa-arrow-left:before": {
        "content": "\\f060"
    },
    "fa-arrow-right:before": {
        "content": "\\f061"
    },
    "fa-arrow-up:before": {
        "content": "\\f062"
    },
    "fa-arrow-down:before": {
        "content": "\\f063"
    },
    "fa-mail-forward:before": {
        "content": "\\f064"
    },
    "fa-share:before": {
        "content": "\\f064"
    },
    "fa-expand:before": {
        "content": "\\f065"
    },
    "fa-compress:before": {
        "content": "\\f066"
    },
    "fa-plus:before": {
        "content": "\\f067"
    },
    "fa-minus:before": {
        "content": "\\f068"
    },
    "fa-asterisk:before": {
        "content": "\\f069"
    },
    "fa-exclamation-circle:before": {
        "content": "\\f06a"
    },
    "fa-gift:before": {
        "content": "\\f06b"
    },
    "fa-leaf:before": {
        "content": "\\f06c"
    },
    "fa-fire:before": {
        "content": "\\f06d"
    },
    "fa-eye:before": {
        "content": "\\f06e"
    },
    "fa-eye-slash:before": {
        "content": "\\f070"
    },
    "fa-exclamation-triangle:before": {
        "content": "\\f071"
    },
    "fa-warning:before": {
        "content": "\\f071"
    },
    "fa-plane:before": {
        "content": "\\f072"
    },
    "fa-calendar:before": {
        "content": "\\f073"
    },
    "fa-random:before": {
        "content": "\\f074"
    },
    "fa-comment:before": {
        "content": "\\f075"
    },
    "fa-magnet:before": {
        "content": "\\f076"
    },
    "fa-chevron-up:before": {
        "content": "\\f077"
    },
    "fa-chevron-down:before": {
        "content": "\\f078"
    },
    "fa-retweet:before": {
        "content": "\\f079"
    },
    "fa-shopping-cart:before": {
        "content": "\\f07a"
    },
    "fa-folder:before": {
        "content": "\\f07b"
    },
    "fa-folder-open:before": {
        "content": "\\f07c"
    },
    "fa-arrows-v:before": {
        "content": "\\f07d"
    },
    "fa-arrows-h:before": {
        "content": "\\f07e"
    },
    "fa-bar-chart-o:before": {
        "content": "\\f080"
    },
    "fa-bar-chart:before": {
        "content": "\\f080"
    },
    "fa-twitter-square:before": {
        "content": "\\f081"
    },
    "fa-facebook-square:before": {
        "content": "\\f082"
    },
    "fa-camera-retro:before": {
        "content": "\\f083"
    },
    "fa-key:before": {
        "content": "\\f084"
    },
    "fa-cogs:before": {
        "content": "\\f085"
    },
    "fa-gears:before": {
        "content": "\\f085"
    },
    "fa-comments:before": {
        "content": "\\f086"
    },
    "fa-thumbs-o-up:before": {
        "content": "\\f087"
    },
    "fa-thumbs-o-down:before": {
        "content": "\\f088"
    },
    "fa-star-half:before": {
        "content": "\\f089"
    },
    "fa-heart-o:before": {
        "content": "\\f08a"
    },
    "fa-sign-out:before": {
        "content": "\\f08b"
    },
    "fa-linkedin-square:before": {
        "content": "\\f08c"
    },
    "fa-thumb-tack:before": {
        "content": "\\f08d"
    },
    "fa-external-link:before": {
        "content": "\\f08e"
    },
    "fa-sign-in:before": {
        "content": "\\f090"
    },
    "fa-trophy:before": {
        "content": "\\f091"
    },
    "fa-github-square:before": {
        "content": "\\f092"
    },
    "fa-upload:before": {
        "content": "\\f093"
    },
    "fa-lemon-o:before": {
        "content": "\\f094"
    },
    "fa-phone:before": {
        "content": "\\f095"
    },
    "fa-square-o:before": {
        "content": "\\f096"
    },
    "fa-bookmark-o:before": {
        "content": "\\f097"
    },
    "fa-phone-square:before": {
        "content": "\\f098"
    },
    "fa-twitter:before": {
        "content": "\\f099"
    },
    "fa-facebook:before": {
        "content": "\\f09a"
    },
    "fa-github:before": {
        "content": "\\f09b"
    },
    "fa-unlock:before": {
        "content": "\\f09c"
    },
    "fa-credit-card:before": {
        "content": "\\f09d"
    },
    "fa-rss:before": {
        "content": "\\f09e"
    },
    "fa-hdd-o:before": {
        "content": "\\f0a0"
    },
    "fa-bullhorn:before": {
        "content": "\\f0a1"
    },
    "fa-bell:before": {
        "content": "\\f0f3"
    },
    "fa-certificate:before": {
        "content": "\\f0a3"
    },
    "fa-hand-o-right:before": {
        "content": "\\f0a4"
    },
    "fa-hand-o-left:before": {
        "content": "\\f0a5"
    },
    "fa-hand-o-up:before": {
        "content": "\\f0a6"
    },
    "fa-hand-o-down:before": {
        "content": "\\f0a7"
    },
    "fa-arrow-circle-left:before": {
        "content": "\\f0a8"
    },
    "fa-arrow-circle-right:before": {
        "content": "\\f0a9"
    },
    "fa-arrow-circle-up:before": {
        "content": "\\f0aa"
    },
    "fa-arrow-circle-down:before": {
        "content": "\\f0ab"
    },
    "fa-globe:before": {
        "content": "\\f0ac"
    },
    "fa-wrench:before": {
        "content": "\\f0ad"
    },
    "fa-tasks:before": {
        "content": "\\f0ae"
    },
    "fa-filter:before": {
        "content": "\\f0b0"
    },
    "fa-briefcase:before": {
        "content": "\\f0b1"
    },
    "fa-arrows-alt:before": {
        "content": "\\f0b2"
    },
    "fa-group:before": {
        "content": "\\f0c0"
    },
    "fa-users:before": {
        "content": "\\f0c0"
    },
    "fa-chain:before": {
        "content": "\\f0c1"
    },
    "fa-link:before": {
        "content": "\\f0c1"
    },
    "fa-cloud:before": {
        "content": "\\f0c2"
    },
    "fa-flask:before": {
        "content": "\\f0c3"
    },
    "fa-cut:before": {
        "content": "\\f0c4"
    },
    "fa-scissors:before": {
        "content": "\\f0c4"
    },
    "fa-copy:before": {
        "content": "\\f0c5"
    },
    "fa-files-o:before": {
        "content": "\\f0c5"
    },
    "fa-paperclip:before": {
        "content": "\\f0c6"
    },
    "fa-floppy-o:before": {
        "content": "\\f0c7"
    },
    "fa-save:before": {
        "content": "\\f0c7"
    },
    "fa-square:before": {
        "content": "\\f0c8"
    },
    "fa-bars:before": {
        "content": "\\f0c9"
    },
    "fa-navicon:before": {
        "content": "\\f0c9"
    },
    "fa-reorder:before": {
        "content": "\\f0c9"
    },
    "fa-list-ul:before": {
        "content": "\\f0ca"
    },
    "fa-list-ol:before": {
        "content": "\\f0cb"
    },
    "fa-strikethrough:before": {
        "content": "\\f0cc"
    },
    "fa-underline:before": {
        "content": "\\f0cd"
    },
    "fa-table:before": {
        "content": "\\f0ce"
    },
    "fa-magic:before": {
        "content": "\\f0d0"
    },
    "fa-truck:before": {
        "content": "\\f0d1"
    },
    "fa-pinterest:before": {
        "content": "\\f0d2"
    },
    "fa-pinterest-square:before": {
        "content": "\\f0d3"
    },
    "fa-google-plus-square:before": {
        "content": "\\f0d4"
    },
    "fa-google-plus:before": {
        "content": "\\f0d5"
    },
    "fa-money:before": {
        "content": "\\f0d6"
    },
    "fa-caret-down:before": {
        "content": "\\f0d7"
    },
    "fa-caret-up:before": {
        "content": "\\f0d8"
    },
    "fa-caret-left:before": {
        "content": "\\f0d9"
    },
    "fa-caret-right:before": {
        "content": "\\f0da"
    },
    "fa-columns:before": {
        "content": "\\f0db"
    },
    "fa-sort:before": {
        "content": "\\f0dc"
    },
    "fa-unsorted:before": {
        "content": "\\f0dc"
    },
    "fa-sort-desc:before": {
        "content": "\\f0dd"
    },
    "fa-sort-down:before": {
        "content": "\\f0dd"
    },
    "fa-sort-asc:before": {
        "content": "\\f0de"
    },
    "fa-sort-up:before": {
        "content": "\\f0de"
    },
    "fa-envelope:before": {
        "content": "\\f0e0"
    },
    "fa-linkedin:before": {
        "content": "\\f0e1"
    },
    "fa-rotate-left:before": {
        "content": "\\f0e2"
    },
    "fa-undo:before": {
        "content": "\\f0e2"
    },
    "fa-gavel:before": {
        "content": "\\f0e3"
    },
    "fa-legal:before": {
        "content": "\\f0e3"
    },
    "fa-dashboard:before": {
        "content": "\\f0e4"
    },
    "fa-tachometer:before": {
        "content": "\\f0e4"
    },
    "fa-comment-o:before": {
        "content": "\\f0e5"
    },
    "fa-comments-o:before": {
        "content": "\\f0e6"
    },
    "fa-bolt:before": {
        "content": "\\f0e7"
    },
    "fa-flash:before": {
        "content": "\\f0e7"
    },
    "fa-sitemap:before": {
        "content": "\\f0e8"
    },
    "fa-umbrella:before": {
        "content": "\\f0e9"
    },
    "fa-clipboard:before": {
        "content": "\\f0ea"
    },
    "fa-paste:before": {
        "content": "\\f0ea"
    },
    "fa-lightbulb-o:before": {
        "content": "\\f0eb"
    },
    "fa-exchange:before": {
        "content": "\\f0ec"
    },
    "fa-cloud-download:before": {
        "content": "\\f0ed"
    },
    "fa-cloud-upload:before": {
        "content": "\\f0ee"
    },
    "fa-user-md:before": {
        "content": "\\f0f0"
    },
    "fa-stethoscope:before": {
        "content": "\\f0f1"
    },
    "fa-suitcase:before": {
        "content": "\\f0f2"
    },
    "fa-bell-o:before": {
        "content": "\\f0a2"
    },
    "fa-coffee:before": {
        "content": "\\f0f4"
    },
    "fa-cutlery:before": {
        "content": "\\f0f5"
    },
    "fa-file-text-o:before": {
        "content": "\\f0f6"
    },
    "fa-building-o:before": {
        "content": "\\f0f7"
    },
    "fa-hospital-o:before": {
        "content": "\\f0f8"
    },
    "fa-ambulance:before": {
        "content": "\\f0f9"
    },
    "fa-medkit:before": {
        "content": "\\f0fa"
    },
    "fa-fighter-jet:before": {
        "content": "\\f0fb"
    },
    "fa-beer:before": {
        "content": "\\f0fc"
    },
    "fa-h-square:before": {
        "content": "\\f0fd"
    },
    "fa-plus-square:before": {
        "content": "\\f0fe"
    },
    "fa-angle-double-left:before": {
        "content": "\\f100"
    },
    "fa-angle-double-right:before": {
        "content": "\\f101"
    },
    "fa-angle-double-up:before": {
        "content": "\\f102"
    },
    "fa-angle-double-down:before": {
        "content": "\\f103"
    },
    "fa-angle-left:before": {
        "content": "\\f104"
    },
    "fa-angle-right:before": {
        "content": "\\f105"
    },
    "fa-angle-up:before": {
        "content": "\\f106"
    },
    "fa-angle-down:before": {
        "content": "\\f107"
    },
    "fa-desktop:before": {
        "content": "\\f108"
    },
    "fa-laptop:before": {
        "content": "\\f109"
    },
    "fa-tablet:before": {
        "content": "\\f10a"
    },
    "fa-mobile-phone:before": {
        "content": "\\f10b"
    },
    "fa-mobile:before": {
        "content": "\\f10b"
    },
    "fa-circle-o:before": {
        "content": "\\f10c"
    },
    "fa-quote-left:before": {
        "content": "\\f10d"
    },
    "fa-quote-right:before": {
        "content": "\\f10e"
    },
    "fa-spinner:before": {
        "content": "\\f110"
    },
    "fa-circle:before": {
        "content": "\\f111"
    },
    "fa-mail-reply:before": {
        "content": "\\f112"
    },
    "fa-reply:before": {
        "content": "\\f112"
    },
    "fa-github-alt:before": {
        "content": "\\f113"
    },
    "fa-folder-o:before": {
        "content": "\\f114"
    },
    "fa-folder-open-o:before": {
        "content": "\\f115"
    },
    "fa-smile-o:before": {
        "content": "\\f118"
    },
    "fa-frown-o:before": {
        "content": "\\f119"
    },
    "fa-meh-o:before": {
        "content": "\\f11a"
    },
    "fa-gamepad:before": {
        "content": "\\f11b"
    },
    "fa-keyboard-o:before": {
        "content": "\\f11c"
    },
    "fa-flag-o:before": {
        "content": "\\f11d"
    },
    "fa-flag-checkered:before": {
        "content": "\\f11e"
    },
    "fa-terminal:before": {
        "content": "\\f120"
    },
    "fa-code:before": {
        "content": "\\f121"
    },
    "fa-mail-reply-all:before": {
        "content": "\\f122"
    },
    "fa-reply-all:before": {
        "content": "\\f122"
    },
    "fa-star-half-empty:before": {
        "content": "\\f123"
    },
    "fa-star-half-full:before": {
        "content": "\\f123"
    },
    "fa-star-half-o:before": {
        "content": "\\f123"
    },
    "fa-location-arrow:before": {
        "content": "\\f124"
    },
    "fa-crop:before": {
        "content": "\\f125"
    },
    "fa-code-fork:before": {
        "content": "\\f126"
    },
    "fa-chain-broken:before": {
        "content": "\\f127"
    },
    "fa-unlink:before": {
        "content": "\\f127"
    },
    "fa-question:before": {
        "content": "\\f128"
    },
    "fa-info:before": {
        "content": "\\f129"
    },
    "fa-exclamation:before": {
        "content": "\\f12a"
    },
    "fa-superscript:before": {
        "content": "\\f12b"
    },
    "fa-subscript:before": {
        "content": "\\f12c"
    },
    "fa-eraser:before": {
        "content": "\\f12d"
    },
    "fa-puzzle-piece:before": {
        "content": "\\f12e"
    },
    "fa-microphone:before": {
        "content": "\\f130"
    },
    "fa-microphone-slash:before": {
        "content": "\\f131"
    },
    "fa-shield:before": {
        "content": "\\f132"
    },
    "fa-calendar-o:before": {
        "content": "\\f133"
    },
    "fa-fire-extinguisher:before": {
        "content": "\\f134"
    },
    "fa-rocket:before": {
        "content": "\\f135"
    },
    "fa-maxcdn:before": {
        "content": "\\f136"
    },
    "fa-chevron-circle-left:before": {
        "content": "\\f137"
    },
    "fa-chevron-circle-right:before": {
        "content": "\\f138"
    },
    "fa-chevron-circle-up:before": {
        "content": "\\f139"
    },
    "fa-chevron-circle-down:before": {
        "content": "\\f13a"
    },
    "fa-html5:before": {
        "content": "\\f13b"
    },
    "fa-css3:before": {
        "content": "\\f13c"
    },
    "fa-anchor:before": {
        "content": "\\f13d"
    },
    "fa-unlock-alt:before": {
        "content": "\\f13e"
    },
    "fa-bullseye:before": {
        "content": "\\f140"
    },
    "fa-ellipsis-h:before": {
        "content": "\\f141"
    },
    "fa-ellipsis-v:before": {
        "content": "\\f142"
    },
    "fa-rss-square:before": {
        "content": "\\f143"
    },
    "fa-play-circle:before": {
        "content": "\\f144"
    },
    "fa-ticket:before": {
        "content": "\\f145"
    },
    "fa-minus-square:before": {
        "content": "\\f146"
    },
    "fa-minus-square-o:before": {
        "content": "\\f147"
    },
    "fa-level-up:before": {
        "content": "\\f148"
    },
    "fa-level-down:before": {
        "content": "\\f149"
    },
    "fa-check-square:before": {
        "content": "\\f14a"
    },
    "fa-pencil-square:before": {
        "content": "\\f14b"
    },
    "fa-external-link-square:before": {
        "content": "\\f14c"
    },
    "fa-share-square:before": {
        "content": "\\f14d"
    },
    "fa-compass:before": {
        "content": "\\f14e"
    },
    "fa-caret-square-o-down:before": {
        "content": "\\f150"
    },
    "fa-toggle-down:before": {
        "content": "\\f150"
    },
    "fa-caret-square-o-up:before": {
        "content": "\\f151"
    },
    "fa-toggle-up:before": {
        "content": "\\f151"
    },
    "fa-caret-square-o-right:before": {
        "content": "\\f152"
    },
    "fa-toggle-right:before": {
        "content": "\\f152"
    },
    "fa-eur:before": {
        "content": "\\f153"
    },
    "fa-euro:before": {
        "content": "\\f153"
    },
    "fa-gbp:before": {
        "content": "\\f154"
    },
    "fa-dollar:before": {
        "content": "\\f155"
    },
    "fa-usd:before": {
        "content": "\\f155"
    },
    "fa-inr:before": {
        "content": "\\f156"
    },
    "fa-rupee:before": {
        "content": "\\f156"
    },
    "fa-cny:before": {
        "content": "\\f157"
    },
    "fa-jpy:before": {
        "content": "\\f157"
    },
    "fa-rmb:before": {
        "content": "\\f157"
    },
    "fa-yen:before": {
        "content": "\\f157"
    },
    "fa-rouble:before": {
        "content": "\\f158"
    },
    "fa-rub:before": {
        "content": "\\f158"
    },
    "fa-ruble:before": {
        "content": "\\f158"
    },
    "fa-krw:before": {
        "content": "\\f159"
    },
    "fa-won:before": {
        "content": "\\f159"
    },
    "fa-bitcoin:before": {
        "content": "\\f15a"
    },
    "fa-btc:before": {
        "content": "\\f15a"
    },
    "fa-file:before": {
        "content": "\\f15b"
    },
    "fa-file-text:before": {
        "content": "\\f15c"
    },
    "fa-sort-alpha-asc:before": {
        "content": "\\f15d"
    },
    "fa-sort-alpha-desc:before": {
        "content": "\\f15e"
    },
    "fa-sort-amount-asc:before": {
        "content": "\\f160"
    },
    "fa-sort-amount-desc:before": {
        "content": "\\f161"
    },
    "fa-sort-numeric-asc:before": {
        "content": "\\f162"
    },
    "fa-sort-numeric-desc:before": {
        "content": "\\f163"
    },
    "fa-thumbs-up:before": {
        "content": "\\f164"
    },
    "fa-thumbs-down:before": {
        "content": "\\f165"
    },
    "fa-youtube-square:before": {
        "content": "\\f166"
    },
    "fa-youtube:before": {
        "content": "\\f167"
    },
    "fa-xing:before": {
        "content": "\\f168"
    },
    "fa-xing-square:before": {
        "content": "\\f169"
    },
    "fa-youtube-play:before": {
        "content": "\\f16a"
    },
    "fa-dropbox:before": {
        "content": "\\f16b"
    },
    "fa-stack-overflow:before": {
        "content": "\\f16c"
    },
    "fa-instagram:before": {
        "content": "\\f16d"
    },
    "fa-flickr:before": {
        "content": "\\f16e"
    },
    "fa-adn:before": {
        "content": "\\f170"
    },
    "fa-bitbucket:before": {
        "content": "\\f171"
    },
    "fa-bitbucket-square:before": {
        "content": "\\f172"
    },
    "fa-tumblr:before": {
        "content": "\\f173"
    },
    "fa-tumblr-square:before": {
        "content": "\\f174"
    },
    "fa-long-arrow-down:before": {
        "content": "\\f175"
    },
    "fa-long-arrow-up:before": {
        "content": "\\f176"
    },
    "fa-long-arrow-left:before": {
        "content": "\\f177"
    },
    "fa-long-arrow-right:before": {
        "content": "\\f178"
    },
    "fa-apple:before": {
        "content": "\\f179"
    },
    "fa-windows:before": {
        "content": "\\f17a"
    },
    "fa-android:before": {
        "content": "\\f17b"
    },
    "fa-linux:before": {
        "content": "\\f17c"
    },
    "fa-dribbble:before": {
        "content": "\\f17d"
    },
    "fa-skype:before": {
        "content": "\\f17e"
    },
    "fa-foursquare:before": {
        "content": "\\f180"
    },
    "fa-trello:before": {
        "content": "\\f181"
    },
    "fa-female:before": {
        "content": "\\f182"
    },
    "fa-male:before": {
        "content": "\\f183"
    },
    "fa-gittip:before": {
        "content": "\\f184"
    },
    "fa-sun-o:before": {
        "content": "\\f185"
    },
    "fa-moon-o:before": {
        "content": "\\f186"
    },
    "fa-archive:before": {
        "content": "\\f187"
    },
    "fa-bug:before": {
        "content": "\\f188"
    },
    "fa-vk:before": {
        "content": "\\f189"
    },
    "fa-weibo:before": {
        "content": "\\f18a"
    },
    "fa-renren:before": {
        "content": "\\f18b"
    },
    "fa-pagelines:before": {
        "content": "\\f18c"
    },
    "fa-stack-exchange:before": {
        "content": "\\f18d"
    },
    "fa-arrow-circle-o-right:before": {
        "content": "\\f18e"
    },
    "fa-arrow-circle-o-left:before": {
        "content": "\\f190"
    },
    "fa-caret-square-o-left:before": {
        "content": "\\f191"
    },
    "fa-toggle-left:before": {
        "content": "\\f191"
    },
    "fa-dot-circle-o:before": {
        "content": "\\f192"
    },
    "fa-wheelchair:before": {
        "content": "\\f193"
    },
    "fa-vimeo-square:before": {
        "content": "\\f194"
    },
    "fa-try:before": {
        "content": "\\f195"
    },
    "fa-turkish-lira:before": {
        "content": "\\f195"
    },
    "fa-plus-square-o:before": {
        "content": "\\f196"
    },
    "fa-space-shuttle:before": {
        "content": "\\f197"
    },
    "fa-slack:before": {
        "content": "\\f198"
    },
    "fa-envelope-square:before": {
        "content": "\\f199"
    },
    "fa-wordpress:before": {
        "content": "\\f19a"
    },
    "fa-openid:before": {
        "content": "\\f19b"
    },
    "fa-bank:before": {
        "content": "\\f19c"
    },
    "fa-institution:before": {
        "content": "\\f19c"
    },
    "fa-university:before": {
        "content": "\\f19c"
    },
    "fa-graduation-cap:before": {
        "content": "\\f19d"
    },
    "fa-mortar-board:before": {
        "content": "\\f19d"
    },
    "fa-yahoo:before": {
        "content": "\\f19e"
    },
    "fa-google:before": {
        "content": "\\f1a0"
    },
    "fa-reddit:before": {
        "content": "\\f1a1"
    },
    "fa-reddit-square:before": {
        "content": "\\f1a2"
    },
    "fa-stumbleupon-circle:before": {
        "content": "\\f1a3"
    },
    "fa-stumbleupon:before": {
        "content": "\\f1a4"
    },
    "fa-delicious:before": {
        "content": "\\f1a5"
    },
    "fa-digg:before": {
        "content": "\\f1a6"
    },
    "fa-pied-piper:before": {
        "content": "\\f1a7"
    },
    "fa-pied-piper-alt:before": {
        "content": "\\f1a8"
    },
    "fa-drupal:before": {
        "content": "\\f1a9"
    },
    "fa-joomla:before": {
        "content": "\\f1aa"
    },
    "fa-language:before": {
        "content": "\\f1ab"
    },
    "fa-fax:before": {
        "content": "\\f1ac"
    },
    "fa-building:before": {
        "content": "\\f1ad"
    },
    "fa-child:before": {
        "content": "\\f1ae"
    },
    "fa-paw:before": {
        "content": "\\f1b0"
    },
    "fa-spoon:before": {
        "content": "\\f1b1"
    },
    "fa-cube:before": {
        "content": "\\f1b2"
    },
    "fa-cubes:before": {
        "content": "\\f1b3"
    },
    "fa-behance:before": {
        "content": "\\f1b4"
    },
    "fa-behance-square:before": {
        "content": "\\f1b5"
    },
    "fa-steam:before": {
        "content": "\\f1b6"
    },
    "fa-steam-square:before": {
        "content": "\\f1b7"
    },
    "fa-recycle:before": {
        "content": "\\f1b8"
    },
    "fa-automobile:before": {
        "content": "\\f1b9"
    },
    "fa-car:before": {
        "content": "\\f1b9"
    },
    "fa-cab:before": {
        "content": "\\f1ba"
    },
    "fa-taxi:before": {
        "content": "\\f1ba"
    },
    "fa-tree:before": {
        "content": "\\f1bb"
    },
    "fa-spotify:before": {
        "content": "\\f1bc"
    },
    "fa-deviantart:before": {
        "content": "\\f1bd"
    },
    "fa-soundcloud:before": {
        "content": "\\f1be"
    },
    "fa-database:before": {
        "content": "\\f1c0"
    },
    "fa-file-pdf-o:before": {
        "content": "\\f1c1"
    },
    "fa-file-word-o:before": {
        "content": "\\f1c2"
    },
    "fa-file-excel-o:before": {
        "content": "\\f1c3"
    },
    "fa-file-powerpoint-o:before": {
        "content": "\\f1c4"
    },
    "fa-file-image-o:before": {
        "content": "\\f1c5"
    },
    "fa-file-photo-o:before": {
        "content": "\\f1c5"
    },
    "fa-file-picture-o:before": {
        "content": "\\f1c5"
    },
    "fa-file-archive-o:before": {
        "content": "\\f1c6"
    },
    "fa-file-zip-o:before": {
        "content": "\\f1c6"
    },
    "fa-file-audio-o:before": {
        "content": "\\f1c7"
    },
    "fa-file-sound-o:before": {
        "content": "\\f1c7"
    },
    "fa-file-movie-o:before": {
        "content": "\\f1c8"
    },
    "fa-file-video-o:before": {
        "content": "\\f1c8"
    },
    "fa-file-code-o:before": {
        "content": "\\f1c9"
    },
    "fa-vine:before": {
        "content": "\\f1ca"
    },
    "fa-codepen:before": {
        "content": "\\f1cb"
    },
    "fa-jsfiddle:before": {
        "content": "\\f1cc"
    },
    "fa-life-bouy:before": {
        "content": "\\f1cd"
    },
    "fa-life-buoy:before": {
        "content": "\\f1cd"
    },
    "fa-life-ring:before": {
        "content": "\\f1cd"
    },
    "fa-life-saver:before": {
        "content": "\\f1cd"
    },
    "fa-support:before": {
        "content": "\\f1cd"
    },
    "fa-circle-o-notch:before": {
        "content": "\\f1ce"
    },
    "fa-ra:before": {
        "content": "\\f1d0"
    },
    "fa-rebel:before": {
        "content": "\\f1d0"
    },
    "fa-empire:before": {
        "content": "\\f1d1"
    },
    "fa-ge:before": {
        "content": "\\f1d1"
    },
    "fa-git-square:before": {
        "content": "\\f1d2"
    },
    "fa-git:before": {
        "content": "\\f1d3"
    },
    "fa-hacker-news:before": {
        "content": "\\f1d4"
    },
    "fa-tencent-weibo:before": {
        "content": "\\f1d5"
    },
    "fa-qq:before": {
        "content": "\\f1d6"
    },
    "fa-wechat:before": {
        "content": "\\f1d7"
    },
    "fa-weixin:before": {
        "content": "\\f1d7"
    },
    "fa-paper-plane:before": {
        "content": "\\f1d8"
    },
    "fa-send:before": {
        "content": "\\f1d8"
    },
    "fa-paper-plane-o:before": {
        "content": "\\f1d9"
    },
    "fa-send-o:before": {
        "content": "\\f1d9"
    },
    "fa-history:before": {
        "content": "\\f1da"
    },
    "fa-circle-thin:before": {
        "content": "\\f1db"
    },
    "fa-header:before": {
        "content": "\\f1dc"
    },
    "fa-paragraph:before": {
        "content": "\\f1dd"
    },
    "fa-sliders:before": {
        "content": "\\f1de"
    },
    "fa-share-alt:before": {
        "content": "\\f1e0"
    },
    "fa-share-alt-square:before": {
        "content": "\\f1e1"
    },
    "fa-bomb:before": {
        "content": "\\f1e2"
    },
    "fa-futbol-o:before": {
        "content": "\\f1e3"
    },
    "fa-soccer-ball-o:before": {
        "content": "\\f1e3"
    },
    "fa-tty:before": {
        "content": "\\f1e4"
    },
    "fa-binoculars:before": {
        "content": "\\f1e5"
    },
    "fa-plug:before": {
        "content": "\\f1e6"
    },
    "fa-slideshare:before": {
        "content": "\\f1e7"
    },
    "fa-twitch:before": {
        "content": "\\f1e8"
    },
    "fa-yelp:before": {
        "content": "\\f1e9"
    },
    "fa-newspaper-o:before": {
        "content": "\\f1ea"
    },
    "fa-wifi:before": {
        "content": "\\f1eb"
    },
    "fa-calculator:before": {
        "content": "\\f1ec"
    },
    "fa-paypal:before": {
        "content": "\\f1ed"
    },
    "fa-google-wallet:before": {
        "content": "\\f1ee"
    },
    "fa-cc-visa:before": {
        "content": "\\f1f0"
    },
    "fa-cc-mastercard:before": {
        "content": "\\f1f1"
    },
    "fa-cc-discover:before": {
        "content": "\\f1f2"
    },
    "fa-cc-amex:before": {
        "content": "\\f1f3"
    },
    "fa-cc-paypal:before": {
        "content": "\\f1f4"
    },
    "fa-cc-stripe:before": {
        "content": "\\f1f5"
    },
    "fa-bell-slash:before": {
        "content": "\\f1f6"
    },
    "fa-bell-slash-o:before": {
        "content": "\\f1f7"
    },
    "fa-trash:before": {
        "content": "\\f1f8"
    },
    "fa-copyright:before": {
        "content": "\\f1f9"
    },
    "fa-at:before": {
        "content": "\\f1fa"
    },
    "fa-eyedropper:before": {
        "content": "\\f1fb"
    },
    "fa-paint-brush:before": {
        "content": "\\f1fc"
    },
    "fa-birthday-cake:before": {
        "content": "\\f1fd"
    },
    "fa-area-chart:before": {
        "content": "\\f1fe"
    },
    "fa-pie-chart:before": {
        "content": "\\f200"
    },
    "fa-line-chart:before": {
        "content": "\\f201"
    },
    "fa-lastfm:before": {
        "content": "\\f202"
    },
    "fa-lastfm-square:before": {
        "content": "\\f203"
    },
    "fa-toggle-off:before": {
        "content": "\\f204"
    },
    "fa-toggle-on:before": {
        "content": "\\f205"
    },
    "fa-bicycle:before": {
        "content": "\\f206"
    },
    "fa-bus:before": {
        "content": "\\f207"
    },
    "fa-ioxhost:before": {
        "content": "\\f208"
    },
    "fa-angellist:before": {
        "content": "\\f209"
    },
    "fa-cc:before": {
        "content": "\\f20a"
    },
    "fa-ils:before": {
        "content": "\\f20b"
    },
    "fa-shekel:before": {
        "content": "\\f20b"
    },
    "fa-sheqel:before": {
        "content": "\\f20b"
    },
    "fa-meanpath:before": {
        "content": "\\f20c"
    }
});