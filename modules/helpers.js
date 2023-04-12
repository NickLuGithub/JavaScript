function $g(selector) {
    let nodeList = document.querySelectorAll(selector);

    if (nodeList.length == 0) {
        return null;
    }

    return nodeList.length == 1 ? nodeList[0] : nodeList;
}


//Create Element
function $ce(element, text) {
    let el = document.createElement(element);
    //判斷text參數是否合規?
    if (typeof(text) != "undefined" && text != "" && text != null) {
        el.innerHTML = text.trim();
    }

    return el;
}

export { $g, $ce}