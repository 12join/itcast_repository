package entity;

import java.io.Serializable;
//结果集的封装
public class Result implements Serializable{
		//操作是否成功
	private Boolean success;
	
	//信息的提示
	private String message;
	

	public Result(Boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}

	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	
}
