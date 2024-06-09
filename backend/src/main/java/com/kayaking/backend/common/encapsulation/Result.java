package com.kayaking.backend.common.encapsulation;

import com.kayaking.backend.common.enumerate.ApiCodesEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result {

    /**
     * 后端返回前端响应代码
     */
    public static final String CODE_SUCCESS = "200";
    public static final String CODE_AUTH_ERROR = "401";
    public static final String CODE_SYS_ERROR = "500";

    /**
     * 封装数据字段
     */
    private String code;
    private String msg;
    private Object data;


    /**
     * 请求成功，返回null
     * @return null
     */
    public static Result success() {
        return new Result(ApiCodesEnum.SUCCESS_200.getCode(), ApiCodesEnum.SUCCESS_200.getMsg(), null);
    }

    /**
     * 请求成功，返回data
     * @param data 返回数据
     * @return com.kayaking.backend.common.encapsulation.Result
     */
    public static Result success(Object data) {
        return new Result(ApiCodesEnum.SUCCESS_200.getCode(), ApiCodesEnum.SUCCESS_200.getMsg(), data);
    }

    /**
     * 请求成功，返回自定义message
     * @param msg 自定义调用成功message
     * @param data 返回数据
     * @return com.kayaking.backend.common.encapsulation.Result
     */
    public static Result success(String msg, Object data) {
        return new Result(ApiCodesEnum.SUCCESS_200.getCode(), msg, data);
    }

    /**
     * 调用失败，系统错误
     * @return com.kayaking.backend.common.encapsulation.Result
     */
    public static Result error() {
        return new Result(ApiCodesEnum.ERROR_500.getCode(), ApiCodesEnum.ERROR_500.getMsg(), null);
    }

    /**
     * 请求失败，返回error message
     * @param msg 调用失败message
     * @return com.kayaking.backend.common.encapsulation.Result
     */
    public static Result error(String msg) {
        return new Result(ApiCodesEnum.ERROR_500.getCode(), msg, null);
    }

    /**
     * 调用失败，自定义error代码
     * @param code 自定义error代码
     * @param msg 调用失败message
     * @return com.kayaking.backend.common.encapsulation.Result
     */
    public static Result error(String code, String msg) {
        return new Result(code, msg, null);
    }
}
