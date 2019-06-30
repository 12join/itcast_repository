package com.pinyougou.sellergoods.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.pinyougou.mapper.TbBrandMapper;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.pojo.TbBrandExample;
import com.pinyougou.pojo.TbBrandExample.Criteria;
import com.pinyougou.sellergoods.service.BrandService;

import entity.PageResult;
@Service
public class BrandServiceImpl implements BrandService {
	
	@Autowired
	private TbBrandMapper brandMapper;
	
	@Override
	public List<TbBrand> findAll() {
		//调用dao层
		return brandMapper.selectByExample(null);
	}
	
	//分页查询
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		Page<TbBrand> page = (Page<TbBrand>) brandMapper.selectByExample(null);
		return new PageResult(page.getTotal(),page.getResult());
	}
	
	//保存
	public void add(TbBrand tbBrand) {
		/*List<TbBrand> tbBrands = brandMapper.selectByExample(null);
		for (TbBrand tbBrandName : tbBrands) {
			if(tbBrandName.getName().equalsIgnoreCase(tbBrand.getName())){
				String string="输入的商品名已存在";
			}
		}*/
		brandMapper.insert(tbBrand);
		
	}
	
	//查询对象
	@Override
	public TbBrand findOne(Long id) {
		return brandMapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(TbBrand tbBrand) {
		// TODO Auto-generated method stub
		brandMapper.updateByPrimaryKey(tbBrand);
	}

	@Override
	public void delete(Long[] ids) {
		// TODO Auto-generated method stub
		for (Long id : ids) {
			brandMapper.deleteByPrimaryKey(id);
		}
		
		
	}

	@Override
	public PageResult findPage(TbBrand tbBrand, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		//创建运营商数据的实体类
		TbBrandExample example=new TbBrandExample();
		Criteria criteria = example.createCriteria();
		if(tbBrand!=null) {
			if(tbBrand.getName()!=null&&tbBrand.getName().length()>0) {
				criteria.andNameLike("%"+tbBrand.getName()+"%");
			}
			if(tbBrand.getFirstChar()!=null&&tbBrand.getFirstChar().length()>0) {
				criteria.andFirstCharLike("%"+tbBrand.getFirstChar()+"%");
			}
		}
		Page<TbBrand> page = (Page<TbBrand>) brandMapper.selectByExample(example);
		return new PageResult(page.getTotal(),page.getResult());
	}

}
