package com.pinyougou.sellergoods.service;

import java.util.List;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;

//品牌接口
public interface BrandService {
	
	//查询所有品牌
	public List<TbBrand> findAll();
	
	//分页查询
	public PageResult findPage(int pageNum,int  pageSize);
	
	//新增
	public void add(TbBrand tbBrand);
	
	//根据id查询
	public TbBrand findOne(Long id);
	
	//修改对象
	public void update(TbBrand tbBrand);
	
	//删除对象
	public void delete(Long[] ids);
	
	//条件分页查询 方法重载
	public PageResult findPage(TbBrand tbBrand,int pageNum,int  pageSize);
}
