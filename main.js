const syntax_accent = '528bff'
const syntax_guide  = 'f2f3f5'
const syntax_fg     = 'abb2bf'
const syntax_bg     = '282c34'
const mono_1        = 'abb2bf'
const mono_2        = '828997'
const mono_3        = '5c6370'
const hue_1         = '56b6c2'
const hue_2         = '61afef'
const hue_3         = 'c678dd'
const hue_4         = '98c379'
const hue_5         = 'e06c75'
const hue_5_2       = 'be5046'
const hue_6         = 'd19a66'
const hue_6_2       = 'e5c07b'

const syntax_cursor_line = '99BBFF'
const caret_row_color = '2C323B'

tmpl = `<scheme name="One dark" version="1" parent_scheme="Darcula">
  <option name="LINE_SPACING" value="1.2" />
  <option name="EDITOR_FONT_SIZE" value="14" />
  <option name="EDITOR_FONT_NAME" value="Menlo" />
  <colors>
    <option name="ADDED_LINES_COLOR" value="${hue_4}" />
    <option name="DELETED_LINES_COLOR" value="${hue_5}" />
    <option name="MODIFIED_LINES_COLOR" value="${hue_6}" />
    <option name="CARET_COLOR" value="${syntax_accent}" />
    <option name="CARET_ROW_COLOR" value="${caret_row_color}" />
    <option name="CONSOLE_BACKGROUND_KEY" value="${syntax_bg}" />
    <option name="GUTTER_BACKGROUND" value="${syntax_bg}" />
    <option name="INDENT_GUIDE" value="747369" />
    <option name="LINE_NUMBERS_COLOR" value="${mono_3}" />
    <option name="SELECTED_INDENT_GUIDE" value="747369" />
    <option name="SELECTION_BACKGROUND" value="${syntax_fg}" />
    <option name="SELECTION_FOREGROUND" value="${syntax_bg}" />
    <option name="WHITESPACES" value="${mono_3}" />
    <option name="RIGHT_MARGIN_COLOR" value="${mono_3}" />
  </colors>
  <attributes>
    <option name="APACHE_CONFIG.ARG_LEXEM">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="APACHE_CONFIG.COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="APACHE_CONFIG.IDENTIFIER">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="BAD_CHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="BREAKPOINT_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="743d3d" />
      </value>
    </option>
    <option name="BUILDOUT.KEY">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="BUILDOUT.KEY_VALUE_SEPARATOR">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="BUILDOUT.LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="BUILDOUT.SECTION_NAME">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="BUILDOUT.VALUE">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="CLASS_REFERENCE">
      <value>
        <option name="FOREGROUND" value="e5c17c" />
      </value>
    </option>
    <option name="COFFEESCRIPT.BAD_CHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="COFFEESCRIPT.BLOCK_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="COFFEESCRIPT.BOOLEAN">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="COFFEESCRIPT.CLASS_NAME">
      <value>
        <option name="FOREGROUND" value="e5c17c" />
      </value>
    </option>
    <option name="COFFEESCRIPT.COLON">
      <value>
        <option name="FOREGROUND" value="ffffff" />
      </value>
    </option>
    <option name="COFFEESCRIPT.COMMA">
      <value />
    </option>
    <option name="COFFEESCRIPT.ESCAPE_SEQUENCE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="COFFEESCRIPT.EXISTENTIAL">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="COFFEESCRIPT.EXPRESSIONS_SUBSTITUTION_MARK">
      <value>
        <option name="FOREGROUND" value="be4f44" />
      </value>
    </option>
    <option name="COFFEESCRIPT.FUNCTION">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="COFFEESCRIPT.FUNCTION_BINDING">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="COFFEESCRIPT.FUNCTION_NAME">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.GLOBAL_VARIABLE">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.HEREDOC_CONTENT">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.HEREDOC_ID">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.HEREGEX_CONTENT">
      <value>
        <option name="FOREGROUND" value="${hue_6}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.HEREGEX_ID">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="COFFEESCRIPT.IDENTIFIER">
      <value />
    </option>
    <option name="COFFEESCRIPT.JAVASCRIPT_CONTENT">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.JAVASCRIPT_ID">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="COFFEESCRIPT.LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="COFFEESCRIPT.LOCAL_VARIABLE">
      <value />
    </option>
    <option name="COFFEESCRIPT.NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="COFFEESCRIPT.OBJECT_KEY">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="COFFEESCRIPT.OPERATIONS">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="COFFEESCRIPT.PROTOTYPE">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.REGULAR_EXPRESSION_CONTENT">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="COFFEESCRIPT.REGULAR_EXPRESSION_FLAG">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="COFFEESCRIPT.REGULAR_EXPRESSION_ID">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="COFFEESCRIPT.SEMICOLON">
      <value />
    </option>
    <option name="COFFEESCRIPT.STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.STRING_LITERAL">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="COFFEESCRIPT.THIS">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="CONDITIONALLY_NOT_COMPILED">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="CONSOLE_BLUE_BRIGHT_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="CONSOLE_BLUE_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="CONSOLE_CYAN_BRIGHT_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_1}" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="CONSOLE_CYAN_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_1}" />
      </value>
    </option>
    <option name="CONSOLE_ERROR_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_5_2}" />
      </value>
    </option>
    <option name="CONSOLE_GRAY_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${mono_2}" />
      </value>
    </option>
    <option name="CONSOLE_GREEN_BRIGHT_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="CONSOLE_GREEN_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="CONSOLE_MAGENTA_BRIGHT_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="CONSOLE_MAGENTA_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
      </value>
    </option>
    <option name="CONSOLE_NORMAL_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="CONSOLE_RED_BRIGHT_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="CONSOLE_RED_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="CONSOLE_SYSTEM_OUTPUT">
      <value>
        <option name="FOREGROUND" value="e4e4ff" />
      </value>
    </option>
    <option name="CONSOLE_USER_INPUT">
      <value>
        <option name="FOREGROUND" value="6ae96a" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="CONSOLE_WHITE_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="CONSOLE_YELLOW_BRIGHT_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_6}" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="CONSOLE_YELLOW_OUTPUT">
      <value>
        <option name="FOREGROUND" value="${hue_6}" />
      </value>
    </option>
    <option name="CSS.COLON">
      <value>
        <option name="FOREGROUND" value="${mono_2}" />
      </value>
    </option>
    <option name="CSS.COLOR">
      <value>
        <option name="FOREGROUND" value="50b6c3" />
      </value>
    </option>
    <option name="CSS.COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="CSS.FUNCTION">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="CSS.HASH">
      <value>
        <option name="FOREGROUND" value="50b6c3" />
      </value>
    </option>
    <option name="CSS.IDENT">
      <value>
        <option name="FOREGROUND" value="d39a63" />
      </value>
    </option>
    <option name="CSS.IMPORTANT">
      <value>
        <option name="FOREGROUND" value="c676df" />
      </value>
    </option>
    <option name="CSS.KEYWORD">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
      </value>
    </option>
    <option name="CSS.NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="CSS.OPERATORS">
      <value>
        <option name="FOREGROUND" value="c676df" />
      </value>
    </option>
    <option name="CSS.PROPERTY_NAME">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="CSS.PROPERTY_VALUE">
      <value>
        <option name="FOREGROUND" value="d39a63" />
      </value>
    </option>
    <option name="CSS.PSEUDO">
      <value>
        <option name="FOREGROUND" value="d39a63" />
      </value>
    </option>
    <option name="CSS.STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="CSS.TAG_NAME">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="CSS.UNICODE.RANGE">
      <value>
        <option name="FOREGROUND" value="d39a63" />
      </value>
    </option>
    <option name="CSS.URL">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="CUSTOM_INVALID_STRING_ESCAPE_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="68e868" />
        <option name="BACKGROUND" value="481515" />
      </value>
    </option>
    <option name="CUSTOM_KEYWORD1_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="e3e3ff" />
      </value>
    </option>
    <option name="CUSTOM_KEYWORD2_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="fda5ff" />
      </value>
    </option>
    <option name="CUSTOM_KEYWORD3_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="71d7d7" />
      </value>
    </option>
    <option name="CUSTOM_KEYWORD4_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="ffc2c2" />
      </value>
    </option>
    <option name="CUSTOM_LINE_COMMENT_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="CUSTOM_MULTI_LINE_COMMENT_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="98c476" />
      </value>
    </option>
    <option name="CUSTOM_NUMBER_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="CUSTOM_STRING_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="CUSTOM_VALID_STRING_ESCAPE_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="Clojure Atom">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="Clojure Character">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="Clojure Keyword">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="Clojure Line comment">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="Clojure Literal">
      <value>
        <option name="FOREGROUND" value="fda5ff" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="Clojure Numbers">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="Clojure Strings">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="DEFAULT_BLOCK_COMMENT">
      <value>
        <option name="FOREGROUND" value="98c476" />
      </value>
    </option>
    <option name="DEPRECATED_ATTRIBUTES">
      <value>
        <option name="EFFECT_COLOR" value="c0c0c0" />
        <option name="EFFECT_TYPE" value="3" />
      </value>
    </option>
    <option name="DIFF_CONFLICT">
      <value>
        <option name="BACKGROUND" value="763f34" />
        <option name="ERROR_STRIPE_COLOR" value="ff6647" />
      </value>
    </option>
    <option name="DIFF_DELETED">
      <value>
        <option name="BACKGROUND" value="5b5b5b" />
        <option name="ERROR_STRIPE_COLOR" value="747474" />
      </value>
    </option>
    <option name="DIFF_INSERTED">
      <value>
        <option name="BACKGROUND" value="2f632f" />
        <option name="ERROR_STRIPE_COLOR" value="99ff99" />
      </value>
    </option>
    <option name="DIFF_MODIFIED">
      <value>
        <option name="BACKGROUND" value="465983" />
        <option name="ERROR_STRIPE_COLOR" value="99ccff" />
      </value>
    </option>
    <option name="DJANGO_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="DJANGO_FILTER">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="DJANGO_ID">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="DJANGO_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="DJANGO_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="DJANGO_STRING_LITERAL">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="DJANGO_TAG_NAME">
      <value>
        <option name="FOREGROUND" value="c676df" />
      </value>
    </option>
    <option name="DUPLICATE_FROM_SERVER">
      <value>
        <option name="BACKGROUND" value="30322b" />
      </value>
    </option>
    <option name="ENUM_CONST">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="ERRORS_ATTRIBUTES">
      <value>
        <option name="EFFECT_COLOR" value="ff6767" />
        <option name="ERROR_STRIPE_COLOR" value="cf5b56" />
        <option name="EFFECT_TYPE" value="2" />
      </value>
    </option>
    <option name="EXECUTIONPOINT_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="101" />
        <option name="BACKGROUND" value="c7c7ff" />
      </value>
    </option>
    <option name="FOLDED_TEXT_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="${syntax_bg}" />
        <option name="BACKGROUND" value="${hue_5_2}" />
        <option name="EFFECT_TYPE" value="2" />
      </value>
    </option>
    <option name="FOLLOWED_HYPERLINK_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
        <option name="EFFECT_COLOR" value="${hue_3}" />
        <option name="EFFECT_TYPE" value="1" />
      </value>
    </option>
    <option name="First symbol in list">
      <value>
        <option name="FOREGROUND" value="df6a73" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="GENERIC_SERVER_ERROR_OR_WARNING">
      <value>
        <option name="EFFECT_COLOR" value="aa4e00" />
        <option name="ERROR_STRIPE_COLOR" value="f49810" />
        <option name="EFFECT_TYPE" value="2" />
      </value>
    </option>
    <option name="GHERKIN_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="GHERKIN_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="GHERKIN_OUTLINE_PARAMETER_SUBSTITUTION">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="GHERKIN_PYSTRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="GHERKIN_REGEXP_PARAMETER">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="GHERKIN_TABLE_HEADER_CELL">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="GHERKIN_TABLE_PIPE">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="GHERKIN_TAG">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="GQL_ID">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="GQL_INT_LITERAL">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="GQL_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="GQL_STRING_LITERAL">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="HAML_CLASS">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="HAML_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="HAML_ID">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="HAML_LINE_CONTINUATION">
      <value />
    </option>
    <option name="HAML_RUBY_CODE">
      <value />
    </option>
    <option name="HAML_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="HAML_STRING_INTERPOLATED">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="HAML_TAG">
      <value />
    </option>
    <option name="HAML_TAG_NAME">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="HAML_TEXT">
      <value />
    </option>
    <option name="HAML_WS_REMOVAL">
      <value />
    </option>
    <option name="HTML_ATTRIBUTE_NAME">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="HTML_ATTRIBUTE_VALUE">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="HTML_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="HTML_ENTITY_REFERENCE">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="HTML_TAG">
      <value />
    </option>
    <option name="HTML_TAG_NAME">
      <value>
        <option name="FOREGROUND" value="e26b73" />
      </value>
    </option>
    <option name="HYPERLINK_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
        <option name="EFFECT_COLOR" value="${hue_3}" />
        <option name="EFFECT_TYPE" value="1" />
      </value>
    </option>
    <option name="IDENTIFIER_UNDER_CARET_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="3c3c57" />
        <option name="ERROR_STRIPE_COLOR" value="ccccff" />
      </value>
    </option>
    <option name="IMPLICIT_ANONYMOUS_CLASS_PARAMETER_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="fda5ff" />
      </value>
    </option>
    <option name="INFO_ATTRIBUTES">
      <value>
        <option name="EFFECT_COLOR" value="333434" />
        <option name="ERROR_STRIPE_COLOR" value="ffffcc" />
        <option name="EFFECT_TYPE" value="2" />
      </value>
    </option>
    <option name="INJECTED_LANGUAGE_FRAGMENT">
      <value>
        <option name="BACKGROUND" value="273627" />
      </value>
    </option>
    <option name="INSTANCE_FIELD_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="fda5ff" />
      </value>
    </option>
    <option name="IVAR">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="JAVA_BLOCK_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="JAVA_COMMA">
      <value />
    </option>
    <option name="JAVA_DOC_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="JAVA_DOC_MARKUP">
      <value>
        <option name="BACKGROUND" value="223f22" />
      </value>
    </option>
    <option name="JAVA_DOC_TAG">
      <value>
        <option name="FONT_TYPE" value="1" />
        <option name="EFFECT_COLOR" value="80807f" />
        <option name="EFFECT_TYPE" value="1" />
      </value>
    </option>
    <option name="JAVA_INVALID_STRING_ESCAPE">
      <value>
        <option name="FOREGROUND" value="68e868" />
        <option name="BACKGROUND" value="481515" />
      </value>
    </option>
    <option name="JAVA_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="JAVA_LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="JAVA_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="JAVA_OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="JAVA_SEMICOLON">
      <value />
    </option>
    <option name="JAVA_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="JAVA_VALID_STRING_ESCAPE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="JS.ATTRIBUTE">
      <value>
        <option name="BACKGROUND" value="423535" />
      </value>
    </option>
    <option name="JS.BADCHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="JS.BLOCK_COMEMNT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="JS.BLOCK_COMMENT">
      <value>
        <option name="FOREGROUND" value="5b6370" />
      </value>
    </option>
    <option name="JS.COMMA">
      <value />
    </option>
    <option name="JS.DOC_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="JS.DOC_MARKUP">
      <value>
        <option name="BACKGROUND" value="223f22" />
      </value>
    </option>
    <option name="JS.DOC_TAG">
      <value>
        <option name="FOREGROUND" value="c676df" />
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="JS.GLOBAL_FUNCTION">
      <value>
        <option name="FOREGROUND" value="5aaef1" />
      </value>
    </option>
    <option name="JS.GLOBAL_VARIABLE">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="JS.INSTANCE_MEMBER_FUNCTION">
      <value>
        <option name="FOREGROUND" value="979748" />
      </value>
    </option>
    <option name="JS.INSTANCE_MEMBER_VARIABLE">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="JS.INVALID_STRING_ESCAPE">
      <value>
        <option name="FOREGROUND" value="68e868" />
        <option name="BACKGROUND" value="481515" />
      </value>
    </option>
    <option name="JS.KEYWORD">
      <value>
        <option name="FOREGROUND" value="e26b73" />
      </value>
    </option>
    <option name="JS.LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="JS.LOCAL_VARIABLE">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="JS.NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="JS.OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="JS.PARAMETER">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="JS.REGEXP">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="JS.SEMICOLON">
      <value />
    </option>
    <option name="JS.STATIC_MEMBER_FUNCTION">
      <value>
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="JS.STATIC_MEMBER_VARIABLE">
      <value>
        <option name="FOREGROUND" value="fda5ff" />
        <option name="FONT_TYPE" value="3" />
      </value>
    </option>
    <option name="JS.STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="JS.VALID_STRING_ESCAPE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="JSON.KEYWORD">
      <value>
        <option name="FOREGROUND" value="5aaef1" />
      </value>
    </option>
    <option name="JSON.PROPERTY_KEY">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="JSON.STRING">
      <value>
        <option name="FOREGROUND" value="98c476" />
      </value>
    </option>
    <option name="LABEL">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="LESS_ID_SELECTOR">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="LESS_TAG_NAME">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
      </value>
    </option>
    <option name="LESS_OPERATORS">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="LESS_INJECTED_CODE">
      <value />
    </option>
    <option name="LESS_JS_CODE_DELIM">
      <value />
    </option>
    <option name="LESS_VARIABLE">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="LOCALE.LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="LOCALE.MSGCTXT_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="LOCALE.MSGID_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="LOCALE.MSGID_PLURAL_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="LOCALE.MSGSTR_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="LOCALE.MSGSTR_PLURAL_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="LOCALE.STRING_LITERAL">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="MACRONAME">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="MATCHED_BRACE_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="3a6da0" />
      </value>
    </option>
    <option name="MESSAGE_ARGUMENT">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="NOT_USED_ELEMENT_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="80807f" />
      </value>
    </option>
    <option name="OC.BLOCK_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="OC.CPP_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="OC.DIRECTIVE">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="OC.EXTERN_VARIABLE">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="OC.FUNCTION">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="OC.GLOBAL_VARIABLE">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="OC.KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="OC.LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="OC.LOCAL_VARIABLE">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="OC.NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="OC.PARAMETER">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="OC.PROPERTY">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="OC.SELFSUPERTHIS">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="OC.STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="OC.STRUCT_FIELD">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="OC_FORMAT_TOKEN">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="PHP_BAD_CHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="PHP_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="PHP_CONSTANT">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="PHP_DOC_COMMENT_ID">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="PHP_DOC_TAG">
      <value>
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="PHP_ESCAPE_SEQUENCE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="PHP_EXEC_COMMAND_ID">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="PHP_HEREDOC_CONTENT">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="PHP_HEREDOC_ID">
      <value>
        <option name="FONT_TYPE" value="1" />
      </value>
    </option>
    <option name="PHP_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="PHP_MARKUP_ID">
      <value>
        <option name="BACKGROUND" value="223f22" />
      </value>
    </option>
    <option name="PHP_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="PHP_OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="PHP_SCRIPTING_BACKGROUND">
      <value>
        <option name="BACKGROUND" value="2a2d32" />
      </value>
    </option>
    <option name="PHP_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="PHP_TAG">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="PHP_VAR">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="PROTOCOL_REFERENCE">
      <value>
        <option name="FOREGROUND" value="e5c17c" />
      </value>
    </option>
    <option name="PUPPET_BAD_CHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="PUPPET_BLOCK_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="PUPPET_CLASS">
      <value>
        <option name="FOREGROUND" value="e5c17c" />
      </value>
    </option>
    <option name="PUPPET_COMMA">
      <value />
    </option>
    <option name="PUPPET_ESCAPE_SEQUENCE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="PUPPET_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="PUPPET_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="PUPPET_OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="PUPPET_REGEX">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="PUPPET_RESOURCE_REFERENCE">
      <value />
    </option>
    <option name="PUPPET_SEMICOLON">
      <value />
    </option>
    <option name="PUPPET_SQ_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="PUPPET_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="PUPPET_VARIABLE">
      <value />
    </option>
    <option name="PUPPET_VARIABLE_INTERPOLATION">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="PY.BUILTIN_NAME">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="PY.CLASS_DEFINITION">
      <value>
        <option name="FOREGROUND" value="e5c17c" />
      </value>
    </option>
    <option name="PY.COMMA">
      <value />
    </option>
    <option name="PY.DECORATOR">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="PY.DOC_COMMENT">
      <value>
        <option name="FOREGROUND" value="98c476" />
      </value>
    </option>
    <option name="PY.FUNC_DEFINITION">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="PY.INVALID_STRING_ESCAPE">
      <value>
        <option name="FOREGROUND" value="68e868" />
        <option name="BACKGROUND" value="481515" />
      </value>
    </option>
    <option name="PY.KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="PY.LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="PY.NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="PY.PARAMETER">
      <value>
        <option name="FOREGROUND" value="${hue_6}" />
      </value>
    </option>
    <option name="PY.PREDEFINED_DEFINITION">
      <value />
    </option>
    <option name="PY.PREDEFINED_USAGE">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="PY.SELF_PARAMETER">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="PY.STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="PY.VALID_STRING_ESCAPE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="REGEXP.BAD_CHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="REGEXP.BRACES">
      <value />
    </option>
    <option name="REGEXP.BRACKETS">
      <value />
    </option>
    <option name="REGEXP.CHAR_CLASS">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="REGEXP.COMMA">
      <value />
    </option>
    <option name="REGEXP.COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="REGEXP.ESC_CHARACTER">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="REGEXP.INVALID_STRING_ESCAPE">
      <value>
        <option name="FOREGROUND" value="68e868" />
        <option name="BACKGROUND" value="481515" />
      </value>
    </option>
    <option name="REGEXP.META">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="REGEXP.PARENTHS">
      <value />
    </option>
    <option name="REGEXP.QUOTE_CHARACTER">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="REGEXP.REDUNDANT_ESCAPE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="REST.EXPLICIT">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="REST.FIELD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="REST.FIXED">
      <value>
        <option name="BACKGROUND" value="48485f" />
      </value>
    </option>
    <option name="REST.INLINE">
      <value>
        <option name="BACKGROUND" value="273627" />
      </value>
    </option>
    <option name="REST.INTERPRETED">
      <value>
        <option name="BACKGROUND" value="4d5d3d" />
      </value>
    </option>
    <option name="REST.LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="REST.REF.NAME">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="REST.SECTION.HEADER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="RHTML_COMMENT_ID">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="RHTML_EXPRESSION_END_ID">
      <value>
        <option name="FOREGROUND" value="be4f44" />
      </value>
    </option>
    <option name="RHTML_EXPRESSION_START_ID">
      <value>
        <option name="FOREGROUND" value="be4f44" />
      </value>
    </option>
    <option name="RHTML_OMIT_NEW_LINE_ID">
      <value>
        <option name="FOREGROUND" value="be4f44" />
      </value>
    </option>
    <option name="RHTML_SCRIPTLET_END_ID">
      <value>
        <option name="FOREGROUND" value="be4f44" />
      </value>
    </option>
    <option name="RHTML_SCRIPTLET_START_ID">
      <value>
        <option name="FOREGROUND" value="be4f44" />
      </value>
    </option>
    <option name="RUBY_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="RUBY_CONSTANT">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="RUBY_CONSTANT_DECLARATION">
      <value>
        <option name="FOREGROUND" value="e5c17c" />
      </value>
    </option>
    <option name="RUBY_CVAR">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_ESCAPE_SEQUENCE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="RUBY_EXPR_IN_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_GVAR">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_HASH_ASSOC">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="RUBY_HEREDOC_CONTENT">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_HEREDOC_ID">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_IDENTIFIER">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_INTERPOLATED_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_INVALID_ESCAPE_SEQUENCE">
      <value>
        <option name="FOREGROUND" value="68e868" />
        <option name="BACKGROUND" value="481515" />
      </value>
    </option>
    <option name="RUBY_IVAR">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="RUBY_LINE_CONTINUATION">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="RUBY_LOCAL_VAR_ID">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_METHOD_NAME">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="RUBY_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="RUBY_OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="RUBY_PARAMDEF_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="RUBY_PARAMETER_ID">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_REGEXP">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="RUBY_SPECIFIC_CALL">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="RUBY_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_SYMBOL">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_WORDS">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="SASS_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="SASS_DEFAULT">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="SASS_EXTEND">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="SASS_FUNCTION">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="SASS_IDENTIFIER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="SASS_IMPORTANT">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="SASS_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="SASS_MIXIN">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="SASS_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="SASS_PROPERTY_NAME">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="SASS_PROPERTY_VALUE">
      <value>
        <option name="FOREGROUND" value="68e868" />
      </value>
    </option>
    <option name="SASS_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="SASS_TAG_NAME">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="SASS_URL">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="SASS_VARIABLE">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="SEARCH_RESULT_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="4f4f82" />
      </value>
    </option>
    <option name="SLIM_BAD_CHARACTER">
      <value>
        <option name="FOREGROUND" value="272b33" />
        <option name="BACKGROUND" value="f2777a" />
      </value>
    </option>
    <option name="SLIM_CLASS">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="SLIM_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="SLIM_DOCTYPE_KWD">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="SLIM_FILTER">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="SLIM_ID">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="SLIM_INTERPOLATION">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="SLIM_STRING_INTERPOLATED">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="SLIM_TAG">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="SLIM_TAG_ATTR_KEY">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="SMARTY_BACKGROUND">
      <value>
        <option name="BACKGROUND" value="2a2d32" />
      </value>
    </option>
    <option name="SMARTY_BAD_CHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="SMARTY_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="SMARTY_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="SMARTY_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="SMARTY_OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="SMARTY_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="SQL_BAD_CHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="SQL_COLUMN">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="SQL_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="SQL_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="SQL_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="SQL_PROCEDURE">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="SQL_SCHEMA">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="SQL_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="SQL_SYNTETIC_ENTITY">
      <value>
        <option name="FOREGROUND" value="fda5ff" />
      </value>
    </option>
    <option name="SQL_TABLE">
      <value>
        <option name="FOREGROUND" value="${hue_6}" />
      </value>
    </option>
    <option name="STATIC_FIELD_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="fda5ff" />
        <option name="FONT_TYPE" value="3" />
      </value>
    </option>
    <option name="TAG_ATTR_KEY">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="TEXT">
      <value>
        <option name="FOREGROUND" value="${syntax_fg}" />
        <option name="BACKGROUND" value="${syntax_bg}" />
      </value>
    </option>
    <option name="TEXT_SEARCH_RESULT_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="5f5f00" />
        <option name="ERROR_STRIPE_COLOR" value="ff00" />
      </value>
    </option>
    <option name="TODO_DEFAULT_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="c7c7ff" />
        <option name="FONT_TYPE" value="3" />
        <option name="ERROR_STRIPE_COLOR" value="ff" />
      </value>
    </option>
    <option name="TWIG_BACKGROUND">
      <value>
        <option name="BACKGROUND" value="2a2d32" />
      </value>
    </option>
    <option name="TWIG_BAD_CHARACTER">
      <value>
        <option name="BACKGROUND" value="6e3b3b" />
      </value>
    </option>
    <option name="TWIG_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="TWIG_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="TWIG_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="TWIG_OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="TWIG_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="TYPEDEF">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="UNMATCHED_BRACE_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="583535" />
      </value>
    </option>
    <option name="WARNING_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="4a3f10" />
        <option name="EFFECT_COLOR" value="a6b2c0" />
        <option name="ERROR_STRIPE_COLOR" value="ebc700" />
        <option name="EFFECT_TYPE" value="1" />
      </value>
    </option>
    <option name="WRITE_IDENTIFIER_UNDER_CARET_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="472c47" />
        <option name="ERROR_STRIPE_COLOR" value="ffcdff" />
      </value>
    </option>
    <option name="WRITE_SEARCH_RESULT_ATTRIBUTES">
      <value>
        <option name="BACKGROUND" value="623062" />
      </value>
    </option>
    <option name="XML_ATTRIBUTE_NAME">
      <value>
        <option name="FOREGROUND" value="${hue_6}" />
      </value>
    </option>
    <option name="XML_ATTRIBUTE_VALUE">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="XML_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="XML_ENTITY_REFERENCE">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="XML_PROLOGUE">
      <value>
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="XML_TAG">
      <value />
    </option>
    <option name="XML_TAG_DATA">
      <value>
      </value>
    </option>
    <option name="XML_TAG_NAME">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="YAML_COMMENT">
      <value>
        <option name="FOREGROUND" value="59626f" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="YAML_SCALAR_DSTRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="YAML_SCALAR_KEY">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="YAML_SCALAR_LIST">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="YAML_SCALAR_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="YAML_SCALAR_VALUE">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="YAML_SIGN">
      <value>
        <option name="FOREGROUND" value="98c476" />
      </value>
    </option>
    <option name="YAML_TEXT">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="TS.CLASS">
      <value>
        <option name="FOREGROUND" value="${hue_6_2}" />
      </value>
    </option>
    <option name="TS.GLOBAL_FUNCTION">
      <value>
        <option name="FOREGROUND" value="${hue_1}" />
      </value>
    </option>
    <option name="TS.INSTANCE_MEMBER_FUNCTION">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="TS.INSTANCE_MEMBER_VARIABLE">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="TS.INTERFACE">
      <value>
        <option name="FOREGROUND" value="${hue_6_2}" />
      </value>
    </option>
    <option name="TS.KEYWORD">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
      </value>
    </option>
    <option name="TS.MODULE_NAME">
      <value>
        <option name="FOREGROUND" value="${hue_6_2}" />
      </value>
    </option>
    <option name="TS.STATIC_MEMBER_FUNCTION">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="TS.STATIC_MEMBER_VARIABLE">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="RUBY_COMMENT">
      <value>
        <option name="FOREGROUND" value="${mono_3}" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="RUBY_CONSTANT">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="RUBY_CONSTANT_DECLARATION">
      <value>
        <option name="FOREGROUND" value="${hue_6}" />
      </value>
    </option>
    <option name="RUBY_CVAR">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_ESCAPE_SEQUENCE">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="RUBY_EXPR_IN_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_5_2}" />
      </value>
    </option>
    <option name="RUBY_GVAR">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_HASH_ASSOC">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="RUBY_HEREDOC_CONTENT">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_HEREDOC_ID">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_IDENTIFIER">
      <value />
    </option>
    <option name="RUBY_INTERPOLATED_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_INVALID_ESCAPE_SEQUENCE">
      <value>
        <option name="FOREGROUND" value="68e868" />
        <option name="BACKGROUND" value="481515" />
      </value>
    </option>
    <option name="RUBY_IVAR">
      <value>
        <option name="FOREGROUND" value="df6a73" />
      </value>
    </option>
    <option name="RUBY_KEYWORD">
      <value>
        <option name="FOREGROUND" value="${hue_3}" />
      </value>
    </option>
    <option name="RUBY_LINE_CONTINUATION">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="RUBY_LOCAL_VAR_ID">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="RUBY_METHOD_NAME">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="RUBY_NTH_REF">
      <value>
        <option name="FOREGROUND" value="${hue_5}" />
      </value>
    </option>
    <option name="RUBY_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="RUBY_OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="a6b2c0" />
      </value>
    </option>
    <option name="RUBY_PARAMDEF_CALL">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="RUBY_PARAMETER_ID">
      <value>
        <option name="FOREGROUND" value="${mono_1}" />
      </value>
    </option>
    <option name="RUBY_REGEXP">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="RUBY_SPECIFIC_CALL">
      <value>
        <option name="FOREGROUND" value="${hue_2}" />
      </value>
    </option>
    <option name="RUBY_STRING">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="RUBY_SYMBOL">
      <value>
        <option name="FOREGROUND" value="${hue_1}" />
      </value>
    </option>
    <option name="RUBY_WORDS">
      <value>
        <option name="FOREGROUND" value="${hue_4}" />
      </value>
    </option>
    <option name="GO_BRACES">
      <value>
        <option name="FOREGROUND" value="aeb6c0" />
      </value>
    </option>
    <option name="GO_BRACKET">
      <value>
        <option name="FOREGROUND" value="aeb6c0" />
      </value>
    </option>
    <option name="GO_BUILTIN_CONSTANT">
      <value>
        <option name="FOREGROUND" value="d2945d" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="GO_BUILTIN_FUNCTION">
      <value>
        <option name="FOREGROUND" value="268bd2" />
      </value>
    </option>
    <option name="GO_BUILTIN_FUNCTION_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="GO_BUILTIN_TYPE">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="GO_BUILTIN_TYPE_REFERENCE">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="GO_BUILTIN_VARIABLE">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="GO_COMMA">
      <value>
        <option name="FOREGROUND" value="aeb6c0" />
      </value>
    </option>
    <option name="GO_EXPORTED_FUNCTION">
      <value>
        <option name="FOREGROUND" value="61afef" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="GO_EXPORTED_FUNCTION_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="GO_KEYWORD">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="GO_LOCAL_CONSTANT">
      <value>
        <option name="FOREGROUND" value="e06c75" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="GO_LOCAL_FUNCTION">
      <value>
        <option name="FOREGROUND" value="61afef" />
      </value>
    </option>
    <option name="GO_LOCAL_FUNCTION_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="GO_LOCAL_VARIABLE_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="GO_METHOD_RECEIVER">
      <value>
        <option name="FOREGROUND" value="aeb6c0" />
      </value>
    </option>
    <option name="GO_NUMBER">
      <value>
        <option name="FOREGROUND" value="d2945d" />
      </value>
    </option>
    <option name="GO_OPERATOR">
      <value>
        <option name="FOREGROUND" value="c679dd" />
      </value>
    </option>
    <option name="GO_PACKAGE_EXPORTED_CONSTANT">
      <value>
        <option name="FOREGROUND" value="e06c75" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="GO_PACKAGE_EXPORTED_VARIABLE_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="GO_PACKAGE_LOCAL_CONSTANT">
      <value>
        <option name="FOREGROUND" value="e06c75" />
        <option name="FONT_TYPE" value="2" />
      </value>
    </option>
    <option name="GO_PACKAGE_LOCAL_VARIABLE_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="GO_SCOPE_VARIABLE">
      <value>
        <option name="FOREGROUND" value="aeb6c0" />
      </value>
    </option>
    <option name="GO_SEMICOLON">
      <value>
        <option name="FOREGROUND" value="aeb6c0" />
      </value>
    </option>
    <option name="GO_STRING">
      <value>
        <option name="FOREGROUND" value="98c379" />
      </value>
    </option>
    <option name="GO_STRUCT_EXPORTED_MEMBER_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="GO_STRUCT_LOCAL_MEMBER_CALL">
      <value>
        <option name="FOREGROUND" value="57b6c2" />
      </value>
    </option>
    <option name="GO_TYPE_REFERENCE">
      <value>
        <option name="FOREGROUND" value="aeb6c0" />
      </value>
    </option>
  </attributes>
</scheme>`


console.log(tmpl)
