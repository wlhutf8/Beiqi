/**
 * App ����
 */
if (typeof(App) == 'undefined') {
    App = {};
}

$.extend(App, {
    msg : {
        successful : "�����ɹ�",
        failure : "����ʧ��",
        confirmBtnText : "ȷ��",
        cancelBtnText : "ȡ��",
        inputError : "����������",
        warnUpdate : "��ѡ��Ҫ�޸ĵļ�¼",
        warnDelete : "��ѡ��Ҫɾ���ļ�¼",
        confirmDelete : "ȷ��Ҫɾ��ѡ��ļ�¼��"
    },
    ajax : {
        emptyresponse : "��Ӧ����Ϊ��",
        status0 : "�޷����������������",
        status1 : "�����˷�������ʧ��",
        status404 : "������",
        status405 : "���󲻱�����",
        status408 : "�������Ⱥ�����ʱ������ʱ",
        status500 : "�������ڲ�����",
        status503 : "���񲻿���",
        statusfail : "����ʧ��, ״̬����",
    },
    date : {
        invalidformat : "���ڸ�ʽ����ȷ"
    },
    window : {
        title : "����"
    }
});
