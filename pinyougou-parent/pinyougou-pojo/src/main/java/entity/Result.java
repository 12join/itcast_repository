package entity;

import java.io.Serializable;
//结果集的封装
public class Result implements Serializable{
		//操作是否成功
	private Boolean sccess;
	
	//信息的提示
	private String message;
	

	public Result(Boolean sccess, String message) {
		super();
		this.sccess = sccess;
		this.message = message;
	}

	public Boolean getSccess() {
		return sccess;
	}

	public void setSccess(Boolean sccess) {
		this.sccess = sccess;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
