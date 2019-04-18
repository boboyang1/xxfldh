var urls = [
    "http://91qq3.com/forum.php?mod=forumdisplay&fid=128&13322037",
    "http://91qq3.com/forum.php?mod=forumdisplay&fid=128&xiaox",
    "http://91qq3.com/forum.php?mod=forumdisplay&fid=128&13322037",
    "http://91qq3.com/forum.php?mod=forumdisplay&fid=128&xiaox",
    "http://91qq3.com/forum.php?mod=forumdisplay&fid=128&13322037",
    "http://91qq3.com/forum.php?mod=forumdisplay&fid=128&xiaox",
    "http://91qq3.com/forum.php?mod=forumdisplay&fid=128&13322037",
    "http://91qq3.com/forum.php?mod=forumdisplay&fid=128&xiaox",
]

window.onload = function () {
    var loadingElem = document.getElementById('loading');
    var loadedElem = document.getElementById('loaded');

    // append logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '91<span>国产论坛</span>'
    loadingElem.appendChild(logoElem.cloneNode(true));
    loadedElem.appendChild(logoElem.cloneNode(true));

    // append loading png
    var loadingPngElem = document.createElement('div');
    loadingPngElem.setAttribute('id' ,'floatingCirclesG');
    loadingPngElem.innerHTML = '<div class="f_circleG" id="frotateG_01"></div>'
        + '<div class="f_circleG" id="frotateG_02"></div>'
        + '<div class="f_circleG" id="frotateG_03"></div>'
        + '<div class="f_circleG" id="frotateG_04"></div>'
        + '<div class="f_circleG" id="frotateG_05"></div>'
        + '<div class="f_circleG" id="frotateG_06"></div>'
        + '<div class="f_circleG" id="frotateG_07"></div>'
        + '<div class="f_circleG" id="frotateG_08"></div>';
    loadingElem.appendChild(loadingPngElem.cloneNode(true));
    loadedElem.appendChild(loadingPngElem.cloneNode(true));

    // append loading notice
    var loadingNoticeElem = document.createElement('h3');
    loadingNoticeElem.innerText = '正在检测当前可使用域名,请稍等...';
    loadingElem.appendChild(loadingNoticeElem);

    // append loaded notice
    var loadedNoticeElem = document.createElement('h3');
    loadedNoticeElem.innerText = '正在跳轉到可訪問域名，請稍等.......';
    loadedElem.appendChild(loadedNoticeElem);

    // append url notice to loaded
    var url = urls[Math.floor(Math.random() * urls.length)];
    var urlNoticeElem = document.createElement('h4');
    urlNoticeElem.innerHTML = '即將跳轉:' + url;
    loadedElem.appendChild(urlNoticeElem);

    // switch loading and loaded delayly
        setTimeout(function () {
            location.href = url;
        }, 2000);
}
