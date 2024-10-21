const paragraphText = `Protect your digital world with these cyber security essentials:

Use strong, unique passwords and enable two-factor authentication.
Keep software and operating systems up-to-date.
Be cautious with email attachments, links, and public Wi-Fi.
Use reputable antivirus software and a virtual private network (VPN).
Back up important data regularly.
Monitor account activity and report suspicious behavior.

Stay safe online and safeguard your personal and financial information.

Additional Tips:

Use encryption for sensitive data.
Disable unnecessary features and plugins.
Use secure payment methods online.
Regularly scan for malware.

Stay Cyber Safe!`;

let index = 0;

function typeParagraph() {
    if (index < paragraphText.length) {
        document.getElementById('paragraph').innerHTML += paragraphText.charAt(index) === '\n' ? '<br>' : paragraphText.charAt(index);
        index++;
        setTimeout(typeParagraph, 50);
    }
}

window.onload = typeParagraph;
