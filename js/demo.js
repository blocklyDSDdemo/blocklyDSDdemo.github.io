setInterval(udpateFunc, 1000);

function saveFunc() {
    var pyCode = Blockly.Python.workspaceToCode(workspace);
    var name = document.getElementById("name-box").value;
    var num = document.getElementById("num-box").value;
    saveFile(pyCode, name + "-" + num + "-blockly.py", "text/python");
}

// function loadFunc() {
//     workspace.clear();
//     var xml_text = document.getElementById('xmlOut').innerText;
//     var xml = Blockly.Xml.textToDom(xml_text);
//     Blockly.Xml.domToWorkspace(xml, workspace);
// }

function testFunc() {
    var jCode = Blockly.JavaScript.workspaceToCode(workspace);
    eval(jCode);
}

function udpateFunc() {
    var pyCode = Blockly.Python.workspaceToCode(workspace);
    document.getElementById("pyOut").innerText = pyCode;
}

function clearFunc() {
    workspace.clear();
}

function saveFile(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"), url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
