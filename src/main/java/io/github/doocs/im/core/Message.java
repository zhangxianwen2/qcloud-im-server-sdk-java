package io.github.doocs.im.core;

import io.github.doocs.im.ImClient;
import io.github.doocs.im.model.request.*;
import io.github.doocs.im.model.response.*;
import io.github.doocs.im.util.HttpUtil;

import java.io.IOException;

/**
 * 单聊消息
 *
 * @author hyh
 * @since 2021/07/29 10:28
 */
public class Message {
    /**
     * 单聊消息服务名
     */
    private static final String SERVICE_NAME = "openim";

    /**
     * 单聊消息相关命令字
     */
    private static final String SEND_MSG_COMMAND = "sendmsg";
    private static final String IMPORT_MSG_COMMAND = "importmsg";
    private static final String BATCH_SEND_MSG_COMMAND = "batchsendmsg";
    private static final String ADMIN_GET_ROAM_MSG_COMMAND = "admin_getroammsg";
    private static final String ADMIN_MSG_WITHDRAW_COMMAND = "admin_msgwithdraw";
    private static final String ADMIN_SET_MSG_READ_COMMAND = "admin_set_msg_read";
    private static final String GET_C2C_UNREAD_MSG_NUM_COMMAND = "get_c2c_unread_msg_num";

    private final ImClient imClient;

    public Message(ImClient imClient) {
        this.imClient = imClient;
    }

    /**
     * 单发单聊消息
     *
     * @param sendMsgRequest 请求参数
     * @return 结果
     * @throws IOException 异常
     */
    public SendMsgResult sendMsg(SendMsgRequest sendMsgRequest) throws IOException {
        String url = imClient.getUrl(SERVICE_NAME, SEND_MSG_COMMAND);
        return HttpUtil.post(url, sendMsgRequest, SendMsgResult.class, imClient.getConfig());
    }

    /**
     * 批量发单聊消息
     *
     * @param batchSendMsgRequest 请求参数
     * @return 结果
     * @throws IOException 异常
     */
    public BatchSendMsgResult batchSendMsg(BatchSendMsgRequest batchSendMsgRequest) throws IOException {
        String url = imClient.getUrl(SERVICE_NAME, BATCH_SEND_MSG_COMMAND);
        return HttpUtil.post(url, batchSendMsgRequest, BatchSendMsgResult.class, imClient.getConfig());
    }

    /**
     * 导入单聊消息
     *
     * @param importMsgRequest 请求参数
     * @return 结果
     * @throws IOException 异常
     */
    public ImportMsgResult importMsg(ImportMsgRequest importMsgRequest) throws IOException {
        String url = imClient.getUrl(SERVICE_NAME, IMPORT_MSG_COMMAND);
        return HttpUtil.post(url, importMsgRequest, ImportMsgResult.class, imClient.getConfig());
    }

    /**
     * 查询单聊消息
     *
     * @param adminGetRoamMsgRequest 请求参数
     * @return 结果
     * @throws IOException 异常
     */
    public AdminRoamMsgResult getRoamMsg(AdminGetRoamMsgRequest adminGetRoamMsgRequest) throws IOException {
        String url = imClient.getUrl(SERVICE_NAME, ADMIN_GET_ROAM_MSG_COMMAND);
        return HttpUtil.post(url, adminGetRoamMsgRequest, AdminRoamMsgResult.class, imClient.getConfig());
    }

    /**
     * 撤回单聊消息
     *
     * @param adminMsgWithdrawRequest 请求参数
     * @return 结果
     * @throws IOException 异常
     */
    public AdminMsgWithdrawResult msgWithdraw(AdminMsgWithdrawRequest adminMsgWithdrawRequest) throws IOException {
        String url = imClient.getUrl(SERVICE_NAME, ADMIN_MSG_WITHDRAW_COMMAND);
        return HttpUtil.post(url, adminMsgWithdrawRequest, AdminMsgWithdrawResult.class, imClient.getConfig());
    }

    /**
     * 设置单聊消息已读
     *
     * @param adminSetMsgReadRequest 请求参数
     * @return 结果
     * @throws IOException 异常
     */
    public AdminSetMsgReadResult setMsgRead(AdminSetMsgReadRequest adminSetMsgReadRequest) throws IOException {
        String url = imClient.getUrl(SERVICE_NAME, ADMIN_SET_MSG_READ_COMMAND);
        return HttpUtil.post(url, adminSetMsgReadRequest, AdminSetMsgReadResult.class, imClient.getConfig());
    }

    /**
     * 查询单聊未读消息计数
     *
     * @param getC2cUnreadMsgRequest 请求参数
     * @return 结果
     * @throws IOException 异常
     */
    public C2cUnreadMsgNumResult getC2cUnreadMsgNum(GetC2cUnreadMsgRequest getC2cUnreadMsgRequest) throws IOException {
        String url = imClient.getUrl(SERVICE_NAME, GET_C2C_UNREAD_MSG_NUM_COMMAND);
        return HttpUtil.post(url, getC2cUnreadMsgRequest, C2cUnreadMsgNumResult.class, imClient.getConfig());
    }
}
