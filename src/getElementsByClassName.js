  var getElementsByClassName = function (className, element, result) {
    if (!element) {
        element = document.body;
    }

    if (!result) {
        result = [];
    }

    if (element.classList.contains(className)) {
        result.push(element);
    }

    for (var k = 0; k < element.childNodes.length; k++) {
        if (element.childNodes[k].nodeType === 1) {
            getElementsByClassName(className, element.childNodes[k], result);
        }
    }

    return result;
};