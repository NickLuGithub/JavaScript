function $g(selector) {
    let nodeList = document.querySelectorAll(selector);

    if (nodeList.length == 0) {
        return null;
    }

    return nodeList.length == 1 ? nodeList[0] : nodeList;
}

export { $g }