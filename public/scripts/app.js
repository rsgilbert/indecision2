"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleRemoveOptions = _this.handleRemoveOptions.bind(_this);
        _this.handleSingleDelete = _this.handleSingleDelete.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleRemoveOptions",
        value: function handleRemoveOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleSingleDelete",
        value: function handleSingleDelete(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (op) {
                        return op !== option;
                    })
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var pick = Math.floor(Math.random() * this.state.options.length + 0);
            alert(this.state.options[pick]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return "Enter valid option";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Option already included";
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var heading = "Indecision App";
            var subheading = "Allow me to decide for you";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subheading: subheading }),
                React.createElement(ChooseOption, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleRemoveOptions: this.handleRemoveOptions,
                    handleSingleDelete: this.handleSingleDelete
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);
// defaults for IndecisionApp


IndecisionApp.defaultProps = {
    options: ["Add default"]

    //stateless functional component
};var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            props.title
        ),
        props.subheading && React.createElement(
            "p",
            null,
            props.subheading
        )
    );
};
// default prop values
Header.defaultProps = {
    title: "Our default"

    //stateless functional component
};var ChooseOption = function ChooseOption(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handlePick, disabled: !props.hasOptions },
            "What should I do"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();
            var new_option = e.target.elements.new_option.value.trim();
            e.target.elements.new_option.value = "";
            var error = this.props.handleAddOption(new_option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error,
                    " "
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.addOption },
                    React.createElement("input", { autoFocus: true, placeholder: "What could I do", type: "text", name: "new_option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "ol",
            null,
            props.options.map(function (op) {
                return React.createElement(Option, {
                    option: op,
                    handleSingleDelete: props.handleSingleDelete
                });
            })
        ),
        React.createElement(
            "button",
            { onClick: props.handleRemoveOptions },
            "Remove all"
        )
    );
};
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "li",
            null,
            "Option: ",
            props.option
        ),
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    return props.handleSingleDelete(props.option);
                } },
            "Remove"
        )
    );
};
var renderApp = function renderApp() {
    return ReactDOM.render(React.createElement(IndecisionApp, { options: ["dig"] }), document.getElementById('app'));
};

renderApp();

//stateless functional component
// faster than class components

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
// const renderApp = () => ReactDOM.render(<User name="Gil" age="1"/>, document.getElementById('app'))
