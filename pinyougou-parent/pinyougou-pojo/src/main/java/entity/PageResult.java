package entity;

import java.io.Serializable;
import java.util.List;

//返回分页查询的结果进行封装
public class PageResult implements Serializable{
	//总记录数
	private long total;
	//当前记录条数
	private List rows;

	public PageResult(long total, List rows) {
		super();
		this.total = total;
		this.rows = rows;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public List getRows() {
		return rows;
	}
	public void setRows(List rows) {
		this.rows = rows;
	}
	
	
	

}
