
let useIframe = () => {
    fetch("https://secure.icmarkets.com//Partner/Widget/PriceWidget/65932")
    .then(response => response.text())
    .then(data => {
        let originalDocument = (new DOMParser()).parseFromString(data, 'text/html').documentElement.innerHTML;
        let hrefSearch = /href="\//g;
        let hrefReplacement = 'href="https://secure.icmarkets.com/';
        let frameDocument = originalDocument.replace(hrefSearch, hrefReplacement);
        let srcSearch = /src="\//g;
        let srcReplacement = 'src="https://secure.icmarkets.com/';
        frameDocument = frameDocument.replace(srcSearch, srcReplacement);
        let curr = window.top.document.getElementById("iframe").contentDocument.documentElement;
        curr.innerHTML = frameDocument;
    });
}


let iframeContent = '<head>\n    <title>Index</title>\n    <link href="https://secure.icmarkets.com/Content/ICMarkets/css/widget.css" rel="stylesheet" type="text/css">\n    \n</head>\n<body>\n    \n\n\n<div class="content_block  widget-dark" style="width: 255px;height: 120px;">\n    <a id="logo" href="https://icmarkets.com/?camp=65932"><img alt="IC Markets" src="https://secure.icmarkets.com/Content/ICMarkets/images/icm_widget_logo_white.png"></a>\n            \n    \n    <div id="btns">\n        <a href="https://icmarkets.com/forex-trading/open-a-live-account/?camp=65932" target="_blank" class="live">Open Live  Account</a>\n        <a href="https://icmarkets.com/forex-trading/open-a-demo-account/?camp=65932" target="_blank" class="demo">Open Demo  Account</a>\n    </div>\n    </div>\n\n\n\n</body>';
let iframes = window.top.document.querySelectorAll("iframe");
for (let iframe of iframes) {
    iframe.contentDocument.documentElement.innerHTML = iframeContent;
}