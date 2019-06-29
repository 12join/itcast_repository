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
}
