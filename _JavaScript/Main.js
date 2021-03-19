// JavaScript source code

let saveFile = () => {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message_content');

    let data =
        '\r Name: ' + name.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' +
        'Message: ' + message.value;

    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = email.value +'.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        console.log(newLink);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}
