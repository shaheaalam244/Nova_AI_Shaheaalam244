const formatContentToHTML = (content) => {
    const lines = content.split('\n').filter(line => line.trim() !== '');

    const formatLine = (line) => {
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        if (line.startsWith('## ')) {
            return `<h2>${line.substring(3)}</h2>`;
        } else if (line.startsWith('### ')) {
            return `<h3>${line.substring(4)}</h3>`;
        } else if (line.startsWith('#### ')) {
            return `<h4>${line.substring(5)}</h4>`;
        } else if (line.startsWith('```')) {
            return line.includes('</code></pre>') ? '' : '<pre><code>';
        } else if (line.endsWith('```')) {
            return '</code></pre>';
        } else if (line.startsWith('* ')) {
            return `<li>${line.substring(2)}</li>`;
        } else if (line.match(/^\d+\. /)) {
            return `<li>${line.replace(/^\d+\. /, '')}</li>`;
        } else if (line.startsWith('- ')) {
            return `<li>${line.substring(2)}</li>`;
        } else if (line.startsWith('> ')) {
            return `<blockquote>${line.substring(2)}</blockquote>`;
        } else {
            return `<p>${line}</p>`;
        }
    };

    let htmlContent = '';
    let isList = false;
    let isOrderedList = false;
    let isCodeBlock = false;

    lines.forEach(line => {
        if (line.startsWith('```')) {
            isCodeBlock = !isCodeBlock;
        }
        if (isCodeBlock) {
            htmlContent += `${line}\n`;
            return;
        }

        if (line.startsWith('* ')) {
            if (!isList) {
                htmlContent += '<ul>';
                isList = true;
            }
            htmlContent += formatLine(line);
        } else if (line.match(/^\d+\. /)) {
            if (!isOrderedList) {
                htmlContent += '<ol>';
                isOrderedList = true;
            }
            htmlContent += formatLine(line);
        } else {
            if (isList) {
                htmlContent += '</ul>';
                isList = false;
            }
            if (isOrderedList) {
                htmlContent += '</ol>';
                isOrderedList = false;
            }
            htmlContent += formatLine(line);
        }
    });

    if (isList) htmlContent += '</ul>';
    if (isOrderedList) htmlContent += '</ol>';

    return htmlContent;
};

export default formatContentToHTML;
