function transformPX(num) {
  return `transfromPX(${num})`;
}

function isEndOfPX(value) {
  return (value + "").indexOf("px") === value.length - 2;
}

function getPX(value) {
  return value.slice(0, -2);
}

function transformPropValue(propName, propValue) {
  if (shouldIgnoreOnReactNativeProp.indexOf(propName) > -1) {
    return `...(process.env.TARO_ENV === 'rn' ? {${propName}: '${propValue}'}:null),`;
  } else {
    const isPX = isEndOfPX(propValue);

    return `${propName}: ${
      isPX ? transformPX(getPX(propValue)) : "'" + propValue + "'"
    },`;
  }
}

const shouldIgnoreOnReactNativeProp = [
  "boxSizing",
  "whiteSpace",
  "textOverflow"
];

/**
 *
 * @param {React.CSSProperties} CSSProperties
 */
function transformCSSProperties(CSSProperties) {
  let str = "{";
  for (let key in CSSProperties) {
    str += transformPropValue(key, CSSProperties[key]);
  }

  str += "}";

  return str;
}

function transformStyle(styles) {
  let str = "{";

  for (let k in styles) {
    if (styles.hasOwnProperty(k)) {
      str = str + k + ":" + transformCSSProperties(styles[k]) + ",";
    }
  }

  str += "}";
  return str;
}

module.exports = function(schema, option) {
  const renderData = {};
  const style = {};

  function parseProps(propValue, isXML) {
    if (/^\{\{.*\}\}$/.test(propValue)) {
      if (isXML) {
        return propValue.slice(2, -2);
      } else {
        return propValue.slice(1, -1);
      }
    }

    if (isXML) {
      return `'${propValue}'`;
    } else {
      return propValue;
    }
  }

  function transform(json) {
    console.log("transform");
    var result = "";

    if (Array.isArray(json)) {
      json.forEach(function(node) {
        result += transform(node);
      });
    } else if (typeof json == "object") {
      var type = json.componentName && json.componentName.toLowerCase();
      var className = json.props && json.props.className;
      var classString = className ? ` style={styles.${className}}` : "";
      console.log("type", type);
      switch (type) {
        case "text":
          var innerText = parseProps(json.props.text);
          result += `<Text${classString}>${innerText}</Text>`;
          break;

        case "image":
          var source = parseProps(json.props.src, true);
          result += `<Image${classString} src={${source}}  />`;
          break;
        case "div":
        case "page":
        default:
          if (json.children && json.children.length > 0) {
            result += `<View${classString}>${transform(json.children)}</View>`;
          } else {
            result += `<View${classString} />`;
          }
          break;
      }

      if (className) {
        style[className] = json.props.style;
      }
    }

    return result;
  }

  // transform json
  var jsx = `${transform(schema)}`;

  renderData.modClass = `
    class Mod extends Component {
      render() {
        return (
          ${jsx}
        );
      }
    }
  `;

  renderData.style = `var styles = ${transformStyle(style)};`;
  renderData.exports = `export default Mod;`;

  const prettierOpt = {
    parser: "babel",
    printWidth: 80,
    singleQuote: true
  };

  return {
    renderData: renderData,
    prettierOpt: prettierOpt
  };
};
