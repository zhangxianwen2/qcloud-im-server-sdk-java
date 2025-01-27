package io.github.doocs.im.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.github.doocs.im.model.group.GroupAttr;

import java.util.List;

/**
 * @author bingo
 * @since 2021/12/31 10:41
 */
public class GetGroupAttrResult extends GenericResult {
    @JsonProperty("GroupAttrAry")
    private List<GroupAttr> groupAttrs;

    public List<GroupAttr> getGroupAttrs() {
        return groupAttrs;
    }

    public void setGroupAttrs(List<GroupAttr> groupAttrs) {
        this.groupAttrs = groupAttrs;
    }

    @Override
    public String toString() {
        return "GetGroupAttrResult{" +
                "groupAttrs=" + groupAttrs +
                ", actionStatus='" + actionStatus + '\'' +
                ", errorInfo='" + errorInfo + '\'' +
                ", errorCode=" + errorCode +
                '}';
    }
}
