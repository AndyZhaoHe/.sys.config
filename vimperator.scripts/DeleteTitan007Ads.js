commands.addUserCommand ("DeleteTitan007Ads", "delete titan007 ads", function (args) {
    let d = tabs.getTab(args-1).linkedBrowser.contentDocument;
    // ���ҵĹ��
    var a = d.getElementsByTagName('div');
    for (i in a){
        if (!a[i]){
            continue;
        }
        var src = a[i].id;
        var b = /^lqdel|r$/.test(src);
        if (b) {
            a[i].remove();
        }
    }

    // �ȷ��ԱߵĹ��
    a = d.getElementsByTagName('span');
    for (i in a){
        if (!a[i]){
            continue;
        }
        var b = /^(left)|(right)_ad$/.test(a[i].id);
        if (b) {
            a[i].remove();
        }
    }

    // �ȷ�֮��Ĺ��
    var a = d.getElementsByTagName('tr');
    for (i in a){
        if (!a[i]){
            continue;
        }
        var b = /^tr_ad\d*$/.test(a[i].id);
        if (b) {
            a[i].remove();
        }
    }
});
/* vim:se sts=4 sw=4 et: */
